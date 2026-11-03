import { providerRegistry, ProviderSearchParams, RawBusinessRecord } from '@prospecthunter/providers';
import { ClassificationEngine } from '@prospecthunter/classification';
import { WebsiteDiscoveryEngine } from '@prospecthunter/website-discovery';
import { LeadScoringEngine } from '@prospecthunter/lead-scoring';
import { EntityResolutionEngine } from '@prospecthunter/entity-resolution';
import { SourceType } from '@prospecthunter/shared';

export interface EnrichedProspectCandidate {
  raw: RawBusinessRecord;
  canonicalName: string;
  sourceType: SourceType;
  classification: string;
  classificationConfidence: number;
  businessModel: string;
  businessModelConfidence: number;
  businessDescription: string;
  operationalSummary: string;
  websiteStatus: any;
  websiteUrl?: string;
  websiteConfidence: number;
  phone?: string;
  country?: string;
  region?: string;
  city?: string;
  address?: string;
  latitude?: number;
  longitude?: number;
  rating?: number;
  reviewCount?: number;
  businessStatus?: string;
  leadScore: number;
  priority: any;
  leadStatus: any;
  notes?: string;
  tags: string[];
  customFields?: any;
}

export class SearchEngine {
  /**
   * Execute search across providers and run complete pipeline:
   * 1. Multi-provider dispatch
   * 2. Within-batch entity deduplication
   * 3. Website presence & opportunity discovery
   * 4. Industry & detailed operational classification & business description
   * 5. Commercial lead scoring & priority assignment
   */
  static async searchAndEnrich(
    params: ProviderSearchParams,
    providerName?: string
  ): Promise<{
    candidates: EnrichedProspectCandidate[];
    rawCount: number;
    duplicateCount: number;
    websiteOpportunityCount: number;
  }> {
    const rawRecords = await providerRegistry.dispatchSearch(params, providerName);

    // 1. Deduplicate within the incoming batch
    const uniqueRecords: RawBusinessRecord[] = [];
    let duplicateCount = 0;

    for (const record of rawRecords) {
      const isDupe = uniqueRecords.some((existing) => {
        const comp = EntityResolutionEngine.compare(
          { name: record.businessName, phone: record.phone, lat: record.latitude, lng: record.longitude },
          { name: existing.businessName, phone: existing.phone, lat: existing.latitude, lng: existing.longitude }
        );
        return comp.isMatch;
      });

      if (isDupe) {
        duplicateCount++;
      } else {
        uniqueRecords.push(record);
      }
    }

    // 2. Enrich each record through website discovery, classification, and scoring
    let websiteOpportunityCount = 0;
    const candidates: EnrichedProspectCandidate[] = [];

    for (const record of uniqueRecords) {
      // Website Discovery
      const webAnalysis = WebsiteDiscoveryEngine.analyze({
        rawWebsite: record.website,
        businessName: record.businessName,
        socialLinks: record.socialLinks,
      });

      if (webAnalysis.isOpportunity) {
        websiteOpportunityCount++;
      }

      // Classification & Operational Explanation
      const classification = ClassificationEngine.classify({
        businessName: record.businessName,
        rawCategories: record.categories,
        address: record.address,
        city: record.city || params.city,
        region: record.region || params.region,
        country: record.country || params.country,
        websiteStatus: webAnalysis.websiteStatus,
      });

      // Lead Scoring
      const scoring = LeadScoringEngine.calculate({
        websiteStatus: webAnalysis.websiteStatus,
        rating: record.rating,
        reviewCount: record.reviewCount,
        phone: record.phone,
        address: record.address,
        businessStatus: record.businessStatus,
      });

      const tags: string[] = [classification.industry];
      if (classification.sector) {
        tags.push(classification.subCategory);
      }
      if (webAnalysis.isOpportunity) {
        tags.push('NO_WEBSITE_OPPORTUNITY');
      }
      if (scoring.priority === 'HOT') {
        tags.push('HOT_LEAD');
      }

      candidates.push({
        raw: record,
        canonicalName: record.businessName.trim(),
        sourceType: record.sourceType,
        classification: classification.subCategory,
        classificationConfidence: classification.classificationConfidence,
        businessModel: classification.businessModel,
        businessModelConfidence: classification.businessModelConfidence,
        businessDescription: classification.businessDescription,
        operationalSummary: classification.operationalFocus,
        websiteStatus: webAnalysis.websiteStatus,
        websiteUrl: webAnalysis.websiteUrl,
        websiteConfidence: webAnalysis.websiteConfidence,
        phone: record.phone,
        country: record.country || params.country,
        region: record.region || params.region,
        city: record.city || params.city,
        address: record.address,
        latitude: record.latitude,
        longitude: record.longitude,
        rating: record.rating,
        reviewCount: record.reviewCount,
        businessStatus: record.businessStatus,
        leadScore: scoring.score,
        priority: scoring.priority,
        leadStatus: 'NEW',
        notes: classification.businessDescription,
        tags,
        customFields: {
          sector: classification.sector,
          operationalFocus: classification.operationalFocus,
          operatingLocation: classification.operatingLocation,
          businessDescription: classification.businessDescription,
          opportunityExplanation: classification.opportunityExplanation,
        },
      });
    }

    return {
      candidates,
      rawCount: rawRecords.length,
      duplicateCount,
      websiteOpportunityCount,
    };
  }
}

// Runtime values
export const EnrichedProspectCandidate = {};
