import { motion } from "framer-motion";

const HASHTAGS = [
  "#herçocuközelilgiyihakeder",
  "#geleceğinliderleri",
  "#özelilgiözelgelecek",
  "#ilgiilebüyüyennesiller",
  "#sevgiveilgiyleeğitim",
];

export function HashtagStrip() {
  const items = [...HASHTAGS, ...HASHTAGS, ...HASHTAGS, ...HASHTAGS];

  return (
    <div className="bg-primary py-3.5 overflow-hidden relative">
      <motion.div
        animate={{ x: [0, -1500] }}
        transition={{ x: { duration: 28, repeat: Infinity, ease: "linear" } }}
        className="flex gap-10 whitespace-nowrap"
      >
        {items.map((tag, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="text-white/90 font-semibold text-sm tracking-wide">{tag}</span>
            <span className="text-white/30 text-lg">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
