import React, { useState } from 'react';
import { FcsPageId } from '../../types/fcs';
import { 
  Sparkles, 
  Save, 
  CheckCircle2, 
  Eye, 
  Plus, 
  BookOpen, 
  AlertTriangle, 
  ArrowRight,
  Maximize2,
  FileCheck,
  Undo2,
  Redo2,
  Quote,
  Bold,
  Italic,
  Bot
} from 'lucide-react';

interface Page04EditorProps {
  onNavigate: (page: FcsPageId) => void;
}

export const Page04Editor: React.FC<Page04EditorProps> = ({ onNavigate }) => {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [proseContent, setProseContent] = useState(`夜色如墨，迷雾笼罩着整座城市。湿冷的风夹杂着微咸的雨雾掠过悬空天廊的飞檐，将远处林立的飞梭引力轨映照成一条条幽暗闪烁的青紫冷光。

苏明月 站在八百层天枢高楼之巅，极目眺望远处的灯火。那座隐没在云海中的机械云阙如同匍匐在黑夜里的太古凶兽，心中骤然涌起一股莫名的预感——今夜的安宁，不过是风暴来临前最后的假象。

九星阵盘 在腕间微弱地闪烁，晶石脉络中流淌的不是往日的恒定灵韵，而是一种前所未有的紊乱波动。天权阁的追捕令已经传遍了七大星域的每一座星门枢纽，那张由深蓝符文编织而成的天网，正在一寸一寸朝这座孤城收紧。`);

  const chapters = [
    { num: 1, title: '迷雾之城', status: '进行中 · 3,420 字', tension: '张力 82%', active: true },
    { num: 2, title: '追雾之行', status: '已定稿 · 3,890 字', note: '主线·暗巷伏击' },
    { num: 3, title: '异象突生', status: '审校中 · 4,120 字', note: '支线·天枢异动' },
    { num: 4, title: '宿命抉择', status: '草稿 · 2,100 字', note: '核心·心魔试炼' },
    { num: 5, title: '终末风暴', status: '大纲规划 · 850 节拍', note: '未落笔' },
  ];

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-[#0A0F1D] text-[#E2E8F0]">
      
      {/* Top Secondary Breadcrumbs Strip (Screen 4 Top) */}
      <div className="h-12 border-b border-[#1E293B] bg-[#0A0F1D] px-4 flex items-center justify-between text-xs z-10">
        <div className="flex items-center gap-3">
          <span className="font-bold text-slate-100">星海之约</span>
          <span className="text-slate-600">&gt;</span>
          <span className="text-cyan-400 font-semibold">第1章 迷雾之城 · 章节编辑器</span>
          
          <span className="text-[10px] px-2 py-0.5 rounded bg-blue-950/80 text-blue-300 border border-blue-800 font-mono">
            卷壹 启程之卷
          </span>
          <span className="text-slate-400 font-mono text-[11px] hidden sm:inline">
            ● 自动保存于 18:42:09
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#131C31] border border-[#1E293B] text-[11px] text-slate-300">
            <Eye className="w-3 h-3 text-cyan-400" />
            <span>视点: 苏明月 (第三人称限制视角)</span>
          </div>

          <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#131C31] border border-[#1E293B] text-[11px] text-purple-300">
            <Sparkles className="w-3 h-3 text-purple-400" />
            <span>FCS 智脑墨韵 v3.2 已就绪</span>
          </div>

          <button 
            onClick={() => onNavigate('08-review-gate')}
            className="flex items-center gap-1 px-3 py-1 rounded-lg bg-[#2563EB] hover:bg-blue-600 text-white font-bold text-xs shadow-md shadow-blue-500/20"
          >
            <FileCheck className="w-3.5 h-3.5" />
            <span>定稿归档</span>
          </button>
        </div>
      </div>

      {/* Editor Formatting Ribbon */}
      <div className="h-10 border-b border-[#1E293B] bg-[#0F172A] px-4 flex items-center justify-between text-xs z-10">
        <div className="flex items-center gap-2 text-slate-400">
          <span className="font-bold text-white px-1">正文</span>
          <span className="hover:text-white cursor-pointer px-1">H1</span>
          <span className="hover:text-white cursor-pointer px-1">H2</span>
          <div className="h-3 w-px bg-slate-800" />
          <button className="p-1 hover:text-white"><Bold className="w-3.5 h-3.5" /></button>
          <button className="p-1 hover:text-white"><Italic className="w-3.5 h-3.5" /></button>
          <button className="p-1 hover:text-white"><Quote className="w-3.5 h-3.5" /></button>
          <button className="p-1 hover:text-white font-serif">对白</button>
          <div className="h-3 w-px bg-slate-800" />
          <button className="p-1 hover:text-white"><Undo2 className="w-3.5 h-3.5" /></button>
          <button className="p-1 hover:text-white"><Redo2 className="w-3.5 h-3.5" /></button>
          <div className="h-3 w-px bg-slate-800" />
          <span className="px-2 py-0.5 rounded bg-blue-950/80 text-cyan-300 border border-blue-800 font-mono text-[10px] flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> AI 行间润色
          </span>
          <span className="px-2 py-0.5 rounded bg-[#131C31] text-emerald-300 border border-[#1E293B] font-mono text-[10px]">
            图谱锚定
          </span>
        </div>

        <button className="p-1 text-slate-500 hover:text-white">
          <Maximize2 className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Split Area (Left Tree, Center Prose, Right Inspector) */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Column: 卷纲领目 (Chapter Outline) */}
        <aside className="w-72 border-r border-[#1E293B] bg-[#0A0F1D] p-3 flex flex-col justify-between overflow-y-auto custom-scrollbar">
          <div className="space-y-3">
            <div className="flex items-center justify-between px-2 pt-1">
              <span className="font-bold text-xs text-white">卷纲领目</span>
              <span className="text-[10px] font-mono text-slate-500">卷1 启程卷 (5章)</span>
            </div>

            <div className="space-y-1.5">
              {chapters.map((c, i) => (
                <div
                  key={c.num}
                  onClick={() => setActiveChapterIndex(i)}
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${
                    activeChapterIndex === i
                      ? 'bg-[#182238] border-cyan-500/50 shadow-md shadow-blue-500/10'
                      : 'bg-[#0F172A] border-[#1E293B] hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="font-bold text-white">第{c.num}章 · {c.title}</span>
                    {c.tension && (
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-950/80 text-amber-300 border border-amber-800 font-mono">
                        {c.tension}
                      </span>
                    )}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono flex justify-between">
                    <span>{c.status}</span>
                    {c.note && <span className="text-slate-500">{c.note}</span>}
                  </div>
                </div>
              ))}

              <button className="w-full py-2 border border-dashed border-[#1E293B] hover:border-slate-600 rounded-xl text-xs text-slate-400 flex items-center justify-center gap-1 mt-2">
                <Plus className="w-3.5 h-3.5" />
                <span>新建章节 / 叙事节拍</span>
              </button>
            </div>
          </div>

          {/* Volume progress */}
          <div className="p-3 rounded-xl bg-[#0F172A] border border-[#1E293B] space-y-1.5 text-xs">
            <div className="flex justify-between text-[11px]">
              <span className="text-slate-400">卷目标完成度</span>
              <span className="text-cyan-400 font-mono font-bold">36%</span>
            </div>
            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-cyan-400" style={{ width: '36%' }} />
            </div>
            <div className="flex justify-between text-[10px] font-mono text-slate-500 pt-0.5">
              <span>本卷已写 18,330 字</span>
              <span>目标 50,000 字</span>
            </div>
          </div>
        </aside>

        {/* Center: Manuscript Writing Canvas */}
        <main className="flex-1 overflow-y-auto p-8 lg:p-12 flex justify-center custom-scrollbar bg-[#0A0F1D]">
          <div className="w-full max-w-2xl space-y-6">
            
            {/* Header info */}
            <div className="space-y-2 border-b border-[#1E293B] pb-6">
              <span className="text-[11px] font-mono text-slate-500 tracking-wider">
                CHAPTER 01 · 卷壹起势节拍
              </span>
              <h1 className="font-bold text-2xl text-white">第1章 迷雾之城</h1>
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 pt-1">
                <span>阅读用时 ~ 6分钟</span>
                <span>3,420 字 (已校勘)</span>
                <span className="text-rose-400">张力基调: 悬疑·破局</span>
                <span className="text-purple-400">图谱挂载: 3 人物 / 1 灵宝</span>
              </div>
            </div>

            {/* Editable Text Area */}
            <div className="space-y-4 font-serif text-sm text-slate-200 leading-loose">
              <div className="relative">
                <textarea
                  rows={8}
                  value={proseContent}
                  onChange={(e) => setProseContent(e.target.value)}
                  className="w-full p-4 rounded-xl bg-[#0F172A] border border-[#1E293B] text-slate-200 font-serif text-sm leading-loose resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Scene Concept Illustration Shot from Screen 4 */}
              <div className="rounded-xl border border-[#1E293B] bg-[#0F172A] overflow-hidden shadow-lg">
                <div className="relative h-44 bg-gradient-to-tr from-slate-950 via-indigo-950 to-slate-900 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&auto=format&fit=crop&q=80"
                    alt="迷雾中的九星天网主塔"
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-cyan-400 block">视觉分镜卡片 · SCENE 01-B</span>
                      <span className="font-bold text-xs text-white">【场景概念】迷雾中的九星天网主塔与夜幕高楼</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-blue-950/80 text-blue-300 border border-blue-800">
                      赛博仙侠 / 宏大夜景
                    </span>
                  </div>
                </div>
              </div>

              {/* Character Quote Box */}
              <div className="p-4 rounded-xl border border-slate-800 bg-[#0F172A] space-y-2">
                <blockquote className="font-serif italic text-slate-300 border-l-2 border-cyan-400 pl-3">
                  “苏小姐，你手中所执的，是整个神庭都无法容纳的禁忌。”
                </blockquote>
                <p className="text-xs text-slate-400 pl-3 leading-relaxed">
                  阴影里传来机械关节与玄铁碰撞的轻微摩擦声，那位佩戴着天权阁秘纹面具的黑袍猎者，正自雨幕的死角缓步踏出。
                </p>
              </div>

              {/* Inline AI Co-Pilot Suggestion Banner from Screen 4 */}
              <div className="p-3.5 rounded-xl border border-blue-500/30 bg-[#131C31] flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-950 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-200">刘词灵感协同 (当前选中段落)</span>
                    <p className="text-[11px] text-slate-400">检测到动作张力上升，可调用高级修辞</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono">
                  <button className="px-2.5 py-1 rounded bg-[#182238] border border-[#1E293B] text-cyan-400 hover:text-white">
                    墨韵润色
                  </button>
                  <button className="px-2.5 py-1 rounded bg-[#182238] border border-[#1E293B] text-teal-400 hover:text-white">
                    延伸分支
                  </button>
                  <button className="px-2.5 py-1 rounded bg-[#182238] border border-[#1E293B] text-rose-400 hover:text-white">
                    校验伏笔
                  </button>
                </div>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-[#1E293B] flex items-center justify-between gap-4">
              <button 
                onClick={() => onNavigate('02-novel-graph')}
                className="flex-1 py-2.5 text-xs font-bold rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white flex items-center justify-center gap-1.5 shadow-lg shadow-blue-500/20"
              >
                <span>同步章节改动至小说图谱</span>
              </button>

              <button 
                onClick={() => onNavigate('03-ai-agent')}
                className="flex-1 py-2.5 text-xs font-bold rounded-xl bg-[#131C31] border border-[#1E293B] hover:border-slate-500 text-slate-200 flex items-center justify-center gap-1.5"
              >
                <Bot className="w-3.5 h-3.5 text-cyan-400" />
                <span>呼叫 AI 专属创作助手</span>
              </button>
            </div>

          </div>
        </main>

        {/* Right Column: 图谱与伏笔 Inspector (Screen 4 Right) */}
        <aside className="w-80 border-l border-[#1E293B] bg-[#0A0F1D] p-4 flex flex-col justify-between overflow-y-auto custom-scrollbar">
          <div className="space-y-4">
            
            {/* Tabs */}
            <div className="flex items-center gap-1 border-b border-[#1E293B] pb-2 text-xs">
              <span className="font-bold text-cyan-400 border-b-2 border-cyan-400 pb-1 px-1">图谱与伏笔</span>
              <span className="text-slate-500 hover:text-slate-300 cursor-pointer px-1">角色状态</span>
              <span className="text-slate-500 hover:text-slate-300 cursor-pointer px-1">场景要素</span>
            </div>

            {/* Entities in this chapter */}
            <div className="space-y-2">
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>当前章节出场实体 (3)</span>
                <span className="text-cyan-400 cursor-pointer">全景图谱</span>
              </div>

              {/* Entity 1: 苏明月 */}
              <div className="p-3 rounded-xl bg-[#0F172A] border border-[#1E293B] space-y-1.5 text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center text-white font-bold text-[10px]">
                      苏
                    </div>
                    <div>
                      <span className="font-bold text-white">苏明月 (19岁)</span>
                    </div>
                  </div>
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-purple-950 text-purple-300 border border-purple-800 font-mono">
                    主角阵宗
                  </span>
                </div>
                <p className="text-[10px] text-slate-400">破壁者身份暴露边缘，动机与长兄遗物深锁</p>
                <div className="flex justify-between text-[10px] font-mono text-slate-400 pt-1">
                  <span>灵韵: 正常</span>
                  <span className="text-rose-400">心理负荷: 78%</span>
                </div>
              </div>

              {/* Entity 2: 九星阵盘 */}
              <div className="p-3 rounded-xl bg-[#0F172A] border border-[#1E293B] space-y-1 text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-teal-600 flex items-center justify-center text-white font-bold text-[10px]">
                      轮
                    </div>
                    <span className="font-bold text-white">九星阵盘</span>
                  </div>
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-teal-950 text-teal-300 border border-teal-800 font-mono">
                    玄阶核心
                  </span>
                </div>
                <div className="text-[10px] text-cyan-400 font-mono">图谱锚定点: 4 处</div>
              </div>
            </div>

            {/* Narrative Tension Wave Chart (Screen 4 Exact) */}
            <div className="p-3.5 rounded-xl bg-[#0F172A] border border-[#1E293B] space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300 font-bold">叙事张力与悬疑波形</span>
                <span className="font-mono text-cyan-400 font-bold text-xs">高亢 (82%)</span>
              </div>

              {/* SVG Wave chart */}
              <div className="h-16 w-full rounded bg-[#0A0F1D] relative overflow-hidden flex items-center p-2 border border-slate-800/80">
                <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                  <path
                    d="M 0 35 Q 25 35, 40 25 T 75 15 T 100 20"
                    fill="none"
                    stroke="#06B6D4"
                    strokeWidth="2"
                  />
                  <circle cx="75" cy="15" r="2.5" fill="#EF4444" />
                </svg>
                <span className="absolute bottom-1 right-2 text-[8px] font-mono text-slate-500">段落 4 · 冲突高点</span>
              </div>

              <div className="flex justify-between text-[10px] font-mono text-slate-400">
                <span>危机攀升 <strong className="text-rose-400">+65%</strong></span>
                <span>伏笔埋增深度 <strong className="text-cyan-400">S 级 (3条)</strong></span>
              </div>
            </div>

            {/* Logic Gates & Foreshadowing Warning (Screen 4 Bottom Right) */}
            <div className="p-3.5 rounded-xl bg-[#0F172A] border border-[#1E293B] space-y-2 text-xs">
              <div className="flex items-center gap-1.5 text-slate-200 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>实时逻辑门禁与校验</span>
              </div>

              <div className="flex justify-between text-[11px] text-slate-400">
                <span>角色语气一致性检验 (96%)</span>
                <span className="text-emerald-400 font-bold font-mono">通过</span>
              </div>

              {/* Foreshadowing Warning Box */}
              <div className="p-2.5 rounded-lg bg-amber-950/40 border border-amber-800/60 space-y-1 text-[11px]">
                <div className="flex items-center justify-between text-amber-300 font-bold">
                  <span className="flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3 text-amber-400" />
                    伏笔预警提醒
                  </span>
                  <span className="font-mono text-[9px] text-amber-400">关联第8章</span>
                </div>
                <p className="text-slate-300 text-[10px] leading-relaxed">
                  文中提及“长兄遗物”，与图谱第8章主线强相关。建议在第三段落追加“玉佩裂痕”这一关键感官锚点。
                </p>
                <button className="text-[10px] text-cyan-400 hover:underline pt-0.5 block">
                  一键采纳并注入建议 →
                </button>
              </div>
            </div>

          </div>
        </aside>

      </div>

    </div>
  );
};
