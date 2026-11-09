import type { Language } from "./i18n";

type TranslationMap = Record<string, { tr: string; en: string }>;

const ui: TranslationMap = {
  "nav.home": { tr: "Ana Sayfa", en: "Home" },
  "nav.about": { tr: "Kurumsal", en: "About Us" },
  "nav.academic": { tr: "Akademik", en: "Academics" },
  "nav.campus": { tr: "Kampüs", en: "Campus" },
  "nav.enrollment": { tr: "Kayıt", en: "Enrollment" },
  "nav.news": { tr: "Haberler", en: "News" },
  "nav.contact": { tr: "İletişim", en: "Contact" },
  "nav.about.story": { tr: "Kuruluş Hikâyesi", en: "Our Founding Story" },
  "nav.about.logo": { tr: "Logomuzun Hikâyesi", en: "The Story of Our Logo" },
  "nav.about.board": { tr: "Yönetim Kurulu", en: "Board of Directors" },
  "nav.about.staff": { tr: "İdari Kadro", en: "Administrative Staff" },
  "nav.about.advisors": { tr: "Danışmanlar", en: "Advisors" },
  "nav.about.vision": { tr: "Vizyon & Misyon", en: "Vision & Mission" },
  "nav.about.holistic": { tr: "Bütüncül Eğitim Modelimiz", en: "Our Holistic Education Model" },
  "nav.about.biliva": { tr: "BİLİVA Eğitim Modeli", en: "BİLİVA Education Model" },
  "nav.about.approach": { tr: "Eğitim Yaklaşımımız", en: "Our Approach to Education" },
  "nav.academic.preschool": { tr: "Anaokulu", en: "Preschool" },
  "nav.academic.primary": { tr: "İlkokul", en: "Primary School" },
  "nav.academic.middle": { tr: "Ortaokul", en: "Middle School" },
  "nav.academic.design": { tr: "Yaratıcı Tasarım Atölyesi", en: "Creative Design Workshop" },
  "nav.campus.facilities": { tr: "İmkanlar", en: "Facilities" },
  "nav.campus.gallery": { tr: "Galeri", en: "Gallery" },
  "nav.enrollment.process": { tr: "Kayıt Süreci", en: "Enrollment Process" },
  "nav.enrollment.form": { tr: "Ön Kayıt Formu", en: "Pre-Registration Form" },
  "nav.guides": { tr: "Veli Rehberi", en: "Parent Guides" },
  "nav.menu": { tr: "Menü", en: "Menu" },
  "nav.overview": { tr: "Genel Bakış", en: "Overview" },
  "nav.preregister": { tr: "Ön Kayıt Yap", en: "Pre-Register" },

  "hero.title": { tr: "Boğaziçi Vizyonuyla Geleceğe", en: "Towards the Future with the Boğaziçi Vision" },
  "hero.subtitle": { tr: "Anaokulundan ortaokula uzanan, akademik başarıyı kişisel gelişimle bütünleştiren bir eğitim yolculuğu.", en: "An educational journey from kindergarten to middle school that integrates academic success with personal development." },
  "hero.cta": { tr: "Kampüsü Keşfet", en: "Explore Campus" },

  "stats.experience": { tr: "Yıllık Tecrübe", en: "Years of Experience" },
  "stats.graduates": { tr: "Mezun", en: "Graduates" },
  "stats.placement": { tr: "Üniversite Yerleşimi", en: "University Placement" },
  "stats.ratio": { tr: "Öğrenci / Öğretmen Oranı", en: "Student / Teacher Ratio" },

  "features.global.title": { tr: "Global Eğitim", en: "Global Education" },
  "features.global.desc": { tr: "Uluslararası standartlarda yabancı dil ve akademik programlar.", en: "Foreign language and academic programs at international standards." },
  "features.stem.title": { tr: "STEM & Robotik", en: "STEM & Robotics" },
  "features.stem.desc": { tr: "Geleceğin teknolojilerini bugünden kodlayan nesiller.", en: "Generations coding tomorrow's technologies today." },
  "features.arts.title": { tr: "Sanat ve Spor", en: "Arts & Sports" },
  "features.arts.desc": { tr: "Her öğrencinin yeteneğini keşfeden bütünsel gelişim.", en: "Holistic development that discovers every student's talent." },

  "school.slogan": { tr: "Boğaziçi Vizyonuyla Geleceğe", en: "Towards the Future with the Boğaziçi Vision" },
  "school.description": { tr: "Anaokulundan ortaokula uzanan bütüncül eğitim yolculuğu.", en: "A holistic educational journey from kindergarten to middle school." },

  "footer.corporate": { tr: "Kurumsal", en: "Corporate" },
  "footer.academic": { tr: "Akademik", en: "Academic" },
  "footer.enrollment_contact": { tr: "Kayıt & İletişim", en: "Enrollment & Contact" },
  "footer.rights": { tr: "Tüm Hakları Saklıdır.", en: "All Rights Reserved." },
  "footer.developer": { tr: "Geliştirici & Tasarım", en: "Developer & Design" },

  "campus360.badge": { tr: "360° Sanal Tur", en: "360° Virtual Tour" },
  "campus360.title": { tr: "Kampüsümüzü Keşfedin", en: "Explore Our Campus" },
  "campus360.desc": { tr: "Okulumuzun her köşesini 360 derece sanal tur ile yakından inceleyin.", en: "Take a closer look at every corner of our school with a 360-degree virtual tour." },
  "campus360.play": { tr: "Tıklayarak tam ekranda başlatın", en: "Click to start in full screen" },
  "campus360.view": { tr: "360° görüntü", en: "360° view" },
  "campus360.mouse_hint": { tr: "Fareyi sürükleyerek etrafınıza bakın.", en: "Drag the mouse to look around." },
  "campus360.touch_hint": { tr: "Parmağınızla sürükleyin.", en: "Swipe with your finger." },
  "campus360.fullscreen": { tr: "Tam ekran açılır.", en: "Opens in full screen." },
  "campus360.drag_desktop": { tr: "Fareyi basılı tutup sürükleyin", en: "Click and drag to look around" },
  "campus360.drag_mobile": { tr: "Parmağınızla sürükleyin", en: "Swipe to look around" },
  "campus360.drag_desktop_detail": { tr: "Sağa, sola, yukarı ve aşağı sürükleyerek okulun her köşesini keşfedin.", en: "Drag left, right, up, and down to explore every corner of the school." },
  "campus360.drag_mobile_detail": { tr: "Sağa ve sola kaydırarak okulun her köşesini keşfedin.", en: "Swipe left and right to explore every corner of the school." },

  "cta.title": { tr: "Her Çocuğun Geleceğinde Bir İz Bırakmak", en: "Leaving a Mark on Every Child's Future" },
  "cta.desc": { tr: "Okulumuzun sunduğu eğitim imkanlarını keşfedin, kampüsümüzü ziyaret edin.", en: "Discover the educational opportunities our school offers, visit our campus." },
  "cta.register": { tr: "Ön Kayıt Yap", en: "Pre-Register" },
  "cta.contact": { tr: "Bizi Arayın", en: "Call Us" },

  "levels.title": { tr: "Eğitim Birimleri", en: "Education Levels" },
  "levels.desc": { tr: "Anaokulundan ortaokula uzanan, birbirini tamamlayan bütüncül eğitim yolculuğu.", en: "A holistic educational journey from kindergarten to middle school, where each stage complements the next." },
  "levels.preschool": { tr: "Anaokulu", en: "Preschool" },
  "levels.preschool.ages": { tr: "3-6 Yaş", en: "Ages 3-6" },
  "levels.preschool.desc": { tr: "Oyunla, keşifle ve merakla öğrenmenin temellerini atıyoruz.", en: "We lay the foundations of learning through play, discovery and curiosity." },
  "levels.primary": { tr: "İlkokul", en: "Primary School" },
  "levels.primary.ages": { tr: "1-4. Sınıf", en: "Grades 1-4" },
  "levels.primary.desc": { tr: "Merakı bilgiye, bilgiyi düşünceye dönüştüren güçlü bir akademik temel.", en: "A strong academic foundation that turns curiosity into knowledge and knowledge into thought." },
  "levels.middle": { tr: "Ortaokul", en: "Middle School" },
  "levels.middle.ages": { tr: "5-8. Sınıf", en: "Grades 5-8" },
  "levels.middle.desc": { tr: "Bilgiyi sorgulayan, düşüncelerini geliştiren ve geleceğine yön veren nesiller.", en: "Generations who question knowledge, develop their thoughts and give direction to their future." },
  "levels.details": { tr: "Detaylı bilgi", en: "Learn more" },

  "testimonials.title": { tr: "Velilerimizden", en: "From Our Parents" },
  "testimonials.desc": { tr: "Ailelerimizin okulumuz hakkındaki değerli görüşleri", en: "Valuable feedback from our families about our school" },

  "announcements.title": { tr: "Duyurular", en: "Announcements" },
  "announcements.news": { tr: "Haberler", en: "News" },
  "announcements.all_news": { tr: "Tüm haberler", en: "All news" },
  "announcements.all_announcements": { tr: "Tüm duyurular", en: "All announcements" },
  "announcements.read_more": { tr: "Devamını oku", en: "Read more" },

  "facilities.title": { tr: "Kampüs İmkanları", en: "Campus Facilities" },
  "facilities.desc": { tr: "Modern ve donanımlı eğitim alanlarımız", en: "Our modern and well-equipped educational spaces" },
  "facilities.explore": { tr: "Tüm imkanları keşfet", en: "Explore all facilities" },

  "features_showcase.title": { tr: "Neden biz?", en: "Why us?" },
  "features_showcase.desc": { tr: "Öğrencilerimize sunduğumuz eğitim farkı", en: "The educational difference we offer our students" },

  "video.title": { tr: "Okulumuzdan Kareler", en: "Scenes from Our School" },
  "video.desc": { tr: "Kampüsümüzden ve etkinliklerimizden görüntüler", en: "Videos from our campus and activities" },

  "contact.title": { tr: "İletişim", en: "Contact" },
  "contact.subtitle": { tr: "Bizimle İletişime Geçin", en: "Get in Touch with Us" },
  "contact.form.name": { tr: "Adınız Soyadınız", en: "Full Name" },
  "contact.form.email": { tr: "E-posta Adresiniz", en: "Your Email" },
  "contact.form.phone": { tr: "Telefon Numaranız", en: "Your Phone Number" },
  "contact.form.subject": { tr: "Konu", en: "Subject" },
  "contact.form.message": { tr: "Mesajınız", en: "Your Message" },
  "contact.form.submit": { tr: "Mesaj Gönder", en: "Send Message" },
  "contact.form.sending": { tr: "Gönderiliyor...", en: "Sending..." },
  "contact.form.success": { tr: "Mesajınız başarıyla gönderildi!", en: "Your message has been sent successfully!" },
  "contact.form.success_desc": { tr: "En kısa sürede size dönüş yapacağız.", en: "We will get back to you as soon as possible." },
  "contact.info.title": { tr: "İletişim Bilgileri", en: "Contact Information" },
  "contact.info.phone": { tr: "Telefon", en: "Phone" },
  "contact.info.email": { tr: "E-posta", en: "Email" },
  "contact.info.address": { tr: "Adres", en: "Address" },
  "contact.info.hours": { tr: "Çalışma Saatleri", en: "Working Hours" },
  "contact.info.hours_detail": { tr: "Pazartesi - Cuma: 07:00 - 18:30", en: "Monday - Friday: 07:00 AM - 6:30 PM" },
  "contact.map.title": { tr: "Bizi Ziyaret Edin", en: "Visit Us" },

  "enrollment.title": { tr: "Kayıt İşlemleri", en: "Enrollment" },
  "enrollment.subtitle": { tr: "2026-2027 Eğitim Öğretim Yılı Kayıtları", en: "2026-2027 Academic Year Enrollment" },
  "enrollment.process": { tr: "Kayıt Süreci", en: "Enrollment Process" },
  "enrollment.preregister": { tr: "Ön Kayıt Formu", en: "Pre-Registration Form" },
  "enrollment.info": { tr: "Kayıt için gerekli belgeler ve süreç hakkında bilgi alın.", en: "Get information about required documents and the enrollment process." },

  "enrollment_process.title": { tr: "Kayıt Süreci", en: "Enrollment Process" },
  "enrollment_process.subtitle": { tr: "Adım Adım Kayıt İşlemleri", en: "Step-by-Step Enrollment Procedures" },

  "preregister.title": { tr: "Ön Kayıt Formu", en: "Pre-Registration Form" },
  "preregister.subtitle": { tr: "Çocuğunuzun Geleceği İçin İlk Adım", en: "The First Step for Your Child's Future" },
  "preregister.student_name": { tr: "Öğrenci Adı Soyadı", en: "Student Full Name" },
  "preregister.birth_date": { tr: "Doğum Tarihi", en: "Date of Birth" },
  "preregister.grade": { tr: "Başvurulan Kademe", en: "Applying Grade" },
  "preregister.parent_name": { tr: "Veli Adı Soyadı", en: "Parent Full Name" },
  "preregister.parent_phone": { tr: "Veli Telefon", en: "Parent Phone" },
  "preregister.parent_email": { tr: "Veli E-posta", en: "Parent Email" },
  "preregister.current_school": { tr: "Mevcut Okul", en: "Current School" },
  "preregister.notes": { tr: "Notlar", en: "Notes" },
  "preregister.submit": { tr: "Ön Kayıt Gönder", en: "Submit Pre-Registration" },
  "preregister.sending": { tr: "Gönderiliyor...", en: "Sending..." },
  "preregister.success": { tr: "Ön kaydınız başarıyla alındı!", en: "Your pre-registration has been received!" },
  "preregister.success_desc": { tr: "En kısa sürede sizinle iletişime geçeceğiz.", en: "We will contact you as soon as possible." },
  "preregister.select_grade": { tr: "Kademe seçiniz", en: "Select grade" },
  "preregister.grade.preschool": { tr: "Anaokulu", en: "Preschool" },
  "preregister.grade.primary": { tr: "İlkokul", en: "Primary School" },
  "preregister.grade.middle": { tr: "Ortaokul", en: "Middle School" },





  "news.title": { tr: "Haberler & Duyurular", en: "News & Announcements" },
  "news.subtitle": { tr: "Okulumuzdan Son Gelişmeler", en: "Latest Updates from Our School" },
  "news.tab.news": { tr: "Haberler", en: "News" },
  "news.tab.announcements": { tr: "Duyurular", en: "Announcements" },
  "news.back": { tr: "Geri dön", en: "Go back" },

  "campus.title": { tr: "Kampüsümüz", en: "Our Campus" },
  "campus.subtitle": { tr: "Modern Eğitim Ortamımız", en: "Our Modern Educational Environment" },
  "campus.tab.facilities": { tr: "İmkanlar", en: "Facilities" },
  "campus.tab.gallery": { tr: "Galeri", en: "Gallery" },

  "programs.title": { tr: "Programlarımız", en: "Our Programs" },
  "programs.subtitle": { tr: "Zengin Eğitim Programlarımız", en: "Our Rich Educational Programs" },

  "achievements.title": { tr: "Başarılarımız", en: "Our Achievements" },
  "achievements.subtitle": { tr: "Gurur Duyduğumuz Başarılar", en: "Achievements We Are Proud Of" },

  "parent_student.title": { tr: "Veli & Öğrenci", en: "Parents & Students" },
  "parent_student.subtitle": { tr: "Bilgilendirme ve Kaynaklar", en: "Information and Resources" },

  "notfound.title": { tr: "Sayfa bulunamadı", en: "Page not found" },
  "notfound.desc": { tr: "Aradığınız sayfa mevcut değil veya taşınmış olabilir.", en: "The page you are looking for does not exist or may have been moved." },
  "notfound.home": { tr: "Ana sayfaya dön", en: "Return to home" },

  "chatbot.name": { tr: "Boğaziçi İlgi Asistanı", en: "Boğaziçi İlgi Assistant" },
  "chatbot.greeting": { tr: "Merhaba! Size nasıl yardımcı olabilirim?", en: "Hello! How can I help you?" },
  "chatbot.placeholder": { tr: "Mesajınızı yazın...", en: "Type your message..." },
  "chatbot.send": { tr: "Gönder", en: "Send" },
};

