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
    prompt: `Create a Next.js app that receives a URL and analyzes it for GEO (Generative Engine Optimization). It should check for:

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
    prompt: `Build a Next.js app for ICP (Ideal Customer Profile) scoring:

1. Let users define their ICP criteria:
   - Company size (employee count ranges)
   - Revenue ranges
   - Industries (include/exclude)
   - Technologies used
   - Geography
   - Custom criteria (free text)

2. Accept CSV upload with company data or manual entry

3. For each company, use Claude API to:
   - Score 0-100 on ICP fit
   - Explain the reasoning
   - Flag any red flags or green flags
   - Suggest personalization angles

4. Display results in a sortable table with:
   - Score badge (color-coded)
   - Expandable reasoning
   - Export to CSV

5. Store ICP criteria in localStorage so users don't have to re-enter

Use Tailwind with a clean dark UI. Include a sample ICP template for B2B SaaS.`
  },
  {
    id: "first-line-generator",
    title: "Personalized First Line Generator",
    description: "Paste a LinkedIn URL or company info, get 5 personalized email opening lines based on recent activity, company news, and role-specific context.",
    difficulty: "beginner",
    estimatedTime: "10-15 min",
    tags: ["Email", "Personalization", "Outreach"],
    prompt: `Create a simple Next.js app for generating personalized cold email first lines:

Input options:
1. LinkedIn profile URL (scrape with Firecrawl or similar)
2. Manual entry: Name, Title, Company, Recent news/activity

Use Claude API to generate 5 different first lines:
1. Recent company news angle
2. Role/responsibility angle
3. Shared connection or interest angle
4. Industry trend angle
5. Direct value proposition angle

For each line, show:
- The line itself
- Why it works (1 sentence)
- Copy button

Include a toggle for tone: Casual / Professional / Bold

Store API key in environment variable. Dark minimal UI.`
  },
  {
    id: "company-researcher",
    title: "Account Research Agent",
    description: "Enter a company name or domain, get a comprehensive research brief: what they do, tech stack, recent news, key people, likely pain points, and conversation starters.",
    difficulty: "intermediate",
    estimatedTime: "25-35 min",
    tags: ["Research", "Account Intelligence", "Enrichment"],
    prompt: `Build an account research agent in Next.js:

Input: Company name or domain

Use Perplexity API or web search + Claude to compile:

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

Display as a clean report with sections. Include "Copy as Markdown" and "Copy as JSON" buttons for piping into other tools.`
  },
  {
    id: "cold-email-validator",
    title: "Cold Email Spam Checker",
    description: "Paste your cold email, get instant feedback on spam triggers, deliverability risks, and suggestions to improve reply rates.",
    difficulty: "beginner",
    estimatedTime: "10-15 min",
    tags: ["Email", "Deliverability", "Validation"],
    prompt: `Create a cold email validator in Next.js:

Input: Email subject + body text

Check for:

1. Spam Triggers
   - Spammy words (free, guaranteed, act now, etc.)
   - Excessive punctuation or caps
   - Too many links
   - Image-heavy (flag if mentioned)

2. Deliverability Risks
   - Email length (flag if >150 words)
   - HTML vs plain text indicators
   - Tracking pixel mentions
   - Unsubscribe link presence

3. Reply Rate Factors
   - Personalization tokens present
   - Clear CTA (single, not multiple)
   - Question asked
   - Reading level (aim for grade 5-8)

4. Structural Issues
   - Subject line length
   - First line strength
   - Mobile preview (first 40 chars)

Display results as:
- Overall score (0-100)
- Red/yellow/green flags
- Specific suggestions for each issue
- "Fixed" version with Claude's improvements

Dark UI, instant analysis on paste.`
  },
  {
    id: "linkedin-post-generator",
    title: "LinkedIn Post Generator",
    description: "Enter a topic or insight, get 3 LinkedIn post variations: contrarian take, story-driven, and data-backed. Optimized for engagement.",
    difficulty: "beginner",
    estimatedTime: "10-15 min",
    tags: ["Content", "LinkedIn", "Social"],
    prompt: `Build a LinkedIn post generator in Next.js:

Input:
- Topic or insight (required)
- Optional: Supporting data or story
- Tone: Founder voice / Thought leader / Casual

Generate 3 variations using Claude:

1. Contrarian Take
   - Starts with challenging conventional wisdom
   - Short punchy sentences
   - Line breaks, not paragraphs

2. Story-Driven
   - Opens with a personal anecdote
   - "I used to think X. Then Y happened."
   - Lesson at the end

3. Data-Backed
   - Leads with a surprising stat
   - Breaks down the implications
   - Ends with a question

For each post:
- Character count
- Estimated read time
- Hook strength rating (1-5)
- Copy button
- Preview of how it'll look (with line breaks)

