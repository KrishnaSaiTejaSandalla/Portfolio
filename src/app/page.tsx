import React from 'react';
import Navbar from '@/components/portfolio/Navbar';
import Hero from '@/components/portfolio/Hero';
import MarqueeBanner from '@/components/portfolio/MarqueeBanner';
import About from '@/components/portfolio/About';
import Education from '@/components/portfolio/Education';
import Skills from '@/components/portfolio/Skills';
import Projects from '@/components/portfolio/Projects';
import Certifications from '@/components/portfolio/Certifications';
import LanguagesHobbies from '@/components/portfolio/LanguagesHobbies';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';
import CursorProgress from '@/components/portfolio/CursorProgress';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neo-white text-neo-black font-display">
      {/* Cursor & Progress Bar */}
      <CursorProgress />

      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Marquee Banner */}
      <MarqueeBanner />

      {/* About */}
      <About />

      {/* Education */}
      <Education />

      {/* Skills */}
      <Skills />

      {/* Projects */}
      <Projects />

      {/* Certifications */}
      <Certifications />

      {/* Languages & Hobbies */}
      <LanguagesHobbies />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
