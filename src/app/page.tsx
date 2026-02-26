import { Card, CardGrid, StackRow } from '@/components/Card';
import { MethodCard, MethodGrid } from '@/components/MethodCard';
import { Section, SectionLabel, SubLabel, Divider, Callout } from '@/components/Section';
import { PromptGrid } from '@/components/PromptCard';
import { Nav } from '@/components/Nav';
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
  methodologySteps,
  antiPatterns,
  weeklySteps,
  ToolCategory,
  Tool,
} from '@/data/tools';
import { buildPrompts } from '@/data/prompts';

function ToolSection({ category }: { category: ToolCategory }) {
  return (
    <>
      <SubLabel>{category.label}</SubLabel>
      <CardGrid>
        {category.tools.map((row, i) => (
          row.length === 1 ? (
            <Card key={i} tool={row[0]} />
          ) : (
            <StackRow key={i}>
              {row.map((tool) => (
                <Card key={tool.name} tool={tool} />
              ))}
            </StackRow>
          )
        ))}
      </CardGrid>
    </>
  );
}

function SignalSection({ tools }: { tools: Tool[][] }) {
  return (
    <CardGrid>
      {tools.map((row, i) => (
        <StackRow key={i}>
          {row.map((tool) => (
            <Card key={tool.name} tool={tool} />
          ))}
        </StackRow>
      ))}
    </CardGrid>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <div className="max-w-[880px] mx-auto px-6 py-12 md:py-16">
        {/* Header */}
        <header className="mb-14">
          <div className="inline-block font-mono text-[11px] tracking-[0.08em] uppercase text-accent bg-accent-dim border border-accent/15 px-3 py-1.5 rounded mb-5">
            GTM Engineers Dublin
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-4">
            Start Here. <span className="text-text-muted">Work Smarter, Move Faster.</span>
          </h1>
          <p className="text-lg text-text-dim max-w-[600px] leading-relaxed">
            A practical guide to AI-native go-to-market — the tools, the methodology, and the mindset. From people actually doing it.
          </p>
        </header>

        {/* Thesis */}
        <div className="bg-surface border border-border rounded-xl p-8 mb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          <p className="text-base text-text-dim leading-relaxed">
            <strong className="text-text font-semibold">The GTM Engineer is a new role</strong> — a go-to-market person who can build, not an engineer told to help sales. Think of DevOps: it didn&apos;t evolve from sysadmins, it emerged as something entirely new when infrastructure became code. The same thing is happening in revenue. AI and the right tools let you move at a fundamentally different speed.
          </p>
        </div>

        {/* 01: Methodology */}
        <section id="methodology" className="scroll-mt-20">
          <Section>
            <SectionLabel number="01" label="The Methodology" color="cyan" />
            <MethodGrid>
              {methodologySteps.map((step) => (
                <MethodCard key={step.number} step={step} />
              ))}
            </MethodGrid>
          </Section>
        </section>

        {/* 02: Core Stack */}
        <section id="stack" className="scroll-mt-20">
          <Section>
            <SectionLabel number="02" label="The Core Stack" color="green" />
            <ToolSection category={orchestrationTools} />
            <ToolSection category={aiTools} />
            <ToolSection category={codeTools} />
            <ToolSection category={enrichmentTools} />
            <ToolSection category={scrapingTools} />
            <ToolSection category={backendTools} />
            <ToolSection category={crmTools} />
            <ToolSection category={landingTools} />
            <ToolSection category={analyticsTools} />
          </Section>
        </section>

        {/* 03: Signal Sources */}
        <section id="signals" className="scroll-mt-20">
          <Section>
            <SectionLabel number="03" label="Signal Sources" color="amber" />
            <SignalSection tools={signalTools} />
          </Section>
        </section>

        {/* 04: Outreach & Distribution */}
        <section id="outreach" className="scroll-mt-20">
          <Section>
            <SectionLabel number="04" label="Outreach & Distribution" color="pink" />
            <ToolSection category={coldEmailTools} />
            <ToolSection category={multiChannelTools} />
            <ToolSection category={adsTools} />
          </Section>
        </section>

        <Divider />

        {/* 05: What to Avoid */}
        <section id="avoid" className="scroll-mt-20">
          <Section>
            <SectionLabel number="05" label="What to Avoid" color="red" />
            <Callout>
              &ldquo;AI SDR&rdquo; products that are just faster spam. Monolithic outbound tools that feel like progress but don&apos;t convert. Buying 6 SaaS seats when a Google Sheet + Apps Script does the job. Scaling before you know what actually works.
            </Callout>
            <MethodGrid>
              {antiPatterns.map((pattern) => (
                <div key={pattern.title} className="bg-surface border border-border rounded-[10px] p-6">
                  <h3 className="text-[15px] font-semibold mb-1.5">{pattern.title}</h3>
                  <p className="text-[13px] text-text-dim leading-relaxed">{pattern.description}</p>
                </div>
              ))}
            </MethodGrid>
          </Section>
        </section>

        <Divider />

        {/* 06: Start This Week */}
        <section id="start" className="scroll-mt-20">
          <Section>
            <SectionLabel number="06" label="Start This Week" color="green" />
            <CardGrid>
              {weeklySteps.map((step) => (
                <div key={step.week} className={`bg-surface border rounded-[10px] p-6 ${step.borderColor}`}>
                  <div className="text-lg font-semibold mb-1.5">Week {step.week}: {step.title}</div>
                  <p className="text-[15px] text-text-dim leading-relaxed">{step.description}</p>
                </div>
              ))}
            </CardGrid>
          </Section>
        </section>

        <Divider />

        {/* 07: Build With Claude Code */}
        <section id="build" className="scroll-mt-20">
          <Section>
            <SectionLabel number="07" label="Build With Claude Code" color="purple" />
            <div className="mb-6">
              <p className="text-text-dim leading-relaxed">
                GTM tools you can build yourself in 15-60 minutes using <a href="https://claude.ai/code" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Claude Code</a>. Click any card to reveal the prompt, then paste it into your terminal.
              </p>
            </div>
            <PromptGrid prompts={buildPrompts} />
          </Section>
        </section>

        {/* Footer */}
        <footer className="text-center pt-12 pb-8">
          <p className="text-base text-text font-semibold mb-2">GTM Engineers Dublin</p>
          <p className="text-sm text-text-muted">Built by people doing it, not talking about it.</p>
        </footer>
      </div>
    </>
  );
}
