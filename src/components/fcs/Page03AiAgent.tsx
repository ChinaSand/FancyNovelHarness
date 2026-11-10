import React, { useState } from 'react';
import { FcsPageId } from '../../types/fcs';
import { 
  Sparkles, 
  Send, 
  RefreshCw, 
  FileEdit, 
  CheckCircle2, 
  Sliders, 
  Mic, 
  AtSign, 
  Paperclip, 
  Check, 
  BookOpen, 
  Layers, 
  ArrowRight,
  Bot,
  Zap,
  ShieldAlert,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';

interface Page03AiAgentProps {
  onNavigate: (page: FcsPageId) => void;
}

export const Page03AiAgent: React.FC<Page03AiAgentProps> = ({ onNavigate }) => {
  const [activeSkill, setActiveSkill] = useState('assistant');
  const [inputVal, setInputVal] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-[#0A0F1D] text-[#E2E8F0]">
      
      {/* Secondary Status Strip (Screen 3 Top) */}
      <div className="border-b border-[#1E293B] bg-[#0F172A]/90 px-6 py-2.5 flex flex-wrap items-center justify-between gap-4 z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-950/80 border border-blue-600/40 flex items-center justify-center text-cyan-400">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-xs text-white">AI 创作助手 · 智能协作</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 font-semibold">
                Agent v3.4 神经共创
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              融合东方叙事拓扑与自适应推理引擎，实时对齐《星海之约》全景世界观与人物逻辑
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#131C31] border border-[#1E293B] text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>图谱知识库联动中</span>
          </div>
          <div className="px-2.5 py-1 rounded-lg bg-[#131C31] border border-[#1E293B] text-emerald-400 font-bold">
            98.4% 设定吻合率
          </div>
          <button className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#182238] border border-[#1E293B] hover:border-slate-500 text-slate-300">
            <Sliders className="w-3.5 h-3.5" />
            <span>微调参数</span>
          </button>
        </div>
      </div>

      {/* Main Split Body: Left Skill Menu & Right Chat Interface */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Side: Skills & Knowledge Anchor Column */}
        <aside className="w-80 border-r border-[#1E293B] bg-[#0A0F1D] p-4 flex flex-col justify-between overflow-y-auto custom-scrollbar">
          <div className="space-y-4">
            
            {/* Skills Menu 6 Modes */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-[11px] text-slate-400 font-mono mb-2">
                <span>创作能力菜单</span>
                <span className="text-slate-600">6 模式</span>
              </div>

              {[
                { id: 'assistant', label: '创作助手', sub: '全能', icon: '🤖' },
                { id: 'script', label: '智能编剧', sub: '镜头化', icon: '🎬' },
                { id: 'plot', label: '情节优化', sub: '冲突递增', icon: '📈' },
                { id: 'character', label: '角色塑造', sub: '言行印证', icon: '👤' },
                { id: 'world', label: '世界观构建', sub: '律则推演', icon: '🌐' },
                { id: 'polish', label: '文本润色', sub: '墨韵文风', icon: '✍️' },
              ].map((skill) => (
                <button
                  key={skill.id}
                  onClick={() => setActiveSkill(skill.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                    activeSkill === skill.id
                      ? 'bg-[#2563EB] text-white shadow-md shadow-blue-600/20 font-bold'
                      : 'text-slate-300 hover:bg-[#131C31]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span>{skill.icon}</span>
                    <span>{skill.label}</span>
                  </div>
                  <span className={`text-[10px] font-mono ${activeSkill === skill.id ? 'text-white' : 'text-slate-500'}`}>
                    {skill.sub}
                  </span>
                </button>
              ))}
            </div>

            {/* Inference Model & Token telemetry card */}
            <div className="p-3 rounded-xl bg-[#0F172A] border border-[#1E293B] space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">基础推理模型</span>
                <span className="text-emerald-400 font-mono font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Qwen-Story-Max
                </span>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-slate-400">图谱知识库</span>
                <span className="text-cyan-400 font-mono">已挂载《星海之约》</span>
              </div>
              <div className="pt-1 space-y-1">
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>上下文显存</span>
                  <span>24.8k / 32k Tokens</span>
                </div>
                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-400" style={{ width: '77%' }} />
                </div>
              </div>
            </div>

            {/* Locked Character Card: 苏明月 */}
            <div className="p-3.5 rounded-xl bg-[#0F172A] border border-[#1E293B] space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                  <span>锁定主角 · 苏明月</span>
                </div>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-rose-950/80 text-rose-300 border border-rose-800 font-mono">
                  九星执律
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <img
                  src="https://images.unsplash.com/photo-1534447677768-be436bb09401?w=100&auto=format&fit=crop&q=80"
                  alt="苏明月"
                  className="w-10 h-10 rounded-lg object-cover ring-1 ring-cyan-500/30"
                />
                <div className="min-w-0 text-xs">
                  <div className="text-slate-300 font-semibold truncate">苏明月 (19岁)</div>
                  <div className="text-[11px] text-slate-400 truncate">身份: 璇玑学府首席阵法师</div>
                  <div className="text-[10px] text-cyan-400 truncate">关系图谱: 关联事件 12 处</div>
                </div>
              </div>

              <p className="text-[11px] font-serif italic text-slate-400 border-l-2 border-purple-500 pl-2 leading-relaxed">
                “若九星沉沦为锁链，我便以骨简为凿，击碎这万古恒定的天幕。”
              </p>
            </div>

            {/* Quick Prompts list */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                常用推演指令集
              </span>
              {[
                { cmd: '/tension', desc: '激发场景戏剧张力' },
                { cmd: '/foreshadow', desc: '埋设长线伏笔线索' },
                { cmd: '/dialogue', desc: '角色声线仿生校准' },
              ].map((cmd) => (
                <div
                  key={cmd.cmd}
                  onClick={() => setInputVal(cmd.cmd + ' ')}
                  className="p-2 rounded-lg bg-[#0F172A] border border-[#1E293B] hover:border-slate-600 cursor-pointer flex items-center justify-between text-xs transition-colors"
                >
                  <span className="font-mono text-cyan-400">{cmd.cmd}</span>
                  <span className="text-[11px] text-slate-400">{cmd.desc}</span>
                </div>
              ))}
            </div>

          </div>
        </aside>

        {/* Right Side: Interactive Dialogue Stream */}
        <main className="flex-1 flex flex-col justify-between overflow-hidden bg-[#0A0F1D]">
          
          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
            
            {/* 1. Assistant Greeting Card */}
            <div className="flex flex-col items-center justify-center text-center space-y-4 py-4 max-w-xl mx-auto">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#312E81] to-[#2563EB] flex items-center justify-center text-cyan-300 shadow-xl shadow-blue-900/30">
                <Bot className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-base text-white">我是你的创作助手，有什么可以帮助你？</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  已实时载入《星海之约》第1至第5章设定集、苏明月人物卡与九星天网世界观拓扑。
                </p>
              </div>

              {/* 3 Preset Quick Capsules */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full pt-1">
                <button
                  onClick={() => setInputVal('请基于当前因果树分支，扩展第2章的情节可能性...')}
                  className="p-3 rounded-xl bg-[#0F172A] border border-[#1E293B] hover:border-blue-500/50 hover:bg-[#131C31] text-left text-xs transition-all"
                >
                  <div className="font-bold text-slate-200 flex items-center gap-1.5 mb-1">
                    <span>🚀</span> 扩展情节可能性
                  </div>
                  <p className="text-[10px] text-slate-500 leading-normal">基于当前因果树分支</p>
                </button>

                <button
                  onClick={() => setInputVal('请检查苏明月在当前场景下的行为一致性与盲点...')}
                  className="p-3 rounded-xl bg-[#0F172A] border border-[#1E293B] hover:border-blue-500/50 hover:bg-[#131C31] text-left text-xs transition-all"
                >
                  <div className="font-bold text-slate-200 flex items-center gap-1.5 mb-1">
                    <span>🔍</span> 检查角色一致性
                  </div>
                  <p className="text-[10px] text-slate-500 leading-normal">甄别苏明月行为盲点</p>
                </button>

                <button
                  onClick={() => setInputVal('请帮我规划生成下一章大纲与高潮起伏...')}
                  className="p-3 rounded-xl bg-[#0F172A] border border-[#1E293B] hover:border-blue-500/50 hover:bg-[#131C31] text-left text-xs transition-all"
                >
                  <div className="font-bold text-slate-200 flex items-center gap-1.5 mb-1">
                    <span>📝</span> 生成下章大纲
                  </div>
                  <p className="text-[10px] text-slate-500 leading-normal">规划第 2 章高潮起伏</p>
                </button>
              </div>
            </div>

            {/* 2. User Message (Screen 3) */}
            <div className="flex justify-end items-start gap-3">
              <div className="max-w-2xl bg-gradient-to-r from-[#1E293B] to-[#1E1B4B] border border-blue-500/30 p-4 rounded-2xl rounded-tr-none text-xs text-slate-200 leading-relaxed shadow-lg">
                <div className="flex justify-between items-center text-[10px] text-slate-400 mb-1 font-mono">
                  <span>任舟 (主创)</span>
                  <span>今天 14:26</span>
                </div>
                <p>
                  请帮我生成一个引人入胜的开篇章节草案，需要与《星海之约》图谱中的<strong className="text-cyan-400">苏明月阵营设定</strong>和<strong className="text-cyan-400">九星天网背景</strong>紧密契合，突出东方仙侠与星际科技交织的肃杀宿命感。
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xs text-white ring-1 ring-white/20 flex-shrink-0">
                舟
              </div>
            </div>

            {/* 3. FCS Assistant Generation Card (Screen 3 Exact Content) */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-cyan-950 border border-cyan-600/40 flex items-center justify-center text-cyan-300 flex-shrink-0 shadow-lg">
                <Bot className="w-4 h-4" />
              </div>

              <div className="flex-1 max-w-3xl rounded-2xl border border-[#1E293B] bg-[#0F172A] p-5 space-y-4 shadow-2xl">
                
                {/* Generation Header */}
                <div className="flex flex-wrap items-center justify-between pb-3 border-b border-[#1E293B] gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xs text-white">FCS 智能共创引擎</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#131C31] text-slate-400 border border-[#1E293B]">
                      耗时 1.2s · 消耗 18 点算力
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>已通过世界观图谱校正</span>
                  </div>
                </div>

                <div className="text-xs text-slate-400">
                  当然可以！以下是为您生成的《星海之约》第一章开篇试读草稿（融合墨韵工笔与符文超弦阵列）：
                </div>

                {/* Chapter Prose Card */}
                <div className="p-5 rounded-xl border border-slate-800 bg-[#0A0F1D] space-y-3 font-serif">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-4 bg-rose-500 rounded-full" />
                      <h4 className="font-bold text-sm text-slate-100">
                        第一章 · 观澜惊澜，九星逆鸣
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-950/80 text-rose-300 border border-rose-800">
                      初稿存卷
                    </span>
                  </div>

                  <div className="text-xs text-slate-300 leading-loose space-y-2">
                    <p>
                      夜色如墨，灵能九星的穹顶之下，一道流光划破天际。
                    </p>
                    <p>
                      苏明月站在观澜台前，寒风掀动她深青色的道袍衣袂，青玉发簪间隐现微不可察的纳米星阵回路。她望着那道自星海深渊坠下的冷蓝流光，心中涌起莫名的预感——
                    </p>
                    <p className="text-cyan-400 italic">
                      这一次，或许真的不一样了。
                    </p>
                    <p>
                      观澜台下的符文阵列正在以极微弱的赫兹逆向共振，晶石脉络中流淌的并非寻常的灵韵，而是尖锐、冰冷、宛若水银般的超弦异变。那是她在长兄留下的骨简中才见过的禁忌印记——“绝息矩阵”。九星天网沉寂了八百年的律则齿轮，在这一刻，发出了第一声断裂的轻响。
                    </p>
                  </div>

                  {/* Prose Metrics Bar */}
                  <div className="pt-3 border-t border-[#1E293B] flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-slate-400">
                    <div>字数统计: <span className="text-slate-200">342 字</span></div>
                    <div>阅读体感: <span className="text-slate-200">约 1.2 分钟</span></div>
                    <div>情感倾向: <span className="text-emerald-400 font-bold">悬疑 / 肃杀 (0.87)</span></div>
                    <div className="flex items-center gap-1 text-cyan-400">
                      <span>伏笔已挂载至「骨简之谜」</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#1E293B] bg-[#131C31] hover:bg-[#182238] text-xs text-slate-300">
                      <RefreshCw className="w-3 h-3" />
                      <span>重新生成</span>
                    </button>
                    <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#1E293B] bg-[#131C31] hover:bg-[#182238] text-xs text-slate-300">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      <span>优化润色</span>
                    </button>
                    <button 
                      onClick={() => onNavigate('04-editor')}
                      className="flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-[#2563EB] hover:bg-blue-600 text-xs font-bold text-white shadow-md shadow-blue-600/20"
                    >
                      <FileEdit className="w-3 h-3" />
                      <span>写入正文 / 加入大纲</span>
                    </button>
                    <button 
                      onClick={() => onNavigate('02-novel-graph')}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#1E293B] bg-[#131C31] hover:bg-[#182238] text-xs text-purple-400"
                    >
                      <span>联动图谱校验</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-1 text-slate-500">
                    <button className="p-1 hover:text-slate-300"><ThumbsUp className="w-3.5 h-3.5" /></button>
                    <button className="p-1 hover:text-slate-300"><ThumbsDown className="w-3.5 h-3.5" /></button>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Bottom Chat Command Bar (Screen 3) */}
          <div className="p-4 border-t border-[#1E293B] bg-[#0A0F1D] space-y-2.5">
            <div className="flex items-center gap-2 overflow-x-auto text-[11px] font-mono no-scrollbar">
              <span className="text-slate-500">快速引用:</span>
              <button 
                onClick={() => setInputVal((v) => v + '@苏明月 ')}
                className="px-2 py-0.5 rounded bg-[#131C31] border border-[#1E293B] text-cyan-400 hover:border-cyan-500"
              >
                @苏明月
              </button>
              <button 
                onClick={() => setInputVal((v) => v + '@绝息矩阵 ')}
                className="px-2 py-0.5 rounded bg-[#131C31] border border-[#1E293B] text-purple-400 hover:border-purple-500"
              >
                @绝息矩阵
              </button>
              <button 
                onClick={() => setInputVal((v) => v + '@观澜台 ')}
                className="px-2 py-0.5 rounded bg-[#131C31] border border-[#1E293B] text-amber-400 hover:border-amber-500"
              >
                @观澜台
              </button>
              <button 
                onClick={() => setInputVal('/继续推演下一幕 ')}
                className="px-2 py-0.5 rounded bg-[#131C31] border border-[#1E293B] text-teal-400 hover:border-teal-500"
              >
                /继续推演下一幕
              </button>
            </div>

            <div className="flex items-center gap-2 bg-[#0F172A] border border-[#1E293B] rounded-xl px-3 py-2">
              <div className="flex items-center gap-1.5 text-slate-500 mr-1">
                <button className="p-1 hover:text-slate-300"><Mic className="w-3.5 h-3.5" /></button>
                <button className="p-1 hover:text-slate-300"><AtSign className="w-3.5 h-3.5" /></button>
                <button className="p-1 hover:text-slate-300"><Paperclip className="w-3.5 h-3.5" /></button>
              </div>

              <input
                type="text"
                placeholder="输入你的需求... (支持 @引用角色/事件、/调用专业指令，按 Enter 发送)"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="flex-1 bg-transparent text-xs text-slate-200 placeholder-slate-500 focus:outline-none"
              />

              <button className="p-1.5 rounded-lg bg-[#2563EB] hover:bg-blue-600 text-white">
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </main>

      </div>

    </div>
  );
};
