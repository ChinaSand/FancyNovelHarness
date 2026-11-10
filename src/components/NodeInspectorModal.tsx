import React, { useState } from 'react';
import { 
  StoryNode, 
  Character 
} from '../types';
import { 
  X, 
  Flame, 
  MapPin, 
  PenTool, 
  CheckCircle2, 
  Users, 
  Sparkles, 
  Trash2,
  Save,
  Tag
} from 'lucide-react';
import { YinzhangStamp } from './YinzhangStamp';

interface NodeInspectorModalProps {
  node: StoryNode;
  characters: Character[];
  onClose: () => void;
  onSaveNode: (updatedNode: StoryNode) => void;
  onDeleteNode: (nodeId: string) => void;
  onJumpToManuscript: (chapterNumber: number) => void;
  isDarkMode: boolean;
}

export const NodeInspectorModal: React.FC<NodeInspectorModalProps> = ({
  node,
  characters,
  onClose,
  onSaveNode,
  onDeleteNode,
  onJumpToManuscript,
  isDarkMode,
}) => {
  const [title, setTitle] = useState(node.title);
  const [subtitle, setSubtitle] = useState(node.subtitle);
  const [location, setLocation] = useState(node.location);
  const [summary, setSummary] = useState(node.summary);
  const [tensionLevel, setTensionLevel] = useState(node.tensionLevel);
  const [status, setStatus] = useState<StoryNode['status']>(node.status);
  const [type, setType] = useState<StoryNode['type']>(node.type);
  const [selectedChars, setSelectedChars] = useState<string[]>(node.characters);

  const characterMap = new Map<string, Character>();
  characters.forEach((c) => characterMap.set(c.id, c));

  const handleToggleChar = (charId: string) => {
    setSelectedChars((prev) => 
      prev.includes(charId) 
        ? prev.filter((id) => id !== charId) 
        : [...prev, charId]
    );
  };

  const handleSave = () => {
    onSaveNode({
      ...node,
      title,
      subtitle,
      location,
      summary,
      tensionLevel,
      status,
      type,
      characters: selectedChars,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in">
      <div 
        className={`w-full max-w-lg h-full overflow-y-auto p-6 flex flex-col justify-between shadow-2xl border-l select-none ${
          isDarkMode 
            ? 'bg-[#0f172a] border-slate-800 text-slate-100' 
            : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Top Header */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-lg text-slate-900 dark:text-slate-100">
                剧情枢纽检阅
              </span>
              <YinzhangStamp text="检阅" size="sm" variant="vermilion" />
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            
            {/* Title & Subtitle */}
            <div className="space-y-1.5">
              <label className="text-xs font-serif font-medium text-slate-600 dark:text-slate-400">
                枢纽命题 (Scene / Node Title)
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={`w-full px-3 py-2 text-sm rounded-lg border font-serif font-semibold focus:outline-none focus:ring-2 focus:ring-[#2563eb] ${
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
                  发生地域 (Location / Domain)
                </label>
                <div className="relative">
                  <MapPin className="w-3.5 h-3.5 absolute left-3 top-2.5 text-teal-600" />
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className={`w-full pl-8 pr-3 py-2 text-xs rounded-lg border font-serif focus:outline-none focus:ring-2 focus:ring-[#2563eb] ${
                      isDarkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-50 border-slate-200'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Type & Status */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-serif font-medium text-slate-600 dark:text-slate-400">
                  节点性质 (Node Type)
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
                  研撰状态 (Status)
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as StoryNode['status'])}
                  className={`w-full px-3 py-2 text-xs rounded-lg border font-serif ${
                    isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <option value="completed">已研毕 (Completed)</option>
                  <option value="in_progress">研撰中 (In Progress)</option>
                  <option value="planned">草拟伏线 (Planned)</option>
                  <option value="draft">初稿立意 (Draft)</option>
                </select>
              </div>
            </div>

            {/* Tension Level Slider */}
            <div className="space-y-1.5 p-3 rounded-lg border bg-slate-50/60 dark:bg-slate-800/40 border-slate-200/80 dark:border-slate-800">
              <div className="flex items-center justify-between text-xs font-serif">
                <span className="flex items-center gap-1.5">
                  <Flame className={`w-3.5 h-3.5 ${tensionLevel >= 7 ? 'text-rose-500' : 'text-amber-500'}`} />
                  戏剧张力评级 (Dramatic Tension):
                </span>
                <span className="font-mono font-bold text-sm text-[#2563eb]">
                  {tensionLevel} / 10
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={tensionLevel}
                onChange={(e) => setTensionLevel(Number(e.target.value))}
                className="w-full accent-[#2563eb] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>1 微澜</span>
                <span>5 涌动</span>
                <span>8 激越</span>
                <span>10 绝顶对决</span>
              </div>
            </div>

            {/* Synopsis / Summary */}
            <div className="space-y-1.5">
              <label className="text-xs font-serif font-medium text-slate-600 dark:text-slate-400">
                大纲推演梗概 (Scene Synopsis)
              </label>
              <textarea
                rows={4}
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                className={`w-full p-3 text-xs leading-relaxed rounded-lg border font-serif focus:outline-none focus:ring-2 focus:ring-[#2563eb] ${
                  isDarkMode ? 'bg-slate-800/80 border-slate-700 text-slate-100' : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              />
            </div>

            {/* Associated Characters */}
            <div className="space-y-2">
              <label className="text-xs font-serif font-medium text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#2563eb]" />
                出场人物结缘 (Involved Characters)
              </label>
              <div className="flex flex-wrap gap-2">
                {characters.map((char) => {
                  const isSelected = selectedChars.includes(char.id);
                  return (
                    <button
                      key={char.id}
                      type="button"
                      onClick={() => handleToggleChar(char.id)}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs transition-all ${
                        isSelected
                          ? 'bg-[#2563eb] text-white shadow-xs'
                          : isDarkMode 
                            ? 'bg-slate-800 text-slate-400 border border-slate-700 hover:text-slate-200' 
                            : 'bg-slate-100 text-slate-600 border border-slate-200 hover:text-slate-900'
                      }`}
                    >
                      <img
                        src={char.avatar}
                        alt={char.name}
                        className="w-4 h-4 rounded-full object-cover"
                      />
                      <span className="font-serif">{char.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Word count telemetry */}
            <div className="p-3 rounded-lg border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <PenTool className="w-3.5 h-3.5 text-[#0d9488]" />
                <span className="font-serif">原稿字数已积蓄:</span>
              </div>
              <span className="font-mono font-bold text-[#0d9488]">
                {node.wordCountActual?.toLocaleString() || 0} / {node.wordCountTarget?.toLocaleString() || 5000} 字
              </span>
            </div>

          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 mt-6 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => onDeleteNode(node.id)}
            className="flex items-center gap-1 px-3 py-2 text-xs font-serif text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-lg transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>删削节点</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onJumpToManuscript(node.chapterNumber)}
              className="flex items-center gap-1 px-3.5 py-2 text-xs font-serif font-medium bg-[#0d9488] hover:bg-teal-600 active:scale-95 text-white rounded-lg shadow-sm transition-all"
            >
              <PenTool className="w-3.5 h-3.5" />
              <span>进入研墨</span>
            </button>

            <button
              type="button"
              onClick={handleSave}
              className="flex items-center gap-1 px-4 py-2 text-xs font-serif font-medium bg-[#2563eb] hover:bg-blue-600 active:scale-95 text-white rounded-lg shadow-sm shadow-blue-500/20 transition-all"
            >
              <Save className="w-3.5 h-3.5" />
              <span>保存定案</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
