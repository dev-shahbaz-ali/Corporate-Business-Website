import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Stats from "../components/Stats";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Hero />
      <Partners />
      <Stats />
      <Services />
      <Testimonials />
    </motion.main>
  );
};
export default Home;
