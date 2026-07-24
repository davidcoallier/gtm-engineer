export type BadgeType = 'free' | 'freemium' | 'paid' | 'core';

export interface Tool {
  name: string;
  url?: string;
  badges: BadgeType[];
  description: string;
}

export interface ToolCategory {
  label: string;
  intro: string;
  tools: Tool[];
}

export const orchestrationTools: ToolCategory = {
  label: "Orchestration and data hub",
  intro: "The centre of the stack. Everything else feeds into it or gets triggered from it.",
  tools: [
    {
      name: "Clay",
      url: "https://clay.com",
      badges: ["freemium", "core"],
      description: "The hub most GTM engineers build around. A programmable spreadsheet connected to 50+ data providers for enrichment, scoring and routing. Treat it like a database with an orchestration layer, not a CRM plugin."
    },
    {
      name: "n8n",
      url: "https://n8n.io",
      badges: ["free"],
      description: "Visual workflow automation and the glue between signals, enrichment, scoring and outreach. Open source and self-hostable, so there's no per-task pricing when your volume grows."
    },
    {
      name: "Make (Integromat)",
      url: "https://make.com",
      badges: ["freemium"],
      description: "Managed alternative to n8n with a huge integration library. Lower ceiling but faster to start. A good first automation tool if you don't want to host anything."
    },
    {
      name: "Zapier",
      url: "https://zapier.com",
      badges: ["paid"],
      description: "The original connector. Simpler than n8n or Make, more limited, and the pricing stings at volume. Fine for quick single-trigger automations. Most people outgrow it."
    },
    {
      name: "Google Apps Script",
      url: "https://developers.google.com/apps-script",
      badges: ["free"],
      description: "Before you buy anything, try a Google Sheet with Apps Script. You can call APIs, scrape data and build lookup functions with no dependencies and no monthly bill. It covers more than you'd think."
    }
  ]
};

export const aiTools: ToolCategory = {
  label: "AI and LLM layer",
  intro: "You need at least one model API. This is what writes your research briefs, scores accounts and drafts your first lines.",
  tools: [
    {
      name: "Claude API",
      url: "https://anthropic.com",
      badges: ["paid", "core"],
      description: "Anthropic's models. Strong at long-context research, structured data extraction and writing that doesn't read like a robot. Use it for account research, ICP scoring and personalised outreach."
    },
    {
      name: "OpenAI / GPT API",
      url: "https://openai.com",
      badges: ["paid"],
      description: "The other default. Function calling for structured outputs, fine-tuning for domain tasks, vision for parsing screenshots and documents. Most off-the-shelf integrations support it first."
    },
    {
      name: "Perplexity API",
      url: "https://perplexity.ai",
      badges: ["paid"],
      description: "Search built into the model. Feed it a company name, get back current research with citations. Removes the separate search-then-summarise step in automated account research."
    },
    {
      name: "Groq",
      url: "https://groq.com",
      badges: ["free"],
      description: "Very fast inference for open models. Use it when you need answers in milliseconds, like live scoring or enrichment inside high-volume pipelines."
    }
  ]
};

export const codeTools: ToolCategory = {
  label: "Code and build tools",
  intro: "The engineer part of the job. These let you ship your own dashboards, scrapers and internal tools without waiting on a product team.",
  tools: [
    {
      name: "Cursor",
      url: "https://cursor.com",
      badges: ["freemium", "core"],
      description: "AI code editor. Describe what you want, get working code. Build dashboards, scrapers and custom integrations without being a full-time developer. This is the tool that makes the role possible."
    },
    {
      name: "Windsurf",
      url: "https://codeium.com/windsurf",
      badges: ["freemium"],
      description: "Same idea as Cursor. Try both, keep whichever clicks. The habit of building your own tools matters more than the editor you pick."
    },
    {
      name: "Claude Code",
      url: "https://claude.ai/code",
      badges: ["paid"],
      description: "Anthropic's coding agent in your terminal. Give it a task and it plans, writes and runs code across your whole project. The best option for scaffolding a complete tool from one description."
    },
    {
      name: "Retool",
      url: "https://retool.com",
      badges: ["freemium"],
      description: "Drag-and-drop internal tools. Connect databases, APIs and spreadsheets, get dashboards and admin panels without writing frontend code. Good for partner portals."
    },
    {
      name: "Replit",
      url: "https://replit.com",
      badges: ["freemium"],
      description: "Browser IDE with an AI agent. No local setup, deploys in a click. Handy for quick prototypes, webhook endpoints and lightweight tools."
    },
    {
      name: "v0 by Vercel",
      url: "https://v0.dev",
      badges: ["freemium"],
      description: "Describe a UI, get a deployable React component. A fast way to spin up landing pages, dashboards and forms for claim testing."
    }
  ]
};

