import React from 'react';
import { FcsPageId } from '../../types/fcs';
import { FCS_RECENT_PROJECTS } from '../../data/fcsMockData';
import { 
  Sparkles, 
  ArrowRight, 
  Network, 
  GitBranch, 
  Users, 
  Clock, 
  Layers, 
  ChevronRight,
  BookOpen
} from 'lucide-react';

interface Page01DashboardProps {
  onNavigate: (page: FcsPageId) => void;
}

export const Page01Dashboard: React.FC<Page01DashboardProps> = ({ onNavigate }) => {
  return (
    <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-[#0A0F1D] text-[#E2E8F0] custom-scrollbar">
      
      {/* Top Banner Indicator */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs">
            1
          </span>
          <h2 className="font-bold text-sm tracking-wide text-slate-100">
            工作台总览 · DASHBOARD
          </h2>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>系统已同步最新创作状态</span>
        </div>
      </div>

      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0F172A] via-[#131C31] to-[#1E1B4B] border border-[#1E293B] p-8 lg:p-10 shadow-2xl">
        {/* Abstract celestial / planetary illustration backdrop */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none opacity-40 lg:opacity-75 flex items-center justify-end pr-10">
          <div className="relative w-72 h-72 rounded-full border border-dashed border-purple-500/30 flex items-center justify-center">
            <div className="w-56 h-56 rounded-full border border-purple-400/20 flex items-center justify-center">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-indigo-900/60 to-purple-800/40 blur-xl" />
            </div>
            {/* Minimalist mountain & tower spire silhouette */}
            <div className="absolute bottom-4 right-16 w-8 h-24 bg-gradient-to-t from-purple-900 to-indigo-600 rounded-t-sm" />
            <div className="absolute bottom-2 right-28 w-12 h-16 bg-purple-950/80 rounded-t-sm" />
            <div className="absolute top-16 right-20 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#38bdf8]" />
          </div>
        </div>

        <div className="relative z-10 max-w-xl space-y-4">
          <h1 className="font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
            你好，创作者！<br />
            今天想创作什么呢？
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
            从灵感到完整作品的全流程创作操作系统。智能辅助叙事图谱、情节一致性校验与全节点时光回溯已就绪。
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('02-novel-graph')}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#4F46E5] to-[#6366F1] hover:from-[#4338CA] hover:to-[#4F46E5] text-white text-xs sm:text-sm font-semibold shadow-lg shadow-indigo-500/25 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>开始新项目</span>
              <ArrowRight className="w-4 h-4" />
              <span className="text-xs opacity-75 font-normal ml-1">基于模板或空白创作</span>
            </button>
          </div>
        </div>
      </div>

      {/* Split Section: Recent Projects & Quick Entrances */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: 最近项目 (Recent Projects) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-sm text-white">最近项目</h3>
              <span className="text-xs text-slate-500 font-mono">(3篇进行中)</span>
            </div>
            <button 
              onClick={() => onNavigate('02-novel-graph')}
              className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-0.5"
            >
              <span>更多</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {FCS_RECENT_PROJECTS.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => onNavigate(idx === 0 ? '02-novel-graph' : '04-editor')}
                className="group relative rounded-xl border border-[#1E293B] bg-[#0F172A] p-4 flex flex-col justify-between hover:border-blue-500/50 hover:bg-[#131C31] transition-all cursor-pointer shadow-lg"
              >
                {/* Micro illustration banner */}
                <div className="h-28 rounded-lg bg-gradient-to-br from-[#1E1B4B] to-[#0A0F1D] border border-slate-800/60 relative overflow-hidden flex items-center justify-center mb-3">
                  {idx === 0 && (
                    <div className="relative w-12 h-12 rounded-full border-2 border-dashed border-purple-400/50 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#38bdf8]" />
                    </div>
                  )}
                  {idx === 1 && (
                    <div className="relative text-amber-400/60 font-mono text-2xl font-bold">
                      ☆
                    </div>
                  )}
                  {idx === 2 && (
                    <div className="flex flex-col gap-1 w-10">
                      <span className="h-0.5 bg-teal-400/60 rounded" />
                      <span className="h-0.5 bg-teal-400/40 rounded" />
                      <span className="h-0.5 bg-teal-400/20 rounded" />
                    </div>
                  )}
                  
                  {/* Status badge in banner */}
                  <span className={`absolute top-2 left-2 text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                    project.statusType === 'in_progress'
                      ? 'border-purple-500/40 bg-purple-950/60 text-purple-300'
                      : project.statusType === 'completed'
                      ? 'border-amber-500/40 bg-amber-950/60 text-amber-300'
                      : 'border-teal-500/40 bg-teal-950/60 text-teal-300'
                  }`}>
                    {project.statusBadge}
                  </span>
                </div>

                <div className="space-y-1.5 flex-1">
                  <h4 className="font-bold text-sm text-slate-100 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-[#1E293B]/70 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>{project.updatedAt}</span>
                  <span className="text-slate-300 font-bold">{project.wordCount}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right 1 Col: 快捷入口 4个核心能力 */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-white">快捷入口</h3>
            <span className="text-xs text-slate-500 font-mono">4 个核心能力</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {/* AI 创作助手 */}
            <div
              onClick={() => onNavigate('03-ai-agent')}
              className="p-4 rounded-xl border border-[#1E293B] bg-[#0F172A] hover:bg-[#131C31] hover:border-purple-500/50 transition-all cursor-pointer group space-y-2.5"
            >
              <div className="w-8 h-8 rounded-lg bg-purple-950/80 border border-purple-700/50 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-white group-hover:text-purple-300">
                  AI 创作助手
                </h4>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  智能共创与续写润色
                </p>
              </div>
            </div>

            {/* Novel Graph */}
            <div
              onClick={() => onNavigate('02-novel-graph')}
              className="p-4 rounded-xl border border-[#1E293B] bg-[#0F172A] hover:bg-[#131C31] hover:border-blue-500/50 transition-all cursor-pointer group space-y-2.5"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-950/80 border border-blue-700/50 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <Network className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-white group-hover:text-blue-300">
                  Novel Graph
                </h4>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  多维故事拓扑图谱
                </p>
              </div>
            </div>

            {/* 版本管理 */}
            <div
              onClick={() => onNavigate('06-version-control')}
              className="p-4 rounded-xl border border-[#1E293B] bg-[#0F172A] hover:bg-[#131C31] hover:border-cyan-500/50 transition-all cursor-pointer group space-y-2.5"
            >
              <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-700/50 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <GitBranch className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-white group-hover:text-cyan-300">
                  版本管理
                </h4>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  时空回溯与修改对比
                </p>
              </div>
            </div>

            {/* 团队协作 */}
            <div
              onClick={() => onNavigate('07-collaboration')}
              className="p-4 rounded-xl border border-[#1E293B] bg-[#0F172A] hover:bg-[#131C31] hover:border-pink-500/50 transition-all cursor-pointer group space-y-2.5"
            >
              <div className="w-8 h-8 rounded-lg bg-pink-950/80 border border-pink-700/50 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-white group-hover:text-pink-300">
                  团队协作
                </h4>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  多人共创与评审动态
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
