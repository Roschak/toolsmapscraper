export interface ClassificationResult {
  industry: string;
  subCategory: string;
  classificationConfidence: number;
  businessModel: 'B2B' | 'B2C' | 'B2B2C' | 'D2C' | 'HYBRID';
  businessModelConfidence: number;
}

export class ClassificationEngine {
  private static industryTaxonomy: Record<string, { industry: string; defaultModel: 'B2B' | 'B2C' | 'D2C' | 'HYBRID'; keywords: string[] }> = {
    'Food & Beverage': {
      industry: 'Food & Hospitality',
      defaultModel: 'B2C',
      keywords: ['restaurant', 'cafe', 'bistro', 'diner', 'eatery', 'coffee', 'bakery', 'bar', 'food', 'warung', 'catering', 'kitchen', 'grill', 'pizza'],
    },
    'Healthcare & Dental': {
      industry: 'Healthcare & Wellness',
      defaultModel: 'B2C',
      keywords: ['dental', 'clinic', 'dentist', 'doctor', 'hospital', 'orthodontics', 'medical', 'therapy', 'pharmacy', 'health', 'wellness', 'physiotherapy'],
    },
    'Legal & Professional': {
      industry: 'Professional Services',
      defaultModel: 'B2B',
      keywords: ['law', 'legal', 'advocate', 'attorney', 'notary', 'consultant', 'accounting', 'tax', 'audit', 'advisory'],
    },
    'Automotive Services': {
      industry: 'Automotive & Transport',
      defaultModel: 'B2C',
      keywords: ['auto', 'car', 'motor', 'workshop', 'mechanic', 'tire', 'garage', 'vehicle', 'repair', 'detailing'],
    },
    'Lodging & Hospitality': {
      industry: 'Travel & Lodging',
      defaultModel: 'B2C',
      keywords: ['hotel', 'resort', 'inn', 'suites', 'motel', 'hostel', 'guest house', 'villa', 'stay'],
    },
    'Technology & Digital': {
      industry: 'Technology & Software',
      defaultModel: 'B2B',
      keywords: ['software', 'tech', 'digital', 'agency', 'solutions', 'it', 'cloud', 'cyber', 'data', 'consulting', 'media', 'creative'],
    },
    'Retail & Commerce': {
      industry: 'Retail & Commerce',
      defaultModel: 'B2C',
      keywords: ['store', 'shop', 'market', 'boutique', 'fashion', 'clothing', 'hardware', 'retail', 'mart'],
    },
    'Construction & Real Estate': {
      industry: 'Real Estate & Infrastructure',
      defaultModel: 'HYBRID',
      keywords: ['property', 'realty', 'real estate', 'contractor', 'builder', 'architecture', 'interior', 'construction'],
    },
  };

  /**
   * Classify a business based on name, raw categories, and description
   */
  static classify(businessName: string, rawCategories: string[] = []): ClassificationResult {
    const combinedText = `${businessName} ${rawCategories.join(' ')}`.toLowerCase();

    let bestMatchKey = 'Retail & Commerce';
    let highestScore = 0;

    for (const [categoryKey, config] of Object.entries(this.industryTaxonomy)) {
      let score = 0;
      for (const kw of config.keywords) {
        if (combinedText.includes(kw)) {
          score += 2;
        }
      }
      if (score > highestScore) {
        highestScore = score;
        bestMatchKey = categoryKey;
      }
    }

    const matchedConfig = this.industryTaxonomy[bestMatchKey];
    const confidence = highestScore > 0 ? Math.min(0.95, 0.65 + highestScore * 0.08) : 0.5;

    // Detect B2B cues
    let finalModel = matchedConfig.defaultModel;
    if (combinedText.includes('corporate') || combinedText.includes('wholesale') || combinedText.includes('supplier') || combinedText.includes('distributor')) {
      finalModel = 'B2B';
    }

    return {
      industry: matchedConfig.industry,
      subCategory: bestMatchKey,
      classificationConfidence: parseFloat(confidence.toFixed(2)),
      businessModel: finalModel,
      businessModelConfidence: 0.88,
    };
  }
}
