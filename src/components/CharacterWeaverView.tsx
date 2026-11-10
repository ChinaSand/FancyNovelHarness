import React, { useState } from 'react';
import { Character } from '../types';
import { 
  Users, 
  Shield, 
  Swords, 
  Heart, 
  EyeOff, 
  Sparkles, 
  Cpu, 
  BookOpen, 
  Zap,
  ArrowRight
} from 'lucide-react';
import { YinzhangStamp } from './YinzhangStamp';

interface CharacterWeaverViewProps {
  characters: Character[];
  isDarkMode: boolean;
}

export const CharacterWeaverView: React.FC<CharacterWeaverViewProps> = ({
  characters,
  isDarkMode,
}) => {
  const [selectedCharacterId, setSelectedCharacterId] = useState<string>(characters[0]?.id || '');

  const selectedChar = characters.find((c) => c.id === selectedCharacterId) || characters[0];
  const charMap = new Map<string, Character>();
  characters.forEach((c) => charMap.set(c.id, c));

  const getRoleBadge = (role: Character['role']) => {
    switch (role) {
      case 'protagonist':
        return { text: '执剑主角', color: 'border-blue-500/50 bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300' };
      case 'deuteragonist':
        return { text: '宿敌同道', color: 'border-rose-500/50 bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300' };
      case 'mentor':
        return { text: '引路宗师', color: 'border-purple-500/50 bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300' };
      default:
        return { text: '因缘关键', color: 'border-teal-500/50 bg-teal-50 text-teal-700 dark:bg-teal-950/40 dark:text-teal-300' };
    }
  };

  const getStatusBadge = (status: Character['status']) => {
    switch (status) {
      case 'alive':
        return { text: '入世行道', color: 'text-teal-600' };
      case 'compromised':
        return { text: '心魔道劫', color: 'text-rose-600' };
      case 'ascended':
        return { text: '神机合道', color: 'text-blue-600' };
      case 'vanished':
        return { text: '云隐无踪', color: 'text-slate-400' };
    }
  };

  return (
    <div className={`w-full h-[calc(100vh-4rem)] overflow-y-auto p-6 lg:p-8 select-none ${
      isDarkMode ? 'bg-[#0b0f19] text-slate-100' : 'bg-[#faf8ff] text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className="font-serif font-black text-2xl tracking-wide">
                因缘人物谱系
              </h2>
              <YinzhangStamp text="人纪" size="sm" variant="vermilion" />
            </div>
            <p className="text-xs font-serif text-slate-500 dark:text-slate-400">
              Character Weaver & Relationship Matrix • 人物因缘命盘、赛博灵枢法宝与宗门执念网络
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-500">
              当前录入 {characters.length} 位核心人物
            </span>
          </div>
        </div>

        {/* Top Horizontal Character Selector Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {characters.map((char) => {
            const isSelected = char.id === selectedCharacterId;
            const role = getRoleBadge(char.role);

            return (
              <div
                key={char.id}
                onClick={() => setSelectedCharacterId(char.id)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 flex items-center gap-3.5 ${
                  isSelected
                    ? 'ring-2 ring-[#2563eb] bg-blue-50/70 dark:bg-blue-950/40 border-[#2563eb] shadow-md shadow-blue-500/10 scale-[1.02]'
                    : isDarkMode
                    ? 'bg-[#0f172a]/80 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-2xs'
                }`}
              >
                <img
                  src={char.avatar}
                  alt={char.name}
                  className="w-12 h-12 rounded-xl object-cover ring-2 ring-white dark:ring-slate-800 shadow-sm"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-serif font-bold text-sm text-slate-900 dark:text-slate-100 truncate">
                      {char.name}
                    </h3>
                    {char.courtesyName && (
                      <span className="text-[10px] font-serif text-slate-400">
                        字{char.courtesyName}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] font-mono text-slate-500 truncate">
                    {char.faction}
                  </p>
                  <span className={`inline-block mt-1 text-[9px] px-1.5 py-0.2 rounded border font-mono ${role.color}`}>
                    {role.text}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Character Deep Profile & Relationship Web */}
        {selectedChar && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left 2 Cols: Character Dossier */}
            <div className={`lg:col-span-2 rounded-2xl border p-6 space-y-6 ${
              isDarkMode ? 'bg-[#0f172a]/90 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
            }`}>
              {/* Profile Top Row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-slate-800">
                <div className="flex items-center gap-4">
                  <img
                    src={selectedChar.avatar}
                    alt={selectedChar.name}
                    className="w-16 h-16 rounded-2xl object-cover ring-4 ring-blue-500/10 shadow-md"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif font-black text-2xl text-slate-900 dark:text-slate-100">
                        {selectedChar.name}
                      </h3>
                      {selectedChar.courtesyName && (
                        <span className="text-xs font-serif text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                          字 {selectedChar.courtesyName}
                        </span>
                      )}
                      <YinzhangStamp text={selectedChar.faction.slice(0, 2)} size="sm" variant="vermilion" />
                    </div>
                    <p className="text-xs font-serif text-[#2563eb] font-semibold mt-1">
                      {selectedChar.title} • {selectedChar.faction}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-serif text-slate-500">命理境况:</span>
                  <span className={`text-xs font-serif font-bold ${getStatusBadge(selectedChar.status).color}`}>
                    {getStatusBadge(selectedChar.status).text}
                  </span>
                </div>
              </div>

              {/* Bio & Motivations */}
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <h4 className="font-serif font-bold text-xs text-slate-500 tracking-wider uppercase">
                    生平本纪 (Biography)
                  </h4>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-serif">
                    {selectedChar.bio}
                  </p>
                </div>

                {/* Cyber Augmentation & Martial Arts */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-serif text-[#2563eb] font-semibold">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>赛博灵枢 / 义体机巧</span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-sans">
                      {selectedChar.cyberAugmentation}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-serif text-[#0d9488] font-semibold">
                      <Zap className="w-3.5 h-3.5" />
                      <span>武学真传 / 算力流派</span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-sans">
                      {selectedChar.martialPath}
                    </p>
                  </div>
                </div>

                {/* Core Motive */}
                <div className="p-3 rounded-xl border-l-4 border-amber-500 bg-amber-50/40 dark:bg-amber-950/20 text-xs font-serif space-y-0.5">
                  <span className="font-bold text-amber-700 dark:text-amber-400">核心宿命执念 (Core Motive):</span>
                  <p className="text-slate-700 dark:text-slate-300">{selectedChar.motive}</p>
                </div>
              </div>

              {/* Character Attributes Radar Bars */}
              <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 space-y-3">
                <h4 className="font-serif font-bold text-xs text-slate-500 tracking-wider uppercase">
                  天道心性四维命数 (Character Archetype Attributes)
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { label: '智谋神机 (Wits)', value: selectedChar.stats.wits, color: 'bg-blue-500' },
                    { label: '极意战力 (Combat)', value: selectedChar.stats.combat, color: 'bg-rose-500' },
                    { label: '求道执念 (Devotion)', value: selectedChar.stats.devotion, color: 'bg-amber-500' },
                    { label: '身世隐秘 (Secrecy)', value: selectedChar.stats.secrecy, color: 'bg-purple-500' },
                  ].map((stat) => (
                    <div key={stat.label} className="space-y-1">
                      <div className="flex justify-between text-[11px] font-mono text-slate-500">
                        <span>{stat.label}</span>
                        <span className="font-bold text-slate-900 dark:text-slate-100">{stat.value}</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${stat.color} rounded-full`}
                          style={{ width: `${stat.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Character Relationship Network */}
            <div className={`rounded-2xl border p-6 space-y-4 ${
              isDarkMode ? 'bg-[#0f172a]/90 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
            }`}>
              <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-rose-500" />
                  <h4 className="font-serif font-bold text-sm">
                    因缘羁绊网 (Relationships)
                  </h4>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  {selectedChar.relationships.length} 处牵扯
                </span>
              </div>

              <div className="space-y-3">
                {selectedChar.relationships.map((rel) => {
                  const target = charMap.get(rel.targetId);
                  if (!target) return null;

                  return (
                    <div
                      key={rel.targetId}
                      className="p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 space-y-2 hover:border-[#2563eb]/50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img
                            src={target.avatar}
                            alt={target.name}
                            className="w-7 h-7 rounded-lg object-cover ring-1 ring-white dark:ring-slate-800"
                          />
                          <div>
                            <span className="font-serif font-bold text-xs text-slate-900 dark:text-slate-100">
                              {target.name}
                            </span>
                            <span className="text-[10px] font-mono text-slate-400 block">
                              {target.faction}
                            </span>
                          </div>
                        </div>

                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-serif font-semibold border ${
                          rel.dynamic === 'rival'
                            ? 'border-rose-400/50 bg-rose-50 text-rose-600 dark:bg-rose-950/40'
                            : rel.dynamic === 'allied'
                            ? 'border-teal-400/50 bg-teal-50 text-teal-600 dark:bg-teal-950/40'
                            : rel.dynamic === 'familial'
                            ? 'border-amber-400/50 bg-amber-50 text-amber-600 dark:bg-amber-950/40'
                            : 'border-slate-400/50 bg-slate-50 text-slate-600 dark:bg-slate-800'
                        }`}>
                          {rel.dynamic === 'rival' ? '对立碰撞' : rel.dynamic === 'allied' ? '志同道合' : '同门宗脉'}
                        </span>
                      </div>

                      <div className="text-xs font-serif text-slate-600 dark:text-slate-300 pl-9 flex items-center gap-1.5">
                        <ArrowRight className="w-3 h-3 text-[#2563eb]" />
                        <span>{rel.relationshipType}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Relationship Advice Banner */}
              <div className="p-3 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40 text-[11px] font-serif text-slate-600 dark:text-slate-300 leading-relaxed">
                💡 <strong>剧作提示:</strong> 陈星衍与谢寒衣之间的“太微算法”与“墨家榫卯”形成哲学层面的对立双螺旋，适合在第14章飞升逆阵前引爆情感冲突。
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};
