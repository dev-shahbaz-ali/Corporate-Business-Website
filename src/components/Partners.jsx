import React from "react";
import { Cpu, Zap, Globe, Shield, CreditCard, Layers } from "lucide-react";

const partners = [
  { name: "Shopify Plus", icon: <Layers size={20} /> },
  { name: "HubSpot", icon: <Cpu size={20} /> },
  { name: "Webflow", icon: <Globe size={20} /> },
  { name: "Figma", icon: <Zap size={20} /> },
  { name: "Stripe", icon: <CreditCard size={20} /> },
  { name: "Notion", icon: <Shield size={20} /> },
];

const Partners = () => {
  return (
    <section className="py-20 bg-white overflow-hidden border-y border-slate-100">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
          Trusted Tools Behind Our Delivery
        </h2>
      </div>

      {/* INFINITE SCROLL CONTAINER */}
      <div className="relative flex overflow-x-hidden group">
        <div className="flex py-4 whitespace-nowrap animate-marquee group-hover:pause-marquee">
          {/* First set of partners */}
          {partners.concat(partners).map((partner, index) => (
            <div
              key={index}
              className="mx-6 flex items-center gap-3 px-8 py-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all cursor-default group/pill"
            >
              <span className="text-slate-400 group-hover/pill:text-blue-600 transition-colors">
                {partner.icon}
              </span>
              <span className="text-lg font-bold text-slate-700 group-hover/pill:text-slate-900 transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Optional: Second row moving in opposite direction */}
      <div className="relative flex overflow-x-hidden mt-4 group">
        <div className="flex py-4 whitespace-nowrap animate-marquee-reverse group-hover:pause-marquee">
          {partners.concat(partners).map((partner, index) => (
            <div
              key={index}
              className="mx-6 flex items-center gap-3 px-8 py-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all cursor-default group/pill"
            >
              <span className="text-slate-400 group-hover/pill:text-indigo-600 transition-colors">
                {partner.icon}
              </span>
              <span className="text-lg font-bold text-slate-700 group-hover/pill:text-slate-900 transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
