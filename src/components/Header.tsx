import React from 'react';
import { 
  Network, 
  PenTool, 
  BookOpen, 
  Users, 
  GitFork, 
  Sparkles, 
  Plus, 
  Moon, 
  Sun, 
  Download, 
  Scroll,
  Search
} from 'lucide-react';
import { StudioTab } from '../types';
import { YinzhangStamp } from './YinzhangStamp';

interface HeaderProps {
  activeTab: StudioTab;
  onTabChange: (tab: StudioTab) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenNewNodeModal: () => void;
  onOpenExportModal: () => void;
  totalWordCount: number;
  totalNodesCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onTabChange,
  isDarkMode,
  onToggleDarkMode,
  onOpenNewNodeModal,
  onOpenExportModal,
  totalWordCount,
  totalNodesCount,
}) => {
  const tabs: { id: StudioTab; label: string; subLabel: string; icon: React.ReactNode }[] = [
    { id: 'graph', label: '星图引线', subLabel: 'Story Graph', icon: <Network className="w-4 h-4" /> },
    { id: 'manuscript', label: '卷轴研墨', subLabel: 'Manuscript', icon: <PenTool className="w-4 h-4" /> },
    { id: 'codex', label: '格物博物志', subLabel: 'World Codex', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'characters', label: '因缘谱系', subLabel: 'Characters', icon: <Users className="w-4 h-4" /> },
    { id: 'timeline', label: '编年天轨', subLabel: 'Chronology', icon: <GitFork className="w-4 h-4" /> },
    { id: 'muse', label: '墨灵推演', subLabel: 'Ink Muse AI', icon: <Sparkles className="w-4 h-4" /> },
  ];

  return (
    <header className={`sticky top-0 z-40 border-b transition-colors duration-200 select-none ${
      isDarkMode 
        ? 'bg-[#0b0f19]/90 border-slate-800 text-slate-100 backdrop-blur-md' 
        : 'bg-[#faf8ff]/95 border-slate-200/80 text-slate-900 backdrop-blur-md'
    }`}>
      {/* Top tier brand & telemetry */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Brand & Project Info */}
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#2563eb] to-[#0d9488] flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <Scroll className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-serif font-bold text-lg tracking-tight">
                    墨衍天机
                  </span>
                  <YinzhangStamp text="天工" size="sm" variant="vermilion" />
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border hidden sm:inline-block ${
                    isDarkMode ? 'border-slate-700 text-slate-400 bg-slate-800/50' : 'border-slate-200 text-slate-500 bg-slate-100'
                  }`}>
                    v2.4.0
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="font-serif text-[#2563eb] font-medium truncate">
                    《碧落千机录》
                  </span>
                  <span className={`text-[11px] font-mono ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    • {totalWordCount.toLocaleString()} 字 • {totalNodesCount} 剧情枢纽
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-white dark:bg-slate-800 text-[#2563eb] dark:text-blue-400 shadow-sm border border-slate-200/50 dark:border-slate-700'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800/40'
                  }`}
                >
                  <span className={isActive ? 'text-[#2563eb] dark:text-blue-400' : 'text-slate-400'}>
                    {tab.icon}
                  </span>
                  <div className="flex flex-col text-left">
                    <span className="font-serif font-semibold">{tab.label}</span>
                    <span className="text-[9px] font-mono opacity-60 leading-none">{tab.subLabel}</span>
                  </div>
                </button>
              );
            })}
          </nav>

          {/* Quick Actions & Preferences */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenNewNodeModal}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#2563eb] hover:bg-blue-600 active:scale-95 text-white shadow-sm shadow-blue-500/20 transition-all"
            >
              <Plus className="w-3.5 h-3.5" />
              <span className="font-serif">新立灵思</span>
            </button>

            <button
              onClick={onOpenExportModal}
              className={`p-2 rounded-lg border text-xs transition-colors ${
                isDarkMode 
                  ? 'border-slate-700 hover:bg-slate-800 text-slate-300' 
                  : 'border-slate-200 hover:bg-slate-100 text-slate-700'
              }`}
              title="导出长卷 (Export Story Bible)"
            >
              <Download className="w-4 h-4" />
            </button>

            <button
              onClick={onToggleDarkMode}
              className={`p-2 rounded-lg border text-xs transition-colors ${
                isDarkMode 
                  ? 'border-slate-700 hover:bg-slate-800 text-amber-400' 
                  : 'border-slate-200 hover:bg-slate-100 text-slate-600'
              }`}
              title={isDarkMode ? '切换白日生宣模式 (Day Xuan)' : '切换夜色玄墨模式 (Night Ink)'}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

        </div>

        {/* Mobile / Tablet Horizontal Navigation Scrollbar */}
        <div className="lg:hidden flex items-center gap-2 overflow-x-auto py-2 border-t border-slate-200/60 dark:border-slate-800/80 no-scrollbar">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#2563eb] text-white shadow-sm'
                    : isDarkMode 
                      ? 'bg-slate-800/80 text-slate-300' 
                      : 'bg-slate-100 text-slate-700'
                }`}
              >
                <span>{tab.icon}</span>
                <span className="font-serif">{tab.label}</span>
              </button>
            );
          })}
        </div>

      </div>
    </header>
  );
};
