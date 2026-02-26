type Color = 'cyan' | 'green' | 'amber' | 'pink' | 'purple' | 'red';

const dotColors: Record<Color, string> = {
  cyan: 'bg-accent',
  green: 'bg-green',
  amber: 'bg-amber',
  pink: 'bg-pink',
  purple: 'bg-purple',
  red: 'bg-red',
};

const textColors: Record<Color, string> = {
  cyan: 'text-accent',
  green: 'text-green',
  amber: 'text-amber',
  pink: 'text-pink',
  purple: 'text-purple',
  red: 'text-red',
};

export function Section({ children }: { children: React.ReactNode }) {
  return <div className="mb-12">{children}</div>;
}

export function SectionLabel({ number, label, color }: { number: string; label: string; color: Color }) {
  return (
    <div className={`font-mono text-[11px] tracking-[0.1em] uppercase mb-5 flex items-center gap-2.5 ${textColors[color]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dotColors[color]}`} />
      {number} — {label}
    </div>
  );
}

export function SubLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-text-muted mt-6 mb-3 pl-0.5 first:mt-0">
      {children}
    </div>
  );
}

export function Divider() {
  return <div className="h-px bg-border my-12" />;
}

export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-surface-2 border-l-[3px] border-accent py-5 px-6 rounded-r-lg my-6">
      <p className="text-[15px] text-text-dim italic">{children}</p>
    </div>
  );
}
