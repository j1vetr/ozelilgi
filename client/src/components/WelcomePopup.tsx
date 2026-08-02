import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/lib/i18n";

const POPUP_KEY = "bogazici_popup_dismissed";

export function WelcomePopup() {
  const [open, setOpen] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    const dismissed = sessionStorage.getItem(POPUP_KEY);
    if (!dismissed) {
      const t = setTimeout(() => setOpen(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const dismiss = () => {
    sessionStorage.setItem(POPUP_KEY, "1");
    setOpen(false);
  };

  const handleLinkClick = () => {
    dismiss();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm"
            onClick={dismiss}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[201] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl"
              style={{ background: "#0B2755", padding: "4px" }}
            >
              <div className="rounded-[20px] overflow-hidden flex flex-col sm:flex-row min-h-[360px]">

                {/* ── Left panel ── */}
                <div className="relative flex flex-col justify-between bg-white px-7 py-8 sm:w-[55%] z-10">

                  {/* Decorative dots top-left */}
                  <div className="absolute top-4 left-4 grid grid-cols-5 gap-[5px] opacity-70">
                    {Array.from({ length: 15 }).map((_, i) => (
                      <div key={i} className="w-[5px] h-[5px] rounded-full bg-[#F59E0B]" />
                    ))}
                  </div>

                  {/* Decorative sparkle */}
                  <div className="absolute top-6 right-6 sm:right-[-18px]">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M16 2 L17.5 14 L28 16 L17.5 18 L16 30 L14.5 18 L4 16 L14.5 14 Z" fill="#FBBF24"/>
                    </svg>
                  </div>

                  {/* Logo */}
                  <div className="mt-4">
                    <img
                      src="/images/navbar-logo.png"
                      alt="Özel Boğaziçi İlgi Okulları"
                      className="h-14 w-auto object-contain"
                    />
                    <p className="text-[11px] text-gray-500 mt-1 font-medium italic">
                      "Her öğrenci özeldir, ilgi iyilik eder."
                    </p>
                  </div>

                  {/* Heading */}
                  <div className="my-5">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2755] leading-tight">
                      {lang === "tr" ? (
                        <>Hangi Konu ile<br /><span className="text-[#0B2755]">İlgileniyorsunuz?</span></>
                      ) : (
                        <>What Are You<br /><span className="text-[#0B2755]">Interested In?</span></>
                      )}
                    </h2>
                    {/* underline accent */}
                    <div className="mt-2 w-16 h-[3px] rounded-full bg-[#22C55E]" />
                  </div>

                  {/* Option buttons */}
                  <div className="flex flex-col gap-3 mb-2">
                    {/* Eğitim Birimleri */}
                    <Link href="/akademik" onClick={handleLinkClick}>
                      <div className="group flex items-center gap-4 bg-white border border-gray-200 rounded-2xl px-4 py-3.5 shadow-sm hover:shadow-md hover:border-[#0B2755]/30 transition-all duration-200 cursor-pointer">
                        <div className="w-11 h-11 rounded-xl bg-[#0B2755] flex items-center justify-center shrink-0">
                          {/* School building icon */}
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 21V9l9-6 9 6v12H3z"/>
                            <path d="M9 21V12h6v9"/>
                            <path d="M12 3v3"/>
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold text-[#0B2755]">
                            {lang === "tr" ? "Eğitim Birimleri" : "Education Units"}
                          </p>
                          <p className="text-[11px] text-gray-500 leading-tight mt-0.5">
                            {lang === "tr"
                              ? "Okul öncesi, ilkokul, ortaokul ve lise kademelerimiz"
                              : "Preschool, primary, middle and high school levels"}
                          </p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#0B2755] transition-colors shrink-0" />
                      </div>
                    </Link>

                    {/* Kayıt Avantajları */}
                    <Link href="/kayit" onClick={handleLinkClick}>
                      <div className="group flex items-center gap-4 bg-white border border-gray-200 rounded-2xl px-4 py-3.5 shadow-sm hover:shadow-md hover:border-[#F97316]/30 transition-all duration-200 cursor-pointer">
                        <div className="w-11 h-11 rounded-xl bg-[#F97316] flex items-center justify-center shrink-0">
                          {/* Gift icon */}
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 12 20 22 4 22 4 12"/>
                            <rect x="2" y="7" width="20" height="5"/>
                            <line x1="12" y1="22" x2="12" y2="7"/>
                            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
                            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold text-[#0B2755]">
                            {lang === "tr" ? "Kayıt Avantajları" : "Enrollment Benefits"}
                          </p>
                          <p className="text-[11px] text-gray-500 leading-tight mt-0.5">
                            {lang === "tr"
                              ? "Erken kayıt fırsatları ve size özel ayrıcalıklar"
                              : "Early registration opportunities and exclusive privileges"}
                          </p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#F97316] transition-colors shrink-0" />
                      </div>
                    </Link>
                  </div>
                </div>

                {/* ── Right panel — student photo ── */}
                <div className="hidden sm:block sm:w-[45%] relative overflow-hidden">
                  <img
                    src="/images/popup-bg.png"
                    alt="Öğrenci"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />

                  {/* Paper plane decoration */}
                  <div className="absolute top-8 right-8">
                    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                      <path
                        d="M42 10 C42 10 10 26 10 26 L22 30 L26 44 L34 34 L42 10Z"
                        stroke="#3B82F6"
                        strokeWidth="1.5"
                        fill="none"
                        strokeDasharray="4 3"
                      />
                      <path d="M42 10 L22 30" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 3"/>
                      {/* plane body */}
                      <path d="M44 8 L28 34 L24 26 L44 8Z" fill="#3B82F6" opacity="0.85"/>
                    </svg>
                  </div>

                  {/* Sparkle on student */}
                  <div className="absolute top-[30%] left-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2 L13 10 L20 12 L13 14 L12 22 L11 14 L4 12 L11 10 Z" fill="#FBBF24"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={dismiss}
                aria-label="Kapat"
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#0B2755] hover:bg-[#0d3270] flex items-center justify-center transition-colors shadow-lg z-20"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
