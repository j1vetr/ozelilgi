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
  "nav.about.policy": { tr: "Eğitim Politikamız", en: "Our Education Policy" },
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

  "cta.title": { tr: "Çocuğunuzun Geleceğini Şekillendirin", en: "Shape Your Child's Future" },
  "cta.desc": { tr: "Okulumuzun sunduğu eğitim imkanlarını keşfedin, kampüsümüzü ziyaret edin.", en: "Discover the educational opportunities our school offers, visit our campus." },
  "cta.register": { tr: "Ön Kayıt Yap", en: "Pre-Register" },
  "cta.contact": { tr: "Bizi Arayın", en: "Call Us" },

  "levels.title": { tr: "Eğitim Birimleri", en: "Education Levels" },
  "levels.desc": { tr: "Her yaş grubuna özel hazırlanmış eğitim programlarımız.", en: "Our education programs specially designed for each age group." },
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

  "about.title": { tr: "Hakkımızda", en: "About Us" },
  "about.subtitle": { tr: "26+ Yıllık Tecrübe ile Kaliteli Eğitim", en: "Quality Education with 26+ Years of Experience" },
  "about.content": { tr: "Çekmeköy'ün merkezinde bulunan kampüsümüz 2013 yılında inşa edilmiş modern bir yapıdır. Geniş kapalı alanı ve bahçesi ile öğrencilerimize ferah bir eğitim ortamı sunuyoruz.", en: "Our campus, located in the center of Çekmeköy, is a modern building constructed in 2013. With its large indoor area and garden, we offer students a spacious learning environment." },
  "about.preschool_class": { tr: "Anaokulu Sınıfı", en: "Preschool Classrooms" },
  "about.founded": { tr: "Kuruluş", en: "Founded" },

  "founder.title": { tr: "Kurucu Mesajı", en: "Founder's Message" },
  "founder.subtitle": { tr: "Değerlerimiz ve Vizyonumuz", en: "Our Values and Vision" },
  "founder.content": { tr: "Değerli Velilerimiz ve Sevgili Öğrenciler,\n\nGeleceğimizin teminatı olan çocuklarımızı en iyi şekilde yetiştirmek, onlara güvenli ve nitelikli bir eğitim ortamı sunmak en büyük sorumluluğumuzdur.\n\nBoğaziçi İlgi Koleji olarak, öğrencilerimizin akademik başarılarının yanı sıra, milli ve manevi değerlerine bağlı, evrensel düşünebilen, sorgulayan ve üreten bireyler olmalarını önemsiyoruz.", en: "Dear Parents and Students,\n\nRaising our children, who are the guarantee of our future, in the best possible way and providing them with a safe and quality educational environment is our greatest responsibility.\n\nAs Boğaziçi İlgi College, we care not only about our students' academic success but also about raising individuals who are committed to their national and moral values, who think universally, question, and create." },

  "vision.title": { tr: "Vizyon & Misyon", en: "Vision & Mission" },
  "vision.subtitle": { tr: "Geleceği Şekillendiriyoruz", en: "Shaping the Future" },
  "vision.vision": { tr: "Ulusal ve uluslararası platformlarda başarılarıyla tanınan, eğitimde öncü ve örnek bir kurum olmak; geleceği şekillendirecek lider bireyler yetiştirmektir.", en: "To be a pioneering and exemplary institution recognized for its achievements on national and international platforms; to raise leaders who will shape the future." },
  "vision.mission": { tr: "Atatürk ilke ve inkılaplarına bağlı, çağdaş, demokratik, eleştirel düşünebilen, toplumsal sorumluluk bilinci gelişmiş, yaratıcı ve üretken bireyler yetiştirmektir.", en: "To raise individuals who adhere to Atatürk's principles and reforms, who are modern, democratic, capable of critical thinking, socially responsible, creative, and productive." },

  "approach.title": { tr: "Eğitim Yaklaşımımız", en: "Our Approach" },
  "approach.subtitle": { tr: "Öğrenci Merkezli Modern Eğitim", en: "Student-Centered Modern Education" },
  "approach.content": { tr: "Öğrenci merkezli eğitim modelimiz, her çocuğun bireysel öğrenme hızına ve stiline saygı duyar. Yaparak ve yaşayarak öğrenme ilkesiyle, teorik bilgiyi pratiğe dönüştüren uygulamalar sunuyoruz.", en: "Our student-centered education model respects each child's individual learning pace and style. With the principle of learning by doing, we offer applications that transform theoretical knowledge into practice." },

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
        { title: getTranslation("nav.about.policy", lang), href: "/kurumsal/egitim-politikamiz" },
      ],
    },
    {
      title: getTranslation("nav.academic", lang),
      href: "/akademik",
      items: [
        { title: getTranslation("nav.academic.preschool", lang), href: "/akademik/anaokulu" },
        { title: lang === "tr" ? "Oyun Grubu (2-3 Yaş)" : "Play Group (Ages 2-3)", href: "/akademik/oyun-grubu" },
        { title: getTranslation("nav.academic.primary", lang), href: "/akademik/ilkokul" },
        { title: getTranslation("nav.academic.middle", lang), href: "/akademik/ortaokul" },
        { title: lang === "tr" ? "Başarılarımız" : "Achievements", href: "/basarilar" },
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
        { title: getTranslation("nav.guides", lang), href: "/rehber" },
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
      { title: getTranslation("nav.about.policy", lang), href: "/kurumsal/egitim-politikamiz" },
      { title: lang === "tr" ? "Başarılarımız" : "Achievements", href: "/basarilar" },
    ],
    akademik: [
      { title: lang === "tr" ? "Çekmeköy Anaokulu" : "Preschool in Çekmeköy", href: "/akademik/anaokulu" },
      { title: lang === "tr" ? "Oyun Grubu (2-3 Yaş)" : "Play Group (Ages 2-3)", href: "/akademik/oyun-grubu" },
      { title: lang === "tr" ? "Çekmeköy İlkokulu" : "Primary School in Çekmeköy", href: "/akademik/ilkokul" },
      { title: lang === "tr" ? "Çekmeköy Ortaokulu" : "Middle School in Çekmeköy", href: "/akademik/ortaokul" },
      { title: lang === "tr" ? "Kampüs İmkanları" : "Campus Facilities", href: "/kampus/imkanlar" },
      { title: getTranslation("nav.campus.gallery", lang), href: "/kampus/galeri" },
    ],
    kayit: [
      { title: lang === "tr" ? "Kayıt İşlemleri" : "Enrollment", href: "/kayit" },
      { title: getTranslation("nav.enrollment.process", lang), href: "/kayit/kayit-sureci" },
      { title: getTranslation("nav.enrollment.form", lang), href: "/kayit/on-kayit" },
      { title: getTranslation("nav.guides", lang), href: "/rehber" },
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
      { id: "kodlama", title: "Kodlama Atölyesi", desc: "Yazılım ve robotik eğitimi", image: "/images/coding-lab-1.webp" },
      { id: "fen", title: "Fen Bilgisi Laboratuvarı", desc: "Deneysel öğrenme ortamı", image: "/images/science-lab-new.webp" },
      { id: "bahce", title: "Bahçe & Oyun Alanı", desc: "Açık hava oyun ve etkinlik alanı", image: "/images/garden-slide.webp" },
      { id: "spor", title: "Kapalı Spor Salonu", desc: "Fiziksel gelişim aktiviteleri", image: "/images/sports-hall-1.webp" },
      { id: "kutuphane", title: "Kütüphane", desc: "Okuma ve araştırma merkezi", image: "/images/kutuphane-gercek.webp" },
      { id: "yemekhane", title: "Yemekhane", desc: "Sağlıklı ve hijyenik beslenme", image: "/images/yemekhane-gercek.webp" },
      { id: "rehberlik", title: "Rehberlik Odası", desc: "Bireysel danışmanlık hizmeti", image: "/images/entrance-lobby.webp" },
    ];
  }
  return [
    { id: "art", title: "Visual Arts Workshop", desc: "Art education that develops creativity", image: "/images/art-room-new-1.webp" },
    { id: "music", title: "Music Workshop", desc: "Instrument and vocal training", image: "/images/music-room-1.webp" },
    { id: "coding", title: "Coding Workshop", desc: "Software and robotics education", image: "/images/coding-lab-1.webp" },
    { id: "science", title: "Science Laboratory", desc: "Experimental learning environment", image: "/images/science-lab-new.webp" },
    { id: "garden", title: "Garden & Play Area", desc: "Outdoor play and activity area", image: "/images/garden-slide.webp" },
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
          title: "Hakkımızda", subtitle: "Geleceği Sevgi, Deneyim ve Keşifle İnşa Ediyoruz",
          content: "Çekmeköy Boğaziçi Özel İlgi Okulları olarak, 26+ yıla dayanan öğretmenlik deneyimine sahip kurucularımızın vizyonuyla, kendimizi tamamen geleceğin teminatı olan çocuklarımıza adıyoruz. Eğitimin içinden gelen bir kadronun tecrübesiyle; ticari kaygılardan uzak, sadece ve sadece öğrencilerin ihtiyaçlarını ve gelişimini odağına alan bir eğitim anlayışını benimsiyoruz.\n\nAnaokulundan başlayarak her kademede; her çocuğun eşsiz yeteneklerle donatıldığına ve her birinin kendine özgü bir potansiyele sahip olduğuna inanıyoruz. Asıl amacımız; bu üstün özellikleri keşfetmek, doğru ve planlı bir rehberlikle geliştirmek ve bireysel üretkenliğe dönüştürmektir.",
          features: [
            { label: "Öğretmenlik Tecrübesi", value: "26+ Yıl" },
            { label: "Kampüs Kuruluşu", value: "2013" },
            { label: "Eğitim Kademesi", value: "3" },
            { label: "Memnuniyet", value: "%100" }
          ],
          principles: [
            "Dünyadaki ve ülkemizdeki yenilikleri yakından takip eden",
            "Kendi öğrenme ve gelişme hızına göre şekillendirilen programlarla ilerleyen",
            "Becerilerini ve ilgi alanlarını en üst düzeyde geliştiren",
            "Özgüveni yüksek, yaratıcı ve liderlik vasıfları gelişmiş",
            "Toplum bilincine sahip, doğaya ve tüm canlılara saygılı bireyler"
          ],
          facilities: ["Görsel Sanatlar Atölyesi", "Müzik Atölyesi", "Kodlama Atölyesi", "Fen Bilgisi Laboratuvarı", "Kapalı Spor Salonu", "Kütüphane", "Yemekhane", "Rehberlik Odası"]
        },
        "kurucu-mesaji": {
          title: "Kurucu Mesajı", subtitle: "Değerlerimiz ve Vizyonumuz", videoId: "pN3J4PxcR1I",
          content: "Değerli Velilerimiz ve Sevgili Öğrenciler,\n\nGeleceğimizin teminatı olan çocuklarımızı en iyi şekilde yetiştirmek, onlara güvenli ve nitelikli bir eğitim ortamı sunmak en büyük sorumluluğumuzdur.\n\nBoğaziçi İlgi Koleji olarak, öğrencilerimizin akademik başarılarının yanı sıra, milli ve manevi değerlerine bağlı, evrensel düşünebilen, sorgulayan ve üreten bireyler olmalarını önemsiyoruz."
        },
        "vizyon-misyon": {
          title: "Vizyon & Misyon", subtitle: "Geleceği Şekillendiriyoruz",
          vision: "Ulusal ve uluslararası platformlarda başarılarıyla örnek gösterilen, 26+ yıllık öğretmenlik tecrübesi ve özgün eğitim yaklaşımıyla geleceğe yön veren öncü bir kurum olmak; Atatürk ilke ve inkılaplarının ışığında, evrensel değerlerle donatılmış lider bireyler yetiştirmektir.",
          mission: "Çekmeköy Özel Boğaziçi İlgi Okulları olarak; \"Her çocuk özel ilgiyi hak eder\" ve \"Daha iyi bir eğitim mümkün\" anlayışıyla hareket ederiz. Çeyrek asırlık öğretmenlik tecrübemiz, bilimin rehberliği ve koşulsuz sevgiyle harmanladığımız eğitim-öğretim programlarımız sayesinde öğrencilerimizi hayata hazırlarız.",
          values: [
            { title: "Vatanseverlik", desc: "Aklı hür, vicdanı hür, Atatürk ilke ve devrimlerini benimsemiş bireyler" },
            { title: "Bilimsel Düşünce", desc: "Bilimi ve akılcı düşünmeyi hayat felsefesi edinmiş" },
            { title: "Özgüven & Yaratıcılık", desc: "Kendi yeteneklerini keşfetmiş, özgüveni ve yaratıcılığı yüksek" },
            { title: "Evrensel Değerler", desc: "Değişen dünyada milli ve evrensel değerlerinden ödün vermeyen" },
            { title: "Doğa & Toplum Bilinci", desc: "Toplum bilincine sahip, doğaya, çevresine ve tüm canlılara duyarlı" },
            { title: "Yaşam Boyu Öğrenme", desc: "Yaşam boyu öğrenmeyi ilke edinmiş, vizyon sahibi ve üretken" }
          ]
        },
        "egitim-yaklasimimiz": {
          title: "Eğitim Yaklaşımımız", subtitle: "Öğrenci Merkezli Modern Eğitim",
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
        },
        "egitim-politikamiz": {
          title: "Eğitim Politikamız", subtitle: "Öğrenci Odaklı, Değer Temelli Eğitim Anlayışı",
          content: "Çekmeköy Özel Boğaziçi İlgi Okulları, kuruluşundan bu yana öğretmen vizyonunu ve öğrenci odaklı yaklaşımını merkezine alarak yenilikçi ve kararlı bir şekilde yoluna devam etmektedir.\n\nZamanın gereklerini ve öğrencilerimizin üstün faydasını gözeterek hazırlanan özgün eğitim programlarımız; yetkin ve tutkuyla çalışan akademik kadromuzun emeği, sevgi ve saygıya dayalı kurum kültürümüzle bütünleşmektedir.\n\nAmacımız; ticari kaygılardan uzak, kendisini tamamen öğrenci yetiştirmeye adamış uzman kadromuzla, her bir çocuğumuzun gelişim hızına ve ilgisine özel çözümler sunarak mutlu, başarılı ve geleceğe güvenle bakan nesiller inşa etmektir.",
          principles: [
            { title: "Öğrenci Odaklı Yaklaşım", desc: "Her bir çocuğun gelişim hızına ve ilgisine özel çözümler sunarak mutlu ve başarılı nesiller inşa ediyoruz.", icon: "heart" },
            { title: "Özgün Eğitim Programları", desc: "Zamanın gereklerini ve öğrencilerimizin üstün faydasını gözeterek hazırlanan, yetkin akademik kadromuzun uyguladığı programlar.", icon: "zap" },
            { title: "Ticari Kaygılardan Uzak", desc: "Kendimizi tamamen öğrenci yetiştirmeye adamış uzman kadromuzla eğitimde kaliteyi her şeyin üstünde tutuyoruz.", icon: "shield" },
            { title: "Koşulsuz Sevgi ve Güven", desc: "Eğitimin olmazsa olmazının koşulsuz sevgi ve sarsılmaz bir güven olduğuna inanıyor; tüm çalışmalarımızı bu temele inşa ediyoruz.", icon: "sparkles" }
          ]
        }
      },
      akademik: {
        "anaokulu": {
          title: "Anaokulu", subtitle: "Keşfeden, Sorgulayan Minik Zihinler", ages: "3-6 Yaş", color: "#F97316",
          image: "/images/preschool-orange-1.webp",
          galleryImages: ["/images/preschool-orange-1.webp", "/images/preschool-orange-2.webp", "/images/preschool-blue-1.webp", "/images/preschool-blue-2.webp", "/images/garden-slide.webp"],
          content: "Okul öncesi eğitim; özgüvenin ve öğrenme merakının perçinlendiği, dil ve düşünme becerilerinin geliştiği, toplumsal değerlerin kazandırıldığı ve insanın hayatı boyunca izlerini taşıdığı hazine değerindeki yılları kapsar.",
          richSections: [
            {
              body: "Okul öncesi eğitim; özgüvenin ve öğrenme merakının perçinlendiği, dil ve düşünme becerilerinin geliştiği, toplumsal değerlerin kazandırıldığı ve insanın hayatı boyunca izlerini taşıdığı hazine değerindeki yılları kapsar."
            },
            {
              body: "Bilimsel araştırmalar, okul öncesi eğitimdeki yatırımların bireyin geleceğine katma değerinin en yüksek olduğu dönemi işaret etmektedir. Donanımlı bir okul öncesi eğitim süreci, 6 yaşındaki bir çocuğun zihinsel ve dilsel gelişiminde akranlarına kıyasla devasa bir fark oluşturmasını sağlar."
            },
            {
              body: "26 yıllık öğretmenlik tecrübemizle biliyoruz ki: Hayatta her büyük başarı, doğru zamanda gösterilen özel bir ilgi ve sevgiyle başlar. Boğaziçi İlgi Okulları'nda her çocuk, içindeki potansiyelin ortaya çıkması için gerekli zamanı, sabrı, planlı çabayı ve en önemlisi koşulsuz sevgiyi hak eder. Bizler, çocuklarımızın içindeki o eşsiz potansiyeli keşfeder; doğru yönlendirmelerle geleceğe güvenle bakan güçlü bireyler yetiştiririz."
            },
            {
              heading: "Dünya Standartlarında, Özgün Eğitim",
              body: "Dünyadaki yetkin okul öncesi yaklaşımları göz önünde bulundurularak hazırlanan Boğaziçi İlgi Okul Öncesi Programı;",
              bullets: [
                "Her çocuğun özel ve tek olduğunu kabul eder, bireysel gelişim hızını ve farklılıklarını gözetir.",
                "Öğrenciye adım adım komut vermek yerine onun merak duygusunu ve keşfetme arzusunu tetikler.",
                "Öğretmenin sadece bilgi aktaran değil, sevgiyle rehberlik eden konumda olduğu etkileşimli bir öğrenme ortamı sunar.",
                "Ezberden uzak; yaparak, deneyerek, yaşayarak ve eğlenerek öğrenmeyi esas alan, oyun temelli yapılandırılmış etkinliklerle desteklenir.",
                "İlkokula hazırlık sürecinde gerekli motor, sosyal, duygusal, dil ve bilişsel becerileri en üst seviyeye taşırken; yaşam ve öz bakım becerilerini kazandırır.",
                "Doğaya, insana, canlılara ve farklılıklara saygılı; Atatürk ilke ve inkılaplarına bağlı, toplumsal sorumluluk bilinci yüksek bireyler yetiştirmeyi amaçlar."
              ]
            },
            {
              body: "Boğaziçi İlgi Anaokulu öğrencilerinin gününün önemli bir kısmı İngilizce ile geçer. Anaokulundan itibaren entegre bir şekilde yürütülen programımız sayesinde öğrencilerimizin dili bir \"ders\" olarak değil, doğal bir \"yaşam aracı\" olarak edinmeleri sağlanır."
            },
            {
              body: "Tüm derslerde, beş duyuyu harekete geçiren duyu materyalleri ve özel eğitim araçları kullanılır. Çocuklarımız matematikle oyun oynayarak tanışır, ses farkındalığını ritimle geliştirir; doğaya dokunarak, kirlenerek ve keşfederek çevresini tanır."
            },
            {
              highlight: "Çünkü Biliyoruz Ki: Her çocuk özel ilgiyi hak eder ve ilgiyle büyüyen her Boğaziçi İlgi öğrencisi, üstün yetenekleriyle donatılmış mutlu bir bireydir."
            }
          ],
          features: [
            { title: "Bireysel Gelişim", desc: "Her çocuğun özel ve tek olduğunu kabul eder; bireysel gelişim hızını ve farklılıklarını gözetir" },
            { title: "Keşfeden Zihinler", desc: "Merak duygusunu ve keşfetme arzusunu tetikler; yaparak, deneyerek, yaşayarak öğrenme" },
            { title: "Oyun Temelli Öğrenme", desc: "Ezberden uzak, eğlenerek öğrenmeyi esas alan oyun temelli yapılandırılmış etkinlikler" },
            { title: "İlkokula Hazırlık", desc: "Motor, sosyal, duygusal, dil ve bilişsel becerileri ile yaşam ve öz bakım becerilerini kazandırır" },
            { title: "Bütünleşik İngilizce", desc: "Anaokulundan itibaren dili doğal bir yaşam aracı olarak edindiren program" },
            { title: "Değerler & Doğa Sevgisi", desc: "Doğaya, insana ve canlılara saygılı; Atatürk ilkelerine bağlı bireyler" }
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
          title: "İlkokul", subtitle: "Güçlü Akademik Temeller", ages: "1-4. Sınıf", color: "#3B82F6",
          image: "/images/primary-class-1.webp",
          galleryImages: ["/images/primary-class-1.webp", "/images/primary-class-2.webp", "/images/primary-class-3.webp", "/images/library-1.jpg", "/images/art-room-1.webp"],
          content: "Hayatta her büyük başarı, doğru zamanda gösterilen özel bir ilgi ve sevgiyle başlar.",
          richSections: [
            {
              body: "Hayatta her büyük başarı, doğru zamanda gösterilen özel bir ilgi ve sevgiyle başlar. Çekmeköy Boğaziçi İlgi Okulları olarak her bir çocuğumuzun içindeki potansiyeli ortaya çıkarmak için gerekli zamanı, sabrı, planlı çabayı ve en önemlisi koşulsuz sevgiyi hak ettiğine inanıyoruz. 26 yıllık öğretmenlik tecrübemizle bu potansiyeli keşfediyor, geleceği aydınlatacak özgüvenli bireyler yetiştiriyoruz."
            },
            {
              heading: "Okuluna Koşa Koşa Gelen Bireyler",
              body: "Çocuklarımızın okulunu sevmesi bizim en büyük önceliğimizdir. Her bir öğrencimizin kapıdan içeri mutlu, huzurlu ve güvende girmesini önemseriz. 26 yılı aşan öğretmenlik tecrübesine sahip uzman kadromuzla, akademik başarıyı sevgi dolu ve sağlam bir temel üzerine inşa ediyoruz. Eğitim hayatına doğru zamanda ve mutlu bir başlangıç yapabilmek adına okula başlama süreçlerimizi detaylı gözlem ve rehberlik ölçümleriyle yönlendiriyoruz."
            },
            {
              heading: "Bilgiyi Değere Dönüştüren Eğitim Anlayışı",
              body: "Başarımızın en önemli anahtarı her bir öğrencimizi yakından tanıyan ve takip eden bireysel eğitim anlayışımızdır. Öğrencilerimizin bilgiyi sadece ezberlemelerini değil, analiz etme, eleştirel düşünme, bilgiyi hayatın içinde kullanma ve yaratıcılık becerilerine dönüştürmelerini destekliyoruz.\n\nİlkokul kadememizde temel amacımız; öğrencilerimize okuma, yazma, matematik ve fen bilimleri gibi temel disiplinleri eksiksiz kazandırırken, aynı zamanda araştıran, sorgulayan ve problem çözme yeteneği gelişmiş bireyler yetiştirmektir."
            },
            {
              heading: "Öne Çıkan Eğitim Programlarımız",
              programs: [
                {
                  num: "1",
                  title: "Doğa, Canlı Sevgisi ve Bilim Programı",
                  body: "\"Üretken merak\" sahibi birey; iç motivasyonu yüksek, araştıran ve hayatı anlamlandırarak yaşayan kişidir. Boğaziçi İlgi Doğa ve Bilim Programı, sorgulamayı doğa sevgisiyle buluşturur. Çevreye, doğaya ve canlılara duyarlı nesiller yetiştirirken öğrencilerimizin doğadaki sistemleri keşfederek bilimsel soru sorma ve düşünme becerilerini geliştiririz."
                },
                {
                  num: "2",
                  title: "Rehberlik ve PDR Çalışmaları",
                  body: "Eğitim-öğretim programlarımız, güçlü Psikolojik Danışmanlık ve Rehberlik (PDR) birimimizle desteklenir. Öğrencilerimizin duygusal, sosyal ve akademik gelişimleri birebir takip edilir. Kendini ifade edebilen, ne istediğini bilen, özgüveni yüksek ve toplumsal sorumluluk bilincine sahip bireyler olmaları için sistemli rehberlik sunulur."
                },
                {
                  num: "3",
                  title: "Yabancı Dil Eğitimi",
                  body: "Dünyanın kabul gördüğü Communicative Language Teaching (İletişimsel Dil Eğitimi) yaklaşımı, hareket odaklı Total Physical Response (TPR) yöntemi ve Montessori felsefesinin çocuk merkezli, somut deneyime dayanan ilkeleriyle İngilizceyi ders olmaktan çıkarıp yaşayan bir iletişim aracına dönüştürüyoruz. Sınıf duvarlarını aşan interaktif atölyeler, drama çalışmaları ve zenginleştirilmiş materyaller sayesinde öğrencilerimizin dili doğal akışında deneyimleyerek akıcı bir şekilde konuşmalarını ve özgüvenle kullanmalarını sağlıyoruz."
                },
                {
                  num: "4",
                  title: "\"Her Çocuk Bir Yetenek\" Atölyeleri",
                  body: "Bizler, her çocuğun üstün yeteneklerle donatıldığına inanıyoruz. 1. sınıftan itibaren müzik, spor, görsel sanatlar, bilişim ve drama atölyeleriyle öğrencilerimizin ilgilerini keşfetmelerini sağlıyoruz. Öğretmenlerimizin yönlendirmesiyle yeteneklerini derinleştirebilecekleri özel kulüp ve atölye çalışmalarına katılarak potansiyellerini en üst seviyeye taşıyorlar."
                },
                {
                  num: "5",
                  title: "Geleceğin Teknolojisi: Robotik ve Kodlama",
                  body: "Değişen dünyanın gereksinimlerine uyum sağlamak adına ilkokulun tüm kademelerinde sunulan Robotik ve Kodlama müfredatımız sayesinde öğrencilerimiz algoritmik düşünme, mantıksal yürütme ve teknolojik okuryazarlık yetkinlikleri kazanır."
                }
              ]
            },
            {
              heading: "Velimiz, En Yakın Paydaşımız",
              body: "Eğitimin bir sacayağı olduğuna inanıyor, velilerimizle açıklık, şeffaflık ve güven ilkesi doğrultusunda iletişim kuruyoruz. Öğrenci takip sistemlerimiz ve düzenli bildirimlerimiz sayesinde velilerimiz, çocuklarının akademik ve sosyal gelişimini anlık olarak takip edebilmektedir.\n\nAyrıca Boğaziçi İlgi Ebeveyn Akademisi çatısı altında düzenlediğimiz rehberlik seminerleri ve ebeveyn eğitimleriyle, çocuklarımızın gelişim yolculuğunda ailelerimizle el ele yürüyoruz."
            },
            {
              highlight: "Çünkü Biliyoruz Ki: Öğretmenlik tecrübemiz ve koşulsuz sevgimizle büyüyen her Çekmeköy Boğaziçi İlgi öğrencisi; değerlerine bağlı, doğaya saygılı, üstün yeteneklerini keşfetmiş mutlu ve başarılı bir bireydir."
            }
          ],
          features: [
            { title: "Doğa, Canlı Sevgisi ve Bilim", desc: "\"Üretken merak\" sahibi bireyler yetiştiren, sorgulamayı doğa sevgisiyle buluşturan özgün program" },
            { title: "Rehberlik ve PDR", desc: "Duygusal, sosyal ve akademik gelişimi birebir takip eden güçlü PDR birimi" },
            { title: "Yabancı Dil Eğitimi", desc: "CLT, TPR ve Montessori yöntemleriyle İngilizceyi yaşayan bir iletişim aracına dönüştürüyoruz" },
            { title: "Her Çocuk Bir Yetenek Atölyeleri", desc: "1. sınıftan itibaren müzik, spor, görsel sanatlar, bilişim ve drama atölyeleri" },
            { title: "Robotik ve Kodlama", desc: "Algoritmik düşünme, mantıksal yürütme ve teknolojik okuryazarlık" },
            { title: "Veli-Okul Dayanışması", desc: "Şeffaf iletişim ve Boğaziçi İlgi Ebeveyn Akademisi ile ailelerle el ele" }
          ]
        },
        "ortaokul": {
          title: "Ortaokul", subtitle: "LGS'ye Hazırlık ve Geleceğe Yön Verme", ages: "5-8. Sınıf", color: "#10B981",
          image: "/images/primary-class-3.webp",
          galleryImages: ["/images/primary-class-3.webp", "/images/sports-hall-1.webp", "/images/music-room-1.webp", "/images/library-2.jpg"],
          content: "Ortaokul dönemi akademik branşlaşmanın başladığı, soyut düşünme becerilerinin geliştiği ve liselere geçiş sınavlarına (LGS) hazırlığın yoğunlaştığı kritik bir süreçtir.",
          richSections: [
            {
              body: "Ortaokul dönemi akademik branşlaşmanın başladığı, soyut düşünme becerilerinin geliştiği ve liselere geçiş sınavlarına (LGS) hazırlığın yoğunlaştığı kritik bir süreçtir. Çekmeköy Boğaziçi İlgi Koleji olarak, 26 yılı aşan öğretmenlik tecrübemizle öğrencilerimizi hem LGS'ye en üst düzeyde hazırlıyor hem de onları geleceğe yön veren, özgüvenli bireyler olarak yetiştiriyoruz.\n\nZamanın gereklerini ve öğrencilerimizin üstün faydasını önceleyen özgün eğitim-öğretim programlarımız sayesinde, öğrencilerimizin yalnızca akademik alanlarda değil, yaşamın her kulvarında başarı elde etmelerini hedefliyoruz."
            },
            {
              heading: "Birebir Takip ve Akademik Başarı",
              body: "Başarımızın en temel anahtarı, ticari kaygılardan uzak, kendisini tamamen öğrenciye adayan uzman kadromuzun uyguladığı birebir ve sistemli takip anlayışıdır.",
              bullets: [
                "LGS ve Beceri Temelli Yaklaşım: Öğrencilerimiz, yeni nesil ve beceri temelli sorular aracılığıyla bilgiyi sadece ezberlemekle kalmaz; analiz etme, yorumlama ve hayatın içinde kullanma yetkinliği kazanır.",
                "Analitik Ölçme ve Değerlendirme: Bireysel takip sistemimiz doğrultusunda, konu kazanımlarının yanı sıra mantık ve muhakeme becerileri de detaylıca analiz edilir.",
                "Etüt ve Akademik Destek: Genel deneme sınavları sonuçlarına göre eksikleri belirlenen öğrencilerimiz, okulumuz bünyesinde düzenlenen özel etüt ve birebir tamamlama programlarıyla kesintisiz desteklenir."
              ]
            },
            {
              heading: "LGS Hazırlıkta \"Biz Bize Yeteriz\"",
              body: "Eğitim modelimiz; öğrencilerimizin herhangi bir dış kursa veya özel derse ihtiyaç duymadan, LGS hazırlık sürecinde ihtiyaç duydukları tüm akademik desteği okulumuz bünyesinde almaları üzerine kurulmuştur.",
              bullets: [
                "Birebir Akademik Koçluk: 8. sınıftaki öğrencilerimize atanan danışman öğretmenimiz, sınav maratonu boyunca hem akademik takibi yürütür hem de psikolojik rehberlik sağlar.",
                "Verimli Çalışma Disiplini: Sınav grubu öğrencilerimizin disiplinli ve planlı bir çalışma ritmi yakalamaları için özel çalışma kampları ve takip programları uygulanır.",
                "Veli-Okul Dayanışması: Öğrencilerimizin akademik ve gelişimsel süreçleri, velilerimizle şeffaf ve anlık iletişim kanalları üzerinden düzenli olarak paylaşılır."
              ]
            },
            {
              heading: "Öne Çıkan Eğitim Programlarımız",
              programs: [
                {
                  num: "1",
                  title: "Doğa, Canlı Sevgisi ve Bilim Programı",
                  body: "\"Üretken merak\" sahibi birey; sorgulayan, araştıran ve çevresini anlamlandırarak yaşayan kişidir. Boğaziçi İlgi Doğa ve Bilim Programı; bilimsel merakı doğa sevgisiyle birleştirir. Öğrencilerimiz, doğadaki sistemleri keşfederken bilimsel soru sorma becerisi kazanır, çevreye, doğaya ve tüm canlılara saygılı bireyler olarak yetişir."
                },
                {
                  num: "2",
                  title: "Rehberlik ve PDR Çalışmaları",
                  body: "Ergenlik döneminin getirdiği duygusal ve sosyal değişimler, PDR birimimiz tarafından hassasiyetle yönetilir. Öğrencilerimizin özgüven kazanmaları, hedef belirlemeleri, zaman yönetimi ve sınav kaygısıyla baş etmeleri için bireysel görüşmeler ve grup çalışmaları yürütülür."
                },
                {
                  num: "3",
                  title: "Yabancı Dil Eğitimi",
                  body: "İngilizce: Communicative Language Teaching yaklaşımını Task-Based Learning metoduyla destekleyerek çocuklarımıza dili sadece kitaplar üzerinde öğrenmek yerine, hayatın içinden projelerle bizzat deneyimleme fırsatı sunuyoruz. İnteraktif dersler ve günlük hayat pratikleriyle öğrencilerimiz dili ezberden çıkarıp yaşayan bir iletişim aracına dönüştürür.\n\nAlmanca (İkinci Yabancı Dil): Günlük konuşma dilini merkeze alan ve dili doğal akışında edindiren bir yaklaşımla ikinci yabancı dil eğitimi sunulur."
                },
                {
                  num: "4",
                  title: "Teknoloji ve Geleceğin Becerileri",
                  body: "İlkokuldan itibaren devam eden Robotik ve Kodlama programımız ortaokulda ileri seviye uygulamalara dönüşür. Öğrencilerimiz algoritmik düşünme, yazılım, tasarım ve kodlama alanlarında çağın gerektirdiği teknolojik okuryazarlık düzeyine ulaşırlar."
                },
                {
                  num: "5",
                  title: "Aydın Okur ve Yazarlık Programı",
                  body: "Okumak okulumuzda bir zorunluluk değil, derinleşme sürecidir. Etkileşimli okuma saatlerinde öğrencilerimiz kitapları analiz eder, disiplinler arası bağlar kurar ve düşüncelerini yaratıcı yazarlık çalışmalarıyla kağıda dökerler."
                },
                {
                  num: "6",
                  title: "Sanat, Spor ve Kulüp Çalışmaları",
                  body: "Her öğrencimizin en az bir sanat ve bir spor dalıyla ilgilenmesini önemseriz. Geniş kulüp yelpazemiz (STEM, Sanat, Basketbol, Voleybol, Müzik, Eko-Okul, Hayvanları Koruma, Satranç ve daha fazlası) sayesinde öğrencilerimiz ilgi alanlarını derinleştirir, haftalık ders temposunu dengelerler."
                }
              ]
            },
            {
              highlight: "Çünkü Biliyoruz Ki: 26 yıllık öğretmenlik tecrübesi, ilgi ve sevgiyle büyüyen her Çekmeköy Boğaziçi İlgi öğrencisi; Atatürk ilkelerine bağlı, değerlerine sahip çıkan, doğayı seven, LGS'de ve hayatta başarıya ulaşmış mutlu bir bireydir."
            }
          ],
          features: [
            { title: "LGS ve Beceri Temelli Yaklaşım", desc: "Analiz etme, yorumlama ve hayatın içinde kullanma yetkinliği, yeni nesil soru tiplerine hakimiyet" },
            { title: "Birebir Akademik Koçluk", desc: "8. sınıf öğrencilerine atanan danışman öğretmen ile akademik takip ve psikolojik rehberlik" },
            { title: "Yabancı Dil Eğitimi", desc: "İngilizce CLT ve TBL yaklaşımı ile proje odaklı öğrenme, Almanca ikinci yabancı dil" },
            { title: "Teknoloji ve Geleceğin Becerileri", desc: "İleri robotik, kodlama, algoritmik düşünme ve dijital okuryazarlık uygulamaları" },
            { title: "Aydın Okur ve Yazarlık Programı", desc: "Analitik okuma, disiplinlerarası bağlar ve yaratıcı yazarlık çalışmaları" },
            { title: "Sanat, Spor ve Kulüpler", desc: "STEM, sanat, basketbol, voleybol, müzik, satranç, eko-okul ve daha fazlası" }
          ]
        }
      }
    };
  }
  return {
    kurumsal: {
      "hakkimizda": {
        title: "About Us", subtitle: "Building the Future with Love, Experience and Discovery",
        content: "As Çekmeköy Boğaziçi Özel İlgi Okulları, with the vision of our founders who have 26+ years of teaching experience, we devote ourselves entirely to our children who are the guarantee of the future. With the experience of a staff that comes from within education, we adopt an educational approach that is far from commercial concerns and focused solely on the needs and development of students.\n\nAt every stage of education from preschool onwards, we believe that every child is endowed with unique talents and each has their own unique potential. Our main goal is to discover these superior qualities, develop them with correct and planned guidance, and transform them into individual productivity.",
        features: [
          { label: "Teaching Experience", value: "26+ Years" },
          { label: "Campus Founded", value: "2013" },
          { label: "Education Levels", value: "3" },
          { label: "Satisfaction", value: "100%" }
        ],
        principles: [
          "Closely following innovations in our country and around the world",
          "Advancing with programs shaped according to each child's individual learning pace",
          "Developing skills and areas of interest to the highest level",
          "High self-confidence, creativity, and developed leadership qualities",
          "Individuals with social awareness, respectful of nature and all living beings"
        ],
        facilities: ["Visual Arts Workshop", "Music Workshop", "Coding Workshop", "Science Laboratory", "Indoor Sports Hall", "Library", "Cafeteria", "Counseling Office"]
      },
      "kurucu-mesaji": {
        title: "Founder's Message", subtitle: "Our Values and Vision", videoId: "pN3J4PxcR1I",
        content: "Dear Parents and Students,\n\nRaising our children, who are the guarantee of our future, in the best possible way and providing them with a safe and quality educational environment is our greatest responsibility.\n\nAs Boğaziçi İlgi College, we care not only about our students' academic success but also about raising individuals who are committed to their national and moral values, who think universally, question, and create."
      },
      "vizyon-misyon": {
        title: "Vision & Mission", subtitle: "Shaping the Future",
        vision: "To be a pioneering institution that sets an example with its achievements on national and international platforms, guiding the future with 26+ years of teaching experience and an original educational approach; to raise leader individuals endowed with universal values in the light of Atatürk's principles and reforms.",
        mission: "As Çekmeköy Özel Boğaziçi İlgi Okulları, we act with the understanding that \"Every child deserves special attention\" and \"Better education is possible.\" With our 26+ years of teaching experience and educational programs blended with the guidance of science and unconditional love, we prepare our students for life.",
        values: [
          { title: "Patriotism", desc: "Free-minded, free-conscient individuals who embrace Atatürk's principles and reforms" },
          { title: "Scientific Thinking", desc: "Adopting science and rational thinking as a life philosophy" },
          { title: "Confidence & Creativity", desc: "Discovering own talents and potential, high self-confidence and creativity" },
          { title: "Universal Values", desc: "Not compromising national and universal values while going beyond the changing world and technology" },
          { title: "Nature & Social Awareness", desc: "Sensitive to society, nature, environment, and all living beings" },
          { title: "Lifelong Learning", desc: "Adopting lifelong learning as a principle, visionary and productive individuals" }
        ]
      },
      "egitim-yaklasimimiz": {
        title: "Our Approach", subtitle: "Student-Centered Modern Education",
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
      },
      "egitim-politikamiz": {
        title: "Our Education Policy", subtitle: "Student-Centered, Value-Based Educational Approach",
        content: "Çekmeköy Özel Boğaziçi İlgi Okulları has continued its journey innovatively and resolutely, placing the teacher's vision and student-centered approach at its core since its establishment.\n\nOur original educational programs, prepared by taking into account the requirements of the times and the superior benefit of our students, are integrated with the effort of our competent and passionate academic staff and our institutional culture based on love and respect.\n\nOur goal is to build happy, successful generations who look to the future with confidence by offering special solutions for each child's development pace and interest, with an expert staff completely dedicated to raising students, free from commercial concerns.",
        principles: [
          { title: "Student-Centered Approach", desc: "Building happy and successful generations by offering special solutions for each child's development pace and interest.", icon: "heart" },
          { title: "Original Education Programs", desc: "Programs prepared taking into account the requirements of the times and implemented by our competent academic staff.", icon: "zap" },
          { title: "Free from Commercial Concerns", desc: "With our expert staff completely dedicated to raising students, we place quality in education above everything.", icon: "shield" },
          { title: "Unconditional Love and Trust", desc: "We believe unconditional love and unwavering trust are the indispensables of education; we build all our work on this foundation.", icon: "sparkles" }
        ]
      }
    },
    akademik: {
      "anaokulu": {
        title: "Preschool", subtitle: "Curious, Questioning Little Minds", ages: "Ages 3-6", color: "#F97316",
        image: "/images/preschool-orange-1.webp",
        galleryImages: ["/images/preschool-orange-1.webp", "/images/preschool-orange-2.webp", "/images/preschool-blue-1.webp", "/images/preschool-blue-2.webp", "/images/garden-slide.webp"],
        content: "Preschool education encompasses precious years during which self-confidence and the curiosity to learn are established, language and thinking skills develop, social values are acquired, and whose traces a person carries throughout their life.",
        richSections: [
          {
            body: "Preschool education encompasses precious years during which self-confidence and the curiosity to learn are established, language and thinking skills develop, social values are acquired, and whose traces a person carries throughout their life."
          },
          {
            body: "Scientific research indicates that investment in preschool education yields the highest added value for an individual's future. A well-equipped preschool process can create an enormous difference in the mental and linguistic development of a 6-year-old compared to their peers."
          },
          {
            body: "With our 26+ years of teaching experience, we know: Every great success in life begins with special attention and love shown at the right time. At Boğaziçi İlgi Okulları, every child deserves the time, patience, planned effort, and most importantly unconditional love needed to bring out their inner potential. We discover each child's unique potential and raise strong individuals who look confidently towards the future."
          },
          {
            heading: "World-Class, Original Education",
            body: "The Boğaziçi İlgi Preschool Program, designed with the world's leading early childhood approaches in mind;",
            bullets: [
              "Accepts that every child is unique and respects individual developmental pace.",
              "Triggers the child's curiosity and desire to explore rather than giving step-by-step commands.",
              "Provides an interactive learning environment where the teacher is a loving guide, not merely a transmitter of knowledge.",
              "Supported by play-based structured activities centred on learning through doing, experiencing, living and having fun — far from rote memorisation.",
              "Brings motor, social, emotional, language and cognitive skills to the highest level in preparation for primary school, while building life and self-care skills.",
              "Aims to raise individuals respectful of nature, people, living beings and differences, committed to Atatürk's principles and with a high sense of social responsibility."
            ]
          },
          {
            body: "A significant part of Boğaziçi İlgi Preschool students' day is spent in English. Through our integrated programme running from preschool, students acquire the language not as a 'lesson' but as a natural 'tool of life'."
          },
          {
            body: "In all lessons, sensory materials and special educational tools that engage all five senses are used. Our children meet mathematics through play, develop phonological awareness through rhythm, and discover their environment by touching, exploring and getting hands-on with nature."
          },
          {
            highlight: "Because We Know: Every child deserves special attention, and every Boğaziçi İlgi student who grows with love and care is a happy individual equipped with outstanding abilities."
          }
        ],
        features: [
          { title: "Individual Development", desc: "Acknowledges that every child is unique; respects individual developmental pace" },
          { title: "Curious Minds", desc: "Triggers curiosity and the desire to explore; learning by doing and experiencing" },
          { title: "Play-Based Learning", desc: "Structured activities centered on learning through fun, far from rote memorization" },
          { title: "Primary School Readiness", desc: "Brings motor, social, emotional, language, and cognitive skills to the highest level" },
          { title: "Integrated English", desc: "A program that acquires language as a natural tool of life from preschool" },
          { title: "Values & Love of Nature", desc: "Individuals respectful of nature and living beings, committed to Atatürk's principles" }
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
        title: "Primary School", subtitle: "Strong Academic Foundations", ages: "Grades 1-4", color: "#3B82F6",
        image: "/images/primary-class-1.webp",
        galleryImages: ["/images/primary-class-1.webp", "/images/primary-class-2.webp", "/images/primary-class-3.webp", "/images/library-1.jpg", "/images/art-room-1.webp"],
        content: "Every great success in life begins with special attention and love shown at the right time.",
        richSections: [
          {
            body: "Every great success in life begins with special attention and love shown at the right time. As Çekmeköy Boğaziçi İlgi Okulları, we believe that every child deserves the time, patience, planned effort, and most importantly unconditional love needed to bring out their inner potential. With our 26+ years of teaching experience, we discover this potential and raise confident individuals who will illuminate the future."
          },
          {
            heading: "Children Who Run to School",
            body: "Our top priority is for our children to love their school. We care that every student enters through the door happy, peaceful and safe. With our expert team of 26+ years of teaching experience, we build academic success on a loving and solid foundation. We guide school entry processes with detailed observation and counselling assessments so that every child makes a happy and timely start to their education life."
          },
          {
            heading: "An Approach That Transforms Knowledge into Value",
            body: "The most important key to our success is our individual education approach that closely knows and monitors every student. We support students not just to memorise knowledge, but to develop skills in analysis, critical thinking, applying knowledge in real life and creativity.\n\nOur main goal at primary school level is to fully equip students with core disciplines such as reading, writing, mathematics and science, while at the same time raising individuals who research, question and have developed problem-solving abilities."
          },
          {
            heading: "Our Standout Education Programmes",
            programs: [
              {
                num: "1",
                title: "Nature, Living Beings and Science Programme",
                body: "A person with 'productive curiosity' is highly internally motivated, researches, and lives by making sense of life. The Boğaziçi İlgi Nature and Science Programme brings inquiry together with love of nature. While raising generations sensitive to the environment, nature and living beings, we help students discover the systems in nature and develop scientific questioning and thinking skills."
              },
              {
                num: "2",
                title: "Guidance and Counselling",
                body: "Our educational programmes are supported by our strong Psychological Counselling and Guidance (PDR) unit. Students' emotional, social and academic development is monitored one-on-one. Systematic guidance is provided for them to become individuals who can express themselves, know what they want, have high self-confidence and a sense of social responsibility."
              },
              {
                num: "3",
                title: "Foreign Language Education",
                body: "Using the globally recognised Communicative Language Teaching approach, the movement-based Total Physical Response (TPR) method and Montessori philosophy's child-centred, concrete-experience principles, we transform English from a lesson into a living communication tool. Through interactive workshops, drama activities and enriched materials that break down classroom walls, students experience the language in its natural flow, speaking fluently and using it with confidence."
              },
              {
                num: "4",
                title: "\"Every Child Has a Talent\" Workshops",
                body: "We believe every child is endowed with outstanding talents. From Grade 1, music, sports, visual arts, IT and drama workshops allow our students to discover their interests. Through special clubs and workshops where they can deepen their talents with the guidance of our teachers, they bring their potential to the highest level."
              },
              {
                num: "5",
                title: "The Technology of the Future: Robotics and Coding",
                body: "Through our Robotics and Coding curriculum offered across all primary school grades, our students gain skills in algorithmic thinking, logical reasoning and technological literacy to adapt to the requirements of a changing world."
              }
            ]
          },
          {
            heading: "Our Parents, Our Closest Partners",
            body: "We believe education is a three-legged stool and communicate with our parents based on the principles of openness, transparency and trust. Thanks to our student monitoring systems and regular notifications, parents can follow their children's academic and social development in real time.\n\nThrough guidance seminars and parent training programmes organised under the Boğaziçi İlgi Parent Academy, we walk hand in hand with families throughout their children's development journey."
          },
          {
            highlight: "Because We Know: Every Çekmeköy Boğaziçi İlgi student who grows with our teaching experience and unconditional love is a happy and successful individual committed to their values, respectful of nature and who has discovered their outstanding talents."
          }
        ],
        features: [
          { title: "Nature, Science & Living", desc: "An original programme combining inquiry with love of nature" },
          { title: "Guidance & Counselling", desc: "A strong counselling unit closely monitoring emotional, social, and academic development" },
          { title: "Foreign Language Education", desc: "English as a living communication tool using CLT, TPR and Montessori methods" },
          { title: "Every Child Has a Talent", desc: "Music, sports, visual arts, IT, and drama workshops from grade 1" },
          { title: "Robotics & Coding", desc: "Algorithmic thinking, logical reasoning, and technological literacy" },
          { title: "Parent-School Partnership", desc: "Hand in hand with families through transparent communication and the Parent Academy" }
        ]
      },
      "ortaokul": {
        title: "Middle School", subtitle: "LGS Preparation and Shaping the Future", ages: "Grades 5-8", color: "#10B981",
        image: "/images/primary-class-3.webp",
        galleryImages: ["/images/primary-class-3.webp", "/images/sports-hall-1.webp", "/images/music-room-1.webp", "/images/library-2.jpg"],
        content: "Middle school is a critical period when academic specialisation begins, abstract thinking skills develop, and preparation for high school entrance exams (LGS) intensifies.",
        richSections: [
          {
            body: "Middle school is a critical period when academic specialisation begins, abstract thinking skills develop, and preparation for high school entrance exams (LGS) intensifies. As Çekmeköy Boğaziçi İlgi Koleji, with our 26+ years of teaching experience, we both prepare our students for LGS at the highest level and raise them as confident individuals who give direction to the future.\n\nThrough our original education programmes that prioritise the needs of the times and the supreme benefit of our students, we aim for them to achieve success not only in academic fields but in every lane of life."
          },
          {
            heading: "One-on-One Monitoring and Academic Success",
            body: "The most fundamental key to our success is the one-on-one and systematic monitoring approach applied by our expert team who are entirely dedicated to the student, free from commercial concerns.",
            bullets: [
              "LGS and Skills-Based Approach: Through new-generation and skills-based questions, our students do not merely memorise knowledge; they develop competency in analysing, interpreting and applying knowledge in real life.",
              "Analytical Assessment: In line with our individual monitoring system, logic and reasoning skills are analysed in detail alongside subject attainments.",
              "Study Sessions and Academic Support: Students whose gaps are identified through general mock exam results receive continuous support through special study sessions and one-on-one catch-up programmes held within our school."
            ]
          },
          {
            heading: "\"We Are Enough for Ourselves\" in LGS Preparation",
            body: "Our education model is built on students receiving all the academic support they need for LGS preparation within our school, without needing any external course or private tuition.",
            bullets: [
              "One-on-One Academic Coaching: The advisor teacher assigned to our 8th grade students both carries out academic monitoring and provides psychological guidance throughout the exam marathon.",
              "Productive Study Discipline: Special study camps and monitoring programmes are applied so that exam-group students leave summer lethargy behind and find a disciplined, planned work rhythm.",
              "Parent-School Solidarity: Students' academic and developmental processes are regularly shared with parents through transparent, real-time communication channels."
            ]
          },
          {
            heading: "Our Standout Education Programmes",
            programs: [
              {
                num: "1",
                title: "Nature, Living Beings and Science Programme",
                body: "A person with 'productive curiosity' questions, researches and lives by making sense of their environment. The Boğaziçi İlgi Nature and Science Programme combines scientific curiosity with love of nature. While discovering the systems in nature, students develop scientific questioning skills and grow up as individuals respectful of the environment, nature and all living beings."
              },
              {
                num: "2",
                title: "Guidance and Counselling",
                body: "The emotional and social changes brought by adolescence are sensitively managed by our counselling unit. Individual meetings and group sessions are conducted to help students gain self-confidence, set goals, manage their time and cope with exam anxiety."
              },
              {
                num: "3",
                title: "Foreign Language Education",
                body: "English: By combining the Communicative Language Teaching approach with the Task-Based Learning method, we offer children the chance to experience the language through real-life projects rather than just books. Through interactive lessons and daily life practice, students transform the language from something memorised into a living communication tool.\n\nGerman (Second Foreign Language): Second foreign language education is offered through an approach that centres everyday spoken language and acquires it in its natural flow."
              },
              {
                num: "4",
                title: "Technology and the Skills of the Future",
                body: "Our Robotics and Coding programme, which continues from primary school, transforms into advanced-level applications in middle school. Students reach the level of technological literacy required by the age in the fields of algorithmic thinking, software, design and coding."
              },
              {
                num: "5",
                title: "Enlightened Reading and Writing Programme",
                body: "Reading at our school is not an obligation but a deepening process. In interactive reading hours, students analyse books, make cross-disciplinary connections and put their thoughts on paper through creative writing activities."
              },
              {
                num: "6",
                title: "Arts, Sports and Club Activities",
                body: "We care that every student is involved in at least one art and one sports branch. Thanks to our wide club range (STEM, Arts, Basketball, Volleyball, Music, Eco-School, Animal Protection, Chess and more), students deepen their areas of interest and balance their weekly lesson tempo."
              }
            ]
          },
          {
            highlight: "Because We Know: Every Çekmeköy Boğaziçi İlgi student who grows with 26 years of teaching experience, attention and love is a happy individual committed to Atatürk's principles, standing by their values, loving nature and achieving success in LGS and in life."
          }
        ],
        features: [
          { title: "LGS & Skills-Based Approach", desc: "Competency in analysing, interpreting and applying knowledge in real life; mastery of new-generation question types" },
          { title: "1-on-1 Academic Coaching", desc: "Personal advisor teacher for 8th graders providing academic tracking and psychological guidance" },
          { title: "Foreign Language Education", desc: "English CLT and TBL approach with project-based learning; German as a second foreign language" },
          { title: "Technology & Future Skills", desc: "Advanced robotics, coding, algorithmic thinking and digital literacy applications" },
          { title: "Reading and Writing Programme", desc: "Analytical reading, interdisciplinary connections and creative writing activities" },
          { title: "Arts, Sports & Clubs", desc: "STEM, arts, basketball, volleyball, music, chess, eco-school and much more" }
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
