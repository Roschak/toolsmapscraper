import { WebsiteStatus } from '@prospecthunter/shared';

export interface WebsiteAnalysisResult {
  websiteStatus: WebsiteStatus;
  websiteUrl?: string;
  websiteConfidence: number;
  isOpportunity: boolean;
  socialLinks?: Record<string, string>;
  notes?: string;
}

export class WebsiteDiscoveryEngine {
  /**
   * Analyze website presence, social profiles, and detect web development sales opportunities
   */
  static analyze(params: {
    rawWebsite?: string;
    businessName: string;
    socialLinks?: Record<string, string>;
  }): WebsiteAnalysisResult {
    const raw = params.rawWebsite?.trim();

    // 1. If explicit website URL exists
    if (raw && raw.length > 5) {
      let formatted = raw;
      if (!/^https?:\/\//i.test(formatted)) {
        formatted = `https://${formatted}`;
      }

      // Check if the "website" is actually a social media profile
      const isInstagram = /instagram\.com/i.test(formatted);
      const isFacebook = /facebook\.com/i.test(formatted);
      const isTiktok = /tiktok\.com/i.test(formatted);
      const isWhatsapp = /wa\.me|api\.whatsapp\.com/i.test(formatted);

      if (isInstagram || isFacebook || isTiktok || isWhatsapp) {
        return {
          websiteStatus: 'SOCIAL_ONLY',
          websiteUrl: undefined,
          websiteConfidence: 0.9,
          isOpportunity: true,
          socialLinks: {
            ...params.socialLinks,
            primary: formatted,
          },
          notes: 'Business relies solely on social media or WhatsApp link. Prime prospect for custom website & demo.'
        };
      }

      return {
        websiteStatus: 'WEBSITE_LISTED',
        websiteUrl: formatted,
        websiteConfidence: 0.95,
        isOpportunity: false,
        notes: 'Active listed website.'
      };
    }

    // 2. If social links exist but no website
    if (params.socialLinks && Object.keys(params.socialLinks).length > 0) {
      return {
        websiteStatus: 'SOCIAL_ONLY',
        websiteUrl: undefined,
        websiteConfidence: 0.85,
        isOpportunity: true,
        socialLinks: params.socialLinks,
        notes: 'Social media profile verified, but no canonical independent website.'
      };
    }

    // 3. Completely no website listed
    return {
      websiteStatus: 'NO_WEBSITE_LISTED',
      websiteUrl: undefined,
      websiteConfidence: 0.99,
      isOpportunity: true,
      notes: 'No website detected anywhere in registry. High priority web design / digital presence opportunity.'
    };
  }
}
