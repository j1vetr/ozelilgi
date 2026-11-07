export type Localized = { tr: string; en: string };

export const FOUNDING_TITLE: Localized = {
  tr: "Boğaziçi Eğitim İlgi Okulları’nın Kuruluşu",
  en: "The Founding of Boğaziçi Education İlgi Schools",
};
export const SLOGAN: Localized = {
  tr: "Boğaziçi Vizyonuyla Geleceğe",
  en: "Towards the Future with the Boğaziçi Vision",
};

export const FOUNDING_OPENING: Localized[] = [
  { tr: "Bazı hayaller bir insanın hayatını değiştirir. Bazıları ise nesillerin geleceğine dokunmak için doğar.", en: "Some dreams change a person's life. Others are born to touch the future of generations." },
  { tr: "Boğaziçi Eğitim İlgi Okulları’nın hikâyesi, yıllar önce Boğaziçi Üniversitesi’nin kütüphanesinde, henüz kendi eğitim yolculuğunun başında olan genç bir öğrencinin zihninde filizlenen bir hayalle başladı.", en: "The story of Boğaziçi Education İlgi Schools began with a dream that sprouted years ago in the library of Boğaziçi University, in the mind of a young student still at the beginning of his own educational journey." },
];
export const FOUNDER_NAME_LINE: Localized = { tr: "O genç, Aziz Akten’di.", en: "That young man was Aziz Akten." };

export const FOUNDING_BACKGROUND: Localized[] = [
  { tr: "Boğaziçi Üniversitesi’ni üstün başarılarla kazanan ve dereceyle tamamlayan abisi ve ablası sayesinde, henüz ortaokul ve lise yıllarında bu köklü üniversitenin akademik ve kültürel atmosferiyle tanışmıştı.", en: "Thanks to his older brother and sister, who entered Boğaziçi University with outstanding success and graduated with honors, he had become familiar with the academic and cultural atmosphere of this well-established university while still in middle and high school." },
  { tr: "Boğaziçi Üniversitesi’nin kütüphanesinde ders çalışırken yalnızca kitaplarla ve bilgiyle buluşmuyordu. Özgür düşüncenin, bilimsel merakın, araştırmanın, sorgulamanın ve farklı fikirlere duyulan saygının hayat bulduğu bir kültürü yakından tanıyordu.", en: "While studying in the library of Boğaziçi University, he was not only meeting books and knowledge. He was getting to know closely a culture in which free thought, scientific curiosity, research, questioning and respect for different ideas came to life." },
  { tr: "O yıllarda Boğaziçi’nin kendisine hissettirdiği şey, bir üniversitenin akademik başarısından çok daha fazlasıydı. Orada öğrenmenin bir yaşam biçimine dönüştüğü, düşünmenin cesaretle buluştuğu, bilginin insanın önünde yeni ufuklar açtığı bir dünya vardı.", en: "What Boğaziçi made him feel in those years was much more than the academic success of a university. There was a world in which learning became a way of life, thinking met courage, and knowledge opened new horizons before a person." },
  { tr: "Ve henüz genç yaşlarda zihninde bir soru doğdu:", en: "And at a young age, a question was born in his mind:" },
];
export const FOUNDING_QUOTE: Localized = {
  tr: "“Çocuklar böylesine özgür, bilimsel ve nitelikli bir eğitim kültürüyle tanışmak için neden üniversite yıllarını beklesin?”",
  en: "“Why should children wait for their university years to meet such a free, scientific and high-quality culture of education?”",
};
export const FOUNDING_QUESTIONS: Localized[] = [
  { tr: "Neden bir çocuğun merakı anaokulunda bilimle buluşmasın?", en: "Why shouldn't a child's curiosity meet science in kindergarten?" },
  { tr: "Neden ilkokul sıralarında yalnızca okumayı ve yazmayı değil; düşünmeyi, sorgulamayı, araştırmayı ve kendi fikirlerini özgürce ifade etmeyi öğrenmesin?", en: "Why shouldn't a child learn at primary school desks not only to read and write, but also to think, question, research and freely express their own ideas?" },
  { tr: "Neden ortaokul yıllarında yalnızca sınavlara değil; hayata, dünyaya ve geleceğe hazırlanmasın?", en: "Why shouldn't a child prepare in the middle school years not only for exams, but for life, the world and the future?" },
  { tr: "Ve neden bütün bunlar, birbirinden kopuk eğitim kademeleri yerine, aynı anlayışla gelişen, birbirini tamamlayan güçlü bir eğitim yolculuğuna dönüşmesin?", en: "And why shouldn't all of this become a strong educational journey that develops with the same understanding and complements itself, instead of disconnected stages of education?" },
];
export const FOUNDING_CLOSING_Q: Localized = {
  tr: "İşte Boğaziçi Eğitim İlgi Okulları’nın kuruluşuna ilham veren düşünce, bu sorularla şekillendi.",
  en: "The idea that inspired the founding of Boğaziçi Education İlgi Schools took shape with these questions.",
};

