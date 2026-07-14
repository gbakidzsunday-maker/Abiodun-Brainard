export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  details: string;
  category: 'early' | 'social_chain' | 'podcast' | 'dragons_den' | 'ventures';
}

export interface VentureItem {
  name: string;
  description: string;
  role: string;
  logo: string;
  tags: string[];
  stats: string;
  website: string;
}

export interface LawItem {
  number: number;
  title: string;
  category: 'The Self' | 'The Story' | 'The Team' | 'The Business';
  description: string;
  quote: string;
  actionPlan: string[];
}

export interface EpisodeItem {
  id: string;
  title: string;
  duration: string;
  guest: string;
  guestRole: string;
  summary: string;
  playbackUrl: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'steven';
  text: string;
  timestamp: string;
}

export interface InvestmentItem {
  company: string;
  industry: string;
  deal: string;
  details: string;
  season: string;
  outcome: string;
}
