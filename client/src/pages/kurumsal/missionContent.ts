import type { Localized } from "./storyContent";

export const MISSION_TITLE: Localized = { tr: "Misyonumuz", en: "Our Mission" };
export const MISSION_TEXT: Localized = {
  tr: "Özel Boğaziçi İlgi Okulları olarak misyonumuz; Boğaziçi vizyonundan ilham alan, bilimsel düşünceyi ve özgür öğrenme kültürünü esas alan eğitim anlayışımızla; merak eden, sorgulayan, araştıran, üreten, akademik açıdan donanımlı, özgüvenli ve evrensel değerlere bağlı bireyler yetiştirmektir.",
  en: "As Özel Boğaziçi İlgi Schools, our mission is to raise individuals who are curious, questioning, researching, creative, academically well equipped, self-confident and committed to universal values, through our approach to education that is inspired by the Boğaziçi vision and based on scientific thought and a culture of free learning.",
};
export const STUDENT_TITLE: Localized = { tr: "Boğaziçi İlgi Öğrencisi", en: "The Boğaziçi İlgi Student" };
export const STUDENT_TRAITS: Localized[] = [
  { tr: "Merak eden, sorgulayan ve araştıran", en: "Curious, questioning and researching" },
  { tr: "Bilimsel ve eleştirel düşünen", en: "Thinks scientifically and critically" },
  { tr: "Akademik temelleri güçlü", en: "Strong academic foundations" },
  { tr: "Özgüvenli ve girişimci", en: "Self-confident and enterprising" },
  { tr: "Yaratıcı ve çözüm odaklı", en: "Creative and solution oriented" },
  { tr: "Etkili iletişim kuran", en: "Communicates effectively" },
  { tr: "Kültür ve sanata duyarlı", en: "Sensitive to culture and art" },
  { tr: "Etik değerlere bağlı ve adil", en: "Committed to ethical values and fair" },
  { tr: "Doğaya ve farklılıklara saygılı", en: "Respectful of nature and differences" },
];
export const MISSION_CLOSING: Localized[] = [
  { tr: "Anaokulundan ortaokula uzanan bütüncül eğitim yaklaşımımızla, her çocuğun potansiyelini keşfetmesini, güçlü bir karakter geliştirmesini ve geleceğe güvenle hazırlanmasını amaçlıyoruz.", en: "With our holistic approach to education that extends from kindergarten to middle school, we aim for every child to discover their potential, develop a strong character and prepare for the future with confidence." },
  { tr: "Çünkü geleceğin Türkiye’sinde söz sahibi olacak nesillerin bugünün sınıflarında yetiştiğine inanıyoruz.", en: "Because we believe that the generations who will have a say in tomorrow's Türkiye are growing up in today's classrooms." },
];
export const MISSION_SLOGAN: Localized = { tr: "Boğaziçi vizyonuyla geleceğe", en: "Towards the future with the Boğaziçi vision" };

export const VISION_TITLE: Localized = { tr: "Vizyonumuz", en: "Our Vision" };
export const VISION_PARAS: Localized[] = [
  { tr: "Özel Boğaziçi İlgi Okulları olarak vizyonumuz; Boğaziçi’nin bilimsel düşünce, özgürlük, akademik mükemmeliyet ve evrensel değerlerinden ilham alarak, Türkiye’de nitelikli eğitimin öncü ve örnek kurumlarından biri olmaktır.", en: "As Özel Boğaziçi İlgi Schools, our vision is to become one of the pioneering and exemplary institutions of quality education in Türkiye, inspired by Boğaziçi's scientific thought, freedom, academic excellence and universal values." },
  { tr: "Anaokulundan ortaokula uzanan bütüncül eğitim anlayışımızla; bilgiyi yalnızca öğrenen değil, sorgulayan, üreten ve hayata dönüştüren; özgüveni, karakteri ve akademik donanımıyla fark yaratan bireylerin yetiştiği bir eğitim kültürü oluşturmayı hedefliyoruz.", en: "With our holistic approach to education from kindergarten to middle school, we aim to build an educational culture in which individuals grow up who do not merely learn knowledge but question, create and turn it into life, and who make a difference with their self-confidence, character and academic equipment." },
  { tr: "En büyük idealimiz, bugün sıralarımızda yetişen çocukların yarın Türkiye’nin bilim, kültür, sanat ve toplumsal yaşamında söz sahibi olan, dünyaya değer katan bireyler olarak yetişmesine öncülük etmektir.", en: "Our greatest ideal is to lead the children growing up at our desks today to become individuals who will have a say in Türkiye's science, culture, art and social life tomorrow and who add value to the world." },
];
export const VISION_SLOGAN: Localized = { tr: "Boğaziçi Vizyonuyla Geleceğe.", en: "Towards the Future with the Boğaziçi Vision." };

