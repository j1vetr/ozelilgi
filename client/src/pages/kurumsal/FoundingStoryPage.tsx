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
          { type: "sub", text: SLOGAN.en },
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
          { type: "p", text: FOUNDING_SIGNATURE.en },
          { type: "p", text: SLOGAN.en + "." },
        ];

  return (
    <article className="max-w-3xl mx-auto" data-testid="page-kurulus-hikayesi">
      {blocks.map((b, i) => {
        if (b.type === "title") return <h2 key={i} className="text-3xl md:text-4xl font-display font-bold text-primary mb-3">{b.text}</h2>;
        if (b.type === "h") return <h3 key={i} className="text-2xl font-display font-bold text-primary mt-10 mb-4">{b.text}</h3>;
        return <p key={i} className="text-gray-700 leading-relaxed text-base md:text-lg mb-5">{b.text}</p>;
      })}
    </article>
  );
}
