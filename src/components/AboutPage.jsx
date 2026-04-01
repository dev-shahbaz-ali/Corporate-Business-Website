import React from "react";
import { motion } from "framer-motion";
import About from "../components/About";
import Team from "../components/Team";
import Stats from "../components/Stats";

const AboutPage = () => {
  return (
    <motion.main
      className="pt-20"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <About />
      <Stats />
      <Team />
    </motion.main>
  );
};
export default AboutPage;
