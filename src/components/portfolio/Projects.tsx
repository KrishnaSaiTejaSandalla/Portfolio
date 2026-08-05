'use client';
import React, { useEffect, useRef } from 'react';

interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  status?: string;
  accentColor: string;
  hoverColor: string;
  offset?: boolean;
}

const projects: Project[] = [
  {
    id: 'school-erp',
    name: 'EduPredict – AI Powered School Management SaaS Platform',
    description:
      'Developing a scalable SaaS-based School Management Platform designed to digitize academic and administrative operations. Building separate role-based portals for Admin, Teachers, Students, and Parents. Implementing attendance, examinations, assignments, notifications, analytics dashboards, and student performance tracking. Integrating AI-driven insights to assist educators with decision-making while following production-grade modular architecture, database optimization, and scalable backend practices.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Drizzle ORM', 'Better Auth', 'AI Integration'],
    status: 'ONGOING',
    accentColor: 'bg-neo-yellow',
    hoverColor: 'group-hover:text-neo-red',
    offset: false,
  },
  {
    id: 'delivor',
    name: 'Delivor Backend API',
    description:
      'Backend services for a food delivery platform with RESTful APIs for authentication, users, and orders. Implemented database models and business logic using MongoDB.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'REST APIs'],
    accentColor: 'bg-neo-blue',
    hoverColor: 'group-hover:text-neo-blue',
    offset: true,
  },
  {
    id: 'soccer-fits',
    name: 'Soccer Fits – Premium Football Jersey Experience Website',
    description:
      'Building an immersive luxury football jersey platform inspired by premium brand experiences. Developing cinematic scroll-driven animations using GSAP and frame-based storytelling, with interactive product storytelling instead of traditional ecommerce layouts. Implementing glassmorphism, parallax effects, and smooth transitions.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'GSAP', 'Three.js'],
    accentColor: 'bg-neo-green',
    hoverColor: 'group-hover:text-neo-green',
    offset: false,
  },
  {
    id: 'echoes',
    name: 'Echoes — Accessibility Platform',
    description:
      'A platform helping deaf and mute individuals communicate more effectively. Focused on accessibility, user-friendly design, and intuitive interfaces to improve inclusivity.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Accessibility'],
    accentColor: 'bg-neo-pink',
    hoverColor: 'group-hover:text-neo-pink',
    offset: true,
  },
  {
    id: 'traveloop',
    name: 'Lokavista',
    description:
      'A travel planning and booking platform with destination exploration and trip planning features. Focused on improving user experience and navigation design.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'UX Design'],
    accentColor: 'bg-neo-orange',
    hoverColor: 'group-hover:text-neo-orange',
    offset: false,
  },
  {
    id: 'ai-ml',
    name: 'AI & ML Models',
    description:
      'Built and experimented with multiple AI and Machine Learning models. Explored data preprocessing, model training, and evaluation techniques to strengthen practical AI understanding.',
    tech: ['Python', 'Machine Learning', 'Data Preprocessing', 'Model Training'],
    accentColor: 'bg-neo-purple',
    hoverColor: 'group-hover:text-neo-purple',
    offset: true,
  },
];

export default function Projects() {
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
      id="projects"
      ref={sectionRef}
      className="py-24 bg-neo-yellow border-t-4 border-black px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2
          className="text-6xl md:text-9xl font-black mb-16 uppercase tracking-tighter text-white font-display text-stroke"
          style={{ WebkitTextStroke: '3px black' }}
        >
          Selected Works
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`reveal group bg-white border-4 border-black p-4 shadow-hard hover:shadow-hard-xl transition-all ${
                project.offset ? 'mt-0 md:mt-20' : ''
              }`}
            >
              {/* Color band header */}
              <div className={`${project.accentColor} border-b-4 border-black -mx-4 -mt-4 px-4 py-3 mb-4 flex justify-between items-center`}>
                <span className="font-mono text-xs font-bold uppercase">
                  {project.status ? (
                    <span className="bg-neo-red text-white px-2 py-0.5 border border-black mr-2">
                      {project.status}
                    </span>
                  ) : null}
                  PROJECT
                </span>
                <a
                  href="https://github.com/krishnaSaiTejaSandalla/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border-2 border-black bg-neo-black text-white flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-hard-sm"
                >
                  <i className="ri-arrow-right-up-line text-xl"></i>
                </a>
              </div>

              {/* Project content */}
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3
                    className={`text-3xl font-black uppercase mb-3 transition-colors glitch-hover ${project.hoverColor} font-display`}
                  >
                    {project.name}
                  </h3>
                  <p className="font-mono text-sm mb-4 text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex gap-2 font-mono text-xs font-bold flex-wrap">
                    {project.tech.map((t) => (
                      <span key={t} className="bg-neo-black text-white px-2 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-24">
          <a
            href="https://github.com/krishnaSaiTejaSandalla/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-neo-black text-white px-12 py-5 font-bold font-mono text-xl hover:bg-neo-white hover:text-black border-4 border-black transition-all shadow-hard hover:shadow-none"
          >
            VIEW ALL REPOS ON GITHUB
          </a>
        </div>
      </div>
    </section>
  );
}
