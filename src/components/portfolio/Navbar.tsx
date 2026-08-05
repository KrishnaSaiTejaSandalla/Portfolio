'use client';
import React, { useState, useEffect } from 'react';

const navLinks = [
  { href: '#about', label: '/ABOUT' },
  { href: '#education', label: '/EDU' },
  { href: '#skills', label: '/SKILLS' },
  { href: '#projects', label: '/WORK' },
  { href: '#certifications', label: '/CERTS' },
  { href: '#contact', label: 'HIRE ME', accent: true },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 px-4 py-4 pointer-events-none">
        <div className={`max-w-7xl mx-auto flex justify-between items-center pointer-events-auto transition-transform ${scrolled ? 'scale-[0.98]' : ''}`}>
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-neo-white border-2 border-black px-4 py-1 text-xl font-black shadow-hard hover:bg-neo-yellow transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none font-display"
          >
            KST.exe
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-2 bg-white border-2 border-black p-2 shadow-hard">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-3 py-1 font-mono font-bold text-sm transition-colors ${
                  link.accent
                    ? 'bg-neo-yellow border border-black hover:bg-neo-pink' :'hover:bg-black hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden bg-neo-white border-2 border-black p-2 shadow-hard hover:bg-neo-yellow transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <i className={`ri-${menuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-neo-black flex flex-col items-center justify-center gap-6">
          <div className="absolute top-4 right-4">
            <button
              className="bg-neo-white border-2 border-black p-2 shadow-hard"
              onClick={() => setMenuOpen(false)}
            >
              <i className="ri-close-line text-2xl"></i>
            </button>
          </div>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`text-3xl font-black font-display uppercase transition-colors ${
                link.accent ? 'text-neo-yellow' : 'text-white hover:text-neo-green'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
