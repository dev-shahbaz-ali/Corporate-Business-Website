// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#case-studies" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if the current path matches the link
  const isActive = (href) => {
    const [pathname, hash] = href.split("#");
    const currentHash = location.hash || "";
    const targetHash = hash ? `#${hash}` : "";
    return location.pathname === pathname && currentHash === targetHash;
  };

  // Advanced Smooth Scroll Handler
  const handleNavClick = (e, href) => {
    const [pathname, hash] = href.split("#");

    if (location.pathname === pathname) {
      if (hash) {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else if (href === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed w-full z-50 transition-all duration-300 px-6 py-4 ${
        scrolled ? "top-4" : "top-0"
      }`}
    >
      {/* Advanced Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-black origin-left z-[60]"
        style={{ scaleX }}
      />

      <motion.div
        layout
        className={`max-w-7xl mx-auto transition-all duration-500 rounded-2xl border ${
          scrolled
            ? "bg-white/80 backdrop-blur-lg border-slate-200/50 shadow-lg py-3 px-6"
            : "bg-transparent border-transparent py-5 px-4"
        } flex items-center justify-between`}
      >
        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-black tracking-tighter text-black flex items-center gap-1"
        >
          Corp<span className="text-slate-400">Flow</span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-sm font-black uppercase tracking-widest transition-colors relative group ${
                isActive(item.href)
                  ? "text-black"
                  : "text-slate-400 hover:text-black"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-black transition-all duration-300 ${
                  isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="hidden md:block">
          <motion.button
            onClick={() => navigate("/contact")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative inline-flex items-center gap-2 px-7 py-3 overflow-hidden font-bold text-white transition-all bg-black rounded-full group hover:bg-slate-800 hover:ring-offset-2 hover:ring-2 hover:ring-slate-400 hover:shadow-xl hover:shadow-black/20 active:scale-95"
          >
            <span className="absolute inset-0 w-full h-full transition duration-500 ease-out opacity-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:opacity-100 group-hover:-translate-x-full translate-x-full skew-x-12" />
            <span className="relative flex items-center gap-2 text-white">
              Start Project
              <ArrowRight
                size={18}
                className="text-white transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </span>
          </motion.button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.div>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-40 md:hidden flex flex-col items-center justify-center gap-8"
            style={{ top: "80px" }}
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-3xl font-bold text-slate-900 hover:text-slate-500"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-black text-white px-10 py-4 rounded-full text-lg font-bold"
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