export const APPROACH_TITLE: Localized = { tr: "Eğitim Yaklaşımımız", en: "Our Approach to Education" };
export const APPROACH_SLOGAN: Localized = { tr: "Boğaziçi Vizyonuyla Geleceğe", en: "Towards the Future with the Boğaziçi Vision" };
export const APPROACH_INTRO: Localized[] = [
  { tr: "Özel Boğaziçi İlgi Okulları olarak eğitim anlayışımızın temelinde, her çocuğun keşfedilmeyi bekleyen eşsiz bir potansiyele sahip olduğu inancı yer alır.", en: "At the foundation of our approach to education at Özel Boğaziçi İlgi Schools lies the belief that every child has a unique potential waiting to be discovered." },
  { tr: "Boğaziçi'nin bilimsel düşünce, özgürlük, araştırma ve kültürel zenginlik anlayışından ilham alarak; anaokulundan ortaokula uzanan, akademik başarıyı kişisel gelişimle bütünleştiren bir eğitim yolculuğu hedefliyoruz.", en: "Inspired by Boğaziçi's understanding of scientific thought, freedom, research and cultural richness, we aim for an educational journey from kindergarten to middle school that integrates academic success with personal development." },
  { tr: "Amacımız yalnızca başarılı öğrenciler değil; düşünen, sorgulayan, üreten ve geleceğe yön verebilen bireyler yetiştirmektir.", en: "Our aim is not merely successful students, but individuals who think, question, create and give direction to the future." },
];
export type Principle = { title: Localized; paragraphs: Localized[] };
export const PRINCIPLES: Principle[] = [
  { title: { tr: "Güçlü Akademik Temel ve Bilimsel Düşünce", en: "Strong Academic Foundation and Scientific Thinking" }, paragraphs: [
    { tr: "Eğitim yaklaşımımızın merkezinde sağlam bir akademik altyapı bulunur. Öğrencilerimizin bilgiyi ezberlemek yerine anlamalarını, sorgulamalarını, araştırmalarını ve günlük yaşamda kullanmalarını önemseriz.", en: "A solid academic infrastructure lies at the center of our approach to education. We care that our students understand, question, research and use knowledge in daily life instead of memorizing it." },
    { tr: "Bilimsel merakı, eleştirel düşünmeyi ve problem çözme becerilerini destekleyerek öğrenmeyi kalıcı bir kazanıma dönüştürmeyi hedefleriz.", en: "By supporting scientific curiosity, critical thinking and problem solving skills, we aim to turn learning into a lasting gain." },
  ] },
  { title: { tr: "Her Çocuğa Özgü Öğrenme Yolculuğu", en: "A Learning Journey Unique to Every Child" }, paragraphs: [
    { tr: "Her çocuk farklı öğrenir, farklı düşünür ve farklı yeteneklerle gelişir.", en: "Every child learns differently, thinks differently and develops with different talents." },
    { tr: "Bu nedenle öğrencilerimizin bireysel özelliklerini, ilgi alanlarını ve gelişim süreçlerini dikkate alan bir eğitim anlayışını benimseriz.", en: "For this reason, we embrace an approach to education that takes into account our students' individual characteristics, interests and developmental processes." },
    { tr: "Bizim için her çocuk ayrı bir dünya, her potansiyel keşfedilmeyi bekleyen bir değerdir.", en: "For us, every child is a world of their own, and every potential is a value waiting to be discovered." },
  ] },
  { title: { tr: "Yabancı Dil ve Küresel Bakış Açısı", en: "Foreign Language and a Global Perspective" }, paragraphs: [
    { tr: "Yabancı dil eğitimini yalnızca bir ders değil, dünyayla iletişim kurmanın ve farklı kültürleri tanımanın önemli bir aracı olarak görürüz.", en: "We see foreign language education not only as a course, but as an important tool for communicating with the world and getting to know different cultures." },
    { tr: "Öğrencilerimizin ana dillerini etkili kullanırken yabancı dilde kendilerini ifade edebilen, farklı kültürlere açık ve evrensel bakış açısına sahip bireyler olarak yetişmelerini hedefleriz.", en: "We aim for our students to grow up as individuals who use their mother tongue effectively while expressing themselves in a foreign language, and who are open to different cultures and have a universal perspective." },
  ] },
  { title: { tr: "Araştıran, Üreten ve Keşfeden Nesiller", en: "Generations Who Research, Create and Discover" }, paragraphs: [
    { tr: "Öğrenmenin yalnızca dinleyerek değil; deneyerek, gözlemleyerek, araştırarak ve üreterek gerçekleştiğine inanırız.", en: "We believe that learning happens not only by listening, but by experimenting, observing, researching and creating." },
    { tr: "Öğrencilerimizin merak duygularını canlı tutmayı, sorularına cevap aramalarını ve karşılaştıkları sorunlara özgün çözümler geliştirmelerini destekleriz.", en: "We support keeping our students' sense of curiosity alive, their search for answers to their questions and their development of original solutions to the problems they face." },
    { tr: "Çünkü geleceği şekillendirecek bireyler, yalnızca bilgiye ulaşan değil, yeni bilgi ve fikirler üretebilen insanlardır.", en: "Because the individuals who will shape the future are not only those who reach knowledge, but those who can produce new knowledge and ideas." },
  ] },
  { title: { tr: "Sanat, Kültür ve Çok Yönlü Gelişim", en: "Art, Culture and Multifaceted Development" }, paragraphs: [
    { tr: "Eğitimi yalnızca akademik derslerle sınırlı görmeyiz.", en: "We do not see education as limited to academic courses." },
    { tr: "Sanatı, sporu, kültürü ve yaratıcılığı çocukların gelişiminin ayrılmaz parçaları olarak kabul ederiz.", en: "We accept art, sports, culture and creativity as inseparable parts of children's development." },
    { tr: "Öğrencilerimizin estetik duyarlılıklarını, hayal güçlerini, sosyal becerilerini ve kendilerini ifade etme yeteneklerini geliştirmeyi önemseriz.", en: "We care about developing our students' aesthetic sensitivity, imagination, social skills and ability to express themselves." },
  ] },
  { title: { tr: "Karakter, Değerler ve Sorumluluk Bilinci", en: "Character, Values and a Sense of Responsibility" }, paragraphs: [
    { tr: "Akademik başarının güçlü bir karakterle tamamlandığında gerçek anlamını kazandığına inanırız.", en: "We believe that academic success gains its true meaning when it is completed with a strong character." },
    { tr: "Saygı, dürüstlük, adalet, empati, sorumluluk ve toplumsal duyarlılık, eğitim anlayışımızın temel değerleridir.", en: "Respect, honesty, justice, empathy, responsibility and social sensitivity are the core values of our approach to education." },
    { tr: "Amacımız, yalnızca kendi başarısını önemseyen değil; çevresine, ülkesine ve dünyaya karşı sorumluluk hisseden bireyler yetiştirmektir.", en: "Our aim is to raise individuals who do not care only about their own success, but who feel responsible toward their surroundings, their country and the world." },
  ] },
  { title: { tr: "Anaokulundan Ortaokula Bütüncül Eğitim", en: "Holistic Education from Kindergarten to Middle School" }, paragraphs: [
    { tr: "Eğitimin birbirinden bağımsız dönemlerden değil, birbirini tamamlayan gelişim aşamalarından oluştuğuna inanırız.", en: "We believe that education consists not of independent periods, but of developmental stages that complement one another." },
    { tr: "Anaokulunda merak ve keşifle başlayan öğrenme yolculuğunun, ilkokulda güçlü akademik temellerle gelişmesini; ortaokulda ise araştırma, eleştirel düşünme ve bağımsız öğrenme becerileriyle derinleşmesini hedefleriz.", en: "We aim for the learning journey that begins with curiosity and discovery in kindergarten to develop with strong academic foundations in primary school, and to deepen with research, critical thinking and independent learning skills in middle school." },
    { tr: "Böylece öğrencilerimizin her eğitim kademesinde bir sonraki aşamaya akademik, sosyal ve duygusal açıdan hazırlanmalarını önemseriz.", en: "In this way, we care that our students are prepared academically, socially and emotionally for the next stage at every level of education." },
  ] },
  { title: { tr: "Geleceğe Hazırlayan Eğitim Kültürü", en: "An Educational Culture That Prepares for the Future" }, paragraphs: [
    { tr: "Dünya değişiyor. Bilgi, teknoloji ve yaşamın gerektirdiği beceriler sürekli gelişiyor.", en: "The world is changing. Knowledge, technology and the skills that life requires are constantly developing." },
    { tr: "Öğrencilerimizi yalnızca bugünün ihtiyaçlarına göre değil, değişen dünyaya uyum sağlayabilecek, yeniliklere açık ve öğrenmeyi yaşam boyu sürdürebilecek bireyler olarak yetiştirmeyi hedefleriz.", en: "We aim to raise our students not only according to today's needs, but as individuals who can adapt to the changing world, are open to innovation and can continue learning throughout life." },
    { tr: "Çünkü geleceğin hangi meslekleri getireceğini bilemeyiz. Ancak geleceği şekillendirecek çocukların nasıl düşünmesi, öğrenmesi ve üretmesi gerektiğine dair güçlü bir eğitim anlayışına sahibiz.", en: "Because we cannot know which professions the future will bring. But we have a strong understanding of education about how the children who will shape the future should think, learn and create." },
    { tr: "Geleceğin Türkiye'sinde söz sahibi olacak nesillerin temellerinin bugünün sınıflarında atıldığına inanıyoruz.", en: "We believe that the foundations of the generations who will have a say in tomorrow's Türkiye are being laid in today's classrooms." },
  ] },
];
export const APPROACH_SIGNATURE: Localized = { tr: "ÖZEL BOĞAZİÇİ İLGİ OKULLARI", en: "ÖZEL BOĞAZİÇİ İLGİ SCHOOLS" };

