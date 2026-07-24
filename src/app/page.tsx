import { ToolRow, ToolList } from '@/components/Card';
import { StepFlow, AvoidItem, AvoidList } from '@/components/MethodCard';
import { Band, SectionHeading, CategoryHeading, Callout } from '@/components/Section';
import { PromptGrid } from '@/components/PromptCard';
import { Nav } from '@/components/Nav';
import { FilterProvider } from '@/components/ToolsFilter';
import {
  orchestrationTools,
  aiTools,
  codeTools,
  enrichmentTools,
  scrapingTools,
  backendTools,
  crmTools,
  landingTools,
  analyticsTools,
  signalTools,
  coldEmailTools,
  multiChannelTools,
  adsTools,
  workflowSteps,
  antiPatterns,
  weeklySteps,
  ToolCategory,
} from '@/data/tools';
import { buildPrompts } from '@/data/prompts';

function ToolSection({ category }: { category: ToolCategory }) {
  return (
    <>
      <CategoryHeading label={category.label} intro={category.intro} />
      <ToolList>
        {category.tools.map((tool) => (
          <ToolRow key={tool.name} tool={tool} />
        ))}
      </ToolList>
    </>
  );
}

export default function Home() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <header className="relative min-h-[calc(100svh-3.5rem)] flex flex-col justify-center max-w-[820px] mx-auto px-6 pb-24 pt-6">
        <h1 className="rise text-5xl md:text-[68px] font-bold leading-[1.06] tracking-tight mb-7">
          So you want to be a <span className="highlight">GTM engineer</span>.
        </h1>
        <p className="rise rise-1 text-xl md:text-2xl text-text-dim max-w-[700px] leading-normal mb-9">
          The tools worth using, the ones to skip, and how the work actually gets done. Written by people doing the job every day, not selling a course.
        </p>
        <p className="rise rise-2 text-lg md:text-xl text-text-dim leading-relaxed max-w-[740px]">
          <strong className="text-text font-semibold">A GTM engineer is a go-to-market person who can build,</strong>{' '}
          not an engineer sent to help sales. It&apos;s the same shift DevOps went through: infrastructure became code and a new role appeared. Revenue is going through it now. With AI and a small set of good tools, one person can do the work of a team, faster and with better data.
        </p>
        <a
          href="#methodology"
          className="rise rise-3 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-xs font-medium text-text-muted hover:text-text transition-colors"
        >
          Scroll for more
          <svg className="bob w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </header>

      {/* Methodology */}
      <Band id="methodology" tone="surface">
        <SectionHeading
          title="How the work gets done"
          lede="One loop, five steps, run every week. The tools below only matter if you work this way."
        />
        <StepFlow steps={workflowSteps} />
      </Band>

      <FilterProvider>
        {/* Core Stack */}
        <Band id="stack">
          <SectionHeading
            title="The stack"
            lede="You don't need all of these. Start with the ones marked start here, add the rest when you hit the bottleneck they solve."
          />
          <ToolSection category={orchestrationTools} />
          <ToolSection category={aiTools} />
          <ToolSection category={codeTools} />
          <ToolSection category={enrichmentTools} />
          <ToolSection category={scrapingTools} />
          <ToolSection category={backendTools} />
          <ToolSection category={crmTools} />
          <ToolSection category={landingTools} />
          <ToolSection category={analyticsTools} />
        </Band>

        {/* Signal Sources */}
        <Band id="signals" tone="surface">
          <SectionHeading
            title="Signal sources"
            lede="Signals beat lists. This is where the timing comes from."
          />
          <ToolList>
            {signalTools.tools.map((tool) => (
              <ToolRow key={tool.name} tool={tool} />
            ))}
          </ToolList>
        </Band>

        {/* Outreach & Distribution */}
        <Band id="outreach">
          <SectionHeading
            title="Outreach and distribution"
            lede="Where the pipeline actually gets made. Infrastructure first, then volume."
          />
          <ToolSection category={coldEmailTools} />
          <ToolSection category={multiChannelTools} />
          <ToolSection category={adsTools} />
        </Band>
      </FilterProvider>

      {/* What to Avoid */}
      <Band id="avoid" tone="surface">
        <SectionHeading title="What to avoid" />
        <Callout>
          The pattern behind all of these: &ldquo;AI SDR&rdquo; products that are just faster spam, monolithic outbound tools that feel like progress but don&apos;t convert, and six SaaS seats where a Google Sheet with Apps Script would do the job.
        </Callout>
        <AvoidList>
          {antiPatterns.map((pattern) => (
            <AvoidItem key={pattern.title} pattern={pattern} />
          ))}
        </AvoidList>
      </Band>

      {/* First Month */}
      <Band id="start">
        <SectionHeading
          title="Your first month"
          lede="Four weeks from nothing to a working pipeline machine. Every step uses free tiers or small budgets."
        />
        <div className="relative ml-2 border-l-2 border-border pl-8 flex flex-col gap-9">
          {weeklySteps.map((step) => (
            <div key={step.week} className="relative">
              <span className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-bg border-2 border-accent" />
              <h3 className="text-[15px] font-semibold mb-1">Week {step.week}: {step.title}</h3>
              <p className="text-sm text-text-dim leading-relaxed max-w-[600px]">{step.description}</p>
            </div>
          ))}
        </div>
      </Band>

      {/* Build With Claude Code */}
      <Band id="build" tone="surface">
        <SectionHeading
          title="Build your own tools"
          lede="Tools you can build yourself in 15 to 60 minutes with Claude Code. Open one, copy the prompt, paste it into your terminal."
        />
        <Callout>
          These are starting points, not scripts. Change them, combine them, or use them as a spark for something else entirely. The best GTM tools are the ones built for your exact workflow.
        </Callout>
        <PromptGrid prompts={buildPrompts} />
      </Band>

      {/* Footer */}
      <footer className="max-w-[820px] mx-auto px-6 py-12">
        <p className="text-sm text-text font-semibold mb-1">GTM Engineering</p>
        <p className="text-sm text-text-muted">Built by people doing the job, not talking about it.</p>
      </footer>
    </>
  );
}
