import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail, Plus } from "lucide-react";

const team = [
  {
    name: "Sarah Chen",
    role: "Founder & Growth Director",
    bio: "Shapes strategic direction and ensures delivery maps to business impact.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80",
  },
  {
    name: "Michael Rodriguez",
    role: "Creative Tech Lead",
    bio: "Leads digital experience builds and platform implementation quality.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=80",
  },
  {
    name: "Dr. Emily Watson",
    role: "Head of Insights",
    bio: "Connects product and marketing data to actionable growth strategy.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80",
  },
  {
    name: "James Kim",
    role: "Client Success Partner",
    bio: "Owns execution quality, communication rhythm, and delivery momentum.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&q=80",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-slate-50/50">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Senior Specialists on <br />
            <span className="text-slate-400 italic">Every Engagement.</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            You work directly with experienced operators, not handoffs. Our team
            becomes an extension of your growth engine.
          </p>
        </motion.div>

        {/* TEAM GRID */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1 },
              }}
              className="group relative"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-slate-100 mb-6 border border-slate-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
              </div>

              {/* Text Info */}
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  {member.name}
                </h3>
                <p className="text-slate-400 text-sm font-black uppercase tracking-widest mb-3">
                  {member.role}
                </p>
                <p className="text-slate-500 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
