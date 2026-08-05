'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reveals = sectionRef?.current?.querySelectorAll('.reveal');
    if (!reveals) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('active')),
      { threshold: 0.1 }
    );
    reveals?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-4 max-w-7xl mx-auto border-x-4 border-black bg-white my-12 shadow-hard-lg"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Avatar / Visual */}
        <div className="md:col-span-4 reveal">
          <div className="aspect-square bg-neo-yellow border-4 border-black relative shadow-hard overflow-hidden group">
            <Image
              src="/assets/images/Krishna-i2.png"
              alt="Krishna Sai Teja"
              width={720}
              height={720}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-2 left-2 bg-neo-red text-white px-2 font-mono text-xs border border-black z-10">
              AVATAR.JPG
            </span>
            <div className="absolute bottom-0 left-0 right-0 bg-black text-neo-green font-mono text-xs p-2">
              &gt; krishnasaiteja.init()
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="md:col-span-8 flex flex-col justify-center reveal">
          <h2 className="text-5xl md:text-6xl font-black uppercase mb-6 font-display">Who am I?</h2>
          <p className="font-mono text-lg leading-relaxed mb-6">
            I am{' '}
            <span className="bg-neo-yellow px-1 border border-black font-bold">Krishna Sai Teja</span>.
            A passionate CS Engineering student specializing in{' '}
            <span className="bg-neo-blue text-white px-1 border border-black font-bold">Artificial Intelligence</span>{' '}
            who believes in building real-world solutions that actually matter.
          </p>
          <p className="font-mono text-lg mb-6 text-gray-700 border-l-4 border-neo-purple pl-4">
            &gt; Specializing in Full-Stack Development & AI-powered applications.<br />
            &gt; Building modern web apps with Next.js, React, TypeScript & Node.js.<br />
            &gt; Constantly exploring emerging technologies and solving practical problems.<br />
            &gt; Seeking opportunities to contribute to innovative engineering teams.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-neo-black text-white px-4 py-2 font-mono text-sm border-2 border-transparent">
              📍 LOCATION: VADODARA, GUJARAT
            </div>
            <div className="bg-neo-green text-black px-4 py-2 font-mono text-sm border-2 border-black">
              🟢 STATUS: OPEN TO OPPORTUNITIES
            </div>
            <div className="bg-neo-yellow text-black px-4 py-2 font-mono text-sm border-2 border-black">
              🎓 B.TECH CSE (AI) — 2023–2027
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