/* ─── BİLİVA Eğitim Modeli ─────────────────────────────────── */
export const BILIVA_TITLE: Localized = { tr: "BİLİVA Eğitim Modeli", en: "The BİLİVA Education Model" };
export const BILIVA_TAGLINE: Localized = {
  tr: "İlgiyle Keşfet. Bilimle Geliş. Geleceğe Yön Ver.",
  en: "Discover with Interest. Grow with Science. Give Direction to the Future.",
};
export const BILIVA_LEAD: Localized = {
  tr: "Her çocuğun içinde keşfedilmeyi bekleyen bir dünya vardır.",
  en: "Within every child there is a world waiting to be discovered.",
};
export const BILIVA_INTRO: Localized[] = [
  { tr: "Özel Boğaziçi İlgi Okulları olarak eğitimin, yalnızca bilgi aktarmaktan ibaret olmadığına inanıyoruz. Bizim için gerçek eğitim; çocuğun merakını uyandırmak, düşünme gücünü geliştirmek, kendisini özgürce ifade etmesini sağlamak ve sahip olduğu potansiyeli ortaya çıkarmaktır.", en: "At Özel Boğaziçi İlgi Schools, we believe that education is not merely the transfer of knowledge. For us, real education means awakening the child's curiosity, developing their power to think, enabling them to express themselves freely and bringing out the potential they have." },
  { tr: "Bu anlayıştan hareketle şekillendirdiğimiz BİLİVA Eğitim Modeli, Boğaziçi’nin bilimsel düşünce, özgürlük, akademik yetkinlik ve evrensel değerlerinden ilham alır.", en: "The BİLİVA Education Model, which we shaped from this understanding, is inspired by Boğaziçi's scientific thought, freedom, academic competence and universal values." },
  { tr: "BİLİVA; bilimi, bireysel ilgiyi, vizyonu ve araştırmayı aynı eğitim kültüründe buluşturan, çocuğu merkeze alan bütüncül bir eğitim yaklaşımıdır.", en: "BİLİVA is a holistic, child-centered approach to education that brings science, individual interest, vision and research together in the same educational culture." },
];

