'use client';
import React, { useEffect, useRef } from 'react';

interface Language {
  name: string;
  proficiency: string;
  level: number;
  accentColor: string;
  bgColor: string;
}

const languages: Language[] = [
  { name: 'Telugu', proficiency: 'Native', level: 100, accentColor: 'border-neo-yellow', bgColor: 'bg-neo-yellow' },
  { name: 'English', proficiency: 'Fluent', level: 95, accentColor: 'border-neo-green', bgColor: 'bg-neo-green' },
  { name: 'Hindi', proficiency: 'Fluent', level: 90, accentColor: 'border-neo-blue', bgColor: 'bg-neo-blue' },
  { name: 'Tamil', proficiency: 'Conversational', level: 60, accentColor: 'border-neo-pink', bgColor: 'bg-neo-pink' },
];

const hobbies = [
  { icon: 'ri-football-fill', label: 'Football', desc: 'Playing & following the sport closely', color: 'bg-neo-green' },
  { icon: 'ri-book-open-fill', label: 'Reading', desc: 'Books & technology content', color: 'bg-neo-yellow' },
  { icon: 'ri-film-fill', label: 'Watching', desc: 'Documentaries, movies & anime', color: 'bg-neo-pink' },
  { icon: 'ri-code-s-slash-line', label: 'Building', desc: 'Exploring new tech & side projects', color: 'bg-neo-blue' },
  { icon: 'ri-brain-fill', label: 'Learning', desc: 'Hands-on projects & experimentation', color: 'bg-neo-purple' },
];

export default function LanguagesHobbies() {
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
      id="languages"
      ref={sectionRef}
      className="py-24 bg-neo-black text-white border-y-4 border-black relative overflow-hidden"
    >
      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Languages */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-4 border-white pb-4 reveal">
            <h2 className="text-5xl md:text-7xl font-black uppercase text-white tracking-tighter font-display">
              LANG<span className="text-neo-yellow">_UAGES</span>
            </h2>
            <p className="font-mono text-neo-green text-sm font-bold">/// MULTILINGUAL_SYSTEM</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className={`bg-neo-black border-4 ${lang.accentColor} p-6 shadow-hard hover:shadow-hard-xl transition-all`}
              >
                <div className={`${lang.bgColor} border-b-4 border-black -mx-6 -mt-6 px-6 py-3 mb-4`}>
                  <span className="font-mono text-xs font-bold text-black uppercase">{lang.proficiency}</span>
                </div>
                <h3 className="text-3xl font-black font-display mb-3">{lang.name}</h3>
                {/* Progress bar */}
                <div className="h-3 bg-white/10 border-2 border-white/20 relative overflow-hidden">
                  <div
                    className={`h-full ${lang.bgColor} transition-all duration-1000`}
                    style={{ width: `${lang.level}%` }}
                  />
                </div>
                <p className="font-mono text-xs text-gray-400 mt-2">{lang.level}% proficiency</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hobbies */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-4 border-white pb-4 reveal">
            <h2 className="text-5xl md:text-7xl font-black uppercase text-white tracking-tighter font-display">
              HOBB<span className="text-neo-pink">_IES</span>
            </h2>
            <p className="font-mono text-neo-green text-sm font-bold">/// INTERESTS_LOG</p>
          </div>

          <div className="flex flex-wrap gap-4 reveal">
            {hobbies.map((hobby) => (
              <div
                key={hobby.label}
                className="group bg-neo-black border-4 border-white/20 p-4 shadow-hard hover:border-white transition-all flex items-center gap-4 min-w-[200px]"
              >
                <div className={`w-12 h-12 ${hobby.color} border-2 border-white flex items-center justify-center flex-shrink-0`}>
                  <i className={`${hobby.icon} text-2xl text-black`}></i>
                </div>
                <div>
                  <p className="font-black text-lg font-display">{hobby.label}</p>
                  <p className="font-mono text-xs text-gray-400">{hobby.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
