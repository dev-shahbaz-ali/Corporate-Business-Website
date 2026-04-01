import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Target, Zap, Clock } from "lucide-react";

const studies = [
  {
    title: "B2B SaaS Rebrand + Demand Engine",
    category: "SaaS",
    description:
      "Rebuilt brand narrative, website UX, and media stack. Result: 63% more qualified pipeline.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80",
    featured: true,
  },
  {
    title: "Healthtech Product Launch System",
    category: "Healthcare",
    description:
      "Built launch story, conversion pages, and ad system for three target markets.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80",

    featured: false,
  },
  {
    title: "Ecommerce Growth Overhaul",
    category: "Retail",
    description:
      "Optimized storefront flow and lifecycle funnel to increase conversion.",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=900&q=80",
    featured: false,
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Results You Can{" "}
              <span className="text-blue-600 italic">Measure.</span>
            </h2>
          </div>
          <button className="text-blue-600 font-bold flex items-center gap-2 group hover:underline underline-offset-4 transition-all">
            View All Success Stories{" "}
            <ArrowUpRight
              size={20}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </button>
        </div>

        {/* STUDIES GRID */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {studies.map((study, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              whileHover="hover"
            >
              {/* Image Container */}
              <motion.div className="relative h-72 mb-6 overflow-hidden rounded-[2rem] bg-slate-100">
                <motion.img
                  variants={{
                    hover: { scale: 1.1, filter: "grayscale(0%)" },
                  }}
                  initial={{ filter: "grayscale(100%)" }}
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-sm">
                    {study.category}
                  </span>
                </div>
              </motion.div>

              {/* Text Content */}
              <div className="space-y-4 px-2">
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                  {study.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {study.description}
                </p>

                <div className="pt-4 flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:gap-4 transition-all duration-300">
                  Learn More{" "}
                  <ArrowUpRight size={16} className="text-blue-600" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
