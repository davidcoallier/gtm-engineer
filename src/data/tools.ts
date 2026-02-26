export type BadgeType = 'free' | 'paid' | 'freemium' | 'api' | 'core' | 'new' | 'diy';

export interface Tool {
  name: string;
  url?: string;
  badges: BadgeType[];
  description: string;
}

export interface ToolCategory {
  label: string;
  tools: Tool[][];
}

export const orchestrationTools: ToolCategory = {
  label: "Orchestration & Data Hub",
  tools: [
    [
      {
        name: "Clay",
        url: "https://clay.com",
        badges: ["core"],
        description: "The hub most GTM engineers build around. A programmable spreadsheet connected to 50+ data providers for enrichment, scoring, and routing. Treat it like a database + orchestration layer, not a CRM plugin."
      }
    ],
    [
      {
        name: "n8n",
        url: "https://n8n.io",
        badges: ["free"],
        description: "Visual workflow automation. The glue layer connecting signals → enrichment → scoring → outreach. Self-hostable, open source. The serious GTM engineer's choice."
      },
      {
        name: "Make (Integromat)",
        url: "https://make.com",
        badges: ["freemium"],
        description: "Managed alternative to n8n. Visual builder, massive integration library. Lower ceiling but faster to start. Good for non-technical GTM people building first automations."
      }
    ],
    [
      {
        name: "Zapier",
        url: "https://zapier.com",
        badges: ["paid"],
        description: "The original connector. Simpler than n8n/Make but more limited. Best for quick single-trigger automations. Most people outgrow it, but it's a valid starting point."
      },
      {
        name: "Google Apps Script",
        url: "https://developers.google.com/apps-script",
        badges: ["free", "diy"],
        description: "Before you buy anything — serious enrichment with just a Google Sheet and Apps Script. Call APIs, scrape data, build lookup functions. No dependencies, no monthly bill. The GTM engineer's gateway drug."
      }
    ]
  ]
};

export const aiTools: ToolCategory = {
  label: "AI & LLM Layer",
  tools: [
    [
      {
        name: "Claude API",
        url: "https://anthropic.com",
        badges: ["api", "core"],
        description: "Anthropic's model. Excellent at long-context research, nuanced writing, and structured data extraction. Account research, personalised outreach, ICP scoring, and building mini-apps via prompts."
      },
      {
        name: "OpenAI / GPT API",
        url: "https://openai.com",
        badges: ["api"],
        description: "The workhorse. Function calling for structured outputs, fine-tuning for domain tasks, vision for parsing screenshots and documents. Most integrations are built on this."
      }
    ],
    [
      {
        name: "Perplexity API",
        url: "https://perplexity.ai",
        badges: ["api", "new"],
        description: "Search-augmented LLM. Feed it a company name, get back real-time research with citations. Cuts out the \"search then summarise\" step. Brilliant for automated account research."
      },
      {
        name: "Groq",
        url: "https://groq.com",
        badges: ["api", "free"],
        description: "Ultra-fast LLM inference. When you need AI responses in milliseconds not seconds. Great for real-time scoring or enrichment in high-volume pipelines where latency matters."
      }
    ]
  ]
};

export const codeTools: ToolCategory = {
  label: "Code & Build Tools",
  tools: [
    [
      {
        name: "Cursor",
        url: "https://cursor.com",
        badges: ["freemium", "core"],
        description: "AI-native code editor. Describe what you want, get working code. Build dashboards, scrapers, internal tools, custom integrations without being a full-time developer. The tool that makes \"GTM Engineer\" possible."
      },
      {
        name: "Windsurf",
        url: "https://codeium.com/windsurf",
        badges: ["free"],
        description: "Cursor alternative. Same concept — AI-powered coding. Try both, commit to whichever clicks. The tool matters less than the habit of building your own things."
      }
    ],
    [
      {
        name: "Claude Code",
        url: "https://claude.ai/code",
        badges: ["new", "diy"],
        description: "Anthropic's CLI coding agent. Give it a task in your terminal, it writes and executes code across files. Scaffold entire projects — dashboards, scrapers, data pipelines — from a single description."
      },
      {
        name: "Retool",
        url: "https://retool.com",
        badges: ["freemium"],
        description: "Drag-and-drop internal tool builder. Connect to databases, APIs, spreadsheets. Build dashboards and admin panels without writing frontend code. Good for partner portals."
      }
    ],
    [
      {
        name: "Replit",
        url: "https://replit.com",
        badges: ["freemium"],
        description: "Browser-based IDE with AI agent. Spin up and deploy apps without local setup. Quick prototypes, webhook endpoints, and lightweight tools running in minutes."
      },
      {
        name: "v0 by Vercel",
        url: "https://v0.dev",
        badges: ["free", "new"],
        description: "Describe a UI, get a deployable React component. Spin up landing pages, dashboards, and forms at speed. Pairs well with the claim-testing methodology."
      }
    ]
  ]
};

