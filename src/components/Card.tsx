'use client';

import { Tool } from '@/data/tools';
import { PricingNote } from './Badge';
import { useFilter } from './ToolsFilter';

export function ToolRow({ tool }: { tool: Tool }) {
  const { isVisible } = useFilter();

  if (!isVisible(tool.badges)) {
    return null;
  }

  return (
    <div className="group relative py-3.5 border-b border-border last:border-b-0 -mx-3 px-3 rounded-md transition-colors duration-150 hover:bg-accent-dim">
      <div className="flex items-baseline gap-2.5 flex-wrap">
        {tool.url ? (
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[15px] text-accent hover:underline underline-offset-2"
          >
            {tool.name}
            <span className="inline-block text-[11px] ml-1 opacity-60 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100">
              &#8599;
            </span>
          </a>
        ) : (
          <span className="font-semibold text-[15px]">{tool.name}</span>
        )}
        <PricingNote badges={tool.badges} />
      </div>
      <p className="text-sm text-text-dim leading-relaxed mt-1 max-w-[640px]">{tool.description}</p>
    </div>
  );
}

export function ToolList({ children }: { children: React.ReactNode }) {
  return <div className="border-t border-border">{children}</div>;
}