export function getTranslation(key: string, lang: Language): string {
  const entry = ui[key];
  if (!entry) return key;
  return entry[lang];
}

export const T = getTranslation;

export type NavSubItem = { title: string; href: string; group?: string };
export type NavItem = { title: string; href: string; items?: NavSubItem[]; mega?: boolean; matches?: string[] };

export function getNavigationTranslated(lang: Language): NavItem[] {
  const model = lang === "tr" ? "Modelimiz" : "Our Model";
  const levels = lang === "tr" ? "Kademeler" : "Levels";
  return [
    {
      title: getTranslation("nav.home", lang),
      href: "/",
    },
    {
      title: getTranslation("nav.about", lang),
      href: "/kurumsal",
      items: [
        { title: lang === "tr" ? "Kuruluş Hikâyemiz" : "Our Founding Story", href: "/kurumsal/kurulus-hikayesi" },
        { title: getTranslation("nav.about.logo", lang), href: "/kurumsal/logomuzun-hikayesi" },
        { title: getTranslation("nav.about.vision", lang), href: "/kurumsal/vizyon-misyon" },
      ],
    },
    {
      title: lang === "tr" ? "Eğitim Modelimiz" : "Our Education Model",
      href: "/kurumsal/egitim-yaklasimimiz",
      matches: ["/kurumsal/biliva", "/kurumsal/butuncul", "/kurumsal/egitim-yaklasimimiz", "/akademik/zenginlestirme-birimi", "/akademik/rehberlik-birimi", "/akademik/yabanci-dil-egitimi", "/kurumsal/biliva-sanat-spor-kulupler"],
      items: [
        { title: getTranslation("nav.about.approach", lang), href: "/kurumsal/egitim-yaklasimimiz" },
        { title: getTranslation("nav.about.biliva", lang), href: "/kurumsal/biliva-egitim-modeli" },
        { title: lang === "tr" ? "Bütüncül Eğitim Modeli" : "Holistic Education Model", href: "/kurumsal/butuncul-egitim-modelimiz" },
        { title: lang === "tr" ? "Akademik Zenginleştirme Birimi" : "Academic Enrichment Unit", href: "/akademik/zenginlestirme-birimi" },
        { title: lang === "tr" ? "Okul Öncesi" : "Preschool", href: "/akademik/anaokulu" },
        { title: getTranslation("nav.academic.primary", lang), href: "/akademik/ilkokul" },
        { title: getTranslation("nav.academic.middle", lang), href: "/akademik/ortaokul" },
        { title: lang === "tr" ? "Psikolojik Danışmanlık ve Rehberlik" : "Counseling and Guidance", href: "/akademik/rehberlik-birimi" },
        { title: lang === "tr" ? "Yabancı Dil Eğitimi" : "Foreign Language Education", href: "/akademik/yabanci-dil-egitimi" },
        { title: lang === "tr" ? "Sanat ve Spor Öğrenci Kulüplerimiz" : "Art and Sports Student Clubs", href: "/kurumsal/biliva-sanat-spor-kulupler" },
      ],
    },
    {
      title: getTranslation("nav.campus", lang),
      href: "/kampus",
      items: [
        { title: getTranslation("nav.campus.facilities", lang), href: "/kampus/imkanlar" },
        { title: getTranslation("nav.campus.gallery", lang), href: "/kampus/galeri" },
      ],
    },
    {
      title: getTranslation("nav.contact", lang),
      href: "/iletisim",
    },
  ];
}

