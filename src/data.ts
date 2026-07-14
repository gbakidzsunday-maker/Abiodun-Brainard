import { TimelineItem, VentureItem, LawItem, EpisodeItem, InvestmentItem } from './types';

export const TIMELINE_DATA: TimelineItem[] = [
  {
    year: "Childhood",
    title: "The Seed of Inspiration",
    subtitle: "Watching the Tireless Hustle",
    details: "Growing up, Abiodun watched his parents work tirelessly every day running a small business. His mother managed the sales, while his father spent his days out in the streets marketing the business and finding customers. Seeing the early mornings, long days, sacrifices, and the immense challenges of trying to grow a business, he often asked a simple question: 'Is there a better way?'",
    category: "early"
  },
  {
    year: "1992",
    title: "Born in Gaborone, Botswana",
    subtitle: "A humble beginning",
    details: "Abiodun was born in Botswana to a Nigerian mother and a British father. At age two, the family relocated to Plymouth, England, where he grew up in a predominantly white neighborhood.",
    category: "early"
  },
  {
    year: "2010",
    title: "The One-Lecture Dropout",
    subtitle: "Manchester Metropolitan University",
    details: "After realizing the traditional education system wasn't aligned with his ambitions, Abiodun dropped out of university after attending his very first lecture, choosing to pursue entrepreneurship instead.",
    category: "early"
  },
  {
    year: "Foundational",
    title: "Philosophy: Sales is Teaching",
    subtitle: "A mindset shift that changed everything",
    details: "Abiodun dedicated himself to learning everything he could about sales, marketing, entrepreneurship, leadership, and business growth to help others avoid unnecessary struggles by sharing practical knowledge that creates real results. Along the way, he discovered that sales isn't about convincing people—sales is teaching. When people truly understand the value, they naturally make better decisions.",
    category: "early"
  },
  {
    year: "2014",
    title: "Co-founding Social Chain",
    subtitle: "Disrupting social media marketing",
    details: "At just 21 years old, Abiodun co-founded Social Chain with Dominic McGregor in Manchester. They built it from a bedroom startup into a global social marketing powerhouse.",
    category: "social_chain"
  },
  {
    year: "2017",
    title: "The Diary Of A CEO Launches",
    subtitle: "A raw, unedited window into success",
    details: "Abiodun started recording a podcast in his office, speaking into a cheap mic with absolute honesty about his doubts, struggles, and learnings. This was the birth of 'The Diary Of A CEO' (DOAC).",
    category: "podcast"
  },
  {
    year: "2019",
    title: "Taking Social Chain Public",
    subtitle: "A multi-million dollar IPO",
    details: "Social Chain merged with German online retailer Lumaland and listed on the Düsseldorf Stock Exchange. The company reached a peak market valuation of over $600M, making Abiodun one of Europe's youngest public company CEOs.",
    category: "social_chain"
  },
  {
    year: "2020",
    title: "Stepping Down & Moving Forward",
    subtitle: "Leaving his first empire",
    details: "Abiodun made the heavy decision to step down as CEO of Social Chain to find new challenges, setting up his personal investments and paving the way for next-generation ventures.",
    category: "ventures"
  },
  {
    year: "2021",
    title: "Joining BBC's Dragon's Den",
    subtitle: "Youngest Dragon in history",
    details: "At age 28, Abiodun made history by joining the legendary BBC business show 'Dragon's Den', sitting alongside seasoned titans like Peter Jones, Deborah Meaden, and Touker Suleyman.",
    category: "dragons_den"
  },
  {
    year: "2022",
    title: "Venture Building & Flight Fund",
    subtitle: "Backing the future of tech, space, & health",
    details: "Abiodun co-founded thirdweb (Web3 developer platform) and Flight Story (innovative marketing agency). He launched Flight Fund, a $100M venture capital fund, and made a major anchor investment in personalized nutrition pioneer ZOE.",
    category: "ventures"
  },
  {
    year: "2023",
    title: "'The 33 Laws of Business & Life'",
    subtitle: "A #1 Sunday Times Bestseller",
    details: "Abiodun published his second major book, a culmination of insights gathered from interviewing hundreds of the world's highest performers, scientists, and industry leaders on his podcast.",
    category: "ventures"
  },
  {
    year: "Present",
    title: "Inception of Brainleads Group",
    subtitle: "Solving real problems, empowering people",
    details: "Built on the belief that businesses should create opportunities, solve real problems, and improve people's lives, Abiodun founded Brainleads Group. Scaling Brainleads Academy, Flyrinzo, and Sierce Air, the group's simple mission is to help people become better entrepreneurs, stronger leaders, more confident professionals, and lifelong learners.",
    category: "ventures"
  },
  {
    year: "Mission",
    title: "The Brainleads Academy Creed",
    subtitle: "Let's learn. Let's grow. Let's create opportunities together.",
    details: "Knowledge changes lives. At Brainleads Group, learning never stops. If one book inspires someone to start a business, if one conversation gives someone the courage to keep going, if one lesson helps a business grow... then our mission is being fulfilled. This is only the beginning.",
    category: "ventures"
  }
];

