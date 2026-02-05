import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FadeIn = ({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={cn(className)}
  >
    {children}
  </motion.div>
);

export const ScaleIn = ({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className={cn(className)}
  >
    {children}
  </motion.div>
);

export const StaggerContainer = ({ children, className, stagger = 0.1 }: { children: React.ReactNode, className?: string, stagger?: number }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-100px" }}
    variants={{
      hidden: {},
      show: {
        transition: {
          staggerChildren: stagger
        }
      }
    }}
    className={cn(className)}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }}
    className={cn(className)}
  >
    {children}
  </motion.div>
);
