import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const KNOWLEDGE_BASE = `
# Özel Boğaziçi İlgi Koleji Çekmeköy - Bilgi Tabanı

## Okul Genel Bilgileri
- Okul Adı: Özel Boğaziçi İlgi Koleji Çekmeköy
- Slogan: Geleceğe Güvenle
- Telefon: 0216 642 8 642
- E-posta: info@ozelilgiokullari.k12.tr
- Adres: Mimar Sinan, Yeşil Kayalar Cd. No: 46 - 48, 34782 Çekmeköy/İstanbul
- Web Sitesi: bogazici.toov.com.tr

## Hakkımızda
- Kampüs 2013 yılında inşa edilmiş modern bir yapıdır
- 2000m² kapalı alan ve 600m² bahçe
- 4 adet anaokulu sınıfı
- 25+ yıllık eğitim tecrübesi
- 1500+ mezun
- Öğrenci / Öğretmen Oranı: 12
- Eğitim kademeleri: Anaokulu (3-6 yaş), İlkokul (1-4. sınıf), Ortaokul (5-8. sınıf)

## Kampüs İmkanları
- Görsel Sanatlar Atölyesi: Yaratıcılığı geliştiren sanat eğitimi
- Müzik Atölyesi: Enstrüman ve ses eğitimi
- Kodlama Atölyesi: Yazılım ve robotik eğitimi
- Fen Bilgisi Laboratuvarı: Deneysel öğrenme ortamı
- 100m² Kapalı Spor Salonu: Fiziksel gelişim aktiviteleri
- Kütüphane: Okuma ve araştırma merkezi
- Yemekhane: Sağlıklı ve hijyenik beslenme
- Rehberlik Odası: Bireysel danışmanlık hizmeti

## Kurucu Mesajı
Geleceğimizin teminatı olan çocuklarımızı en iyi şekilde yetiştirmek, onlara güvenli ve nitelikli bir eğitim ortamı sunmak en büyük sorumluluğumuzdur. Boğaziçi İlgi Koleji olarak, öğrencilerimizin akademik başarılarının yanı sıra, milli ve manevi değerlerine bağlı, evrensel düşünebilen, sorgulayan ve üreten bireyler olmalarını önemsiyoruz.

## Vizyon
Ulusal ve uluslararası platformlarda başarılarıyla tanınan, eğitimde öncü ve örnek bir kurum olmak; geleceği şekillendirecek lider bireyler yetiştirmektir.

## Misyon
Atatürk ilke ve inkılaplarına bağlı, çağdaş, demokratik, eleştirel düşünebilen, toplumsal sorumluluk bilinci gelişmiş, yaratıcı ve üretken bireyler yetiştirmektir.

## Değerlerimiz
- Saygı: Bireysel farklılıklara ve değerlere saygı
- Dürüstlük: Şeffaf ve güvenilir iletişim
- Yenilikçilik: Sürekli gelişim ve değişime açıklık
- İşbirliği: Aile-okul-öğrenci üçgeninde güçlü bağlar
- Mükemmellik: Her alanda en iyiyi hedefleme
- Sorumluluk: Topluma ve çevreye karşı bilinçli yaklaşım

## Eğitim Yaklaşımı
Öğrenci merkezli eğitim modelimiz, her çocuğun bireysel öğrenme hızına ve stiline saygı duyar. Yaparak ve yaşayarak öğrenme ilkesiyle, teorik bilgiyi pratiğe dönüştüren uygulamalar sunuyoruz.

### Eğitim İlkeleri
- Bütünsel Gelişim: Akademik, sosyal ve duygusal gelişimi birlikte destekliyoruz
- Aktif Öğrenme: Yaparak ve yaşayarak öğrenme metodlarını uyguluyoruz
- Disiplinlerarası Çalışma: Farklı disiplinleri birleştiren projeler geliştiriyoruz
- Teknoloji Entegrasyonu: Modern teknolojileri eğitim sürecine dahil ediyoruz

### Tarihçe
- 2000: Boğaziçi İlgi Okulları eğitim hayatına başladı
- 2010: Uluslararası Cambridge İngilizce programı başlatıldı
- 2013: Modern Çekmeköy kampüsü hizmete açıldı
- 2015: Kodlama ve robotik eğitimleri müfredata eklendi
- 2020: Akıllı tahta ve tablet destekli eğitime geçildi
- 2024: AI destekli kişiselleştirilmiş öğrenme sistemleri

## Anaokulu (3-6 Yaş)
Okul öncesi eğitim, çocuğun gelişiminin en hızlı olduğu ve karakterinin şekillendiği kritik bir dönemdir. Anaokulumuzda, oyun temelli öğrenme yaklaşımıyla çocuklarımızın merak duygusunu canlı tutuyor, sosyal ve duygusal gelişimlerini destekliyoruz.

### Anaokulu Özellikleri
- Oyun Temelli Öğrenme: Eğlenerek öğrenme metodolojisi
- Drama ve Müzik: Sanatsal yeteneklerin keşfi
- Erken Okuma Yazma: Fonetik yöntemle okuma hazırlığı
- İngilizce Eğitimi: Yabancı dile erken başlangıç
- Psikomotor Gelişim: Motor beceri aktiviteleri
- Sosyal Beceriler: Paylaşma ve iletişim becerileri

## İlkokul (1-4. Sınıf)
İlkokul kademesinde temel amacımız, öğrencilerimize okuma, yazma, matematik ve fen bilimleri gibi temel becerileri kazandırırken, aynı zamanda araştırma yapma ve problem çözme yeteneklerini geliştirmektir.

### İlkokul Özellikleri
- Cambridge İngilizce: Uluslararası standartlarda dil eğitimi
- Kodlama Eğitimi: Algoritmik düşünme becerileri
- STEM Projeleri: Bilim, teknoloji, mühendislik, matematik
- Matematik Atölyesi: Somut materyallerle öğrenme
- Okuma Saatleri: Kitap sevgisi ve alışkanlığı
- Değerler Eğitimi: Karakter ve ahlak gelişimi

## Ortaokul (5-8. Sınıf)
Ortaokul dönemi, akademik branşlaşmanın başladığı ve liselere geçiş sınavlarına hazırlığın yoğunlaştığı bir süreçtir. Deneyimli kadromuzla öğrencilerimizi LGS'ye en iyi şekilde hazırlıyoruz.

### Ortaokul Özellikleri
- LGS Hazırlık: Sınava yönelik yoğun çalışma programı
- 2. Yabancı Dil: Almanca veya İspanyolca seçenekleri
- Proje Bazlı Öğrenme: Araştırma ve sunum becerileri
- Kariyer Rehberliği: Meslek tanıtımı ve yönlendirme
- Kulüp Çalışmaları: Sosyal ve sportif aktiviteler
- Deneme Sınavları: Düzenli ölçme ve değerlendirme

## Eğitim Programları
- Yabancı Dil Eğitimi: Cambridge standartlarında İngilizce ve ikinci yabancı dil olarak Almanca/İspanyolca eğitimi
- STEM & Robotik: Kodlama, 3D tasarım ve robotik atölyeleri ile geleceğin mühendislerini yetiştiriyoruz
- Kodlama & Yazılım: Algoritmik düşünme becerisi ve programlama dilleri eğitimi
- Sanat & Müzik: Piyano, keman, gitar eğitimleri ve görsel sanatlar atölyeleri
- Spor Faaliyetleri: Yüzme, basketbol, voleybol ve jimnastik branşlarında profesyonel eğitim
- Değerler Eğitimi: Evrensel ve toplumsal değerlerin kazandırılmasına yönelik çalışmalar

## Kayıt Bilgileri
- Kayıt süreci hakkında bilgi almak için okulu arayabilirsiniz: 0216 642 8 642
- E-posta ile iletişim: info@ozelilgiokullari.k12.tr
- Web sitesindeki ön kayıt formunu doldurabilirsiniz
- Okul ziyareti için randevu alabilirsiniz

## Haberler ve Duyurular
- 2026-2027 Eğitim Öğretim Yılı Erken Kayıt Dönemi Başladı: Gelecek eğitim yılı için avantajlı erken kayıt fırsatları başladı. Kontenjanlar sınırlıdır.
- Öğrencilerimizden TÜBİTAK Proje Başarısı: Fen Lisesi öğrencilerimizin geliştirdiği 'Sürdürülebilir Tarım' projesi bölge birincisi oldu.
- Kış Okulu Spor ve Sanat Etkinlikleri: Sömestr tatilinde öğrencilerimiz hem eğlenecek hem öğrenecek. Kayıtlar devam ediyor.
`.trim();