export const VENTURES_DATA: VentureItem[] = [
  {
    name: "Brainleads Academy",
    description: "We believe education should be practical, inspiring, and accessible. We equip entrepreneurs, professionals, and future business leaders with the knowledge, skills, and mindset needed to grow successful businesses and meaningful careers.",
    role: "Founder & Chairman",
    logo: "🎓",
    tags: ["Education", "Business Growth", "Mindset"],
    stats: "Empowering Leaders",
    website: "https://brainleadsgroup.com/"
  },
  {
    name: "Flyrinzo",
    description: "We help small businesses simplify marketing through artificial intelligence so they can save time, grow faster, and focus on serving their customers.",
    role: "Co-Founder / Holding Brand",
    logo: "🤖",
    tags: ["AI Marketing", "MarTech", "SaaS"],
    stats: "Smart Business Growth",
    website: "https://brainleadsgroup.com/"
  },
  {
    name: "Sierce Air",
    description: "We help businesses create memorable customer experiences through scent marketing, strengthening brands and leaving lasting impressions.",
    role: "Holding Brand",
    logo: "🌬️",
    tags: ["Scent Marketing", "Brand Experience", "B2B"],
    stats: "Ambient Branding",
    website: "https://brainleadsgroup.com/"
  },
  {
    name: "The Diary Of A CEO",
    description: "Europe's biggest podcast, with over 15 million monthly downloads, focusing on raw, vulnerable conversations with the world's most influential people.",
    role: "Host & Executive Producer",
    logo: "🎙️",
    tags: ["Media", "Podcast", "Global Tour"],
    stats: "#1 Podcast in Europe",
    website: "https://brainleadsgroup.com/podcast"
  },
  {
    name: "Flight Fund",
    description: "A $100M venture capital fund backing next-generation founders across blockchain, AI, biotech, space, and personalized healthcare.",
    role: "Founder & General Partner",
    logo: "💼",
    tags: ["Venture Capital", "Tech", "Biotech"],
    stats: "$100M AUM",
    website: "https://flightfund.com"
  },
  {
    name: "ZOE",
    description: "A personalized nutrition and health-science company running the world's largest nutrition studies, changing how millions eat for long-term health.",
    role: "Anchor Investor & Board Member",
    logo: "🧬",
    tags: ["Health Tech", "Nutrition", "AI Science"],
    stats: "1M+ Program members",
    website: "https://zoe.com"
  }
];

