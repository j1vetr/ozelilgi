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
  "nav.about.about": { tr: "Hakkımızda", en: "About Us" },
  "nav.about.founder": { tr: "Kurucu Mesajı", en: "Founder's Message" },
  "nav.about.vision": { tr: "Vizyon & Misyon", en: "Vision & Mission" },
  "nav.about.approach": { tr: "Eğitim Yaklaşımımız", en: "Our Approach" },
  "nav.academic.preschool": { tr: "Anaokulu", en: "Preschool" },
  "nav.academic.primary": { tr: "İlkokul", en: "Primary School" },
  "nav.academic.middle": { tr: "Ortaokul", en: "Middle School" },
  "nav.campus.facilities": { tr: "İmkanlar", en: "Facilities" },
  "nav.campus.gallery": { tr: "Galeri", en: "Gallery" },
  "nav.enrollment.process": { tr: "Kayıt Süreci", en: "Enrollment Process" },
  "nav.enrollment.form": { tr: "Ön Kayıt Formu", en: "Pre-Registration Form" },
  "nav.menu": { tr: "Menü", en: "Menu" },
  "nav.overview": { tr: "Genel Bakış", en: "Overview" },
  "nav.preregister": { tr: "Ön Kayıt Yap", en: "Pre-Register" },

  "hero.title": { tr: "Geleceğin Liderlerini Yetiştiriyoruz", en: "Raising the Leaders of Tomorrow" },
  "hero.subtitle": { tr: "Akademik mükemmellik, güçlü karakter gelişimi ve modern eğitim yaklaşımıyla öğrencilerimizi dünyaya hazırlıyoruz.", en: "Preparing our students for the world with academic excellence, strong character development, and a modern educational approach." },
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

  "school.slogan": { tr: "Her öğrenci özel ilgi hak eder", en: "Every student deserves special attention" },
  "school.description": { tr: "Anaokulu, İlkokul ve Ortaokul kademelerinde kaliteli eğitim.", en: "Quality education at Preschool, Primary, and Middle School levels." },

  "footer.corporate": { tr: "Kurumsal", en: "Corporate" },
  "footer.academic": { tr: "Akademik", en: "Academic" },
  "footer.enrollment_contact": { tr: "Kayıt & İletişim", en: "Enrollment & Contact" },
  "footer.rights": { tr: "Tüm Hakları Saklıdır.", en: "All Rights Reserved." },
  "footer.developer": { tr: "Geliştirici & Tasarım", en: "Developer & Design" },

  "campus360.badge": { tr: "360° sanal tur", en: "360° virtual tour" },
  "campus360.title": { tr: "Kampüsümüzü keşfedin", en: "Explore our campus" },
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

  "cta.title": { tr: "Çocuğunuzun Geleceğini Şekillendirin", en: "Shape Your Child's Future" },
  "cta.desc": { tr: "Okulumuzun sunduğu eğitim imkanlarını keşfedin, kampüsümüzü ziyaret edin.", en: "Discover the educational opportunities our school offers, visit our campus." },
  "cta.register": { tr: "Ön Kayıt Yap", en: "Pre-Register" },
  "cta.contact": { tr: "Bizi Arayın", en: "Call Us" },

  "levels.title": { tr: "Eğitim kademeleri", en: "Education levels" },
  "levels.desc": { tr: "Her yaş grubuna özel hazırlanmış eğitim programlarımız", en: "Our education programs specially designed for each age group" },
  "levels.preschool": { tr: "Anaokulu", en: "Preschool" },
  "levels.preschool.ages": { tr: "3-6 Yaş", en: "Ages 3-6" },
  "levels.preschool.desc": { tr: "Oyun ve keşif temelli öğrenme ile merak duygusunu geliştiriyoruz.", en: "We foster curiosity through play-based and discovery learning." },
  "levels.primary": { tr: "İlkokul", en: "Primary School" },
  "levels.primary.ages": { tr: "1-4. Sınıf", en: "Grades 1-4" },
  "levels.primary.desc": { tr: "Güçlü temellerle akademik başarıya giden yolda emin adımlar.", en: "Confident steps on the path to academic success with strong foundations." },
  "levels.middle": { tr: "Ortaokul", en: "Middle School" },
  "levels.middle.ages": { tr: "5-8. Sınıf", en: "Grades 5-8" },
  "levels.middle.desc": { tr: "LGS hazırlığı ve kariyer rehberliği ile geleceğe yön veriyoruz.", en: "We guide the future with exam preparation and career counseling." },
  "levels.details": { tr: "Detaylı bilgi", en: "Learn more" },

  "testimonials.title": { tr: "Velilerimizden", en: "From Our Parents" },
  "testimonials.desc": { tr: "Ailelerimizin okulumuz hakkındaki değerli görüşleri", en: "Valuable feedback from our families about our school" },

  "announcements.title": { tr: "Duyurular", en: "Announcements" },
  "announcements.news": { tr: "Haberler", en: "News" },
  "announcements.all_news": { tr: "Tüm haberler", en: "All news" },
  "announcements.all_announcements": { tr: "Tüm duyurular", en: "All announcements" },
  "announcements.read_more": { tr: "Devamını oku", en: "Read more" },

  "facilities.title": { tr: "Kampüs imkanları", en: "Campus facilities" },
  "facilities.desc": { tr: "Modern ve donanımlı eğitim alanlarımız", en: "Our modern and well-equipped educational spaces" },
  "facilities.explore": { tr: "Tüm imkanları keşfet", en: "Explore all facilities" },

  "features_showcase.title": { tr: "Neden biz?", en: "Why us?" },
  "features_showcase.desc": { tr: "Öğrencilerimize sunduğumuz eğitim farkı", en: "The educational difference we offer our students" },

  "video.title": { tr: "Okulumuzdan kareler", en: "Scenes from our school" },
  "video.desc": { tr: "Kampüsümüzden ve etkinliklerimizden görüntüler", en: "Videos from our campus and activities" },

  "contact.title": { tr: "İletişim", en: "Contact" },
  "contact.subtitle": { tr: "Bizimle iletişime geçin", en: "Get in touch with us" },
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
  "enrollment.subtitle": { tr: "2026-2027 eğitim öğretim yılı kayıtları", en: "2026-2027 academic year enrollment" },
  "enrollment.process": { tr: "Kayıt Süreci", en: "Enrollment Process" },
  "enrollment.preregister": { tr: "Ön Kayıt Formu", en: "Pre-Registration Form" },
  "enrollment.info": { tr: "Kayıt için gerekli belgeler ve süreç hakkında bilgi alın.", en: "Get information about required documents and the enrollment process." },

  "enrollment_process.title": { tr: "Kayıt Süreci", en: "Enrollment Process" },
  "enrollment_process.subtitle": { tr: "Adım adım kayıt işlemleri", en: "Step-by-step enrollment procedures" },

  "preregister.title": { tr: "Ön Kayıt Formu", en: "Pre-Registration Form" },
  "preregister.subtitle": { tr: "Çocuğunuzun geleceği için ilk adım", en: "The first step for your child's future" },
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

  "about.title": { tr: "Hakkımızda", en: "About Us" },
  "about.subtitle": { tr: "25 yıllık tecrübe ile kaliteli eğitim", en: "Quality education with 25 years of experience" },
  "about.content": { tr: "Çekmeköy'ün merkezinde bulunan kampüsümüz 2013 yılında inşa edilmiş modern bir yapıdır. Geniş kapalı alanı ve bahçesi ile öğrencilerimize ferah bir eğitim ortamı sunuyoruz.", en: "Our campus, located in the center of Çekmeköy, is a modern building constructed in 2013. With its large indoor area and garden, we offer students a spacious learning environment." },
  "about.preschool_class": { tr: "Anaokulu Sınıfı", en: "Preschool Classrooms" },
  "about.founded": { tr: "Kuruluş", en: "Founded" },

  "founder.title": { tr: "Kurucu Mesajı", en: "Founder's Message" },
  "founder.subtitle": { tr: "Değerlerimiz ve vizyonumuz", en: "Our values and vision" },
  "founder.content": { tr: "Değerli Velilerimiz ve Sevgili Öğrenciler,\n\nGeleceğimizin teminatı olan çocuklarımızı en iyi şekilde yetiştirmek, onlara güvenli ve nitelikli bir eğitim ortamı sunmak en büyük sorumluluğumuzdur.\n\nBoğaziçi İlgi Koleji olarak, öğrencilerimizin akademik başarılarının yanı sıra, milli ve manevi değerlerine bağlı, evrensel düşünebilen, sorgulayan ve üreten bireyler olmalarını önemsiyoruz.", en: "Dear Parents and Students,\n\nRaising our children, who are the guarantee of our future, in the best possible way and providing them with a safe and quality educational environment is our greatest responsibility.\n\nAs Boğaziçi İlgi College, we care not only about our students' academic success but also about raising individuals who are committed to their national and moral values, who think universally, question, and create." },

  "vision.title": { tr: "Vizyon & Misyon", en: "Vision & Mission" },
  "vision.subtitle": { tr: "Geleceği şekillendiriyoruz", en: "Shaping the future" },
  "vision.vision": { tr: "Ulusal ve uluslararası platformlarda başarılarıyla tanınan, eğitimde öncü ve örnek bir kurum olmak; geleceği şekillendirecek lider bireyler yetiştirmektir.", en: "To be a pioneering and exemplary institution recognized for its achievements on national and international platforms; to raise leaders who will shape the future." },
  "vision.mission": { tr: "Atatürk ilke ve inkılaplarına bağlı, çağdaş, demokratik, eleştirel düşünebilen, toplumsal sorumluluk bilinci gelişmiş, yaratıcı ve üretken bireyler yetiştirmektir.", en: "To raise individuals who adhere to Atatürk's principles and reforms, who are modern, democratic, capable of critical thinking, socially responsible, creative, and productive." },

  "approach.title": { tr: "Eğitim Yaklaşımımız", en: "Our Approach" },
  "approach.subtitle": { tr: "Öğrenci merkezli modern eğitim", en: "Student-centered modern education" },
  "approach.content": { tr: "Öğrenci merkezli eğitim modelimiz, her çocuğun bireysel öğrenme hızına ve stiline saygı duyar. Yaparak ve yaşayarak öğrenme ilkesiyle, teorik bilgiyi pratiğe dönüştüren uygulamalar sunuyoruz.", en: "Our student-centered education model respects each child's individual learning pace and style. With the principle of learning by doing, we offer applications that transform theoretical knowledge into practice." },

  "news.title": { tr: "Haberler & Duyurular", en: "News & Announcements" },
  "news.subtitle": { tr: "Okulumuzdan son gelişmeler", en: "Latest updates from our school" },
  "news.tab.news": { tr: "Haberler", en: "News" },
  "news.tab.announcements": { tr: "Duyurular", en: "Announcements" },
  "news.back": { tr: "Geri dön", en: "Go back" },

  "campus.title": { tr: "Kampüsümüz", en: "Our Campus" },
  "campus.subtitle": { tr: "Modern eğitim ortamımız", en: "Our modern educational environment" },
  "campus.tab.facilities": { tr: "İmkanlar", en: "Facilities" },
  "campus.tab.gallery": { tr: "Galeri", en: "Gallery" },

  "programs.title": { tr: "Programlarımız", en: "Our Programs" },
  "programs.subtitle": { tr: "Zengin eğitim programlarımız", en: "Our rich educational programs" },

  "achievements.title": { tr: "Başarılarımız", en: "Our Achievements" },
  "achievements.subtitle": { tr: "Gurur duyduğumuz başarılar", en: "Achievements we are proud of" },

  "parent_student.title": { tr: "Veli & Öğrenci", en: "Parents & Students" },
  "parent_student.subtitle": { tr: "Bilgilendirme ve kaynaklar", en: "Information and resources" },

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

