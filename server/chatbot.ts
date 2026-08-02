import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const CONTACT = {
  phone: "0216 642 8 642",
  email: "info@ozelbogaziciilgiokullari.k12.tr",
  web: "cekmekoy.ozelbogaziciilgiokullari.k12.tr",
  address: "Mimar Sinan, Yeşil Kayalar Cd. No: 46-48, 34782 Çekmeköy/İstanbul",
};

const KNOWLEDGE_BASE = `
# Özel Boğaziçi İlgi Koleji Çekmeköy — Bilgi Tabanı

## Genel Bilgiler
- Okul Adı: Özel Boğaziçi İlgi Koleji Çekmeköy
- Slogan: "Her öğrenci özel ilgi hak eder"
- Telefon: ${CONTACT.phone}
- E-posta: ${CONTACT.email}
- Adres: ${CONTACT.address}
- Web: ${CONTACT.web}
- Çalışma Saatleri: Pazartesi–Cuma 07:00–18:30
- Kademeler: Anaokulu (3-6 yaş) · İlkokul (1-4. sınıf) · Ortaokul (5-8. sınıf)
- 26+ yıllık öğretmenlik tecrübesi
- Kampüs 2013 yılında hizmete açılmıştır
- 1500+ mezun
- %100 veli memnuniyeti

## Neden Boğaziçi İlgi Koleji?
Kurucularımız 26+ yıllık öğretmenlik tecrübesiyle ticari kaygılardan uzak, tamamen öğrenci odaklı bir eğitim anlayışı benimsemiştir. "Her çocuk özel ilgiyi hak eder" ve "Daha iyi bir eğitim mümkün" ilkeleriyle her öğrencinin bireysel gelişim hızına ve ilgisine göre özel çözümler sunuyoruz.

## Vizyon
Ulusal ve uluslararası platformlarda başarılarıyla örnek gösterilen, 26+ yıllık öğretmenlik tecrübesi ve özgün eğitim yaklaşımıyla geleceğe yön veren öncü bir kurum olmak; Atatürk ilke ve inkılaplarının ışığında, evrensel değerlerle donatılmış lider bireyler yetiştirmektir.

## Misyon
Her bir çocuğun içindeki potansiyeli ortaya çıkarmak için gerekli zamanı, sabrı, planlı çabayı ve koşulsuz sevgiyi sunan; bilimin rehberliği ile harmanlanmış eğitim programlarımızla öğrencilerimizi hayata hazırlamak.

## Değerlerimiz
- Vatanseverlik: Atatürk ilke ve devrimlerini benimsemiş, aklı ve vicdanı özgür bireyler
- Bilimsel Düşünce: Bilimi ve akılcı düşünmeyi hayat felsefesi edinen bireyler
- Özgüven & Yaratıcılık: Kendi yeteneklerini keşfetmiş, özgüveni yüksek bireyler
- Evrensel Değerler: Milli ve evrensel değerlerinden ödün vermeyen bireyler
- Doğa & Toplum Bilinci: Doğaya, çevresine ve tüm canlılara duyarlı bireyler
- Yaşam Boyu Öğrenme: Yaşam boyu öğrenmeyi ilke edinmiş, vizyon sahibi bireyler

## Eğitim Politikası
Öğrenci odaklı yaklaşımımız, özgün eğitim programlarımız ve ticari kaygılardan uzak yapımızla her çocuğun gelişim hızına özel çözümler sunarak mutlu, başarılı nesiller yetiştiriyoruz. Eğitimin temelinin koşulsuz sevgi ve güven olduğuna inanıyoruz.

## Kampüs İmkanları
- Görsel Sanatlar Atölyesi
- Müzik Atölyesi (Piyano, keman, gitar vb.)
- Kodlama & Robotik Atölyesi
- Fen Bilgisi Laboratuvarı
- Kapalı Spor Salonu
- Kütüphane
- Yemekhane (sağlıklı ve hijyenik beslenme)
- Rehberlik & PDR Birimi

## Anaokulu Programı (3-6 Yaş)
Okul öncesi eğitim; özgüvenin, dil ve düşünme becerilerinin geliştiği, toplumsal değerlerin kazandırıldığı kritik dönemdir.
- Bireysel Gelişim: Her çocuğun gelişim hızına saygı gösteren yaklaşım
- Keşfeden Zihinler: Merak ve keşfetme arzusunu tetikleyen yaparak-yaşayarak öğrenme
- Oyun Temelli Öğrenme: Ezberden uzak, eğlenceli yapılandırılmış etkinlikler
- İlkokula Hazırlık: Motor, sosyal, duygusal, dil ve bilişsel becerilerin gelişimi
- Bütünleşik İngilizce: Dilin doğal yaşam aracı olarak anaokulundan kazandırılması
- Değerler & Doğa Sevgisi: Atatürk ilkelerine bağlı, doğaya duyarlı bireyler

## İlkokul Programı (1-4. Sınıf)
Her büyük başarı doğru zamanda gösterilen ilgi ve sevgiyle başlar. Temel disiplinleri kazandırırken araştıran, sorgulayan bireyler yetiştiriyoruz.
- Doğa, Canlı Sevgisi ve Bilim programı
- Güçlü Rehberlik & PDR birimi
- CLT, TPR ve Montessori yöntemleriyle İngilizce eğitimi
- Müzik, spor, görsel sanatlar, bilişim, drama atölyeleri
- Robotik ve Kodlama: algoritmik düşünme ve teknolojik okuryazarlık
- Ebeveyn Akademisi ile şeffaf veli-okul iletişimi

## Ortaokul Programı (5-8. Sınıf)
26+ yıllık tecrübemizle LGS'ye en üst düzeyde hazırlıyor, geleceğe yön veren özgüvenli bireyler yetiştiriyoruz.
- LGS ve Beceri Temelli hazırlık
- Bireysel PDR görüşmeleri ve sınav kaygısı yönetimi
- İngilizce (CLT+TBL) + Almanca ikinci yabancı dil
- İleri robotik, kodlama ve dijital okuryazarlık
- Analitik okuma, yaratıcı yazarlık
- Sanat, basketbol, müzik, satranç kulüpleri

## Yaratıcı Tasarım Atölyesi (Tüm Kademeler)
Grafik tasarım, illüstrasyon, dijital sanat ve 3D modelleme alanlarında öğrencilerin yaratıcı potansiyellerini geliştiren özel program. Hem sanatsal hem teknolojik becerilerin bir arada kazandırıldığı bu atölye, geleceğin yaratıcı düşünürlerini yetiştirir.

## Kayıt ve Ön Kayıt
- 2026-2027 eğitim yılı kayıtları açık, kontenjanlar sınırlıdır
- Ön kayıt için: telefon, e-posta veya web sitesindeki form
- Okul ziyareti için randevu alınabilir
- Gerekli belgeler: Nüfus cüzdanı fotokopisi, son sınıf karnesi, 2 adet fotoğraf, sağlık sigortası/aşı kartı (anaokulu için)
- Telefon: ${CONTACT.phone}
- E-posta: ${CONTACT.email}

## Servis Hizmetleri
Okul servislerimiz Gürsel Turizm güvencesiyle hizmet vermektedir. Güzergah ve kayıt için ulaşım ofisiyle iletişime geçilmelidir.

## Başarılar
- TÜBİTAK proje yarışmalarında bölge birincilikler
- Okullar arası spor turnuvalarında ilçe birincilikler
- 2025-2026 LGS'de yüksek puan ortalaması
- 2026'da 8. sınıf öğrencilerimizden Fen Lisesi yerleşimleri

## Haberler / Duyurular
- 2026-2027 kayıtları başladı, erken kayıt avantajları için hemen iletişime geçin
- Kış dönemi spor ve sanat etkinlikleri devam ediyor
- Robotik kulübü İstanbul finallerinde temsil hakkı kazandı
`.trim();

