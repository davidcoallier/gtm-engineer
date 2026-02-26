import { Tool } from '@/data/tools';
import { Badge } from './Badge';

export function Card({ tool }: { tool: Tool }) {
  return (
    <div className="bg-surface border border-border rounded-[10px] p-6 transition-colors hover:border-[#3f3f46]">
      <div className="text-base font-semibold mb-1.5 flex items-center gap-2 flex-wrap">
        {tool.url ? (
          <a href={tool.url} target="_blank" rel="noopener noreferrer">
            {tool.name}
          </a>
        ) : (
          <span>{tool.name}</span>
        )}
        {tool.badges.map((badge) => (
          <Badge key={badge} type={badge} />
        ))}
      </div>
      <p className="text-sm text-text-dim leading-relaxed">{tool.description}</p>
    </div>
  );
}

export function CardGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 gap-3">{children}</div>;
}

export function StackRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {children}
    </div>
  );
}
