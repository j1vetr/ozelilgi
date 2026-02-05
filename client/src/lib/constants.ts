import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export const SCHOOL_INFO = {
  name: "Özel Boğaziçi İlgi Koleji Çekmeköy",
  shortName: "Boğaziçi İlgi",
  slogan: "Geleceğe Güvenle",
  phone: "+90 (216) 123 45 67",
  email: "info@bogaziciilgi.k12.tr",
  address: "Çekmeköy, İstanbul",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
  },
};

export const NAVIGATION = [
  {
    title: "Kurumsal",
    href: "/kurumsal",
    items: [
      { title: "Hakkımızda", href: "/kurumsal/hakkimizda" },
      { title: "Kurucu Mesajı", href: "/kurumsal/kurucu-mesaji" },
      { title: "Vizyon & Misyon", href: "/kurumsal/vizyon-misyon" },
      { title: "Eğitim Yaklaşımımız", href: "/kurumsal/egitim-yaklasimimiz" },
    ],
  },
  {
    title: "Akademik",
    href: "/akademik",
    items: [
      { title: "Anaokulu", href: "/akademik/anaokulu" },
      { title: "İlkokul", href: "/akademik/ilkokul" },
      { title: "Ortaokul", href: "/akademik/ortaokul" },
    ],
  },
  {
    title: "Kampüs",
    href: "/kampus",
    items: [
      { title: "İmkanlar", href: "/kampus/imkanlar" },
      { title: "Galeri", href: "/kampus/galeri" },
    ],
  },
  {
    title: "Kayıt",
    href: "/kayit",
    items: [
      { title: "Kayıt Süreci", href: "/kayit/kayit-sureci" },
      { title: "Ön Kayıt", href: "/kayit/on-kayit" },
      { title: "Bursluluk", href: "/kayit/burs" },
    ],
  },
  {
    title: "İletişim",
    href: "/iletisim",
  },
];

export const MOCK_CONTENT = {
  home: {
    hero: {
      title: "Geleceğin Liderlerini Yetiştiriyoruz",
      subtitle: "Akademik mükemmellik, güçlü karakter gelişimi ve modern eğitim yaklaşımıyla öğrencilerimizi dünyaya hazırlıyoruz.",
      cta: "Kampüsü Keşfet",
    },
    stats: [
      { value: "25+", label: "Yıllık Tecrübe" },
      { value: "1500+", label: "Mezun" },
      { value: "100%", label: "Üniversite Yerleşimi" },
      { value: "12", label: "Öğrenci / Öğretmen Oranı" },
    ],
    features: [
      {
        title: "Global Eğitim",
        description: "Uluslararası standartlarda yabancı dil ve akademik programlar.",
        icon: "Globe",
      },
      {
        title: "STEM & Robotik",
        description: "Geleceğin teknolojilerini bugünden kodlayan nesiller.",
        icon: "Cpu",
      },
      {
        title: "Sanat ve Spor",
        description: "Her öğrencinin yeteneğini keşfeden bütünsel gelişim.",
        icon: "Palette",
      },
    ],
  },
};
