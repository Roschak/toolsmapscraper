import { EntityMatchConfidence } from '@prospecthunter/shared';

export interface ResolutionComparison {
  nameScore: number;
  phoneScore: number;
  geoDistanceMeters?: number;
  overallScore: number;
  confidence: EntityMatchConfidence;
  isMatch: boolean;
}

export class EntityResolutionEngine {
  /**
   * Calculate string similarity score between 0.0 and 1.0 (Normalized Levenshtein)
   */
  static stringSimilarity(str1: string, str2: string): number {
    const s1 = str1.trim().toLowerCase();
    const s2 = str2.trim().toLowerCase();
    if (s1 === s2) return 1.0;
    if (!s1 || !s2) return 0.0;

    const track = Array(s2.length + 1)
      .fill(null)
      .map(() => Array(s1.length + 1).fill(null));

    for (let i = 0; i <= s1.length; i += 1) {
      track[0][i] = i;
    }
    for (let j = 0; j <= s2.length; j += 1) {
      track[j][0] = j;
    }

    for (let j = 1; j <= s2.length; j += 1) {
      for (let i = 1; i <= s1.length; i += 1) {
        const indicator = s1[i - 1] === s2[j - 1] ? 0 : 1;
        track[j][i] = Math.min(
          track[j][i - 1] + 1, // deletion
          track[j - 1][i] + 1, // insertion
          track[j - 1][i - 1] + indicator // substitution
        );
      }
    }

    const distance = track[s2.length][s1.length];
    const maxLength = Math.max(s1.length, s2.length);
    return Math.max(0, 1 - distance / maxLength);
  }

  /**
   * Calculate geographic distance in meters between two lat/lng coordinates (Haversine Formula)
   */
  static calculateDistanceMeters(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371e3; // Earth radius in meters
    const phi1 = (lat1 * Math.PI) / 180;
    const phi2 = (lat2 * Math.PI) / 180;
    const deltaPhi = ((lat2 - lat1) * Math.PI) / 180;
    const deltaLambda = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
      Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  }

  /**
   * Compare a candidate record against an existing business entity
   */
  static compare(
    candidate: { name: string; phone?: string | null; lat?: number | null; lng?: number | null },
    existing: { name: string; phone?: string | null; lat?: number | null; lng?: number | null }
  ): ResolutionComparison {
    const nameScore = this.stringSimilarity(candidate.name, existing.name);

    let phoneScore = 0;
    if (candidate.phone && existing.phone) {
      const p1 = candidate.phone.replace(/[^0-9]/g, '');
      const p2 = existing.phone.replace(/[^0-9]/g, '');
      if (p1.length >= 7 && p2.length >= 7) {
        phoneScore = p1.endsWith(p2) || p2.endsWith(p1) ? 1.0 : 0.0;
      }
    }

    let geoDistanceMeters: number | undefined;
    let geoScore = 0.5; // neutral if no coords
    if (candidate.lat != null && candidate.lng != null && existing.lat != null && existing.lng != null) {
      geoDistanceMeters = this.calculateDistanceMeters(candidate.lat, candidate.lng, existing.lat, existing.lng);
      if (geoDistanceMeters < 30) {
        geoScore = 1.0;
      } else if (geoDistanceMeters < 150) {
        geoScore = 0.8;
      } else if (geoDistanceMeters < 500) {
        geoScore = 0.5;
      } else {
        geoScore = 0.1;
      }
    }

    let overallScore = nameScore * 0.6 + phoneScore * 0.25 + geoScore * 0.15;
    if (nameScore > 0.95 && (phoneScore === 1.0 || (geoDistanceMeters != null && geoDistanceMeters < 50))) {
      overallScore = 1.0;
    }

    let confidence: EntityMatchConfidence = 'NO_MATCH';
    let isMatch = false;

    if (overallScore >= 0.92) {
      confidence = 'EXACT_MATCH';
      isMatch = true;
    } else if (overallScore >= 0.8) {
      confidence = 'HIGH_CONFIDENCE_MATCH';
      isMatch = true;
    } else if (overallScore >= 0.65) {
      confidence = 'PROBABLE_MATCH';
      isMatch = true;
    } else if (overallScore >= 0.45) {
      confidence = 'POSSIBLE_MATCH';
    }

    return {
      nameScore: parseFloat(nameScore.toFixed(2)),
      phoneScore,
      geoDistanceMeters: geoDistanceMeters ? Math.round(geoDistanceMeters) : undefined,
      overallScore: parseFloat(overallScore.toFixed(2)),
      confidence,
      isMatch,
    };
  }
}