export type Chapter = { title: Localized; paragraphs: Localized[]; quoteIndex?: number };

export const CHAPTERS: Chapter[] = [
  {
    title: { tr: "Bir Üniversiteye Değil, Bir Vizyona Yolculuk", en: "A Journey Not to a University, but to a Vision" },
    paragraphs: [
      { tr: "Bu hayalin amacı hiçbir zaman yalnızca Boğaziçi Üniversitesi’ne ya da başka bir seçkin üniversiteye öğrenci yetiştirmek olmadı.", en: "The aim of this dream was never merely to prepare students for Boğaziçi University or any other distinguished university." },
      { tr: "Asıl hayal, Boğaziçi Üniversitesi’nin temsil ettiği özgür düşünceyi, bilimsel yaklaşımı, akademik disiplini, kültürel zenginliği ve evrensel bakış açısını çocukların eğitim hayatına çok daha erken yaşlarda taşıyabilmekti.", en: "The real dream was to carry the free thought, scientific approach, academic discipline, cultural richness and universal outlook that Boğaziçi University represents into children's education at a much earlier age." },
      { tr: "Çünkü biz inanıyoruz ki bir çocuğun geleceği, üniversite kapısına geldiğinde değil, ilk kez bir okulun kapısından içeri adım attığında şekillenmeye başlar.", en: "Because we believe that a child's future begins to take shape not when they reach the university gate, but when they first step through the door of a school." },
      { tr: "O ilk adımda karşılaştığı öğretmen, merakla sorduğu ilk soru, düşüncelerine gösterilen ilk saygı, keşfetmesine verilen ilk fırsat ve başardığında hissettiği ilk mutluluk, gelecekte nasıl bir insan olacağının temellerini oluşturur.", en: "The teacher they meet at that first step, the first question they ask out of curiosity, the first respect shown to their thoughts, the first opportunity given to explore and the first happiness they feel when they succeed form the foundations of the kind of person they will become." },
      { tr: "Biz, tam da bu temellerin güçlü atılması gerektiğine inandık.", en: "We believed that these foundations must be laid strongly." },
      { tr: "Her çocuğun kendine özgü bir potansiyelle dünyaya geldiğini, eğitimin en önemli sorumluluğunun ise bu potansiyeli keşfetmek, geliştirmek ve çocuğa kendi yolunu çizebilecek özgüveni kazandırmak olduğunu benimsedik.", en: "We embraced the view that every child is born with a unique potential, and that the most important responsibility of education is to discover and develop this potential and to give the child the confidence to chart their own path." },
      { tr: "Çocukların yalnızca başarılı öğrenciler değil; merak eden, araştıran, sorgulayan, üreten, vicdanlı, kültürlü ve sorumluluk sahibi bireyler olarak yetişebileceği bir eğitim ortamı hayal ettik.", en: "We imagined an educational environment where children could grow up not only as successful students, but as individuals who are curious, who research, question and create, and who are conscientious, cultured and responsible." },
      { tr: "Akademik başarının sanatla, bilimin yaratıcılıkla, disiplinin özgür düşünceyle, bireysel gelişimin evrensel değerlerle buluştuğu bir okul...", en: "A school where academic success meets art, science meets creativity, discipline meets free thought, and personal development meets universal values..." },
      { tr: "Her çocuğun kendini değerli hissettiği, farklılıkların zenginlik olarak görüldüğü, öğrenmenin yalnızca sınıf duvarları arasında kalmadığı bir eğitim dünyası...", en: "An educational world where every child feels valued, differences are seen as richness, and learning does not remain only within classroom walls..." },
      { tr: "Boğaziçi Eğitim İlgi Okulları, işte bu hayalin ve bu eğitim anlayışının üzerine kuruldu.", en: "Boğaziçi Education İlgi Schools was founded on this dream and this understanding of education." },
    ],
  },
  {
    title: { tr: "Geleceğin Türkiye’si Bugünün Sınıflarında Yetişiyor", en: "Tomorrow's Türkiye Is Growing Up in Today's Classrooms" },
    paragraphs: [
      { tr: "Bizim için eğitim, yalnızca bugünün çocuklarına bilgi kazandırmak değildir. Eğitim, yarının Türkiye’sini şekillendirecek insanların yetişmesine katkıda bulunmaktır.", en: "For us, education is not only about giving knowledge to today's children. Education means contributing to the growth of the people who will shape tomorrow's Türkiye." },
      { tr: "Çünkü biliyoruz ki geleceğin bilim insanları, hekimleri, mühendisleri, sanatçıları, eğitimcileri, girişimcileri ve ülkesinin geleceğinde söz sahibi olacak bireyleri bugün bir anaokulunda oyun oynuyor, bir ilkokul sırasında ilk sorularını soruyor, bir ortaokul sınıfında kendi yeteneklerini keşfediyor.", en: "Because we know that the scientists, doctors, engineers, artists, educators, entrepreneurs and all those who will have a say in their country's future are today playing in a kindergarten, asking their first questions at a primary school desk, and discovering their own talents in a middle school classroom." },
      { tr: "Belki bugün küçük bir deney yapan çocuk, yarın insanlığın önemli bir sorununa çözüm bulacak.", en: "Perhaps the child doing a small experiment today will find a solution to an important problem of humanity tomorrow." },
      { tr: "Belki bugün düşüncesini ilk kez cesaretle ifade eden bir öğrenci, yarın toplumuna ilham veren bir insan olacak.", en: "Perhaps a student who expresses a thought with courage for the first time today will become a person who inspires their society tomorrow." },
      { tr: "Belki bugün merakla bir kitabın sayfalarını çeviren çocuk, yarın ülkemizin bilim, kültür ve sanat hayatına değer katacak.", en: "Perhaps the child who curiously turns the pages of a book today will add value to our country's science, culture and art tomorrow." },
      { tr: "Biz, işte bu ihtimallerin büyüklüğüne inanıyoruz.", en: "We believe in the greatness of these possibilities." },
      { tr: "Çocuklarımızın gelecekte hangi mesleği seçeceklerini, hangi alanlarda başarı göstereceklerini ya da hayatlarının onları nereye götüreceğini bugünden bilemeyiz.", en: "We cannot know today which profession our children will choose, in which fields they will succeed, or where their lives will take them." },
      { tr: "Ama onlara güçlü bir akademik temel, bilimsel bir bakış açısı, özgür düşünebilme cesareti, sağlam bir karakter ve kendi potansiyellerine inanma gücü kazandırmanın ne kadar değerli olduğunu biliyoruz.", en: "But we know how valuable it is to give them a strong academic foundation, a scientific outlook, the courage to think freely, a solid character and the strength to believe in their own potential." },
      { tr: "“Çünkü geleceğin Türkiye’sinde söz sahibi olacak nesiller, bugün bu sıralarda yetişiyor.”", en: "“Because the generations who will have a say in tomorrow's Türkiye are growing up today at these desks.”" },
      { tr: "Bu nedenle eğitim bizim için yalnızca bir meslek ya da kurumsal sorumluluk değil; çocuklarımıza, ailelerimize ve ülkemizin geleceğine karşı taşıdığımız büyük bir emanettir.", en: "For this reason, education is for us not only a profession or a corporate responsibility. It is a great trust we carry toward our children, our families and the future of our country." },
      { tr: "Biz çocuklarımızın yalnızca başarılı olmalarını değil; başarılarını bilgiyle, vicdanla, erdemle ve insanlığa katkı sunma bilinciyle birleştiren bireyler olarak yetişmelerini önemsiyoruz.", en: "We care that our children grow up not only as successful people, but as individuals who combine their success with knowledge, conscience, virtue and an awareness of contributing to humanity." },
      { tr: "Çünkü güçlü bir gelecek, yalnızca çok şey bilen insanların değil; bildiklerini doğru amaçlarla kullanabilen, düşünen, üreten ve yaşadığı dünyaya değer katabilen insanların ellerinde şekillenecektir.", en: "Because a strong future will be shaped not only by people who know a lot, but by people who can use what they know for the right purposes, who think, create and are able to add value to the world they live in." },
    ],
    quoteIndex: 8,
  },
  {
    title: { tr: "Her Çocuğun Geleceğinde Bir İz Bırakmak", en: "Leaving a Mark on Every Child's Future" },
    paragraphs: [
      { tr: "Boğaziçi Eğitim İlgi Okulları’nda anaokulundan ilkokula, ilkokuldan ortaokula uzanan eğitim anlayışımızın temelinde bu inanç yer alır.", en: "This belief lies at the foundation of our educational approach at Boğaziçi Education İlgi Schools, extending from kindergarten to primary school and from primary school to middle school." },
      { tr: "Biz bir çocuğa baktığımızda yalnızca bugünün öğrencisini değil, yarının yetişkinini de görürüz.", en: "When we look at a child, we see not only today's student but also tomorrow's adult." },
      { tr: "Onun bir gün kendi ayakları üzerinde durabilen, düşüncelerini özgürce ifade edebilen, karşılaştığı sorunlara çözüm üretebilen, bilimsel düşünen, kültür ve sanatla zenginleşmiş, ülkesine ve dünyaya karşı sorumluluk hisseden bir insan olmasını hayal ederiz.", en: "We dream of them becoming a person who can stand on their own feet, express their thoughts freely, produce solutions to the problems they face, think scientifically, be enriched by culture and art, and feel responsible toward their country and the world." },
      { tr: "Çünkü bir çocuğa verilebilecek en değerli armağanlardan biri, kendi geleceğini inşa edebileceğine duyduğu inançtır.", en: "Because one of the most valuable gifts that can be given to a child is the belief that they can build their own future." },
      { tr: "Biz, çocuklarımızın hayatında işte bu inancın temellerini atmak istiyoruz.", en: "We want to lay the foundations of this belief in our children's lives." },
      { tr: "Yıllar önce Boğaziçi Üniversitesi’nin kütüphanesinde doğan o hayal, bugün çok daha büyük bir anlam taşıyor.", en: "That dream, born years ago in the library of Boğaziçi University, carries a much greater meaning today." },
      { tr: "Artık bu hayal; çocuklarının geleceği için en iyisini arayan ailelerin, mesleğine gönül veren öğretmenlerin ve kendi yolunu keşfetmeye hazırlanan her çocuğun ortak yolculuğuna dönüşüyor.", en: "This dream now becomes the shared journey of families seeking the best for their children's future, teachers devoted to their profession, and every child preparing to discover their own path." },
      { tr: "Biz bir okulun kapılarını açarken, aslında çocukların önünde yeni ufuklar açmayı hayal ettik.", en: "When we opened the doors of a school, we were in fact dreaming of opening new horizons before children." },
      { tr: "Bir gün öğrencilerimiz kendi yollarında ilerlerken, hayatın farklı alanlarında başarılar kazanırken, ülkemize ve insanlığa değer katarken, bu hayalin onların yaşamlarında varlığını sürdürmesini istiyoruz.", en: "One day, as our students move along their own paths, achieve success in different areas of life and add value to our country and to humanity, we want this dream to live on in their lives." },
      { tr: "Çünkü bizim için bir okulun gerçek başarısı, öğrencilerinin yalnızca hangi üniversitelere girdiği ya da hangi mesleklere ulaştığı değil; nasıl insanlar olarak yetiştiği ve dünyada nasıl izler bıraktığıdır.", en: "Because for us, the real success of a school is not only which universities its students enter or which professions they reach, but what kind of people they grow up to be and what kind of marks they leave on the world." },
      { tr: "Biz çocukların yalnızca geleceğe hazırlanmasını değil, geleceği şekillendirecek gücü kendi içlerinde keşfetmesini istiyoruz.", en: "We want children not only to be prepared for the future, but to discover within themselves the power to shape it." },
      { tr: "Bir zamanlar bir üniversite kütüphanesinde başlayan bu hayal, bugün her çocuğun kendi hikayesini yazabileceği bir geleceğe duyulan inançla yaşamaya devam ediyor.", en: "This dream, which once began in a university library, continues to live today with the belief in a future in which every child can write their own story." },
      { tr: "Çünkü biz geleceğin hangi mesleklere ihtiyaç duyacağını bilemeyiz. Ama o geleceği şekillendirecek çocuklara bugün nasıl bir eğitim sunmak istediğimizi çok iyi biliyoruz.", en: "Because we cannot know which professions the future will need. But we know very well what kind of education we want to offer today to the children who will shape that future." },
      { tr: "Ve inanıyoruz ki bir ülkenin geleceğine yapılabilecek en değerli yatırım, çocuklarının eğitimine gösterdiği özenle başlar.", en: "And we believe that the most valuable investment in a country's future begins with the care it shows for its children's education." },
    ],
  },
];

