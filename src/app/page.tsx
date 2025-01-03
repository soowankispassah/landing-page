"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
//import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
//import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      {/* <Blog /> */}
      <Contact />
    </div>
  );
}
