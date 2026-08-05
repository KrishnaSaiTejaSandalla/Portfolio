'use client';
import React, { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-4 max-w-5xl mx-auto"
    >
      <div className="bg-white border-4 border-black shadow-hard-xl p-8 md:p-12 relative reveal mt-12">
        {/* Floating label */}
        <div className="absolute -top-10 -left-4 md:-left-6 bg-neo-yellow border-4 border-black px-6 py-2 shadow-hard rotate-[-3deg]">
          <span className="font-black text-xl md:text-2xl font-display">START A PROJECT</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Info */}
          <div>
            <h2 className="text-5xl md:text-6xl font-black uppercase mb-6 leading-[0.85] font-display">
              Let&apos;s<br />Talk<br />Code.
            </h2>
            <p className="font-mono text-lg mb-8 text-gray-600">
              I am currently open to internships, freelance work, and full-time opportunities.
              Let&apos;s build something amazing together.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-neo-black text-white flex items-center justify-center border-2 border-black flex-shrink-0">
                  <i className="ri-mail-line text-xl"></i>
                </div>
                <a
                  href="mailto:krishnasaitejasandalla@gmail.com"
                  className="text-lg font-bold hover:bg-neo-yellow transition-colors break-all"
                >
                  krishnasaitejasandalla@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-neo-black text-white flex items-center justify-center border-2 border-black flex-shrink-0">
                  <i className="ri-phone-line text-xl"></i>
                </div>
                <a href="tel:+919392979366" className="text-lg font-bold hover:bg-neo-yellow transition-colors">
                  +91 9392979366
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-neo-black text-white flex items-center justify-center border-2 border-black flex-shrink-0">
                  <i className="ri-map-pin-line text-xl"></i>
                </div>
                <span className="text-lg font-bold">Vadodara, Gujarat, India</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-4 mt-8">
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
                className="w-12 h-12 bg-neo-black text-white border-2 border-black flex items-center justify-center neo-btn hover:bg-neo-blue"
              >
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          {submitted ? (
            <div className="py-20 text-center bg-gray-50 border-2 border-black flex flex-col items-center justify-center">
              <i className="ri-checkbox-circle-fill text-6xl text-neo-green mb-4 block"></i>
              <h3 className="text-2xl font-black uppercase font-display">Transmission Received</h3>
              <p className="font-mono text-sm mt-2 text-gray-600">
                System response initialized. I will reach out shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-6 border-2 border-black">
              <div className="flex flex-col">
                <label className="font-mono font-bold mb-1 uppercase text-xs">Identity</label>
                <input
                  type="text"
                  placeholder="NAME / COMPANY"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-white border-2 border-black p-3 font-bold focus:outline-none focus:bg-neo-yellow transition-all"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="font-mono font-bold mb-1 uppercase text-xs">Coordinates</label>
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-white border-2 border-black p-3 font-bold focus:outline-none focus:bg-neo-yellow transition-all"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="font-mono font-bold mb-1 uppercase text-xs">Transmission</label>
                <textarea
                  rows={4}
                  placeholder="PROJECT DETAILS..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="bg-white border-2 border-black p-3 font-bold focus:outline-none focus:bg-neo-yellow transition-all resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-neo-blue text-white font-black text-xl py-4 border-2 border-black neo-btn hover:bg-neo-black font-display"
              >
                TRANSMIT DATA
              </button>

              {/* Decorative status block */}
              <div className="border-2 border-black bg-neo-black text-white p-4 font-mono text-xs space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-neo-green inline-block animate-pulse"></span>
                  <span className="text-neo-green font-bold">SYSTEM ONLINE</span>
                </div>
                <div className="text-gray-400">// Response time: &lt; 24 hours</div>
                <div className="text-gray-400">// Available for: Internships · Freelance · Full-time</div>
                <div className="text-gray-400">// Location: Vadodara, Gujarat, India</div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
