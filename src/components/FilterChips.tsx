'use client';

import { BadgeType } from '@/data/tools';

const filters: { type: BadgeType; label: string }[] = [
  { type: 'free', label: 'Free' },
  { type: 'freemium', label: 'Free tier' },
  { type: 'paid', label: 'Paid' },
  { type: 'core', label: 'Start here' },
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

  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <span className="text-xs text-text-muted mr-1.5">Show only:</span>
      {filters.map(({ type, label }) => {
        const isSelected = selected.includes(type);
        return (
          <button
            key={type}
            onClick={() => toggle(type)}
            className={`px-3 py-1 text-xs font-medium rounded-full border transition-colors ${
              isSelected
                ? 'bg-text text-bg border-text'
                : 'bg-transparent text-text-dim border-border hover:border-text-muted'
            }`}
          >
            {label}
          </button>
        );
      })}
      {selected.length > 0 && (
        <button
          onClick={() => onChange([])}
          className="px-2 py-1 text-xs text-text-muted hover:text-text transition-colors"
        >
          Clear
        </button>
      )}
    </div>
  );
}
