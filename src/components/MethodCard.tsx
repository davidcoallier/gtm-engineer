import { MethodologyStep } from '@/data/tools';

const stepColors = {
  cyan: 'text-accent/20',
  green: 'text-green/20',
  amber: 'text-amber/20',
  pink: 'text-pink/20',
  purple: 'text-purple/20',
  red: 'text-red/20',
};

export function MethodCard({ step }: { step: MethodologyStep }) {
  return (
    <div className="bg-surface border border-border rounded-[10px] p-6">
      <div className={`font-mono text-[32px] font-bold leading-none mb-2 ${stepColors[step.color]}`}>
        {step.number}
      </div>
      <h3 className="text-[15px] font-semibold mb-1.5">{step.title}</h3>
      <p className="text-[13px] text-text-dim leading-relaxed">{step.description}</p>
    </div>
  );
}

export function MethodGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {children}
    </div>
  );
}