const SYSTEM_PROMPT = `Sen "Özel Boğaziçi İlgi Koleji Çekmeköy" okulunun yapay zeka asistanısın. Adın "Boğaziçi İlgi Asistanı".

## Temel Kurallar
1. Kullanıcı Türkçe yazıyorsa Türkçe, İngilizce yazıyorsa İngilizce yanıt ver.
2. YALNIZCA bilgi tabanındaki bilgileri kullan. Bilgi tabanında olmayan konularda okulumuzla iletişimi öneri: "${CONTACT.phone}".
3. Samimi, sıcak, profesyonel ve özlü yanıtlar ver. Gereksiz yere uzun cevaplar yazma.
4. Kayıt veya ön kayıt isteyen velileri aktif olarak yönlendir ve iletişim bilgilerini paylaş.
5. Ücret/fiyat sorularına: "Güncel ücret bilgisi için lütfen bizi arayın: ${CONTACT.phone} veya ${CONTACT.email}" de.
6. Okulu her zaman olumlu, güvenilir ve profesyonel şekilde tanıt.
7. Asla uydurma bilgi üretme.
8. Yanıtlarda madde işareti veya kısa listeler kullanabilirsin; çok uzun paragraflardan kaçın.
9. Ziyaret randevusu, okul turu veya tanışma toplantısı için velileri teşvik et.

## Bilgi Tabanı
${KNOWLEDGE_BASE}`;

