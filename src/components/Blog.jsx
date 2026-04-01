import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, ChevronRight } from "lucide-react";

const posts = [
  {
    category: "Strategy",
    title: "How High-Performing Agencies Build Scalable Client Systems",
    description:
      "A practical playbook for translating strategy into repeatable execution across global teams.",
    readTime: "6 min read",
  },
  {
    category: "Operations",
    title: "Designing Delivery Pods for Speed and Quality",
    description:
      "How cross-functional pods reduce handoffs and keep momentum high during rapid scaling.",
    readTime: "8 min read",
  },
  {
    category: "Growth",
    title: "Attribution Setups That Leadership Actually Trusts",
    description:
      "How to improve data confidence before scaling paid and lifecycle channels in 2026.",
    readTime: "7 min read",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Actionable Ideas for <br />
              <span className="text-slate-400">Growth Teams.</span>
            </h2>
          </div>
          <button className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-black transition-colors group">
            Explore All Articles
            <ChevronRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        {/* BLOG GRID */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid lg:grid-cols-3 gap-0 border-l border-slate-100"
        >
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative p-10 border-r border-b border-slate-100 hover:bg-slate-50/50 transition-all duration-500 cursor-pointer"
            >
              <div className="absolute top-0 left-0 w-0 h-1 bg-black group-hover:w-full transition-all duration-500" />

              <div className="flex flex-col h-full space-y-6">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                    {post.category}
                  </span>
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    className="p-2 rounded-full bg-slate-50 text-slate-400 group-hover:bg-black group-hover:text-white transition-all duration-300"
                  >
                    <ArrowUpRight size={16} />
                  </motion.div>
                </div>

                <div className="flex-grow space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight group-hover:text-slate-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {post.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest pt-6 border-t border-slate-50">
                  <Clock size={14} />
                  {post.readTime}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