export const enrichmentTools: ToolCategory = {
  label: "Enrichment & Data Providers",
  tools: [
    [
      {
        name: "Apollo.io",
        url: "https://apollo.io",
        badges: ["freemium"],
        description: "Contact database + basic sequencing. 200M+ contacts. Generous free tier. Most GTM engineers use it as a data source piped into Clay rather than standalone."
      },
      {
        name: "Hunter.io",
        url: "https://hunter.io",
        badges: ["freemium"],
        description: "Email finder and verifier. Feed it a domain, get verified emails. Simple, reliable, API-friendly. Good for pipelines where you have company but not contact."
      }
    ],
    [
      {
        name: "Clearbit (now HubSpot)",
        url: "https://hubspot.com/products/crm/clearbit",
        badges: ["paid"],
        description: "Company and contact enrichment. Revenue, employee count, tech stack, industry. Was the gold standard, now bundled into HubSpot. API still works standalone."
      },
      {
        name: "Dropcontact",
        url: "https://dropcontact.com",
        badges: ["paid"],
        description: "GDPR-compliant email enrichment. Finds and verifies professional emails algorithmically — no database. Essential if you're operating in the EU and care about compliance."
      }
    ],
    [
      {
        name: "People Data Labs",
        url: "https://peopledatalabs.com",
        badges: ["api"],
        description: "Raw people and company data via API. 1.5B+ person profiles. For when you're building your own enrichment pipeline and want to go deeper than Clay's built-in providers."
      },
      {
        name: "Lusha",
        url: "https://lusha.com",
        badges: ["freemium"],
        description: "Direct dials and email addresses. Chrome extension for LinkedIn prospecting. Free tier gives a handful of credits — enough to test whether it's worth paying."
      }
    ],
    [
      {
        name: "Snov.io",
        url: "https://snov.io",
        badges: ["freemium"],
        description: "Email finder, verifier, and drip campaigns in one. Cheaper alternative to Apollo. Technology search feature useful for technographic prospecting."
      },
      {
        name: "Prospeo",
        url: "https://prospeo.io",
        badges: ["paid"],
        description: "Email finder with high accuracy. LinkedIn export tool pulls contact data from Sales Navigator searches in bulk. Good accuracy-to-cost ratio."
      }
    ]
  ]
};

export const scrapingTools: ToolCategory = {
  label: "Scraping & Data Extraction",
  tools: [
    [
      {
        name: "Apify",
        url: "https://apify.com",
        badges: ["freemium"],
        description: "Web scraping as a service. Pre-built scrapers for Google Maps, LinkedIn, TripAdvisor, hundreds more. When the signal you need doesn't have a SaaS product, build or rent the scraper."
      },
      {
        name: "PhantomBuster",
        url: "https://phantombuster.com",
        badges: ["paid"],
        description: "LinkedIn automation and scraping. Extract profiles from Sales Nav searches, auto-connect, auto-message. Use responsibly — LinkedIn rate limits are real. Best paired with Clay."
      }
    ],
    [
      {
        name: "Captain Data",
        url: "https://captaindata.co",
        badges: ["paid"],
        description: "Multi-source scraping + enrichment workflows. Chains LinkedIn scraping, email finding, and data cleaning into pipelines. More robust than PhantomBuster for complex workflows."
      },
      {
        name: "Bardeen",
        url: "https://bardeen.ai",
        badges: ["free"],
        description: "Browser automation via Chrome extension. Scrape any website, push to sheets/CRM, trigger workflows. Less code-heavy alternative to Apify for simple scraping."
      }
    ],
    [
      {
        name: "Outscraper",
        url: "https://outscraper.com",
        badges: ["freemium"],
        description: "Google Maps data extraction — reviews, popular times, contact info, competitor analysis. Feed it Place IDs, get structured data. Great for local market research and footfall."
      },
      {
        name: "Firecrawl",
        url: "https://firecrawl.dev",
        badges: ["api", "new"],
        description: "Turn any website into clean LLM-ready data. Crawl, scrape, convert to markdown. Ideal for feeding competitor pages, job boards, or news sites into your AI research pipeline."
      }
    ]
  ]
};

