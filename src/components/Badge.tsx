import { BadgeType } from '@/data/tools';

export const pricingLabels: Record<BadgeType, string> = {
  free: 'Free',
  freemium: 'Free tier',
  paid: 'Paid',
  core: 'Start here',
};

export function PricingNote({ badges }: { badges: BadgeType[] }) {
  const pricing = badges.find((b) => b !== 'core');
  const isCore = badges.includes('core');

  return (
    <span className="text-xs text-text-muted whitespace-nowrap">
      {pricing && pricingLabels[pricing]}
      {isCore && (
        <span className="ml-2 text-accent font-medium">Start here</span>
      )}
    </span>
  );
}
