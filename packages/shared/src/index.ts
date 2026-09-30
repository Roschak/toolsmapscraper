// User & Auth
export type UserRole = 'ADMIN' | 'SALES' | 'ANALYST' | 'VIEWER';

export interface UserDto {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  isActive: boolean;
  createdAt: Date | string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  email: string;
  password: string;
  name: string;
  role?: UserRole;
}

export interface AuthResponse {
  user: UserDto;
  token: string;
}

// Prospect & Discovery
export type WebsiteStatus =
  | 'WEBSITE_LISTED'
  | 'WEBSITE_DISCOVERED'
  | 'NO_WEBSITE_LISTED'
  | 'POSSIBLE_WEBSITE'
  | 'WEBSITE_UNCERTAIN'
  | 'SOCIAL_ONLY';

export type EntityMatchConfidence =
  | 'EXACT_MATCH'
  | 'HIGH_CONFIDENCE_MATCH'
  | 'PROBABLE_MATCH'
  | 'POSSIBLE_MATCH'
  | 'NO_MATCH';

export type LeadPriority = 'HOT' | 'HIGH' | 'MEDIUM' | 'LOW' | 'VERY_LOW';

export type LeadStatus =
  | 'NEW'
  | 'RESEARCHED'
  | 'DEMO_CREATED'
  | 'DEMO_READY'
  | 'CONTACTED'
  | 'FOLLOW_UP'
  | 'INTERESTED'
  | 'NEGOTIATION'
  | 'CLIENT'
  | 'NO_RESPONSE'
  | 'NOT_INTERESTED'
  | 'LOST'
  | 'ARCHIVED';

export type DemoStatus =
  | 'NOT_CREATED'
  | 'IN_PROGRESS'
  | 'READY'
  | 'SENT'
  | 'APPROVED'
  | 'REJECTED';

export type SourceType =
  | 'GOOGLE_PLACES'
  | 'FOURSQUARE'
  | 'OVERTURE'
  | 'GEOAPIFY'
  | 'USER_IMPORT'
  | 'MANUAL'
  | 'MOCK_PROVIDER'
  | 'OTHER_APPROVED_SOURCE';

export interface BusinessEntityDto {
  id: string;
  canonicalName: string;
  providerIds?: any;
  country?: string | null;
  region?: string | null;
  city?: string | null;
  district?: string | null;
  address?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  categories: string[];
  primaryCategory?: string | null;
  businessModel?: string | null;
  legalEntity?: string | null;
  phone?: string | null;
  website?: string | null;
  socialLinks?: any;
  rating?: number | null;
  reviewCount?: number | null;
  businessStatus?: string | null;
  sourceProviders: string[];
  dataConfidence?: string | null;
  createdAt: Date | string;
  updatedAt: Date | string;
  lastVerifiedAt?: Date | string | null;
}

export interface LeadNoteDto {
  id: string;
  prospectId: string;
  authorId?: string | null;
  authorName?: string | null;
  content: string;
  createdAt: Date | string;
}

export interface ProspectDto {
  id: string;
  businessEntityId?: string | null;
  businessEntity?: BusinessEntityDto | null;
  searchJobId?: string | null;
  sourceType: SourceType;
  businessName: string;
  classification?: string | null;
  classificationConfidence?: number | null;
  businessModel?: string | null;
  businessModelConfidence?: number | null;
  websiteStatus: WebsiteStatus;
  websiteUrl?: string | null;
  websiteConfidence?: number | null;
  phone?: string | null;
  country?: string | null;
  region?: string | null;
  city?: string | null;
  address?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  rating?: number | null;
  reviewCount?: number | null;
  businessStatus?: string | null;
  leadScore?: number | null;
  priority?: LeadPriority | null;
  leadStatus: LeadStatus;
  demoStatus: DemoStatus;
  demoUrl?: string | null;
  notes?: string | null;
  assignedTo?: string | null;
  tags: string[];
  customFields?: any;
  createdAt: Date | string;
  updatedAt: Date | string;
  lastVerifiedAt?: Date | string | null;
  leadNotes?: LeadNoteDto[];
}

export interface UpdateProspectDto {
  leadStatus?: LeadStatus;
  priority?: LeadPriority;
  demoStatus?: DemoStatus;
  demoUrl?: string;
  notes?: string;
  websiteStatus?: WebsiteStatus;
  websiteUrl?: string;
  assignedTo?: string;
  tags?: string[];
}

// Search Jobs
export type JobStatus =
  | 'QUEUED'
  | 'RUNNING'
  | 'PAUSED'
  | 'COMPLETED'
  | 'FAILED'
  | 'CANCELLED';

export interface CreateSearchJobDto {
  name: string;
  query?: string;
  country?: string;
  region?: string;
  city?: string;
  district?: string;
  category?: string;
  keywords?: string;
  scope?: string;
  provider?: string;
  limit?: number;
}

export interface SearchJobDto {
  id: string;
  name: string;
  country?: string | null;
  region?: string | null;
  city?: string | null;
  district?: string | null;
  category?: string | null;
  keywords?: string | null;
  query?: string | null;
  scope?: string | null;
  provider?: string | null;
  status: JobStatus;
  progress: number;
  totalTasks: number;
  completedTasks: number;
  failedTasks: number;
  resultCount: number;
  duplicateCount: number;
  websiteListedCount: number;
  websiteOpportunityCount: number;
  startedAt?: Date | string | null;
  completedAt?: Date | string | null;
  createdAt: Date | string;
  error?: string | null;
}

// Exports
export interface CreateExportDto {
  format: 'CSV' | 'JSON';
  filters?: {
    country?: string;
    city?: string;
    category?: string;
    priority?: LeadPriority;
    leadStatus?: LeadStatus;
    websiteOpportunityOnly?: boolean;
    searchJobId?: string;
  };
}

export interface ExportJobDto {
  id: string;
  format: string;
  query?: any;
  status: JobStatus;
  fileUrl?: string | null;
  recordCount: number;
  error?: string | null;
  createdAt: Date | string;
  completedAt?: Date | string | null;
}

// API Responses
export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data: T;
}

export interface PaginatedResponse<T = any> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface DashboardStatsDto {
  totalProspects: number;
  hotLeads: number;
  websiteOpportunities: number;
  activeJobs: number;
  topCategories: { category: string; count: number }[];
  opportunitiesByRegion: { region: string; count: number }[];
  leadStatusBreakdown: { status: LeadStatus; count: number }[];
  recentJobs: SearchJobDto[];
}