export const backendTools: ToolCategory = {
  label: "Lightweight Backends & Databases",
  tools: [
    [
      {
        name: "Supabase",
        url: "https://supabase.com",
        badges: ["free", "core"],
        description: "Postgres database with auth, storage, and real-time out of the box. The backend for custom dashboards, partner portals, and internal tools. Firebase alternative that doesn't lock you in."
      },
      {
        name: "Airtable",
        url: "https://airtable.com",
        badges: ["freemium"],
        description: "Spreadsheet-database hybrid. Good for non-technical people who need structure without SQL. Limited at scale but fast to prototype pipeline tracking and campaign logs."
      }
    ],
    [
      {
        name: "Neon",
        url: "https://neon.tech",
        badges: ["free", "new"],
        description: "Serverless Postgres. Branches like Git, scales to zero, generous free tier. Real database without managing infrastructure. Good Supabase alternative if you don't need the extras."
      },
      {
        name: "Google Sheets",
        url: "https://sheets.google.com",
        badges: ["free"],
        description: "Don't underestimate it. With Apps Script, Sheets becomes a free API-connected database. For early-stage pipeline tracking, enrichment logging, and quick dashboards — genuinely enough."
      }
    ]
  ]
};

export const crmTools: ToolCategory = {
  label: "CRM & Pipeline Management",
  tools: [
    [
      {
        name: "Attio",
        url: "https://attio.com",
        badges: ["freemium", "new"],
        description: "Modern CRM built for the way people actually work. Auto-syncs from email and calendar, flexible data model, great API. Built by people frustrated with Salesforce and HubSpot."
      },
      {
        name: "Folk",
        url: "https://folk.app",
        badges: ["freemium"],
        description: "Lightweight CRM for relationship management. Chrome extension pulls contacts from anywhere. Good for founders who want a CRM that doesn't feel like enterprise software."
      }
    ],
    [
      {
        name: "HubSpot",
        url: "https://hubspot.com",
        badges: ["free"],
        description: "Free tier is legitimately useful — contacts, deals, email tracking, basic reporting. Gets expensive fast but free CRM + Clay as the brain is a solid combo."
      },
      {
        name: "Close",
        url: "https://close.com",
        badges: ["paid"],
        description: "CRM built for outbound sales. Built-in calling, email, SMS. Best pipeline view for small teams doing high-velocity outbound. Feels built by salespeople, not enterprise architects."
      }
    ]
  ]
};

export const landingTools: ToolCategory = {
  label: "Landing Pages & Creative",
  tools: [
    [
      {
        name: "Framer",
        url: "https://framer.com",
        badges: ["freemium"],
        description: "Design-to-production website builder. Publish fast, iterate faster. AI features generate layouts and copy. Ideal for the \"25 landing pages in one night\" approach."
      },
      {
        name: "Webflow",
        url: "https://webflow.com",
        badges: ["freemium"],
        description: "Visual web builder with CMS. More powerful than Framer for complex sites, steeper curve. Good if landing pages need dynamic content or blog posts."
      }
    ],
    [
      {
        name: "Carrd",
        url: "https://carrd.co",
        badges: ["free"],
        description: "Dead simple one-page sites. €19/year for pro. Test a claim with a headline, subhead, and CTA live in 5 minutes. Zero friction."
      },
      {
        name: "CapCut",
        url: "https://capcut.com",
        badges: ["free"],
        description: "Video editing for ad creative. UGC-style content shot on your phone and edited in CapCut outperforms polished brand creative in paid ads. Every time."
      }
    ],
    [
      {
        name: "HeyGen",
        url: "https://heygen.com",
        badges: ["paid", "new"],
        description: "AI video avatars. Personalised video messages at scale without recording yourself 500 times. Controversial but results are getting good enough to test."
      },
      {
        name: "ElevenLabs",
        url: "https://elevenlabs.io",
        badges: ["paid"],
        description: "AI voice generation. Clone your voice, produce audio at scale. Voicemail drops, podcast content, voice notes for outreach. Quality now indistinguishable from real recordings."
      }
    ]
  ]
};

