import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inquiry Received:", formData);
  };

  return (
    <section
      id="contact"
      className="py-32 bg-black text-white overflow-hidden relative"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-100/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT: CONTENT & INFO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-4xl md:text-8xl font-black tracking-tight mb-6 uppercase">
                Build the <br />
                <span className="text-slate-500">Path.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                Share your current challenges and target metrics. We return with
                a practical growth roadmap within 24 hours.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  icon: <Mail />,
                  label: "Email",
                  val: "sales@corpflow.com",
                  href: "mailto:sales@corpflow.com",
                },
                {
                  icon: <Phone />,
                  label: "Phone",
                  val: "+1 (234) 567-890",
                  href: "tel:+1234567890",
                },
                {
                  icon: <MapPin />,
                  label: "Office",
                  val: "123 Business Ave, San Francisco",
                  href: "#",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:text-black transition-all duration-300">
                    {React.cloneElement(item.icon, { size: 20 })}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                      {item.label}
                    </p>
                    <motion.a
                      whileHover={{ x: 5 }}
                      href={item.href}
                      className="text-xl font-bold text-slate-200 hover:text-white transition-colors flex items-center gap-2"
                    >
                      {item.val}
                      <ArrowUpRight size={16} className="text-slate-500" />
                    </motion.a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: FORM CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] border border-white/10 shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-8">Request Proposal</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-white focus:bg-white/10 transition-all"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Work Email"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-white focus:bg-white/10 transition-all"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="text"
                name="company"
                placeholder="Company Website"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-white focus:bg-white/10 transition-all"
                value={formData.company}
                onChange={handleChange}
              />
              <textarea
                name="message"
                rows="4"
                placeholder="How can we help you scale?"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-white focus:bg-white/10 transition-all resize-none"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:bg-slate-200 shadow-2xl shadow-white/10"
              >
                Send Inquiry <Send size={20} />
              </motion.button>
            </form>
            <p className="text-center text-slate-500 text-xs mt-6">
              Protected by reCAPTCHA. Privacy Policy & Terms apply.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
