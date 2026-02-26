import { BadgeType } from '@/data/tools';

const badgeStyles: Record<BadgeType, string> = {
  free: 'bg-green-dim text-green border-green/20',
  paid: 'bg-amber-dim text-amber border-amber/20',
  freemium: 'bg-green-dim text-green border-green/20',
  api: 'bg-white/[0.04] text-text-muted border-white/[0.08]',
  core: 'bg-accent-dim text-accent border-accent/20',
  new: 'bg-purple-dim text-purple border-purple/20',
  diy: 'bg-pink-dim text-pink border-pink/20',
};

const badgeLabels: Record<BadgeType, string> = {
  free: 'Free',
  paid: 'Paid',
  freemium: 'Freemium',
  api: 'API',
  core: 'Start Here',
  new: 'New',
  diy: 'DIY',
};

export function Badge({ type }: { type: BadgeType }) {
  return (
    <span className={`font-mono text-[10px] tracking-wide px-2 py-0.5 rounded border uppercase font-medium whitespace-nowrap ${badgeStyles[type]}`}>
      {badgeLabels[type]}
    </span>
  );
}
