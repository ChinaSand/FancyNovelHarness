import React, { useState } from 'react';
import { FcsPageId } from '../../types/fcs';
import { 
  GitBranch, 
  RotateCcw, 
  GitMerge, 
  ShieldCheck, 
  Search, 
  CheckCircle2, 
  AlertTriangle, 
  Plus, 
  SlidersHorizontal, 
  ExternalLink,
  ChevronDown,
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';

interface Page06VersionControlProps {
  onNavigate: (page: FcsPageId) => void;
}

export const Page06VersionControl: React.FC<Page06VersionControlProps> = ({ onNavigate }) => {
  const [selectedCommit, setSelectedCommit] = useState<string>('v0.9.8');
  const [activeTab, setActiveTab] = useState<'diff' | 'files' | 'graph-diff' | 'pr'>('diff');

  return (
    <div className="flex-1 flex flex-col h-full bg-[#0A0F1D] text-[#E2E8F0] overflow-hidden">
      
      {/* 1. TOP CONTROL BANNER */}
      <div className="border-b border-[#1E293B] bg-[#0F172A]/80 backdrop-blur-sm p-4 z-10 flex-shrink-0 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-4">
          
          {/* Title & Branch */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-950/80 border border-blue-600/40 flex items-center justify-center text-blue-400 shadow-lg shadow-blue-900/30">
              <GitBranch className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-sm font-bold text-white tracking-wide">版本演进与时光溯源</h1>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800/60 uppercase">
                  VERSION CONTROL
                </span>
              </div>
              <p className="text-xs text-slate-400">
                精准追踪因果图谱演化脉络，双屏文本细微差异与时空分支溯源
              </p>
            </div>

            {/* Branch selector pill */}
            <div className="ml-4 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0A0F1D] border border-[#1E293B] text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-semibold text-emerald-300">main</span>
              <span className="text-slate-500">(主线连载分支)</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-1" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button 
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A0F1D] border border-[#1E293B] hover:bg-[#1E293B] text-slate-300 text-xs font-medium transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
              <span>一键回滚此版</span>
            </button>
            <button 
              onClick={() => onNavigate('07-collaboration')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A0F1D] border border-[#1E293B] hover:bg-[#1E293B] text-slate-300 text-xs font-medium transition-colors"
            >
              <GitMerge className="w-3.5 h-3.5 text-purple-400" />
              <span>发起分支合并</span>
            </button>
            <button 
              onClick={() => onNavigate('08-review-gate')}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#2563EB] hover:bg-blue-600 text-white text-xs font-semibold shadow-md shadow-blue-500/25 active:scale-95 transition-all"
            >
              <ShieldCheck className="w-4 h-4 text-cyan-300" />
              <span>运行质量门禁与逻辑检测</span>
            </button>
          </div>
        </div>

        {/* Baseline pill */}
        <div className="flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="text-slate-500">对比基准:</span>
            <span className="px-2 py-0.5 rounded bg-[#182238] text-cyan-300 border border-cyan-500/30">v1.0.0 (线上正式版)</span>
            <span className="text-slate-600">⟷</span>
            <span className="text-slate-500">目标版本:</span>
            <span className="px-2 py-0.5 rounded bg-[#182238] text-purple-300 border border-purple-500/30">v0.9.8 (优化剧情逻辑)</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('diff')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'diff' ? 'bg-[#2563EB] text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              双屏对比视图
            </button>
            <button
              onClick={() => setActiveTab('files')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'files' ? 'bg-[#2563EB] text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              文件与章节变更 <span className="ml-1 px-1 rounded bg-[#0A0F1D] text-slate-300">3</span>
            </button>
            <button
              onClick={() => setActiveTab('graph-diff')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'graph-diff' ? 'bg-[#2563EB] text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              因果图谱 Diff <span className="ml-1 px-1.5 rounded-full bg-rose-950 text-rose-300 border border-rose-800/40 text-[10px]">1冲突</span>
            </button>
            <button
              onClick={() => setActiveTab('pr')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'pr' ? 'bg-[#2563EB] text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              合并请求 (PR #12) <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN BODY (LEFT VERSION TREE + RIGHT SPLIT DIFF) */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* LEFT PANEL: VERSION HISTORY TREE */}
        <aside className="w-84 border-r border-[#1E293B] bg-[#0A0F1D] flex flex-col justify-between overflow-y-auto custom-scrollbar flex-shrink-0">
          <div className="p-4 space-y-4">
            
            {/* Header & Filter */}
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold text-slate-200 flex items-center gap-2">
                <span>版本历史 (Version Tree)</span>
                <span className="text-[10px] text-slate-500 font-mono">共 18 次演化提交</span>
              </div>
              <button className="p-1 rounded text-slate-500 hover:text-slate-300 hover:bg-[#1E293B]">
                <SlidersHorizontal className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-500" />
              <input
                type="text"
                placeholder="过滤提交信息、Hash或作者..."
                className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-[#0F172A] border border-[#1E293B] text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Tree Items */}
            <div className="relative space-y-3 pl-4 border-l-2 border-[#1E293B] ml-2">
              
              {/* v1.0.0 */}
              <div 
                onClick={() => setSelectedCommit('v1.0.0')}
                className={`cursor-pointer p-3 rounded-xl transition-all relative ${
                  selectedCommit === 'v1.0.0'
                    ? 'bg-[#182238] border border-emerald-500/50 shadow-md shadow-emerald-950/40'
                    : 'bg-[#0F172A] border border-[#1E293B] hover:border-slate-600'
                }`}
              >
                <div className="absolute -left-[23px] top-4 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#0A0F1D] shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                <div className="flex items-center justify-between text-xs mb-1">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-emerald-400 font-mono">v1.0.0</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/40 font-mono">Release Tag</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">06-01 10:30</span>
                </div>
                <div className="text-xs font-semibold text-slate-200">完整墨构 · 终卷定稿</div>
                <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                  包含20章正文与全局图谱，已通过终审质量门禁与悖论溯源检测。
                </p>
                <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>作者: 任舟 (主创)</span>
                  <span className="text-emerald-400/80">#c4f92a1</span>
                </div>
              </div>

              {/* v0.9.8 */}
              <div 
                onClick={() => setSelectedCommit('v0.9.8')}
                className={`cursor-pointer p-3 rounded-xl transition-all relative ${
                  selectedCommit === 'v0.9.8'
                    ? 'bg-[#182238] border border-blue-500 shadow-md shadow-blue-950/40 ring-1 ring-blue-500/30'
                    : 'bg-[#0F172A] border border-[#1E293B] hover:border-slate-600'
                }`}
              >
                <div className="absolute -left-[23px] top-4 w-3.5 h-3.5 rounded-full bg-blue-500 border-2 border-[#0A0F1D] shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
                <div className="flex items-center justify-between text-xs mb-1">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-cyan-300 font-mono">v0.9.8</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-950 text-blue-300 border border-blue-800/40 font-mono">Comparing</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">05-28 16:20</span>
                </div>
                <div className="text-xs font-semibold text-slate-200">优化剧情逻辑与第8章伏笔</div>
                <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                  修改第1章与第8章关于玉佩裂痕的关键线索因果连线，重写战斗开场。
                </p>
                <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>作者: 墨白 (助理编剧)</span>
                  <span className="text-cyan-400/80">#8e12b03</span>
                </div>
              </div>

              {/* v0.9.7 */}
              <div 
                onClick={() => setSelectedCommit('v0.9.7')}
                className="cursor-pointer p-3 rounded-xl bg-[#0F172A] border border-[#1E293B] hover:border-slate-600 transition-all relative"
              >
                <div className="absolute -left-[21px] top-4 w-2.5 h-2.5 rounded-full bg-slate-500 border-2 border-[#0A0F1D]" />
                <div className="flex items-center justify-between text-xs mb-1">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-slate-300 font-mono">v0.9.7</span>
                    <span className="text-[10px] px-1 py-0.2 rounded bg-[#182238] text-slate-400 font-mono">Patch</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">05-26 14:15</span>
                </div>
                <div className="text-xs font-semibold text-slate-300">调整角色设定与阵营好感</div>
                <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>作者: 任舟</span>
                  <span>#5a07c12</span>
                </div>
              </div>

              {/* v0.9.6 */}
              <div 
                onClick={() => setSelectedCommit('v0.9.6')}
                className="cursor-pointer p-3 rounded-xl bg-[#0F172A] border border-[#1E293B] hover:border-slate-600 transition-all relative"
              >
                <div className="absolute -left-[21px] top-4 w-2.5 h-2.5 rounded-full bg-rose-500 border-2 border-[#0A0F1D]" />
                <div className="flex items-center justify-between text-xs mb-1">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-rose-400 font-mono">v0.9.6</span>
                    <span className="text-[10px] px-1 py-0.2 rounded bg-rose-950 text-rose-300 border border-rose-800/40 font-mono">Paradox Fix</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">05-24 11:20</span>
                </div>
                <div className="text-xs font-semibold text-slate-300">修复已知剧情悖论问题</div>
                <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>作者: AI 巡检助手</span>
                  <span>#32d84ff</span>
                </div>
              </div>

            </div>
          </div>

          {/* New Snapshot Button */}
          <div className="p-4 border-t border-[#1E293B]">
            <button className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-[#182238] hover:bg-[#1E293B] text-cyan-300 border border-cyan-500/30 text-xs font-medium transition-all">
              <Plus className="w-3.5 h-3.5" />
              <span>创建新版本快照 (Snapshot)</span>
            </button>
          </div>
        </aside>

        {/* RIGHT AREA: SPLIT-SCREEN DIFF & CAUSAL IMPACT ANALYSIS */}
        <div className="flex-1 flex flex-col overflow-hidden bg-[#080D1A]">
          
          {/* Diff Header Bar */}
          <div className="h-11 border-b border-[#1E293B] bg-[#0A0F1D] px-4 flex items-center justify-between text-xs font-mono flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-rose-400">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span>原版本: v0.9.7 (修改前 · 2,140字)</span>
              </div>
              <span className="text-slate-600">⟷</span>
              <div className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>当前版本: v0.9.8 (修改后 · 2,360字, +220字)</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-400">
              <div className="flex items-center gap-1 bg-[#182238] p-0.5 rounded-lg border border-[#1E293B]">
                <button className="px-2 py-0.5 rounded text-[11px] bg-[#2563EB] text-white">逐行分栏</button>
                <button className="px-2 py-0.5 rounded text-[11px] hover:text-white">单栏内联</button>
              </div>
              <div className="flex items-center gap-1.5 text-cyan-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>图谱联动 (On)</span>
              </div>
            </div>
          </div>

          {/* Chapter Path & Stats Strip */}
          <div className="h-9 border-b border-[#1E293B] bg-[#0F172A] px-4 flex items-center justify-between text-xs font-mono flex-shrink-0">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="text-cyan-400 font-semibold">第一卷: 星渊启明</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-200">第01章「夜巡长廊」.txt</span>
            </div>
            <div className="flex items-center gap-4 text-[11px]">
              <span className="text-rose-400 font-bold">- 14 行</span>
              <span className="text-emerald-400 font-bold">+ 28 行</span>
              <span className="text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">+220 WORDS</span>
            </div>
          </div>

          {/* DUAL PANE DIFF VIEWER */}
          <div className="flex-1 grid grid-cols-2 divide-x divide-[#1E293B] overflow-y-auto custom-scrollbar font-mono text-xs select-text">
            
            {/* LEFT: ORIGINAL (v0.9.7) */}
            <div className="p-3 bg-[#0A0F1D]/60 space-y-1">
              <div className="text-[10px] text-slate-500 mb-2 font-bold uppercase tracking-wider">
                ORIGINAL (v0.9.7)
              </div>

              <div className="flex items-start gap-3 py-0.5 text-slate-400">
                <span className="w-6 text-slate-600 text-right select-none">01</span>
                <span className="text-slate-200 font-bold">第一章 夜巡长廊</span>
              </div>
              <div className="flex items-start gap-3 py-0.5 text-slate-400">
                <span className="w-6 text-slate-600 text-right select-none">02</span>
                <span></span>
              </div>
              <div className="flex items-start gap-3 py-0.5 text-slate-400 leading-relaxed">
                <span className="w-6 text-slate-600 text-right select-none">03</span>
                <span>夜色如墨，迷雾笼罩着整座重霄城。湿冷的风夹杂着微咸的雨雾掠过悬空天廊的飞檐斗拱。</span>
              </div>
              <div className="flex items-start gap-3 py-0.5 text-slate-400 leading-relaxed">
                <span className="w-6 text-slate-600 text-right select-none">04</span>
                <span>远处霓虹与符箓暗光在雨幕中交织，泛起斑驳的冷色光圈。天穹顶端的九星天网如同巨兽俯瞰整片下层城寨。</span>
              </div>
              <div className="flex items-start gap-3 py-0.5 text-slate-400">
                <span className="w-6 text-slate-600 text-right select-none">05</span>
                <span></span>
              </div>
              {/* DELETED BLOCK (RED) */}
              <div className="flex items-start gap-3 py-1 px-1.5 rounded bg-rose-950/40 border-l-2 border-rose-500 text-rose-200 leading-relaxed">
                <span className="w-6 text-rose-500 text-right select-none font-bold">06 -</span>
                <span>苏明月停下脚步，风衣下摆在风中烈烈作响。她望向那道来自星海深渊坠下的冷蓝流光，心中涌起莫名的预感。</span>
              </div>
              <div className="flex items-start gap-3 py-1 px-1.5 rounded bg-rose-950/40 border-l-2 border-rose-500 text-rose-200 leading-relaxed">
                <span className="w-6 text-rose-500 text-right select-none font-bold">07 -</span>
                <span>长兄留下的旧式怀表在掌心无声发烫，秒针在二点零七分诡异地停顿了一下。</span>
              </div>
              <div className="flex items-start gap-3 py-1 px-1.5 rounded bg-rose-950/40 border-l-2 border-rose-500 text-rose-200 leading-relaxed">
                <span className="w-6 text-rose-500 text-right select-none font-bold">08 -</span>
                <span>那是属于普通旧纪元的机械指针，早已无法感应阵眼脉动。</span>
              </div>
              <div className="flex items-start gap-3 py-0.5 text-slate-400">
                <span className="w-6 text-slate-600 text-right select-none">09</span>
                <span></span>
              </div>
              <div className="flex items-start gap-3 py-0.5 text-slate-400 leading-relaxed">
                <span className="w-6 text-slate-600 text-right select-none">10</span>
                <span>「谁在暗处？」她冷声喝道。指刃微不可察地弹出，在阴影中闪烁幽光。</span>
              </div>
              <div className="flex items-start gap-3 py-0.5 text-slate-400 leading-relaxed">
                <span className="w-6 text-slate-600 text-right select-none">11</span>
                <span>雨声掩盖了细碎的脚步，只有廊柱后隐隐传来的齿轮微鸣。</span>
              </div>
            </div>

            {/* RIGHT: MODIFIED (v0.9.8) */}
            <div className="p-3 bg-[#080D1A] space-y-1">
              <div className="text-[10px] text-cyan-400 mb-2 font-bold uppercase tracking-wider flex items-center justify-between">
                <span>MODIFIED (v0.9.8)</span>
                <span className="text-emerald-400 text-[10px]">+220 WORDS</span>
              </div>

              <div className="flex items-start gap-3 py-0.5 text-slate-400">
                <span className="w-6 text-slate-600 text-right select-none">01</span>
                <span className="text-white font-bold">第一章 夜巡长廊</span>
              </div>
              <div className="flex items-start gap-3 py-0.5 text-slate-400">
                <span className="w-6 text-slate-600 text-right select-none">02</span>
                <span></span>
              </div>
              <div className="flex items-start gap-3 py-0.5 text-slate-400 leading-relaxed">
                <span className="w-6 text-slate-600 text-right select-none">03</span>
                <span>夜色如墨，迷雾笼罩着整座重霄城。湿冷的风夹杂着微咸的雨雾掠过悬空天廊的飞檐斗拱。</span>
              </div>
              <div className="flex items-start gap-3 py-0.5 text-slate-400 leading-relaxed">
                <span className="w-6 text-slate-600 text-right select-none">04</span>
                <span>远处霓虹与符箓暗光在雨幕中交织，泛起斑驳的冷色光圈。天穹顶端的<span className="bg-cyan-950/80 text-cyan-300 px-1 rounded border border-cyan-800/40">九星巡卫阵眼</span>如同巨兽俯瞰整片下层城寨。</span>
              </div>
              <div className="flex items-start gap-3 py-0.5 text-slate-400">
                <span className="w-6 text-slate-600 text-right select-none">05</span>
                <span></span>
              </div>
              {/* ADDED BLOCK (GREEN) */}
              <div className="flex items-start gap-3 py-1 px-1.5 rounded bg-emerald-950/40 border-l-2 border-emerald-500 text-emerald-200 leading-relaxed">
                <span className="w-6 text-emerald-400 text-right select-none font-bold">06 +</span>
                <span>苏明月停下脚步，风衣下摆在风中烈烈作响。<span className="bg-emerald-900/60 text-white px-1 rounded">她指尖微抬，虚空中三道微型符阵顷刻如同金色莲华般悄然绽放。</span></span>
              </div>
              <div className="flex items-start gap-3 py-1 px-1.5 rounded bg-emerald-950/40 border-l-2 border-emerald-500 text-emerald-200 leading-relaxed">
                <span className="w-6 text-emerald-400 text-right select-none font-bold">07 +</span>
                <span>空气中弥漫开一股焦灼的高能等离子体气息。她握紧了那枚带血的玉佩裂痕，长兄的警告在识海中回荡。</span>
              </div>
              <div className="flex items-start gap-3 py-1 px-1.5 rounded bg-emerald-950/40 border-l-2 border-emerald-500 text-emerald-200 leading-relaxed">
                <span className="w-6 text-emerald-400 text-right select-none font-bold">08 +</span>
                <span>玉佩深处隐匿的青色游光与头顶的阵眼产生共鸣，这是唯有纯阳血脉才能唤醒的机关契印。</span>
              </div>
              <div className="flex items-start gap-3 py-0.5 text-slate-400">
                <span className="w-6 text-slate-600 text-right select-none">09</span>
                <span></span>
              </div>
              <div className="flex items-start gap-3 py-0.5 text-slate-400 leading-relaxed">
                <span className="w-6 text-slate-600 text-right select-none">10</span>
                <span>「谁在暗处？」她冷声喝道。指刃微不可察地弹出，在阴影中闪烁幽光。</span>
              </div>
              <div className="flex items-start gap-3 py-0.5 text-slate-400 leading-relaxed">
                <span className="w-6 text-slate-600 text-right select-none">11</span>
                <span>雨声掩盖了细碎的脚步，只有廊柱后隐隐传来的齿轮微鸣。</span>
              </div>
            </div>

          </div>

          {/* BOTTOM DIFF BAR */}
          <div className="h-8 border-t border-[#1E293B] bg-[#0A0F1D] px-4 flex items-center justify-between text-[11px] font-mono text-slate-400 flex-shrink-0">
            <div className="flex items-center gap-3">
              <span>第1章 · 14 处字符变更 · 2 处伏笔实体映射重构</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>符文法宝逻辑校验通过</span>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button className="hover:text-white">上一差异 (N)</button>
              <span className="text-slate-600">|</span>
              <button className="hover:text-white">下一差异 (P)</button>
            </div>
          </div>

          {/* BOTTOM IMPACT ANALYSIS CARD */}
          <div className="h-28 border-t border-[#1E293B] bg-[#0F172A] p-3 flex flex-col justify-between flex-shrink-0">
            <div className="flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white">因果图谱实体涟漪效应 (Impact Analysis)</span>
                <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/40 text-[10px]">
                  自治度 98.4%
                </span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-[11px]">
                <span>冲突线索: <strong className="text-emerald-400">0</strong></span>
                <span>悬空伏笔: <strong className="text-amber-400">2</strong></span>
                <span>回溯验证: <strong className="text-cyan-400">100%</strong></span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {/* Impact entity 1 */}
              <div 
                onClick={() => onNavigate('11-asset-manager')}
                className="cursor-pointer p-2 rounded-xl bg-[#0A0F1D] border border-[#1E293B] hover:border-cyan-500/40 flex items-center gap-2.5 transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-950/60 border border-emerald-800/40 flex items-center justify-center text-emerald-400 text-[10px] font-bold">
                  物
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-200 truncate">法宝: 青玉碎灵</div>
                  <div className="text-[10px] text-slate-500 truncate">实体状态: 建立因果纽带</div>
                </div>
              </div>

              {/* Impact entity 2 */}
              <div 
                onClick={() => onNavigate('02-novel-graph')}
                className="cursor-pointer p-2 rounded-xl bg-[#0A0F1D] border border-[#1E293B] hover:border-purple-500/40 flex items-center gap-2.5 transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-purple-950/60 border border-purple-800/40 flex items-center justify-center text-purple-300 text-[10px] font-bold">
                  人
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-200 truncate">苏明月 (主角)</div>
                  <div className="text-[10px] text-slate-500 truncate">随身行囊已更新</div>
                </div>
              </div>

              {/* Impact entity 3 */}
              <div 
                onClick={() => onNavigate('04-editor')}
                className="cursor-pointer p-2 rounded-xl bg-[#0A0F1D] border border-[#1E293B] hover:border-blue-500/40 flex items-center gap-2.5 transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-950/60 border border-blue-800/40 flex items-center justify-center text-blue-400 text-[10px] font-bold">
                  章
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-200 truncate">第08章「青玉惊变」</div>
                  <div className="text-[10px] text-slate-500 truncate">前置线索锁定</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
