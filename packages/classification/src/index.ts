export interface ClassificationParams {
  businessName: string;
  rawCategories?: string[];
  address?: string;
  city?: string;
  region?: string;
  country?: string;
  websiteStatus?: string;
}

export interface ClassificationResult {
  industry: string;
  subCategory: string;
  classificationConfidence: number;
  businessModel: 'B2B' | 'B2C' | 'B2B2C' | 'D2C' | 'HYBRID';
  businessModelConfidence: number;
  sector: string;
  operationalFocus: string;
  operatingLocation: string;
  businessDescription: string;
  opportunityExplanation: string;
}

interface TaxonomyConfig {
  industry: string;
  subCategory: string;
  sector: string;
  operationalFocus: string;
  defaultModel: 'B2B' | 'B2C' | 'D2C' | 'HYBRID';
  keywords: string[];
}

export class ClassificationEngine {
  private static industryTaxonomy: Record<string, TaxonomyConfig> = {
    'Food & Beverage': {
      industry: 'Food & Hospitality',
      subCategory: 'Kuliner & Kedai Kopi (Food & Beverage)',
      sector: 'Kuliner, Restoran & Kafe / Kedai Kopi',
      operationalFocus: 'Penyediaan aneka racikan kopi spesialti, aneka minuman santai, dan hidangan makanan dengan konsep dine-in, takeaway, maupun katering',
      defaultModel: 'B2C',
      keywords: [
        'restaurant', 'cafe', 'kafe', 'kopi', 'coffee', 'bistro', 'diner', 'eatery',
        'bakery', 'bar', 'food', 'warung', 'kedai', 'catering', 'kitchen', 'grill',
        'pizza', 'roastery', 'kopitiam', 'gelato', 'teh', 'tea', 'angkringan', 'resto', 'kuliner'
      ],
    },
    'Healthcare & Dental': {
      industry: 'Healthcare & Wellness',
      subCategory: 'Layanan Kesehatan & Klinik (Healthcare & Dental)',
      sector: 'Kesehatan, Perawatan Gigi & Klinik Medis',
      operationalFocus: 'Layanan konsultasi medis, pemeriksaan kesehatan, perawatan gigi profesional, estetika mulut, dan terapi pengobatan klinis',
      defaultModel: 'B2C',
      keywords: [
        'dental', 'gigi', 'klinik', 'clinic', 'dentist', 'dokter', 'doctor', 'hospital',
        'rumah sakit', 'orthodontics', 'medical', 'medika', 'therapy', 'terapi', 'pharmacy',
        'apotek', 'health', 'kesehatan', 'wellness', 'fisioterapi', 'lab', 'laboratorium'
      ],
    },
    'Legal & Professional': {
      industry: 'Professional Services',
      subCategory: 'Jasa Profesional & Konsultan Hukum (Legal & Advisory)',
      sector: 'Layanan Hukum, Konsultasi Bisnis & Perpajakan',
      operationalFocus: 'Penyediaan jasa advokasi hukum korporasi, konsultasi perpajakan, audit akuntansi publik, dan pengurusan legalitas notariat untuk entitas bisnis',
      defaultModel: 'B2B',
      keywords: [
        'law', 'legal', 'hukum', 'advocate', 'advokat', 'attorney', 'pengacara', 'notary',
        'notaris', 'consultant', 'konsultan', 'accounting', 'akuntan', 'tax', 'pajak', 'audit',
        'advisory', 'kantor hukum', 'associates', 'partners'
      ],
    },
    'Technology & Digital': {
      industry: 'Technology & Software',
      subCategory: 'Teknologi Informasi & Agensi Digital (IT & Digital Services)',
      sector: 'Pengembangan Perangkat Lunak, IT Solutions & Digital Agency',
      operationalFocus: 'Pengembangan perangkat lunak, solusi cloud, transformasi digital enterprise, keamanan siber, dan penyediaan jasa pemasaran digital',
      defaultModel: 'B2B',
      keywords: [
        'software', 'tech', 'teknologi', 'digital', 'agency', 'agensi', 'solutions', 'it',
        'cloud', 'cyber', 'data', 'consulting', 'media', 'creative', 'studio', 'web', 'aplikasi',
        'systems', 'komputer'
      ],
    },
    'Automotive Services': {
      industry: 'Automotive & Transport',
      subCategory: 'Otomotif & Bengkel Kendaraan (Automotive Services)',
      sector: 'Perawatan Berkala, Servis Mesin & Perbaikan Kendaraan',
      operationalFocus: 'Layanan pemeliharaan mesin kendaraan, ganti oli dan suku cadang, balancing/spooring ban, serta perawatan bodi kendaraan (auto detailing)',
      defaultModel: 'B2C',
      keywords: [
        'auto', 'otomotif', 'car', 'mobil', 'motor', 'workshop', 'bengkel', 'mechanic',
        'mekanik', 'tire', 'ban', 'garage', 'vehicle', 'kendaraan', 'repair', 'servis',
        'service', 'detailing', 'salon mobil', 'aksesoris motor'
      ],
    },
    'Lodging & Hospitality': {
      industry: 'Travel & Lodging',
      subCategory: 'Perhotelan & Akomodasi Wisata (Lodging & Hospitality)',
      sector: 'Akomodasi Tamu, Hotel, Resort & Villa Wisata',
      operationalFocus: 'Penyediaan fasilitas kamar inap wisatawan, ruang pertemuan/event komersial, layanan keramahan liburan, serta fasilitas relaksasi penginapan',
      defaultModel: 'B2C',
      keywords: [
        'hotel', 'resort', 'inn', 'suites', 'motel', 'hostel', 'guest house', 'wisma',
        'penginapan', 'villa', 'homestay', 'stay'
      ],
    },
    'Retail & Commerce': {
      industry: 'Retail & Commerce',
      subCategory: 'Ritel, Butik & Toko Dagang (Retail & Commerce)',
      sector: 'Penjualan Barang Dagangan, Busana Fashion & Ritel Komersial',
      operationalFocus: 'Penjualan produk fisik, busana pakaian, perlengkapan kebutuhan harian, dan peralatan konsumer langsung kepada pembeli',
      defaultModel: 'B2C',
      keywords: [
        'store', 'toko', 'shop', 'market', 'pasar', 'boutique', 'butik', 'fashion', 'clothing',
        'pakaian', 'distro', 'konveksi', 'hardware', 'retail', 'mart', 'swalayan', 'elektronik', 'gadget'
      ],
    },
    'Construction & Real Estate': {
      industry: 'Real Estate & Infrastructure',
      subCategory: 'Konstruksi & Properti (Construction & Real Estate)',
      sector: 'Pengembangan Properti, Arsitektur Interior & Kontraktor Bangunan',
      operationalFocus: 'Pembangunan fisik konstruksi sipil, pengerjaan desain interior dan tata ruang, renovasi bangunan komersial, serta transaksi jual-beli properti',
      defaultModel: 'HYBRID',
      keywords: [
        'property', 'properti', 'realty', 'real estate', 'contractor', 'kontraktor', 'builder',
        'bangunan', 'architecture', 'arsitektur', 'interior', 'construction', 'konstruksi', 'renovasi', 'developer'
      ],
    },
    'Logistics & Transportation': {
      industry: 'Logistics & Transportation',
      subCategory: 'Logistik & Jasa Ekspedisi (Logistics & Freight)',
      sector: 'Layanan Pengiriman Kargo, Distribusi Armada & Ekspedisi',
      operationalFocus: 'Pengiriman paket dan barang kargo lintas wilayah, layanan transportasi armada logistik, serta pengelolaan pergudangan dan rantai pasok',
      defaultModel: 'B2B',
      keywords: [
        'logistics', 'logistik', 'cargo', 'kargo', 'freight', 'ekspedisi', 'shipping', 'pengiriman',
        'transport', 'transportasi', 'kurir', 'courier', 'warehouse', 'gudang'
      ],
    },
    'Beauty & Personal Care': {
      industry: 'Beauty & Personal Care',
      subCategory: 'Kecantikan, Salon & Barbershop (Beauty & Wellness)',
      sector: 'Perawatan Estetika Wajah, Rambut & Salon Kecantikan',
      operationalFocus: 'Layanan tata rias dan pangkas rambut modern, relaksasi tubuh spa, perawatan kulit wajah (aesthetic clinic), dan produk perawatan diri',
      defaultModel: 'B2C',
      keywords: [
        'salon', 'barber', 'barbershop', 'pangkas', 'spa', 'massage', 'pijat', 'beauty',
        'kecantikan', 'skincare', 'esthetic', 'estetika', 'hair', 'rambut', 'nail'
      ],
    },
    'Education & Training': {
      industry: 'Education & Training',
      subCategory: 'Pendidikan & Kursus Pelatihan (Education & Training)',
      sector: 'Lembaga Pendidikan Formal/Non-formal & Pusat Kursus Keterampilan',
      operationalFocus: 'Penyelenggaraan kursus keterampilan profesional, bimbingan belajar intensif, sertifikasi kompetensi, dan pelatihan vokasi',
      defaultModel: 'B2C',
      keywords: [
        'school', 'sekolah', 'academy', 'akademi', 'course', 'kursus', 'bimbingan', 'belajar',
        'bimbel', 'training', 'pelatihan', 'education', 'pendidikan', 'institute', 'kampus', 'college'
      ],
    },
  };

