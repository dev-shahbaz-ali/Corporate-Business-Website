import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Play,
  ShieldCheck,
  Clock3,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const Hero = () => {
  const { scrollY } = useScroll();
  const gridY = useTransform(scrollY, [0, 500], [0, 100]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="top"
      className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-white"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-slate-100/50 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-900 text-[10px] font-black tracking-[0.2em] uppercase shadow-sm"
            >
              <Sparkles size={14} className="animate-pulse" />
              Premium Digital Agency
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-slate-900 leading-[0.95] tracking-tighter"
              >
                Better Brand.
              </motion.h1>
            </div>
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black leading-[0.95] tracking-tighter"
            >
              <span className="text-slate-400 italic">Better Growth.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl text-slate-500 max-w-xl leading-relaxed font-medium"
            >
              We blend strategy, creative direction, and performance engineering
              to ship high-converting digital experiences for ambitious teams.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#000" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-6 bg-slate-900 text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] transition-all shadow-2xl shadow-slate-900/20 flex items-center justify-center gap-3 group"
              >
                Launch My Project
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, borderColor: "#000" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-6 bg-white text-slate-900 border border-slate-200 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                  <Play size={14} className="text-slate-900 fill-slate-900" />
                </div>
                View Success Stories
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT: VISUAL DASHBOARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            {/* Main Visual Card */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-2xl shadow-slate-200/50"
            >
              <div className="flex justify-between items-end mb-8">
                <div>
                  <p className="text-slate-400 text-sm font-medium">
                    Revenue Pipeline
                  </p>
                  <h3 className="text-3xl font-bold text-slate-900">$6.4M</h3>
                </div>
                <div className="text-emerald-500 text-sm font-bold bg-emerald-50 px-2 py-1 rounded-lg">
                  +28.4%
                </div>
              </div>

              {/* Mock Chart */}
              <div className="flex items-end gap-2 h-48">
                {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: 0.8 + i * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex-1 bg-slate-900 rounded-t-lg transition-all hover:bg-slate-400 cursor-pointer"
                  />
                ))}
              </div>
            </motion.div>

            {/* Decorative Grid Background */}
            <motion.div
              style={{ y: gridY }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] z-0 opacity-10 pointer-events-none"
            >
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
