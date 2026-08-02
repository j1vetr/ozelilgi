// SEO odaklı rehber içerikleri — Çekmeköy'de okul arayan veliler için
// Her rehber: H1 (title), H2 (sections), SSS (FAQPage schema), iç linkler ve CTA ile birlikte RehberPage'de render edilir.

export interface GuideSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface GuideFAQ {
  question: string;
  answer: string;
}

export interface GuideLink {
  label: string;
  href: string;
}

export interface Guide {
  slug: string;
  title: string; // H1
  metaTitle: string;
  metaDescription: string;
  category: string;
  readingMinutes: number;
  date: string;
  intro: string[];
  sections: GuideSection[];
  faqs: GuideFAQ[];
  related: GuideLink[];
  ctaText: string;
}

export const GUIDES: Guide[] = [
  {
    slug: "cekmekoy-ozel-okul-secerken-nelere-dikkat-edilmeli",
    title: "Çekmeköy'de Özel Okul Seçerken Nelere Dikkat Edilmeli?",
    metaTitle: "Çekmeköy Özel Okul Seçimi Rehberi | Boğaziçi İlgi Koleji",
    metaDescription:
      "Çekmeköy'de özel okul mu arıyorsunuz? Akademik kadro, sınıf mevcudu, ulaşım, yabancı dil ve fiyat kriterleriyle doğru özel okulu seçme rehberi.",
    category: "Okul Seçimi",
    readingMinutes: 8,
    date: "2026-07-15",
    intro: [
      "Çekmeköy, son yıllarda İstanbul Anadolu Yakası'nın en hızlı gelişen ilçelerinden biri hâline geldi. Genç nüfusun yoğun olduğu ilçede özel okul seçenekleri de her yıl artıyor. Peki bu kadar seçenek arasında çocuğunuz için doğru özel okulu nasıl seçersiniz?",
      "Bu rehberde, Çekmeköy'de özel okul araştırması yapan velilerin karar verirken mutlaka değerlendirmesi gereken kriterleri; akademik kadrodan sınıf mevcuduna, ulaşımdan yabancı dil eğitimine kadar adım adım ele alıyoruz.",
    ],
    sections: [
      {
        heading: "1. Akademik Kadro ve Öğretmen Devamlılığı",
        paragraphs: [
          "Bir okulun kalitesini belirleyen en önemli unsur öğretmen kadrosudur. Okul ziyaretinizde öğretmenlerin deneyim düzeyini, branş öğretmenlerinin kadrolu olup olmadığını ve öğretmen sirkülasyonunun (her yıl değişip değişmediğini) mutlaka sorun.",
          "Öğretmenlerin uzun yıllar aynı kurumda çalışması, okulun kurumsal kültürünün oturduğunun ve çalışan memnuniyetinin yüksek olduğunun en güçlü göstergesidir. Çocuğunuzun her yıl farklı bir öğretmene alışmak zorunda kalması akademik sürekliliği olumsuz etkiler.",
        ],
      },
      {
        heading: "2. Sınıf Mevcudu ve Birebir İlgi",
        paragraphs: [
          "Özel okul tercihinin en temel gerekçelerinden biri, devlet okullarına göre daha düşük sınıf mevcutlarıdır. İdeal sınıf mevcudu anaokulunda 12-16, ilkokulda 16-20, ortaokulda 20-24 öğrenci aralığındadır.",
          "Düşük mevcut tek başına yeterli değildir; okulun her öğrenciyi bireysel olarak takip eden bir ölçme-değerlendirme sistemi olup olmadığını, veliye düzenli geri bildirim verilip verilmediğini de öğrenin.",
        ],
      },
      {
        heading: "3. Yabancı Dil Eğitiminin Niteliği",
        paragraphs: [
          "\"Yoğun İngilizce\" ifadesi her okulun broşüründe yer alır; önemli olan haftalık ders saati, yabancı öğretmen desteği ve dilin günlük yaşamda ne kadar kullanıldığıdır. Haftalık İngilizce saatini, hangi uluslararası ölçme sistemlerinin (Cambridge vb.) kullanıldığını sorun.",
          "Erken yaşta dil edinimi kritik olduğundan, anaokulu ve ilkokul kademesinde İngilizcenin oyun ve etkinlik temelli mi yoksa yalnızca ders olarak mı verildiğini gözlemleyin.",
        ],
      },
      {
        heading: "4. Ulaşım ve Konum: Çekmeköy Avantajı",
        paragraphs: [
          "Çocuğun günlük servis süresi 30-40 dakikayı aşmamalıdır. Uzun servis yolculukları hem uyku düzenini hem de derse hazır başlama motivasyonunu olumsuz etkiler.",
          "Okulumuz Mimar Sinan Mahallesi'nde, Çekmeköy merkeze ve çevre mahallelere (Alemdağ, Taşdelen, Ömerli, Sancaktepe, Ümraniye sınırı) kolay ulaşılabilir bir konumdadır. Servis güzergâhlarını ve servis firmasının deneyimini kayıt öncesinde mutlaka netleştirin.",
        ],
      },
      {
        heading: "5. Fiziki İmkânlar ve Güvenlik",
        paragraphs: [
          "Kapalı spor salonu, laboratuvar, kütüphane, atölyeler ve açık oyun alanları çocuğun okulda geçirdiği uzun saatleri nitelikli kılar. Okul gezinizde bu alanların gerçekten aktif kullanılıp kullanılmadığına dikkat edin.",
          "Güvenlik kameraları, giriş-çıkış kontrolü, revir ve yemekhane hijyeni gibi başlıkları da soru listemize eklemenizi öneririz.",
        ],
      },
      {
        heading: "6. Fiyat-Değer Dengesi",
        paragraphs: [
          "En pahalı okul en iyi okul değildir. Ücrete nelerin dâhil olduğunu (yemek, kitap-kırtasiye, kulüpler, etütler, servis) kalem kalem öğrenin ve okullar arasında toplam maliyet üzerinden karşılaştırma yapın.",
          "Erken kayıt dönemlerinde sunulan indirimler ve kardeş indirimi gibi avantajları sormaktan çekinmeyin. Detaylı bilgi için ön kayıt formumuzu doldurabilir veya okulumuzu ziyaret edebilirsiniz.",
        ],
      },
      {
        heading: "Okul Ziyaretinde Sorulacak 10 Soru",
        paragraphs: [
          "Okul gezinize giderken aşağıdaki soru listesini yanınızda bulundurun:",
        ],
        list: [
          "Sınıf mevcutları kaç öğrenci?",
          "Öğretmen kadrosunun ortalama kıdemi nedir, sirkülasyon oranı düşük mü?",
          "Haftada kaç saat İngilizce var, yabancı öğretmen desteği sunuluyor mu?",
          "Ölçme-değerlendirme ve veliye geri bildirim sistemi nasıl işliyor?",
          "Ücrete yemek, kitap, kulüp ve etütler dâhil mi?",
          "Servis güzergâhları hangi mahalleleri kapsıyor?",
          "Rehberlik servisi hangi sıklıkla öğrenci ve veli görüşmesi yapıyor?",
          "Okul sonrası etüt ve kulüp seçenekleri neler?",
          "LGS hazırlık süreci hangi sınıfta başlıyor?",
          "Deneme kaydı veya tanıtım günü imkânı var mı?",
        ],
      },
    ],
    faqs: [
      {
        question: "Çekmeköy'de özel okul seçerken en önemli kriter nedir?",
        answer:
          "En belirleyici kriter öğretmen kadrosunun niteliği ve devamlılığıdır. Bunu sınıf mevcudu, yabancı dil eğitiminin niteliği, ulaşım süresi ve fiyat-değer dengesi izler. Karar vermeden önce okulu mutlaka yerinde ziyaret edin.",
      },
      {
        question: "Özel okul kayıtları ne zaman başlar?",
        answer:
          "Çekmeköy'deki özel okullarda erken kayıt dönemi genellikle ocak-şubat aylarında başlar. Erken kayıt döneminde indirim oranları daha yüksektir; kontenjanlar özellikle anaokulu ve 1. sınıflarda hızla dolar.",
      },
      {
        question: "Okul ziyaretine çocuğumu da götürmeli miyim?",
        answer:
          "Evet. Çocuğunuzun okul ortamına, öğretmenlere ve sınıflara vereceği tepki karar sürecinizde önemli bir veridir. Birçok okul gibi Boğaziçi İlgi Koleji de aileleri çocuklarıyla birlikte tanıtım gezisine davet etmektedir.",
      },
      {
        question: "Boğaziçi İlgi Koleji hangi kademelerde eğitim veriyor?",
        answer:
          "Özel Boğaziçi İlgi Koleji Çekmeköy; anaokulu (3-6 yaş), ilkokul (1-4. sınıf) ve ortaokul (5-8. sınıf) kademelerinde eğitim vermektedir.",
      },
    ],
    related: [
      { label: "Çekmeköy Anaokulu Kayıt Rehberi 2026-2027", href: "/rehber/cekmekoy-anaokulu-kayit-rehberi" },
      { label: "Çekmeköy Özel Okul Fiyatları Rehberi", href: "/rehber/cekmekoy-ozel-okul-fiyatlari-rehberi" },
      { label: "Kayıt Süreci", href: "/kayit/kayit-sureci" },
      { label: "Akademik Kademelerimiz", href: "/akademik" },
    ],
    ctaText: "Okulumuzu yerinde görmek ve eğitim modelimizi tanımak için sizi kampüsümüze bekliyoruz.",
  },
  {
    slug: "cekmekoy-anaokulu-kayit-rehberi",
    title: "Çekmeköy Anaokulu Kayıt Rehberi 2026-2027",
    metaTitle: "Çekmeköy Anaokulu Kayıt Rehberi 2026-2027 | Boğaziçi İlgi Koleji",
    metaDescription:
      "Çekmeköy'de anaokulu kaydı için tam rehber: kayıt yaşı, gerekli belgeler, uyum süreci, tam gün/yarım gün seçenekleri ve 2026-2027 kayıt takvimi.",
    category: "Anaokulu",
    readingMinutes: 7,
    date: "2026-07-20",
    intro: [
      "Okul öncesi eğitim, çocuğun sosyal, duygusal ve bilişsel gelişiminin temelini atar. Çekmeköy'de anaokulu arayan veliler için kayıt yaşından gerekli belgelere, uyum sürecinden tam gün-yarım gün seçeneklerine kadar merak edilen her şeyi bu rehberde topladık.",
      "2026-2027 eğitim öğretim yılı kayıtları için doğru zamanda ve doğru adımlarla hareket etmek, hem kontenjan hem de erken kayıt avantajlarından yararlanmanızı sağlar.",
    ],
    sections: [
      {
        heading: "Anaokuluna Başlama Yaşı Kaçtır?",
        paragraphs: [
          "Anaokulu grupları genellikle yaş esasına göre oluşturulur: 3 yaş (36-48 ay), 4 yaş (48-60 ay) ve 5-6 yaş (60-72 ay) hazırlık grubu. Çocuğunuzun eylül ayı itibarıyla tamamladığı ay hesabı, hangi gruba yerleşeceğini belirler.",
          "Boğaziçi İlgi Koleji Anaokulu'nda 3-6 yaş aralığındaki çocuklar, yaş gruplarına özel hazırlanmış sınıflarda ve programlarla eğitim alır. Hazırlık grubu (5-6 yaş), ilkokula geçişi kolaylaştıran okuma-yazmaya hazırlık çalışmalarını içerir.",
        ],
      },
      {
        heading: "Kayıt İçin Gerekli Belgeler",
        paragraphs: ["Anaokulu kaydı için genellikle şu belgeler istenir:"],
        list: [
          "Öğrencinin kimlik fotokopisi",
          "Veli kimlik fotokopileri",
          "Aşı kartı fotokopisi",
          "4-6 adet vesikalık fotoğraf",
          "Varsa sağlık raporu / alerji bilgilendirmesi",
          "İkametgâh belgesi (e-Devlet üzerinden alınabilir)",
        ],
      },
      {
        heading: "Kayıt Takvimi: Ne Zaman Başvurmalı?",
        paragraphs: [
          "Çekmeköy'de nitelikli anaokullarında kontenjanlar sınırlıdır ve erken kayıt dönemi ocak-şubat aylarında açılır. Mart-nisan itibarıyla popüler yaş gruplarında kontenjanlar dolmaya başlar.",
          "Önerimiz: Bir önceki eğitim yılının aralık-ocak aylarında okul ziyaretlerinizi tamamlayıp, erken kayıt indirimlerinden yararlanarak şubat sonuna kadar kaydınızı kesinleştirmenizdir. Ön kayıt formumuzu doldurarak süreci hemen başlatabilirsiniz.",
        ],
      },
      {
        heading: "Tam Gün mü, Yarım Gün mü?",
        paragraphs: [
          "Çalışan veliler için tam gün programı (genellikle 08:30-16:30, erken bırakma ve geç alma seçenekleriyle 07:00-18:30 aralığına uzayabilir) büyük kolaylık sağlar. Yarım gün programı ise okula yeni başlayan 3 yaş grubunda uyumu kolaylaştırmak için tercih edilebilir.",
          "Karar verirken çocuğunuzun uyku düzenini, sosyal ihtiyaçlarını ve sizin çalışma saatlerinizi birlikte değerlendirin. Okulumuz her iki modelde de yemek, ikindi kahvaltısı ve branş etkinliklerini programa dâhil eder.",
        ],
      },
      {
        heading: "Uyum (Oryantasyon) Süreci Nasıl İşler?",
        paragraphs: [
          "Anaokuluna başlangıçta ilk 1-2 hafta uyum süreci olarak planlanır. İlk günlerde kısa süreli katılım, veliyle birlikte sınıf ziyareti ve kademeli olarak sürenin uzatılması en sağlıklı yöntemdir.",
          "Rehberlik birimimiz uyum sürecinde her çocuğu bireysel olarak izler ve veliyle günlük iletişim kurar. Eylül başında düzenlenen oryantasyon günleri, çocuğunuzun okula güvenle bağlanmasını sağlar.",
        ],
      },
      {
        heading: "Anaokulunda Nasıl Bir Program Uygulanır?",
        paragraphs: [
          "Nitelikli bir okul öncesi program; oyun temelli öğrenme, erken İngilizce edinimi, sanat-müzik-hareket etkinlikleri, fen ve doğa çalışmaları ile sosyal-duygusal gelişim desteğini dengeli biçimde içermelidir.",
          "Boğaziçi İlgi Koleji Anaokulu'nda çocuklar İngilizceyle oyun ve şarkılar aracılığıyla erken yaşta tanışır; STEM ve robotik etkinlikleriyle merak duyguları desteklenir. Detaylar için anaokulu sayfamızı inceleyebilirsiniz.",
        ],
      },
    ],
    faqs: [
      {
        question: "Anaokulu kaydı için çocuğum kaç yaşında olmalı?",
        answer:
          "Anaokulu grupları 3 yaş (36-48 ay), 4 yaş (48-60 ay) ve 5-6 yaş (60-72 ay) olarak oluşturulur. Eylül ayı itibarıyla çocuğunuzun ay hesabı hangi gruba yerleşeceğini belirler.",
      },
      {
        question: "Çekmeköy'de anaokulu kayıtları ne zaman yapılır?",
        answer:
          "Erken kayıt dönemi genellikle ocak-şubat aylarında başlar. Kontenjanlar sınırlı olduğundan şubat sonuna kadar kaydın tamamlanması önerilir. Yıl içinde kontenjan uygunluğuna göre ara kayıt da mümkündür.",
      },
      {
        question: "Tuvalet eğitimi tamamlanmamış çocuk anaokuluna başlayabilir mi?",
        answer:
          "3 yaş grubunda tuvalet eğitimi devam eden çocuklar için okullar genellikle esnek davranır ve süreci aileyle iş birliği içinde destekler. Kayıt görüşmesinde bu konuyu açıkça paylaşmanız yeterlidir.",
      },
      {
        question: "Anaokulunda yemekler okulda mı hazırlanıyor?",
        answer:
          "Okulumuzda öğün ve ara öğünler gıda mühendisi ve diyetisyen kontrolünde, yaş grubuna uygun menülerle sunulur. Alerji ve özel beslenme ihtiyaçları kayıt sırasında planlanır.",
      },
      {
        question: "Anaokulunda İngilizce eğitimi veriliyor mu?",
        answer:
          "Evet. Anaokulu programımızda İngilizce; oyun, şarkı ve etkinlik temelli olarak günlük akışın içinde yer alır. Erken yaşta dil edinimi, ilkokul İngilizce programına güçlü bir temel oluşturur.",
      },
    ],
    related: [
      { label: "Anaokulu Programımız", href: "/akademik/anaokulu" },
      { label: "Çekmeköy Özel Okul Fiyatları Rehberi", href: "/rehber/cekmekoy-ozel-okul-fiyatlari-rehberi" },
      { label: "Özel Okul Seçim Rehberi", href: "/rehber/cekmekoy-ozel-okul-secerken-nelere-dikkat-edilmeli" },
      { label: "Ön Kayıt Formu", href: "/kayit/on-kayit" },
    ],
    ctaText: "2026-2027 anaokulu kontenjanlarımız sınırlıdır. Ön kayıt oluşturun, sizi kampüs turuna davet edelim.",
  },
  {
    slug: "lgs-hazirlikta-dogru-ortaokul-secimi",
    title: "LGS'ye Hazırlıkta Doğru Ortaokul Seçimi: Çekmeköy Rehberi",
    metaTitle: "Çekmeköy LGS Hazırlık ve Ortaokul Seçimi Rehberi | Boğaziçi İlgi Koleji",
    metaDescription:
      "LGS başarısı ortaokul seçimiyle başlar. Çekmeköy'de LGS hazırlık programı güçlü ortaokul seçerken bakılması gereken kriterler, deneme sınavları ve etüt sistemi rehberi.",
    category: "Ortaokul & LGS",
    readingMinutes: 8,
    date: "2026-07-25",
    intro: [
      "Liselere Geçiş Sistemi (LGS), öğrencinin akademik geleceğini şekillendiren ilk büyük sınavdır. Ancak LGS başarısı 8. sınıfta başlayan bir maraton değil; 5. sınıftan itibaren doğru ortaokulda, doğru sistemle ilerleyen bir süreçtir.",
      "Bu rehberde Çekmeköy'de ortaokul araştıran velilerin, LGS hazırlığı perspektifinden bir okulu nasıl değerlendirmesi gerektiğini adım adım anlatıyoruz.",
    ],
    sections: [
      {
        heading: "LGS Hazırlığı Gerçekte Ne Zaman Başlar?",
        paragraphs: [
          "LGS'de sorulan sorular 8. sınıf müfredatından gelir; ancak soruların dayandığı okuma-anlama, problem çözme ve analitik düşünme becerileri 5-6-7. sınıflarda inşa edilir. Bu nedenle \"LGS hazırlığı 8. sınıfta başlar\" yaklaşımı geç kalmış bir stratejidir.",
          "Doğru ortaokul; 5. sınıftan itibaren kazanım takibi yapan, eksikleri anında kapatan ve sınav kaygısını yönetmeyi öğreten okuldur.",
        ],
      },
      {
        heading: "Ortaokul Seçiminde LGS Odaklı 5 Kriter",
        paragraphs: ["Bir ortaokulun LGS hazırlık kapasitesini şu başlıklarla ölçebilirsiniz:"],
        list: [
          "Deneme sınavı sistemi: Türkiye geneli denemelere katılım ve sonuçların birebir analizi yapılıyor mu?",
          "Etüt ve soru çözüm saatleri: Okul çıkışı ücretsiz etüt imkânı var mı?",
          "Kazanım takibi: Öğrencinin konu bazlı eksikleri raporlanıyor ve veliyle paylaşılıyor mu?",
          "Rehberlik desteği: Sınav kaygısı yönetimi ve hedef lise planlaması yapılıyor mu?",
          "Geçmiş yıl LGS sonuçları: Okulun yerleşme başarıları şeffaf biçimde paylaşılıyor mu?",
        ],
      },
      {
        heading: "Deneme Sınavları ve Analiz Kültürü",
        paragraphs: [
          "Deneme sınavı çok yapan okul değil, deneme sonucunu iyi analiz eden okul fark yaratır. Her denemeden sonra öğrencinin yanlış ve boş bıraktığı soruların kazanım bazında incelenmesi, bireysel telafi programının güncellenmesi gerekir.",
          "Okul görüşmenizde \"Deneme sonrası süreç nasıl işliyor?\" sorusunu mutlaka sorun. Sadece net sayısı bildiren sistemler yetersizdir; kazanım karnesi sunan sistemleri tercih edin.",
        ],
      },
      {
        heading: "Etüt, Soru Çözümü ve Bireysel Takip",
        paragraphs: [
          "LGS sürecinde dershane ihtiyacını ortadan kaldıran en önemli unsur, okul bünyesindeki etüt ve soru çözüm sistemidir. Okul çıkışında branş öğretmenleriyle yapılan etütler hem zamandan tasarruf sağlar hem de öğrencinin kendi öğretmeninden destek almasını mümkün kılar.",
          "Boğaziçi İlgi Koleji ortaokulunda düşük sınıf mevcutları sayesinde her öğrencinin gelişimi bireysel olarak izlenir; hafta içi etüt ve soru çözüm saatleriyle öğrenme okulda tamamlanır.",
        ],
      },
      {
        heading: "Akademik Baskı ile Dengeli Gelişim Arasındaki Denge",
        paragraphs: [
          "Dört yılı yalnızca test çözerek geçen bir öğrencinin motivasyonu 8. sınıfa gelmeden tükenir. Spor, sanat, robotik ve sosyal kulüpler; öğrencinin zihinsel dayanıklılığını ve odaklanma kapasitesini artırır.",
          "Araştırmalar, düzenli fiziksel aktivite ve sanatsal uğraşları olan öğrencilerin sınav performansının daha yüksek olduğunu gösteriyor. Ortaokul seçiminde akademik programın yanında sosyal gelişim imkânlarını da değerlendirin.",
        ],
      },
      {
        heading: "Velinin Rolü: Süreci Birlikte Yönetmek",
        paragraphs: [
          "LGS bir aile maratonudur. Okulun veliyle kurduğu iletişim düzeni — düzenli veli görüşmeleri, gelişim raporları ve rehberlik seminerleri — sürecin sağlıklı yönetilmesinde belirleyicidir.",
          "Okul adaylarınızla görüşürken veli bilgilendirme sisteminin nasıl işlediğini, yılda kaç kez birebir görüşme yapıldığını sorun.",
        ],
      },
    ],
    faqs: [
      {
        question: "LGS hazırlığı için dershane şart mı?",
        answer:
          "Kazanım takibi, düzenli deneme analizi ve okul içi etüt sistemi güçlü bir ortaokulda dershane ihtiyacı büyük ölçüde ortadan kalkar. Önemli olan eksiklerin okulda, öğrencinin kendi öğretmenleri tarafından kapatılmasıdır.",
      },
      {
        question: "LGS hazırlığına hangi sınıfta başlanmalı?",
        answer:
          "Sınav teknik hazırlığı 8. sınıfta yoğunlaşsa da temel beceriler (okuma-anlama, problem çözme) 5. sınıftan itibaren inşa edilmelidir. 5-7. sınıflarda kazanım eksiği bırakmayan öğrenciler 8. sınıfta belirgin avantaj elde eder.",
      },
      {
        question: "Boğaziçi İlgi Koleji'nde LGS hazırlık programı var mı?",
        answer:
          "Evet. Ortaokul kademesinde 5. sınıftan itibaren kazanım takibi yapılır; 7. ve 8. sınıflarda deneme sınavları, birebir analiz görüşmeleri, etüt ve soru çözüm saatleriyle yoğunlaştırılmış LGS hazırlık programı uygulanır.",
      },
      {
        question: "Deneme sınavı sonuçları velilerle paylaşılıyor mu?",
        answer:
          "Evet. Her deneme sonrası öğrencinin kazanım bazlı analizi hazırlanır ve veliyle paylaşılır; rehberlik birimi hedef lise planlamasını aileyle birlikte günceller.",
      },
    ],
    related: [
      { label: "Ortaokul Programımız", href: "/akademik/ortaokul" },
      { label: "Başarılarımız", href: "/basarilar" },
      { label: "Özel Okul Seçim Rehberi", href: "/rehber/cekmekoy-ozel-okul-secerken-nelere-dikkat-edilmeli" },
      { label: "Ön Kayıt Formu", href: "/kayit/on-kayit" },
    ],
    ctaText: "LGS hazırlık sistemimizi yerinde görmek için ortaokul tanıtım görüşmesi planlayalım.",
  },
  {
    slug: "cekmekoy-ozel-okul-fiyatlari-rehberi",
    title: "Çekmeköy Özel Okul ve Anaokulu Fiyatları: 2026-2027 Veli Rehberi",
    metaTitle: "Çekmeköy Özel Okul & Anaokulu Fiyatları 2026-2027 | Veli Rehberi",
    metaDescription:
      "Çekmeköy özel okul ve anaokulu fiyatları neye göre belirlenir? Ücrete dahil olan hizmetler, erken kayıt ve kardeş indirimleri, taksit seçenekleri hakkında şeffaf rehber.",
    category: "Fiyatlar & Kayıt",
    readingMinutes: 6,
    date: "2026-07-28",
    intro: [
      "\"Çekmeköy özel okul fiyatları\" ve \"Çekmeköy anaokulu fiyatları\" veli aramalarında ilk sıralarda yer alıyor; ancak internette bulunan rakamlar çoğu zaman güncel değil ve neyin dâhil olduğu belirsiz. Bu rehberde fiyatları etkileyen unsurları, indirim türlerini ve karşılaştırma yaparken dikkat edilmesi gerekenleri şeffaf biçimde açıklıyoruz.",
      "Amaç, aileniz için doğru fiyat-değer dengesini kurabilmeniz: en ucuz ya da en pahalı okul değil, ödediğiniz ücretin karşılığını en iyi veren okul.",
    ],
    sections: [
      {
        heading: "Özel Okul Ücretleri Neye Göre Belirlenir?",
        paragraphs: [
          "Özel okul ücretleri; kademe (anaokulu, ilkokul, ortaokul), sınıf mevcudu, akademik kadro niteliği, yabancı dil programının yoğunluğu, kampüs imkânları ve sunulan ek hizmetlere göre şekillenir.",
          "Millî Eğitim Bakanlığı düzenlemeleri gereği okullar bir sonraki yılın ücretlerini ocak ayında ilan eder ve yıl içinde artış yapamaz. Bu nedenle ocak-şubat dönemi, net fiyat bilgisi almak için en doğru zamandır.",
        ],
      },
      {
        heading: "Ücrete Neler Dâhil? Kalem Kalem Kontrol Listesi",
        paragraphs: [
          "İki okul arasında yalnızca eğitim ücreti üzerinden karşılaştırma yapmak yanıltıcıdır. Toplam maliyeti görmek için şu kalemleri tek tek sorun:",
        ],
        list: [
          "Yemek (öğle yemeği + ara öğünler)",
          "Kitap, defter ve kırtasiye setleri",
          "Okul kıyafetleri",
          "Servis ücreti (güzergâha göre değişir)",
          "Kulüp ve atölye çalışmaları",
          "Etüt ve hafta sonu kursları",
          "Yayın, deneme sınavı ve dijital platform üyelikleri",
        ],
      },
      {
        heading: "Erken Kayıt, Kardeş ve Peşin Ödeme İndirimleri",
        paragraphs: [
          "Okulların büyük bölümü erken kayıt döneminde (genellikle ocak-mart) liste fiyatı üzerinden ciddi indirim uygular. Kardeş indirimi, peşin ödeme indirimi ve kurum anlaşmalı indirimler de toplam maliyeti önemli ölçüde düşürebilir.",
          "Görüşme sırasında hangi indirimlerin birleştirilebildiğini (erken kayıt + kardeş gibi) mutlaka sorun. Okulumuzun güncel ücret ve indirim koşulları için iletişim sayfamızdan bize ulaşabilir veya ön kayıt formunu doldurabilirsiniz.",
        ],
      },
      {
        heading: "Taksit ve Ödeme Planı Seçenekleri",
        paragraphs: [
          "Özel okullar genellikle 9-12 aya varan taksit imkânı sunar. Ödeme planını aile bütçenize göre yapılandırmak için kayıt görüşmesinde peşinat oranını, taksit sayısını ve vade farkı uygulanıp uygulanmadığını netleştirin.",
        ],
      },
      {
        heading: "Ucuz Okul mu, Değerli Okul mu?",
        paragraphs: [
          "Düşük ücretli bir okulda kalabalık sınıflar, yüksek öğretmen sirkülasyonu ve ek ücretli hizmetlerle karşılaşabilirsiniz; toplamda hem maliyet artar hem eğitim kalitesi düşer. Fiyat karşılaştırmasını her zaman 'öğrenci başına düşen ilgi' üzerinden yapın: sınıf mevcudu, öğretmen deneyimi ve bireysel takip sistemi.",
          "Okul seçim kriterlerinin tamamı için özel okul seçim rehberimizi inceleyebilirsiniz.",
        ],
      },
    ],
    faqs: [
      {
        question: "Çekmeköy'de özel okul fiyatları ne zaman açıklanır?",
        answer:
          "MEB düzenlemesi gereği özel okullar bir sonraki eğitim yılının ücretlerini ocak ayında ilan eder. En güncel ve net fiyat bilgisi için ocak-şubat döneminde okullarla doğrudan görüşmenizi öneririz.",
      },
      {
        question: "Erken kayıt indirimi ne kadar avantaj sağlar?",
        answer:
          "Erken kayıt döneminde (genellikle ocak-mart) liste fiyatına göre önemli oranda indirim uygulanır. Kardeş ve peşin ödeme indirimleriyle birleştiğinde toplam avantaj ciddi boyutlara ulaşabilir.",
      },
      {
        question: "Boğaziçi İlgi Koleji'nin güncel ücretlerini nasıl öğrenebilirim?",
        answer:
          "Güncel ücret, indirim ve ödeme planı bilgileri için 0216 642 8 642 numaralı telefondan bize ulaşabilir, iletişim sayfamızdan mesaj bırakabilir veya ön kayıt formunu doldurarak randevu oluşturabilirsiniz.",
      },
      {
        question: "Yemek ve kitaplar ücrete dahil mi?",
        answer:
          "Bu, okuldan okula değişir; bu yüzden karşılaştırma yaparken toplam maliyeti sormak gerekir. Kayıt görüşmemizde ücrete dâhil olan tüm hizmetleri kalem kalem ve yazılı olarak paylaşıyoruz.",
      },
    ],
    related: [
      { label: "Ön Kayıt Formu", href: "/kayit/on-kayit" },
      { label: "Kayıt Süreci", href: "/kayit/kayit-sureci" },
      { label: "Özel Okul Seçim Rehberi", href: "/rehber/cekmekoy-ozel-okul-secerken-nelere-dikkat-edilmeli" },
      { label: "Anaokulu Kayıt Rehberi", href: "/rehber/cekmekoy-anaokulu-kayit-rehberi" },
    ],
    ctaText: "Güncel ücret ve erken kayıt avantajları için bugün bizimle iletişime geçin.",
  },
  {
    slug: "cekmekoyde-ilkokula-baslama-rehberi",
    title: "Çekmeköy'de İlkokula Başlama Rehberi: Okul Olgunluğu ve 1. Sınıf Seçimi",
    metaTitle: "Çekmeköy İlkokul Kayıt ve 1. Sınıf Seçim Rehberi | Boğaziçi İlgi Koleji",
    metaDescription:
      "Çocuğunuz ilkokula hazır mı? Okul olgunluğu belirtileri, 1. sınıf öğretmeni seçiminin önemi, okuma-yazma süreci ve Çekmeköy'de ilkokul kaydı rehberi.",
    category: "İlkokul",
    readingMinutes: 7,
    date: "2026-07-30",
    intro: [
      "İlkokula başlamak, çocuğun hayatındaki en önemli geçişlerden biridir. \"Çocuğum okula hazır mı?\", \"69 aylıkken mi başlatmalıyım, bir yıl beklemeli miyim?\", \"1. sınıf öğretmeni ne kadar önemli?\" soruları Çekmeköy'de ilkokul araştıran her velinin gündemindedir.",
      "Bu rehberde okul olgunluğunun işaretlerini, doğru ilkokulu seçme kriterlerini ve ilk yılın nasıl geçeceğini adım adım anlatıyoruz.",
    ],
    sections: [
      {
        heading: "Okul Olgunluğu Nedir, Nasıl Anlaşılır?",
        paragraphs: [
          "Okul olgunluğu yalnızca yaşla ölçülmez; çocuğun bilişsel, sosyal-duygusal ve motor gelişiminin okul yaşamının gerektirdiği düzeye ulaşmasıdır. Kalem tutma, yönerge takip etme, 20-25 dakika bir etkinliğe odaklanabilme, ihtiyaçlarını ifade edebilme ve akranlarıyla iş birliği yapabilme temel göstergelerdir.",
          "Resmî düzenlemeye göre 69 ayını dolduran çocukların ilkokul kaydı yapılabilir; ancak gelişim her çocukta farklı seyreder. Kararsız kaldığınızda okulun rehberlik biriminden okul olgunluğu değerlendirmesi talep edin — okulumuz kayıt öncesinde bu değerlendirmeyi ücretsiz sunmaktadır.",
        ],
      },
      {
        heading: "1. Sınıf Öğretmeni Neden Bu Kadar Önemli?",
        paragraphs: [
          "İlkokulun ilk yılı, çocuğun okulla ve öğrenmeyle kuracağı ilişkinin temelini atar. Sabırlı, deneyimli ve erken okuryazarlık konusunda uzman bir sınıf öğretmeni; okuma-yazma sürecini kaygısız ve keyifli hâle getirir.",
          "Okul ziyaretinizde 1. sınıf öğretmenlerinin deneyimini, sınıf mevcudunu ve okuma-yazma öğretiminde hangi yöntemin izlendiğini sorun. Mümkünse öğretmenle tanışma talebinde bulunun.",
        ],
      },
      {
        heading: "İlkokul Seçiminde Öne Çıkan Kriterler",
        paragraphs: ["İlkokul kademesinde şu başlıklar belirleyicidir:"],
        list: [
          "Sınıf mevcudu (ideali 16-20 öğrenci)",
          "Okuma-yazma öğretim yöntemi ve bireysel hız takibi",
          "İngilizce programının yoğunluğu ve etkinlik temelli olması",
          "Ödev ve ders çalışma alışkanlığı kazandırma sistemi",
          "Oyun ve hareket alanlarının yeterliliği",
          "Rehberlik biriminin sınıf içi gözlem sıklığı",
          "Okul sonrası etüt ve kulüp imkânları",
        ],
      },
      {
        heading: "Okuma-Yazma Süreci Nasıl İlerler?",
        paragraphs: [
          "Türkiye'de okuma-yazma öğretimi ses temelli cümle yöntemiyle yürütülür; çoğu çocuk aralık-şubat döneminde okumaya geçer. Önemli olan hız değil, anlayarak okuma becerisinin sağlam kurulmasıdır.",
          "Her çocuğun okumaya geçiş hızı farklıdır. Nitelikli bir ilkokul, hızlı ilerleyen öğrenciyi zenginleştirilmiş etkinliklerle desteklerken, daha fazla zamana ihtiyaç duyan öğrenciye bireysel çalışma planı sunar.",
        ],
      },
      {
        heading: "İlk Haftalarda Aileler Neler Yapmalı?",
        paragraphs: [
          "Okula uyum sürecinde düzenli uyku saati, kahvaltı rutini ve okul hakkında olumlu dil kullanmak çocuğun güven duygusunu besler. Çocuğunuzun gününü \"Bugün en çok neye güldün?\" gibi açık uçlu sorularla dinleyin; performans odaklı sorulardan (\"Kaç harf öğrendin?\") kaçının.",
          "Okulla düzenli iletişim kurun ancak süreci öğretmene bırakma konusunda da güven gösterin. Boğaziçi İlgi Koleji'nde 1. sınıf velileri için düzenli bilgilendirme toplantıları ve bireysel görüşme takvimleri uygulanır.",
        ],
      },
    ],
    faqs: [
      {
        question: "Çocuğum 69 aylık, ilkokula başlatmalı mıyım?",
        answer:
          "Yaş tek başına belirleyici değildir. Odaklanma süresi, öz bakım becerileri, yönerge takibi ve sosyal olgunluk birlikte değerlendirilmelidir. Okulumuzun rehberlik birimi kayıt öncesinde ücretsiz okul olgunluğu değerlendirmesi yapmaktadır.",
      },
      {
        question: "1. sınıfta sınıf mevcudu kaç olmalı?",
        answer:
          "Okuma-yazma sürecinde her çocuğun bireysel hızda ilerleyebilmesi için ideal mevcut 16-20 öğrencidir. Kalabalık sınıflarda öğretmenin her öğrenciyi günlük takip etmesi zorlaşır.",
      },
      {
        question: "İlkokulda ödev veriliyor mu?",
        answer:
          "Nitelikli ilkokullarda ödev, alışkanlık kazandırma amaçlı ve yaşa uygun sürelerde verilir. 1. sınıfta günlük 20-30 dakikayı aşmayan, pekiştirme odaklı çalışmalar idealdir.",
      },
      {
        question: "Anaokulundan aynı okulun ilkokuluna geçiş avantajlı mı?",
        answer:
          "Evet. Tanıdık ortam, arkadaş grubu ve öğretmen kadrosu uyum sürecini kısaltır; okul da çocuğun gelişim geçmişini bildiği için ilk günden doğru desteği planlayabilir.",
      },
    ],
    related: [
      { label: "İlkokul Programımız", href: "/akademik/ilkokul" },
      { label: "Anaokulu Kayıt Rehberi", href: "/rehber/cekmekoy-anaokulu-kayit-rehberi" },
      { label: "Özel Okul Seçim Rehberi", href: "/rehber/cekmekoy-ozel-okul-secerken-nelere-dikkat-edilmeli" },
      { label: "Ön Kayıt Formu", href: "/kayit/on-kayit" },
    ],
    ctaText: "1. sınıf kontenjanlarımız ve okul olgunluğu değerlendirmesi için randevu oluşturun.",
  },
  {
    slug: "cekmekoy-okul-kayit-donemi-rehberi",
    title: "Çekmeköy Okul Kayıt Dönemi Rehberi: Tarihler, Belgeler ve İpuçları",
    metaTitle: "Çekmeköy Okul Kayıt Rehberi 2026-2027: Tarihler ve Belgeler",
    metaDescription:
      "Çekmeköy'de okul kaydı nasıl yapılır? 2026-2027 kayıt takvimi, gerekli belgeler, nakil süreci, erken kayıt avantajları ve okul ziyareti ipuçları tek rehberde.",
    category: "Fiyatlar & Kayıt",
    readingMinutes: 6,
    date: "2026-08-01",
    intro: [
      "\"Çekmeköy okul kayıt\" araması yapan velilerin en sık karşılaştığı sorun, dağınık ve güncel olmayan bilgiler. Bu rehberde özel okul kayıt sürecinin tamamını — takvim, belgeler, nakil işlemleri ve görüşme ipuçları — tek bir yerde topladık.",
      "İster anaokulu, ister ilkokul ya da ortaokul kaydı planlıyor olun, aşağıdaki adımlar süreci sorunsuz tamamlamanızı sağlar.",
    ],
    sections: [
      {
        heading: "Özel Okul Kayıt Takvimi Nasıl İşler?",
        paragraphs: [
          "Özel okullarda kayıt süreci devlet okullarından farklıdır: adrese dayalı kayıt zorunluluğu yoktur ve kayıtlar yıl boyunca kontenjan durumuna göre alınabilir. Ancak pratikte takvim şöyle işler:",
        ],
        list: [
          "Ocak-Şubat: Yeni yıl ücretlerinin ilanı ve erken kayıt döneminin başlaması",
          "Mart-Nisan: Mevcut öğrenci kayıt yenilemeleri, kontenjanların netleşmesi",
          "Mayıs-Haziran: Yeni kayıt yoğunluğunun zirve dönemi",
          "Temmuz-Ağustos: Kalan kontenjanlar için son başvurular",
          "Eylül ve sonrası: Kontenjan uygunluğuna göre ara kayıt ve nakiller",
        ],
      },
      {
        heading: "Kayıt İçin Gerekli Belgeler",
        paragraphs: ["Özel okul kaydında genellikle şu belgeler istenir:"],
        list: [
          "Öğrenci ve veli kimlik fotokopileri",
          "Vesikalık fotoğraf (4-6 adet)",
          "İkametgâh belgesi (e-Devlet)",
          "Anaokulu için aşı kartı",
          "Ara sınıf kayıtlarında önceki okuldan karne / transkript",
          "Varsa sağlık raporu ve özel durum bilgilendirmeleri",
        ],
      },
      {
        heading: "Başka Okuldan Nakil (Ara Kayıt) Nasıl Yapılır?",
        paragraphs: [
          "Özel okula nakil işlemi e-Okul sistemi üzerinden yürütülür ve veli açısından oldukça basittir: yeni okula kayıt başvurusu yapılır, okul kabul ettiğinde nakil e-Okul üzerinden elektronik olarak gerçekleşir. Eski okuldan fiziksel evrak toplamak çoğu durumda gerekmez.",
          "Dönem ortası nakillerde çocuğun akademik uyumu için okulun seviye belirleme ve destek programı sunup sunmadığını sorun. Okulumuz ara kayıtla gelen her öğrenci için bireysel uyum ve telafi planı hazırlar.",
        ],
      },
      {
        heading: "Kayıt Görüşmesine Hazırlık: 5 İpucu",
        paragraphs: ["Okul ziyaretinizden en yüksek verimi almak için:"],
        list: [
          "Randevuyu ders saatleri içinde alın; okulu doğal akışında gözlemleyin.",
          "Soru listenizi önceden hazırlayın (sınıf mevcudu, kadro, ücrete dâhil hizmetler).",
          "Çocuğunuzu da ziyarete götürün, tepkilerini gözlemleyin.",
          "Ücret ve indirim koşullarını yazılı olarak isteyin.",
          "Aynı hafta içinde 2-3 okulu gezerek taze karşılaştırma yapın.",
        ],
      },
      {
        heading: "Erken Kayıt Neden Önemli?",
        paragraphs: [
          "Erken kayıt yalnızca indirim avantajı sağlamaz; popüler yaş gruplarında (anaokulu ve 1. sınıf başta olmak üzere) kontenjan güvencesi de verir. Karar sürecinizi ocak-mart dönemine planlamak, hem ekonomik hem de seçenek açısından en avantajlı yoldur.",
          "Boğaziçi İlgi Koleji'nde kayıt sürecinin adımlarını kayıt süreci sayfamızda bulabilir, ön kayıt formunu doldurarak sıranızı şimdiden alabilirsiniz.",
        ],
      },
    ],
    faqs: [
      {
        question: "Özel okul kaydı için adres şartı var mı?",
        answer:
          "Hayır. Devlet okullarındaki adrese dayalı kayıt sistemi özel okullar için geçerli değildir. İstanbul'un herhangi bir ilçesinden Çekmeköy'deki bir özel okula kayıt yaptırabilirsiniz; servis güzergâhı uygunluğunu kontrol etmeniz yeterlidir.",
      },
      {
        question: "Dönem ortasında okul değiştirmek mümkün mü?",
        answer:
          "Evet. Kontenjan uygun olduğu sürece nakil işlemi e-Okul üzerinden her dönem yapılabilir. Okulumuz ara kayıtla gelen öğrenciler için bireysel uyum ve telafi programı uygular.",
      },
      {
        question: "Ön kayıt yaptırmak kesin kayıt anlamına mı gelir?",
        answer:
          "Hayır. Ön kayıt, kontenjan önceliği sağlayan ve tanışma görüşmesi planlamamıza imkân veren bir başvurudur; herhangi bir ödeme yükümlülüğü doğurmaz.",
      },
      {
        question: "Kayıt görüşmesi için randevu almak gerekiyor mu?",
        answer:
          "Önerilir. Randevulu ziyaretlerde kayıt birimi ve rehberlik ekibi size özel zaman ayırır, kampüs turu ve kademe öğretmenleriyle tanışma planlanabilir. 0216 642 8 642 numaralı telefondan randevu oluşturabilirsiniz.",
      },
    ],
    related: [
      { label: "Kayıt Süreci", href: "/kayit/kayit-sureci" },
      { label: "Ön Kayıt Formu", href: "/kayit/on-kayit" },
      { label: "Çekmeköy Özel Okul Fiyatları Rehberi", href: "/rehber/cekmekoy-ozel-okul-fiyatlari-rehberi" },
      { label: "İletişim", href: "/iletisim" },
    ],
    ctaText: "2026-2027 kayıt dönemi devam ediyor. Ön kayıt oluşturun, size özel kampüs turu planlayalım.",
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