export const enrichmentTools: ToolCategory = {
  label: "Enrichment and data providers",
  intro: "Turning a domain or a name into a full record: contact details, company data, tech stack.",
  tools: [
    {
      name: "Apollo.io",
      url: "https://apollo.io",
      badges: ["freemium"],
      description: "Contact database with 200M+ contacts and basic sequencing. The free tier is generous. Most people use it as a data source piped into Clay rather than on its own."
    },
    {
      name: "Hunter.io",
      url: "https://hunter.io",
      badges: ["freemium"],
      description: "Email finder and verifier. Give it a domain, get verified addresses back. Simple, reliable, and the API is easy to build on."
    },
    {
      name: "Clearbit (now HubSpot)",
      url: "https://hubspot.com/products/crm/clearbit",
      badges: ["paid"],
      description: "Company and contact enrichment: revenue, headcount, tech stack, industry. Was the gold standard, now bundled into HubSpot. The API still works on its own."
    },
    {
      name: "Dropcontact",
      url: "https://dropcontact.com",
      badges: ["paid"],
      description: "GDPR-compliant email enrichment. Finds and verifies professional emails algorithmically instead of from a stored database. Matters if you sell in the EU."
    },
    {
      name: "People Data Labs",
      url: "https://peopledatalabs.com",
      badges: ["paid"],
      description: "Raw people and company data over API, 1.5B+ person profiles. For building your own enrichment pipeline when Clay's built-in providers don't go deep enough."
    },
    {
      name: "Lusha",
      url: "https://lusha.com",
      badges: ["freemium"],
      description: "Direct dials and email addresses, with a Chrome extension for LinkedIn prospecting. The free credits are enough to test whether it's worth paying for in your market."
    },
    {
      name: "Snov.io",
      url: "https://snov.io",
      badges: ["freemium"],
      description: "Email finding, verification and drip campaigns in one, cheaper than Apollo. The technology search is useful for technographic prospecting."
    },
    {
      name: "Prospeo",
      url: "https://prospeo.io",
      badges: ["paid"],
      description: "Accurate email finder with a bulk export tool for Sales Navigator searches. Good accuracy for the price."
    }
  ]
};

export const scrapingTools: ToolCategory = {
  label: "Scraping and data extraction",
  intro: "When the data you need isn't in any provider's database, you go and get it yourself.",
  tools: [
    {
      name: "Apify",
      url: "https://apify.com",
      badges: ["freemium"],
      description: "Scraping as a service, with pre-built scrapers for Google Maps, LinkedIn, TripAdvisor and hundreds more. Rent the scraper before you build one."
    },
    {
      name: "PhantomBuster",
      url: "https://phantombuster.com",
      badges: ["paid"],
      description: "LinkedIn automation and scraping. Pulls profiles from Sales Navigator searches, auto-connects, auto-messages. LinkedIn's rate limits are real, so go easy. Pairs well with Clay."
    },
    {
      name: "Captain Data",
      url: "https://captaindata.co",
      badges: ["paid"],
      description: "Chains LinkedIn scraping, email finding and data cleaning into one pipeline. More robust than PhantomBuster for multi-step workflows."
    },
    {
      name: "Bardeen",
      url: "https://bardeen.ai",
      badges: ["freemium"],
      description: "Browser automation from a Chrome extension. Scrape a site, push the data to a sheet or CRM, trigger workflows. The low-code option for simple scraping jobs."
    },
    {
      name: "Outscraper",
      url: "https://outscraper.com",
      badges: ["freemium"],
      description: "Google Maps extraction: reviews, popular times, contact details, competitor data. Feed it Place IDs, get structured data back. Useful for local market research."
    },
    {
      name: "Firecrawl",
      url: "https://firecrawl.dev",
      badges: ["freemium"],
      description: "Turns any website into clean, LLM-ready markdown. Built for feeding competitor pages, job boards and news sites into an AI research pipeline."
    }
  ]
};

