import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  ArrowUpRight,
} from "lucide-react";

const items = [
  {
    name: "Robert Thompson",
    role: "VP Marketing, NorthPeak SaaS",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
    content:
      "The team aligned our brand, website, and growth channels into one operating model. Pipeline quality improved within the first month.",
  },
  {
    name: "Jennifer Lee",
    role: "CEO, Helix Health",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
    content:
      "They run like true partners. Clear strategy, fast delivery, and consistent communication made a major difference for our team.",
  },
  {
    name: "David Kumar",
    role: "Head of Growth, UrbanCart",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
    content:
      "From paid campaigns to analytics, everything started working together. We finally had confidence in both execution and reporting.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((current) => (current - 1 + items.length) % items.length);
  const next = () => setIndex((current) => (current + 1) % items.length);

  const item = items[index];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* HEADER & NAV */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Trusted by Ambitious{" "}
              <span className="text-slate-400 italic">Teams.</span>
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-14 h-14 rounded-2xl border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 shadow-sm active:scale-90"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="w-14 h-14 rounded-2xl border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 shadow-sm active:scale-90"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* TESTIMONIAL CARD WRAPPER */}
        <div className="relative">
          <Quote className="absolute -top-10 -left-6 text-slate-100 w-32 h-32 -z-10" />

          {/* MAIN GRID */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-12 gap-12 items-center bg-slate-50 rounded-[4rem] p-6 md:p-12 border border-slate-100 shadow-2xl shadow-slate-200/50"
            >
              {/* LEFT SIDE: NEW ROTATED CARD DESIGN */}
              <div className="lg:col-span-5">
                <div className="group relative p-4">
                  {/* 1. ROTATED DECORATION BOX */}
                  <div className="absolute inset-0 bg-slate-200 rounded-[3rem] rotate-6 scale-95 transition-transform group-hover:rotate-8" />

                  <div className="relative z-10 bg-white rounded-[3rem] overflow-hidden shadow-xl border border-slate-100 transition-all duration-500 group-hover:-translate-y-2">
                    {/* 2. IMAGE SECTION */}
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                    </div>

                    {/* 3. FLOATING LINK (DESIGN ACCENT) */}
                    <div className="absolute bottom-0 right-0 p-6">
                      <div className="w-14 h-14 bg-black text-white rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-300 hover:bg-slate-800 hover:scale-110">
                        <ArrowUpRight size={24} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: TESTIMONIAL CONTENT */}
              <div className="lg:col-span-7 space-y-8 pr-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={22} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>

                <p className="text-2xl md:text-4xl font-medium text-slate-800 leading-tight tracking-tight italic">
                  "{item.content}"
                </p>

                <div className="pt-8 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 leading-none mb-2">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-black" />
                      <p className="text-black font-bold text-xs uppercase tracking-widest">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <div className="hidden sm:block">
                    <div className="bg-white px-4 py-2 rounded-xl border border-slate-200 text-slate-400 text-[10px] font-bold uppercase tracking-widest shadow-sm">
                      Verified Engagement
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
