import React, { useState } from 'react';
import { StoryNode, Character, WorldCodexItem } from '../types';
import { X, Plus, Sparkles, MapPin, Flame } from 'lucide-react';
import { YinzhangStamp } from './YinzhangStamp';

interface NewNodeModalProps {
  characters: Character[];
  existingNodes: StoryNode[];
  onAddNode: (node: StoryNode) => void;
  onAddCodexItem?: (item: WorldCodexItem) => void;
  onClose: () => void;
  isDarkMode: boolean;
}

export const NewNodeModal: React.FC<NewNodeModalProps> = ({
  characters,
  existingNodes,
  onAddNode,
  onAddCodexItem,
  onClose,
  isDarkMode,
}) => {
  const [creationMode, setCreationMode] = useState<'node' | 'codex'>('node');

  // Node form state
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('卷二 · 新立章目');
  const [type, setType] = useState<StoryNode['type']>('conflict');
  const [location, setLocation] = useState('九霄天港·太虚关');
  const [summary, setSummary] = useState('');
  const [tensionLevel, setTensionLevel] = useState(6);
  const [selectedChars, setSelectedChars] = useState<string[]>([]);
  const [selectedFaction, setSelectedFaction] = useState('墨隐流');

  // Codex form state
  const [codexName, setCodexName] = useState('');
  const [codexOrigName, setCodexOrigName] = useState('');
  const [codexCat, setCodexCat] = useState<WorldCodexItem['category']>('artifact');
  const [codexSummary, setCodexSummary] = useState('');
  const [codexQuote, setCodexQuote] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (creationMode === 'node') {
      if (!title.trim()) return;
      const newNode: StoryNode = {
        id: `node-${Date.now()}`,
        title,
        subtitle,
        type,
        status: 'draft',
        x: 450 + Math.floor(Math.random() * 200),
        y: 180 + Math.floor(Math.random() * 150),
        chapterNumber: existingNodes.length + 1,
        summary: summary || '待填补大纲细节...',
        tensionLevel,
        characters: selectedChars,
        location,
        factions: [selectedFaction],
        connections: [],
        wordCountTarget: 5000,
        wordCountActual: 0,
        isKeyMilestone: tensionLevel >= 8,
      };
      onAddNode(newNode);
    } else if (onAddCodexItem) {
      if (!codexName.trim()) return;
      const newItem: WorldCodexItem = {
        id: `codex-${Date.now()}`,
        name: codexName,
        originalName: codexOrigName || 'Ancient Artifact',
        category: codexCat,
        classification: '新立格物考',
        sealText: codexName.slice(0, 2),
        summary: codexSummary || '待补充该奇物在九霄史册中的详述考据。',
        details: codexSummary,
        tags: ['新编', '天工'],
        dangerLevel: 'guarded',
        loreQuote: codexQuote ? `“${codexQuote}”` : '“天工造化，存乎一心。”',
      };
      onAddCodexItem(newItem);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in select-none">
      <div className={`w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl border p-6 shadow-2xl relative ${
        isDarkMode ? 'bg-[#0f172a] border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="flex items-center gap-2 mb-4">
          <YinzhangStamp text="新立" size="sm" variant="vermilion" />
          <h3 className="font-serif font-black text-xl">
            新立灵思条目 (Create Node or Lore)
          </h3>
        </div>

        {/* Mode Switcher */}
        <div className="flex items-center gap-2 p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-5">
          <button
            type="button"
            onClick={() => setCreationMode('node')}
            className={`flex-1 py-1.5 text-xs font-serif font-bold rounded-lg transition-all ${
              creationMode === 'node'
                ? 'bg-white dark:bg-slate-700 text-[#2563eb] dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            新立星图剧情节点 (Story Node)
          </button>
          <button
            type="button"
            onClick={() => setCreationMode('codex')}
            className={`flex-1 py-1.5 text-xs font-serif font-bold rounded-lg transition-all ${
              creationMode === 'codex'
                ? 'bg-white dark:bg-slate-700 text-[#2563eb] dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            新立格物志奇物/宗门 (World Codex)
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {creationMode === 'node' ? (
            <>
              <div className="space-y-1.5">
                <label className="text-xs font-serif font-medium text-slate-600 dark:text-slate-400">
                  节点命题 (Scene Title) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="例如：紫电破关 (Azure Lightning Breach)"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className={`w-full px-3 py-2 text-sm rounded-lg border font-serif focus:outline-none focus:ring-2 focus:ring-[#2563eb] ${
                    isDarkMode ? 'bg-slate-800/80 border-slate-700 text-slate-100' : 'bg-slate-50 border-slate-200 text-slate-900'
                  }`}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-serif font-medium text-slate-600 dark:text-slate-400">
                    卷轴归属 (Volume & Chapter)
                  </label>
                  <input
                    type="text"
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    className={`w-full px-3 py-2 text-xs rounded-lg border font-mono focus:outline-none focus:ring-2 focus:ring-[#2563eb] ${
                      isDarkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-50 border-slate-200'
                    }`}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-serif font-medium text-slate-600 dark:text-slate-400">
                    地域 (Location)
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className={`w-full px-3 py-2 text-xs rounded-lg border font-serif focus:outline-none focus:ring-2 focus:ring-[#2563eb] ${
                      isDarkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-50 border-slate-200'
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-serif font-medium text-slate-600 dark:text-slate-400">
                    节点性质 (Type)
                  </label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value as StoryNode['type'])}
                    className={`w-full px-3 py-2 text-xs rounded-lg border font-serif ${
                      isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <option value="milestone">枢纽大关 (Milestone)</option>
                    <option value="conflict">锋芒对冲 (Conflict)</option>
                    <option value="revelation">天机洞析 (Revelation)</option>
                    <option value="character_arc">因缘蜕变 (Character Arc)</option>
                    <option value="world_shift">大衍巨变 (World Shift)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-serif font-medium text-slate-600 dark:text-slate-400">
                    主涉宗门 (Faction)
                  </label>
                  <select
                    value={selectedFaction}
                    onChange={(e) => setSelectedFaction(e.target.value)}
                    className={`w-full px-3 py-2 text-xs rounded-lg border font-serif ${
                      isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <option value="墨隐流">墨隐流 (Mohist Shadow)</option>
                    <option value="天阙机枢阁">天阙机枢阁 (Celestial Mechanism)</option>
                    <option value="琉璃云海司">琉璃云海司 (Glass Mist)</option>
                  </select>
                </div>
              </div>

              {/* Tension Level */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-serif">
                  <span className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                    <Flame className="w-3.5 h-3.5 text-rose-500" />
                    剧情张力评级:
                  </span>
                  <span className="font-mono font-bold text-[#2563eb]">{tensionLevel} / 10</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={tensionLevel}
                  onChange={(e) => setTensionLevel(Number(e.target.value))}
                  className="w-full accent-[#2563eb]"
                />
              </div>

              {/* Summary */}
              <div className="space-y-1.5">
                <label className="text-xs font-serif font-medium text-slate-600 dark:text-slate-400">
                  梗概大纲 (Synopsis)
                </label>
                <textarea
                  rows={3}
                  placeholder="在此输入情节核心、出场角色与戏剧矛盾..."
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  className={`w-full p-2.5 text-xs rounded-lg border font-serif focus:outline-none focus:ring-2 focus:ring-[#2563eb] ${
                    isDarkMode ? 'bg-slate-800/80 border-slate-700 text-slate-100' : 'bg-slate-50 border-slate-200 text-slate-900'
                  }`}
                />
              </div>

              {/* Characters selector */}
              <div className="space-y-1.5">
                <label className="text-xs font-serif font-medium text-slate-600 dark:text-slate-400">
                  出场人物 (Involved Characters)
                </label>
                <div className="flex flex-wrap gap-2">
                  {characters.map((c) => {
                    const isSelected = selectedChars.includes(c.id);
                    return (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => {
                          setSelectedChars((prev) =>
                            isSelected ? prev.filter((id) => id !== c.id) : [...prev, c.id]
                          );
                        }}
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs transition-all ${
                          isSelected
                            ? 'bg-[#2563eb] text-white shadow-xs'
                            : isDarkMode
                            ? 'bg-slate-800 text-slate-400 border border-slate-700'
                            : 'bg-slate-100 text-slate-700 border border-slate-200'
                        }`}
                      >
                        <img src={c.avatar} alt={c.name} className="w-3.5 h-3.5 rounded-full object-cover" />
                        <span>{c.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Codex Form */}
              <div className="space-y-1.5">
                <label className="text-xs font-serif font-medium text-slate-600 dark:text-slate-400">
                  格物名称 (Artifact / Faction Name) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="例如：万象离火仪 (Myriad Flame Array)"
                  value={codexName}
                  onChange={(e) => setCodexName(e.target.value)}
                  className={`w-full px-3 py-2 text-sm rounded-lg border font-serif focus:outline-none focus:ring-2 focus:ring-[#2563eb] ${
                    isDarkMode ? 'bg-slate-800/80 border-slate-700 text-slate-100' : 'bg-slate-50 border-slate-200 text-slate-900'
                  }`}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-serif font-medium text-slate-600 dark:text-slate-400">
                    英文标识 (Original Identifier)
                  </label>
                  <input
                    type="text"
                    placeholder="Myriad Flame Array"
                    value={codexOrigName}
                    onChange={(e) => setCodexOrigName(e.target.value)}
                    className={`w-full px-3 py-2 text-xs rounded-lg border font-mono focus:outline-none focus:ring-2 focus:ring-[#2563eb] ${
                      isDarkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-50 border-slate-200'
                    }`}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-serif font-medium text-slate-600 dark:text-slate-400">
                    类目 (Category)
                  </label>
                  <select
                    value={codexCat}
                    onChange={(e) => setCodexCat(e.target.value as WorldCodexItem['category'])}
                    className={`w-full px-3 py-2 text-xs rounded-lg border font-serif ${
                      isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <option value="artifact">天工奇物 (Artifact)</option>
                    <option value="faction">宗门势力 (Faction)</option>
                    <option value="geography">山川界域 (Geography)</option>
                    <option value="protocol">禁法协议 (Protocol)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-serif font-medium text-slate-600 dark:text-slate-400">
                  考据详述 (Description)
                </label>
                <textarea
                  rows={3}
                  placeholder="材质构造、技术机制与历史渊源..."
                  value={codexSummary}
                  onChange={(e) => setCodexSummary(e.target.value)}
                  className={`w-full p-2.5 text-xs rounded-lg border font-serif focus:outline-none focus:ring-2 focus:ring-[#2563eb] ${
                    isDarkMode ? 'bg-slate-800/80 border-slate-700 text-slate-100' : 'bg-slate-50 border-slate-200 text-slate-900'
                  }`}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-serif font-medium text-slate-600 dark:text-slate-400">
                  典籍古训引言 (Lore Quote)
                </label>
                <input
                  type="text"
                  placeholder="例如：离火聚真光，太虚照长夜。"
                  value={codexQuote}
                  onChange={(e) => setCodexQuote(e.target.value)}
                  className={`w-full px-3 py-2 text-xs rounded-lg border font-serif italic ${
                    isDarkMode ? 'bg-slate-800/80 border-slate-700 text-slate-100' : 'bg-slate-50 border-slate-200 text-slate-900'
                  }`}
                />
              </div>
            </>
          )}

          {/* Action Buttons */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-serif text-slate-500 hover:text-slate-800 rounded-lg"
            >
              取消
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-serif font-bold bg-[#2563eb] hover:bg-blue-600 text-white rounded-lg shadow-sm"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>确认新立</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
