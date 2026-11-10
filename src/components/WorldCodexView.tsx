import React, { useState } from 'react';
import { WorldCodexItem } from '../types';
import { 
  BookOpen, 
  ShieldAlert, 
  Tag, 
  Plus, 
  Search, 
  Compass, 
  Cpu, 
  Flame, 
  ExternalLink,
  X
} from 'lucide-react';
import { YinzhangStamp } from './YinzhangStamp';

interface WorldCodexViewProps {
  codexItems: WorldCodexItem[];
  onOpenNewEntry: () => void;
  isDarkMode: boolean;
}

export const WorldCodexView: React.FC<WorldCodexViewProps> = ({
  codexItems,
  onOpenNewEntry,
  isDarkMode,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [inspectingItem, setInspectingItem] = useState<WorldCodexItem | null>(null);

  const categories = [
    { id: 'all', label: '全部格物 (All Entries)' },
    { id: 'faction', label: '宗门势力 (Factions)' },
    { id: 'artifact', label: '天工奇物 (Artifacts)' },
    { id: 'geography', label: '山川界域 (Geography)' },
    { id: 'protocol', label: '禁法协议 (Protocols)' },
  ];

  const filteredItems = codexItems.filter((item) => {
    if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        item.name.toLowerCase().includes(q) ||
        item.originalName.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return true;
  });

  const getDangerBadge = (level: WorldCodexItem['dangerLevel']) => {
    switch (level) {
      case 'harmonious':
        return { text: '冲和安平', color: 'border-teal-500/50 bg-teal-50 text-teal-700 dark:bg-teal-950/40 dark:text-teal-300' };
      case 'guarded':
        return { text: '戒备隐秘', color: 'border-blue-500/50 bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300' };
      case 'volatile':
        return { text: '动荡杀伐', color: 'border-amber-500/50 bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300' };
      case 'cataclysmic':
        return { text: '天地浩劫', color: 'border-rose-500/50 bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300' };
    }
  };

  const getCategoryIcon = (category: WorldCodexItem['category']) => {
    switch (category) {
      case 'faction':
        return <Compass className="w-4 h-4 text-[#2563eb]" />;
      case 'artifact':
        return <Cpu className="w-4 h-4 text-[#0d9488]" />;
      case 'geography':
        return <BookOpen className="w-4 h-4 text-purple-600" />;
      case 'protocol':
        return <Flame className="w-4 h-4 text-[#e11d48]" />;
    }
  };

  return (
    <div className={`w-full h-[calc(100vh-4rem)] overflow-y-auto p-6 lg:p-8 select-none ${
      isDarkMode ? 'bg-[#0b0f19] text-slate-100' : 'bg-[#faf8ff] text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Top Header & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className="font-serif font-black text-2xl tracking-wide">
                格物博物志
              </h2>
              <YinzhangStamp text="通考" size="sm" variant="vermilion" />
            </div>
            <p className="text-xs font-serif text-slate-500 dark:text-slate-400">
              Tech-Chinoiserie World-Building Codex • 记载九霄神机宗门、天工器物、星轨地理与禁忌协议
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative w-64">
              <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
              <input
                type="text"
                placeholder="搜索格物考据、标签..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border font-serif focus:outline-none focus:ring-1 focus:ring-[#2563eb] ${
                  isDarkMode ? 'bg-slate-800/80 border-slate-700 text-slate-200' : 'bg-white border-slate-200 text-slate-800'
                }`}
              />
            </div>

            <button
              onClick={onOpenNewEntry}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-serif font-medium bg-[#2563eb] hover:bg-blue-600 active:scale-95 text-white rounded-lg shadow-sm transition-all"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>录入新条目</span>
            </button>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-serif font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#2563eb] text-white shadow-sm'
                  : isDarkMode
                  ? 'bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white'
                  : 'bg-white border border-slate-200 text-slate-700 hover:text-slate-900 shadow-2xs'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Modular Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const danger = getDangerBadge(item.dangerLevel);
            const icon = getCategoryIcon(item.category);

            return (
              <div
                key={item.id}
                onClick={() => setInspectingItem(item)}
                className={`relative rounded-2xl border p-5 flex flex-col justify-between cursor-pointer transition-all duration-200 group hover:-translate-y-1 ${
                  isDarkMode 
                    ? 'bg-[#0f172a]/90 border-slate-800/90 hover:border-[#2563eb]/60 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.4)]' 
                    : 'bg-white/90 border-slate-200/90 hover:border-[#2563eb]/60 shadow-[0_8px_24px_-4px_rgba(37,99,235,0.06)]'
                }`}
              >
                {/* Chinese Lattice Corner Elements (榫卯花窗角纹) */}
                <span className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-slate-300 dark:border-slate-700 rounded-tl-sm pointer-events-none group-hover:border-[#2563eb]" />
                <span className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-slate-300 dark:border-slate-700 rounded-tr-sm pointer-events-none group-hover:border-[#2563eb]" />
                <span className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-slate-300 dark:border-slate-700 rounded-bl-sm pointer-events-none group-hover:border-[#2563eb]" />
                <span className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-slate-300 dark:border-slate-700 rounded-br-sm pointer-events-none group-hover:border-[#2563eb]" />

                <div className="space-y-3">
                  {/* Category & Stamp */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-serif font-medium text-slate-500 dark:text-slate-400">
                      {icon}
                      <span>{item.classification}</span>
                    </div>
                    <YinzhangStamp text={item.sealText} size="sm" variant="vermilion" />
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="font-serif font-bold text-lg text-slate-900 dark:text-slate-100 group-hover:text-[#2563eb] dark:group-hover:text-blue-400 transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400">
                      {item.originalName}
                    </span>
                  </div>

                  {/* Summary */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>

                  {/* Lore Quote */}
                  <div className="p-2.5 rounded-lg border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 text-[11px] font-serif italic text-slate-500 dark:text-slate-400">
                    {item.loreQuote}
                  </div>
                </div>

                {/* Footer Tags & Danger Level */}
                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1">
                    {item.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <span className={`text-[10px] px-2 py-0.5 rounded-full border font-serif font-medium ${danger.color}`}>
                    {danger.text}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Inspecting Item Modal */}
      {inspectingItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in">
          <div className={`w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border p-6 shadow-2xl relative ${
            isDarkMode ? 'bg-[#0f172a] border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            <button
              onClick={() => setInspectingItem(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <YinzhangStamp text={inspectingItem.sealText} size="md" variant="vermilion" />
                <div>
                  <h3 className="font-serif font-black text-2xl">
                    {inspectingItem.name}
                  </h3>
                  <span className="font-mono text-xs text-slate-400">
                    {inspectingItem.originalName} • {inspectingItem.classification}
                  </span>
                </div>
              </div>

              {/* Lore Quote Banner */}
              <blockquote className="p-3.5 rounded-xl border-l-4 border-[#2563eb] bg-blue-50/60 dark:bg-blue-950/30 text-xs font-serif italic text-slate-700 dark:text-slate-300">
                {inspectingItem.loreQuote}
              </blockquote>

              <div className="space-y-2">
                <h4 className="font-serif font-bold text-sm text-slate-900 dark:text-slate-100">
                  概貌要旨 (Summary)
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  {inspectingItem.summary}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-serif font-bold text-sm text-slate-900 dark:text-slate-100">
                  机巧架构与秘史详述 (Structural Details)
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans whitespace-pre-line">
                  {inspectingItem.details}
                </p>
              </div>

              {/* Tags and Threat */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {inspectingItem.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
                <div className="text-xs font-mono text-slate-400">
                  界域危险评定: {inspectingItem.dangerLevel}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
