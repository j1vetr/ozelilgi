// Sunucu taraflı SEO meta enjeksiyonu
// Bilinen rotalar için index.html'e route bazlı <title>, <meta description>
// ve <link rel="canonical"> enjekte eder — Googlebot JS çalıştırmadan görür.
// Meta içerikleri client/src sayfalarındaki SEOHead kullanımıyla eşleşir.

const SITE_URL = "https://ozelbogaziciilgiokullari.k12.tr";

interface RouteMeta {
  title: string;
  description: string;
  /** Canonical path, e.g. "/akademik/anaokulu". Defaults to the route path. */
  canonical?: string;
}

// Tüm sitemap.xml rotalarını kapsar (client/public/sitemap.xml)
const ROUTE_META: Record<string, RouteMeta> = {
  "/": {
    title: "Özel Boğaziçi İlgi Koleji Çekmeköy | Anaokulu, İlkokul ve Ortaokul",
    description:
      "Çekmeköy'de özel okul arıyorsanız doğru adrestesiniz! Boğaziçi İlgi Koleji'nde anaokulu, ilkokul ve ortaokul kademelerinde 26+ yıllık deneyimle kaliteli eğitim. Hemen ön kayıt yaptırın.",
  },
  "/kayit": {
    title: "Kayıt Bilgileri | Çekmeköy Özel Okul | Boğaziçi İlgi Koleji",
    description:
      "2026-2027 eğitim yılı kayıtları başladı! Çekmeköy'deki özel okulumuzda yerinizi ayırtın. Anaokulu, ilkokul ve ortaokul kayıtları için ön kayıt yapın.",
  },
  "/kayit/on-kayit": {
    title: "Ön Kayıt Formu | Çekmeköy Özel Okul | Boğaziçi İlgi Koleji",
    description:
      "2026-2027 eğitim yılı için ön kayıt formunu doldurun. Çekmeköy'ün seçkin özel okulu Boğaziçi İlgi Koleji'nde yerinizi şimdiden ayırtın.",
  },
  "/kayit/kayit-sureci": {
    title: "Kayıt Süreci | Çekmeköy Özel Okul | Boğaziçi İlgi Koleji",
    description:
      "Özel Boğaziçi İlgi Koleji'ne kayıt yaptırma adımları, gerekli belgeler ve süreç hakkında detaylı bilgi. Çekmeköy'ün seçkin özel okuluna kolayca kayıt olun.",
  },
  "/akademik": {
    title: "Akademik Programlar | Çekmeköy Özel Okul | Boğaziçi İlgi Koleji",
    description:
      "Boğaziçi İlgi Koleji Çekmeköy'de anaokulu (3-6 yaş), ilkokul (1-4. sınıf) ve ortaokul (5-8. sınıf) kademelerinde kaliteli akademik programlar. Çekmeköy'ün seçkin özel okulu.",
  },
  "/akademik/anaokulu": {
    title: "Çekmeköy Anaokulu | Özel Boğaziçi İlgi Koleji",
    description:
      "Çekmeköy anaokulu arıyorsanız doğru adrestesiniz! Boğaziçi İlgi Koleji'nde 3-6 yaş için oyun temelli öğrenme, İngilizce eğitim, müzik ve yaratıcı atölyeler.",
  },
  "/akademik/ilkokul": {
    title: "Çekmeköy İlkokulu | Özel Boğaziçi İlgi Koleji",
    description:
      "Çekmeköy ilkokulu arıyorsanız doğru adrestesiniz! Boğaziçi İlgi Koleji'nde 1-4. sınıf için Cambridge İngilizce, STEM projeleri ve güçlü akademik temeller.",
  },
  "/akademik/ortaokul": {
    title: "Çekmeköy Ortaokulu | Özel Boğaziçi İlgi Koleji",
    description:
      "Çekmeköy ortaokulu arıyorsanız doğru adrestesiniz! Boğaziçi İlgi Koleji'nde 5-8. sınıf için LGS hazırlık, 2. yabancı dil, robotik ve kariyer rehberliği.",
  },
  "/akademik/yaratici-tasarim": {
    title: "Yaratıcı Tasarım Atölyesi | Özel Boğaziçi İlgi Koleji",
    description:
      "Boğaziçi İlgi Koleji Yaratıcı Tasarım Atölyesi'nde grafik tasarım, illüstrasyon, dijital sanat ve 3D modelleme ile öğrencilerin yaratıcı potansiyellerini keşfediyoruz.",
  },
  "/iletisim": {
    title: "İletişim | Çekmeköy Özel Okul | Boğaziçi İlgi Koleji",
    description:
      "Özel Boğaziçi İlgi Koleji Çekmeköy iletişim bilgileri. Adres: Mimar Sinan, Yeşil Kayalar Cd. No: 46-48, Çekmeköy/İstanbul. Tel: 0216 642 8 642",
  },
  "/kampus": {
    title: "Kampüsümüz | Çekmeköy Özel Okul | Boğaziçi İlgi Koleji",
    description:
      "Boğaziçi İlgi Koleji Çekmeköy kampüsü: Fen laboratuvarı, kapalı spor salonu, müzik atölyesi, sanat atölyesi, kodlama laboratuvarı ve kütüphane.",
  },
  "/kampus/imkanlar": {
    title: "Kampüsümüz | Çekmeköy Özel Okul | Boğaziçi İlgi Koleji",
    description:
      "Boğaziçi İlgi Koleji Çekmeköy kampüsü: Fen laboratuvarı, kapalı spor salonu, müzik atölyesi, sanat atölyesi, kodlama laboratuvarı ve kütüphane.",
    canonical: "/kampus/imkanlar",
  },
  "/kampus/galeri": {
    title: "Kampüs Fotoğrafları | Çekmeköy Özel Okul | Boğaziçi İlgi Koleji",
    description:
      "Özel Boğaziçi İlgi Koleji Çekmeköy kampüsünden fotoğraflar. Fen laboratuvarı, spor salonu, müzik ve sanat atölyelerimizi görsel olarak keşfedin.",
  },
  "/kurumsal/hakkimizda": {
    title: "Hakkımızda | Özel Boğaziçi İlgi Koleji Çekmeköy",
    description:
      "2013 yılında kurulan Özel Boğaziçi İlgi Koleji Çekmeköy, modern kampüsü ve deneyimli kadrosuyla Çekmeköy'ün seçkin özel okuludur. Anaokulu, ilkokul ve ortaokul kademeleri.",
  },
  "/kurumsal/kurucu-mesaji": {
    title: "Kurucu Mesajı | Özel Boğaziçi İlgi Koleji Çekmeköy",
    description:
      "Özel Boğaziçi İlgi Koleji kurucusunun eğitim vizyonu ve mesajını okuyun. Her öğrenciye özel ilgi gösteren, kaliteli eğitim sunan Çekmeköy'ün köklü özel okulu.",
  },
  "/kurumsal/vizyon-misyon": {
    title: "Vizyon & Misyon | Özel Boğaziçi İlgi Koleji Çekmeköy",
    description:
      "Boğaziçi İlgi Koleji'nin vizyonu; ulusal ve uluslararası platformlarda tanınan, öncü bir eğitim kurumu olmak ve lider bireyler yetiştirmektir.",
  },
  "/kurumsal/egitim-yaklasimimiz": {
    title: "Eğitim Yaklaşımımız | Özel Boğaziçi İlgi Koleji Çekmeköy",
    description:
      "Öğrenci merkezli eğitim, STEM projeleri, Cambridge İngilizce ve aktif öğrenme yöntemleriyle Boğaziçi İlgi Koleji'nin modern eğitim yaklaşımını keşfedin.",
  },
  "/kurumsal/egitim-politikamiz": {
    title: "Eğitim Politikamız | Özel Boğaziçi İlgi Koleji Çekmeköy",
    description:
      "Öğrenci odaklı, ticari kaygılardan uzak, koşulsuz sevgi ve sarsılmaz güvene dayalı eğitim politikamızla her çocuğu geleceğe hazırlıyoruz.",
  },
  "/programlar": {
    title: "Eğitim Programları | Yabancı Dil, STEM, Sanat | Boğaziçi İlgi Koleji Çekmeköy",
    description:
      "Boğaziçi İlgi Koleji Çekmeköy'de Cambridge İngilizce, STEM & robotik, kodlama, sanat, müzik ve spor programları. Çekmeköy'de zengin eğitim programları.",
  },
  "/basarilar": {
    title: "Başarılarımız | LGS ve Akademik Başarılar | Boğaziçi İlgi Koleji Çekmeköy",
    description:
      "Boğaziçi İlgi Koleji Çekmeköy öğrencilerinin LGS dereceleri, TÜBİTAK proje ödülleri ve sportif başarıları. Çekmeköy'ün başarı odaklı özel okulu.",
  },
  "/haberler": {
    title: "Haberler & Duyurular | Özel Boğaziçi İlgi Koleji Çekmeköy",
    description:
      "Özel Boğaziçi İlgi Koleji Çekmeköy'den son haberler, etkinlikler ve duyurular. Okul hayatından güncel gelişmeleri takip edin.",
  },
  "/rehber": {
    title: "Veli Rehberi: Çekmeköy'de Okul Seçimi, Kayıt ve Fiyatlar | Boğaziçi İlgi Koleji",
    description:
      "Çekmeköy'de özel okul, anaokulu ve ortaokul arayan veliler için hazırlanan rehberler: okul seçimi kriterleri, kayıt takvimi, fiyat rehberi ve LGS hazırlık.",
  },
  "/rehber/cekmekoy-ozel-okul-secerken-nelere-dikkat-edilmeli": {
    title: "Çekmeköy Özel Okul Seçimi Rehberi | Boğaziçi İlgi Koleji",
    description:
      "Çekmeköy'de özel okul mu arıyorsunuz? Akademik kadro, sınıf mevcudu, ulaşım, yabancı dil ve fiyat kriterleriyle doğru özel okulu seçme rehberi.",
  },
  "/rehber/cekmekoy-anaokulu-kayit-rehberi": {
    title: "Çekmeköy Anaokulu Kayıt Rehberi 2026-2027 | Boğaziçi İlgi Koleji",
    description:
      "Çekmeköy'de anaokulu kaydı için tam rehber: kayıt yaşı, gerekli belgeler, uyum süreci, tam gün/yarım gün seçenekleri ve 2026-2027 kayıt takvimi.",
  },
  "/rehber/lgs-hazirlikta-dogru-ortaokul-secimi": {
    title: "Çekmeköy LGS Hazırlık ve Ortaokul Seçimi Rehberi | Boğaziçi İlgi Koleji",
    description:
      "LGS başarısı ortaokul seçimiyle başlar. Çekmeköy'de LGS hazırlık programı güçlü ortaokul seçerken bakılması gereken kriterler, deneme sınavları ve etüt sistemi rehberi.",
  },
  "/rehber/cekmekoy-ozel-okul-fiyatlari-rehberi": {
    title: "Çekmeköy Özel Okul & Anaokulu Fiyatları 2026-2027 | Veli Rehberi",
    description:
      "Çekmeköy özel okul ve anaokulu fiyatları neye göre belirlenir? Ücrete dahil olan hizmetler, erken kayıt ve kardeş indirimleri, taksit seçenekleri hakkında şeffaf rehber.",
  },
  "/rehber/cekmekoyde-ilkokula-baslama-rehberi": {
    title: "Çekmeköy İlkokul Kayıt ve 1. Sınıf Seçim Rehberi | Boğaziçi İlgi Koleji",
    description:
      "Çocuğunuz ilkokula hazır mı? Okul olgunluğu belirtileri, 1. sınıf öğretmeni seçiminin önemi, okuma-yazma süreci ve Çekmeköy'de ilkokul kaydı rehberi.",
  },
  "/rehber/cekmekoy-okul-kayit-donemi-rehberi": {
    title: "Çekmeköy Okul Kayıt Rehberi 2026-2027: Tarihler ve Belgeler",
    description:
      "Çekmeköy'de okul kaydı nasıl yapılır? 2026-2027 kayıt takvimi, gerekli belgeler, nakil süreci, erken kayıt avantajları ve okul ziyareti ipuçları tek rehberde.",
  },
  "/veli-ogrenci": {
    title: "Veli & Öğrenci | Yemek Listesi, Servis, Dokümanlar | Boğaziçi İlgi Koleji Çekmeköy",
    description:
      "Boğaziçi İlgi Koleji Çekmeköy veli ve öğrenci bilgilendirme sayfası: yemek listesi, servis bilgileri, okul dokümanları ve sık sorulan sorular.",
  },
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function normalizePath(path: string): string {
  // query string ve trailing slash temizle
  const p = path.split("?")[0].split("#")[0];
  if (p.length > 1 && p.endsWith("/")) return p.slice(0, -1);
  return p || "/";
}

export function getRouteMeta(path: string): RouteMeta | undefined {
  return ROUTE_META[normalizePath(path)];
}

/**
 * Bilinen bir rota için index.html içindeki title/description/canonical
 * ve og:/twitter: etiketlerini route'a özel değerlerle değiştirir.
 * Bilinmeyen rotalarda HTML'i olduğu gibi döndürür.
 */
export function injectSeoMeta(html: string, path: string): string {
  const meta = getRouteMeta(path);
  if (!meta) return html;

  const normalized = normalizePath(path);
  const canonicalPath = meta.canonical ?? normalized;
  const canonicalUrl =
    canonicalPath === "/" ? `${SITE_URL}/` : `${SITE_URL}${canonicalPath}`;
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);

  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${description}" />`,
    )
    .replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${canonicalUrl}" />`,
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:title" content="${title}" />`,
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:description" content="${description}" />`,
    )
    .replace(
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:url" content="${canonicalUrl}" />`,
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:title" content="${title}" />`,
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:description" content="${description}" />`,
    );
}
