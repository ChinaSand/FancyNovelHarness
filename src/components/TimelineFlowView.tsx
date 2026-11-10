import React, { useState } from 'react';
import { TimelineEvent, Character } from '../types';
import { 
  GitFork, 
  Flame, 
  Calendar, 
  Layers, 
  Sparkles, 
  ShieldAlert, 
  Users,
  Compass,
  CheckCircle2
} from 'lucide-react';
import { YinzhangStamp } from './YinzhangStamp';

interface TimelineFlowViewProps {
  events: TimelineEvent[];
  characters: Character[];
  isDarkMode: boolean;
}

export const TimelineFlowView: React.FC<TimelineFlowViewProps> = ({
  events,
  characters,
  isDarkMode,
}) => {
  const [selectedTrack, setSelectedTrack] = useState<string>('all');

  const charMap = new Map<string, Character>();
  characters.forEach((c) => charMap.set(c.id, c));

  const filteredEvents = events.filter((e) => {
    if (selectedTrack !== 'all' && e.track !== selectedTrack) return false;
    return true;
  });

  const getTrackBadge = (track: TimelineEvent['track']) => {
    switch (track) {
      case 'main':
        return { text: '天权天轨主线', color: 'border-blue-500/50 bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300' };
      case 'undercurrent':
        return { text: '墨隐渊薮暗线', color: 'border-teal-500/50 bg-teal-50 text-teal-700 dark:bg-teal-950/40 dark:text-teal-300' };
      case 'faction':
        return { text: '宗门割据角力', color: 'border-amber-500/50 bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300' };
    }
  };

  return (
    <div className={`w-full h-[calc(100vh-4rem)] overflow-y-auto p-6 lg:p-8 select-none ${
      isDarkMode ? 'bg-[#0b0f19] text-slate-100' : 'bg-[#faf8ff] text-slate-900'
    }`}>
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className="font-serif font-black text-2xl tracking-wide">
                编年天轨 · 伏线推演
              </h2>
              <YinzhangStamp text="史牒" size="sm" variant="vermilion" />
            </div>
            <p className="text-xs font-serif text-slate-500 dark:text-slate-400">
              Chronology & Tension Flow • 三千纪元历史大潮、主暗双线推演与重大剧情转折点
            </p>
          </div>

          {/* Track Filter */}
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800/80 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs">
            {[
              { id: 'all', label: '全部天轨' },
              { id: 'main', label: '天权主线' },
              { id: 'undercurrent', label: '墨隐暗流' },
              { id: 'faction', label: '宗门角力' },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setSelectedTrack(t.id)}
                className={`px-3 py-1.5 rounded-md font-serif text-xs transition-colors ${
                  selectedTrack === t.id
                    ? 'bg-white dark:bg-slate-700 text-[#2563eb] dark:text-blue-400 shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tension Arc Overview Banner */}
        <div className={`p-4 rounded-2xl border flex flex-col md:flex-row items-center justify-between gap-4 ${
          isDarkMode ? 'bg-[#0f172a]/90 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
        }`}>
          <div className="space-y-1">
            <span className="text-xs font-serif font-bold text-[#2563eb] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              全书戏剧张力高潮预测 (Narrative Tension Curve)
            </span>
            <p className="text-xs text-slate-500 font-sans">
              根据各伏线交汇点算法评估，第8章（长街斩虚）与第14章（飞升逆阵）为全书两次顶级戏剧冲突峰值。
            </p>
          </div>
          <div className="flex items-center gap-3 font-mono text-xs">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-[#2563eb] border border-blue-200 dark:border-blue-900">
              <span>初波: 卷一第3章 (7/10)</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-600 border border-rose-200 dark:border-rose-900">
              <span>终局: 卷三第14章 (10/10)</span>
            </div>
          </div>
        </div>

        {/* Chronological Timeline Vertical Stack */}
        <div className="relative pl-6 md:pl-10 space-y-8 before:absolute before:left-3 md:before:left-5 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-teal-500 before:to-rose-500">
          {filteredEvents.map((event, index) => {
            const track = getTrackBadge(event.track);

            return (
              <div key={event.id} className="relative group">
                
                {/* Node Milestone Circle on the vertical line */}
                <div className={`absolute -left-6 md:-left-10 top-3 w-6 h-6 rounded-full border-2 bg-white dark:bg-[#0b0f19] flex items-center justify-center transition-transform group-hover:scale-125 ${
                  event.tensionRating >= 8 
                    ? 'border-rose-500 text-rose-500 shadow-[0_0_12px_rgba(225,29,72,0.4)]' 
                    : 'border-[#2563eb] text-[#2563eb]'
                }`}>
                  <span className="w-2 h-2 rounded-full bg-current" />
                </div>

                {/* Event Card */}
                <div className={`rounded-2xl border p-5 transition-all duration-200 ${
                  isDarkMode 
                    ? 'bg-[#0f172a]/90 border-slate-800 hover:border-[#2563eb]/60 shadow-lg' 
                    : 'bg-white border-slate-200/90 hover:border-[#2563eb]/60 shadow-sm'
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#2563eb] dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2 py-0.5 rounded">
                        {event.epoch}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {event.timestamp}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] px-2 py-0.5 rounded border font-mono ${track.color}`}>
                        {track.text}
                      </span>
                      <div className="flex items-center gap-1 text-xs font-mono font-bold text-rose-600">
                        <Flame className="w-3.5 h-3.5" />
                        <span>张力 {event.tensionRating}/10</span>
                      </div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="py-3 space-y-1.5">
                    <h3 className="font-serif font-black text-lg text-slate-900 dark:text-slate-100 group-hover:text-[#2563eb] transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  {/* Characters involved footer */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-serif text-slate-400 text-[11px]">关键涉局人物:</span>
                      <div className="flex items-center -space-x-1.5">
                        {event.involvedCharacters.map((cid) => {
                          const char = charMap.get(cid);
                          if (!char) return null;
                          return (
                            <img
                              key={cid}
                              src={char.avatar}
                              alt={char.name}
                              title={char.name}
                              className="w-5 h-5 rounded-full object-cover ring-1 ring-white dark:ring-slate-900"
                            />
                          );
                        })}
                      </div>
                    </div>

                    {event.relatedNodeId && (
                      <span className="text-[11px] font-mono text-teal-600 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> 映射星图节点
                      </span>
                    )}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
