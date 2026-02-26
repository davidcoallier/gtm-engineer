'use client';

import { BadgeType } from '@/data/tools';

const badgeConfig: { type: BadgeType; label: string; color: string }[] = [
  { type: 'free', label: 'Free', color: 'bg-green/10 text-green border-green/30 hover:bg-green/20' },
  { type: 'freemium', label: 'Freemium', color: 'bg-green/10 text-green border-green/30 hover:bg-green/20' },
  { type: 'paid', label: 'Paid', color: 'bg-amber/10 text-amber border-amber/30 hover:bg-amber/20' },
  { type: 'api', label: 'API', color: 'bg-text-muted/10 text-text-muted border-text-muted/30 hover:bg-text-muted/20' },
  { type: 'core', label: 'Core', color: 'bg-accent/10 text-accent border-accent/30 hover:bg-accent/20' },
  { type: 'new', label: 'New', color: 'bg-purple/10 text-purple border-purple/30 hover:bg-purple/20' },
  { type: 'diy', label: 'DIY', color: 'bg-pink/10 text-pink border-pink/30 hover:bg-pink/20' },
];

interface FilterChipsProps {
  selected: BadgeType[];
  onChange: (selected: BadgeType[]) => void;
}

export function FilterChips({ selected, onChange }: FilterChipsProps) {
  const toggle = (type: BadgeType) => {
    if (selected.includes(type)) {
      onChange(selected.filter((t) => t !== type));
    } else {
      onChange([...selected, type]);
    }
  };

  const clearAll = () => onChange([]);

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs text-text-muted font-medium mr-1">Filter:</span>
      {badgeConfig.map(({ type, label, color }) => {
        const isSelected = selected.includes(type);
        return (
          <button
            key={type}
            onClick={() => toggle(type)}
            className={`
              px-3 py-1 text-xs font-medium rounded-full border transition-all
              ${isSelected
                ? color + ' ring-2 ring-offset-1 ring-offset-bg'
                : 'bg-surface text-text-muted border-border hover:border-text-muted/50'
              }
            `}
          >
            {label}
          </button>
        );
      })}
      {selected.length > 0 && (
        <button
          onClick={clearAll}
          className="px-2 py-1 text-xs text-text-muted hover:text-text transition-colors"
        >
          Clear
        </button>
      )}
    </div>
  );
}