Include toggle for adding hashtags (on/off).
Dark UI, show all 3 side by side on desktop.`
  },
  {
    id: "objection-handler",
    title: "Sales Objection Handler",
    description: "Enter the objection you're hearing, get 3 response frameworks: direct counter, reframe, and question-back. Built for cold calls.",
    difficulty: "beginner",
    estimatedTime: "10-15 min",
    tags: ["Sales", "Cold Calling", "Objections"],
    prompt: `Create a sales objection handler in Next.js:

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

Include a library of common objections:
- "Not interested"
- "Send me an email"
- "We don't have budget"
- "We're locked into a contract"
- "Call me next quarter"

Dark UI. Let users save their best responses to localStorage.`
  },
  {
    id: "competitive-intel",
    title: "Competitive Battle Card Generator",
    description: "Enter your competitor's name, get a battle card: positioning, strengths, weaknesses, common objections, and how to win against them.",
    difficulty: "advanced",
    estimatedTime: "30-40 min",
    tags: ["Competitive Intel", "Sales Enablement", "Research"],
    prompt: `Build a competitive battle card generator in Next.js:

Input:
- Competitor name/URL
- Your product name (for comparison)
- Your key differentiators

Use Perplexity API or web search + Claude to generate:

1. Competitor Overview
   - What they do
   - Target market
   - Pricing model (if public)
   - Key customers

2. Positioning
   - Their main message
   - How they describe themselves
   - Primary use cases

3. Strengths
   - What they're genuinely good at
   - Where they win deals
   - Customer praise themes (from G2, Capterra)

4. Weaknesses
   - Known gaps
   - Customer complaints themes
   - Where they lose deals

5. Head-to-Head
   - Feature comparison table
   - When to choose them vs us
   - When to choose us vs them

6. Objection Handling
   - "But [Competitor] has X"
   - "We're already using [Competitor]"
   - "[Competitor] is cheaper"
   - Sample responses for each

7. Landmines
   - Questions to plant that expose their weaknesses
   - Discovery questions that favor you

Display as a printable/shareable card. Include "Export as PDF" and "Copy as Markdown".`
  },
  {
    id: "meeting-prep",
    title: "Sales Meeting Prep Brief",
    description: "Enter a company name and meeting context, get a one-pager: company research, attendee backgrounds, likely questions, and talking points.",
    difficulty: "intermediate",
    estimatedTime: "20-25 min",
    tags: ["Sales", "Research", "Meetings"],
    prompt: `Create a meeting prep tool in Next.js:

Input:
- Company name/domain
- Meeting type: Discovery / Demo / Negotiation / QBR
- Attendee names and titles (optional)
- Your objective for the meeting

Generate a one-page brief:

1. Company Snapshot
   - What they do
   - Size, stage, recent news
   - Why they might need you

2. Attendee Intel (if provided)
   - Role and likely priorities
   - LinkedIn headline
   - Recent posts or activity
   - Potential rapport builders

3. Meeting Game Plan
   - Suggested agenda (3-5 bullets)
   - Key questions to ask
   - Information to gather
   - Red flags to watch for

4. Likely Questions From Them
   - Based on their stage/industry
   - How to answer each
   - What to avoid saying

5. Your Talking Points
   - Tailored to their situation
   - Relevant case studies to mention
   - Specific numbers to use

6. Next Step Options
   - If meeting goes well
   - If they're hesitant
   - If they have objections

Display as a clean, scannable brief. "Print" button for taking into meetings. Dark UI.`
  },
  {
    id: "signal-monitor",
    title: "Buying Signal Monitor",
    description: "Set up alerts for job postings, tech changes, funding rounds, or news mentions. Get daily digests of accounts showing buying signals.",
    difficulty: "advanced",
    estimatedTime: "45-60 min",
    tags: ["Signals", "Intent Data", "Monitoring"],
    prompt: `Build a buying signal monitoring dashboard in Next.js with Supabase backend:

1. Signal Configuration
   Let users set up monitors for:
   - Job postings (keywords, titles, departments)
   - Technology changes (added/removed tools)
   - Funding rounds (amount, stage)
   - News mentions (keywords, topics)
   - Leadership changes
   - Company growth (employee count changes)

2. Account Watchlist
   - Add companies to watch
   - Import from CSV
   - Tag accounts (prospect, customer, competitor)

3. Signal Detection
   - Use Google Alerts RSS, LinkedIn job scraping, Crunchbase API, or web search
   - Score signals by relevance (high/medium/low)
   - Dedupe similar signals

4. Dashboard
   - Today's signals (sorted by priority)
   - Signal trends over time
   - Accounts with most signals
   - Filter by signal type

5. Actions
   - Mark as "Reached out"
   - Snooze account
   - Add notes
   - Generate outreach from signal

6. Daily Digest
   - Email summary option
   - Top 10 signals of the day
   - Accounts to prioritize

Use Supabase for:
- User accounts
- Watchlist storage
- Signal history
- User preferences

Modern dashboard UI with charts. Real-time updates via Supabase subscriptions.`
  }
];
