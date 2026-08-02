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
            className="fixed inset-0 z-[200] bg-black/65 backdrop-blur-sm"
            onClick={dismiss}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.9, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 28 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[201] flex items-center justify-center p-3 sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Outer frame — navy border */}
            <div
              className="relative w-full max-w-[780px] rounded-[24px] shadow-2xl overflow-hidden"
              style={{ background: "#0B2755" }}
            >
              {/* Close button */}
              <button
                onClick={dismiss}
                aria-label="Kapat"
                className="absolute top-3 right-3 z-30 w-9 h-9 rounded-full bg-[#0B2755] border-2 border-white/20 hover:bg-[#0d3270] flex items-center justify-center transition-colors shadow-lg"
              >
                <X className="w-4 h-4 text-white" />
              </button>

              {/* Inner card */}
              <div
                className="m-[3px] rounded-[21px] overflow-hidden flex flex-col sm:flex-row"
                style={{ background: "linear-gradient(160deg,#eff6ff 0%,#dbeafe 100%)" }}
              >

                {/* ── LEFT PANEL ── */}
                <div className="relative bg-transparent sm:bg-white flex flex-col justify-between px-7 py-8 sm:py-10 sm:w-[54%] z-10 overflow-hidden">

                  {/* Orange dot grid — top left */}
                  <div className="absolute top-5 left-5 grid grid-cols-5 gap-[5px] opacity-60 pointer-events-none">
                    {Array.from({ length: 15 }).map((_, i) => (
                      <div key={i} className="w-[5px] h-[5px] rounded-full bg-[#F59E0B]" />
                    ))}
                  </div>

                  {/* Sparkle accent — top right area */}
                  <svg className="absolute top-7 right-6 pointer-events-none opacity-90" width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <path d="M13 1 L14.6 11 L24 13 L14.6 15 L13 25 L11.4 15 L2 13 L11.4 11 Z" fill="#FBBF24"/>
                  </svg>

                  {/* Logo */}
                  <div className="relative mt-2 flex justify-center sm:justify-start">
                    <img
                      src="/images/navbar-logo.png"
                      alt="Özel Boğaziçi İlgi Okulları"
                      className="h-[52px] w-auto object-contain"
                    />
                  </div>

                  {/* Heading */}
                  <div className="my-6">
                    <h2 className="text-[28px] sm:text-[32px] font-extrabold text-[#0B2755] leading-[1.2]">
                      {lang === "tr" ? (
                        <>Hangi Konu ile<br /><span>İlgileniyorsunuz?</span></>
                      ) : (
                        <>What Are You<br /><span>Interested In?</span></>
                      )}
                    </h2>
                    <div className="mt-2.5 w-14 h-[3px] rounded-full bg-[#22C55E]" />
                  </div>

                  {/* Option buttons */}
                  <div className="flex flex-col gap-3">
                    {/* Eğitim Birimleri */}
                    <Link href="/akademik" onClick={dismiss}>
                      <div className="group flex items-center gap-3.5 bg-white border border-gray-200 rounded-2xl px-4 py-3.5 shadow-sm hover:shadow-md hover:border-[#0B2755]/25 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                        <div className="w-11 h-11 rounded-xl bg-[#0B2755] flex items-center justify-center shrink-0 shadow-sm">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 21V9l9-6 9 6v12H3z"/>
                            <path d="M9 21V12h6v9"/>
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[13.5px] font-bold text-[#0B2755] leading-tight">
                            {lang === "tr" ? "Eğitim Birimleri" : "Education Units"}
                          </p>
                          <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">
                            {lang === "tr"
                              ? "Okul öncesi, ilkokul, ortaokul ve lise kademelerimiz."
                              : "Preschool, primary, middle and high school levels."}
                          </p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#0B2755] group-hover:translate-x-0.5 transition-all shrink-0" />
                      </div>
                    </Link>

                    {/* Kayıt Avantajları */}
                    <Link href="/kayit" onClick={dismiss}>
                      <div className="group flex items-center gap-3.5 bg-white border border-gray-200 rounded-2xl px-4 py-3.5 shadow-sm hover:shadow-md hover:border-[#F97316]/25 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                        <div className="w-11 h-11 rounded-xl bg-[#F97316] flex items-center justify-center shrink-0 shadow-sm">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 12 20 22 4 22 4 12"/>
                            <rect x="2" y="7" width="20" height="5"/>
                            <line x1="12" y1="22" x2="12" y2="7"/>
                            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
                            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[13.5px] font-bold text-[#0B2755] leading-tight">
                            {lang === "tr" ? "Kayıt Avantajları" : "Enrollment Benefits"}
                          </p>
                          <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">
                            {lang === "tr"
                              ? "Erken kayıt fırsatları ve size özel ayrıcalıklar."
                              : "Early registration and exclusive privileges."}
                          </p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#F97316] group-hover:translate-x-0.5 transition-all shrink-0" />
                      </div>
                    </Link>
                  </div>
                </div>

                {/* ── RIGHT PANEL ── */}
                <div
                  className="hidden sm:flex sm:w-[46%] relative overflow-hidden items-center justify-center"
                  style={{
                    background: "linear-gradient(160deg, #ffffff 0%, #eff6ff 40%, #dbeafe 100%)",
                    minHeight: "420px",
                  }}
                >
                  {/* Soft circle blob behind student */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "radial-gradient(ellipse 80% 70% at 60% 55%, #bfdbfe55 0%, transparent 70%)",
                    }}
                  />

                  {/* Paper plane — top right */}
                  <div className="absolute top-5 right-5 pointer-events-none">
                    <svg width="54" height="48" viewBox="0 0 54 48" fill="none">
                      <path d="M46 3 C34 2 8 18 8 34" stroke="#93C5FD" strokeWidth="1.6" strokeDasharray="5 4" fill="none" opacity="0.8"/>
                      <path d="M48 1 L32 26 L26 18 L48 1Z" fill="#3B82F6" opacity="0.85"/>
                      <path d="M48 1 L36 32 L32 26 L48 1Z" fill="#1D4ED8" opacity="0.75"/>
                      <line x1="32" y1="26" x2="34" y2="34" stroke="#60A5FA" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                  </div>

                  {/* Yellow sparkle */}
                  <div className="absolute left-6 top-[28%] pointer-events-none">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 1 L13.5 9.5 L22 12 L13.5 14.5 L12 23 L10.5 14.5 L2 12 L10.5 9.5 Z" fill="#FBBF24"/>
                    </svg>
                  </div>

                  {/* Small orange dots — bottom right */}
                  <div className="absolute bottom-5 right-5 grid grid-cols-3 gap-[5px] opacity-40 pointer-events-none">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div key={i} className="w-[5px] h-[5px] rounded-full bg-[#F59E0B]" />
                    ))}
                  </div>

                  {/* Student PNG — vertically centered, full visible */}
                  <img
                    src="/images/popup-student.png"
                    alt="Öğrenci"
                    className="relative z-10 w-[90%] object-contain"
                    style={{ maxHeight: "400px" }}
                    draggable={false}
                  />
                </div>
              </div>

              {/* Mobile-only student section */}
              <div className="sm:hidden flex items-end justify-center overflow-hidden" style={{ height: "220px" }}>
                <img
                  src="/images/popup-student.png"
                  alt="Öğrenci"
                  className="h-[210px] w-auto object-contain object-bottom"
                  draggable={false}
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