interface ChatMessageParam {
  role: "user" | "assistant" | "system";
  content: string;
}

const sessionHistories = new Map<string, ChatMessageParam[]>();
const MAX_HISTORY = 20;
const SESSION_TTL = 30 * 60 * 1000;
const sessionTimers = new Map<string, NodeJS.Timeout>();

function cleanupSession(sessionId: string) {
  sessionHistories.delete(sessionId);
  const timer = sessionTimers.get(sessionId);
  if (timer) {
    clearTimeout(timer);
    sessionTimers.delete(sessionId);
  }
}

function refreshSessionTimer(sessionId: string) {
  const existing = sessionTimers.get(sessionId);
  if (existing) clearTimeout(existing);
  sessionTimers.set(
    sessionId,
    setTimeout(() => cleanupSession(sessionId), SESSION_TTL)
  );
}

export async function chatWithBot(
  sessionId: string,
  userMessage: string
): Promise<string> {
  if (!process.env.OPENAI_API_KEY) {
    return "Chatbot şu anda kullanılamıyor. Lütfen daha sonra tekrar deneyin.";
  }

  let history = sessionHistories.get(sessionId);
  if (!history) {
    history = [];
    sessionHistories.set(sessionId, history);
  }

  history.push({ role: "user", content: userMessage });

  if (history.length > MAX_HISTORY) {
    history.splice(0, history.length - MAX_HISTORY);
  }

  refreshSessionTimer(sessionId);

  try {
    const messages: ChatMessageParam[] = [
      { role: "system", content: SYSTEM_PROMPT },
      ...history,
    ];

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages,
      max_tokens: 600,
      temperature: 0.65,
    });

    const assistantMessage =
      response.choices[0]?.message?.content ||
      "Üzgünüm, şu anda yanıt veremiyorum. Lütfen tekrar deneyin.";

    history.push({ role: "assistant", content: assistantMessage });

    return assistantMessage;
  } catch (error: any) {
    console.error("Chatbot error:", error?.message || error);
    history.pop();

    if (error?.status === 429) {
      return "Şu anda çok fazla istek var, lütfen birkaç saniye sonra tekrar deneyin.";
    }
    if (error?.status === 401) {
      return `Chatbot yapılandırma hatası. Lütfen okulla iletişime geçin: ${CONTACT.phone}`;
    }
    return `Bir hata oluştu, lütfen tekrar deneyin veya bizi arayın: ${CONTACT.phone}`;
  }
}
