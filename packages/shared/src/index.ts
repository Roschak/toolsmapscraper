export const UserRole = {
  ADMIN: 'ADMIN',
  SALES: 'SALES',
  ANALYST: 'ANALYST',
  VIEWER: 'VIEWER',
} as const;
export type UserRole = (typeof UserRole)[keyof typeof UserRole];

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
export const WebsiteStatus = {
  WEBSITE_LISTED: 'WEBSITE_LISTED',
  WEBSITE_DISCOVERED: 'WEBSITE_DISCOVERED',
  NO_WEBSITE_LISTED: 'NO_WEBSITE_LISTED',
  POSSIBLE_WEBSITE: 'POSSIBLE_WEBSITE',
  WEBSITE_UNCERTAIN: 'WEBSITE_UNCERTAIN',
  SOCIAL_ONLY: 'SOCIAL_ONLY',
} as const;
export type WebsiteStatus = (typeof WebsiteStatus)[keyof typeof WebsiteStatus];

export const EntityMatchConfidence = {
  EXACT_MATCH: 'EXACT_MATCH',
  HIGH_CONFIDENCE_MATCH: 'HIGH_CONFIDENCE_MATCH',
  PROBABLE_MATCH: 'PROBABLE_MATCH',
  POSSIBLE_MATCH: 'POSSIBLE_MATCH',
  NO_MATCH: 'NO_MATCH',
} as const;
export type EntityMatchConfidence = (typeof EntityMatchConfidence)[keyof typeof EntityMatchConfidence];

export const LeadPriority = {
  HOT: 'HOT',
  HIGH: 'HIGH',
  MEDIUM: 'MEDIUM',
  LOW: 'LOW',
  VERY_LOW: 'VERY_LOW',
} as const;
export type LeadPriority = (typeof LeadPriority)[keyof typeof LeadPriority];

export const LeadStatus = {
  NEW: 'NEW',
  RESEARCHED: 'RESEARCHED',
  DEMO_CREATED: 'DEMO_CREATED',
  DEMO_READY: 'DEMO_READY',
  CONTACTED: 'CONTACTED',
  FOLLOW_UP: 'FOLLOW_UP',
  INTERESTED: 'INTERESTED',
  NEGOTIATION: 'NEGOTIATION',
  CLIENT: 'CLIENT',
  NO_RESPONSE: 'NO_RESPONSE',
  NOT_INTERESTED: 'NOT_INTERESTED',
  LOST: 'LOST',
  ARCHIVED: 'ARCHIVED',
} as const;
export type LeadStatus = (typeof LeadStatus)[keyof typeof LeadStatus];

export const DemoStatus = {
  NOT_CREATED: 'NOT_CREATED',
  IN_PROGRESS: 'IN_PROGRESS',
  READY: 'READY',
  SENT: 'SENT',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
} as const;
export type DemoStatus = (typeof DemoStatus)[keyof typeof DemoStatus];

export const SourceType = {
  GOOGLE_PLACES: 'GOOGLE_PLACES',
  FOURSQUARE: 'FOURSQUARE',
  OVERTURE: 'OVERTURE',
  GEOAPIFY: 'GEOAPIFY',
  USER_IMPORT: 'USER_IMPORT',
  MANUAL: 'MANUAL',
  MOCK_PROVIDER: 'MOCK_PROVIDER',
  OTHER_APPROVED_SOURCE: 'OTHER_APPROVED_SOURCE',
} as const;

export type SourceType = (typeof SourceType)[keyof typeof SourceType];

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
