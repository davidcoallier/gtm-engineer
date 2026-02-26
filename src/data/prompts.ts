export interface BuildPrompt {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  tags: string[];
  prompt: string;
}

export const buildPrompts: BuildPrompt[] = [
  {
    id: "geo-analyzer",
    title: "AI GEO Analyzer",
    description: "A tool that scans any URL and checks for GEO (Generative Engine Optimization) readiness — llms.txt, JSON-LD schemas, AI crawler permissions, structured data, and more.",
    difficulty: "intermediate",
    estimatedTime: "15-20 min",
    tags: ["SEO", "AI Discovery", "Analysis"],
    prompt: `Build a Next.js app that analyzes any URL for GEO (Generative Engine Optimization) readiness.

Start by confirming the approach:
- Should we fetch URLs server-side (API route) or client-side? Server-side is more reliable but needs CORS handling.
- Do you want me to use a specific fetching library (got, axios) or stick with native fetch?
- Should we cache results to avoid re-scanning the same URL?

Once confirmed, build a tool that checks for:

AI Discovery Files:
- llms.txt and llms-full.txt presence
- /api/context or similar JSON endpoint
- /.well-known/ai.txt

AI Crawler Permissions in robots.txt:
- GPTBot, ChatGPT-User
- ClaudeBot, Claude-Web, Anthropic-AI
- PerplexityBot
- Google-Extended, Cohere-AI
- Meta-ExternalAgent

Structured Data (JSON-LD):
- Organization, WebSite, FAQPage schemas
- Product/Service, LocalBusiness schemas
- BreadcrumbList, HowTo, Article schemas
- Review/AggregateRating, Speakable schemas

Meta & Content:
- Title, description, canonical URL
- Open Graph and Twitter cards
- Heading hierarchy (H1, H2, etc.)
- Content freshness indicators

Display results with a score ring, color-coded pass/fail/warning statuses, and recommendations for each check. Modern flat dark UI.`
  },
  {
    id: "icp-scorer",
    title: "ICP Fit Scorer",
    description: "Upload a CSV of companies, define your ICP criteria, and get AI-scored fit ratings with explanations for each account.",
    difficulty: "intermediate",
    estimatedTime: "20-30 min",
    tags: ["Scoring", "ICP", "Lead Qualification"],
    prompt: `Build a Google Apps Script that scores companies against my ICP directly in Google Sheets.

Before writing code, let's define my ICP together:
1. Ask me about my ideal company size, revenue, industries, and tech stack
2. Ask what disqualifiers should be instant red flags
3. Confirm whether I want to use Claude API for nuanced scoring, or keep it rule-based

Then build a script that:

1. Reads ICP criteria from a "Config" sheet:
   - Company size (employee count ranges)
   - Revenue ranges
   - Industries (include/exclude)
   - Technologies used
   - Geography
   - Custom criteria (free text)

2. Scores companies from a "Companies" sheet with columns like:
   - Company name, domain, employee count, revenue, industry, tech stack, location

3. For each company, add columns:
   - Score (0-100)
   - Reasoning (1-2 sentences)
   - Red flags / Green flags
   - Personalization angle

4. Add a custom menu:
   - "Score selected rows"
   - "Score all unscored"
   - "Re-score all"

5. Conditional formatting:
   - Green for 70+, yellow for 40-69, red for <40

Include instructions for setting up the Config sheet.`
  },
  {
    id: "first-line-generator",
    title: "Personalized First Line Generator",
    description: "Paste a LinkedIn URL or company info, get 5 personalized email opening lines based on recent activity, company news, and role-specific context.",
    difficulty: "beginner",
    estimatedTime: "10-15 min",
    tags: ["Email", "Personalization", "Outreach"],
    prompt: `Build a Python CLI tool for generating personalized cold email first lines.

Before you start coding, ask me:
- Do I want to use Firecrawl for LinkedIn scraping, or should we keep it simple with manual input only?
- Should outputs go to stdout, or would I prefer a local JSON file for easy copy-paste?

Once we've agreed on the approach, build a CLI that:

Takes input via flags:
- --name, --title, --company, --news (manual entry)
- --url (optional LinkedIn URL if we're using Firecrawl)
- --tone (casual/professional/bold, default: professional)

Uses Claude API to generate 5 first lines:
1. Recent company news angle
2. Role/responsibility angle
3. Shared connection or interest angle
4. Industry trend angle
5. Direct value proposition angle

Output for each line:
- The line itself
- Why it works (1 sentence)

Use environment variable for API key. Include a --help with examples.`
  },
  {
    id: "company-researcher",
    title: "Account Research Agent",
    description: "Enter a company name or domain, get a comprehensive research brief: what they do, tech stack, recent news, key people, likely pain points, and conversation starters.",
    difficulty: "intermediate",
    estimatedTime: "25-35 min",
    tags: ["Research", "Account Intelligence", "Enrichment"],
    prompt: `Build an account research agent as a Python script I can run from the terminal or integrate into other tools.

Let's scope this together first:
1. What APIs do I have access to? (Perplexity, Firecrawl, BuiltWith, or just Claude + web search?)
2. Do I want output as Markdown, JSON, or both?
3. Should it cache results to avoid re-researching the same company?

After we've clarified, build a CLI tool that:

Takes input: Company name or domain (positional arg or --company flag)

Compiles research using available APIs:

1. Company Overview
   - What they do (1-2 sentences)
   - Business model
   - Target market
   - Company size and funding stage

2. Tech Stack
   - Known technologies (from BuiltWith/Wappalyzer data or web search)
   - Likely integrations

3. Recent News
   - Last 3-6 months of news
   - Product launches, funding, leadership changes
   - Hiring trends

4. Key People
   - Decision makers in relevant departments
   - Recent LinkedIn activity or posts

5. Pain Points (AI-inferred)
   - Based on their industry and stage
   - Based on tech stack gaps
   - Based on recent job postings

6. Conversation Starters
   - 3 specific, non-generic openers

Output options:
--format md (default) | --format json
--output filename (optional, otherwise stdout)

Include --help with usage examples.`
  },
  {
    id: "cold-email-validator",
    title: "Cold Email Spam Checker",
    description: "Paste your cold email, get instant feedback on spam triggers, deliverability risks, and suggestions to improve reply rates.",
    difficulty: "beginner",
    estimatedTime: "10-15 min",
    tags: ["Email", "Deliverability", "Validation"],
    prompt: `Build a Google Apps Script that validates cold emails directly in Google Sheets.

First, let's plan this together. Ask me:
- Should the script run on a single cell, or scan a column of emails?
- Do I want the analysis in adjacent columns, or as a sidebar?
- Should it use Claude API for the "improved version" suggestions, or keep it rule-based only?

After we align, create a script that:

Checks for:

1. Spam Triggers
   - Spammy words (free, guaranteed, act now, etc.)
   - Excessive punctuation or caps
   - Too many links

2. Deliverability Risks
   - Email length (flag if >150 words)
   - Tracking pixel mentions

3. Reply Rate Factors
   - Personalization tokens present
   - Clear CTA (single, not multiple)
   - Question asked
   - Reading level (aim for grade 5-8)

4. Structural Issues
   - Subject line length
   - First line strength
   - Mobile preview (first 40 chars)

Output columns:
- Overall score (0-100)
- Issues (comma-separated flags)
- Suggestions

Include a custom menu to run the validator on selected rows.`
  },
  {
    id: "linkedin-post-generator",
    title: "LinkedIn Post Generator",
    description: "Enter a topic or insight, get 3 LinkedIn post variations: contrarian take, story-driven, and data-backed. Optimized for engagement.",
    difficulty: "beginner",
    estimatedTime: "10-15 min",
    tags: ["Content", "LinkedIn", "Social"],
    prompt: `Build a Raycast extension for generating LinkedIn posts.

Let's plan the UX first. Confirm with me:
- Should it open as a form view (fill in fields) or a simple text input?
- Do I want the 3 variations shown in a list to pick from, or all copied to clipboard?
- Should it remember my last used tone preference?

Once confirmed, build an extension that:

Takes input:
- Topic or insight (required)
- Optional: Supporting data or story
- Tone: Founder voice / Thought leader / Casual

Generates 3 variations using Claude API:

1. Contrarian Take
   - Starts with challenging conventional wisdom
   - Short punchy sentences
   - Line breaks for readability

2. Story-Driven
   - Opens with a personal anecdote
   - "I used to think X. Then Y happened."
   - Lesson at the end

3. Data-Backed
   - Leads with a surprising stat
   - Breaks down the implications
   - Ends with a question

For each post show:
- Character count
- Hook strength rating (1-5)
- Action to copy to clipboard

Store API key in Raycast preferences. Include hashtag toggle preference.`
  },
  {
    id: "objection-handler",
    title: "Sales Objection Handler",
    description: "Enter the objection you're hearing, get 3 response frameworks: direct counter, reframe, and question-back. Built for cold calls.",
    difficulty: "beginner",
    estimatedTime: "10-15 min",
    tags: ["Sales", "Cold Calling", "Objections"],
    prompt: `Build a simple Next.js app for handling sales objections.

Before building, walk me through your plan:
1. Show me the component structure you're thinking
2. Confirm the UI layout (form on left, responses on right? Single column?)
3. Ask if I have specific objections I want pre-loaded

Then build a tool where:

Input:
- The objection (e.g., "We already have a solution")
- Optional context: Your product, their industry

Generate 3 response frameworks using Claude:

1. Direct Counter
   - Acknowledge the objection
   - Provide a direct counter-point
   - Bridge to your value prop
   - Sample script

2. Reframe
   - Acknowledge their perspective
   - Reframe the problem
   - Introduce a new angle
   - Sample script

3. Question-Back
   - Acknowledge briefly
   - Ask a probing question
   - Let them talk themselves into the meeting
   - Sample script

For each framework:
- The structure (bullet points)
- A word-for-word script
- Why it works
- When to use it

Include a library of common objections (editable):
- "Not interested"
- "Send me an email"
- "We don't have budget"
- "We're locked into a contract"
- "Call me next quarter"

Dark UI. Save custom objections to localStorage.`
  },
  {
    id: "competitive-intel",
    title: "Competitive Battle Card Generator",
    description: "Enter your competitor's name, get a battle card: positioning, strengths, weaknesses, common objections, and how to win against them.",
    difficulty: "advanced",
    estimatedTime: "30-40 min",
    tags: ["Competitive Intel", "Sales Enablement", "Research"],
    prompt: `Build a competitive battle card generator in Next.js.

This is a multi-step build. Let's plan it properly:

1. First, show me your proposed file structure and key components
2. Ask me which competitors I want to pre-load (if any)
3. Confirm: do I have Perplexity API access, or should we use Claude with web search?
4. Ask if I want PDF export (requires additional library) or just Markdown/HTML

Once we've aligned on scope, build a tool that:

Input:
- Competitor name/URL
- Your product name (for comparison)
- Your key differentiators

Generates using available APIs:

1. Competitor Overview
   - What they do, target market, pricing model, key customers

2. Positioning
   - Their main message, how they describe themselves, primary use cases

3. Strengths
   - What they're genuinely good at, where they win deals
   - Customer praise themes (from G2, Capterra)

4. Weaknesses
   - Known gaps, customer complaint themes, where they lose deals

5. Head-to-Head
   - Feature comparison table
   - When to choose them vs us / us vs them

6. Objection Handling
   - "But [Competitor] has X"
   - "We're already using [Competitor]"
   - "[Competitor] is cheaper"
   - Sample responses for each

7. Landmines
   - Questions to plant that expose their weaknesses

Display as a printable card. Dark UI. Include export options we agreed on.`
  },
  {
    id: "meeting-prep",
    title: "Sales Meeting Prep Brief",
    description: "Enter a company name and meeting context, get a one-pager: company research, attendee backgrounds, likely questions, and talking points.",
    difficulty: "intermediate",
    estimatedTime: "20-25 min",
    tags: ["Sales", "Research", "Meetings"],
    prompt: `Build a meeting prep CLI tool in Python that I can run before any sales call.

Let's design this for my workflow:
1. Ask me what CRM I use (if any) — can we pull meeting context from there?
2. Should output be terminal-formatted, Markdown file, or both?
3. Do I want a --quick mode that skips attendee research?

Then build a CLI that:

Input (via flags):
- --company (name or domain)
- --type (discovery / demo / negotiation / qbr)
- --attendees (comma-separated "Name:Title" pairs, optional)
- --objective (your goal for the meeting)

Generates a one-page brief:

1. Company Snapshot
   - What they do, size, stage, recent news
   - Why they might need you

2. Attendee Intel (if provided)
   - Role and likely priorities
   - LinkedIn headline, recent posts/activity
   - Potential rapport builders

3. Meeting Game Plan
   - Suggested agenda (3-5 bullets)
   - Key questions to ask
   - Information to gather
   - Red flags to watch for

4. Likely Questions From Them
   - Based on their stage/industry
   - How to answer each

5. Your Talking Points
   - Tailored to their situation
   - Relevant case studies to mention

6. Next Step Options
   - If meeting goes well / hesitant / objections

Output to stdout in readable format. Support --output filename.md for file export.`
  },
  {
    id: "signal-monitor",
    title: "Buying Signal Monitor",
    description: "Set up alerts for job postings, tech changes, funding rounds, or news mentions. Get daily digests of accounts showing buying signals.",
    difficulty: "advanced",
    estimatedTime: "45-60 min",
    tags: ["Signals", "Intent Data", "Monitoring"],
    prompt: `Build a buying signal monitoring system. This is a bigger project, so let's plan it carefully.

Before any code, walk me through:
1. Architecture overview — what's the tech stack you recommend? (Next.js + Supabase? Python backend + simple frontend? n8n for signal collection?)
2. Which signal sources should we prioritize first? (Let's start with 2-3, not all of them)
3. Do I need user auth, or is this single-user for now?
4. Should signal collection run on a cron, or be triggered manually?

After we agree on scope, build in phases:

Phase 1: Core
- Account watchlist (add companies, import CSV, tag as prospect/customer/competitor)
- Basic signal config (pick 2-3 sources to start)
- Simple dashboard showing today's signals

Phase 2: Signal Sources (implement what we agreed)
- Job postings (keywords, titles, departments)
- Technology changes (added/removed tools)
- Funding rounds (amount, stage)
- News mentions (keywords, topics)
- Leadership changes

Phase 3: Actions & Workflow
- Mark as "Reached out" / Snooze / Add notes
- Score signals by relevance (high/medium/low)
- Filter and search

Phase 4: Daily Digest (if we get there)
- Email summary option
- Top 10 signals of the day

Let's scope Phase 1 first and get that working before expanding.`
  }
];