export const backendTools: ToolCategory = {
  label: "Backends and databases",
  intro: "Your tools need somewhere to keep data. These are cheap or free and take minutes to set up.",
  tools: [
    {
      name: "Supabase",
      url: "https://supabase.com",
      badges: ["freemium", "core"],
      description: "Postgres with auth, storage and realtime built in. The backend for custom dashboards, partner portals and internal tools. The free tier covers a lot."
    },
    {
      name: "Airtable",
      url: "https://airtable.com",
      badges: ["freemium"],
      description: "Spreadsheet-database hybrid. Structure without SQL. Limited at scale, but quick for tracking pipeline and campaign logs."
    },
    {
      name: "Neon",
      url: "https://neon.tech",
      badges: ["freemium"],
      description: "Serverless Postgres that branches like Git and scales to zero. A real database with nothing to manage. Good Supabase alternative if you don't need the extras."
    },
    {
      name: "Google Sheets",
      url: "https://sheets.google.com",
      badges: ["free"],
      description: "With Apps Script attached, Sheets is a free API-connected database. For early pipeline tracking, enrichment logs and quick dashboards it is genuinely enough."
    }
  ]
};

export const crmTools: ToolCategory = {
  label: "CRM and pipeline",
  intro: "You still need a system of record. Pick one that stays out of your way.",
  tools: [
    {
      name: "Attio",
      url: "https://attio.com",
      badges: ["freemium"],
      description: "Modern CRM with a flexible data model, auto-sync from email and calendar, and a proper API. Built by people who got fed up with Salesforce and HubSpot."
    },
    {
      name: "Folk",
      url: "https://folk.app",
      badges: ["freemium"],
      description: "Lightweight relationship CRM with a Chrome extension that pulls contacts from anywhere. Good for founders who don't want enterprise software."
    },
    {
      name: "HubSpot",
      url: "https://hubspot.com",
      badges: ["freemium"],
      description: "The free tier is genuinely useful: contacts, deals, email tracking, basic reporting. It gets expensive fast beyond that. Free HubSpot with Clay as the brain is a solid combination."
    },
    {
      name: "Close",
      url: "https://close.com",
      badges: ["paid"],
      description: "Built for outbound. Calling, email and SMS inside the product, and the best pipeline view for a small team doing volume. Feels made by salespeople, not enterprise architects."
    }
  ]
};

export const landingTools: ToolCategory = {
  label: "Landing pages and creative",
  intro: "Claim testing needs pages and ads out the door in hours, not weeks.",
  tools: [
    {
      name: "Framer",
      url: "https://framer.com",
      badges: ["freemium"],
      description: "Design-to-live website builder. Publish fast, iterate faster. The right tool for shipping a pile of landing page variants in one night."
    },
    {
      name: "Webflow",
      url: "https://webflow.com",
      badges: ["freemium"],
      description: "More powerful than Framer, steeper learning curve. Pick it when your pages need a CMS or dynamic content."
    },
    {
      name: "Carrd",
      url: "https://carrd.co",
      badges: ["freemium"],
      description: "One-page sites, €19 a year for pro. Headline, subhead, CTA, live in five minutes. The cheapest way to put a claim in front of real traffic."
    },
    {
      name: "CapCut",
      url: "https://capcut.com",
      badges: ["free"],
      description: "Free video editing. Phone-shot, UGC-style ads edited in CapCut beat polished brand creative in paid social, consistently."
    },
    {
      name: "HeyGen",
      url: "https://heygen.com",
      badges: ["paid"],
      description: "AI video avatars. Personalised video at scale without recording yourself 500 times. Feels odd, but the results are good enough to test."
    },
    {
      name: "ElevenLabs",
      url: "https://elevenlabs.io",
      badges: ["paid"],
      description: "Voice cloning and generation. Voicemail drops, voice notes and audio content at scale. The quality is now hard to tell from a real recording."
    }
  ]
};

export const analyticsTools: ToolCategory = {
  label: "Analytics and tracking",
  intro: "If you're testing claims, you need to see what people actually do on the page.",
  tools: [
    {
      name: "PostHog",
      url: "https://posthog.com",
      badges: ["freemium"],
      description: "Product analytics, session replay, feature flags and A/B testing in one, with a generous free tier. Open source and self-hostable."
    },
    {
      name: "Hotjar",
      url: "https://hotjar.com",
      badges: ["freemium"],
      description: "Heatmaps and session recordings. Shows where people click, scroll and give up, which tells you why a page isn't converting."
    },
    {
      name: "Meta Pixel + Conversions API",
      url: "https://developers.facebook.com/docs/marketing-api/conversions-api",
      badges: ["free"],
      description: "Server-side conversion tracking for Meta ads. Without it your attribution is guesswork. Track leads, purchases and custom events. Worth the setup time."
    },
    {
      name: "Plausible",
      url: "https://plausible.io",
      badges: ["paid"],
      description: "Lightweight, privacy-friendly analytics with no cookie banner. Enough for landing page tests when you don't need PostHog's depth."
    }
  ]
};