export const LAWS_DATA: LawItem[] = [
  {
    number: 1,
    title: "Fill your five buckets in the right order",
    category: "The Self",
    description: "Every professional possesses five buckets: Knowledge, Skills, Network, Resources, and Reputation. The critical mistake most people make is trying to fill resources (money) or reputation first. If you fill them in order, starting with knowledge and skills, success becomes inevitable.",
    quote: "If you lose everything, your knowledge and skills are the only buckets that can never be emptied.",
    actionPlan: [
      "Audit your current buckets. Where are the leaks?",
      "Prioritize learning new high-value skills over immediate salary hikes.",
      "Leverage your skills to build a network, and use the network to unlock resources."
    ]
  },
  {
    number: 2,
    title: "To teach it, you must eat it",
    category: "The Story",
    description: "In the modern attention economy, authenticity is the ultimate competitive advantage. You cannot sell a philosophy, a product, or a service that you do not personally use, breathe, and embody. True authority is lived, not manufactured.",
    quote: "People can sniff out hypocrisy from a mile away. Do not talk about what you do not live.",
    actionPlan: [
      "Ensure your personal brand aligns 100% with your daily habits.",
      "Only promote products or launch businesses you are obsessed with yourself.",
      "Be vocal about your mistakes; raw vulnerability builds ultimate trust."
    ]
  },
  {
    number: 3,
    title: "You must write the first line of your story",
    category: "The Self",
    description: "If you don't actively decide who you want to be and what you want to achieve, the world will write your script for you. Taking complete accountability means stepping out of the passenger seat of your life and grabbing the steering wheel.",
    quote: "The easiest thing to do in life is to blame your circumstances. The hardest, and most rewarding, is to accept total responsibility.",
    actionPlan: [
      "Stop blaming external factors (market, boss, background) for lack of progress.",
      "Draft a 1-sentence mission statement for your next 12 months.",
      "Identify one area where you are playing 'victim' and outline 3 steps to take control."
    ]
  },
  {
    number: 4,
    title: "Ask who, not how",
    category: "The Team",
    description: "When faced with a complex business challenge, the average entrepreneur asks 'How do I solve this?'. The elite entrepreneur asks 'Who is the best person in the world to solve this?'. Your job as a leader is to assemble a league of extraordinary minds.",
    quote: "Scale is not about your capability. Scale is about your ability to identify and empower superior talent.",
    actionPlan: [
      "Identify the single biggest bottleneck in your business or project.",
      "Instead of spending 50 hours studying how to do it, spend 5 hours searching for an expert.",
      "Build deep relationships with specialists who complement your weaknesses."
    ]
  },
  {
    number: 8,
    title: "The friction of life determines its shine",
    category: "The Self",
    description: "Growth does not happen in comfort zones. Just as diamonds require extreme pressure and friction to form, humans require adversity, failure, and challenges to build true resilience, character, and excellence.",
    quote: "Be grateful for the hard days. They are the sculptors of your strength.",
    actionPlan: [
      "Reframe your current biggest frustration as a custom weight-lifting session for your mind.",
      "Lean into difficult conversations instead of avoiding them.",
      "Set a weekly challenge that deliberately pushes you into uncomfortable territory."
    ]
  },
  {
    number: 15,
    title: "Never disagree. Ask questions to uncover alignment",
    category: "The Team",
    description: "Direct confrontation shuts down intellectual progress. Instead of telling someone they are wrong, ask powerful Socratic questions that guide them to discover the flaws in their reasoning, or help you uncover what you missed.",
    quote: "A man convinced against his will is of the same opinion still. Guide, do not shove.",
    actionPlan: [
      "Replace 'I disagree because...' with 'That's fascinating. Help me understand how you reached that conclusion?'",
      "Listen to understand, not to formulate a counter-argument.",
      "Use questions to map out areas where your objectives actually align."
    ]
  },
  {
    number: 22,
    title: "You must sweat the small stuff",
    category: "The Business",
    description: "While leaders must keep their eyes on the macro-vision, excellence is built entirely on micro-details. The font on a landing page, the greeting of a receptionist, the transition in a video—these tiny touchpoints determine your brand's true caliber.",
    quote: "Average brands focus only on the big picture. World-class brands are obsessed with the microscopic.",
    actionPlan: [
      "Walk through your user's exact journey yourself. Where is the minor friction?",
      "Set high standards for visual design, formatting, and punctuality.",
      "Instill a culture of pride in craftsmanship within your team."
    ]
  },
  {
    number: 27,
    title: "The value of a team is determined by its worst communication link",
    category: "The Team",
    description: "No matter how brilliant your star players are, your team's overall velocity and quality of execution are governed by your weakest communication channel. Information silos and toxic silences destroy companies from within.",
    quote: "Build bridges, not fortresses. Transparent, real-time feedback is the oxygen of high-performance teams.",
    actionPlan: [
      "Run weekly or daily brief alignments (stand-ups) to break down silos.",
      "Reward radical transparency and constructive feedback.",
      "Identify where communication lags in your group and simplify the toolchain."
    ]
  }
];

