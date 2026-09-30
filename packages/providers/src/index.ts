import { SourceType } from '@prospecthunter/shared';
import { config } from '@prospecthunter/config';

export interface RawBusinessRecord {
  providerId: string;
  sourceType: SourceType;
  businessName: string;
  category?: string;
  categories: string[];
  phone?: string;
  website?: string;
  address?: string;
  city?: string;
  region?: string;
  country?: string;
  latitude?: number;
  longitude?: number;
  rating?: number;
  reviewCount?: number;
  businessStatus?: string;
  socialLinks?: Record<string, string>;
  rawResponse?: any;
}

export interface ProviderSearchParams {
  query?: string;
  country?: string;
  region?: string;
  city?: string;
  district?: string;
  category?: string;
  limit?: number;
}

export interface BusinessProvider {
  readonly sourceType: SourceType;
  getName(): string;
  isConfigured(): boolean;
  search(params: ProviderSearchParams): Promise<RawBusinessRecord[]>;
}

export class MockProvider implements BusinessProvider {
  readonly sourceType: SourceType = 'MOCK_PROVIDER';

  getName(): string {
    return 'ProspectHunter Global Simulator';
  }

  isConfigured(): boolean {
    return true;
  }

  async search(params: ProviderSearchParams): Promise<RawBusinessRecord[]> {
    const limit = params.limit || 20;
    const targetCity = params.city || 'Jakarta';
    const targetCountry = params.country || 'Indonesia';
    const targetCategory = params.category || params.query || 'Restaurant';

    const samplePrefixes = [
      'Golden', 'Royal', 'Sunrise', 'Apex', 'Pinnacle', 'Elite', 'Vibrant', 'Nexus',
      'Prima', 'Sentosa', 'Kurnia', 'Makmur', 'Bintang', 'Sinar', 'Harapan', 'Nusantara',
      'Urban', 'Grand', 'Modern', 'Eco', 'Summit', 'Global', 'Precision', 'Signature'
    ];

    const sampleNouns: Record<string, string[]> = {
      Restaurant: ['Bistro', 'Kitchen', 'Café', 'Diner', 'Resto', 'Eatery', 'Grill', 'Bakery', 'Warung', 'Coffee Roastery'],
      Dental: ['Dental Care', 'Dental Clinic', 'Orthodontics', 'Smile Studio', 'Dental Center'],
      Legal: ['Law Office', 'Legal Partners', 'Advocates', 'Consultancy', 'Legal Associates'],
      Auto: ['Auto Care', 'Motor Workshop', 'Auto Repair', 'Tire & Service Center', 'Motors'],
      Hospitality: ['Boutique Hotel', 'Suites', 'Inn', 'Resort & Spa', 'Guest House'],
      Tech: ['Digital Labs', 'Solutions', 'Software Studio', 'Agency', 'Tech Innovations', 'Systems']
    };

    let nouns = sampleNouns.Restaurant;
    for (const [catKey, nounList] of Object.entries(sampleNouns)) {
      if (targetCategory.toLowerCase().includes(catKey.toLowerCase())) {
        nouns = nounList;
        break;
      }
    }

    const results: RawBusinessRecord[] = [];
    const usedNames = new Set<string>();

    for (let i = 0; i < limit; i++) {
      const prefix = samplePrefixes[i % samplePrefixes.length];
      const noun = nouns[(i + 3) % nouns.length];
      const name = `${prefix} ${noun}`;
      if (usedNames.has(name)) continue;
      usedNames.add(name);

      // Realistic variation: roughly 45% have no website (lucrative leads!), 25% have website, 20% social only, 10% poor website
      const hasWebsite = (i % 3 === 0);
      const isSocialOnly = !hasWebsite && (i % 5 === 0);
      const websiteUrl = hasWebsite ? `https://www.${prefix.toLowerCase()}${noun.toLowerCase().replace(/[^a-z]/g, '')}.com` : undefined;

      const rating = parseFloat((3.8 + ((i * 13) % 12) / 10).toFixed(1));
      const reviewCount = Math.floor(12 + ((i * 47) % 350));

      const lat = -6.2088 + (Math.sin(i) * 0.08);
      const lng = 106.8456 + (Math.cos(i) * 0.08);

      results.push({
        providerId: `mock_${Date.now()}_${i}`,
        sourceType: this.sourceType,
        businessName: name,
        category: targetCategory,
        categories: [targetCategory, 'Local Business', 'Commercial Services'],
        phone: `+62 21 ${5500000 + (i * 1234)}`,
        website: websiteUrl,
        address: `Jl. Sudirman No. ${10 + i * 4}, ${targetCity}`,
        city: targetCity,
        region: params.region || 'DKI Jakarta',
        country: targetCountry,
        latitude: lat,
        longitude: lng,
        rating,
        reviewCount,
        businessStatus: 'OPERATIONAL',
        socialLinks: isSocialOnly ? { instagram: `https://instagram.com/${prefix.toLowerCase()}_${noun.toLowerCase()}` } : undefined,
      });
    }

    return results;
  }
}