export const BILIVA_FOUR_TITLE: Localized = { tr: "BİLİVA’nın Dört Temel İlkesi", en: "The Four Core Principles of BİLİVA" };
export const BILIVA_FOUR: { title: Localized; paragraphs: Localized[]; closing: Localized }[] = [
  {
    title: { tr: "Bilimsel Düşünce", en: "Scientific Thought" },
    paragraphs: [
      { tr: "Öğrencilerimizin bilgiyi yalnızca öğrenmesini değil; sorgulamasını, neden-sonuç ilişkileri kurmasını, kanıtlara dayalı düşünmesini ve öğrendiklerini anlamlandırmasını önemseriz.", en: "We care that our students do not merely learn knowledge but question it, establish cause and effect relationships, think based on evidence and make sense of what they learn." },
    ],
    closing: { tr: "Çünkü güçlü bir gelecek, doğru soruları sorabilen zihinlerle kurulur.", en: "Because a strong future is built by minds that can ask the right questions." },
  },
  {
    title: { tr: "Bireysel İlgi", en: "Individual Interest" },
    paragraphs: [
      { tr: "Her çocuğun öğrenme biçimi, ilgi alanları, yetenekleri ve gelişim yolculuğu farklıdır.", en: "Every child's way of learning, interests, talents and developmental journey are different." },
      { tr: "BİLİVA’da çocuğu tanımak, anlamak ve potansiyelini desteklemek eğitimin temelidir. Her öğrencinin kendisini değerli hissettiği, güçlü yönlerini keşfedebildiği bir öğrenme kültürünü esas alırız.", en: "In BİLİVA, knowing and understanding the child and supporting their potential is the foundation of education. We base our work on a learning culture in which every student feels valued and can discover their strengths." },
    ],
    closing: { tr: "Çünkü biliyoruz ki bilgi beş harfli, dördü İLGİ’dir.", en: "Because we know that the Turkish word for knowledge, “bilgi,” has five letters, and four of them spell “İLGİ” (interest)." },
  },
  {
    title: { tr: "Vizyoner Bakış", en: "Visionary Outlook" },
    paragraphs: [
      { tr: "Öğrencilerimizin yalnızca bugünün kazanımlarına değil, geleceğin dünyasına da hazırlanmasını hedefleriz.", en: "We aim for our students to prepare not only for today's achievements but also for the world of the future." },
      { tr: "Özgür düşünceyi, yaratıcılığı, farklı bakış açılarına saygıyı, iletişimi ve sorumluluk almayı akademik gelişimin ayrılmaz bir parçası olarak görürüz.", en: "We see free thought, creativity, respect for different perspectives, communication and taking responsibility as inseparable parts of academic development." },
    ],
    closing: { tr: "Amacımız, geleceği yalnızca takip eden değil, ona yön verebilecek bireylerin yetişmesine katkı sunmaktır.", en: "Our aim is to contribute to the growth of individuals who do not merely follow the future but can give it direction." },
  },
  {
    title: { tr: "Araştırma ve Üretim", en: "Research and Production" },
    paragraphs: [
      { tr: "Merak, öğrenmenin başlangıcıdır. Araştırma ise merakı bilgiye dönüştüren yolculuktur.", en: "Curiosity is the beginning of learning. Research is the journey that turns curiosity into knowledge." },
      { tr: "Öğrencilerimizin soru sormasını, keşfetmesini, fikir geliştirmesini, çözüm üretmesini ve öğrendiklerini yaşamla ilişkilendirmesini destekleyen bir eğitim anlayışını benimseriz.", en: "We embrace an approach to education that supports our students in asking questions, exploring, developing ideas, producing solutions and relating what they learn to life." },
    ],
    closing: { tr: "Çünkü bilgi, kullanıldığında ve yeni değerler üretmeye başladığında gerçek anlamını kazanır.", en: "Because knowledge gains its true meaning when it is used and begins to produce new values." },
  },
];