export function getNavigationTranslated(lang: Language) {
  return [
    {
      title: getTranslation("nav.home", lang),
      href: "/",
    },
    {
      title: getTranslation("nav.about", lang),
      href: "/kurumsal",
      items: [
        { title: getTranslation("nav.about.about", lang), href: "/kurumsal/hakkimizda" },
        { title: getTranslation("nav.about.founder", lang), href: "/kurumsal/kurucu-mesaji" },
        { title: getTranslation("nav.about.vision", lang), href: "/kurumsal/vizyon-misyon" },
        { title: getTranslation("nav.about.approach", lang), href: "/kurumsal/egitim-yaklasimimiz" },
      ],
    },
    {
      title: getTranslation("nav.academic", lang),
      href: "/akademik",
      items: [
        { title: getTranslation("nav.academic.preschool", lang), href: "/akademik/anaokulu" },
        { title: getTranslation("nav.academic.primary", lang), href: "/akademik/ilkokul" },
        { title: getTranslation("nav.academic.middle", lang), href: "/akademik/ortaokul" },
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
      title: getTranslation("nav.enrollment", lang),
      href: "/kayit",
      items: [
        { title: getTranslation("nav.enrollment.process", lang), href: "/kayit/kayit-sureci" },
        { title: getTranslation("nav.enrollment.form", lang), href: "/kayit/on-kayit" },
      ],
    },
    {
      title: getTranslation("nav.news", lang),
      href: "/haberler",
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
      { title: getTranslation("nav.about.about", lang), href: "/kurumsal/hakkimizda" },
      { title: getTranslation("nav.about.founder", lang), href: "/kurumsal/kurucu-mesaji" },
      { title: getTranslation("nav.about.vision", lang), href: "/kurumsal/vizyon-misyon" },
      { title: getTranslation("nav.about.approach", lang), href: "/kurumsal/egitim-yaklasimimiz" },
    ],
    akademik: [
      { title: getTranslation("nav.academic.preschool", lang), href: "/akademik/anaokulu" },
      { title: getTranslation("nav.academic.primary", lang), href: "/akademik/ilkokul" },
      { title: getTranslation("nav.academic.middle", lang), href: "/akademik/ortaokul" },
      { title: lang === "tr" ? "Kampüs İmkanları" : "Campus Facilities", href: "/kampus/imkanlar" },
      { title: getTranslation("nav.campus.gallery", lang), href: "/kampus/galeri" },
    ],
    kayit: [
      { title: lang === "tr" ? "Kayıt İşlemleri" : "Enrollment", href: "/kayit" },
      { title: getTranslation("nav.enrollment.process", lang), href: "/kayit/kayit-sureci" },
      { title: getTranslation("nav.enrollment.form", lang), href: "/kayit/on-kayit" },
      { title: getTranslation("nav.contact", lang), href: "/iletisim" },
    ],
  };
}

export function getNewsTranslated(lang: Language) {
  if (lang === "tr") {
    return {
      news: [
        { id: 1, slug: "fen-laboratuvari-yenilendi", title: "Fen Laboratuvarımız Yenilendi", date: "01 Şubat 2026", category: "Gelişme", summary: "Modern donanımlarla yenilenen fen laboratuvarımız, öğrencilerimize deneysel öğrenme için en iyi ortamı sunuyor.", image: "/images/science-room-1.webp", content: "<p>Okulumuzun fen laboratuvarı, en son teknoloji deney ekipmanları ve interaktif öğrenme araçlarıyla yeniden düzenlendi. Öğrencilerimiz artık fizik, kimya ve biyoloji deneylerini daha güvenli ve verimli bir ortamda gerçekleştirebilecek.</p>" },
        { id: 2, slug: "sanat-atolyesi-sergisi", title: "Sanat Atölyesi Öğrenci Sergisi Açıldı", date: "25 Ocak 2026", category: "Etkinlik", summary: "Öğrencilerimizin dönem boyunca hazırladığı eserler, sanat atölyemizde sergileniyor.", image: "/images/art-room-1.webp", content: "<p>Görsel Sanatlar derslerinde öğrencilerimizin ürettiği resim, heykel ve seramik çalışmaları sanat atölyemizde sergilenmektedir. Sergimiz, velilerimizin de ziyaretine açıktır.</p>" },
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
      { id: 1, slug: "science-lab-renewed", title: "Our Science Laboratory Has Been Renewed", date: "February 1, 2026", category: "Development", summary: "Our science laboratory, renewed with modern equipment, provides students with the best environment for experimental learning.", image: "/images/science-room-1.webp", content: "<p>Our school's science laboratory has been redesigned with the latest technology experiment equipment and interactive learning tools. Students can now conduct physics, chemistry, and biology experiments in a safer and more efficient environment.</p>" },
      { id: 2, slug: "art-workshop-exhibition", title: "Student Art Exhibition Opens", date: "January 25, 2026", category: "Event", summary: "Works prepared by our students throughout the semester are on display in our art workshop.", image: "/images/art-room-1.webp", content: "<p>Paintings, sculptures, and ceramic works produced by our students in Visual Arts classes are on display in our art workshop. The exhibition is also open to parents.</p>" },
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
      { id: "sanat", title: "Görsel Sanatlar Atölyesi", desc: "Yaratıcılığı geliştiren sanat eğitimi", image: "/images/art-room-1.webp" },
      { id: "muzik", title: "Müzik Atölyesi", desc: "Enstrüman ve ses eğitimi", image: "/images/music-room-1.webp" },
      { id: "kodlama", title: "Kodlama Atölyesi", desc: "Yazılım ve robotik eğitimi", image: "/images/classroom-smartboard.webp" },
      { id: "fen", title: "Fen Bilgisi Laboratuvarı", desc: "Deneysel öğrenme ortamı", image: "/images/science-room-1.webp" },
      { id: "spor", title: "Kapalı Spor Salonu", desc: "Fiziksel gelişim aktiviteleri", image: "/images/sports-hall-1.webp" },
      { id: "kutuphane", title: "Kütüphane", desc: "Okuma ve araştırma merkezi", image: "/images/kutuphane-gercek.webp" },
      { id: "yemekhane", title: "Yemekhane", desc: "Sağlıklı ve hijyenik beslenme", image: "/images/yemekhane-gercek.webp" },
      { id: "rehberlik", title: "Rehberlik Odası", desc: "Bireysel danışmanlık hizmeti", image: "/images/entrance-lobby.webp" },
    ];
  }
  return [
    { id: "art", title: "Visual Arts Workshop", desc: "Art education that develops creativity", image: "/images/art-room-1.webp" },
    { id: "music", title: "Music Workshop", desc: "Instrument and vocal training", image: "/images/music-room-1.webp" },
    { id: "coding", title: "Coding Workshop", desc: "Software and robotics education", image: "/images/classroom-smartboard.webp" },
    { id: "science", title: "Science Laboratory", desc: "Experimental learning environment", image: "/images/science-room-1.webp" },
    { id: "sports", title: "Indoor Sports Hall", desc: "Physical development activities", image: "/images/sports-hall-1.webp" },
    { id: "library", title: "Library", desc: "Reading and research center", image: "/images/kutuphane-gercek.webp" },
    { id: "cafeteria", title: "Cafeteria", desc: "Healthy and hygienic nutrition", image: "/images/yemekhane-gercek.webp" },
    { id: "counseling", title: "Counseling Office", desc: "Individual counseling service", image: "/images/entrance-lobby.webp" },
  ];
}

export function getPageContentTranslated(lang: Language) {
  if (lang === "tr") {
    return {
      kurumsal: {
        "hakkimizda": {
          title: "Hakkımızda", subtitle: "25 yıllık tecrübe ile kaliteli eğitim",
          content: "Çekmeköy'ün merkezinde bulunan kampüsümüz 2013 yılında inşa edilmiş modern bir yapıdır. Geniş kapalı alanı ve bahçesi ile öğrencilerimize ferah bir eğitim ortamı sunuyoruz.",
          features: [{ label: "Anaokulu Sınıfı", value: "4 Adet" }, { label: "Kuruluş", value: "2013" }],
          facilities: ["Görsel Sanatlar Atölyesi", "Müzik Atölyesi", "Kodlama Atölyesi", "Fen Bilgisi Laboratuvarı", "Kapalı Spor Salonu", "Kütüphane", "Yemekhane", "Rehberlik Odası"]
        },
        "kurucu-mesaji": {
          title: "Kurucu Mesajı", subtitle: "Değerlerimiz ve vizyonumuz", videoId: "pN3J4PxcR1I",
          content: "Değerli Velilerimiz ve Sevgili Öğrenciler,\n\nGeleceğimizin teminatı olan çocuklarımızı en iyi şekilde yetiştirmek, onlara güvenli ve nitelikli bir eğitim ortamı sunmak en büyük sorumluluğumuzdur.\n\nBoğaziçi İlgi Koleji olarak, öğrencilerimizin akademik başarılarının yanı sıra, milli ve manevi değerlerine bağlı, evrensel düşünebilen, sorgulayan ve üreten bireyler olmalarını önemsiyoruz."
        },
        "vizyon-misyon": {
          title: "Vizyon & Misyon", subtitle: "Geleceği şekillendiriyoruz",
          vision: "Ulusal ve uluslararası platformlarda başarılarıyla tanınan, eğitimde öncü ve örnek bir kurum olmak; geleceği şekillendirecek lider bireyler yetiştirmektir.",
          mission: "Atatürk ilke ve inkılaplarına bağlı, çağdaş, demokratik, eleştirel düşünebilen, toplumsal sorumluluk bilinci gelişmiş, yaratıcı ve üretken bireyler yetiştirmektir.",
          values: [
            { title: "Saygı", desc: "Bireysel farklılıklara ve değerlere saygı" },
            { title: "Dürüstlük", desc: "Şeffaf ve güvenilir iletişim" },
            { title: "Yenilikçilik", desc: "Sürekli gelişim ve değişime açıklık" },
            { title: "İşbirliği", desc: "Aile-okul-öğrenci üçgeninde güçlü bağlar" },
            { title: "Mükemmellik", desc: "Her alanda en iyiyi hedefleme" },
            { title: "Sorumluluk", desc: "Topluma ve çevreye karşı bilinçli yaklaşım" }
          ]
        },
        "egitim-yaklasimimiz": {
          title: "Eğitim Yaklaşımımız", subtitle: "Öğrenci merkezli modern eğitim",
          content: "Öğrenci merkezli eğitim modelimiz, her çocuğun bireysel öğrenme hızına ve stiline saygı duyar. Yaparak ve yaşayarak öğrenme ilkesiyle, teorik bilgiyi pratiğe dönüştüren uygulamalar sunuyoruz.",
          timeline: [
            { year: "2000", title: "Kuruluş", desc: "Boğaziçi İlgi Okulları eğitim hayatına başladı" },
            { year: "2010", title: "Cambridge Programı", desc: "Uluslararası Cambridge İngilizce programı başlatıldı" },
            { year: "2013", title: "Çekmeköy Kampüsü", desc: "Modern Çekmeköy kampüsümüz hizmete açıldı" },
            { year: "2015", title: "STEM Eğitimi", desc: "Kodlama ve robotik eğitimleri müfredata eklendi" },
            { year: "2020", title: "Dijital Dönüşüm", desc: "Akıllı tahta ve tablet destekli eğitime geçildi" },
            { year: "2024", title: "Yapay Zeka", desc: "AI destekli kişiselleştirilmiş öğrenme sistemleri" }
          ],
          principles: [
            { title: "Bütünsel Gelişim", desc: "Akademik, sosyal ve duygusal gelişimi birlikte destekliyoruz.", icon: "heart" },
            { title: "Aktif Öğrenme", desc: "Yaparak ve yaşayarak öğrenme metodlarını uyguluyoruz.", icon: "zap" },
            { title: "Disiplinlerarası Çalışma", desc: "Farklı disiplinleri birleştiren projeler geliştiriyoruz.", icon: "layers" },
            { title: "Teknoloji Entegrasyonu", desc: "Modern teknolojileri eğitim sürecine dahil ediyoruz.", icon: "cpu" }
          ]
        }
      },
      akademik: {
        "anaokulu": {
          title: "Anaokulu", subtitle: "Keşfeden, sorgulayan minik zihinler", ages: "3-6 Yaş", color: "#F97316",
          image: "/images/kindergarten-kitchen.jpg",
          galleryImages: ["/images/kindergarten-kitchen.jpg", "/images/kindergarten-numbers-1.jpg", "/images/kindergarten-numbers-2.jpg", "/images/playground-slide-1.jpg", "/images/playground-mural.jpg"],
          content: "Okul öncesi eğitim, çocuğun gelişiminin en hızlı olduğu ve karakterinin şekillendiği kritik bir dönemdir. Anaokulumuzda, oyun temelli öğrenme yaklaşımıyla çocuklarımızın merak duygusunu canlı tutuyor, sosyal ve duygusal gelişimlerini destekliyoruz.",
          features: [
            { title: "Oyun Temelli Öğrenme", desc: "Eğlenerek öğrenme metodolojisi" },
            { title: "Drama ve Müzik", desc: "Sanatsal yeteneklerin keşfi" },
            { title: "Erken Okuma Yazma", desc: "Fonetik yöntemle okuma hazırlığı" },
            { title: "İngilizce Eğitimi", desc: "Yabancı dile erken başlangıç" },
            { title: "Psikomotor Gelişim", desc: "Motor beceri aktiviteleri" },
            { title: "Sosyal Beceriler", desc: "Paylaşma ve iletişim becerileri" }
          ]
        },
        "ilkokul": {
          title: "İlkokul", subtitle: "Güçlü akademik temeller", ages: "1-4. Sınıf", color: "#3B82F6",
          image: "/images/classroom-smartboard.webp",
          galleryImages: ["/images/classroom-smartboard.webp", "/images/classroom-blue-1.jpg", "/images/classroom-orange-new-1.jpg", "/images/library-1.jpg", "/images/art-room-1.webp"],
          content: "İlkokul kademesinde temel amacımız, öğrencilerimize okuma, yazma, matematik ve fen bilimleri gibi temel becerileri kazandırırken, aynı zamanda araştırma yapma ve problem çözme yeteneklerini geliştirmektir.",
          features: [
            { title: "Cambridge İngilizce", desc: "Uluslararası standartlarda dil eğitimi" },
            { title: "Kodlama Eğitimi", desc: "Algoritmik düşünme becerileri" },
            { title: "STEM Projeleri", desc: "Bilim, teknoloji, mühendislik, matematik" },
            { title: "Matematik Atölyesi", desc: "Somut materyallerle öğrenme" },
            { title: "Okuma Saatleri", desc: "Kitap sevgisi ve alışkanlığı" },
            { title: "Değerler Eğitimi", desc: "Karakter ve ahlak gelişimi" }
          ]
        },
        "ortaokul": {
          title: "Ortaokul", subtitle: "Liselere hazırlık ve kariyer planlama", ages: "5-8. Sınıf", color: "#10B981",
          image: "/images/science-room-1.webp",
          galleryImages: ["/images/science-room-1.webp", "/images/science-room-2.webp", "/images/sports-hall-1.webp", "/images/music-room-1.webp", "/images/library-2.jpg"],
          content: "Ortaokul dönemi, akademik branşlaşmanın başladığı ve liselere geçiş sınavlarına hazırlığın yoğunlaştığı bir süreçtir. Deneyimli kadromuzla öğrencilerimizi LGS'ye en iyi şekilde hazırlıyoruz.",
          features: [
            { title: "LGS Hazırlık", desc: "Sınava yönelik yoğun çalışma programı" },
            { title: "2. Yabancı Dil", desc: "Almanca veya İspanyolca seçenekleri" },
            { title: "Proje Bazlı Öğrenme", desc: "Araştırma ve sunum becerileri" },
            { title: "Kariyer Rehberliği", desc: "Meslek tanıtımı ve yönlendirme" },
            { title: "Kulüp Çalışmaları", desc: "Sosyal ve sportif aktiviteler" },
            { title: "Deneme Sınavları", desc: "Düzenli ölçme ve değerlendirme" }
          ]
        }
      }
    };
  }
  return {
    kurumsal: {
      "hakkimizda": {
        title: "About Us", subtitle: "Quality education with 25 years of experience",
        content: "Our campus, located in the center of Çekmeköy, is a modern building constructed in 2013. With its large indoor area and garden, we offer students a spacious learning environment.",
        features: [{ label: "Preschool Classrooms", value: "4" }, { label: "Founded", value: "2013" }],
        facilities: ["Visual Arts Workshop", "Music Workshop", "Coding Workshop", "Science Laboratory", "Indoor Sports Hall", "Library", "Cafeteria", "Counseling Office"]
      },
      "kurucu-mesaji": {
        title: "Founder's Message", subtitle: "Our values and vision", videoId: "pN3J4PxcR1I",
        content: "Dear Parents and Students,\n\nRaising our children, who are the guarantee of our future, in the best possible way and providing them with a safe and quality educational environment is our greatest responsibility.\n\nAs Boğaziçi İlgi College, we care not only about our students' academic success but also about raising individuals who are committed to their national and moral values, who think universally, question, and create."
      },
      "vizyon-misyon": {
        title: "Vision & Mission", subtitle: "Shaping the future",
        vision: "To be a pioneering and exemplary institution recognized for its achievements on national and international platforms; to raise leaders who will shape the future.",
        mission: "To raise individuals who adhere to Atatürk's principles and reforms, who are modern, democratic, capable of critical thinking, socially responsible, creative, and productive.",
        values: [
          { title: "Respect", desc: "Respect for individual differences and values" },
          { title: "Honesty", desc: "Transparent and trustworthy communication" },
          { title: "Innovation", desc: "Openness to continuous improvement and change" },
          { title: "Collaboration", desc: "Strong bonds in the family-school-student triangle" },
          { title: "Excellence", desc: "Striving for the best in every field" },
          { title: "Responsibility", desc: "Conscious approach to society and environment" }
        ]
      },
      "egitim-yaklasimimiz": {
        title: "Our Approach", subtitle: "Student-centered modern education",
        content: "Our student-centered education model respects each child's individual learning pace and style. With the principle of learning by doing, we offer applications that transform theoretical knowledge into practice.",
        timeline: [
          { year: "2000", title: "Founded", desc: "Boğaziçi İlgi Schools began its educational journey" },
          { year: "2010", title: "Cambridge Program", desc: "International Cambridge English program launched" },
          { year: "2013", title: "Çekmeköy Campus", desc: "Modern Çekmeköy campus opened" },
          { year: "2015", title: "STEM Education", desc: "Coding and robotics education added to curriculum" },
          { year: "2020", title: "Digital Transformation", desc: "Transition to smart board and tablet-supported education" },
          { year: "2024", title: "Artificial Intelligence", desc: "AI-powered personalized learning systems" }
        ],
        principles: [
          { title: "Holistic Development", desc: "We support academic, social, and emotional development together.", icon: "heart" },
          { title: "Active Learning", desc: "We apply learning by doing and experiencing methods.", icon: "zap" },
          { title: "Interdisciplinary Work", desc: "We develop projects that combine different disciplines.", icon: "layers" },
          { title: "Technology Integration", desc: "We integrate modern technologies into the educational process.", icon: "cpu" }
        ]
      }
    },
    akademik: {
      "anaokulu": {
        title: "Preschool", subtitle: "Curious, questioning little minds", ages: "Ages 3-6", color: "#F97316",
        image: "/images/kindergarten-kitchen.jpg",
        galleryImages: ["/images/kindergarten-kitchen.jpg", "/images/kindergarten-numbers-1.jpg", "/images/kindergarten-numbers-2.jpg", "/images/playground-slide-1.jpg", "/images/playground-mural.jpg"],
        content: "Preschool education is a critical period when a child's development is at its fastest and their character is being shaped. In our preschool, we keep children's curiosity alive through play-based learning and support their social and emotional development.",
        features: [
          { title: "Play-Based Learning", desc: "Learning through fun methodology" },
          { title: "Drama & Music", desc: "Discovery of artistic talents" },
          { title: "Early Literacy", desc: "Reading preparation with phonics" },
          { title: "English Education", desc: "Early start to foreign language" },
          { title: "Psychomotor Development", desc: "Motor skill activities" },
          { title: "Social Skills", desc: "Sharing and communication skills" }
        ]
      },
      "ilkokul": {
        title: "Primary School", subtitle: "Strong academic foundations", ages: "Grades 1-4", color: "#3B82F6",
        image: "/images/classroom-smartboard.webp",
        galleryImages: ["/images/classroom-smartboard.webp", "/images/classroom-blue-1.jpg", "/images/classroom-orange-new-1.jpg", "/images/library-1.jpg", "/images/art-room-1.webp"],
        content: "Our main goal at the primary school level is to equip students with fundamental skills such as reading, writing, mathematics, and science, while also developing their research and problem-solving abilities.",
        features: [
          { title: "Cambridge English", desc: "International standard language education" },
          { title: "Coding Education", desc: "Algorithmic thinking skills" },
          { title: "STEM Projects", desc: "Science, technology, engineering, math" },
          { title: "Math Workshop", desc: "Learning with concrete materials" },
          { title: "Reading Hours", desc: "Love of books and reading habits" },
          { title: "Values Education", desc: "Character and moral development" }
        ]
      },
      "ortaokul": {
        title: "Middle School", subtitle: "High school preparation and career planning", ages: "Grades 5-8", color: "#10B981",
        image: "/images/science-room-1.webp",
        galleryImages: ["/images/science-room-1.webp", "/images/science-room-2.webp", "/images/sports-hall-1.webp", "/images/music-room-1.webp", "/images/library-2.jpg"],
        content: "Middle school is a period when academic specialization begins and preparation for high school entrance exams intensifies. With our experienced staff, we prepare our students for the LGS exam in the best possible way.",
        features: [
          { title: "LGS Preparation", desc: "Intensive exam preparation program" },
          { title: "Second Foreign Language", desc: "German or Spanish options" },
          { title: "Project-Based Learning", desc: "Research and presentation skills" },
          { title: "Career Guidance", desc: "Career introduction and counseling" },
          { title: "Club Activities", desc: "Social and sports activities" },
          { title: "Practice Exams", desc: "Regular assessment and evaluation" }
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