export function getFooterLinksTranslated(lang: Language) {
  return {
    kurumsal: [
      { title: getTranslation("nav.about.story", lang), href: "/kurumsal/kurulus-hikayesi" },
      { title: getTranslation("nav.about.logo", lang), href: "/kurumsal/logomuzun-hikayesi" },
      { title: getTranslation("nav.about.vision", lang), href: "/kurumsal/vizyon-misyon" },
    ],
    model: [
      { title: getTranslation("nav.about.approach", lang), href: "/kurumsal/egitim-yaklasimimiz" },
      { title: getTranslation("nav.about.biliva", lang), href: "/kurumsal/biliva-egitim-modeli" },
      { title: lang === "tr" ? "Bütüncül Eğitim Modeli" : "Holistic Education Model", href: "/kurumsal/butuncul-egitim-modelimiz" },
      { title: lang === "tr" ? "Akademik Zenginleştirme Birimi" : "Academic Enrichment Unit", href: "/akademik/zenginlestirme-birimi" },
    ],
    akademik: [
      { title: lang === "tr" ? "Okul Öncesi" : "Preschool", href: "/akademik/anaokulu" },
      { title: getTranslation("nav.academic.primary", lang), href: "/akademik/ilkokul" },
      { title: getTranslation("nav.academic.middle", lang), href: "/akademik/ortaokul" },
      { title: lang === "tr" ? "Psikolojik Danışmanlık ve Rehberlik" : "Counseling and Guidance", href: "/akademik/rehberlik-birimi" },
      { title: lang === "tr" ? "Yabancı Dil Eğitimi" : "Foreign Language Education", href: "/akademik/yabanci-dil-egitimi" },
      { title: lang === "tr" ? "Sanat ve Spor Öğrenci Kulüplerimiz" : "Art and Sports Student Clubs", href: "/kurumsal/biliva-sanat-spor-kulupler" },
    ],
    kayit: [
      { title: getTranslation("nav.campus.facilities", lang), href: "/kampus/imkanlar" },
      { title: getTranslation("nav.campus.gallery", lang), href: "/kampus/galeri" },
      { title: getTranslation("nav.contact", lang), href: "/iletisim" },
    ],
  };
}

export function getNewsTranslated(lang: Language) {
  if (lang === "tr") {
    return {
      news: [
        { id: 0, slug: "kodlama-robotik-atolyesi-yenilendi", title: "Kodlama ve Robotik Atölyemiz Yenilendi", date: "10 Şubat 2026", category: "Gelişme", summary: "Son teknoloji ekipmanlarla yenilenen Kodlama ve Robotik Atölyemizde öğrencilerimiz geleceğin becerilerini kazanıyor.", image: "/images/coding-lab-1.webp", content: "<p>Kodlama ve Robotik Atölyemiz, en güncel ekipmanlar ve yazılım araçlarıyla yeniden tasarlandı. Öğrencilerimiz algoritmik düşünme, robotik programlama ve dijital okuryazarlık alanlarında kapsamlı bir deneyim yaşıyor.</p>" },
        { id: 1, slug: "fen-laboratuvari-yenilendi", title: "Fen Laboratuvarımız Yenilendi", date: "01 Şubat 2026", category: "Gelişme", summary: "Modern donanımlarla yenilenen fen laboratuvarımız, öğrencilerimize deneysel öğrenme için en iyi ortamı sunuyor.", image: "/images/science-lab-new.webp", content: "<p>Okulumuzun fen laboratuvarı, en son teknoloji deney ekipmanları ve interaktif öğrenme araçlarıyla yeniden düzenlendi. Öğrencilerimiz artık fizik, kimya ve biyoloji deneylerini daha güvenli ve verimli bir ortamda gerçekleştirebilecek.</p>" },
        { id: 2, slug: "sanat-atolyesi-sergisi", title: "Sanat Atölyesi Öğrenci Sergisi Açıldı", date: "25 Ocak 2026", category: "Etkinlik", summary: "Öğrencilerimizin dönem boyunca hazırladığı eserler, sanat atölyemizde sergileniyor.", image: "/images/art-room-new-1.webp", content: "<p>Görsel Sanatlar derslerinde öğrencilerimizin ürettiği resim, heykel ve seramik çalışmaları sanat atölyemizde sergilenmektedir. Sergimiz, velilerimizin de ziyaretine açıktır.</p>" },
        { id: 3, slug: "spor-salonu-etkinlikleri", title: "Spor Salonumuzda Turnuva Heyecanı", date: "18 Ocak 2026", category: "Spor", summary: "Okullar arası basketbol turnuvasında öğrencilerimiz büyük başarı gösterdi.", image: "/images/sports-hall-1.webp", content: "<p>Kapalı spor salonumuzda düzenlenen okullar arası basketbol turnuvasında öğrencilerimiz mükemmel bir performans sergileyerek ilçe birinciliğini kazandı. Tebrikler!</p>" },
        { id: 4, slug: "muzik-odasi-konseri", title: "Müzik Odamızda Öğrenci Konseri Gerçekleşti", date: "10 Ocak 2026", category: "Etkinlik", summary: "Piyano ve keman öğrencilerimiz dönem sonu konserinde ailelerine unutulmaz bir müzik ziyafeti sundu.", image: "/images/music-room-1.webp", content: "<p>Müzik odamızda düzenlenen dönem sonu konserinde piyano ve keman öğrencilerimiz birbirinden güzel eserler seslendirdi. Velilerimizin yoğun katılımıyla gerçekleşen konser büyük beğeni topladı.</p>" },
      ],
      announcements: [
        { id: 1, title: "2026-2027 Eğitim Öğretim Yılı Kayıt Dönemi Başladı", date: "03.02.2026", category: "Kayıt", summary: "Yeni eğitim yılı kayıtlarımız başlamıştır. Erken kayıt avantajlarından yararlanmak için acele edin!", isImportant: true },
        { id: 2, title: "2. Dönem Veli Toplantısı", date: "28.01.2026", category: "Toplantı", summary: "2. dönem veli toplantımız 10 Şubat Salı günü saat 14:00'te gerçekleşecektir.", isImportant: false },
        { id: 3, title: "Şubat Ayı Yemek Listesi", date: "25.01.2026", category: "Bilgilendirme", summary: "Şubat ayı yemek listemiz yayınlanmıştır. Detaylı bilgi için tıklayınız.", isImportant: false },
        { id: 4, title: "Yarıyıl Tatili Etkinlik Programı", date: "20.01.2026", category: "Etkinlik", summary: "Sömestr tatilinde öğrencilerimiz için spor, sanat ve bilim atölyeleri düzenlenecektir.", isImportant: false },
        { id: 5, title: "Karne Töreni Programı", date: "17.01.2026", category: "Program", summary: "1. dönem karne törenimiz 24 Ocak Cuma günü saat 10:00'da gerçekleşecektir.", isImportant: false },
        { id: 6, title: "Okul Aile Birliği Toplantısı Sonuçları", date: "10.01.2026", category: "Toplantı", summary: "Okul Aile Birliği toplantı kararları velilerimizle paylaşılmıştır.", isImportant: false },
      ],
    };
  }
  return {
    news: [
      { id: 0, slug: "coding-robotics-workshop-renewed", title: "Our Coding and Robotics Workshop Has Been Renewed", date: "February 10, 2026", category: "Development", summary: "Our Coding and Robotics Workshop, renewed with state-of-the-art equipment, helps students gain the skills of the future.", image: "/images/coding-lab-1.webp", content: "<p>Our Coding and Robotics Workshop has been redesigned with the latest equipment and software tools. Students experience algorithmic thinking, robotic programming, and digital literacy in a comprehensive learning environment.</p>" },
      { id: 1, slug: "science-lab-renewed", title: "Our Science Laboratory Has Been Renewed", date: "February 1, 2026", category: "Development", summary: "Our science laboratory, renewed with modern equipment, provides students with the best environment for experimental learning.", image: "/images/science-lab-new.webp", content: "<p>Our school's science laboratory has been redesigned with the latest technology experiment equipment and interactive learning tools. Students can now conduct physics, chemistry, and biology experiments in a safer and more efficient environment.</p>" },
      { id: 2, slug: "art-workshop-exhibition", title: "Student Art Exhibition Opens", date: "January 25, 2026", category: "Event", summary: "Works prepared by our students throughout the semester are on display in our art workshop.", image: "/images/art-room-new-1.webp", content: "<p>Paintings, sculptures, and ceramic works produced by our students in Visual Arts classes are on display in our art workshop. The exhibition is also open to parents.</p>" },
      { id: 3, slug: "sports-hall-tournament", title: "Tournament Excitement in Our Sports Hall", date: "January 18, 2026", category: "Sports", summary: "Our students showed great success in the inter-school basketball tournament.", image: "/images/sports-hall-1.webp", content: "<p>Our students delivered an excellent performance in the inter-school basketball tournament held in our indoor sports hall, winning the district championship. Congratulations!</p>" },
      { id: 4, slug: "music-room-concert", title: "Student Concert Held in Our Music Room", date: "January 10, 2026", category: "Event", summary: "Our piano and violin students presented an unforgettable musical feast to their families at the end-of-term concert.", image: "/images/music-room-1.webp", content: "<p>Our piano and violin students performed beautiful pieces at the end-of-term concert held in our music room. The concert, attended enthusiastically by parents, was greatly appreciated.</p>" },
    ],
    announcements: [
      { id: 1, title: "2026-2027 Academic Year Enrollment Period Has Started", date: "02/03/2026", category: "Enrollment", summary: "Enrollment for the new academic year has begun. Hurry to take advantage of early registration benefits!", isImportant: true },
      { id: 2, title: "2nd Semester Parent Meeting", date: "01/28/2026", category: "Meeting", summary: "Our 2nd semester parent meeting will be held on Tuesday, February 10 at 2:00 PM.", isImportant: false },
      { id: 3, title: "February Menu List", date: "01/25/2026", category: "Information", summary: "Our February menu has been published. Click for details.", isImportant: false },
      { id: 4, title: "Semester Break Activity Program", date: "01/20/2026", category: "Event", summary: "Sports, arts, and science workshops will be organized for our students during the semester break.", isImportant: false },
      { id: 5, title: "Report Card Ceremony Program", date: "01/17/2026", category: "Program", summary: "Our 1st semester report card ceremony will be held on Friday, January 24 at 10:00 AM.", isImportant: false },
      { id: 6, title: "Parent-Teacher Association Meeting Results", date: "01/10/2026", category: "Meeting", summary: "PTA meeting decisions have been shared with parents.", isImportant: false },
    ],
  };
}