export const signalTools: ToolCategory = {
  label: "Signal sources",
  intro: "The difference between a list and a signal is timing. These tell you who to contact this week, and why.",
  tools: [
    {
      name: "Common Room",
      url: "https://commonroom.io",
      badges: ["paid"],
      description: "Pulls buying signals from community activity, product usage, social and job changes into one feed you can act on."
    },
    {
      name: "LinkedIn Sales Navigator",
      url: "https://linkedin.com/sales",
      badges: ["paid"],
      description: "Still the richest B2B signal source: saved searches, lead recommendations, job change alerts. Automate it with PhantomBuster or Captain Data."
    },
    {
      name: "BuiltWith / Wappalyzer",
      url: "https://builtwith.com",
      badges: ["freemium"],
      description: "Technographics. When a target installs a competitor's tool, you know, and you show up with context. BuiltWith for deep history, Wappalyzer for live detection."
    },
    {
      name: "Google Alerts + RSS into n8n",
      url: "https://google.com/alerts",
      badges: ["free"],
      description: "Free signal capture for anything the paid tools miss: funding announcements, hiring posts, product launches. Pipe the alerts into your automation layer."
    },
    {
      name: "Trigify",
      url: "https://trigify.io",
      badges: ["paid"],
      description: "LinkedIn monitoring. Job changes, posts on chosen topics, engagement with competitors, growth milestones. Triggers your outreach at the right moment."
    },
    {
      name: "Leadfeeder (Dealfront)",
      url: "https://dealfront.com",
      badges: ["paid"],
      description: "Tells you which companies visit your site, what they read and how often, before anyone fills in a form."
    },
    {
      name: "Bombora",
      url: "https://bombora.com",
      badges: ["paid"],
      description: "B2B intent data at scale. Tracks which companies are researching specific topics across the web. Expensive, but strong for finding accounts already in a buying cycle."
    },
    {
      name: "G2 Buyer Intent",
      url: "https://sell.g2.com",
      badges: ["paid"],
      description: "Shows which companies are comparing you and your competitors on G2. Someone reading category reviews is about as warm as intent gets."
    },
    {
      name: "Sumble",
      url: "https://sumble.com",
      badges: ["paid"],
      description: "Sales intelligence from the Kaggle founders. Tech stacks, projects and org charts across 2.6M+ companies, with signals pulled from job boards, filings and social. Clean data, updated daily."
    }
  ]
};

export const coldEmailTools: ToolCategory = {
  label: "Cold email infrastructure",
  intro: "Deliverability is infrastructure. Get this wrong and nothing else in your outbound matters.",
  tools: [
    {
      name: "Instantly",
      url: "https://instantly.ai",
      badges: ["paid"],
      description: "The default for volume cold email. Unlimited sending accounts, automated warmup, smart rotation and a deliverability dashboard."
    },
    {
      name: "Smartlead",
      url: "https://smartlead.ai",
      badges: ["paid"],
      description: "Instantly's main competitor, with better multi-channel features, a unified inbox and API access. More setup, more flexibility at scale."
    },
    {
      name: "Lemlist",
      url: "https://lemlist.com",
      badges: ["paid"],
      description: "Cold email with personalised images and video, and liquid syntax for deep personalisation. A middle ground between volume and quality."
    },
    {
      name: "Mailforge / Mailscale",
      url: "https://mailforge.ai",
      badges: ["paid"],
      description: "Bulk domain and mailbox setup. Dozens of sending domains and accounts in minutes. The plumbing behind high-volume cold email. Pair it with Instantly or Smartlead."
    }
  ]
};

export const multiChannelTools: ToolCategory = {
  label: "Multi-channel sequencing",
  intro: "Email on its own is noisy. These coordinate LinkedIn, email and other channels in one sequence.",
  tools: [
    {
      name: "La Growth Machine",
      url: "https://lagrowthmachine.com",
      badges: ["paid"],
      description: "LinkedIn, email and X in coordinated sequences, with if-then branching based on engagement. European company, takes GDPR seriously."
    },
    {
      name: "Heyreach",
      url: "https://heyreach.io",
      badges: ["paid"],
      description: "LinkedIn automation at scale. Rotate across multiple accounts, coordinate campaigns, track engagement."
    },
    {
      name: "Expandi",
      url: "https://expandi.io",
      badges: ["paid"],
      description: "Cloud-based LinkedIn automation with smart sequences, warmup and CRM integration. Safer than browser extensions."
    },
    {
      name: "WhatsApp Business API",
      url: "https://business.whatsapp.com",
      badges: ["paid"],
      description: "For the right audience, WhatsApp beats email by a wide margin. Template messages, interactive flows, real conversations. Not for every market, but where it fits, it wins."
    }
  ]
};

