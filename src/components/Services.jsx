import React from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  Shield,
  BarChart3,
  Users,
  Settings,
  Headphones,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <Cloud size={24} />,
    title: "Brand + Website Systems",
    description:
      "Positioning, identity, and high-converting websites for modern teams.",
    points: ["Brand strategy", "UI/UX design", "Web development"],
    color: "blue",
  },
  {
    icon: <Shield size={24} />,
    title: "Growth Marketing",
    description:
      "Performance channels and content programs aligned to revenue goals.",
    points: ["Paid media", "Lifecycle campaigns", "SEO growth"],
    color: "indigo",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Data + Attribution",
    description:
      "Clean reporting stacks that connect campaigns to business outcomes.",
    points: ["Tracking setup", "Dashboarding", "Attribution models"],
    color: "emerald",
  },
  {
    icon: <Users size={24} />,
    title: "Creative Production",
    description:
      "Scalable creative systems for campaigns, launches, and social.",
    points: ["Ad creative", "Landing pages", "Video snippets"],
    color: "purple",
  },
  {
    icon: <Settings size={24} />,
    title: "RevOps Enablement",
    description:
      "CRM and automation workflows that accelerate lead-to-revenue velocity.",
    points: ["HubSpot/Salesforce", "Automation", "Lead scoring"],
    color: "orange",
  },
  {
    icon: <Headphones size={24} />,
    title: "Embedded Agency Team",
    description:
      "Ongoing monthly collaboration for strategy, design, and execution.",
    points: [
      "Sprint support",
      "Prioritized backlog",
      "Continuous optimization",
    ],
    color: "rose",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-24 border-l-4 border-black pl-8"
        >
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight mb-6 tracking-tighter">
            A Full Growth Engine <br />
            <span className="text-slate-400 italic">
              Under One Strategic Partner.
            </span>
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed font-medium">
            We don't just ship projects; we engineer revenue systems. Our
            multi-disciplinary approach ensures your brand, product, and
            marketing operations work in total harmony.
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                borderColor: "#000",
                transition: { duration: 0.2 },
              }}
              className="group relative p-10 bg-white border border-slate-100 hover:border-black transition-all duration-500 overflow-hidden"
            >
              <div className="relative z-10">
                {/* ICON */}
                <motion.div
                  whileHover={{ rotate: 5 }}
                  className="w-14 h-14 bg-slate-50 text-slate-900 flex items-center justify-center mb-8 group-hover:bg-black group-hover:text-white transition-all duration-500"
                >
                  {service.icon}
                </motion.div>

                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                  {service.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* POINTS LIST */}
                <ul className="space-y-3 mb-8">
                  {service.points.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 bg-slate-200 group-hover:bg-black rounded-full" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* LINK */}
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-slate-900 group-hover:gap-4 transition-all"
                >
                  Explore Service
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ADDED BUSINESS PROCESS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 bg-slate-50 rounded-[4rem] border border-slate-100"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter">
                Our Strategic <br />
                <span className="text-slate-400">Blueprint.</span>
              </h3>
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    t: "Deep Audit",
                    d: "We dissect your existing tech stack and market positioning.",
                  },
                  {
                    step: "02",
                    t: "System Design",
                    d: "Crafting the connected narrative and conversion architecture.",
                  },
                  {
                    step: "03",
                    t: "Rapid Execution",
                    d: "Sprinting to launch with high-fidelity outputs.",
                  },
                ].map((s, i) => (
                  <div key={i} className="flex gap-6">
                    <span className="text-xl font-black text-slate-200">
                      {s.step}
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-900">{s.t}</h4>
                      <p className="text-sm text-slate-500">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-black p-10 rounded-[3rem] text-white">
              <p className="text-2xl font-medium italic leading-snug mb-8">
                "They didn't just give us a deck; they gave us a roadmap that
                actually works."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800" />
                <div>
                  <p className="font-bold text-sm uppercase">Marcus Aurelius</p>
                  <p className="text-xs text-slate-500">
                    Director of Ops, Stoic Inc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
