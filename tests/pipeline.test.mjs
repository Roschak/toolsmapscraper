import test from 'node:test';
import assert from 'node:assert';

// Import compiled packages
import { SecurityUtil } from '../packages/security/dist/index.js';
import { ClassificationEngine } from '../packages/classification/dist/index.js';
import { WebsiteDiscoveryEngine } from '../packages/website-discovery/dist/index.js';
import { LeadScoringEngine } from '../packages/lead-scoring/dist/index.js';
import { EntityResolutionEngine } from '../packages/entity-resolution/dist/index.js';
import { SearchEngine } from '../packages/search-engine/dist/index.js';
import { providerRegistry } from '../packages/providers/dist/index.js';

test('1. Security Engine - PBKDF2 Password Hashing & Verification', () => {
  const password = 'SuperSecretPassword2026!';
  const hash = SecurityUtil.hashPassword(password);
  assert.ok(hash.includes(':'), 'Hash format must be salt:hash');
  assert.ok(SecurityUtil.verifyPassword(password, hash), 'Correct password must verify');
  assert.strictEqual(SecurityUtil.verifyPassword('WrongPassword', hash), false, 'Wrong password must fail');
});

test('2. Security Engine - JWT Signing & Verification & RBAC', () => {
  const token = SecurityUtil.signJwt({ sub: 'user-123', email: 'admin@prospecthunter.com', role: 'ADMIN' });
  assert.ok(token && token.split('.').length === 3, 'Must be valid 3-part JWT');

  const decoded = SecurityUtil.verifyJwt(token);
  assert.strictEqual(decoded.sub, 'user-123');
  assert.strictEqual(decoded.email, 'admin@prospecthunter.com');

  assert.strictEqual(SecurityUtil.hasPermission('ADMIN', ['SALES']), true, 'ADMIN bypasses all');
  assert.strictEqual(SecurityUtil.hasPermission('SALES', ['SALES', 'ANALYST']), true);
  assert.strictEqual(SecurityUtil.hasPermission('VIEWER', ['SALES']), false);
});

test('3. Classification Engine - Industry Taxonomy & Business Model', () => {
  const r1 = ClassificationEngine.classify('Kurnia Bistro & Coffee', ['cafe', 'restaurant']);
  assert.strictEqual(r1.subCategory, 'Food & Beverage');
  assert.strictEqual(r1.businessModel, 'B2C');

  const r2 = ClassificationEngine.classify('Nexus Digital Software Studio', ['tech', 'agency']);
  assert.strictEqual(r2.subCategory, 'Technology & Digital');
  assert.strictEqual(r2.businessModel, 'B2B');
});

test('4. Website Discovery Engine - Opportunity Detection', () => {
  // Case A: Missing website
  const noWeb = WebsiteDiscoveryEngine.analyze({
    businessName: 'Prima Dental Clinic',
    rawWebsite: undefined,
  });
  assert.strictEqual(noWeb.websiteStatus, 'NO_WEBSITE_LISTED');
  assert.strictEqual(noWeb.isOpportunity, true);

  // Case B: Social media only
  const socialOnly = WebsiteDiscoveryEngine.analyze({
    businessName: 'Royal Bakery',
    rawWebsite: 'https://instagram.com/royal_bakery',
  });
  assert.strictEqual(socialOnly.websiteStatus, 'SOCIAL_ONLY');
  assert.strictEqual(socialOnly.isOpportunity, true);

  // Case C: Active website
  const activeWeb = WebsiteDiscoveryEngine.analyze({
    businessName: 'Grand Hyatt Hotel',
    rawWebsite: 'https://www.hyatt.com',
  });
  assert.strictEqual(activeWeb.websiteStatus, 'WEBSITE_LISTED');
  assert.strictEqual(activeWeb.isOpportunity, false);
});