export const adsTools: ToolCategory = {
  label: "Ads and paid acquisition",
  intro: "Paid channels are the fastest way to test claims and capture demand that already exists.",
  tools: [
    {
      name: "Meta Ads",
      url: "https://facebook.com/business/ads",
      badges: ["paid"],
      description: "Run 10 to 20 creative variations a week. Kill anything that misses your CPA target after two to three times target spend. UGC-style creative wins."
    },
    {
      name: "Google Ads",
      url: "https://ads.google.com",
      badges: ["paid"],
      description: "Capture existing demand on search. Best for high-intent keywords where people are already looking for a solution."
    },
    {
      name: "LinkedIn Ads",
      url: "https://linkedin.com/ad",
      badges: ["paid"],
      description: "Expensive per click, but unmatched B2B targeting by job title, company size, industry and seniority. Only makes sense for high-ACV products."
    },
    {
      name: "Synthflow / Bland.ai",
      url: "https://synthflow.ai",
      badges: ["paid"],
      description: "AI voice agents for outbound calls. Use them for qualification and booking, not closing, and listen to the recordings."
    }
  ]
};

export interface WorkflowStep {
  title: string;
  description: string;
}

export const workflowSteps: WorkflowStep[] = [
  {
    title: "Spot the signal",
    description: "Job changes, funding rounds, tech installs, hiring. 20 high-intent accounts a day beats a list of 10,000."
  },
  {
    title: "Research with AI",
    description: "Before any touch, your stack already knows what they do, what tools they run and what probably hurts."
  },
  {
    title: "Reach out",
    description: "WhatsApp, LinkedIn DMs, a call with real context. Not another templated email into the void."
  },
  {
    title: "Test claims fast",
    description: "10 to 20 page and ad variants a week. The nos tell you which claim works. Hook rate first, then CTR, then CPA."
  },
  {
    title: "Automate what works",
    description: "Version your prompts, build the missing tools, wire signal to outreach. Only automate what's proven."
  }
];

export interface AntiPattern {
  title: string;
  description: string;
}

export const antiPatterns: AntiPattern[] = [
  {
    title: "Spray and pray at scale",
    description: "More emails does not mean more pipeline. Signal-driven outbound at lower volume converts 5 to 10 times better."
  },
  {
    title: "Tools before method",
    description: "Spend two weeks doing GTM by hand first. Build pages, write outreach, make calls, track what converts. Then buy tools for the bottlenecks you actually hit."
  },
  {
    title: "Copying playbooks blindly",
    description: "What worked for a Series B company with 50 reps won't work for you. Build your own playbook from what converts in your market."
  },
  {
    title: "Over-automating too early",
    description: "Do it manually until you understand what works. Automate the thing that's proven, not the thing you hope will work. Premature automation scales mistakes."
  },
  {
    title: "Ignoring deliverability",
    description: "Your best email means nothing in spam. Warm your domains, set up SPF, DKIM and DMARC, watch your sender reputation. Infrastructure before creativity."
  },
  {
    title: "Data without action",
    description: "A Clay table with 10,000 enriched rows is worthless if nobody messages them. Build the action into the pipeline, not after it."
  }
];

export interface WeeklyStep {
  week: number;
  title: string;
  description: string;
}

export const weeklySteps: WeeklyStep[] = [
  {
    week: 1,
    title: "Foundation",
    description: "Sign up for Clay on the free tier. Build one enrichment table: 50 target accounts, enriched with company data, tech stack and recent news. Write a Google Apps Script that pulls company info into a spreadsheet. Send 10 personalised messages using what you found. Track every response."
  },
  {
    week: 2,
    title: "Signals",
    description: "Set up three signal sources: Google Alerts for your ICP keywords, LinkedIn Sales Navigator saved searches, and one technographic trigger like BuiltWith or Wappalyzer. Connect them to a central sheet or Clay table. Start building your daily feed of high-intent accounts."
  },
  {
    week: 3,
    title: "Velocity",
    description: "Build five landing pages with different claims for the same ICP, using Framer, Carrd or v0. Run traffic to all of them, even at €5 a day each. Build an n8n or Make workflow that connects signal to enrichment to notification. You now have a pipeline machine, not a pipeline process."
  },
  {
    week: 4,
    title: "Compound",
    description: "Write three prompts of your own: account research, personalised first lines, ICP scoring. Version them and A/B test the outputs. Set up Instantly or Smartlead for email infrastructure. Connect everything: signals feed Clay, Clay feeds AI enrichment, AI feeds outreach. You're now a GTM engineer."
  }
];
