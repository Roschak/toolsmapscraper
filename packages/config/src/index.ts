import * as dotenv from 'dotenv';
import * as path from 'path';

// Load .env from root if available
dotenv.config({ path: path.resolve(process.cwd(), '.env') });
dotenv.config();

export const config = {
  env: process.env.NODE_ENV || 'development',
  isDev: (process.env.NODE_ENV || 'development') === 'development',
  isProd: process.env.NODE_ENV === 'production',
  appUrl: process.env.APP_URL || 'http://localhost:3000',
  apiUrl: process.env.API_URL || 'http://localhost:4000',

  database: {
    url: process.env.DATABASE_URL || 'postgresql://postgres:password@localhost:5433/prospecthunter?schema=public',
  },

  redis: {
    url: process.env.REDIS_URL || 'redis://localhost:6379',
  },

  auth: {
    secret: process.env.AUTH_SECRET || 'prospecthunter-secret-jwt-key-ultra-secure-random-2026-auth',
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
    saltRounds: 10,
  },

  providers: {
    mockMode: process.env.MOCK_MODE !== 'false',
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY || '',
    foursquareApiKey: process.env.FOURSQUARE_API_KEY || '',
    geoapifyApiKey: process.env.GEOAPIFY_API_KEY || '',
    overtureMapsEnabled: process.env.OVERTURE_MAPS_ENABLED !== 'false',
  },

  limits: {
    searchDailyLimit: parseInt(process.env.SEARCH_DAILY_LIMIT || '50000', 10),
    searchMonthlyLimit: parseInt(process.env.SEARCH_MONTHLY_LIMIT || '1000000', 10),
    searchJobLimit: parseInt(process.env.SEARCH_JOB_LIMIT || '500', 10),
    exportRetentionDays: parseInt(process.env.EXPORT_RETENTION_DAYS || '30', 10),
  },

  scoringWeights: {
    noWebsiteScore: 35,
    highRatingScore: 20,
    reviewVolumeScore: 15,
    establishedLocationScore: 15,
    activePhoneScore: 15,
  }
};

export default config;
