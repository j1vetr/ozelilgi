import { motion } from "framer-motion";
import { User } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import {
  ADVISORS, ADVISOR_PLACEHOLDERS, BOARD_MEMBERS, BOARD_PLACEHOLDERS, STAFF_GROUPS, STAFF_PLACEHOLDERS,
} from "./teamData";

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.45 },
};

function SoonBadge({ className = "" }: { className?: string }) {
  const { lang } = useLanguage();
  return (
    <span className={`inline-block bg-brand-orange text-white text-xs font-semibold px-3 py-1 rounded-full ${className}`}>
      {lang === "tr" ? "İçerik yakında eklenecek" : "Content coming soon"}
    </span>
  );
}

function PageTitle({ title }: { title: string }) {
  return (
    <header className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">{title}</h2>
      <SoonBadge />
    </header>
  );
}

/* Yönetim Kurulu: resmi, ortalanmış dikey portre kartları */
export function YonetimKuruluContent() {
  const { lang } = useLanguage();
  const L = (x: { tr: string; en: string }) => x[lang];
  const items = BOARD_MEMBERS.length ? BOARD_MEMBERS : Array.from({ length: BOARD_PLACEHOLDERS }, () => null);

  return (
    <div className="max-w-5xl mx-auto" data-testid="page-yonetim-kurulu">
      <PageTitle title={lang === "tr" ? "Yönetim Kurulu" : "Board of Directors"} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((m, i) => (
          <motion.article key={i} {...fade} className="text-center" data-testid={`board-card-${i}`}>
            <div className={`aspect-[3/4] rounded-2xl overflow-hidden flex items-center justify-center mb-4 ${m ? "bg-gray-100" : "bg-gray-50 border-2 border-dashed border-gray-300"}`}>
              {m?.photo ? (
                <img src={m.photo} alt={m.name} className="w-full h-full object-cover" />
              ) : (
                <User className="w-20 h-20 text-gray-300" />
              )}
            </div>
            <div className="border-t-4 border-primary pt-3">
              {m ? (
                <>
                  <h3 className="font-display font-bold text-primary text-lg">{m.name}</h3>
                  <p className="text-brand-orange font-semibold text-sm">{L(m.role)}</p>
                </>
              ) : (
                <>
                  <div className="h-5 w-40 bg-gray-200 rounded mx-auto mb-2" />
                  <div className="h-4 w-28 bg-gray-100 rounded mx-auto" />
                </>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

/* İdari Kadro: unvana göre gruplanmış, yatay satır kartları */
export function IdariKadroContent() {
  const { lang } = useLanguage();
  const L = (x: { tr: string; en: string }) => x[lang];

  return (
    <div className="max-w-4xl mx-auto" data-testid="page-idari-kadro">
      <PageTitle title={lang === "tr" ? "İdari Kadro" : "Administrative Staff"} />
      <div className="space-y-10">
        {STAFF_GROUPS.map((g, gi) => {
          const items = g.members.length ? g.members : Array.from({ length: STAFF_PLACEHOLDERS[gi] ?? 1 }, () => null);
          return (
            <section key={gi} data-testid={`staff-group-${gi}`}>
              <h3 className="flex items-center gap-3 text-xl font-display font-bold text-primary mb-4">
                <span className="w-2 h-7 bg-brand-green rounded-sm" />
                {L(g.title)}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {items.map((m, i) => (
                  <motion.div key={i} {...fade} className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <div className="shrink-0 w-16 h-16 rounded-full bg-white border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden">
                      {m?.photo ? <img src={m.photo} alt={m.name} className="w-full h-full object-cover" /> : <User className="w-7 h-7 text-gray-300" />}
                    </div>
                    <div className="min-w-0 flex-1">
                      {m ? (
                        <>
                          <p className="font-bold text-primary">{m.name}</p>
                          <p className="text-sm text-gray-600">{L(m.role)}</p>
                        </>
                      ) : (
                        <>
                          <div className="h-4 w-3/4 bg-gray-200 rounded mb-2" />
                          <div className="h-3 w-1/2 bg-gray-100 rounded" />
                        </>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

/* Danışmanlar: uzmanlık alanı etiketli, yatay kartlar */
export function DanismanlarContent() {
  const { lang } = useLanguage();
  const L = (x: { tr: string; en: string }) => x[lang];
  const items = ADVISORS.length ? ADVISORS : Array.from({ length: ADVISOR_PLACEHOLDERS }, () => null);

  return (
    <div className="max-w-5xl mx-auto" data-testid="page-danismanlar">
      <PageTitle title={lang === "tr" ? "Danışmanlar" : "Advisors"} />
      <div className="grid md:grid-cols-2 gap-5">
        {items.map((a, i) => (
          <motion.article key={i} {...fade} className="bg-white border border-gray-200 rounded-2xl p-5 flex gap-4" data-testid={`advisor-card-${i}`}>
            <div className="shrink-0 w-20 h-20 rounded-xl bg-gray-50 border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden">
              {a?.photo ? <img src={a.photo} alt={a.name} className="w-full h-full object-cover" /> : <User className="w-9 h-9 text-gray-300" />}
            </div>
            <div className="min-w-0 flex-1">
              {a ? (
                <>
                  <h3 className="font-display font-bold text-primary">{a.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{L(a.role)}</p>
                </>
              ) : (
                <>
                  <div className="h-5 w-2/3 bg-gray-200 rounded mb-2" />
                  <div className="h-4 w-1/2 bg-gray-100 rounded mb-3" />
                </>
              )}
              <div className="flex flex-wrap gap-2">
                {a
                  ? a.expertise.map((e, j) => (
                      <span key={j} className="bg-brand-blue text-white text-xs font-semibold px-3 py-1 rounded-full">{L(e)}</span>
                    ))
                  : [0, 1].map((j) => (
                      <span key={j} className="border border-dashed border-gray-300 text-gray-400 text-xs font-medium px-3 py-1 rounded-full">
                        {lang === "tr" ? "Uzmanlık alanı" : "Area of expertise"}
                      </span>
                    ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