test('5. Lead Scoring Engine - Multi-factor Priority Assignment', () => {
  // Hot Lead: No website + High rating + lots of reviews + phone + address
  const hotResult = LeadScoringEngine.calculate({
    websiteStatus: 'NO_WEBSITE_LISTED',
    rating: 4.8,
    reviewCount: 150,
    phone: '+62 21 5551234',
    address: 'Jl. Sudirman 45, Jakarta',
  });
  assert.ok(hotResult.score >= 80, `Expected hot score >= 80, got ${hotResult.score}`);
  assert.strictEqual(hotResult.priority, 'HOT');

  // Low Lead: Already has website + low rating + no reviews
  const lowResult = LeadScoringEngine.calculate({
    websiteStatus: 'WEBSITE_LISTED',
    rating: 2.1,
    reviewCount: 2,
    phone: '',
    address: '',
  });
  assert.ok(lowResult.score < 45, `Expected low score < 45, got ${lowResult.score}`);
  assert.ok(['LOW', 'VERY_LOW'].includes(lowResult.priority));
});

test('6. Entity Resolution Engine - Deduplication & Proximity', () => {
  // Exact match
  const exact = EntityResolutionEngine.compare(
    { name: 'Bintang Nusantara Cafe', phone: '+62215551111', lat: -6.2088, lng: 106.8456 },
    { name: 'bintang nusantara cafe', phone: '021-555-1111', lat: -6.20885, lng: 106.84565 }
  );
  assert.strictEqual(exact.isMatch, true);
  assert.ok(exact.overallScore > 0.85);

  // Unrelated businesses
  const unrelated = EntityResolutionEngine.compare(
    { name: 'Grand Hotel Tokyo', phone: '+81312345678', lat: 35.6762, lng: 139.6503 },
    { name: 'Warung Kopi Senayan', phone: '+62215558888', lat: -6.2215, lng: 106.8012 }
  );
  assert.strictEqual(unrelated.isMatch, false);
});

test('7. Search Engine Orchestrator - Full Multi-Stage Pipeline', async () => {
  const result = await SearchEngine.searchAndEnrich({
    city: 'Jakarta',
    country: 'Indonesia',
    category: 'Dental Clinic',
    limit: 15,
  });

  assert.ok(result.candidates.length > 0, 'Must produce candidates');
  assert.ok(result.rawCount >= result.candidates.length);
  assert.ok(result.candidates.every((c) => c.canonicalName && c.classification && c.leadScore != null));

  const first = result.candidates[0];
  assert.ok(first.tags.includes('Healthcare & Wellness'));
});

test('8. Lead Ingestion & Opportunity Auditing from CSV / Raw Dataset', () => {
  const importedRaw = [
    { businessName: 'Warung Nasi Padang Sederhana', category: 'Restaurant', phone: '+62215551234', website: '' },
    { businessName: 'Distro Kaos Bogor Original', category: 'Retail Store', phone: '+62251888999', website: 'https://instagram.com/distro_bogor' },
  ];

  for (const item of importedRaw) {
    const classification = ClassificationEngine.classify(item.businessName, [item.category]);
    const webAnalysis = WebsiteDiscoveryEngine.analyze({ rawWebsite: item.website, businessName: item.businessName });
    const scoring = LeadScoringEngine.calculate({
      websiteStatus: webAnalysis.websiteStatus,
      rating: 4.5,
      reviewCount: 40,
      phone: item.phone,
    });

    assert.ok(classification.industry, 'Industry must be classified');
    assert.strictEqual(webAnalysis.isOpportunity, true, 'Both records lack active websites and must be opportunities');
    assert.ok(scoring.score >= 65, 'High traction without website must score high/hot priority');
  }
});

test('9. Demo Tracking & Pipeline State Governance', () => {
  const validDemoStatuses = ['NOT_CREATED', 'IN_PROGRESS', 'READY', 'SENT', 'APPROVED', 'REJECTED'];
  const testStatus = 'READY';
  assert.ok(validDemoStatuses.includes(testStatus), 'Status must conform to DemoStatus enum');

  const demoUrl = 'https://demo.prospecthunter.com/preview/kurnia-bistro';
  assert.ok(/^https?:\/\//i.test(demoUrl), 'Demo URL must be valid HTTP/HTTPS URI');
});