export const BILIVA_JOURNEY_TITLE: Localized = { tr: "Anaokulundan Ortaokula Bütüncül Bir Yolculuk", en: "A Holistic Journey from Kindergarten to Middle School" };
export const BILIVA_JOURNEY_INTRO: Localized = {
  tr: "BİLİVA Eğitim Modeli, çocukların gelişim dönemlerini dikkate alan bütüncül bir bakış açısına dayanır.",
  en: "The BİLİVA Education Model rests on a holistic perspective that takes children's developmental stages into account.",
};
export const BILIVA_JOURNEY: { label: Localized; text: Localized }[] = [
  { label: { tr: "Anaokulu", en: "Kindergarten" }, text: { tr: "Anaokulunda merakın, keşfin ve öğrenme sevgisinin temelleri atılır.", en: "In kindergarten, the foundations of curiosity, discovery and a love of learning are laid." } },
  { label: { tr: "İlkokul", en: "Primary School" }, text: { tr: "İlkokulda güçlü akademik beceriler, düşünme alışkanlıkları ve özgüven gelişir.", en: "In primary school, strong academic skills, thinking habits and self-confidence develop." } },
  { label: { tr: "Ortaokul", en: "Middle School" }, text: { tr: "Ortaokulda araştırma, eleştirel düşünme, sorumluluk alma ve bağımsız öğrenme becerileri derinleşir.", en: "In middle school, research, critical thinking, taking responsibility and independent learning skills deepen." } },
];
export const BILIVA_JOURNEY_CLOSING: Localized = {
  tr: "Bu yolculuğun her aşamasında hedefimiz, öğrencilerimizin akademik yönden güçlenirken karakter, kültür ve değerler bakımından da gelişmesidir.",
  en: "At every stage of this journey, our goal is for our students to grow stronger academically while also developing in character, culture and values.",
};

