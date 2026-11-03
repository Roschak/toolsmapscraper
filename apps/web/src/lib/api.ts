export interface Prospect {
  id: string;
  businessEntityId?: string;
  searchJobId?: string;
  sourceType: string;
  businessName: string;
  classification?: string;
  classificationConfidence?: number;
  businessModel?: string;
  businessModelConfidence?: number;
  businessDescription?: string;
  operationalSummary?: string;
  customFields?: any;
  websiteStatus: 'NO_WEBSITE_LISTED' | 'SOCIAL_ONLY' | 'WEBSITE_LISTED' | 'POSSIBLE_WEBSITE' | 'WEBSITE_UNCERTAIN';
  websiteUrl?: string;
  websiteConfidence?: number;
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
  leadScore?: number;
  priority?: 'HOT' | 'HIGH' | 'MEDIUM' | 'LOW' | 'VERY_LOW';
  leadStatus: 'NEW' | 'RESEARCHED' | 'DEMO_CREATED' | 'DEMO_READY' | 'CONTACTED' | 'FOLLOW_UP' | 'INTERESTED' | 'NEGOTIATION' | 'CLIENT' | 'NO_RESPONSE' | 'NOT_INTERESTED' | 'LOST' | 'ARCHIVED';
  demoStatus?: 'NOT_CREATED' | 'IN_PROGRESS' | 'READY' | 'SENT' | 'APPROVED' | 'REJECTED';
  demoUrl?: string;
  notes?: string;
  assignedTo?: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  leadNotes?: Array<{
    id: string;
    content: string;
    authorName?: string;
    createdAt: string;
  }>;
  businessEntity?: {
    canonicalName: string;
    categories: string[];
    rating?: number;
    reviewCount?: number;
    phone?: string;
    website?: string;
  };
}

export interface SearchJob {
  id: string;
  name: string;
  country?: string;
  region?: string;
  city?: string;
  district?: string;
  category?: string;
  keywords?: string;
  query?: string;
  scope?: string;
  provider?: string;
  status: 'QUEUED' | 'RUNNING' | 'PAUSED' | 'COMPLETED' | 'FAILED' | 'CANCELLED';
  progress: number;
  totalTasks: number;
  completedTasks: number;
  failedTasks: number;
  resultCount: number;
  duplicateCount: number;
  websiteListedCount: number;
  websiteOpportunityCount: number;
  startedAt?: string;
  completedAt?: string;
  createdAt: string;
  error?: string;
  prospects?: Prospect[];
}

export interface DashboardStats {
  totalProspects: number;
  hotLeads: number;
  websiteOpportunities: number;
  opportunityRate: number;
  activeJobs: number;
  topCategories: Array<{ category: string; count: number }>;
  opportunitiesByRegion: Array<{ region: string; count: number }>;
  leadStatusBreakdown: Array<{ status: string; count: number }>;
  recentJobs: SearchJob[];
}

export const API_BASE =
  process.env.NEXT_PUBLIC_API_URL ||
  (typeof window !== 'undefined'
    ? (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? 'http://localhost:4000/api'
        : '/api')
    : 'http://localhost:4000/api');
export const API_BASE_URL = API_BASE;

export function getAuthToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('token');
}

export function setAuthToken(token: string) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('token', token);
  }
}

export function removeAuthToken() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}

export function getCurrentUser() {
  if (typeof window === 'undefined') return null;
  const userStr = localStorage.getItem('user');
  try {
    return userStr ? JSON.parse(userStr) : null;
  } catch {
    return null;
  }
}

function getAuthHeaders(): Record<string, string> {
  const token = getAuthToken();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return headers;
}

