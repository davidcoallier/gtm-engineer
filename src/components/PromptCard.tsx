'use client';

import { useState } from 'react';
import { BuildPrompt } from '@/data/prompts';

const difficultyColors = {
  beginner: 'bg-green/10 text-green border-green/20',
  intermediate: 'bg-amber/10 text-amber border-amber/20',
  advanced: 'bg-pink/10 text-pink border-pink/20',
};

export function PromptCard({ prompt }: { prompt: BuildPrompt }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyPrompt = async () => {
    await navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-surface border border-border rounded-[10px] overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-5 text-left hover:bg-surface-2/50 transition-colors"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-2">
              <h3 className="text-base font-semibold">{prompt.title}</h3>
              <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border ${difficultyColors[prompt.difficulty]}`}>
                {prompt.difficulty}
              </span>
              <span className="text-[10px] font-mono text-text-muted">
                ~{prompt.estimatedTime}
              </span>
            </div>
            <p className="text-sm text-text-dim">{prompt.description}</p>
            <div className="flex gap-2 mt-3">
              {prompt.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono text-text-muted bg-surface-2 px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <svg
            className={`w-5 h-5 text-text-muted transition-transform flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {isExpanded && (
        <div className="border-t border-border">
          <div className="p-5 bg-surface-2/30">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-text-muted uppercase tracking-wide">
                Claude Code Prompt
              </span>
              <button
                onClick={copyPrompt}
                className="flex items-center gap-1.5 text-xs font-mono text-accent hover:text-accent/80 transition-colors"
              >
                {copied ? (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Copied
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Copy prompt
                  </>
                )}
              </button>
            </div>
            <pre className="text-sm text-text-dim font-mono whitespace-pre-wrap bg-white p-4 rounded-lg border border-border overflow-x-auto">
              {prompt.prompt}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}

export function PromptGrid({ prompts }: { prompts: BuildPrompt[] }) {
  return (
    <div className="grid grid-cols-1 gap-3">
      {prompts.map((prompt) => (
        <PromptCard key={prompt.id} prompt={prompt} />
      ))}
    </div>
  );
}
