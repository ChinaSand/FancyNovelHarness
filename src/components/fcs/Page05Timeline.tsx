import React, { useState } from 'react';
import { FcsPageId } from '../../types/fcs';
import { 
  GitCommit, 
  Layers, 
  CheckCircle2, 
  Plus, 
  ZoomIn, 
  Maximize2, 
  RotateCcw, 
  ShieldAlert, 
  Sparkles, 
  Clock, 
  BookOpen, 
  Trash2, 
  Edit3, 
  ChevronRight,
  Radio,
  Flame,
  Activity,
  Users,
  Compass
} from 'lucide-react';

interface Page05TimelineProps {
  onNavigate: (page: FcsPageId) => void;
}

export const Page05Timeline: React.FC<Page05TimelineProps> = ({ onNavigate }) => {
  const [selectedAnchor, setSelectedAnchor] = useState<string>('ep-1');
  const [viewMode, setViewMode] = useState<'events' | 'time' | 'relations'>('events');
  const [filterFocus, setFilterFocus] = useState<string>('all');

  return (
    <div className="flex-1 flex flex-col h-full bg-[#0A0F1D] text-[#E2E8F0] overflow-hidden">
      {/* 1. TOP SUB-HEADER BAR */}
      <div className="h-14 border-b border-[#1E293B] px-5 flex items-center justify-between bg-[#0F172A]/80 backdrop-blur-sm z-10 flex-shrink-0">
        
        {/* Left: View Mode Pills & Scale Selector */}
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-[#0A0F1D] p-1 rounded-xl border border-[#1E293B]">
            <button
              onClick={() => setViewMode('events')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'events'
                  ? 'bg-[#2563EB] text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${viewMode === 'events' ? 'bg-cyan-300' : 'bg-transparent'}`} />
              <span>事件线图</span>
            </button>
            <button
              onClick={() => setViewMode('time')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'time'
                  ? 'bg-[#2563EB] text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>时间视图</span>
            </button>
            <button
              onClick={() => setViewMode('relations')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'relations'
                  ? 'bg-[#2563EB] text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>关系视图</span>
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0A0F1D] border border-[#1E293B] text-xs text-slate-300">
            <span className="text-slate-500">刻度粒度:</span>
            <span className="font-medium text-cyan-300">按叙事章节 (Chapter)</span>
          </div>

          {/* Character Focus Filter */}
          <div className="hidden lg:flex items-center gap-1 text-xs text-slate-400">
            <span className="text-slate-500 mr-1">阵营/角色:</span>
            <button 
              onClick={() => setFilterFocus('all')}
              className={`px-2 py-1 rounded-md text-[11px] transition-colors ${filterFocus === 'all' ? 'bg-[#1E293B] text-cyan-300 font-medium' : 'hover:text-slate-200'}`}
            >
              全部焦点 (4)
            </button>
            <button 
              onClick={() => setFilterFocus('su')}
              className={`px-2 py-1 rounded-md text-[11px] transition-colors ${filterFocus === 'su' ? 'bg-[#1E293B] text-purple-300 font-medium' : 'hover:text-slate-200'}`}
            >
              仅苏明月
            </button>
            <button 
              onClick={() => setFilterFocus('conflict')}
              className={`px-2 py-1 rounded-md text-[11px] transition-colors ${filterFocus === 'conflict' ? 'bg-[#1E293B] text-rose-300 font-medium' : 'hover:text-slate-200'}`}
            >
              仅冲突节点
            </button>
          </div>
        </div>

        {/* Right Status Badge & Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 text-xs">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>时空因果自治 · 无穿越悖论</span>
          </div>

          <button 
            onClick={() => onNavigate('03-ai-agent')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2563EB] hover:bg-blue-600 text-white text-xs font-medium shadow-md shadow-blue-500/20 active:scale-95 transition-all"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>标记关键时空锚点</span>
          </button>

          {/* Canvas Controls */}
          <div className="flex items-center gap-1 bg-[#0A0F1D] p-1 rounded-lg border border-[#1E293B] text-slate-400">
            <button className="p-1 hover:text-white rounded hover:bg-[#1E293B] text-xs font-mono px-2">100%</button>
            <button className="p-1 hover:text-white rounded hover:bg-[#1E293B]" title="自适应画布">
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
            <button className="p-1 hover:text-white rounded hover:bg-[#1E293B]" title="重置原点">
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN WORKSPACE (TIMELINE CANVAS + RIGHT INSPECTOR) */}
      <div className="flex-1 flex overflow-hidden relative">

        {/* LEFT / CENTER: TIMELINE CANVAS */}
        <div className="flex-1 flex flex-col bg-[#080D1A] overflow-x-auto overflow-y-hidden relative custom-scrollbar">
          
          {/* Timeline Milestones Header */}
          <div className="h-12 border-b border-[#1E293B] flex items-center px-12 min-w-[1000px] bg-[#0A0F1D]/60 select-none">
            <div className="w-56 flex-shrink-0 text-xs font-mono text-slate-400 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              <span>泳道主格</span>
            </div>

            <div className="flex-1 grid grid-cols-5 text-xs font-mono">
              <div className="flex items-center gap-2 border-l border-[#1E293B]/70 pl-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="text-slate-300 font-semibold">第 1 章</span>
                <span className="text-slate-500 text-[11px]">迷雾之城 · 起势</span>
              </div>
              <div className="flex items-center gap-2 border-l border-[#1E293B]/70 pl-3">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="text-slate-300 font-semibold">第 5 章</span>
                <span className="text-slate-500 text-[11px]">阵网崩解 · 抉择</span>
              </div>
              <div className="flex items-center gap-2 border-l border-[#1E293B]/70 pl-3">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span className="text-slate-300 font-semibold">第 10 章</span>
                <span className="text-slate-500 text-[11px]">天权悬剑 · 突破</span>
              </div>
              <div className="flex items-center gap-2 border-l border-[#1E293B]/70 pl-3">
                <span className="w-2 h-2 rounded-full bg-indigo-400" />
                <span className="text-slate-300 font-semibold">第 15 章</span>
                <span className="text-slate-500 text-[11px]">旧界回响 · 溯因</span>
              </div>
              <div className="flex items-center gap-2 border-l border-[#1E293B]/70 pl-3">
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                <span className="text-slate-300 font-semibold">第 20 章</span>
                <span className="text-slate-500 text-[11px]">虚空归流 · 潮鸣</span>
              </div>
            </div>
          </div>

          {/* 4 SWIMLANES CONTAINER */}
          <div className="flex-1 flex flex-col justify-around py-4 min-w-[1000px] relative">
            
            {/* Background Grid Lines */}
            <div className="absolute inset-0 pl-68 pointer-events-none grid grid-cols-5 divide-x divide-[#1E293B]/40 z-0">
              <div /><div /><div /><div /><div />
            </div>

            {/* Visual SVG Spline Connectors */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-70">
              <defs>
                <linearGradient id="splineCyanBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="splineRedPulse" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#EF4444" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              {/* Path from Ep 1 (Su) down to Lin Mo action and then Conflict */}
              <path
                d="M 380 90 C 420 90, 440 180, 520 180"
                fill="none"
                stroke="url(#splineCyanBlue)"
                strokeWidth="2.5"
                strokeDasharray="4 3"
              />
              <path
                d="M 520 200 C 470 230, 440 280, 480 300"
                fill="none"
                stroke="url(#splineRedPulse)"
                strokeWidth="2"
              />
            </svg>

            {/* SWIMLANE 1: 苏明月 */}
            <div className="flex items-center px-8 relative z-20">
              {/* Lane Header */}
              <div className="w-56 flex-shrink-0 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-600/40 flex items-center justify-center text-purple-300 shadow-lg shadow-purple-900/30">
                  <span className="font-serif font-bold text-sm">月</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <span>苏明月</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-purple-950/60 text-purple-300 border border-purple-800/40">主叙事视角</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">命格「太阴破军」</div>
                </div>
              </div>

              {/* Lane Content Track */}
              <div className="flex-1 flex items-center gap-6 relative">
                {/* Event 1 */}
                <div 
                  onClick={() => setSelectedAnchor('ep-1')}
                  className={`cursor-pointer transition-all duration-200 transform hover:scale-[1.02] p-3.5 rounded-2xl bg-[#0F172A] border ${
                    selectedAnchor === 'ep-1'
                      ? 'border-blue-500 shadow-xl shadow-blue-500/20 ring-2 ring-blue-500/30'
                      : 'border-[#1E293B] hover:border-slate-600'
                  } w-80 relative`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white">第1章 迷雾苏醒 · 观澜破阵</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-rose-950/60 text-rose-300 border border-rose-800/40 font-mono">关键节拍</span>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <p className="text-xs text-slate-400">获得「墨玉璇玑核」，引发全城戒严</p>
                </div>

                {/* Event 2 */}
                <div 
                  onClick={() => setSelectedAnchor('ep-10')}
                  className={`cursor-pointer transition-all duration-200 transform hover:scale-[1.02] p-3.5 rounded-2xl bg-[#0F172A] border ${
                    selectedAnchor === 'ep-10'
                      ? 'border-purple-500 shadow-xl shadow-purple-500/20 ring-2 ring-purple-500/30'
                      : 'border-[#1E293B] hover:border-slate-600'
                  } w-80 ml-48`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-bold text-white">第10章 裂隙遁迹 · 重组星枢</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-purple-950/60 text-purple-300 border border-purple-800/40 font-mono">转折突围</span>
                  </div>
                  <p className="text-xs text-slate-400">生命体征骤降至 34% · 觉醒前兆</p>
                </div>
              </div>
            </div>

            {/* SWIMLANE 2: 林陌 */}
            <div className="flex items-center px-8 relative z-20">
              <div className="w-56 flex-shrink-0 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-600/40 flex items-center justify-center text-cyan-300 shadow-lg shadow-cyan-900/30">
                  <span className="font-serif font-bold text-sm">陌</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <span>林陌</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/40">策应守护</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">天工机括宗传</div>
                </div>
              </div>

              <div className="flex-1 flex items-center gap-6 relative">
                {/* Lin Mo Event */}
                <div 
                  onClick={() => setSelectedAnchor('ep-lin')}
                  className={`cursor-pointer transition-all duration-200 transform hover:scale-[1.02] p-3.5 rounded-2xl bg-[#0F172A] border ${
                    selectedAnchor === 'ep-lin'
                      ? 'border-cyan-500 shadow-xl shadow-cyan-500/20 ring-2 ring-cyan-500/30'
                      : 'border-[#1E293B] hover:border-slate-600'
                  } w-80 ml-32`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white">第3-7章 星河暗阁掩护行动</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/40 font-mono">双向羁绊</span>
                    </div>
                    <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  </div>
                  <p className="text-xs text-slate-400">布置「千机引线阵」阻断天权追击</p>
                </div>
              </div>
            </div>

            {/* SWIMLANE 3: 冲突组织 */}
            <div className="flex items-center px-8 relative z-20">
              <div className="w-56 flex-shrink-0 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-950/80 border border-rose-600/40 flex items-center justify-center text-rose-400 shadow-lg shadow-rose-900/30">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <span>冲突组织</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-rose-950/60 text-rose-300 border border-rose-800/40">天权暗阁</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">执律司律令巡捕</div>
                </div>
              </div>

              <div className="flex-1 flex items-center gap-6 relative">
                <div 
                  onClick={() => setSelectedAnchor('ep-conflict')}
                  className={`cursor-pointer transition-all duration-200 transform hover:scale-[1.02] p-3.5 rounded-2xl bg-[#0F172A] border ${
                    selectedAnchor === 'ep-conflict'
                      ? 'border-rose-500 shadow-xl shadow-rose-500/20 ring-2 ring-rose-500/30'
                      : 'border-[#1E293B] hover:border-slate-600'
                  } w-80 ml-20`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-bold text-white">天网全频段锁闭 · 封锁观澜界</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-rose-950/60 text-rose-400 border border-rose-800/40 font-mono">危机倒计时</span>
                  </div>
                  <p className="text-xs text-slate-400">布设九重禁元锁，追击苏明月命印</p>
                </div>
              </div>
            </div>

            {/* SWIMLANE 4: 宏观异变 */}
            <div className="flex items-center px-8 relative z-20">
              <div className="w-56 flex-shrink-0 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-950/80 border border-amber-600/40 flex items-center justify-center text-amber-400 shadow-lg shadow-amber-900/30">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <span>宏观异变</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-950/60 text-amber-300 border border-amber-800/40">星网律则</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">世界观背景纪事</div>
                </div>
              </div>

              <div className="flex-1 flex items-center gap-6 relative">
                <div className="p-3.5 rounded-2xl bg-[#0F172A] border border-[#1E293B] w-64">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-bold text-white">八百年前 · 太初断裂</span>
                    <Flame className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <p className="text-xs text-slate-400">星网中枢坠入地渊</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#0F172A] border border-[#1E293B] w-64 ml-8">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-bold text-white">观澜天枢过载崩塌</span>
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                  </div>
                  <p className="text-xs text-slate-400">灵气潮汐逆流 180里</p>
                </div>
              </div>
            </div>

          </div>

          {/* BOTTOM TIMELINE LEGEND */}
          <div className="h-10 border-t border-[#1E293B] bg-[#0A0F1D] px-8 flex items-center gap-6 text-[11px] text-slate-400 font-mono z-10 flex-shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="w-4 h-0.5 bg-blue-500 rounded" />
              <span>主角因果推进</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-4 h-0.5 bg-cyan-400 rounded" />
              <span>同盟协同潜行</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-4 h-0.5 bg-rose-500 rounded" />
              <span>敌对博弈激化</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-4 h-0.5 bg-amber-400 rounded" />
              <span>世界律则扰动</span>
            </div>
            <div className="ml-auto text-slate-500 flex items-center gap-2">
              <span>💡 拖拽两端滑块可缩放时间区间，点击任意锚点可激活右侧全息看板</span>
            </div>
          </div>

        </div>

        {/* RIGHT: TIMELINE ANCHOR INSPECTOR DRAWER */}
        <aside className="w-96 border-l border-[#1E293B] bg-[#0F172A] flex flex-col justify-between overflow-y-auto custom-scrollbar z-20 flex-shrink-0">
          <div className="p-5 space-y-5">
            {/* Header Badge & Title */}
            <div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-cyan-400 mb-1">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                <span>锚点序号 #EP-01-A1 · 核心转折</span>
              </div>
              <h2 className="text-lg font-bold text-white font-serif flex items-center justify-between">
                <span>迷雾之夜 · 观澜破阵</span>
              </h2>
            </div>

            {/* Illustration Graphic */}
            <div className="relative rounded-2xl overflow-hidden border border-[#1E293B] group shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80" 
                alt="观澜天枢" 
                className="w-full h-36 object-cover brightness-90 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
              <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] font-mono">
                <span className="text-cyan-300 font-medium">第七星区 · 观澜天枢引力台</span>
                <span className="px-1.5 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800/40 text-[10px]">
                  已实装正文
                </span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-[#0A0F1D] border border-[#1E293B]">
                <div className="text-slate-500 text-[11px] font-mono mb-1">世界纪年</div>
                <div className="font-semibold text-slate-200">九星纪 742年 孟冬</div>
              </div>
              <div className="p-3 rounded-xl bg-[#0A0F1D] border border-[#1E293B]">
                <div className="text-slate-500 text-[11px] font-mono mb-1">对应正文章节</div>
                <div className="font-semibold text-cyan-300">第1章 01~04小节</div>
              </div>
              <div className="p-3 rounded-xl bg-[#0A0F1D] border border-[#1E293B]">
                <div className="text-slate-500 text-[11px] font-mono mb-1">POV 视角角色</div>
                <div className="font-semibold text-purple-300">苏明月 (第一视角)</div>
              </div>
              <div className="p-3 rounded-xl bg-[#0A0F1D] border border-[#1E293B]">
                <div className="text-slate-500 text-[11px] font-mono mb-1">因果张力指数</div>
                <div className="font-semibold text-amber-400">89.4 / 极高危</div>
              </div>
            </div>

            {/* In-Scene Characters */}
            <div>
              <div className="text-xs font-semibold text-slate-300 mb-2 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-blue-400" />
                <span>同场卷入人物</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-purple-950/60 border border-purple-800/40 text-purple-300 text-xs font-medium">
                  苏明月 (潜行)
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 text-xs font-medium">
                  林陌 (外围引线)
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-rose-950/60 border border-rose-800/40 text-rose-300 text-xs font-medium">
                  九星巡卫长 (追捕)
                </span>
              </div>
            </div>

            {/* Causal Ripple Card */}
            <div className="p-3.5 rounded-xl bg-[#131C31] border border-[#1E293B] space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span>触发因果涟漪</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                苏明月强行夺取墨核，导致第七星区天枢失去阵眼，直接促使天权暗阁在第2章颁布全域宵禁，并埋下第8章长兄遗物共振的重大伏笔。
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => onNavigate('04-editor')}
                className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white text-xs font-medium shadow-md shadow-blue-500/20 active:scale-95 transition-all"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>编辑此锚点</span>
              </button>
              <button 
                onClick={() => onNavigate('04-editor')}
                className="p-2 rounded-xl bg-[#0A0F1D] border border-[#1E293B] hover:text-white text-slate-400 hover:border-slate-600 transition-colors"
                title="阅读正文"
              >
                <BookOpen className="w-4 h-4" />
              </button>
              <button 
                className="p-2 rounded-xl bg-[#0A0F1D] border border-[#1E293B] hover:text-rose-400 text-slate-400 hover:border-rose-900/40 transition-colors"
                title="删除节点"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* AI Inference Suggestion Footer Card */}
          <div className="p-4 border-t border-[#1E293B] bg-[#0A0F1D]/80">
            <div className="flex items-center justify-between text-xs mb-2">
              <div className="flex items-center gap-1.5 font-semibold text-slate-200">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>AI 因果推演建议</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-mono">实时就绪</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed mb-3">
              建议在第3章补齐林陌的机巧宗背景支线，以平衡第7章双线叙事张力。
            </p>
            <button 
              onClick={() => onNavigate('03-ai-agent')}
              className="w-full flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-[#182238] hover:bg-[#1E293B] text-cyan-300 border border-cyan-500/30 text-xs font-medium transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>一键生成支线时空桥接</span>
            </button>
          </div>
        </aside>

      </div>
    </div>
  );
};