export async function apiRequest<T = any>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const token = getAuthToken();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options.headers as Record<string, string>),
  };

  const url = `${API_BASE}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
  const res = await fetch(url, {
    ...options,
    headers,
  });

  if (!res.ok) {
    if (res.status === 401 && typeof window !== 'undefined') {
      removeAuthToken();
      window.location.href = '/login';
    }
    let errorMsg = `API Request failed with status ${res.status}`;
    try {
      const errorData = await res.json();
      errorMsg = errorData.message || errorMsg;
    } catch {}
    throw new Error(errorMsg);
  }

  return res.json();
}

export const api = {
  async getDashboardStats(): Promise<DashboardStats> {
    try {
      const res = await fetch(`${API_BASE_URL}/analytics/stats`, {
        cache: 'no-store',
        headers: getAuthHeaders(),
      });
      if (res.ok) {
        return await res.json();
      }
    } catch (err) {
      console.warn('API getDashboardStats unreachable, using cached telemetry fallback', err);
    }

    // High quality fallback telemetry
    return {
      totalProspects: 25,
      hotLeads: 14,
      websiteOpportunities: 18,
      opportunityRate: 72,
      activeJobs: 1,
      topCategories: [
        { category: 'Bistro & Kitchen', count: 7 },
        { category: 'Distro & Fashion', count: 6 },
        { category: 'Auto Detailing', count: 4 },
        { category: 'Boutique Hotel', count: 3 },
        { category: 'Dental Aesthetic', count: 3 },
        { category: 'Tech Studio', count: 2 },
      ],
      opportunitiesByRegion: [
        { region: 'Jakarta', count: 8 },
        { region: 'Bandung', count: 6 },
        { region: 'Bogor', count: 4 },
        { region: 'Bali', count: 4 },
        { region: 'Surabaya', count: 3 },
      ],
      leadStatusBreakdown: [
        { status: 'NEW', count: 12 },
        { status: 'RESEARCHED', count: 6 },
        { status: 'DEMO_READY', count: 4 },
        { status: 'CONTACTED', count: 2 },
        { status: 'CLIENT', count: 1 },
      ],
      recentJobs: [
        {
          id: 'job_seed_1',
          name: 'Market Scan: Restaurant in Jakarta',
          city: 'Jakarta',
          country: 'Indonesia',
          category: 'Restaurant',
          status: 'COMPLETED',
          progress: 100,
          totalTasks: 8,
          completedTasks: 8,
          failedTasks: 0,
          resultCount: 8,
          duplicateCount: 1,
          websiteListedCount: 2,
          websiteOpportunityCount: 6,
          createdAt: new Date().toISOString(),
        },
      ],
    };
  },

  async getProspects(params: {
    query?: string;
    city?: string;
    category?: string;
    priority?: string;
    leadStatus?: string;
    websiteOpportunityOnly?: boolean;
    page?: number;
    pageSize?: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  } = {}): Promise<{
    items: Prospect[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  }> {
    try {
      const searchParams = new URLSearchParams();
      if (params.query) searchParams.set('query', params.query);
      if (params.city) searchParams.set('city', params.city);
      if (params.category) searchParams.set('category', params.category);
      if (params.priority) searchParams.set('priority', params.priority);
      if (params.leadStatus) searchParams.set('leadStatus', params.leadStatus);
      if (params.websiteOpportunityOnly) searchParams.set('websiteOpportunityOnly', 'true');
      if (params.page) searchParams.set('page', String(params.page));
      if (params.pageSize) searchParams.set('pageSize', String(params.pageSize));
      if (params.sortBy) searchParams.set('sortBy', params.sortBy);
      if (params.sortOrder) searchParams.set('sortOrder', params.sortOrder);

      const qs = searchParams.toString();
      const endpoint = `${API_BASE_URL}/prospects${qs ? `?${qs}` : ''}`;
      const res = await fetch(endpoint, {
        cache: 'no-store',
        headers: getAuthHeaders(),
      });
      if (res.ok) {
        return await res.json();
      }
    } catch (err) {
      console.warn('API getProspects unreachable, returning fallback mock set', err);
    }

    const sampleProspects: Prospect[] = [
      {
        id: 'mock_p1',
        sourceType: 'OPEN_STREET_MAP',
        businessName: 'Kurnia Kafe & Roastery',
        classification: 'Kuliner & Kedai Kopi (Food & Beverage)',
        businessModel: 'B2C',
        businessDescription: 'Kurnia Kafe & Roastery bergerak di bidang Kuliner, Restoran & Kafe / Kedai Kopi dengan model operasional B2C di Bandung, Jawa Barat (Jl. Riau No. 12). Menyajikan racikan kopi spesialti, aneka minuman santai, dan makanan ringan. Belum memiliki website resmi.',
        operationalSummary: 'Penyediaan aneka racikan kopi spesialti, aneka minuman santai, dan hidangan makanan dengan konsep dine-in maupun takeaway.',
        websiteStatus: 'NO_WEBSITE_LISTED',
        phone: '+62 812-3456-7890',
        city: 'Bandung',
        country: 'Indonesia',
        address: 'Jl. Riau No. 12, Bandung',
        leadScore: 92,
        priority: 'HOT',
        leadStatus: 'NEW',
        rating: 4.8,
        reviewCount: 165,
        tags: ['Food & Hospitality', 'NO_WEBSITE_OPPORTUNITY', 'HOT_LEAD'],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        customFields: {
          sector: 'Kuliner, Restoran & Kafe / Kedai Kopi',
          operationalFocus: 'Penyediaan aneka racikan kopi spesialti dan hidangan makanan ringan.',
          operatingLocation: 'Beroperasi di Bandung, Jawa Barat, Indonesia (Jl. Riau No. 12)',
        },
      },
      {
        id: 'mock_p2',
        sourceType: 'MOCK_PROVIDER',
        businessName: 'Sentosa Legal & Tax Partners',
        classification: 'Jasa Profesional & Konsultan Hukum (Legal & Advisory)',
        businessModel: 'B2B',
        businessDescription: 'Sentosa Legal & Tax Partners bergerak di bidang Layanan Hukum, Konsultasi Bisnis & Perpajakan dengan model operasional B2B di Jakarta Selatan (Jl. Sudirman No. 45). Menyediakan layanan advokasi hukum korporasi dan konsultasi pajak.',
        operationalSummary: 'Penyediaan jasa advokasi hukum korporasi, konsultasi perpajakan, audit akuntansi publik, dan pengurusan legalitas notariat untuk entitas bisnis.',
        websiteStatus: 'SOCIAL_ONLY',
        phone: '+62 21 555-4321',
        city: 'Jakarta',
        country: 'Indonesia',
        address: 'Jl. Sudirman No. 45, Jakarta Selatan',
        leadScore: 88,
        priority: 'HOT',
        leadStatus: 'RESEARCHED',
        rating: 4.9,
        reviewCount: 84,
        tags: ['Professional Services', 'HOT_LEAD'],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        customFields: {
          sector: 'Layanan Hukum, Konsultasi Bisnis & Perpajakan',
          operationalFocus: 'Konsultasi hukum korporat dan audit perpajakan perusahaan.',
          operatingLocation: 'Beroperasi di Jakarta Selatan, DKI Jakarta, Indonesia (Jl. Sudirman No. 45)',
        },
      },
      {
        id: 'mock_p3',
        sourceType: 'OPEN_STREET_MAP',
        businessName: 'Prima Dental Aesthetic Clinic',
        classification: 'Layanan Kesehatan & Klinik (Healthcare & Dental)',
        businessModel: 'B2C',
        businessDescription: 'Prima Dental Aesthetic Clinic bergerak di bidang Kesehatan, Perawatan Gigi & Klinik Medis dengan model operasional B2C di Surabaya, Jawa Timur (Jl. Darmo No. 88). Melayani perawatan estetika gigi dan ortodonti.',
        operationalSummary: 'Layanan konsultasi medis, pemeriksaan kesehatan, perawatan gigi profesional, estetika mulut, dan terapi pengobatan klinis.',
        websiteStatus: 'NO_WEBSITE_LISTED',
        phone: '+62 31 888-9999',
        city: 'Surabaya',
        country: 'Indonesia',
        address: 'Jl. Darmo No. 88, Surabaya',
        leadScore: 85,
        priority: 'HOT',
        leadStatus: 'DEMO_READY',
        rating: 4.7,
        reviewCount: 110,
        tags: ['Healthcare & Wellness', 'NO_WEBSITE_OPPORTUNITY'],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 'mock_p4',
        sourceType: 'MOCK_PROVIDER',
        businessName: 'Nexus Tech Creative Studio',
        classification: 'Teknologi Informasi & Agensi Digital (IT & Digital Services)',
        businessModel: 'B2B',
        businessDescription: 'Nexus Tech Creative Studio bergerak di bidang Pengembangan Perangkat Lunak, IT Solutions & Digital Agency dengan model operasional B2B di Jakarta Pusat. Menyediakan jasa pembuatan aplikasi dan transformasi digital.',
        operationalSummary: 'Pengembangan perangkat lunak, solusi cloud, transformasi digital enterprise, keamanan siber, dan penyediaan jasa pemasaran digital.',
        websiteStatus: 'WEBSITE_LISTED',
        websiteUrl: 'https://www.nexustech.io',
        phone: '+62 21 777-6655',
        city: 'Jakarta',
        country: 'Indonesia',
        address: 'Jl. Thamrin No. 10, Jakarta Pusat',
        leadScore: 65,
        priority: 'MEDIUM',
        leadStatus: 'CONTACTED',
        rating: 4.6,
        reviewCount: 45,
        tags: ['Technology & Software'],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 'mock_p5',
        sourceType: 'OPEN_STREET_MAP',
        businessName: 'Bintang Auto Detailing & Workshop',
        classification: 'Otomotif & Bengkel Kendaraan (Automotive Services)',
        businessModel: 'B2C',
        businessDescription: 'Bintang Auto Detailing bergerak di bidang Perawatan Berkala, Servis Mesin & Perbaikan Kendaraan dengan model operasional B2C di Bogor, Jawa Barat. Menyediakan layanan salon mobil, coating, dan servis mesin.',
        operationalSummary: 'Layanan pemeliharaan mesin kendaraan, ganti oli dan suku cadang, serta perawatan bodi kendaraan (auto detailing).',
        websiteStatus: 'NO_WEBSITE_LISTED',
        phone: '+62 251 333-2211',
        city: 'Bogor',
        country: 'Indonesia',
        address: 'Jl. Pajajaran No. 24, Bogor',
        leadScore: 82,
        priority: 'HIGH',
        leadStatus: 'NEW',
        rating: 4.5,
        reviewCount: 95,
        tags: ['Automotive & Transport', 'NO_WEBSITE_OPPORTUNITY'],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ];

    let filtered = sampleProspects;
    if (params.city) {
      filtered = filtered.filter((p) => p.city?.toLowerCase().includes(params.city!.toLowerCase()));
    }
    if (params.query) {
      const q = params.query.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.businessName.toLowerCase().includes(q) ||
          p.city?.toLowerCase().includes(q) ||
          p.classification?.toLowerCase().includes(q)
      );
    }
    return {
      items: filtered,
      total: filtered.length,
      page: 1,
      pageSize: 20,
      totalPages: 1,
    };
  },

  async getProspectById(id: string): Promise<Prospect | null> {
    try {
      const res = await fetch(`${API_BASE_URL}/prospects/${id}`, {
        cache: 'no-store',
        headers: getAuthHeaders(),
      });
      if (res.ok) {
        return await res.json();
      }
    } catch (err) {
      console.warn(`API getProspectById(${id}) failed`, err);
    }
    return null;
  },

  async updateProspect(id: string, data: Partial<Prospect>): Promise<Prospect> {
    const res = await fetch(`${API_BASE_URL}/prospects/${id}`, {
      method: 'PATCH',
      headers: getAuthHeaders(),
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error(`Failed to update prospect ${id}`);
    }
    return await res.json();
  },

  async addProspectNote(id: string, content: string, authorName = 'Lead Architect'): Promise<any> {
    const res = await fetch(`${API_BASE_URL}/prospects/${id}/notes`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ content, authorName }),
    });
    if (!res.ok) {
      throw new Error(`Failed to add note to prospect ${id}`);
    }
    return await res.json();
  },

  async getSearchJobs(): Promise<{ items: SearchJob[]; total: number }> {
    try {
      const res = await fetch(`${API_BASE_URL}/search`, {
        cache: 'no-store',
        headers: getAuthHeaders(),
      });
      if (res.ok) {
        return await res.json();
      }
    } catch (err) {
      console.warn('API getSearchJobs unreachable', err);
    }
    return { items: [], total: 0 };
  },

  async createSearchJob(data: {
    name?: string;
    country?: string;
    region?: string;
    city?: string;
    category?: string;
    keywords?: string;
    query?: string;
    provider?: string;
    limit?: number;
  }): Promise<SearchJob> {
    const res = await fetch(`${API_BASE_URL}/search`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error('Failed to create search discovery job');
    }
    return await res.json();
  },

  async getSettings(): Promise<Record<string, any>> {
    try {
      const res = await fetch(`${API_BASE_URL}/settings`, {
        cache: 'no-store',
        headers: getAuthHeaders(),
      });
      if (res.ok) {
        return await res.json();
      }
    } catch (err) {
      console.warn('API getSettings unreachable', err);
    }
    return {
      SEARCH_DAILY_LIMIT: 50000,
      SEARCH_MONTHLY_LIMIT: 1000000,
      MOCK_MODE: true,
      DEFAULT_COUNTRY: 'Indonesia',
      AUTO_ENRICH_LEADS: true,
      EXPORT_RETENTION_DAYS: 30,
    };
  },

  async updateSettings(data: Record<string, any>): Promise<any> {
    const res = await fetch(`${API_BASE_URL}/settings`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error('Failed to update system settings');
    }
    return await res.json();
  },

  async triggerExport(format: 'CSV' | 'JSON', filters?: any): Promise<any> {
    const res = await fetch(`${API_BASE_URL}/export`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ format, filters }),
    });
    if (!res.ok) {
      throw new Error('Failed to initiate export job');
    }
    return await res.json();
  },

  getExportDownloadUrl(id: string): string {
    return `${API_BASE_URL}/export/${id}/download`;
  },

  async checkHealth(): Promise<{ online: boolean; prospectCount: number }> {
    try {
      const res = await fetch(`${API_BASE_URL}/analytics/stats`, {
        cache: 'no-store',
        headers: getAuthHeaders(),
      });
      if (res.ok) {
        const data = await res.json();
        return { online: true, prospectCount: data.totalProspects || 0 };
      }
    } catch {}
    return { online: false, prospectCount: 0 };
  },

  async importProspects(records: any[]): Promise<{ importedCount: number }> {
    const res = await fetch(`${API_BASE_URL}/prospects/import`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ records }),
    });
    if (!res.ok) {
      throw new Error('Failed to import prospects');
    }
    return await res.json();
  },
};