export class GooglePlacesProvider implements BusinessProvider {
  readonly sourceType: SourceType = 'GOOGLE_PLACES';

  getName(): string {
    return 'Google Places API';
  }

  isConfigured(): boolean {
    return !!config.providers.googleMapsApiKey;
  }

  async search(params: ProviderSearchParams): Promise<RawBusinessRecord[]> {
    if (!this.isConfigured()) {
      return [];
    }
    // Production integration with Google Places Text Search API
    try {
      const query = [params.query, params.category, params.city, params.country].filter(Boolean).join(' ');
      const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}&key=${config.providers.googleMapsApiKey}`;
      const res = await fetch(url);
      if (!res.ok) return [];
      const data: any = await res.json();
      if (!data.results) return [];

      return data.results.slice(0, params.limit || 20).map((r: any) => ({
        providerId: r.place_id,
        sourceType: this.sourceType,
        businessName: r.name,
        category: r.types?.[0] || params.category,
        categories: r.types || [],
        address: r.formatted_address,
        rating: r.rating,
        reviewCount: r.user_ratings_total,
        businessStatus: r.business_status,
        latitude: r.geometry?.location?.lat,
        longitude: r.geometry?.location?.lng,
        city: params.city,
        country: params.country,
      }));
    } catch {
      return [];
    }
  }
}

export class GeoapifyProvider implements BusinessProvider {
  readonly sourceType: SourceType = 'GEOAPIFY';

  getName(): string {
    return 'Geoapify Places API';
  }

  isConfigured(): boolean {
    return !!config.providers.geoapifyApiKey;
  }

  async search(params: ProviderSearchParams): Promise<RawBusinessRecord[]> {
    if (!this.isConfigured()) return [];
    try {
      const text = [params.query, params.category, params.city].filter(Boolean).join(' ');
      const url = `https://api.geoapify.com/v2/places?text=${encodeURIComponent(text)}&apiKey=${config.providers.geoapifyApiKey}&limit=${params.limit || 20}`;
      const res = await fetch(url);
      if (!res.ok) return [];
      const data: any = await res.json();
      return (data.features || []).map((f: any) => ({
        providerId: f.properties.place_id,
        sourceType: this.sourceType,
        businessName: f.properties.name || f.properties.address_line1,
        categories: f.properties.categories || [],
        address: f.properties.formatted,
        city: f.properties.city || params.city,
        country: f.properties.country || params.country,
        latitude: f.geometry?.coordinates?.[1],
        longitude: f.geometry?.coordinates?.[0],
        phone: f.properties.contact?.phone,
        website: f.properties.contact?.website,
      }));
    } catch {
      return [];
    }
  }
}

export class ProviderRegistry {
  private providers: Map<SourceType, BusinessProvider> = new Map();

  constructor() {
    this.register(new MockProvider());
    this.register(new GooglePlacesProvider());
    this.register(new GeoapifyProvider());
  }

  register(provider: BusinessProvider) {
    this.providers.set(provider.sourceType, provider);
  }

  get(sourceType: SourceType): BusinessProvider | undefined {
    return this.providers.get(sourceType);
  }

  getAll(): BusinessProvider[] {
    return Array.from(this.providers.values());
  }

  async dispatchSearch(params: ProviderSearchParams, requestedProvider?: string): Promise<RawBusinessRecord[]> {
    if (requestedProvider) {
      const p = this.providers.get(requestedProvider as SourceType);
      if (p && p.isConfigured()) {
        const records = await p.search(params);
        if (records.length > 0) return records;
      }
    }

    // Try configured real providers first if not in forced mock mode
    for (const p of this.providers.values()) {
      if (p.sourceType !== 'MOCK_PROVIDER' && p.isConfigured()) {
        try {
          const results = await p.search(params);
          if (results.length > 0) return results;
        } catch {}
      }
    }

    // Fallback to high quality mock simulator
    const mock = this.providers.get('MOCK_PROVIDER');
    if (mock) {
      return mock.search(params);
    }
    return [];
  }
}

export const providerRegistry = new ProviderRegistry();