export const BILIVA_MORE_TITLE: Localized = { tr: "Bilgiden Daha Fazlası", en: "More Than Knowledge" };
export const BILIVA_MORE: Localized[] = [
  { tr: "Biz çocuklarımızın yalnızca doğru cevaplar bulmasını değil, doğru soruları sorabilmesini istiyoruz.", en: "We want our children not only to find the right answers but to be able to ask the right questions." },
  { tr: "Yalnızca başarılı olmasını değil, başarısını anlamlı bir amaca dönüştürebilmesini önemsiyoruz.", en: "We care not only that they succeed but that they can turn their success into a meaningful purpose." },
  { tr: "Yalnızca geleceğe hazırlanmasını değil, geleceğin şekillenmesinde söz sahibi olabilecek bir düşünce dünyası kazanmasını hedefliyoruz.", en: "We aim not only for them to prepare for the future but to gain a world of thought that lets them have a say in shaping it." },
];
export const BILIVA_MORE_CLOSING: Localized = {
  tr: "BİLİVA Eğitim Modeli, işte bu inancın eğitim anlayışımıza dönüşmüş hâlidir.",
  en: "The BİLİVA Education Model is this belief turned into our approach to education.",
};
export const BILIVA_SIGNATURE: Localized = { tr: "Özel Boğaziçi İlgi Okulları", en: "Özel Boğaziçi İlgi Schools" };

export const BILIVA_SIX_TITLE: Localized = { tr: "BİLİVA’nın Altı Temel İlkesi", en: "The Six Core Principles of BİLİVA" };
export const BILIVA_SIX: { letter: string; title: Localized; text: Localized }[] = [
  { letter: "B", title: { tr: "Bilimsel Düşün", en: "Think Scientifically" }, text: { tr: "Sorgula, kanıtlarla düşün.", en: "Question and think with evidence." } },
  { letter: "İ", title: { tr: "İlgiyle Keşfet", en: "Discover with Interest" }, text: { tr: "Merakını ve yeteneklerini tanı.", en: "Know your curiosity and talents." } },
  { letter: "L", title: { tr: "Liderlik Et", en: "Lead" }, text: { tr: "Sorumluluk al, birlikte üret.", en: "Take responsibility and create together." } },
  { letter: "İ", title: { tr: "İlişkilendir", en: "Connect" }, text: { tr: "Bilgiyi yaşamla buluştur.", en: "Bring knowledge together with life." } },
  { letter: "V", title: { tr: "Vizyon Geliştir", en: "Develop Vision" }, text: { tr: "Özgür düşün, geleceği tasarla.", en: "Think freely and design the future." } },
  { letter: "A", title: { tr: "Araştır ve Üret", en: "Research and Create" }, text: { tr: "Keşfet, çözüm geliştir.", en: "Explore and develop solutions." } },
];
export const BILIVA_SIX_CLOSING: Localized = {
  tr: "BİLİVA Eğitim Modeli; bilimsel düşünceyi, bireysel ilgiyi, liderliği, öğrenilen bilgilerin yaşamla ilişkilendirilmesini, vizyoner bakışı ve araştırarak üretmeyi bir bütün olarak ele alır.",
  en: "The BİLİVA Education Model treats scientific thought, individual interest, leadership, relating what is learned to life, a visionary outlook and producing through research as a whole.",
};