  /**
   * Classify a business and generate detailed operational explanation
   */
  static classify(
    businessNameOrParams: string | ClassificationParams,
    rawCategories: string[] = []
  ): ClassificationResult {
    let name = '';
    let categories: string[] = [];
    let address = '';
    let city = '';
    let region = '';
    let country = '';
    let websiteStatus = '';

    if (typeof businessNameOrParams === 'object') {
      name = businessNameOrParams.businessName || '';
      categories = businessNameOrParams.rawCategories || [];
      address = businessNameOrParams.address || '';
      city = businessNameOrParams.city || '';
      region = businessNameOrParams.region || '';
      country = businessNameOrParams.country || '';
      websiteStatus = businessNameOrParams.websiteStatus || '';
    } else {
      name = businessNameOrParams || '';
      categories = rawCategories || [];
    }

    const combinedText = `${name} ${categories.join(' ')}`.toLowerCase();

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
    const confidence = highestScore > 0 ? Math.min(0.96, 0.68 + highestScore * 0.07) : 0.55;

    // Detect B2B vs B2C cues
    let finalModel = matchedConfig.defaultModel;
    if (
      combinedText.includes('corporate') ||
      combinedText.includes('wholesale') ||
      combinedText.includes('supplier') ||
      combinedText.includes('distributor') ||
      combinedText.includes('pt ') ||
      combinedText.includes('cv ') ||
      combinedText.includes('pabrik') ||
      combinedText.includes('solutions')
    ) {
      finalModel = 'B2B';
    }

    // Format location summary
    const locationParts: string[] = [];
    if (city) locationParts.push(city);
    if (region && region !== city) locationParts.push(region);
    if (country) locationParts.push(country);
    const locationStr = locationParts.join(', ') || 'Wilayah Komersial Terdaftar';
    const operatingLocation = address ? `Beroperasi di ${locationStr} (${address})` : `Beroperasi di wilayah ${locationStr}`;

    // Website opportunity diagnosis
    let oppExplanation = 'Mempunyai saluran digital namun berpotensi dioptimalkan lebih lanjut.';
    if (websiteStatus === 'NO_WEBSITE_LISTED') {
      oppExplanation = 'Belum terdeteksi memiliki website resmi aktif (hanya terdaftar di peta / direktori lokal). Sangat prospektif untuk penawaran pembuatan website bisnis profesional.';
    } else if (websiteStatus === 'SOCIAL_ONLY') {
      oppExplanation = 'Hanya memiliki akun media sosial tanpa portal website resmi mandiri. Peluang tinggi untuk upgrade menjadi landing page / website resmi berkonversi.';
    }

    // Natural Indonesian Business Description
    const businessDescription = `${name} bergerak di bidang ${matchedConfig.sector} dengan model operasional ${finalModel}. Entitas bisnis ini ${operatingLocation}, dengan fokus aktivitas pada: ${matchedConfig.operationalFocus}. ${oppExplanation}`;

    return {
      industry: matchedConfig.industry,
      subCategory: matchedConfig.subCategory,
      classificationConfidence: parseFloat(confidence.toFixed(2)),
      businessModel: finalModel,
      businessModelConfidence: 0.88,
      sector: matchedConfig.sector,
      operationalFocus: matchedConfig.operationalFocus,
      operatingLocation,
      businessDescription,
      opportunityExplanation: oppExplanation,
    };
  }
}

// Runtime value for interface
export const ClassificationResult = {};
export const ClassificationParams = {};
