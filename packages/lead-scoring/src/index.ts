import { LeadPriority, WebsiteStatus } from '@prospecthunter/shared';

export interface LeadScoreResult {
  score: number;
  priority: LeadPriority;
  breakdown: {
    websiteOpportunity: number;
    ratingFactor: number;
    reviewsFactor: number;
    contactability: number;
    locationFactor: number;
  };
}

export class LeadScoringEngine {
  /**
   * Calculate commercial lead score and priority tier
   */
  static calculate(params: {
    websiteStatus: WebsiteStatus;
    rating?: number | null;
    reviewCount?: number | null;
    phone?: string | null;
    address?: string | null;
    businessStatus?: string | null;
  }): LeadScoreResult {
    let score = 0;
    const breakdown = {
      websiteOpportunity: 0,
      ratingFactor: 0,
      reviewsFactor: 0,
      contactability: 0,
      locationFactor: 0,
    };

    // 1. Website Opportunity Factor (up to 35 points)
    if (params.websiteStatus === 'NO_WEBSITE_LISTED') {
      breakdown.websiteOpportunity = 35;
    } else if (params.websiteStatus === 'SOCIAL_ONLY') {
      breakdown.websiteOpportunity = 30;
    } else if (params.websiteStatus === 'WEBSITE_UNCERTAIN' || params.websiteStatus === 'POSSIBLE_WEBSITE') {
      breakdown.websiteOpportunity = 20;
    } else {
      breakdown.websiteOpportunity = 5; // Has website, lower sales priority for new website development
    }

    // 2. Rating Quality Factor (up to 20 points)
    const rating = params.rating || 0;
    if (rating >= 4.5) {
      breakdown.ratingFactor = 20;
    } else if (rating >= 4.0) {
      breakdown.ratingFactor = 16;
    } else if (rating >= 3.5) {
      breakdown.ratingFactor = 10;
    } else if (rating > 0) {
      breakdown.ratingFactor = 5;
    }

    // 3. Review Volume / Customer Traction (up to 15 points)
    const reviews = params.reviewCount || 0;
    if (reviews >= 100) {
      breakdown.reviewsFactor = 15;
    } else if (reviews >= 30) {
      breakdown.reviewsFactor = 12;
    } else if (reviews >= 10) {
      breakdown.reviewsFactor = 8;
    } else if (reviews > 0) {
      breakdown.reviewsFactor = 4;
    }

    // 4. Contactability Factor (up to 15 points)
    if (params.phone && params.phone.replace(/[^0-9]/g, '').length >= 7) {
      breakdown.contactability = 15;
    }

    // 5. Storefront & Location Factor (up to 15 points)
    if (params.address && params.address.length > 5) {
      breakdown.locationFactor = 15;
    }

    score = breakdown.websiteOpportunity + breakdown.ratingFactor + breakdown.reviewsFactor + breakdown.contactability + breakdown.locationFactor;

    // Determine Priority Tier
    let priority: LeadPriority = 'LOW';
    if (score >= 80) {
      priority = 'HOT';
    } else if (score >= 65) {
      priority = 'HIGH';
    } else if (score >= 45) {
      priority = 'MEDIUM';
    } else if (score >= 25) {
      priority = 'LOW';
    } else {
      priority = 'VERY_LOW';
    }

    return {
      score: Math.min(100, Math.max(0, score)),
      priority,
      breakdown,
    };
  }
}
