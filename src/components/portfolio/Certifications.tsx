"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

interface Certification {
  id: string;
  name: string;
  org: string;
  image?: string;
  accentColor: string;
  skills: string[];
  description?: string;
  upcoming?: boolean;
}

const certifications: Certification[] = [
  {
    id: "gemini",
    name: "Getting Started with Gemini",
    org: "Great Learning Academy",
    image: "/assets/certifications/Prompt Engineering - Gemini.png",
    accentColor: "bg-neo-yellow",
    skills: [
      "Generative AI concepts",
      "Google Gemini capabilities",
      "AI productivity workflows",
      "AI-powered applications",
    ],
  },
  {
    id: "chatgpt",
    name: "Prompt Engineering for ChatGPT",
    org: "Great Learning Academy",
    image: "/assets/certifications/Prompt Engineering - ChatGPT.png",
    accentColor: "bg-neo-blue",
    skills: [
      "Prompt design techniques",
      "AI output quality",
      "Effective AI instructions",
      "AI tools for productivity and development",
    ],
  },
  {
    id: "tcs",
    name: "Career Edge – Young Professional",
    org: "Tata Consultancy Services (TCS iON)",
    image:
      "/assets/certifications/TCS iON Career Edge - Young Professional.png",
    accentColor: "bg-neo-pink",
    skills: [
      "Communication",
      "Workplace thinking",
      "Presentation",
      "Resume writing",
      "Interview preparation",
      "Problem-solving",
      "IT foundations",
    ],
    description:
      "Covered communication, workplace success, presentation skills, resume writing, interview skills, business etiquette, and IT foundations.",
  },
  {
    id: "data-visualisation",
    name: "Data Visualisation: Empowering Business with Effective Insights",
    org: "Tata / Forage Virtual Experience",
    image: "/assets/certifications/Data Visualisation.png",
    accentColor: "bg-neo-orange",
    skills: [
      "Business scenarios",
      "Data visualizations",
      "Effective dashboards",
      "Analytical insights",
    ],
    description:
      "Included practical tasks around framing business scenarios, choosing visuals, creating visuals, and communicating insights.",
  },
  {
    id: "tcs-genai",
    name: "TCS iON Career Edge - Generative AI Essentials",
    org: "Tata Consultancy Services (TCS iON)",
    image:
      "/assets/certifications/TCS iON Career Edge - Generative AI Essentials.png",
    accentColor: "bg-neo-green",
    skills: [
      "AI and machine learning foundations",
      "Generative AI fundamentals",
      "Prompt engineering and in-context learning",
      "Responsible and ethical AI",
      "Real-world AI implementation",
    ],
    description: "Completed on August 13, 2026.",
  },
  {
    id: "robotics-controls",
    name: "Robotics and Controls Job Simulation",
    org: "Johnson & Johnson MedTech / Forage",
    image: "/assets/certifications/Robotics and Controls Job Simulation.png",
    accentColor: "bg-neo-red",
    skills: [
      "Surgical robot-arm troubleshooting",
      "Delay diagnosis and resolution",
      "Surgical-arm design optimization",
      "Robotics responsiveness",
    ],
    description:
      "Completed practical tasks focused on diagnosing surgical robot-arm delays and improving responsiveness.",
  },
  {
    id: "advanced-azure-ai",
    name: "Advanced Azure: AI, Edge, & Future Cloud Technologies",
    org: "Infosys Springboard",
    image:
      "/assets/certifications/Advanced Azure AI, Edge, & Future Cloud Technologies.png",
    accentColor: "bg-neo-blue",
    skills: [
      "Azure AI",
      "Edge computing",
      "Cloud technologies",
      "Future-ready cloud solutions",
    ],
    description: "Completed on August 8, 2026.",
  },
  {
    id: "genai-analytics",
    name: "GenAI Powered Data Analytics",
    org: "Currently pursuing",
    accentColor: "bg-neo-purple",
    skills: [
      "GenAI for analytics",
      "Data-driven insights",
      "Coursework in progress",
    ],
    upcoming: true,
  },
  {
    id: "datacom-ai",
    name: "Partnering with AI in the Workplace",
    org: "Datacom",
    accentColor: "bg-neo-red",
    skills: [
      "AI workplace collaboration",
      "AI strategy",
      "Coursework in progress",
    ],
    upcoming: true,
  },
];

function CertificationCard({
  certification,
}: {
  certification: Certification;
}) {
  return (
    <article className="group bg-white border-4 border-black shadow-hard hover:shadow-hard-xl transition-all overflow-hidden w-[300px] sm:w-[340px] flex-shrink-0">
      <div
        className={`${certification.accentColor} border-b-4 border-black px-3 py-2 flex justify-between items-center`}
      >
        <span className="font-mono text-xs font-bold uppercase">
          {certification.upcoming ? "IN PROGRESS" : "CERTIFICATE"}
        </span>
        {certification.upcoming && (
          <span className="font-mono text-xs bg-neo-black text-white px-2 py-0.5">
            SOON
          </span>
        )}
      </div>

      <div className="p-3">
        {certification.image ? (
          <a
            href={certification.image}
            target="_blank"
            rel="noopener noreferrer"
            className="block border-2 border-black mb-3 overflow-hidden bg-gray-100"
            aria-label={`Open ${certification.name} certificate`}
          >
            <Image
              src={certification.image}
              alt={`${certification.name} certificate`}
              width={1200}
              height={850}
              className="w-full h-28 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </a>
        ) : (
          <div className="border-4 border-dashed border-gray-300 p-6 mb-3 flex flex-col items-center justify-center h-28">
            <i className="ri-time-line text-3xl text-gray-300 mb-1" />
            <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">
              UPDATING SOON
            </span>
          </div>
        )}

        <h3 className="text-lg font-black uppercase mb-1 font-display leading-tight">
          {certification.name}
        </h3>
        <p className="font-mono text-xs text-gray-600 mb-3">
          {certification.org}
        </p>
        <h4 className="font-mono text-xs font-bold uppercase border-b-2 border-black pb-1.5 mb-2">
          Skills gained
        </h4>
        <ul className="font-mono text-xs space-y-1 mb-2">
          {certification.skills.map((skill) => (
            <li key={skill} className="flex gap-2">
              <span className="text-neo-red font-bold">&gt;</span>
              <span>{skill}</span>
            </li>
          ))}
        </ul>
        {certification.description && (
          <p className="font-mono text-[11px] leading-relaxed text-gray-600 border-l-4 border-neo-purple pl-3">
            {certification.description}
          </p>
        )}
      </div>
    </article>
  );
}

export default function Certifications() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    if (!reveals) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting && entry.target.classList.add("active"),
        ),
      { threshold: 0.1 },
    );
    reveals.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="py-24 px-4 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="mb-12 reveal">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter font-display">
          CERTIFI<span className="text-neo-orange">CATIONS</span>
        </h2>
        <div className="h-2 bg-neo-orange border-y-2 border-black mt-2 w-48" />
        <p className="font-mono text-gray-500 mt-4 text-sm">
          &gt; Completed certifications. More learning experiences incoming.
        </p>
      </div>

      <div
        className="marquee-container -mx-4 px-4 reveal"
        aria-label="Certifications carousel"
      >
        <div className="marquee-content gap-8 py-4 hover:[animation-play-state:paused]">
          {certifications.map((certification) => (
            <CertificationCard
              key={certification.id}
              certification={certification}
            />
          ))}
          {certifications.map((certification) => (
            <CertificationCard
              key={`duplicate-${certification.id}`}
              certification={certification}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
