'use client';
import React, { useEffect } from 'react';

export default function CursorProgress() {
  useEffect(() => {
    // Custom cursor
    const cursor = document.getElementById('neo-cursor');
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const onMouseEnter = () => {
      cursor.style.width = '60px';
      cursor.style.height = '60px';
      cursor.style.backgroundColor = '#FBFF48';
      cursor.style.mixBlendMode = 'normal';
      cursor.style.border = '2px solid black';
      cursor.style.borderRadius = '0';
    };

    const onMouseLeave = () => {
      cursor.style.width = '24px';
      cursor.style.height = '24px';
      cursor.style.backgroundColor = '#fff';
      cursor.style.mixBlendMode = 'difference';
      cursor.style.border = 'none';
      cursor.style.borderRadius = '50%';
    };

    document.addEventListener('mousemove', onMouseMove);

    const interactiveEls = document.querySelectorAll('a, button, input, textarea, [data-cursor]');
    interactiveEls.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });

    // Progress bar
    const progressBar = document.getElementById('progress-bar');
    const onScroll = () => {
      if (!progressBar) return;
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + '%';
    };
    window.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      interactiveEls.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Custom cursor - desktop only */}
      <div
        id="neo-cursor"
        className="w-6 h-6 bg-white rounded-full border-2 border-black hidden lg:block"
        style={{ position: 'fixed', pointerEvents: 'none', zIndex: 9999, mixBlendMode: 'difference' }}
      />
      {/* Scroll progress bar */}
      <div
        id="progress-bar"
        style={{ width: '0%' }}
      />
    </>
  );
}
