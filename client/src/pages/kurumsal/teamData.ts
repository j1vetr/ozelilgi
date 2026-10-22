import type { Localized } from "./storyContent";

/*
 * İçerik geldiğinde yalnızca aşağıdaki dizilere kayıt eklenir.
 * Dizi boş olduğu sürece sayfalar "yakında" yer tutucularını gösterir.
 */
export type Person = {
  name: string;
  role: Localized;
  photo?: string;
  bio?: Localized;
};
export type Advisor = Person & { expertise: Localized[] };
export type StaffGroup = { title: Localized; members: Person[] };

export const BOARD_MEMBERS: Person[] = [];

export const STAFF_GROUPS: StaffGroup[] = [
  { title: { tr: "Okul Müdürü", en: "School Principal" }, members: [] },
  { title: { tr: "Müdür Yardımcıları", en: "Vice Principals" }, members: [] },
  { title: { tr: "Rehberlik Servisi", en: "Guidance Service" }, members: [] },
  { title: { tr: "Koordinatörler", en: "Coordinators" }, members: [] },
];

export const ADVISORS: Advisor[] = [];

/* Veri yokken kaç yer tutucu kart gösterileceği */
export const BOARD_PLACEHOLDERS = 3;
export const STAFF_PLACEHOLDERS: Record<number, number> = { 0: 1, 1: 2, 2: 2, 3: 2 };
export const ADVISOR_PLACEHOLDERS = 4;