export function getCampusFacilitiesTranslated(lang: Language) {
  if (lang === "tr") {
    return [
      { id: "sanat", title: "Görsel Sanatlar Atölyesi", desc: "Yaratıcılığı geliştiren sanat eğitimi", image: "/images/art-room-new-1.webp" },
      { id: "muzik", title: "Müzik Atölyesi", desc: "Enstrüman ve ses eğitimi", image: "/images/music-room-1.webp" },
      { id: "kodlama", title: "Kodlama Atölyesi", desc: "Yazılım ve robotik eğitimi", image: "/images/kodlama-atolyesi-yeni.webp" },
      { id: "fen", title: "Fen Bilgisi Laboratuvarı", desc: "Deneysel öğrenme ortamı", image: "/images/science-lab-new.webp" },
      { id: "bahce", title: "Bahçe & Oyun Alanı", desc: "Açık hava oyun ve etkinlik alanı", image: "/images/garden-slide.webp" },
      { id: "spor", title: "Kapalı Spor Salonu", desc: "Fiziksel gelişim aktiviteleri", image: "/images/spor-salonu-1.webp" },
      { id: "kutuphane", title: "Kütüphane", desc: "Okuma ve araştırma merkezi", image: "/images/kutuphane-yeni-1.webp" },
      { id: "yemekhane", title: "Yemekhane", desc: "Sağlıklı ve hijyenik beslenme", image: "/images/yemekhane-gercek.webp" },
      { id: "rehberlik", title: "Rehberlik Odası", desc: "Bireysel danışmanlık hizmeti", image: "/images/koridor-posterler.webp" },
    ];
  }
  return [
    { id: "art", title: "Visual Arts Workshop", desc: "Art education that develops creativity", image: "/images/art-room-new-1.webp" },
    { id: "music", title: "Music Workshop", desc: "Instrument and vocal training", image: "/images/music-room-1.webp" },
    { id: "coding", title: "Coding Workshop", desc: "Software and robotics education", image: "/images/kodlama-atolyesi-yeni.webp" },
    { id: "science", title: "Science Laboratory", desc: "Experimental learning environment", image: "/images/science-lab-new.webp" },
    { id: "garden", title: "Garden & Play Area", desc: "Outdoor play and activity area", image: "/images/garden-slide.webp" },
    { id: "sports", title: "Indoor Sports Hall", desc: "Physical development activities", image: "/images/spor-salonu-1.webp" },
    { id: "library", title: "Library", desc: "Reading and research center", image: "/images/kutuphane-yeni-1.webp" },
    { id: "cafeteria", title: "Cafeteria", desc: "Healthy and hygienic nutrition", image: "/images/yemekhane-gercek.webp" },
    { id: "counseling", title: "Counseling Office", desc: "Individual counseling service", image: "/images/koridor-posterler.webp" },
  ];
}

