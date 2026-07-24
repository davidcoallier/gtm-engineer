export function Band({
  id,
  tone,
  children,
}: {
  id?: string;
  tone?: 'surface';
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 ${tone === 'surface' ? 'bg-surface border-y border-border' : ''}`}
    >
      <div className="max-w-[820px] mx-auto px-6 py-14 md:py-16">{children}</div>
    </section>
  );
}

export function SectionHeading({ title, lede }: { title: string; lede?: string }) {
  return (
    <div className="mb-8">
      <div className="w-12 h-[3px] bg-accent rounded-full mb-4" />
      <h2 className="text-[26px] font-bold tracking-tight">{title}</h2>
      {lede && <p className="text-[15px] text-text-dim mt-2 max-w-[620px]">{lede}</p>}
    </div>
  );
}

export function CategoryHeading({ label, intro }: { label: string; intro?: string }) {
  return (
    <div className="mt-12 mb-2 first:mt-0">
      <div className="w-7 h-[3px] bg-accent rounded-full mb-3" />
      <h3 className="text-base font-semibold">{label}</h3>
      {intro && <p className="text-sm text-text-muted mt-0.5">{intro}</p>}
    </div>
  );
}

export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-accent-dim border-l-2 border-accent py-4 px-5 rounded-r-lg mb-8">
      <p className="text-[15px] text-text-dim leading-relaxed">{children}</p>
    </div>
  );
}