export const analyticsTools: ToolCategory = {
  label: "Analytics & Tracking",
  tools: [
    [
      {
        name: "PostHog",
        url: "https://posthog.com",
        badges: ["free"],
        description: "Product analytics, session replay, feature flags, A/B testing. Open source, self-hostable. Modern alternative to Mixpanel/Amplitude. Generous free tier."
      },
      {
        name: "Hotjar",
        url: "https://hotjar.com",
        badges: ["freemium"],
        description: "Heatmaps and session recordings. See exactly where people click, scroll, and drop off. Essential for the claim-testing loop — the data tells you why a page isn't converting."
      }
    ],
    [
      {
        name: "Meta Pixel + CAPI",
        url: "https://developers.facebook.com/docs/marketing-api/conversions-api",
        badges: ["free", "diy"],
        description: "Server-side conversion tracking for Facebook/Instagram ads. Without CAPI, you're flying blind on attribution. Track leads, purchases, custom events. Worth the setup."
      },
      {
        name: "Plausible",
        url: "https://plausible.io",
        badges: ["paid"],
        description: "Privacy-friendly lightweight analytics. No cookie banners needed. Simple dashboard, metrics that matter. Good enough for landing page testing when you don't need PostHog's depth."
      }
    ]
  ]
};

export const signalTools: Tool[][] = [
  [
    {
      name: "Common Room",
      url: "https://commonroom.io",
      badges: ["paid"],
      description: "Aggregates buying signals from community activity, product usage, social, and job changes into one feed. The single pane of glass for intent data."
    },
    {
      name: "LinkedIn Sales Navigator",
      url: "https://linkedin.com/sales",
      badges: ["paid"],
      description: "Still the richest B2B signal source. Saved searches, lead recommendations, InMail. Combine with PhantomBuster or Captain Data for automation."
    }
  ],
  [
    {
      name: "BuiltWith / Wappalyzer",
      url: "https://builtwith.com",
      badges: ["freemium"],
      description: "Technographic triggers. Someone installs a competitor's tool? You're in their inbox with context. BuiltWith for deep history, Wappalyzer for live detection."
    },
    {
      name: "Google Alerts + RSS → n8n",
      url: "https://google.com/alerts",
      badges: ["free"],
      description: "Custom signal capture for anything off-the-shelf tools miss. Funding announcements, hiring posts, product launches. Free. Pipe into your automation layer."
    }
  ],
  [
    {
      name: "Trigify",
      url: "https://trigify.io",
      badges: ["paid", "new"],
      description: "LinkedIn signal monitoring. Track when prospects change jobs, post about specific topics, engage with competitors, or hit growth milestones. Triggers outreach at the right moment."
    },
    {
      name: "Leadfeeder (Dealfront)",
      url: "https://dealfront.com",
      badges: ["paid"],
      description: "Website visitor de-anonymization. See which companies visit your site, what pages they view, how often. Know who's looking before they fill out a form."
    }
  ],
  [
    {
      name: "Bombora",
      url: "https://bombora.com",
      badges: ["paid"],
      description: "B2B intent data at scale. Tracks which companies research specific topics across the web. Expensive but powerful for targeting accounts in active buying cycles."
    },
    {
      name: "G2 Buyer Intent",
      url: "https://sell.g2.com",
      badges: ["paid"],
      description: "See which companies research your category and competitors on G2. High-quality signal — someone is literally comparing tools in your space."
    }
  ],
  [
    {
      name: "Sumble",
      url: "https://sumble.com",
      badges: ["paid", "new"],
      description: "AI-powered sales intelligence from the Kaggle founders. Tracks tech stacks, projects, and org charts across 2.6M+ companies. Surfaces buyer intent signals from job boards, filings, and social. Clean data, daily updates."
    }
  ]
];

export const coldEmailTools: ToolCategory = {
  label: "Cold Email Infrastructure",
  tools: [
    [
      {
        name: "Instantly",
        url: "https://instantly.ai",
        badges: ["paid"],
        description: "High-volume cold email. Unlimited accounts, automated warmup, smart rotation, deliverability dashboard. The default for serious outbound email."
      },
      {
        name: "Smartlead",
        url: "https://smartlead.ai",
        badges: ["paid"],
        description: "Instantly competitor with better multi-channel features. Unified inbox, sub-sequences, API access. More technical setup but more flexible at scale."
      }
    ],
    [
      {
        name: "Lemlist",
        url: "https://lemlist.com",
        badges: ["paid"],
        description: "Cold email with personalised images and videos. Liquid syntax for deep personalisation. Good middle ground between volume and quality."
      },
      {
        name: "Mailforge / Mailscale",
        url: "https://mailforge.ai",
        badges: ["paid"],
        description: "Bulk domain and mailbox setup. Spin up dozens of sending domains and accounts in minutes. The infrastructure behind high-volume cold email. Pairs with Instantly/Smartlead."
      }
    ]
  ]
};

