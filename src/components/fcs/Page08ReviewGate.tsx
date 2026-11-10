import React, { useState } from 'react';
import { FcsPageId } from '../../types/fcs';
import { 
  ShieldCheck, 
  RotateCcw, 
  Download, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Layers, 
  Compass, 
  BookOpen, 
  Award, 
  Check, 
  ArrowRight,
  Shield,
  FileText
} from 'lucide-react';

interface Page08ReviewGateProps {
  onNavigate: (page: FcsPageId) => void;
}

export const Page08ReviewGate: React.FC<Page08ReviewGateProps> = ({ onNavigate }) => {
  const [filterType, setFilterType] = useState<'all' | 'blockers' | 'warnings' | 'passed'>('all');
  const [isReplacedWord, setIsReplacedWord] = useState(false);

  return (
    <div className="flex-1 flex flex-col h-full bg-[#0A0F1D] text-[#E2E8F0] overflow-y-auto custom-scrollbar">
      
      {/* 1. TOP HEADER BANNER */}
      <div className="border-b border-[#1E293B] bg-[#0F172A]/80 backdrop-blur-sm p-4 z-10 flex-shrink-0">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-[11px] font-mono text-cyan-400 mb-1 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>质量门禁 · QUALITY ASSURANCE GATE · VG-04 CENTRAL HUB</span>
              <span className="text-slate-600">|</span>
              <span className="text-emerald-400">已与时空图谱完全同步</span>
            </div>
            <div className="flex items-center gap-3">
              <h1 className="text-base font-bold text-white">8. 审核与质量门禁 · Review & Gate</h1>
              <span className="text-xs text-slate-400">质检雷达与发版放行中枢</span>
            </div>
            <div className="text-xs font-mono text-slate-500 mt-1 flex items-center gap-2">
              <span>当前分支: <strong className="text-slate-300">main</strong> (v1.0.0 墨构终卷预发版)</span>
              <span>|</span>
              <span>全书 20 章 · 58,400 字</span>
              <span>|</span>
              <span>扫描图谱节点: 142 个</span>
              <span>|</span>
              <span className="text-cyan-400">校验耗时: 1.4s</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A0F1D] border border-[#1E293B] hover:bg-[#1E293B] text-slate-300 text-xs font-medium transition-colors">
              <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
              <span>重新运行全书质检 (Deep Scan)</span>
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A0F1D] border border-[#1E293B] hover:bg-[#1E293B] text-slate-300 text-xs font-medium transition-colors">
              <Download className="w-3.5 h-3.5 text-slate-400" />
              <span>导出报告 (PDF/MD)</span>
            </button>
            <button 
              onClick={() => onNavigate('12-publish-share')}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold shadow-lg shadow-emerald-950/50 active:scale-95 transition-all"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-200" />
              <span>批准并发布正式版 (Sign-off)</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN CONTENT BODY */}
      <div className="p-6 space-y-6">
        
        {/* BIG RELEASE READY HERO CARD */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#064E3B]/40 via-[#0F172A] to-[#1E1B4B]/40 border border-emerald-500/40 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            
            {/* Left Status Info */}
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center text-white font-extrabold text-xl shadow-[0_0_20px_rgba(16,185,129,0.5)] flex-shrink-0">
                GO
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold text-white font-serif tracking-wide">
                    审核通过 · Gate Passed
                  </h2>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-700/60 text-xs font-mono font-bold">
                    RELEASE READY
                  </span>
                </div>
                <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
                  本次全书提交已通过所有核心逻辑与安全检查，无时空断裂、无阵亡角色悖论，满足文渊墨构正式发版准入规范。
                </p>
                <div className="text-[11px] text-slate-500 font-mono pt-1">
                  查看详细门禁规则清单 (20项) · 最近更新: 2分钟前 由自动化审校中枢执行
                </div>
              </div>
            </div>

            {/* Right 4 Core Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
              <div className="p-3 rounded-2xl bg-[#0A0F1D]/80 border border-[#1E293B] text-center">
                <div className="text-[10px] text-slate-500 mb-1">叙事连贯性</div>
                <div className="text-lg font-extrabold text-white">98.6%</div>
                <div className="text-[9px] text-emerald-400 mt-0.5">通过 · 无断层</div>
              </div>
              <div className="p-3 rounded-2xl bg-[#0A0F1D]/80 border border-[#1E293B] text-center">
                <div className="text-[10px] text-slate-500 mb-1">逻辑一致性</div>
                <div className="text-lg font-extrabold text-cyan-300">0 悖论</div>
                <div className="text-[9px] text-emerald-400 mt-0.5">图谱闭环完整</div>
              </div>
              <div className="p-3 rounded-2xl bg-[#0A0F1D]/80 border border-[#1E293B] text-center">
                <div className="text-[10px] text-slate-500 mb-1">合规检测</div>
                <div className="text-lg font-extrabold text-emerald-400">100%</div>
                <div className="text-[9px] text-emerald-400 mt-0.5">符合出版基线</div>
              </div>
              <div className="p-3 rounded-2xl bg-[#0A0F1D]/80 border border-[#1E293B] text-center">
                <div className="text-[10px] text-slate-500 mb-1">综合质量评分</div>
                <div className="text-lg font-extrabold text-amber-400">92 <span className="text-xs text-slate-500">/ 100</span></div>
                <div className="text-[9px] text-amber-300 mt-0.5">卓越评级 (S级)</div>
              </div>
            </div>

          </div>
        </div>

        {/* MIDDLE SECTION: RADAR SCAN + DETAILED AUDIT CHECKLIST */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT 5 COLS: SIX-DIMENSION RADAR & COMPLIANCE */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Radar Metrics Card */}
            <div className="p-5 rounded-2xl bg-[#0F172A] border border-[#1E293B] space-y-4">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 font-bold text-white">
                  <Compass className="w-4 h-4 text-cyan-400" />
                  <span>六维创作质量雷达</span>
                </div>
                <span className="text-[10px] text-cyan-400 font-mono">RADAR SCAN v2</span>
              </div>

              {/* Graphic Radar Simulation */}
              <div className="py-2 flex items-center justify-center relative">
                <svg className="w-56 h-56" viewBox="0 0 200 200">
                  {/* Outer rings */}
                  <polygon points="100,20 176,64 176,136 100,180 24,136 24,64" fill="none" stroke="#1E293B" strokeWidth="1" />
                  <polygon points="100,45 152,75 152,125 100,155 48,125 48,75" fill="none" stroke="#1E293B" strokeWidth="1" />
                  <polygon points="100,70 128,86 128,114 100,130 72,114 72,86" fill="none" stroke="#1E293B" strokeWidth="1" />
                  {/* Radar Fill Area */}
                  <polygon 
                    points="100,26 168,68 160,132 100,172 32,130 30,70" 
                    fill="rgba(37, 99, 235, 0.45)" 
                    stroke="#06B6D4" 
                    strokeWidth="2" 
                  />
                  {/* Center Dot */}
                  <circle cx="100" cy="100" r="3" fill="#06B6D4" />
                </svg>
              </div>

              {/* Six Dimensions Breakdown */}
              <div className="space-y-2.5 text-xs font-mono">
                <div className="space-y-1">
                  <div className="flex justify-between text-slate-300">
                    <span>世界观自治度 (World Consistency)</span>
                    <span className="text-emerald-400 font-bold">96 / 100</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#0A0F1D] rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '96%' }} />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-slate-300">
                    <span>人物语态纯度 (Character Voice)</span>
                    <span className="text-cyan-400 font-bold">91 / 100</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#0A0F1D] rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500 rounded-full" style={{ width: '91%' }} />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-slate-300">
                    <span>伏笔回收闭合 (Foreshadowing Closure)</span>
                    <span className="text-amber-400 font-bold">89 / 100</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#0A0F1D] rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: '89%' }} />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-slate-300">
                    <span>节奏呼吸感 (Pacing & Flow)</span>
                    <span className="text-blue-400 font-bold">93 / 100</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#0A0F1D] rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '93%' }} />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-slate-300">
                    <span>文风雅致度 (Lexical Richness)</span>
                    <span className="text-purple-400 font-bold">95 / 100</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#0A0F1D] rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 rounded-full" style={{ width: '95%' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Compliance & Sensitive Words Card */}
            <div className="p-5 rounded-2xl bg-[#0F172A] border border-[#1E293B] space-y-3">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 font-bold text-white">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span>合规与敏感词审查</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/40 font-mono">
                  0 违规
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                已通过网文出版通用规范 2025、玄幻仙侠宗门专有术语库、违禁词多级过滤模型全面扫描。
              </p>

              <div className="space-y-2 text-xs font-mono pt-1">
                <div className="flex items-center justify-between p-2 rounded-xl bg-[#0A0F1D] border border-[#1E293B]">
                  <span className="text-slate-300">国家出版禁则词汇库 (Level 1)</span>
                  <span className="text-emerald-400 font-bold">100% 洁净</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-xl bg-[#0A0F1D] border border-[#1E293B]">
                  <span className="text-slate-300">平台敏感与争议性词汇 (Level 2)</span>
                  <span className="text-emerald-400 font-bold">100% 洁净</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-xl bg-[#0A0F1D] border border-[#1E293B]">
                  <span className="text-slate-300">古今同义词风格替换建议</span>
                  <span className="text-cyan-400 font-bold">3 处轻度建议</span>
                </div>
              </div>

              {/* Electronic Seal Stamp */}
              <div className="p-3 rounded-xl bg-[#0A0F1D] border border-blue-500/20 flex items-center justify-between text-xs font-mono">
                <div>
                  <div className="text-slate-200 font-bold">文渊墨境电子质检印章</div>
                  <div className="text-[10px] text-slate-500">HASH: 8e91b...c92a · 区块存证有效</div>
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-rose-500/80 text-rose-500 flex items-center justify-center font-serif text-[10px] font-bold rotate-[-12deg]">
                  墨章
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT 7 COLS: AUDIT CHECKLIST DETAIL */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Checklist Header */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span>门禁项校验明细清单</span>
                  <span className="text-xs text-slate-500 font-mono">(18项通过 · 2项建议)</span>
                </h3>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center bg-[#0F172A] p-0.5 rounded-xl border border-[#1E293B] text-xs font-mono">
                <button
                  onClick={() => setFilterType('all')}
                  className={`px-2.5 py-1 rounded-lg transition-all ${filterType === 'all' ? 'bg-[#2563EB] text-white font-bold' : 'text-slate-400 hover:text-white'}`}
                >
                  全部 (20)
                </button>
                <button
                  onClick={() => setFilterType('blockers')}
                  className={`px-2.5 py-1 rounded-lg transition-all ${filterType === 'blockers' ? 'bg-[#2563EB] text-white font-bold' : 'text-slate-400 hover:text-white'}`}
                >
                  阻塞 (0)
                </button>
                <button
                  onClick={() => setFilterType('warnings')}
                  className={`px-2.5 py-1 rounded-lg transition-all ${filterType === 'warnings' ? 'bg-[#2563EB] text-white font-bold' : 'text-slate-400 hover:text-white'}`}
                >
                  建议 (2)
                </button>
                <button
                  onClick={() => setFilterType('passed')}
                  className={`px-2.5 py-1 rounded-lg transition-all ${filterType === 'passed' ? 'bg-[#2563EB] text-white font-bold' : 'text-slate-400 hover:text-white'}`}
                >
                  通过 (18)
                </button>
              </div>
            </div>

            {/* Checklist Items */}
            <div className="space-y-3">
              
              {/* Check Item 1: 时空悖论 */}
              <div className="p-4 rounded-2xl bg-[#0F172A] border border-emerald-500/30 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>时空悖论与绝对纪年检验</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-300 font-mono">PASS</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">120ms</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  深度遍历第1至20章全部42个时间锚点，星海历942年春至944年秋时间轴无倒流、无交叉重叠冲突。
                </p>
              </div>

              {/* Check Item 2: 角色存活 */}
              <div className="p-4 rounded-2xl bg-[#0F172A] border border-emerald-500/30 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>角色生命状态与出场自治</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-300 font-mono">PASS</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">84ms</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  跨章节比对「苏明月」、「林陌」等16名核心人物图谱，未出现已阵亡角色误登场或因果倒置。
                </p>
              </div>

              {/* Check Item 3: 伏笔回收预警 (Warning) */}
              <div className="p-4 rounded-2xl bg-[#182238] border border-amber-500/40 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <AlertCircle className="w-4 h-4 text-amber-400" />
                    <span>第8章伏笔回收张力预警</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-950 text-amber-300 font-mono">OPTIMIZATION</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-800/40 text-[10px]">
                    建议关注
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  伏笔 <strong className="text-cyan-300 font-mono">#FB-08「九星阵盘裂痕」</strong>在第8章埋设，第17章仅弱引用提及一次。建议在第18章加深羁绊呼应，以强化决战前的伏笔蓄势。
                </p>
              </div>

              {/* Check Item 4: 对白口吻古风微调 (Warning with inline action) */}
              <div className="p-4 rounded-2xl bg-[#182238] border border-blue-500/40 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>人物对白口吻古风微调</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-950 text-blue-300 font-mono">REFINEMENT</span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-300">文风校对</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  第2章林陌对白出现较为现代书面词汇「概率」（“此行成功的概率不及三成”），建议润色为「胜算 / 几率 / 成算」。（已匹配语境契合度 97%）
                </p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsReplacedWord(true)}
                    disabled={isReplacedWord}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                      isReplacedWord
                        ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/40'
                        : 'bg-[#2563EB] hover:bg-blue-600 text-white shadow-md'
                    }`}
                  >
                    {isReplacedWord ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>已成功回写至第2章正文</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>一键替换为「胜算」并同步</span>
                      </>
                    )}
                  </button>
                  <button 
                    onClick={() => onNavigate('04-editor')}
                    className="text-xs text-slate-400 hover:text-white"
                  >
                    在编辑器中查看
                  </button>
                </div>
              </div>

              {/* Check Item 5: 战力等级天平 */}
              <div className="p-4 rounded-2xl bg-[#0F172A] border border-emerald-500/30 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>战力等级天平平衡</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-300 font-mono">PASS</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">85ms</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  全书力量突破逻辑严格契合「太虚引力法则」，境界跃迁均具备丹药、阵法或顿悟前置，无断崖式战力崩溃。
                </p>
              </div>

              {/* Check Item 6: 分卷与章节字数分布 */}
              <div className="p-4 rounded-2xl bg-[#0F172A] border border-emerald-500/30 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>分卷与章节字数分布均匀度</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-300 font-mono">PASS</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">42ms</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  平均每章 2,920 字（极值范围 2,650 - 3,310 字），方差处于文学工业化标准创作基线。
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM MULTI-PARTY SIGN-OFF PIPELINE */}
        <div className="p-5 rounded-2xl bg-[#0F172A] border border-[#1E293B] space-y-4">
          <div className="flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 font-bold text-white">
              <Award className="w-4 h-4 text-blue-400" />
              <span>多方联合签署放行流水线 · Sign-off Workflow</span>
            </div>
            <span className="text-emerald-400">● 4/4 签署完毕，具备合法发版效力</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Signer 1: 星晨 */}
            <div className="p-3.5 rounded-xl bg-[#0A0F1D] border border-emerald-500/40 relative">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                    晨
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">星晨</div>
                    <div className="text-[10px] text-slate-400">主创编剧 / 制作人</div>
                  </div>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-[10px] font-mono text-slate-500 flex items-center justify-between border-t border-[#1E293B]/70 pt-2">
                <span className="text-emerald-400 font-bold">已签署通过</span>
                <span>2025-06-01 10:35</span>
              </div>
            </div>

            {/* Signer 2: 墨白 */}
            <div className="p-3.5 rounded-xl bg-[#0A0F1D] border border-emerald-500/40 relative">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-xs">
                    墨
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">墨白</div>
                    <div className="text-[10px] text-slate-400">助理编剧 / 设定统筹</div>
                  </div>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-[10px] font-mono text-slate-500 flex items-center justify-between border-t border-[#1E293B]/70 pt-2">
                <span className="text-emerald-400 font-bold">已签署通过</span>
                <span>2025-06-01 10:48</span>
              </div>
            </div>

            {/* Signer 3: 未来可期 */}
            <div className="p-3.5 rounded-xl bg-[#0A0F1D] border border-emerald-500/40 relative">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold text-xs">
                    未
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">未来可期</div>
                    <div className="text-[10px] text-slate-400">特邀终校 / 资深审读</div>
                  </div>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-[10px] font-mono text-slate-500 flex items-center justify-between border-t border-[#1E293B]/70 pt-2">
                <span className="text-emerald-400 font-bold">已签建议并通过</span>
                <span>2025-06-01 11:15</span>
              </div>
            </div>

            {/* Signer 4: AI Gatekeeper */}
            <div className="p-3.5 rounded-xl bg-[#0A0F1D] border border-cyan-500/40 relative">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center text-white font-bold text-xs shadow-[0_0_8px_rgba(6,182,212,0.6)]">
                    AI
                  </div>
                  <div>
                    <div className="text-xs font-bold text-cyan-300">AI Gatekeeper</div>
                    <div className="text-[10px] text-slate-400">自动化质检引擎</div>
                  </div>
                </div>
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="text-[10px] font-mono text-slate-500 flex items-center justify-between border-t border-[#1E293B]/70 pt-2">
                <span className="text-cyan-400 font-bold">自动放行准许 (Auto-Pass)</span>
                <span className="truncate">SIG#992-0A</span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