const SYSTEM_PROMPT = `Sen "Özel Boğaziçi İlgi Koleji Çekmeköy" okulunun resmi yapay zeka asistanısın. Adın "İlgi Asistan".

## Kurallar
1. SADECE Türkçe yanıt ver. Kullanıcı başka dilde yazsa bile Türkçe cevap ver.
2. SADECE aşağıdaki bilgi tabanındaki bilgileri kullan. Bilgi tabanında olmayan konularda "Bu konuda bilgim bulunmuyor, detaylı bilgi için okulumuzla iletişime geçebilirsiniz: 0216 642 8 642" de.
3. Samimi, sıcak ve profesyonel bir dil kullan. Velilere ve öğrencilere yardımcı ol.
4. Yanıtları kısa ve öz tut. Gereksiz uzun cevaplar verme. Markdown formatı kullanma, düz metin yaz.
5. Kayıt veya ön kayıt ile ilgilenen velileri teşvik et ve iletişim bilgilerini paylaş.
6. Fiyat, ücret veya maliyet sorularına "Güncel ücret bilgisi için lütfen okulumuzla iletişime geçin: 0216 642 8 642 veya info@ozelilgiokullari.k12.tr" şeklinde yönlendir.
7. Okulu her zaman olumlu ve profesyonel şekilde tanıt.
8. Asla uydurma bilgi verme.

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
  sessionTimers.set(sessionId, setTimeout(() => cleanupSession(sessionId), SESSION_TTL));
}

export async function chatWithBot(sessionId: string, userMessage: string): Promise<string> {
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
      model: "gpt-4o-mini",
      messages,
      max_tokens: 500,
      temperature: 0.7,
    });

    const assistantMessage = response.choices[0]?.message?.content || "Üzgünüm, şu anda yanıt veremiyorum. Lütfen tekrar deneyin.";

    history.push({ role: "assistant", content: assistantMessage });

    return assistantMessage;
  } catch (error: any) {
    console.error("Chatbot error:", error?.message || error);
    
    history.pop();

    if (error?.status === 429) {
      return "Şu anda çok fazla istek var, lütfen birkaç saniye sonra tekrar deneyin.";
    }
    if (error?.status === 401) {
      return "Chatbot yapılandırma hatası. Lütfen okulla iletişime geçin: 0216 642 8 642";
    }
    return "Bir hata oluştu, lütfen tekrar deneyin veya bizi arayın: 0216 642 8 642";
  }
}
