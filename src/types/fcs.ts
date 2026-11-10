export type FcsPageId = 
  | '01-dashboard'
  | '02-novel-graph'
  | '03-ai-agent'
  | '04-editor'
  | '05-timeline'
  | '06-version-control'
  | '07-collaboration'
  | '08-review-gate'
  | '09-plugin-manager'
  | '10-project-settings'
  | '11-asset-manager'
  | '12-publish-share';

export interface FcsProject {
  id: string;
  title: string;
  subtitle: string;
  statusBadge: string;
  statusType: 'in_progress' | 'completed' | 'reviewing';
  description: string;
  updatedAt: string;
  wordCount: string;
  coverImage?: string;
}

export interface FcsGraphNode {
  id: string;
  title: string;
  role: string;
  faction: string;
  statusText: string;
  devotionRate?: string;
  category: 'character' | 'plot_main' | 'event_key' | 'guardian' | 'antagonist';
  x: number;
  y: number;
  connectedTo: { targetId: string; label: string; highTension?: boolean }[];
  connectionsCount?: number;
}

export interface FcsCharacterDetail {
  name: string;
  tag: string;
  sealTag: string;
  aliasFaction: string;
  ageRealm: string;
  identity: string;
  coreMotive: string;
  devotionIndex: number;
  crisisDegree: number;
  relatedCount: number;
  relations: string[];
}

export interface FcsAiMessage {
  id: string;
  sender: 'user' | 'assistant';
  content: string;
  timestamp: string;
  metrics?: {
    words: number;
    readTime: string;
    emotion: string;
    clue: string;
  };
}

export interface FcsAssetItem {
  id: string;
  code: string;
  title: string;
  category: 'role' | 'scene' | 'item' | 'music' | 'storyboard';
  categoryLabel: string;
  tag: string;
  image: string;
  specs: string;
  badge?: string;
  fileSize?: string;
  format?: string;
  referencesCount?: number;
  colorPalette?: string[];
}
