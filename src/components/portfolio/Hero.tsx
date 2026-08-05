'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reveals = heroRef?.current?.querySelectorAll('.reveal');
    if (!reveals) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.1 }
    );
    reveals?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center items-center px-4 pt-20 relative overflow-hidden border-b-4 border-black"
    >
      {/* Decorative shapes */}
      <div className="absolute top-1/3 left-[8%] w-16 h-16 bg-neo-blue border-4 border-black shadow-hard animate-bounce hidden lg:block rotate-12" />
      <div className="absolute bottom-1/3 right-[8%] w-24 h-24 bg-neo-pink rounded-full border-4 border-black shadow-hard hidden lg:block animate-pulse" />
      <div className="absolute top-24 right-16 w-12 h-12 bg-neo-yellow border-4 border-black shadow-hard hidden lg:block rotate-45" />
      <div className="absolute bottom-20 left-[15%] w-8 h-8 bg-neo-green border-4 border-black hidden lg:block" />
      <div className="absolute top-20 right-20 text-9xl opacity-5 font-black select-none pointer-events-none font-display">
        CODE
      </div>
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl">
        {/* Status badge */}
        <div className="inline-block bg-neo-white border-2 border-black px-4 py-1 mb-6 shadow-hard rotate-[-2deg] reveal">
          <span className="font-mono font-bold text-neo-green bg-black px-2 mr-2">●</span>
          <span className="font-mono font-bold">SYSTEM STATUS: ONLINE</span>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center mb-6 reveal">
          <div className="w-40 h-40 md:w-48 md:h-48 border-4 border-black shadow-hard bg-neo-yellow overflow-hidden rounded-none rotate-[-2deg]">
            <Image
              src="/assets/images/Krishna-i1.png"
              alt="Krishna Sai Teja Sandalla profile illustration"
              width={384}
              height={384}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-[11vw] md:text-[8vw] leading-[0.85] font-black uppercase tracking-tighter mb-4 reveal font-display">
          Krishna <span className="text-white text-stroke">Sai Teja</span>
        </h1>

        {/* Tagline */}
        <p className="font-mono text-lg md:text-2xl max-w-2xl mx-auto mb-10 bg-neo-yellow border-2 border-black p-4 shadow-hard reveal rotate-1">
          CS Engineering Student | AI Specialist | Full-Stack Developer
          <br />
          <b>Next.js • React • TypeScript • Node.js • Python</b>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 reveal">
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-black text-white border-2 border-black px-10 py-5 text-xl font-bold neo-btn hover:bg-neo-green hover:text-black font-display"
          >
            VIEW MY WORK
          </button>
          <a
            href="#contact"
            onClick={(e) => {
              e?.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-neo-white text-black border-2 border-black px-10 py-5 text-xl font-bold neo-btn hover:bg-neo-pink hover:text-black flex items-center justify-center gap-2 font-display"
          >
            <i className="ri-mail-send-line"></i>
            CONTACT ME
          </a>
          <a
            href="/Krishna_Sai_Teja_Sandalla_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neo-yellow text-black border-2 border-black px-10 py-5 text-xl font-bold neo-btn hover:bg-neo-blue hover:text-white flex items-center justify-center gap-2 font-display"
          >
            <i className="ri-download-line"></i>
            DOWNLOAD CV
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-8 reveal">
          <a
            href="https://github.com/krishnaSaiTejaSandalla/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-neo-black text-white border-2 border-black flex items-center justify-center neo-btn hover:bg-neo-yellow hover:text-black"
          >
            <i className="ri-github-fill text-xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/krishna-sai-teja-sandalla-47b98a304/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-neo-black text-white border-2 border-black flex items-center justify-center neo-btn hover:bg-neo-blue hover:text-white"
          >
            <i className="ri-linkedin-fill text-xl"></i>
          </a>
          <a
            href="mailto:krishnasaitejasandalla@gmail.com"
            className="w-12 h-12 bg-neo-black text-white border-2 border-black flex items-center justify-center neo-btn hover:bg-neo-pink hover:text-white"
          >
            <i className="ri-mail-fill text-xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
