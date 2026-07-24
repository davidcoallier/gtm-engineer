'use client';

import { useState, useEffect } from 'react';

const sections = [
  { id: 'methodology', label: 'Method' },
  { id: 'stack', label: 'Stack' },
  { id: 'signals', label: 'Signals' },
  { id: 'outreach', label: 'Outreach' },
  { id: 'avoid', label: 'Avoid' },
  { id: 'start', label: 'First month' },
  { id: 'build', label: 'Build' },
];

export function Nav() {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionElements = sections.map(s => ({
        id: s.id,
        el: document.getElementById(s.id),
      }));

      const current = sectionElements.find(({ el }) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom > 100;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all ${
        isScrolled ? 'bg-bg/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[820px] mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          <a href="#" className="font-semibold text-sm">
            GTM Engineering
          </a>
          <div className="hidden sm:flex items-center gap-0.5">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`px-2.5 py-1.5 text-[13px] border-b-2 transition-colors duration-200 ${
                  activeSection === section.id
                    ? 'text-text font-medium border-accent'
                    : 'text-text-muted border-transparent hover:text-text'
                }`}
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