export const multiChannelTools: ToolCategory = {
  label: "Multi-Channel Sequencing",
  tools: [
    [
      {
        name: "La Growth Machine",
        url: "https://lagrowthmachine.com",
        badges: ["paid"],
        description: "LinkedIn + email + Twitter in coordinated sequences. If-then branching based on engagement. European company, good GDPR awareness."
      },
      {
        name: "Heyreach",
        url: "https://heyreach.io",
        badges: ["paid"],
        description: "LinkedIn automation at scale. Rotate across multiple accounts, coordinate campaigns, track engagement. Built for high-volume LinkedIn outreach."
      }
    ],
    [
      {
        name: "Expandi",
        url: "https://expandi.io",
        badges: ["paid"],
        description: "Cloud-based LinkedIn automation. Smart sequences, auto-warmup, CRM integration. Safer than browser extensions for LinkedIn automation."
      },
      {
        name: "WhatsApp Business API",
        url: "https://business.whatsapp.com",
        badges: ["paid", "diy"],
        description: "For the right audience, WhatsApp massively outperforms email. Template messages, interactive flows, direct conversation. Not for everyone — devastating when it fits."
      }
    ]
  ]
};

export const adsTools: ToolCategory = {
  label: "Ads & Paid Acquisition",
  tools: [
    [
      {
        name: "Meta Ads + Rapid Creative Testing",
        url: "https://facebook.com/business/ads",
        badges: ["diy"],
        description: "10–20 ad variations per week. Kill anything that hasn't hit CPA benchmarks after 2–3x target spend. UGC-style content always outperforms polished brand creative. Always."
      },
      {
        name: "Google Ads",
        url: "https://ads.google.com",
        badges: ["paid"],
        description: "Capture existing demand via search. Best for high-intent keywords where people are actively looking. Complement with Performance Max for broader reach."
      }
    ],
    [
      {
        name: "LinkedIn Ads",
        url: "https://linkedin.com/ad",
        badges: ["paid"],
        description: "Expensive per click but unmatched B2B targeting — job title, company size, industry, seniority. Best for high-ACV products where one lead justifies the spend."
      },
      {
        name: "Synthflow / Bland.ai",
        url: "https://synthflow.ai",
        badges: ["paid", "new"],
        description: "AI voice agents for cold calling at scale. Controversial but real. Best for qualification and booking, not closing. Test carefully, monitor quality."
      }
    ]
  ]
};

export interface MethodologyStep {
  number: string;
  title: string;
  description: string;
  color: 'cyan' | 'green' | 'amber' | 'pink' | 'purple' | 'red';
}