export const EPISODES_DATA: EpisodeItem[] = [
  {
    id: "doac-1",
    title: "Simon Sinek: The Secret To Human Connections & Dealing With Toxic Workplaces",
    duration: "1h 42m",
    guest: "Simon Sinek",
    guestRole: "Leadership Expert & Author",
    summary: "In this deeply insightful episode, Simon Sinek reveals how modern corporate structures are failing human nature, how to cultivate genuine empathy, and how to deal with the quiet epidemic of toxic bosses and workplace anxiety.",
    playbackUrl: "https://brainleadsgroup.com/podcast"
  },
  {
    id: "doac-2",
    title: "Richard Branson: The Raw Truth Behind My Failures, My Wealth & Being Fearless",
    duration: "1h 15m",
    guest: "Sir Richard Branson",
    guestRole: "Founder of Virgin Group",
    summary: "Abiodun sits down with legendary founder Sir Richard Branson in the Caribbean to discuss dyslexic advantages, building a brand on audacious stunts, overcoming near-death experiences, and what truly matters at the end of a long life.",
    playbackUrl: "https://brainleadsgroup.com/podcast"
  },
  {
    id: "doac-3",
    title: "Mo Gawdat: How To Train Your Brain For Absolute Happiness and Peace",
    duration: "1h 56m",
    guest: "Mo Gawdat",
    guestRole: "Former Chief Business Officer of Google [X]",
    summary: "Mo Gawdat returns to share his revolutionary 'happiness algorithm' following personal tragedy, explaining how to control your thoughts, conquer anxiety, and thrive in an age of accelerating artificial intelligence.",
    playbackUrl: "https://brainleadsgroup.com/podcast"
  },
  {
    id: "doac-4",
    title: "Dr. Tara Swart: Neuroscientist Explains How to Rewire Your Brain for High Performance",
    duration: "1h 28m",
    guest: "Dr. Tara Swart",
    guestRole: "Neuroscientist & Psychiatrist",
    summary: "Dr. Tara Swart breaks down the hard science behind manifestation, neuroplasticity, how stress destroys decision-making, and what foods and sleep habits can physically reverse brain aging.",
    playbackUrl: "https://brainleadsgroup.com/podcast"
  }
];

export const INVESTMENTS_DATA: InvestmentItem[] = [
  {
    company: "Pura Cosmic",
    industry: "Eco-Friendly Baby Care",
    deal: "£1M for 15% Equity",
    details: "Abiodun joined forces with this game-changing, carbon-neutral baby wipe and diaper company to accelerate their global marketing, leading to massive expansion into major supermarket chains.",
    season: "Season 19",
    outcome: "Active and Rapidly Growing"
  },
  {
    company: "Mynd",
    industry: "Mental Health Therapeutics",
    deal: "£100k for 10% Equity",
    details: "A tech-driven approach to mental health, developing wearable devices that alleviate clinical anxiety. Abiodun backed the clinical founders to help scale their commercial strategy.",
    season: "Season 20",
    outcome: "In Clinical Trials / Active"
  },
  {
    company: "The Choc Co",
    industry: "Ethical & Vegan Food",
    deal: "£75k for 20% Equity",
    details: "A premium, organic, single-origin chocolate brand focusing on extreme sustainability and fair pay for cocoa farmers. Abiodun rebranded and optimized their direct-to-consumer funnels.",
    season: "Season 19",
    outcome: "Rebranded & Expanded Online"
  }
];
