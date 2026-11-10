import React, { useState } from 'react';
import { StoryNode, Character, WorldCodexItem, Chapter } from '../types';
import { X, Download, Copy, Check, FileText, Code2, BookOpen } from 'lucide-react';
import { YinzhangStamp } from './YinzhangStamp';

interface ExportModalProps {
  nodes: StoryNode[];
  characters: Character[];
  codexItems: WorldCodexItem[];
  chapters: Chapter[];
  onClose: () => void;
  isDarkMode: boolean;
}

export const ExportModal: React.FC<ExportModalProps> = ({
  nodes,
  characters,
  codexItems,
  chapters,
  onClose,
  isDarkMode,
}) => {
  const [exportFormat, setExportFormat] = useState<'markdown' | 'manuscript' | 'json'>('markdown');
  const [copied, setCopied] = useState(false);

  const generateMarkdownBible = (): string => {
    let md = `# 《碧落千机录》 东方未来主义世界观与创作全集\n\n`;
    md += `> Tech-Chinoiserie Creative Studio Export\n\n`;
    md += `## 一、因缘人物谱系 (Characters)\n\n`;
    characters.forEach((c) => {
      md += `### ${c.name} ${c.courtesyName ? `(字 ${c.courtesyName})` : ''} —— ${c.title}\n`;
      md += `- **宗门归属**: ${c.faction}\n`;
      md += `- **灵枢机巧/义体**: ${c.cyberAugmentation}\n`;
      md += `- **武学脉络**: ${c.martialPath}\n`;
      md += `- **核心执念**: ${c.motive}\n`;
      md += `- **生平梗概**: ${c.bio}\n\n`;
    });

    md += `## 二、格物博物志 (World Codex)\n\n`;
    codexItems.forEach((item) => {
      md += `### [${item.classification}] ${item.name} (${item.originalName})\n`;
      md += `*“${item.loreQuote}”*\n\n`;
      md += `${item.summary}\n\n`;
      md += `**详述**: ${item.details}\n\n`;
    });

    md += `## 三、星图剧情总纲 (Story Graph Outline)\n\n`;
    nodes.forEach((n) => {
      md += `### 第${n.chapterNumber}章 · ${n.title} (${n.subtitle})\n`;
      md += `- **发生地域**: ${n.location}\n`;
      md += `- **戏剧张力**: ${n.tensionLevel}/10\n`;
      md += `- **剧情梗概**: ${n.summary}\n\n`;
    });

    return md;
  };

  const generateManuscriptText = (): string => {
    let txt = `《碧落千机录》\n===============================\n\n`;
    chapters.forEach((c) => {
      txt += `\n\n${c.volumeTitle}\n第${c.chapterNumber}章 · ${c.title}\n-------------------------------\n\n`;
      txt += c.content;
      txt += `\n\n`;
    });
    return txt;
  };

  const generateJsonData = (): string => {
    return JSON.stringify(
      {
        project: '碧落千机录 (Chronicles of the Celestial Loom)',
        exportedAt: new Date().toISOString(),
        nodes,
        characters,
        codexItems,
        chapters,
      },
      null,
      2
    );
  };

  const getContent = () => {
    if (exportFormat === 'markdown') return generateMarkdownBible();
    if (exportFormat === 'manuscript') return generateManuscriptText();
    return generateJsonData();
  };

  const content = getContent();

  const handleDownload = () => {
    const filename =
      exportFormat === 'markdown'
        ? 'bi_luo_story_bible.md'
        : exportFormat === 'manuscript'
        ? 'bi_luo_manuscript.txt'
        : 'bi_luo_data.json';

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in select-none">
      <div className={`w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl border shadow-2xl relative ${
        isDarkMode ? 'bg-[#0f172a] border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        {/* Top */}
        <div className="p-6 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <YinzhangStamp text="长卷" size="sm" variant="vermilion" />
            <h3 className="font-serif font-black text-xl">
              导出长卷典藏 (Export Story Bible & Manuscript)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Format Selector */}
        <div className="p-6 pb-2 space-y-4">
          <div className="flex items-center gap-2 p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setExportFormat('markdown')}
              className={`flex-1 py-2 text-xs font-serif font-bold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                exportFormat === 'markdown'
                  ? 'bg-white dark:bg-slate-700 text-[#2563eb] dark:text-blue-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>全书设定集 (Markdown Bible)</span>
            </button>
            <button
              onClick={() => setExportFormat('manuscript')}
              className={`flex-1 py-2 text-xs font-serif font-bold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                exportFormat === 'manuscript'
                  ? 'bg-white dark:bg-slate-700 text-[#2563eb] dark:text-blue-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>完整原稿正文 (Manuscript Plaintext)</span>
            </button>
            <button
              onClick={() => setExportFormat('json')}
              className={`flex-1 py-2 text-xs font-serif font-bold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                exportFormat === 'json'
                  ? 'bg-white dark:bg-slate-700 text-[#2563eb] dark:text-blue-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>结构化数据 (Raw JSON)</span>
            </button>
          </div>
        </div>

        {/* Preview content box */}
        <div className="flex-1 px-6 py-2 overflow-hidden">
          <textarea
            readOnly
            value={content}
            className={`w-full h-72 p-4 text-xs font-mono leading-relaxed rounded-xl border resize-none focus:outline-none ${
              isDarkMode ? 'bg-slate-900/80 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-800'
            }`}
          />
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">
            {content.length.toLocaleString()} 字符准备就绪
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-serif rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-teal-600" />
                  <span className="text-teal-600">已复制</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>复制到剪贴板</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-serif font-bold bg-[#2563eb] hover:bg-blue-600 text-white rounded-lg shadow-sm shadow-blue-500/20 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>下载长卷文件</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
