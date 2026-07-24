import { WorkflowStep, AntiPattern } from '@/data/tools';

export function StepFlow({ steps }: { steps: WorkflowStep[] }) {
  return (
    <>
      {/* Horizontal on desktop, connected by a line behind the circles */}
      <div className="hidden md:grid grid-cols-5 gap-5 relative">
        <div className="absolute top-[18px] left-[10%] right-[10%] h-px bg-text-muted/40" />
        {steps.map((step, i) => (
          <div key={step.title} className="relative flex flex-col items-center text-center">
            <div className="w-9 h-9 rounded-full bg-accent text-white font-semibold text-sm flex items-center justify-center mb-3 relative z-10">
              {i + 1}
            </div>
            <h3 className="text-sm font-semibold mb-1.5 leading-snug">{step.title}</h3>
            <p className="text-[13px] text-text-dim leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Vertical on mobile */}
      <div className="md:hidden relative border-l-2 border-text-muted/30 ml-4 pl-7 flex flex-col gap-7">
        {steps.map((step, i) => (
          <div key={step.title} className="relative">
            <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-accent text-white font-semibold text-[13px] flex items-center justify-center">
              {i + 1}
            </div>
            <h3 className="text-sm font-semibold mb-1 pt-1.5">{step.title}</h3>
            <p className="text-[13px] text-text-dim leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export function AvoidItem({ pattern }: { pattern: AntiPattern }) {
  return (
    <div className="flex gap-4">
      <span className="text-text-muted text-sm w-7 shrink-0 pt-0.5 text-right">&#10005;</span>
      <div>
        <h3 className="text-[15px] font-semibold mb-1">{pattern.title}</h3>
        <p className="text-sm text-text-dim leading-relaxed max-w-[600px]">{pattern.description}</p>
      </div>
    </div>
  );
}

export function AvoidList({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-6">{children}</div>;
}
