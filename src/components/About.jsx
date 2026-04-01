import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Users, Globe, Target, ArrowRight } from "lucide-react";

const features = [
  {
    icon: <Award />,
    title: "Conversion-Focused",
    description:
      "Every engagement is anchored to a measurable growth objective.",
  },
  {
    icon: <Users />,
    title: "Integrated Team",
    description: "Brand, design, dev, and media working from one playbook.",
  },
  {
    icon: <Globe />,
    title: "Global Support",
    description: "Localized execution for multi-market campaigns and launches.",
  },
  {
    icon: <Target />,
    title: "Long-Term Growth",
    description: "We stay after launch to optimize and scale outcomes.",
  },
];

const About = () => {
  const { scrollYProgress } = useScroll();
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight mb-6 tracking-tighter"
              >
                Agency Speed with <br />
                <span className="text-slate-400 italic">
                  Enterprise Precision.
                </span>
              </motion.h2>
              <p className="text-xl text-slate-500 leading-relaxed font-medium">
                From positioning and creative direction to funnel engineering,
                we build connected systems that improve the way brands grow.
              </p>
            </div>

            {/* FEATURES LIST */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.4 }}
              className="grid sm:grid-cols-2 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group cursor-default"
                >
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-white transition-all duration-300">
                    {React.cloneElement(feature.icon, { size: 22 })}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-slate-500 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-black transition-all flex items-center gap-3 group">
                Talk to Strategy Team
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </motion.div>

          {/* RIGHT CONTENT: BENTO GALLERY */}
          <div className="grid grid-cols-12 gap-4 h-[600px]">
            {/* Main Tall Image */}
            <motion.div style={{ y: imgY }} className="col-span-7 h-full">
              <motion.img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Workshop"
                className="w-full h-full object-cover rounded-[2rem] border-8 border-slate-50 shadow-xl"
              />
            </motion.div>
            {/* Right Stack */}
            <div className="col-span-5 grid grid-rows-2 gap-4 h-full">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80"
                alt="Team"
                className="w-full h-full object-cover rounded-[2rem] shadow-lg"
              />
              <div className="bg-black rounded-[2rem] p-8 flex flex-col justify-between text-white shadow-lg">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Target size={20} />
                </div>
                <div>
                  <p className="text-3xl font-black italic tracking-tighter">
                    98%
                  </p>
                  <p className="text-xs font-medium opacity-80 uppercase tracking-widest">
                    Client Success Rate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
