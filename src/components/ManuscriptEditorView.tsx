import React, { useState } from 'react';
import { 
  Chapter, 
  Character 
} from '../types';
import { 
  PenTool, 
  Check, 
  Clock, 
  Sparkles, 
  Layers, 
  BookOpen, 
  Scroll, 
  Maximize2, 
  Minimize2, 
  Search,
  Plus,
  Stamp,
  AlignLeft,
  FileText
} from 'lucide-react';
import { YinzhangStamp } from './YinzhangStamp';

interface ManuscriptEditorViewProps {
  chapters: Chapter[];
  characters: Character[];
  activeChapterId: string;
  onSelectChapter: (id: string) => void;
  onUpdateChapterContent: (chapterId: string, content: string) => void;
  onApplyStamp: (chapterId: string, stampText: string) => void;
  onTriggerInkMuse: (prompt: string) => void;
  isDarkMode: boolean;
}

export const ManuscriptEditorView: React.FC<ManuscriptEditorViewProps> = ({
  chapters,
  characters,
  activeChapterId,
  onSelectChapter,
  onUpdateChapterContent,
  onApplyStamp,
  onTriggerInkMuse,
  isDarkMode,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [stampAnimation, setStampAnimation] = useState<string | null>(null);
  const [isZenMode, setIsZenMode] = useState(false);

  const activeChapter = chapters.find((c) => c.id === activeChapterId) || chapters[0];

  const filteredChapters = chapters.filter((c) => 
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.volumeTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const words = activeChapter ? activeChapter.content.trim().length : 0;
  const readingTime = Math.ceil(words / 350);

  const handleStamp = (stampText: string) => {
    if (!activeChapter) return;
    setStampAnimation(stampText);
    onApplyStamp(activeChapter.id, stampText);
    setTimeout(() => {
      setStampAnimation(null);
    }, 1800);
  };

  const handleAIAssist = (action: string) => {
    let prompt = '';
    if (action === 'poetic') {
      prompt = `请将以下原稿段落以宋代词话与赛博朋克交融的东方未来主义笔触进行文风升华，保留冷冽机械机巧与墨气留白：\n"${activeChapter.content.slice(0, 300)}..."`;
    } else if (action === 'suspense') {
      prompt = `请为当前场景设计一个突发的机械危机或命理反转冲突，涉及墨家机关与天阙神机的对冲。`;
    } else if (action === 'sensory') {
      prompt = `请渲染当前场景的声色光影细节（青瓷冷光、细雨打碎琉璃瓦、榫卯咬合的簧片声、霓虹酒幌的青烟）。`;
    }
    onTriggerInkMuse(prompt);
  };

  return (
    <div className={`relative w-full h-[calc(100vh-4rem)] flex overflow-hidden select-none ${
      isDarkMode ? 'bg-[#0b0f19] text-slate-100' : 'bg-[#faf8ff] text-slate-900'
    }`}>
      
      {/* Left Column: Chapters Scroll Navigation (卷轴目录) */}
      {!isZenMode && (
        <aside className={`w-80 border-r flex flex-col flex-shrink-0 z-20 ${
          isDarkMode ? 'border-slate-800 bg-[#0f172a]/95' : 'border-slate-200 bg-white/95'
        }`}>
          {/* Chapter header & search */}
          <div className="p-4 border-b border-slate-200/80 dark:border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Scroll className="w-4 h-4 text-[#2563eb]" />
                <span className="font-serif font-bold text-sm">九霄长卷目次</span>
              </div>
              <YinzhangStamp text="墨录" size="sm" variant="teal" />
            </div>

            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
              <input
                type="text"
                placeholder="检索章节、卷名..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border font-serif focus:outline-none focus:ring-1 focus:ring-[#2563eb] ${
                  isDarkMode ? 'bg-slate-800/80 border-slate-700 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800'
                }`}
              />
            </div>
          </div>

          {/* Chapter List */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {filteredChapters.map((chap) => {
              const isActive = chap.id === activeChapter.id;
              return (
                <div
                  key={chap.id}
                  onClick={() => onSelectChapter(chap.id)}
                  className={`p-3 rounded-xl cursor-pointer border transition-all ${
                    isActive
                      ? 'bg-blue-50/80 dark:bg-blue-950/40 border-[#2563eb]/60 shadow-xs'
                      : 'border-transparent hover:border-slate-200 dark:hover:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-1">
                    <span>{chap.volumeTitle}</span>
                    <span className="flex items-center gap-1">
                      {chap.status === 'sealed' ? (
                        <span className="text-teal-600 flex items-center gap-0.5">
                          <Check className="w-3 h-3" /> 定稿
                        </span>
                      ) : (
                        <span className="text-blue-600 flex items-center gap-0.5">
                          <Clock className="w-3 h-3" /> 研墨中
                        </span>
                      )}
                    </span>
                  </div>

                  <h4 className={`font-serif font-semibold text-sm line-clamp-1 mb-1.5 ${
                    isActive ? 'text-[#2563eb] dark:text-blue-400' : 'text-slate-800 dark:text-slate-200'
                  }`}>
                    第{chap.chapterNumber}章 · {chap.title}
                  </h4>

                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 font-sans">
                    {chap.summary}
                  </p>

                  {/* Stamp badges row */}
                  <div className="mt-2 flex items-center justify-between text-[11px]">
                    <span className="font-mono text-slate-400">{chap.wordCount} 字</span>
                    <div className="flex items-center gap-1">
                      {chap.keyStamps?.map((stamp) => (
                        <YinzhangStamp key={stamp} text={stamp} size="sm" variant="vermilion" />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Telemetry */}
          <div className="p-3 border-t border-slate-200/80 dark:border-slate-800 text-xs font-mono text-slate-500 flex justify-between">
            <span>共 {chapters.length} 篇卷轴</span>
            <span>总字数 {chapters.reduce((acc, c) => acc + c.wordCount, 0).toLocaleString()}</span>
          </div>
        </aside>
      )}

      {/* Center: Xuan Paper Manuscript Writing Room (研墨书写台) */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        {/* Editor Top Toolbar */}
        <div className={`px-6 py-2.5 border-b flex items-center justify-between gap-4 z-10 ${
          isDarkMode ? 'border-slate-800 bg-[#0f172a]/90 backdrop-blur-md' : 'border-slate-200 bg-white/90 backdrop-blur-md'
        }`}>
          {/* Chapter breadcrumb */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-500">
              {activeChapter?.volumeTitle}
            </span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="font-serif font-bold text-sm text-[#2563eb] dark:text-blue-400">
              第{activeChapter?.chapterNumber}章 · {activeChapter?.title}
            </span>
            {activeChapter?.keyStamps.map((s) => (
              <YinzhangStamp key={s} text={s} size="sm" variant="vermilion" />
            ))}
          </div>

          {/* Quick Actions & AI Muse prompts */}
          <div className="flex items-center gap-2">
            {/* Quick Stamps Dropdown / Action */}
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800/80 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700">
              <button
                onClick={() => handleStamp('墨宝留香')}
                className="px-2 py-1 text-xs font-calligraphy text-[#e11d48] hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded transition-colors"
                title="盖印：墨宝留香"
              >
                印 · 墨宝
              </button>
              <button
                onClick={() => handleStamp('千机核准')}
                className="px-2 py-1 text-xs font-calligraphy text-[#0d9488] hover:bg-teal-50 dark:hover:bg-teal-950/40 rounded transition-colors"
                title="盖印：千机核准"
              >
                印 · 千机
              </button>
              <button
                onClick={() => handleStamp('传世之稿')}
                className="px-2 py-1 text-xs font-calligraphy text-[#d97706] hover:bg-amber-50 dark:hover:bg-amber-950/40 rounded transition-colors"
                title="盖印：传世之稿"
              >
                印 · 传世
              </button>
            </div>

            {/* AI Assistant Quick Actions */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => handleAIAssist('poetic')}
                className="flex items-center gap-1 px-2.5 py-1 text-xs font-serif text-[#2563eb] hover:bg-blue-50 dark:hover:bg-blue-950/40 border border-blue-200 dark:border-blue-900 rounded-lg transition-colors"
                title="以宋词意境润色当前笔触"
              >
                <Sparkles className="w-3 h-3 text-[#2563eb]" />
                <span>宋风润色</span>
              </button>
              <button
                onClick={() => handleAIAssist('suspense')}
                className="flex items-center gap-1 px-2.5 py-1 text-xs font-serif text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 border border-rose-200 dark:border-rose-900 rounded-lg transition-colors"
                title="推演伏线危机"
              >
                <span>起承转合</span>
              </button>
            </div>

            {/* Zen Mode toggle */}
            <button
              onClick={() => setIsZenMode(!isZenMode)}
              className="p-1.5 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 rounded-lg border border-slate-200 dark:border-slate-700"
              title={isZenMode ? '退出沉浸模式' : '进入沉浸无碍模式'}
            >
              {isZenMode ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Writing Paper Area */}
        <div className="flex-1 overflow-y-auto px-6 py-10 flex justify-center">
          <div className="w-full max-w-3xl space-y-6">
            
            {/* Calligraphic Manuscript Title Banner */}
            <div className="text-center pb-6 border-b border-slate-200/80 dark:border-slate-800/80 space-y-2">
              <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">
                {activeChapter.volumeTitle}
              </span>
              <h1 className="font-serif font-black text-2xl sm:text-3xl text-slate-900 dark:text-slate-50 tracking-wide">
                第{activeChapter.chapterNumber}章 · {activeChapter.title}
              </h1>
              <div className="flex items-center justify-center gap-4 text-xs font-mono text-slate-400 pt-1">
                <span>{words} 字符</span>
                <span>约 {readingTime} 分钟阅毕</span>
                <span>上次研墨: {activeChapter.lastUpdated}</span>
              </div>
            </div>

            {/* Editable Manuscript Textarea */}
            <div className="relative">
              <textarea
                value={activeChapter.content}
                onChange={(e) => onUpdateChapterContent(activeChapter.id, e.target.value)}
                rows={22}
                className={`w-full p-6 text-base sm:text-lg leading-loose font-serif rounded-2xl resize-none focus:outline-none transition-all shadow-sm ${
                  isDarkMode 
                    ? 'bg-[#0f172a]/70 text-slate-200 border border-slate-800/80 focus:border-[#2563eb]/60' 
                    : 'bg-white/90 text-slate-800 border border-slate-200/80 focus:border-[#2563eb]/60 shadow-[0_4px_24px_-4px_rgba(37,99,235,0.04)]'
                }`}
                style={{
                  lineHeight: '2.3',
                  letterSpacing: '0.02em',
                }}
              />

              {/* Stamp Animation Overlay */}
              {stampAnimation && (
                <div className="absolute top-12 right-12 pointer-events-none animate-in zoom-in-50 duration-300">
                  <div className="transform rotate-[-12deg] shadow-2xl">
                    <YinzhangStamp text={stampAnimation} size="lg" variant="vermilion" />
                  </div>
                </div>
              )}
            </div>

            {/* In-text Quick Tag Chips */}
            <div className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-serif text-slate-500">本章出场人物速查:</span>
                <div className="flex items-center gap-1.5">
                  {characters.map((c) => (
                    <span 
                      key={c.id}
                      className="px-2 py-0.5 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-serif text-slate-700 dark:text-slate-300 flex items-center gap-1"
                    >
                      <img src={c.avatar} alt={c.name} className="w-3.5 h-3.5 rounded-full object-cover" />
                      {c.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px]">
                <span>按行保存 • 墨痕云端自动同步</span>
              </div>
            </div>

          </div>
        </div>

      </main>

    </div>
  );
};
