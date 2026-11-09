import { useLanguage } from "@/lib/i18n";
import {
  CHAPTERS, FOUNDER_NAME_LINE, FOUNDING_BACKGROUND, FOUNDING_CLOSING_Q, FOUNDING_OPENING,
  FOUNDING_QUESTIONS, FOUNDING_QUOTE, FOUNDING_SIGNATURE, FOUNDING_TITLE, SLOGAN,
} from "./storyContent";
import { FOUNDING_PDF_BLOCKS, type StoryBlock } from "./storyPdfTr";

/* Düz metin akışı: başlıklar ve cümleler, kart ya da ek tasarım yok */
export function KurulusHikayesiContent() {
  const { lang } = useLanguage();

  const blocks: StoryBlock[] =
    lang === "tr"
      ? FOUNDING_PDF_BLOCKS
      : [
          { type: "title", text: FOUNDING_TITLE.en },
          ...FOUNDING_OPENING.map((p) => ({ type: "p" as const, text: p.en })),
          { type: "p", text: FOUNDER_NAME_LINE.en },
          ...FOUNDING_BACKGROUND.map((p) => ({ type: "p" as const, text: p.en })),
          { type: "p", text: FOUNDING_QUOTE.en },
          ...FOUNDING_QUESTIONS.map((p) => ({ type: "p" as const, text: p.en })),
          { type: "p", text: FOUNDING_CLOSING_Q.en },
          ...CHAPTERS.flatMap((ch) => [
            { type: "h" as const, text: ch.title.en },
            ...ch.paragraphs.map((p) => ({ type: "p" as const, text: p.en })),
          ]),
        ];

  return (
    <article className="max-w-3xl mx-auto" data-testid="page-kurulus-hikayesi">
      {blocks.map((b, i) => {
        if (b.type === "title") return (
          <div key={i}>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">{b.text}</h2>
            <img src="/images/bogazici-logo-yuvarlak.png" alt="Özel Boğaziçi İlgi Okulları" className="w-40 h-40 md:w-52 md:h-52 rounded-full object-contain mx-auto mb-8" data-testid="founding-story-logo" />
          </div>
        );
        if (b.type === "h") return <h3 key={i} className="text-2xl font-display font-bold text-primary mt-10 mb-4">{b.text}</h3>;
        return <p key={i} className="text-gray-700 leading-relaxed text-base md:text-lg mb-5">{b.text}</p>;
      })}
    </article>
  );
}
