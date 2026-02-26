'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { BadgeType } from '@/data/tools';
import { FilterChips } from './FilterChips';

interface FilterContextType {
  selectedBadges: BadgeType[];
  isVisible: (badges: BadgeType[]) => boolean;
}

const FilterContext = createContext<FilterContextType>({
  selectedBadges: [],
  isVisible: () => true,
});

export function useFilter() {
  return useContext(FilterContext);
}

export function FilterProvider({ children }: { children: ReactNode }) {
  const [selectedBadges, setSelectedBadges] = useState<BadgeType[]>([]);

  const isVisible = (badges: BadgeType[]) => {
    if (selectedBadges.length === 0) return true;
    return selectedBadges.some((selected) => badges.includes(selected));
  };

  return (
    <FilterContext.Provider value={{ selectedBadges, isVisible }}>
      <div className="sticky top-14 z-40 bg-bg/95 backdrop-blur-sm border-b border-border py-3 mb-8 -mx-6 px-6">
        <FilterChips selected={selectedBadges} onChange={setSelectedBadges} />
      </div>
      {children}
    </FilterContext.Provider>
  );
}
