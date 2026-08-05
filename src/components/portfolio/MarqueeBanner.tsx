'use client';
import React from 'react';

const marqueeItems = [
  '/// OPEN FOR INTERNSHIPS',
  '/// FULL STACK DEVELOPMENT',
  '/// AI & MACHINE LEARNING',
  '/// NEXT.JS & REACT',
  '/// TYPESCRIPT',
  '/// NODE.JS',
  '/// POSTGRESQL',
  '/// PARUL UNIVERSITY',
  '/// B.TECH CSE (AI)',
  '/// OPEN FOR INTERNSHIPS',
  '/// FULL STACK DEVELOPMENT',
  '/// AI & MACHINE LEARNING',
];

export default function MarqueeBanner() {
  return (
    <div className="border-b-4 border-black bg-neo-blue py-3 relative z-20 overflow-hidden">
      <div className="marquee-container font-mono font-bold text-xl text-white">
        <div className="marquee-content">
          {marqueeItems?.map((item, i) => (
            <span key={i} className="mx-6 whitespace-nowrap">
              {item}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {marqueeItems?.map((item, i) => (
            <span key={`dup-${i}`} className="mx-6 whitespace-nowrap">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
