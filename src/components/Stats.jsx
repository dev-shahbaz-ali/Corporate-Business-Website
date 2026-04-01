import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useSpring,
  useTransform,
  useInView as useFramerInView,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TrendingUp, Users, Globe2, Banknote } from "lucide-react";

const Counter = ({ end, duration = 2000 }) => {
  const ref = useRef(null);
  const inView = useFramerInView(ref, { once: true });

  const springValue = useSpring(0, {
    duration: 3000,
    bounce: 0,
  });
  const displayValue = useTransform(springValue, (latest) =>
    Math.floor(latest),
  );
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (inView) springValue.set(end);
  }, [inView, end, springValue]);

  useEffect(() => {
    return displayValue.on("change", (latest) => setCurrent(latest));
  }, [displayValue]);

  return <span ref={ref}>{current}</span>;
};

const stats = [
  {
    label: "Brands supported",
    value: 240,
    suffix: "+",
    detail: "Startup to enterprise programs",
    icon: <Users size={24} />,
  },
  {
    label: "Client retention",
    value: 95,
    suffix: "%",
    detail: "Long-term growth partnerships",
    icon: <TrendingUp size={24} />,
  },
  {
    label: "Markets launched",
    value: 42,
    suffix: "",
    detail: "International campaigns",
    icon: <Globe2 size={24} />,
  },
  {
    label: "Revenue influenced",
    value: 160,
    suffix: "M+",
    detail: "Measured through CRM",
    icon: <Banknote size={24} />,
  },
];

const Stats = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`p-8 rounded-[2rem] border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 group ${stat.bg}`}
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-500">
                {stat.icon}
              </div>

              <div className="flex items-baseline gap-1 mb-2">
                <h2 className="text-5xl font-black text-slate-900 tracking-tighter">
                  <Counter end={stat.value} />
                  <span className="text-slate-400">{stat.suffix}</span>
                </h2>
              </div>

              <h3 className="text-lg font-bold text-slate-800 mb-2">
                {stat.label}
              </h3>

              <p className="text-sm text-slate-500 leading-relaxed">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