export function getPageContentTranslated(lang: Language) {
  if (lang === "tr") {
    return {
      akademik: {
        "anaokulu": {
          title: "Anaokulu", subtitle: "Küçük Adımlar, Büyük Keşifler", ages: "3-6 Yaş", color: "#F97316",
          image: "/images/preschool-orange-1.webp",
          galleryImages: ["/images/preschool-orange-1.webp", "/images/preschool-orange-2.webp", "/images/preschool-blue-1.webp", "/images/preschool-blue-2.webp", "/images/garden-slide.webp", "/images/koridor-duvar-resmi.webp"],
          content: "Özel Boğaziçi İlgi Okulları olarak anaokulunu, çocuklarımızın yalnızca ilkokula hazırlandığı bir dönem değil; kendilerini, çevrelerini ve dünyayı keşfetmeye başladıkları, öğrenme sevgisinin temellerini attıkları çok değerli bir gelişim yolculuğu olarak görüyoruz.",
          richSections: [
            { highlight: "Her büyük gelecek, merakla atılan küçük bir adımla başlar." },
            { body: "Özel Boğaziçi İlgi Okulları olarak anaokulunu, çocuklarımızın yalnızca ilkokula hazırlandığı bir dönem değil; kendilerini, çevrelerini ve dünyayı keşfetmeye başladıkları, öğrenme sevgisinin temellerini attıkları çok değerli bir gelişim yolculuğu olarak görüyoruz.\n\nHer çocuğun kendine özgü bir dünyası, öğrenme biçimi ve keşfedilmeyi bekleyen yetenekleri olduğuna inanıyoruz. Eğitim anlayışımızın merkezinde çocuğu tanımak, bireysel farklılıklarına saygı duymak ve kendisini güvende, mutlu ve değerli hissetmesini sağlamak vardır." },
            { heading: "BİLİVA ile Güçlenen Öğrenme", body: "BİLİVA Eğitim Modelimizin ilgi, bilimsel düşünme, keşif ve araştırma ilkeleri; anaokulumuzda çocukların yaşlarına ve gelişim özelliklerine uygun bir öğrenme anlayışına dönüşür. Çocuklarımızı soru sormaya, gözlem yapmaya, denemeye ve fikirlerini özgürce ifade etmeye teşvik ederiz." },
            { heading: "Oyunla Öğrenme ve Çok Yönlü Gelişim", body: "Oyun, okul öncesi dönemin en doğal öğrenme yoludur. Dil, düşünme, iletişim, problem çözme ve yaratıcılık becerilerini oyun ve deneyim temelli süreçlerle desteklemeyi esas alırız. Sanat, müzik, hareket, doğa ve keşif deneyimlerini çocukların hayal gücünü, fiziksel gelişimini ve çevre farkındalığını besleyen alanlar olarak görürüz." },
            { heading: "Sosyal ve Duygusal Güçlenme", body: "Çocuklarımızın duygularını tanımasını, kendilerini ifade etmesini, arkadaşlık ilişkileri kurmasını, paylaşmayı öğrenmesini ve sorumluluk almasını önemseriz. Aileyle kurulan güvene dayalı iş birliğini bu gelişim yolculuğunun vazgeçilmez parçası kabul ederiz." },
            { heading: "İlkokula Güçlü Bir Başlangıç", body: "İlkokula hazırlığı yalnızca harfleri ve sayıları öğrenmek olarak görmeyiz. Bizim için gerçek hazırlık; öğrenmeye istekli olmak, dikkatini geliştirmek, kendine güvenmek, iletişim kurabilmek ve yeni deneyimlere cesaretle yaklaşabilmektir.\n\nAmacımız; merakını kaybetmeyen, öğrenmekten mutluluk duyan, kendisini özgürce ifade eden ve güçlü temeller üzerinde büyüyen çocuklar yetiştirmektir." },
            { highlight: "Çünkü geleceği şekillendirecek büyük fikirler, bugün bir çocuğun sorduğu küçük bir soruyla başlayabilir." },
          ],
          features: [
            { title: "Çocuğu Tanımak", desc: "Bireysel farklılıklara saygı duyan, çocuğun kendisini güvende, mutlu ve değerli hissetmesini sağlayan eğitim anlayışı" },
            { title: "BİLİVA ile Güçlenen Öğrenme", desc: "İlgi, bilimsel düşünme, keşif ve araştırma ilkeleri; soru sorma, gözlem yapma ve denemeye teşvik" },
            { title: "Oyunla Öğrenme", desc: "Dil, düşünme, iletişim, problem çözme ve yaratıcılık becerilerini oyun ve deneyim temelli süreçlerle destekleme" },
            { title: "Çok Yönlü Gelişim", desc: "Sanat, müzik, hareket, doğa ve keşif deneyimleriyle hayal gücü, fiziksel gelişim ve çevre farkındalığı" },
            { title: "Sosyal ve Duygusal Güçlenme", desc: "Duyguları tanıma, kendini ifade etme, arkadaşlık kurma, paylaşma ve sorumluluk alma; aileyle güvene dayalı iş birliği" },
            { title: "İlkokula Güçlü Bir Başlangıç", desc: "Öğrenmeye istekli olmak, dikkati geliştirmek, kendine güvenmek ve yeni deneyimlere cesaretle yaklaşmak" },
          ]
        },
        "oyun-grubu": {
          title: "Oyun Grubu", subtitle: "Keşfin ve Oyunun Büyülü Dünyası", ages: "2-3 Yaş", color: "#EC4899",
          image: "/images/playgroup-1.webp",
          galleryImages: ["/images/playgroup-1.webp", "/images/playgroup-2.webp", "/images/playgroup-3.webp"],
          content: "Açıklama yakında eklenecek.",
          features: []
        },
        "ilkokul": {
          title: "İlkokul", subtitle: "Merakla Başlayan, Bilimle Güçlenen Bir Gelecek", ages: "1-4. Sınıf", color: "#3B82F6",
          image: "/images/primary-class-1.webp",
          galleryImages: ["/images/primary-class-1.webp", "/images/primary-class-2.webp", "/images/primary-class-3.webp", "/images/library-1.jpg", "/images/art-room-1.webp", "/images/merdiven-ingilizce.webp", "/images/koridor-posterler.webp"],
          content: "Özel Boğaziçi İlgi Okulları olarak ilkokul dönemini, çocuklarımızın yalnızca okuma, yazma ve temel akademik beceriler kazandığı bir süreç değil; düşünmeyi öğrenme, merakını bilgiye dönüştürme, kendisini tanıdığı ve öğrenme alışkanlıklarını geliştirdiği önemli bir eğitim yolculuğu olarak görüyoruz.",
          richSections: [
            { highlight: "Güçlü bir gelecek, sağlam temeller üzerinde yükselir." },
            { body: "Özel Boğaziçi İlgi Okulları olarak ilkokul dönemini, çocuklarımızın yalnızca okuma, yazma ve temel akademik beceriler kazandığı bir süreç değil; düşünmeyi öğrenme, merakını bilgiye dönüştürme, kendisini tanıdığı ve öğrenme alışkanlıklarını geliştirdiği önemli bir eğitim yolculuğu olarak görüyoruz.\n\nBoğaziçi’nin bilimsel düşünce, özgürlük, akademik yetkinlik ve evrensel değerlerinden ilham alan eğitim anlayışımızda, her çocuğun kendine özgü bir potansiyele sahip olduğuna inanıyoruz. Bu nedenle öğrencilerimizin bireysel farklılıklarını gözeten güçlü akademik temeller kazanmalarını ve öğrenmeye karşı kalıcı bir ilgi geliştirmelerini hedefliyoruz." },
            { heading: "BİLİVA ile Düşünen ve Üreten Çocuklar", body: "BİLİVA Eğitim Modelimiz, ilkokulda öğrencilerimizin bilimsel düşünme, keşfetme, liderlik, ilişkilendirme, vizyon geliştirme ve araştırıp üretme becerilerini destekleyen eğitim anlayışımızın temelini oluşturur.\n\nÇocuklarımızın yalnızca doğru cevaplara ulaşmasını değil; doğru soruları sormasını, neden-sonuç ilişkileri kurmasını, farklı fikirleri değerlendirmesini ve öğrendiklerini günlük yaşamla ilişkilendirmesini önemsiyoruz." },
            { heading: "Güçlü Akademik Temel", body: "İlkokul eğitimimizin önceliklerinden biri, öğrencilerimize okuduğunu anlama, kendini doğru ifade etme, matematiksel düşünme, problem çözme ve öğrenmeyi öğrenme becerilerinde sağlam bir temel kazandırmaktır.\n\nBilgiyi ezberlemenin ötesine geçen; anlamayı, yorumlamayı, sorgulamayı ve uygulamayı merkeze alan bir öğrenme kültürünü benimsiyoruz." },
            { heading: "ZEP ile Her Çocuğun Potansiyeline Değer", body: "ZEP – Zenginleştirilmiş Eğitim Programımız, her öğrencinin öğrenme hızını, ilgi alanlarını, güçlü yönlerini ve gelişim ihtiyaçlarını dikkate alan yaklaşımımızı tamamlar.\n\nAmacımız, çocuklarımızı birbirleriyle karşılaştırmak değil; her birinin kendi gelişim yolculuğunda ilerlemesini desteklemektir. Öğrencilerimizin meraklarını derinleştirmelerini, farklı alanları keşfetmelerini ve öğrenme motivasyonlarını güçlendirmelerini önemsiyoruz." },
            { heading: "Yabancı Dil ve Dünyaya Açılan Bakış", body: "Yabancı dil öğrenimini yalnızca kelime ve dil bilgisi kazanımı olarak değil; iletişim kurmanın, farklı kültürleri tanımanın ve dünyaya daha geniş bir pencereden bakmanın önemli bir parçası olarak görüyoruz.\n\nÖğrencilerimizin yabancı dilde karşılıklı bir tutum geliştirmelerini, yaşlarına uygun iletişim becerileri kazanmalarını ve dili kullanma cesaretlerini artırmalarını hedefliyoruz." },
            { heading: "Sanat, Spor ve Çok Yönlü Gelişim", body: "Sanat, müzik, spor, kültür ve doğayla kurulan ilişkiyi eğitimin tamamlayıcı unsurları olarak değil, çocuğun bütüncül gelişiminin vazgeçilmez parçaları olarak değerlendiriyoruz.\n\nÇocuklarımızın yaratıcılıklarını, estetik duyarlılıklarını, fiziksel becerilerini, takım çalışması alışkanlıklarını ve farklı alanlardaki yeteneklerini geliştirmelerini destekleyen bir eğitim anlayışını benimsiyoruz." },
            { heading: "Güçlü Karakter, Sağlam Değerler", body: "Akademik gelişimin yanında öğrencilerimizin özgüvenli, sorumluluk sahibi, saygılı, empati kurabilen ve düşüncelerini özgürce ifade edebilen bireyler olarak yetişmesini önemsiyoruz.\n\nÇünkü bizim için eğitim, yalnızca başarılı öğrenciler yetiştirmek değil; bilgisiyle, karakteriyle ve davranışlarıyla çevresine değer katabilen insanlar yetiştirmektir." },
            { heading: "Geleceğe Güvenle Hazırlanan Nesiller", body: "Özel Boğaziçi İlgi Okulları İlkokulunda hedefimiz; öğrenmeyi seven, araştıran, sorgulayan, güçlü akademik temellere sahip, çok yönlü gelişen ve kendi potansiyelinin farkında olan çocuklar yetiştirmektir.\n\nBiz çocuklarımızı yalnızca bir sonraki sınıfa değil; düşünen, üreten ve sorumluluk alan bireyler olarak geleceğe hazırlamayı amaçlıyoruz." },
            { body: "BİLİVA Eğitim Modeli  |  İlgiyle Keşfet. Bilimle Geliş. Geleceğe Yön Ver." },
          ],
          features: [
            { title: "BİLİVA ile Düşünen ve Üreten", desc: "Bilimsel düşünme, keşfetme, liderlik, ilişkilendirme, vizyon geliştirme ve araştırıp üretme becerileri" },
            { title: "Güçlü Akademik Temel", desc: "Okuduğunu anlama, kendini doğru ifade etme, matematiksel düşünme ve problem çözmede sağlam temel" },
            { title: "ZEP ile Her Çocuğun Potansiyeline Değer", desc: "Öğrenme hızını, ilgi alanlarını ve güçlü yönleri dikkate alan, her çocuğun kendi yolculuğunu destekleyen yaklaşım" },
            { title: "Yabancı Dil ve Dünyaya Açılan Bakış", desc: "İletişim kurma, farklı kültürleri tanıma ve dili kullanma cesaretini artırma" },
            { title: "Sanat, Spor ve Çok Yönlü Gelişim", desc: "Yaratıcılık, estetik duyarlılık, fiziksel beceriler ve takım çalışması alışkanlığı" },
            { title: "Güçlü Karakter, Sağlam Değerler", desc: "Özgüvenli, sorumluluk sahibi, saygılı ve empati kurabilen bireyler" },
          ]
        },
        "ortaokul": {
          title: "Ortaokul", subtitle: "Bilimsel Düşünceden Güçlü Bir Geleceğe", ages: "5-8. Sınıf", color: "#10B981",
          image: "/images/kutuphane-yeni-1.webp",
          galleryImages: ["/images/kutuphane-yeni-1.webp", "/images/kutuphane-yeni-2.webp", "/images/spor-salonu-1.webp", "/images/kodlama-atolyesi-yeni.webp", "/images/music-room-1.webp"],
          content: "Özel Boğaziçi İlgi Okulları olarak ortaokul dönemini, öğrencilerimizin ilkokulda kazandıkları akademik temelleri derinleştirdikleri, ilgi ve yeteneklerini daha yakından tanıdıkları, kendi öğrenme sorumluluklarını üstlenmeye başladıkları önemli bir gelişim yolculuğu olarak görüyoruz.",
          richSections: [
            { highlight: "Bilgiyi sorgulayan, düşüncelerini geliştiren ve geleceğine yön veren nesiller." },
            { body: "Özel Boğaziçi İlgi Okulları olarak ortaokul dönemini, öğrencilerimizin ilkokulda kazandıkları akademik temelleri derinleştirdikleri, ilgi ve yeteneklerini daha yakından tanıdıkları, kendi öğrenme sorumluluklarını üstlenmeye başladıkları önemli bir gelişim yolculuğu olarak görüyoruz.\n\nBu dönemde öğrencilerimizin yalnızca akademik başarılarını artırmayı değil; bilimsel düşünme becerilerini geliştirmelerini, kendilerini özgürce ifade etmelerini, farklı bakış açılarına saygı duymalarını ve geleceğe ilişkin hedeflerini bilinçli biçimde oluşturmalarını önemsiyoruz.\n\nBoğaziçi’nin bilimsel sorgulama, özgür düşünce, akademik yetkinlik ve evrensel değerlerinden ilham alan eğitim anlayışımızla öğrencilerimizi düşünen, araştıran, üreten ve sorumluluk alan bireyler olarak geleceğe hazırlamayı amaçlıyoruz." },
            { heading: "BİLİVA ile Bilgiden Düşünceye, Düşünceden Üretime", body: "BİLİVA Eğitim Modelimiz, ortaokulda öğrencilerimizin bilimsel düşünme, ilgiyle keşfetme, liderlik, ilişkilendirme, vizyon geliştirme, araştırma ve üretim becerilerini destekleyen eğitim yaklaşımımızın temelini oluşturur.\n\nÖğrencilerimizin bilgiyi yalnızca öğrenmelerini değil; sorgulamalarını, farklı kaynaklardan değerlendirmelerini, disiplinler arasında bağlantılar kurmalarını ve karşılaştıkları sorunlara çözüm geliştirmelerini önemseriz.\n\nAraştırma, gözlem, deney, tartışma ve proje geliştirme süreçlerini öğrencilerimizin düşünsel gelişimini destekleyen önemli öğrenme deneyimleri olarak ele alırız." },
            { heading: "Akademik Derinlik ve Güçlü Öğrenme Becerileri", body: "Ortaokul eğitimimizin temel hedeflerinden biri, öğrencilerimizin Türkçe, matematik, fen bilimleri, sosyal bilimler ve diğer öğrenme alanlarında güçlü bir akademik birikim geliştirmeleridir.\n\nOkuduğunu anlama, yorumlama, analitik düşünme, problem çözme, eleştirel değerlendirme ve etkili iletişim becerilerini akademik gelişimin ayrılmaz parçaları olarak görürüz.\n\nÖğrencilerimizin ne öğrendiklerini bilmeleri kadar, nasıl öğrendiklerinin farkına varmaları ve kendi öğrenme süreçlerini yönetebilmeleri de bizim için önemlidir." },
            { heading: "ZEP ile Bireysel Gelişim ve Akademik Zenginleşme", body: "ZEP – Zenginleştirilmiş Eğitim Programımız, öğrencilerimizin ilgi alanlarını, güçlü yönlerini, öğrenme ihtiyaçlarını ve bireysel gelişim süreçlerini dikkate alan yaklaşımımızı tamamlar.\n\nHer öğrencinin farklı bir öğrenme yolculuğu olduğuna inanırız. Bu nedenle öğrencilerimizin potansiyellerini keşfetmelerini, akademik gelişimlerini güçlendirmelerini ve farklı alanlarda kendilerini deneme cesareti kazanmalarını hedefleriz.\n\nAmacımız, öğrencilerimizin yalnızca mevcut başarılarını geliştirmek değil; öğrenme motivasyonlarını ve kendi gelişimlerine duydukları güveni de artırmaktır." },
            { heading: "Araştırma, Proje ve Üretim Kültürü", body: "Ortaokul yıllarını, öğrencilerimizin merak ettikleri konuları daha derinlemesine inceleyebildikleri ve fikirlerini somut çalışmalara dönüştürmeyi öğrendikleri bir dönem olarak değerlendiriyoruz.\n\nBilimsel araştırma yaklaşımını, proje geliştirme süreçlerini, yaratıcı düşünmeyi ve iş birliğini öğrencilerimizin öğrenme deneyimlerinin önemli parçaları olarak görüyoruz.\n\nÇünkü inanıyoruz ki gerçek öğrenme, bilgiyi kullanarak yeni sorular sorabilmek ve anlamlı çözümler üretebilmekle güçlenir." },
            { heading: "Yabancı Dil ve Küresel Bakış Açısı", body: "Yabancı dil eğitimini, öğrencilerimizin dünyayla iletişim kurabilmelerini, farklı kültürleri anlayabilmelerini ve kendilerini daha geniş bir çevrede ifade edebilmelerini sağlayan önemli bir gelişim alanı olarak görüyoruz.\n\nÖğrencilerimizin yabancı dilde iletişim kurma özgüvenlerini geliştirmelerini, dil öğrenmeye karşı olumlu tutumlarını sürdürmelerini ve kültürler arası farkındalık kazanmalarını hedefliyoruz." },
            { heading: "Sanat, Spor ve Sosyal Gelişim", body: "Ortaokul döneminde öğrencilerimizin akademik gelişimlerini; sanat, müzik, spor, kültürel etkinlikler ve sosyal sorumluluk bilinciyle bütünleştirmeyi önemsiyoruz.\n\nÖğrencilerimizin farklı yeteneklerini keşfetmelerini, ekip çalışması yapabilmelerini, ortak hedefler için sorumluluk üstlenmelerini ve kendilerini farklı alanlarda ifade edebilmelerini destekleyen bir eğitim anlayışını benimsiyoruz." },
            { heading: "Ergenlik Döneminde Güven, Rehberlik ve Öz Farkındalık", body: "Ortaokul yıllarının öğrencilerimizin fiziksel, zihinsel, sosyal ve duygusal açıdan önemli değişimler yaşadığı bir dönem olduğunun farkındayız.\n\nBu süreçte öğrencilerimizin kendilerini tanımalarını, duygularını yönetmelerini, sağlıklı ilişkiler kurmalarını, karar verme becerilerini geliştirmelerini ve karşılaştıkları güçlüklerle başa çıkabilmelerini önemseriz.\n\nOkul ve aile arasındaki güvene dayalı iş birliğini de öğrencilerimizin gelişim yolculuğunun önemli bir parçası olarak kabul ederiz." },
            { heading: "Lise Yolculuğuna Bilinçli Hazırlık", body: "Öğrencilerimizin lise eğitimine hazırlığını yalnızca sınav başarısıyla sınırlı görmüyoruz.\n\nBizim için güçlü bir hazırlık; sağlam akademik bilgiye sahip olmanın yanında zamanı yönetebilmek, düzenli çalışma alışkanlıkları geliştirmek, hedef belirlemek, sorumluluk almak ve karşılaşılan sorunlara çözüm üretebilmektir.\n\nÖğrencilerimizin akademik hedeflerine ilerlerken öğrenme meraklarını, özgüvenlerini ve çok yönlü gelişimlerini korumalarını esas alıyoruz." },
            { heading: "Geleceğini Düşünen, Geleceğe Değer Katan Bireyler", body: "Özel Boğaziçi İlgi Okulları Ortaokulunda amacımız; bilimsel düşünebilen, araştıran, sorgulayan, güçlü akademik becerilere sahip, kendisini tanıyan, değerlerine bağlı ve dünyaya açık bireyler yetiştirmektir.\n\nÇünkü biz eğitimi yalnızca bir sınava ya da bir sonraki okul kademesine hazırlık olarak değil; öğrencilerimizin kendi geleceklerini bilinçle inşa etmelerini sağlayan uzun soluklu bir gelişim yolculuğu olarak görüyoruz." },
          ],
          features: [
            { title: "BİLİVA ile Bilgiden Üretime", desc: "Bilimsel düşünme, ilgiyle keşfetme, liderlik, ilişkilendirme, vizyon geliştirme, araştırma ve üretim becerileri" },
            { title: "Akademik Derinlik", desc: "Türkçe, matematik, fen ve sosyal bilimlerde güçlü akademik birikim; öğrenmeyi öğrenme" },
            { title: "ZEP ile Akademik Zenginleşme", desc: "İlgi alanlarını, güçlü yönleri ve bireysel gelişim süreçlerini dikkate alan yaklaşım" },
            { title: "Araştırma, Proje ve Üretim", desc: "Merak edilen konuları derinlemesine inceleme, fikirleri somut çalışmalara dönüştürme" },
            { title: "Yabancı Dil ve Küresel Bakış", desc: "Yabancı dilde iletişim özgüveni ve kültürler arası farkındalık" },
            { title: "Güven, Rehberlik ve Öz Farkındalık", desc: "Ergenlik döneminde kendini tanıma, duyguları yönetme ve sağlıklı ilişkiler kurma" },
          ]
        }
      }
    };
  }
  return {
    akademik: {
      "anaokulu": {
        title: "Preschool", subtitle: "Small Steps, Big Discoveries", ages: "Ages 3-6", color: "#F97316",
        image: "/images/preschool-orange-1.webp",
        galleryImages: ["/images/preschool-orange-1.webp", "/images/preschool-orange-2.webp", "/images/preschool-blue-1.webp", "/images/preschool-blue-2.webp", "/images/garden-slide.webp", "/images/koridor-duvar-resmi.webp"],
        content: "At Özel Boğaziçi İlgi Schools, we see preschool not merely as a period in which our children prepare for primary school, but as a very valuable developmental journey in which they begin to discover themselves, their surroundings and the world, and lay the foundations of a love of learning.",
        richSections: [
          { highlight: "Every great future begins with a small step taken out of curiosity." },
          { body: "At Özel Boğaziçi İlgi Schools, we see preschool not merely as a period in which our children prepare for primary school, but as a very valuable developmental journey in which they begin to discover themselves, their surroundings and the world, and lay the foundations of a love of learning.\n\nWe believe that every child has a world of their own, a way of learning and talents waiting to be discovered. At the center of our approach to education are getting to know the child, respecting individual differences and helping them feel safe, happy and valued." },
          { heading: "Learning Strengthened by BİLİVA", body: "The interest, scientific thinking, discovery and research principles of our BİLİVA Education Model turn into an approach to learning in our preschool that suits children's ages and developmental characteristics. We encourage our children to ask questions, observe, experiment and express their ideas freely." },
          { heading: "Learning Through Play and Multifaceted Development", body: "Play is the most natural way of learning in the preschool years. We base our work on supporting language, thinking, communication, problem solving and creativity skills through play and experience-based processes. We see art, music, movement, nature and discovery experiences as areas that nourish children's imagination, physical development and environmental awareness." },
          { heading: "Social and Emotional Empowerment", body: "We care that our children recognize their emotions, express themselves, build friendships, learn to share and take responsibility. We regard trust-based cooperation with families as an indispensable part of this developmental journey." },
          { heading: "A Strong Start to Primary School", body: "We do not see preparation for primary school as merely learning letters and numbers. For us, real preparation means being eager to learn, developing attention, believing in oneself, being able to communicate and approaching new experiences with courage.\n\nOur aim is to raise children who do not lose their curiosity, take joy in learning, express themselves freely and grow on strong foundations." },
          { highlight: "Because the big ideas that will shape the future can begin today with a small question asked by a child." },
        ],
        features: [
          { title: "Getting to Know the Child", desc: "An approach that respects individual differences and helps the child feel safe, happy and valued" },
          { title: "Learning Strengthened by BİLİVA", desc: "Interest, scientific thinking, discovery and research principles; encouraging questions, observation and experimentation" },
          { title: "Learning Through Play", desc: "Supporting language, thinking, communication, problem solving and creativity through play and experience-based processes" },
          { title: "Multifaceted Development", desc: "Imagination, physical development and environmental awareness through art, music, movement, nature and discovery" },
          { title: "Social and Emotional Empowerment", desc: "Recognizing emotions, self-expression, friendships, sharing and responsibility; trust-based cooperation with families" },
          { title: "A Strong Start to Primary School", desc: "Eagerness to learn, developing attention, self-confidence and approaching new experiences with courage" },
        ]
      },
      "oyun-grubu": {
        title: "Play Group", subtitle: "The Magical World of Discovery and Play", ages: "Ages 2-3", color: "#EC4899",
        image: "/images/playgroup-1.webp",
        galleryImages: ["/images/playgroup-1.webp", "/images/playgroup-2.webp", "/images/playgroup-3.webp"],
        content: "Description coming soon.",
        features: []
      },
      "ilkokul": {
        title: "Primary School", subtitle: "A Future That Begins with Curiosity and Grows Stronger with Science", ages: "Grades 1-4", color: "#3B82F6",
        image: "/images/primary-class-1.webp",
        galleryImages: ["/images/primary-class-1.webp", "/images/primary-class-2.webp", "/images/primary-class-3.webp", "/images/library-1.jpg", "/images/art-room-1.webp", "/images/merdiven-ingilizce.webp", "/images/koridor-posterler.webp"],
        content: "At Özel Boğaziçi İlgi Schools, we see the primary school years not merely as a process in which our children acquire reading, writing and basic academic skills, but as an important educational journey in which they learn to think, turn their curiosity into knowledge, get to know themselves and develop learning habits.",
        richSections: [
          { highlight: "A strong future rises on solid foundations." },
          { body: "At Özel Boğaziçi İlgi Schools, we see the primary school years not merely as a process in which our children acquire reading, writing and basic academic skills, but as an important educational journey in which they learn to think, turn their curiosity into knowledge, get to know themselves and develop learning habits.\n\nIn our approach to education, inspired by Boğaziçi's scientific thought, freedom, academic competence and universal values, we believe that every child has a unique potential. For this reason, we aim for our students to gain strong academic foundations that respect their individual differences and to develop a lasting interest in learning." },
          { heading: "Thinking and Creating Children with BİLİVA", body: "Our BİLİVA Education Model forms the basis of our approach, supporting our primary school students' skills of scientific thinking, discovery, leadership, connection, developing vision, and researching and creating.\n\nWe care that our children not only reach the right answers but ask the right questions, establish cause and effect relationships, evaluate different ideas and relate what they learn to daily life." },
          { heading: "A Strong Academic Foundation", body: "One of the priorities of our primary education is to give our students a solid foundation in reading comprehension, expressing themselves correctly, mathematical thinking, problem solving and learning how to learn.\n\nWe embrace a learning culture that goes beyond memorizing knowledge and centers on understanding, interpreting, questioning and applying." },
          { heading: "Valuing Every Child's Potential with ZEP", body: "Our ZEP – Enriched Education Program complements our approach, which takes into account every student's learning pace, interests, strengths and developmental needs.\n\nOur aim is not to compare our children with one another but to support each of them as they progress on their own developmental journey. We care that our students deepen their curiosity, explore different areas and strengthen their motivation to learn." },
          { heading: "Foreign Language and a View Opening to the World", body: "We see foreign language learning not only as the acquisition of vocabulary and grammar but as an important part of communicating, getting to know different cultures and looking at the world through a wider window.\n\nWe aim for our students to develop a mutual attitude in the foreign language, gain age-appropriate communication skills and increase their courage to use the language." },
          { heading: "Art, Sports and Multifaceted Development", body: "We regard our relationship with art, music, sports, culture and nature not as complementary elements of education but as indispensable parts of the child's holistic development.\n\nWe embrace an approach to education that supports our children in developing their creativity, aesthetic sensitivity, physical skills, teamwork habits and talents in different areas." },
          { heading: "Strong Character, Sound Values", body: "Alongside academic development, we care that our students grow up as self-confident, responsible, respectful individuals who can empathize and express their thoughts freely.\n\nBecause for us, education is not only about raising successful students but about raising people who can add value to their surroundings with their knowledge, character and behavior." },
          { heading: "Generations Preparing for the Future with Confidence", body: "Our goal at Özel Boğaziçi İlgi Schools Primary School is to raise children who love learning, research, question, have strong academic foundations, develop in many ways and are aware of their own potential.\n\nWe aim to prepare our children for the future not merely for the next grade but as individuals who think, create and take responsibility." },
          { body: "BİLİVA Education Model  |  Discover with Interest. Grow with Science. Give Direction to the Future." },
        ],
        features: [
          { title: "Thinking and Creating with BİLİVA", desc: "Skills of scientific thinking, discovery, leadership, connection, developing vision, and researching and creating" },
          { title: "A Strong Academic Foundation", desc: "A solid foundation in reading comprehension, self-expression, mathematical thinking and problem solving" },
          { title: "Valuing Every Child's Potential with ZEP", desc: "An approach that considers learning pace, interests and strengths and supports each child's own journey" },
          { title: "Foreign Language and a View Opening to the World", desc: "Communicating, getting to know different cultures and increasing the courage to use the language" },
          { title: "Art, Sports and Multifaceted Development", desc: "Creativity, aesthetic sensitivity, physical skills and teamwork habits" },
          { title: "Strong Character, Sound Values", desc: "Self-confident, responsible, respectful individuals who can empathize" },
        ]
      },
      "ortaokul": {
        title: "Middle School", subtitle: "From Scientific Thought to a Strong Future", ages: "Grades 5-8", color: "#10B981",
        image: "/images/kutuphane-yeni-1.webp",
        galleryImages: ["/images/kutuphane-yeni-1.webp", "/images/kutuphane-yeni-2.webp", "/images/spor-salonu-1.webp", "/images/kodlama-atolyesi-yeni.webp", "/images/music-room-1.webp"],
        content: "At Özel Boğaziçi İlgi Schools, we see the middle school years as an important developmental journey in which our students deepen the academic foundations they gained in primary school, get to know their interests and talents more closely and begin to take on responsibility for their own learning.",
        richSections: [
          { highlight: "Generations who question knowledge, develop their thoughts and give direction to their future." },
          { body: "At Özel Boğaziçi İlgi Schools, we see the middle school years as an important developmental journey in which our students deepen the academic foundations they gained in primary school, get to know their interests and talents more closely and begin to take on responsibility for their own learning.\n\nIn this period, we care not only about raising our students' academic achievement but about their developing scientific thinking skills, expressing themselves freely, respecting different perspectives and shaping their goals for the future consciously.\n\nWith our approach to education, inspired by Boğaziçi's scientific inquiry, free thought, academic competence and universal values, we aim to prepare our students for the future as individuals who think, research, create and take responsibility." },
          { heading: "From Knowledge to Thought, From Thought to Production with BİLİVA", body: "Our BİLİVA Education Model forms the basis of our approach, supporting our middle school students' skills of scientific thinking, discovering with interest, leadership, connection, developing vision, research and production.\n\nWe care that our students not only learn knowledge but question it, evaluate it from different sources, make connections between disciplines and develop solutions to the problems they face.\n\nWe treat research, observation, experiments, discussion and project development as important learning experiences that support our students' intellectual development." },
          { heading: "Academic Depth and Strong Learning Skills", body: "One of the main goals of our middle school education is for our students to build a strong academic foundation in Turkish, mathematics, science, social sciences and other areas of learning.\n\nWe regard reading comprehension, interpretation, analytical thinking, problem solving, critical evaluation and effective communication as inseparable parts of academic development.\n\nIt is as important to us that our students know how they learn as what they learn, and that they can manage their own learning processes." },
          { heading: "Individual Development and Academic Enrichment with ZEP", body: "Our ZEP – Enriched Education Program complements our approach, which takes into account our students' interests, strengths, learning needs and individual developmental processes.\n\nWe believe that every student has a different learning journey. For this reason, we aim for our students to discover their potential, strengthen their academic development and gain the courage to try themselves in different areas.\n\nOur aim is not only to improve our students' current achievements but also to increase their motivation to learn and their confidence in their own development." },
          { heading: "A Culture of Research, Projects and Production", body: "We regard the middle school years as a period in which our students can examine the subjects they are curious about in more depth and learn to turn their ideas into concrete work.\n\nWe see the scientific research approach, project development processes, creative thinking and collaboration as important parts of our students' learning experiences.\n\nBecause we believe that real learning is strengthened by being able to ask new questions and produce meaningful solutions using knowledge." },
          { heading: "Foreign Language and a Global Perspective", body: "We see foreign language education as an important area of development that enables our students to communicate with the world, understand different cultures and express themselves in a wider environment.\n\nWe aim for our students to develop confidence in communicating in a foreign language, maintain a positive attitude toward language learning and gain intercultural awareness." },
          { heading: "Art, Sports and Social Development", body: "In the middle school period, we care about integrating our students' academic development with art, music, sports, cultural events and a sense of social responsibility.\n\nWe embrace an approach to education that supports our students in discovering their different talents, working as a team, taking responsibility for common goals and expressing themselves in different areas." },
          { heading: "Trust, Guidance and Self-Awareness in Adolescence", body: "We are aware that the middle school years are a period in which our students experience important physical, mental, social and emotional changes.\n\nDuring this process, we care that our students get to know themselves, manage their emotions, build healthy relationships, develop decision-making skills and cope with the difficulties they encounter.\n\nWe also regard trust-based cooperation between school and family as an important part of our students' developmental journey." },
          { heading: "Conscious Preparation for the High School Journey", body: "We do not see our students' preparation for high school education as limited to exam success alone.\n\nFor us, strong preparation means not only having solid academic knowledge but also being able to manage time, developing regular study habits, setting goals, taking responsibility and producing solutions to the problems encountered.\n\nAs our students progress toward their academic goals, we make it a principle that they preserve their curiosity to learn, their self-confidence and their well-rounded development." },
          { heading: "Individuals Who Think About Their Future and Add Value to It", body: "At Özel Boğaziçi İlgi Schools Middle School, our aim is to raise individuals who can think scientifically, research and question, have strong academic skills, know themselves, are committed to their values and are open to the world.\n\nBecause we see education not merely as preparation for an exam or the next school level but as a long-term developmental journey that enables our students to consciously build their own futures." },
        ],
        features: [
          { title: "From Knowledge to Production with BİLİVA", desc: "Skills of scientific thinking, discovering with interest, leadership, connection, developing vision, research and production" },
          { title: "Academic Depth", desc: "A strong academic foundation in Turkish, mathematics, science and social sciences; learning how to learn" },
          { title: "Academic Enrichment with ZEP", desc: "An approach that considers interests, strengths and individual developmental processes" },
          { title: "Research, Projects and Production", desc: "Examining subjects of curiosity in depth and turning ideas into concrete work" },
          { title: "Foreign Language and a Global Perspective", desc: "Confidence in communicating in a foreign language and intercultural awareness" },
          { title: "Trust, Guidance and Self-Awareness", desc: "Getting to know oneself, managing emotions and building healthy relationships in adolescence" },
        ]
      }
    }
  };
}

