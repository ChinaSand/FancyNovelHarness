export type StudioTab = 
  | 'graph' 
  | 'manuscript' 
  | 'codex' 
  | 'characters' 
  | 'timeline' 
  | 'muse';

export type StoryNodeType = 'milestone' | 'conflict' | 'revelation' | 'character_arc' | 'world_shift';

export type NodeStatus = 'completed' | 'in_progress' | 'planned' | 'draft';

export interface StoryNode {
  id: string;
  title: string;
  subtitle: string;
  type: StoryNodeType;
  status: NodeStatus;
  x: number;
  y: number;
  chapterNumber: number;
  summary: string;
  tensionLevel: number; // 1 to 10
  characters: string[];
  location: string;
  factions: string[];
  connections: string[]; // target node IDs
  wordCountTarget?: number;
  wordCountActual?: number;
  isKeyMilestone?: boolean;
}

export interface Character {
  id: string;
  name: string;
  courtesyName?: string; // 字
  title: string;
  role: 'protagonist' | 'antagonist' | 'mentor' | 'deuteragonist' | 'catalyst';
  faction: string;
  avatar: string;
  bio: string;
  cyberAugmentation: string; // 赛博义体/灵枢法宝
  martialPath: string; // 武学脉络
  motive: string;
  status: 'alive' | 'ascended' | 'compromised' | 'vanished';
  stats: {
    wits: number; // 智谋
    combat: number; // 战力
    devotion: number; // 执念
    secrecy: number; // 隐秘
  };
  relationships: {
    targetId: string;
    relationshipType: string;
    dynamic: 'allied' | 'rival' | 'familial' | 'covert';
  }[];
}

export interface WorldCodexItem {
  id: string;
  name: string;
  originalName: string;
  category: 'faction' | 'artifact' | 'geography' | 'protocol';
  classification: string;
  sealText: string;
  summary: string;
  details: string;
  tags: string[];
  dangerLevel: 'harmonious' | 'guarded' | 'volatile' | 'cataclysmic';
  loreQuote: string;
}

export interface Chapter {
  id: string;
  volumeNumber: number;
  chapterNumber: number;
  volumeTitle: string;
  title: string;
  status: 'sealed' | 'drafting' | 'planned';
  wordCount: number;
  lastUpdated: string;
  summary: string;
  content: string;
  keyStamps: string[];
}

export interface TimelineEvent {
  id: string;
  epoch: string;
  timestamp: string;
  title: string;
  type: 'celestial_shift' | 'war' | 'discovery' | 'internal_strife';
  description: string;
  track: 'main' | 'undercurrent' | 'faction';
  tensionRating: number;
  involvedCharacters: string[];
  relatedNodeId?: string;
}