export const FOUNDING_SIGNATURE: Localized = { tr: "BOĞAZİÇİ EĞİTİM İLGİ OKULLARI", en: "BOĞAZİÇİ EDUCATION İLGİ SCHOOLS" };

export const LOGO_TITLE: Localized = { tr: "Logomuzun Anlamı", en: "The Meaning of Our Logo" };
export const LOGO_PARAGRAPHS: Localized[] = [
  { tr: "Özel Boğaziçi İlgi Okulları'nın logosu, çocuğu merkeze alan eğitim anlayışımızın ve geleceğe duyduğumuz inancın simgesidir.", en: "The logo of Özel Boğaziçi İlgi Schools is the symbol of our child-centered approach to education and our belief in the future." },
  { tr: "Merkezindeki sarı güneş, her çocuğun içindeki ışığı ve keşfedilmeyi bekleyen potansiyeli; çevresindeki figürler ise çocuk, aile ve okulun birlikteliğini temsil eder.", en: "The yellow sun at its center represents the light within every child and the potential waiting to be discovered. The figures around it represent the togetherness of child, family and school." },
  { tr: "Lacivert ve mavi bilimi, bilgiyi ve akademik güveni; turuncu merakı, yaratıcılığı ve öğrenme heyecanını; yeşil gelişimi, doğaya saygıyı ve geleceğe duyulan umudu simgeler.", en: "Navy and blue symbolize science, knowledge and academic confidence. Orange symbolizes curiosity, creativity and the excitement of learning. Green symbolizes growth, respect for nature and hope for the future." },
  { tr: "Logomuzun bütünlüğü, anaokulundan ortaokula uzanan, bilimsel düşünceyi, özgür bireyi ve evrensel değerleri esas alan eğitim yolculuğumuzu yansıtır.", en: "The wholeness of our logo reflects our educational journey from kindergarten to middle school, based on scientific thought, the free individual and universal values." },
];
export const LOGO_SLOGAN_TEXT: Localized = {
  tr: "“Boğaziçi vizyonuyla geleceğe” sloganımız ise bu yolculuğun özüdür: Çocuklarımızı yalnızca yarına hazırlamak değil, yarının Türkiye'sine yön verecek bireyler olarak yetiştirmek.",
  en: "Our slogan “Towards the future with the Boğaziçi vision” is the essence of this journey: not only preparing our children for tomorrow, but raising them as individuals who will give direction to tomorrow's Türkiye.",
};
export const LOGO_SWATCHES: { color: string; label: Localized }[] = [
  { color: "bg-brand-blue", label: { tr: "Lacivert ve Mavi", en: "Navy and Blue" } },
  { color: "bg-brand-orange", label: { tr: "Turuncu", en: "Orange" } },
  { color: "bg-brand-green", label: { tr: "Yeşil", en: "Green" } },
  { color: "bg-yellow-400", label: { tr: "Sarı Güneş", en: "Yellow Sun" } },
];
