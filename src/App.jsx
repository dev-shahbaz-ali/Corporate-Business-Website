// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import About from "./components/About";
import Services from "./components/Services";
import Stats from "./components/Stats";
import CaseStudies from "./components/CaseStudies";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import "./App.css";

// Home page component with all sections
const HomePage = () => {
  return (
    <>
      <Hero />
      <Partners />
      <About />
      <Services />
      <Stats />
      <CaseStudies />
      <Team />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
};

// About page component
const AboutPage = () => {
  return (
    <div className="pt-32 pb-20">
      <About />
    </div>
  );
};

// Services page component
const ServicesPage = () => {
  return (
    <div className="pt-32 pb-20">
      <Services />
    </div>
  );
};

// Portfolio page component
const PortfolioPage = () => {
  return (
    <div className="pt-32 pb-20">
      <CaseStudies />
    </div>
  );
};

// Blog page component
const BlogPage = () => {
  return (
    <div className="pt-32 pb-20">
      <Blog />
    </div>
  );
};

// Contact page component
const ContactPage = () => {
  return (
    <div className="pt-32 pb-20">
      <Contact />
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="app-shell">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
