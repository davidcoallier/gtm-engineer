'use client';

import { useState, useEffect } from 'react';

const sections = [
  { id: 'methodology', label: 'Methodology', number: '01' },
  { id: 'stack', label: 'Stack', number: '02' },
  { id: 'signals', label: 'Signals', number: '03' },
  { id: 'outreach', label: 'Outreach', number: '04' },
  { id: 'avoid', label: 'Avoid', number: '05' },
  { id: 'start', label: 'Start', number: '06' },
  { id: 'build', label: 'Build', number: '07' },
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
      <div className="max-w-[880px] mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          <a href="#" className="font-semibold text-sm">
            GTM Engineer
          </a>
          <div className="flex items-center gap-1">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  activeSection === section.id
                    ? 'bg-surface-2 text-text'
                    : 'text-text-muted hover:text-text hover:bg-surface'
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
