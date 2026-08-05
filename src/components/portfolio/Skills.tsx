'use client';
import React, { useEffect, useRef } from 'react';

interface SkillItem {
  label: string;
  category: string;
  hoverColor: string;
}

const skills: SkillItem[] = [
  { label: 'NEXT.JS', category: 'FRAMEWORK', hoverColor: 'hover:bg-neo-yellow' },
  { label: 'REACT', category: 'LIBRARY', hoverColor: 'hover:bg-white' },
  { label: 'TYPESCRIPT', category: 'LANGUAGE', hoverColor: 'hover:bg-neo-blue' },
  { label: 'NODE.JS', category: 'BACKEND', hoverColor: 'hover:bg-neo-green' },
  { label: 'PYTHON', category: 'LANGUAGE', hoverColor: 'hover:bg-neo-blue' },
  { label: 'JAVASCRIPT', category: 'LANGUAGE', hoverColor: 'hover:bg-neo-yellow' },
  { label: 'JAVA', category: 'LANGUAGE', hoverColor: 'hover:bg-neo-orange' },
  { label: 'C++', category: 'LANGUAGE', hoverColor: 'hover:bg-neo-purple' },
  { label: 'C', category: 'LANGUAGE', hoverColor: 'hover:bg-neo-pink' },
  { label: 'TAILWIND', category: 'STYLING', hoverColor: 'hover:bg-neo-pink' },
  { label: 'POSTGRESQL', category: 'DATABASE', hoverColor: 'hover:bg-neo-blue' },
  { label: 'MONGODB', category: 'DATABASE', hoverColor: 'hover:bg-neo-green' },
  { label: 'EXPRESS.JS', category: 'BACKEND', hoverColor: 'hover:bg-white' },
  { label: 'DRIZZLE ORM', category: 'ORM', hoverColor: 'hover:bg-neo-yellow' },
  { label: 'GIT', category: 'VERSION', hoverColor: 'hover:bg-neo-orange' },
  { label: 'GITHUB', category: 'OPS', hoverColor: 'hover:bg-white' },
  { label: 'VERCEL', category: 'DEPLOY', hoverColor: 'hover:bg-neo-purple' },
  { label: 'POSTMAN', category: 'TOOLS', hoverColor: 'hover:bg-neo-orange' },
  { label: 'HTML5', category: 'CORE', hoverColor: 'hover:bg-neo-orange' },
  { label: 'CSS3', category: 'STYLING', hoverColor: 'hover:bg-neo-blue' },
  { label: 'REST APIs', category: 'BACKEND', hoverColor: 'hover:bg-neo-green' },
  { label: 'AI/ML', category: 'AI', hoverColor: 'hover:bg-neo-pink' },
  { label: 'PROMPT ENG.', category: 'AI', hoverColor: 'hover:bg-neo-yellow' },
  { label: 'MYSQL', category: 'DATABASE', hoverColor: 'hover:bg-neo-purple' },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    if (!reveals) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('active')),
      { threshold: 0.1 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-neo-black text-neo-white border-y-4 border-black relative overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-4 border-white pb-4 reveal">
          <h2 className="text-6xl md:text-8xl font-black uppercase text-white tracking-tighter font-display">
            TECH<span className="text-neo-green">_STACK</span>
          </h2>
          <div className="flex items-center gap-2 mb-2 md:mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            <p className="font-mono text-neo-green text-sm font-bold">/// SYSTEM_OPTIMIZED</p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center md:justify-start reveal">
          {skills.map((skill) => (
            <div
              key={skill.label}
              className={`group w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 h-24 border-r-2 border-b-2 border-white/20 bg-neo-black ${skill.hoverColor} transition-all duration-0 hover:z-10 relative flex flex-col items-center justify-center p-2 cursor-pointer`}
            >
              <div className="text-neo-green group-hover:text-black font-mono text-xs mb-1 opacity-50">
                &gt;_ {skill.category}
              </div>
              <div className="text-white group-hover:text-black font-black font-display text-lg uppercase">
                {skill.label}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t-4 border-white mt-8 pt-4 flex justify-between font-mono text-xs text-gray-500">
          <span>TOTAL_NODES: {skills.length}</span>
          <span>MEMORY_USAGE: 256MB</span>
        </div>
      </div>
    </section>
  );
}