export const methodologySteps: MethodologyStep[] = [
  {
    number: "01",
    title: "Signals > Lists",
    description: "Don't build a list of 10k accounts. Build a system that surfaces 20 high-intent accounts per day with context. Job changes, tech installs, funding rounds, hiring signals — engineer the triggers.",
    color: "cyan"
  },
  {
    number: "02",
    title: "Claim Testing at Speed",
    description: "4 days testing, 1 day collating and arguing. The \"nos\" tell you which claim works. Rewrite and retest. Build 10–20 ad/landing page variations per week. Speed beats perfection — you're looking for signals, not masterpieces.",
    color: "green"
  },
  {
    number: "03",
    title: "AI Research Before Every Touch",
    description: "Before you cold call someone, your AI stack has already told you what their business does, what tools they use, and what their likely pain is. That research used to be someone's entire job.",
    color: "amber"
  },
  {
    number: "04",
    title: "Channel Where They Are",
    description: "Email is noisy. WhatsApp, LinkedIn DMs, and cold calls with real context convert at a fundamentally different rate. Message people where they actually respond — with something that references their real problems.",
    color: "pink"
  },
  {
    number: "05",
    title: "Prompt-as-Product",
    description: "The best GTM engineers have proprietary prompts that do account research, write personalised hooks, and score ICP fit better than any off-the-shelf tool. These prompts ARE the IP. Version control them. Iterate weekly. They compound.",
    color: "purple"
  },
  {
    number: "06",
    title: "Composability Over Monoliths",
    description: "Same as early DevOps. Outreach, Salesloft, HubSpot sequences — those are the old \"ops team runs the servers.\" GTM engineers assemble bespoke stacks the way DevOps engineers assembled CI/CD pipelines. Best-of-breed, glued together, swappable.",
    color: "red"
  },
  {
    number: "07",
    title: "Distribution Through Partners",
    description: "Don't just do outbound — engineer distribution. Find partners whose customers are your customers. Build dashboards and tools they can use. If a supplier or accountant is pushing your product because it makes their life easier, that's pull, not push.",
    color: "cyan"
  },
  {
    number: "08",
    title: "Build the Internal Tools",
    description: "The \"engineer\" in GTM Engineer means you build what doesn't exist. A dashboard to track campaign performance. An export tool for a partner. A scoring model for ICP fit. Stop waiting for product/eng — use Cursor, Supabase, and ship it yourself.",
    color: "green"
  },
  {
    number: "09",
    title: "Diagnostic Metrics Hierarchy",
    description: "Hook rate → CTR → CPA → ROAS. Diagnose problems in that order. Bad hook rate = creative problem. Good hook but bad CTR = offer problem. Good CTR but bad CPA = landing page problem. Always know which lever to pull.",
    color: "amber"
  },
  {
    number: "10",
    title: "Understand Before You Delegate",
    description: "Spend time doing GTM yourself. Build the pages. Write the outreach. Make the calls. Track what converts. When you understand what works, you can systematize it, automate it, or hand it off with clear success criteria.",
    color: "pink"
  }
];

export interface AntiPattern {
  title: string;
  description: string;
}

export const antiPatterns: AntiPattern[] = [
  {
    title: "Spray-and-pray at scale",
    description: "More emails ≠ more pipeline. Signal-driven outbound at lower volume converts 5–10x better."
  },
  {
    title: "Tools before methodology",
    description: "Spend 2+ weeks doing GTM yourself first. Build pages, write outreach, make calls, track what converts. Then buy tools for the bottlenecks."
  },
  {
    title: "Copying playbooks blindly",
    description: "What worked for a Series B company with 50 reps won't work for you. Build your own playbook based on what actually converts in your market."
  },
  {
    title: "Over-automating too early",
    description: "Do it manually until you understand what works. Automate the thing that's proven, not the thing you hope will work. Premature automation scales mistakes."
  },
  {
    title: "Ignoring deliverability",
    description: "Your brilliant AI-written email means nothing in spam. Warm your domains, authenticate SPF/DKIM/DMARC, monitor reputation. Infrastructure before creativity."
  },
  {
    title: "Data without action",
    description: "A Clay table with 10k enriched rows is worthless if nobody's messaging them. Build the action into the pipeline, not after it."
  }
];

export interface WeeklyStep {
  week: number;
  title: string;
  description: string;
  borderColor: string;
}

export const weeklySteps: WeeklyStep[] = [
  {
    week: 1,
    title: "Foundation",
    description: "Sign up for Clay (free tier). Build one enrichment table: 50 target accounts, enrich with company data, tech stack, recent news. Write a Google Apps Script that pulls company info into a spreadsheet. Send 10 personalised messages using what you found. Track every response.",
    borderColor: "border-accent/20"
  },
  {
    week: 2,
    title: "Signals",
    description: "Set up 3 signal sources: Google Alerts for your ICP keywords, LinkedIn Sales Navigator saved searches, and one technographic trigger (BuiltWith or Wappalyzer). Connect them to a central sheet or Clay table. Start building your daily feed of high-intent accounts.",
    borderColor: "border-green/20"
  },
  {
    week: 3,
    title: "Velocity",
    description: "Build 5 landing pages with different claims for the same ICP (use Framer, Carrd, or v0). Run traffic to all of them (even €5/day each). Build an n8n or Make workflow connecting signal → enrichment → notification. You now have a pipeline machine, not a pipeline process.",
    borderColor: "border-amber/20"
  },
  {
    week: 4,
    title: "Compound",
    description: "Write 3 proprietary prompts: account research, personalised first lines, ICP scoring. Version them. A/B test outputs. Set up Instantly or Smartlead for email infrastructure. Connect everything: signals feed Clay, Clay feeds AI enrichment, AI feeds outreach. You're now a GTM engineer.",
    borderColor: "border-pink/20"
  }
];
