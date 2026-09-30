import * as crypto from 'crypto';
import { UserRole } from '@prospecthunter/shared';
import { config } from '@prospecthunter/config';

export class SecurityUtil {
  /**
   * Hash a plain password using PBKDF2 with SHA-512 and random salt
   */
  static hashPassword(password: string): string {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex');
    return `${salt}:${hash}`;
  }

  /**
   * Verify password against stored hash (salt:hash)
   */
  static verifyPassword(password: string, storedHash: string): boolean {
    const [salt, originalHash] = storedHash.split(':');
    if (!salt || !originalHash) return false;
    const computedHash = crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex');
    return crypto.timingSafeEqual(Buffer.from(computedHash, 'hex'), Buffer.from(originalHash, 'hex'));
  }

  /**
   * Generate a JWT token with HMAC-SHA256
   */
  static signJwt(payload: any, secret: string = config.auth.secret, expiresInDays: number = 7): string {
    const header = {
      alg: 'HS256',
      typ: 'JWT',
    };

    const exp = Math.floor(Date.now() / 1000) + expiresInDays * 24 * 60 * 60;
    const enrichedPayload = {
      ...payload,
      exp,
      iat: Math.floor(Date.now() / 1000),
    };

    const encodedHeader = Buffer.from(JSON.stringify(header)).toString('base64url');
    const encodedPayload = Buffer.from(JSON.stringify(enrichedPayload)).toString('base64url');

    const signature = crypto
      .createHmac('sha256', secret)
      .update(`${encodedHeader}.${encodedPayload}`)
      .digest('base64url');

    return `${encodedHeader}.${encodedPayload}.${signature}`;
  }

  /**
   * Verify and decode a JWT token
   */
  static verifyJwt<T = any>(token: string, secret: string = config.auth.secret): T | null {
    try {
      const parts = token.split('.');
      if (parts.length !== 3) return null;

      const [headerB64, payloadB64, signature] = parts;
      const expectedSig = crypto
        .createHmac('sha256', secret)
        .update(`${headerB64}.${payloadB64}`)
        .digest('base64url');

      if (signature !== expectedSig) {
        return null;
      }

      const payload = JSON.parse(Buffer.from(payloadB64, 'base64url').toString('utf8'));
      if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
        return null; // Expired
      }

      return payload as T;
    } catch {
      return null;
    }
  }

  /**
   * Check RBAC permission hierarchy
   * Hierarchy: ADMIN (all) > ANALYST (analytics, search, view) > SALES (prospects, pipeline, view) > VIEWER (read-only)
   */
  static hasPermission(userRole: UserRole, requiredRoles: UserRole[]): boolean {
    if (userRole === 'ADMIN') return true;
    return requiredRoles.includes(userRole);
  }

  /**
   * Sanitize string against injection / cross-site script tags
   */
  static sanitizeInput(input: string): string {
    if (!input) return '';
    return input
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .trim();
  }
}
