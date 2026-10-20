import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../packages/database/src/generated/client/index.js';
import { SearchEngine } from '../packages/search-engine/src/index.ts';

const connectionString =
  process.env.DATABASE_URL ||
  'postgresql://postgres:password@localhost:5433/prospecthunter?schema=public';

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function seed() {
  console.log('Seeding initial ProspectHunter data...');

  // Create default admin user if not exists
  const existingUser = await prisma.user.findFirst();
  if (!existingUser) {
    await prisma.user.create({
      data: {
        email: 'admin@prospecthunter.io',
        name: 'Alex Rivera (Lead Partner)',
        passwordHash: '$2b$10$EpRnTzVlqHNP0.fUbXUwSOyGQV3k76zfvXN2qfBwE.V6bN8r2vXW.', // bcrypt for 'admin123'
        role: 'ADMIN',
      },
    });
    console.log('Default admin user created.');
  }

  // Create default system settings
  const settingsCount = await prisma.systemSetting.count();
  if (settingsCount === 0) {
    const defaultSettings = [
      { key: 'SEARCH_DAILY_LIMIT', value: '50000', description: 'Daily search query limit' },
      { key: 'SEARCH_MONTHLY_LIMIT', value: '1000000', description: 'Monthly search query limit' },
      { key: 'MOCK_MODE', value: 'true', description: 'Enable multi-source simulator when API keys are absent' },
      { key: 'DEFAULT_COUNTRY', value: 'Indonesia', description: 'Default discovery country' },
      { key: 'AUTO_ENRICH_LEADS', value: 'true', description: 'Auto enrich leads with opportunity scoring' },
      { key: 'EXPORT_RETENTION_DAYS', value: '30', description: 'Days to retain generated export files' },
    ];
    for (const s of defaultSettings) {
      await prisma.systemSetting.upsert({
        where: { key: s.key },
        create: s,
        update: s,
      });
    }
    console.log('Default settings seeded.');
  }

  // Check if prospects already exist
  const count = await prisma.prospect.count();
  if (count < 10) {
    console.log('Generating seed prospects across key markets...');
    const searchBatches = [
      { city: 'Jakarta', country: 'Indonesia', category: 'Restaurant', query: 'Bistro & Specialty Dining' },
      { city: 'Bandung', country: 'Indonesia', category: 'Clothing', query: 'Distro & Fashion Boutique' },
      { city: 'Bogor', country: 'Indonesia', category: 'Auto', query: 'Auto Detailing & Workshop' },
      { city: 'Bali', country: 'Indonesia', category: 'Hospitality', query: 'Villa & Boutique Resort' },
      { city: 'Surabaya', country: 'Indonesia', category: 'Dental', query: 'Dental Aesthetic Clinic' },
      { city: 'Singapore', country: 'Singapore', category: 'Legal', query: 'Corporate Advisory Firm' },
      { city: 'Tokyo', country: 'Japan', category: 'Restaurant', query: 'Specialty Ramen & Teppanyaki' },
      { city: 'Melbourne', country: 'Australia', category: 'Tech', query: 'Digital Creative Studio' },
    ];

    for (const batch of searchBatches) {
      console.log(`Processing search batch for ${batch.city}...`);
      const job = await prisma.searchJob.create({
        data: {
          name: `Market Scan: ${batch.category} in ${batch.city}`,
          country: batch.country,
          city: batch.city,
          category: batch.category,
          query: batch.query,
          scope: 'CITY',
          provider: 'MOCK_PROVIDER',
          status: 'COMPLETED',
          progress: 100,
          startedAt: new Date(Date.now() - 3600000 * 2),
          completedAt: new Date(Date.now() - 3600000 * 1.5),
        },
      });

      const enrichment = await SearchEngine.searchAndEnrich({
        city: batch.city,
        country: batch.country,
        category: batch.category,
        query: batch.query,
        limit: 8,
      });

      let saved = 0;
      for (const candidate of enrichment.candidates) {
        let businessEntity = await prisma.businessEntity.findFirst({
          where: { canonicalName: candidate.canonicalName },
        });

        if (!businessEntity) {
          businessEntity = await prisma.businessEntity.create({
            data: {
              canonicalName: candidate.canonicalName,
              country: candidate.country,
              city: candidate.city,
              address: candidate.address,
              latitude: candidate.latitude,
              longitude: candidate.longitude,
              categories: candidate.raw.categories,
              primaryCategory: candidate.classification,
              businessModel: candidate.businessModel,
              phone: candidate.phone,
              website: candidate.websiteUrl,
              rating: candidate.rating,
              reviewCount: candidate.reviewCount,
              businessStatus: candidate.businessStatus,
              sourceProviders: [candidate.sourceType],
              dataConfidence: 'HIGH',
            },
          });
        }

        const prospect = await prisma.prospect.create({
          data: {
            businessEntityId: businessEntity.id,
            searchJobId: job.id,
            sourceType: candidate.sourceType,
            businessName: candidate.canonicalName,
            classification: candidate.classification,
            classificationConfidence: candidate.classificationConfidence,
            businessModel: candidate.businessModel,
            businessModelConfidence: candidate.businessModelConfidence,
            websiteStatus: candidate.websiteStatus,
            websiteUrl: candidate.websiteUrl,
            websiteConfidence: candidate.websiteConfidence,
            phone: candidate.phone,
            country: candidate.country,
            region: candidate.region,
            city: candidate.city,
            address: candidate.address,
            latitude: candidate.latitude,
            longitude: candidate.longitude,
            rating: candidate.rating,
            reviewCount: candidate.reviewCount,
            businessStatus: candidate.businessStatus,
            leadScore: candidate.leadScore,
            priority: candidate.priority,
            leadStatus: candidate.priority === 'HOT' ? 'RESEARCHED' : 'NEW',
            notes: candidate.notes,
            tags: candidate.tags,
          },
        });

        // Add a sample note
        if (candidate.leadScore > 65) {
          await prisma.leadNote.create({
            data: {
              prospectId: prospect.id,
              authorName: 'Alex Rivera',
              content: `High priority prospect found with ${candidate.reviewCount} reviews (${candidate.rating} stars) but no official corporate website found. Prime candidate for custom digital storefront presentation.`,
            },
          });
        }
        saved++;
      }

      await prisma.searchJob.update({
        where: { id: job.id },
        data: {
          resultCount: saved,
          websiteOpportunityCount: enrichment.websiteOpportunityCount,
          websiteListedCount: saved - enrichment.websiteOpportunityCount,
          totalTasks: saved,
          completedTasks: saved,
        },
      });
    }
  }

  const finalProspects = await prisma.prospect.count();
  const finalJobs = await prisma.searchJob.count();
  console.log(`Seeding completed! Prospects: ${finalProspects}, Search Jobs: ${finalJobs}`);
}

seed()
  .catch((e) => {
    console.error('Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
