'use client';
import React, { useEffect, useRef } from 'react';

export default function Education() {
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
      id="education"
      ref={sectionRef}
      className="py-24 px-4 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="mb-12 reveal">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter font-display">
          Education<span className="text-neo-blue">_Log</span>
        </h2>
        <div className="h-2 bg-neo-blue border-y-2 border-black mt-2 w-48" />
      </div>

      {/* Education Card – Parul University */}
      <div className="relative border-l-4 border-black ml-4 md:ml-10">
        <div className="reveal relative pl-8 md:pl-16 pb-12">
          {/* Timeline dot */}
          <div className="absolute -left-[14px] top-2 w-6 h-6 bg-neo-yellow border-4 border-black" />

          <div className="bg-white border-4 border-black p-6 md:p-8 shadow-hard hover:shadow-hard-xl transition-all">
            {/* Header band */}
            <div className="bg-neo-blue border-b-4 border-black -mx-6 md:-mx-8 -mt-6 md:-mt-8 px-6 md:px-8 py-4 mb-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                <h3 className="text-2xl md:text-3xl font-black uppercase text-white font-display">
                  Parul University
                </h3>
                <span className="font-mono font-bold bg-neo-black text-neo-yellow px-3 py-1 text-sm">
                  2023 – 2027
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-1">Degree</p>
                <p className="font-bold text-lg font-display">B.Tech in Computer Science & Engineering</p>
              </div>
              <div>
                <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-1">Specialization</p>
                <p className="font-bold text-lg font-display">
                  <span className="bg-neo-yellow px-1 border border-black">Artificial Intelligence</span>
                </p>
              </div>
              <div>
                <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-1">CGPA</p>
                <div className="flex items-center gap-2">
                  <span className="text-4xl font-black text-neo-blue font-display">8.0</span>
                  <span className="font-mono text-gray-500">/10</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t-2 border-dashed border-gray-300">
              <p className="font-mono text-sm text-gray-600">
                📍 Vadodara, Gujarat, India
              </p>
            </div>
          </div>
        </div>

        {/* Education Card – Maharshi Vidya Mandir (12th) */}
        <div className="reveal relative pl-8 md:pl-16 pb-12">
          {/* Timeline dot */}
          <div className="absolute -left-[14px] top-2 w-6 h-6 bg-neo-pink border-4 border-black" />

          <div className="bg-white border-4 border-black p-6 md:p-8 shadow-hard hover:shadow-hard-xl transition-all">
            {/* Header band */}
            <div className="bg-neo-pink border-b-4 border-black -mx-6 md:-mx-8 -mt-6 md:-mt-8 px-6 md:px-8 py-4 mb-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                <h3 className="text-2xl md:text-3xl font-black uppercase text-white font-display">
                  Maharshi Vidya Mandir
                </h3>
                <span className="font-mono font-bold bg-neo-black text-neo-yellow px-3 py-1 text-sm">
                  12TH GRADE
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-1">Board</p>
                <p className="font-bold text-lg font-display">Higher Secondary (12th)</p>
              </div>
              <div>
                <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-1">Score</p>
                <div className="flex items-center gap-2">
                  <span className="text-4xl font-black text-neo-pink font-display">76%</span>
                </div>
              </div>
              <div>
                <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-1">Location</p>
                <p className="font-mono text-sm text-gray-600">
                  📍 Hosur, Tamil Nadu, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Education Card – Samartha School (10th) */}
        <div className="reveal relative pl-8 md:pl-16">
          {/* Timeline dot */}
          <div className="absolute -left-[14px] top-2 w-6 h-6 bg-neo-green border-4 border-black" />

          <div className="bg-white border-4 border-black p-6 md:p-8 shadow-hard hover:shadow-hard-xl transition-all">
            {/* Header band */}
            <div className="bg-neo-green border-b-4 border-black -mx-6 md:-mx-8 -mt-6 md:-mt-8 px-6 md:px-8 py-4 mb-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                <h3 className="text-2xl md:text-3xl font-black uppercase text-black font-display">
                  Samartha School
                </h3>
                <span className="font-mono font-bold bg-neo-black text-neo-yellow px-3 py-1 text-sm">
                  10TH GRADE
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-1">Board</p>
                <p className="font-bold text-lg font-display">Secondary School (10th)</p>
              </div>
              <div>
                <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-1">Score</p>
                <div className="flex items-center gap-2">
                  <span className="text-4xl font-black text-neo-green font-display">91%</span>
                </div>
              </div>
              <div>
                <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-1">Location</p>
                <p className="font-mono text-sm text-gray-600">
                  📍 Mahabubnagar, Telangana, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