export function getProgramsTranslated(lang: Language) {
  if (lang === "tr") {
    return {
      "yabanci-dil": { title: "Yabancı Dil Eğitimi", description: "Cambridge standartlarında İngilizce ve ikinci yabancı dil olarak Almanca/İspanyolca eğitimi.", icon: "Globe" },
      "stem-robotik": { title: "STEM & Robotik", description: "Kodlama, 3D tasarım ve robotik atölyeleri ile geleceğin mühendislerini yetiştiriyoruz.", icon: "Cpu" },
      "kodlama": { title: "Kodlama & Yazılım", description: "Algoritmik düşünme becerisi ve programlama dilleri eğitimi.", icon: "Code" },
      "sanat-muzik": { title: "Sanat & Müzik", description: "Piyano, keman, gitar eğitimleri ve görsel sanatlar atölyeleri.", icon: "Palette" },
      "spor": { title: "Spor Faaliyetleri", description: "Yüzme, basketbol, voleybol ve jimnastik branşlarında profesyonel eğitim.", icon: "Activity" },
      "degerler-egitimi": { title: "Değerler Eğitimi", description: "Evrensel ve toplumsal değerlerin kazandırılmasına yönelik çalışmalar.", icon: "Heart" },
    };
  }
  return {
    "yabanci-dil": { title: "Foreign Language Education", description: "English at Cambridge standards and German/Spanish as a second foreign language.", icon: "Globe" },
    "stem-robotik": { title: "STEM & Robotics", description: "Raising future engineers with coding, 3D design, and robotics workshops.", icon: "Cpu" },
    "kodlama": { title: "Coding & Software", description: "Algorithmic thinking skills and programming language education.", icon: "Code" },
    "sanat-muzik": { title: "Arts & Music", description: "Piano, violin, guitar lessons and visual arts workshops.", icon: "Palette" },
    "spor": { title: "Sports Activities", description: "Professional training in swimming, basketball, volleyball, and gymnastics.", icon: "Activity" },
    "degerler-egitimi": { title: "Values Education", description: "Programs aimed at instilling universal and social values.", icon: "Heart" },
  };
}
