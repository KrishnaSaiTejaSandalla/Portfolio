'use client';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4 border-t-8 border-neo-green font-mono relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-4xl font-black mb-6 font-display">Krishna Sai Teja Sandalla</h2>
          <p className="text-gray-400 max-w-sm font-mono">
            Building digital products that solve real problems. CS Engineering student specializing in AI,
            passionate about full-stack development and emerging technologies.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <div className="w-2 h-2 bg-neo-green rounded-full animate-pulse" />
            <span className="font-mono text-neo-green text-xs">OPEN TO OPPORTUNITIES</span>
          </div>
        </div>

        {/* Sitemap */}
        <div>
          <h3 className="font-bold text-neo-green mb-4 border-b border-gray-700 pb-2 uppercase text-sm">
            SITEMAP
          </h3>
          <ul className="space-y-2 text-gray-400">
            {[
              { href: '#about', label: 'About' },
              { href: '#education', label: 'Education' },
              { href: '#skills', label: 'Skills' },
              { href: '#projects', label: 'Works' },
              { href: '#certifications', label: 'Certifications' },
              { href: '#contact', label: 'Contact' },
            ]?.map((link) => (
              <li key={link?.href}>
                <button
                  onClick={() =>
                    document.querySelector(link?.href)?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="hover:text-white hover:underline decoration-neo-pink decoration-2 transition-colors"
                >
                  {link?.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-bold text-neo-green mb-4 border-b border-gray-700 pb-2 uppercase text-sm">
            CONNECT
          </h3>
          <div className="flex gap-4 mb-4">
            <a
              href="https://github.com/krishnaSaiTejaSandalla/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-neo-yellow transition-colors"
            >
              <i className="ri-github-fill"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/krishna-sai-teja-sandalla-47b98a304/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-neo-blue transition-colors"
            >
              <i className="ri-linkedin-fill"></i>
            </a>
            <a
              href="mailto:krishnasaitejasandalla@gmail.com"
              className="text-2xl hover:text-neo-pink transition-colors"
            >
              <i className="ri-mail-fill"></i>
            </a>
          </div>
          <div className="space-y-1 text-gray-400 text-sm">
            <p className="font-mono">krishnasaitejasandalla@gmail.com</p>
            <p className="font-mono">+91 9392979366</p>
            <p className="font-mono">Vadodara, Gujarat, India</p>
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="text-center mt-16 pt-8 border-t border-gray-800 text-gray-500 text-sm relative z-10">
        <p>© 2025 KST.exe // SYSTEM_END — Krishna Sai Teja Sandalla</p>
      </div>
      {/* Background text */}
      <div className="absolute bottom-0 left-0 w-full text-[20vw] font-black text-white opacity-[0.03] leading-none select-none pointer-events-none text-center font-display">
        BRUTAL
      </div>
    </footer>
  );
}
