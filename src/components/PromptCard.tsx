'use client';

import { useState } from 'react';
import { BuildPrompt } from '@/data/prompts';

const difficultyLabels = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
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
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full py-4 text-left group -mx-3 px-3 rounded-md transition-colors duration-150 hover:bg-accent-dim"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-2.5 flex-wrap mb-1">
              <h3 className="text-[15px] font-semibold group-hover:text-accent transition-colors">
                {prompt.title}
              </h3>
              <span className="text-xs text-text-muted">
                {difficultyLabels[prompt.difficulty]} &middot; {prompt.estimatedTime}
              </span>
            </div>
            <p className="text-sm text-text-dim max-w-[640px]">{prompt.description}</p>
          </div>
          <svg
            className={`w-4 h-4 text-text-muted transition-transform duration-200 flex-shrink-0 mt-1 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {isExpanded && (
        <div className="pb-5 unfold">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-text-muted">The prompt</span>
            <button
              onClick={copyPrompt}
              className="text-xs font-medium text-accent hover:underline underline-offset-2"
            >
              {copied ? 'Copied' : 'Copy prompt'}
            </button>
          </div>
          <pre className="text-[13px] text-text-dim font-mono whitespace-pre-wrap bg-bg p-4 rounded-lg border border-border overflow-x-auto">
            {prompt.prompt}
          </pre>
        </div>
      )}
    </div>
  );
}

export function PromptGrid({ prompts }: { prompts: BuildPrompt[] }) {
  return (
    <div className="border-t border-border">
      {prompts.map((prompt) => (
        <PromptCard key={prompt.id} prompt={prompt} />
      ))}
    </div>
  );
}
