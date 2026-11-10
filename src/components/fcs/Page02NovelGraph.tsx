import React, { useState } from 'react';
import { FcsPageId } from '../../types/fcs';
import { FCS_GRAPH_NODES, FCS_SU_MINGYUE_DETAIL } from '../../data/fcsMockData';
import { 
  Play, 
  Download, 
  Save, 
  Plus, 
  Link2, 
  Grid, 
  Compass, 
  Undo2, 
  Redo2, 
  Maximize2, 
  Map, 
  Edit3, 
  X, 
  MapPin, 
  BookOpen, 
  ZoomIn, 
  ZoomOut,
  MousePointer,
  Hand,
  Search
} from 'lucide-react';

interface Page02NovelGraphProps {
  onNavigate: (page: FcsPageId) => void;
}

export const Page02NovelGraph: React.FC<Page02NovelGraphProps> = ({ onNavigate }) => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('node-su');
  const [isInspectorOpen, setIsInspectorOpen] = useState<boolean>(true);
  const [activeTool, setActiveTool] = useState<'pointer' | 'hand'>('pointer');
  const [zoom, setZoom] = useState<number>(100);

  const selectedNode = FCS_GRAPH_NODES.find((n) => n.id === selectedNodeId) || FCS_GRAPH_NODES[0];

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-[#0A0F1D] text-[#E2E8F0]">
      
      {/* Top Secondary Graph Toolbar (Screen 2 Top) */}
      <div className="h-12 border-b border-[#1E293B] bg-[#0A0F1D] px-4 flex items-center justify-between gap-4 z-20">
        
        {/* Left Status & Topology */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs">
            <span className="font-bold text-slate-100">星海之约</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-300 font-medium">叙事图谱</span>
          </div>

          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/50 border border-emerald-800/40 text-[11px] text-emerald-400 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>图谱引擎 v2.4 拓扑稳定</span>
          </div>

          <span className="text-[11px] font-mono text-slate-500 hidden xl:inline">
            最后同步 12:41:09
          </span>
        </div>

        {/* Center Search Input */}
        <div className="relative w-64 hidden sm:block">
          <Search className="w-3.5 h-3.5 absolute left-2.5 top-2 text-slate-500" />
          <input
            type="text"
            placeholder="检索节点、角色、因果..."
            className="w-full pl-8 pr-3 py-1 text-xs rounded-lg bg-[#0F172A] border border-[#1E293B] text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Zoom */}
          <div className="flex items-center bg-[#0F172A] border border-[#1E293B] rounded-lg p-0.5 text-xs font-mono text-slate-400">
            <button onClick={() => setZoom((z) => Math.max(50, z - 10))} className="p-1 hover:text-white">
              <ZoomOut className="w-3 h-3" />
            </button>
            <span className="px-1 text-[11px]">{zoom}%</span>
            <button onClick={() => setZoom((z) => Math.min(150, z + 10))} className="p-1 hover:text-white">
              <ZoomIn className="w-3 h-3" />
            </button>
            <button className="p-1 hover:text-white border-l border-[#1E293B] ml-0.5">
              <Maximize2 className="w-3 h-3" />
            </button>
          </div>

          <button className="flex items-center gap-1 px-2.5 py-1 text-xs rounded-lg border border-[#1E293B] bg-[#0F172A] text-slate-300 hover:text-white">
            <Download className="w-3 h-3" />
            <span>导出</span>
          </button>

          <button className="flex items-center gap-1 px-2.5 py-1 text-xs rounded-lg border border-[#1E293B] bg-[#0F172A] text-slate-300 hover:text-white">
            <Save className="w-3 h-3" />
            <span>保存</span>
          </button>

          <button 
            onClick={() => onNavigate('08-review-gate')}
            className="flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-lg bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#4F46E5] hover:to-[#7C3AED] text-white shadow-md shadow-purple-500/20"
          >
            <Play className="w-3 h-3 fill-current" />
            <span>运行 / 校验逻辑</span>
          </button>
        </div>

      </div>

      {/* Sub Canvas Control Strip */}
      <div className="h-10 border-b border-[#1E293B] bg-[#0F172A]/80 px-4 flex items-center justify-between text-xs z-10">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTool('pointer')}
            className={`p-1.5 rounded-lg transition-colors ${
              activeTool === 'pointer' ? 'bg-[#2563EB] text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <MousePointer className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setActiveTool('hand')}
            className={`p-1.5 rounded-lg transition-colors ${
              activeTool === 'hand' ? 'bg-[#2563EB] text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Hand className="w-3.5 h-3.5" />
          </button>
          <div className="h-4 w-px bg-slate-800 mx-1" />
          <button className="flex items-center gap-1 px-2 py-1 text-xs text-slate-300 hover:bg-[#182238] rounded-md">
            <Plus className="w-3.5 h-3.5 text-blue-400" />
            <span>新建节点</span>
          </button>
          <button className="flex items-center gap-1 px-2 py-1 text-xs text-slate-300 hover:bg-[#182238] rounded-md">
            <Link2 className="w-3.5 h-3.5 text-teal-400" />
            <span>关联连线</span>
          </button>
          <button className="flex items-center gap-1 px-2 py-1 text-xs text-slate-300 hover:bg-[#182238] rounded-md">
            <Grid className="w-3.5 h-3.5 text-purple-400" />
            <span>智能编组</span>
          </button>
          <button className="flex items-center gap-1 px-2 py-1 text-xs text-slate-300 hover:bg-[#182238] rounded-md">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>力导向对齐</span>
          </button>
        </div>

        <div className="flex items-center gap-2 text-slate-400">
          <button className="p-1 hover:text-white"><Undo2 className="w-3.5 h-3.5" /></button>
          <button className="p-1 hover:text-white"><Redo2 className="w-3.5 h-3.5" /></button>
          <div className="h-4 w-px bg-slate-800 mx-1" />
          <button 
            onClick={() => setIsInspectorOpen(!isInspectorOpen)}
            className="flex items-center gap-1 px-2 py-0.5 rounded border border-[#1E293B] bg-[#0A0F1D] text-[11px]"
          >
            <Map className="w-3 h-3 text-cyan-400" />
            <span>缩略图 [M]</span>
          </button>
        </div>
      </div>

      {/* Main Canvas Area + Right Inspector */}
      <div className="flex-1 flex overflow-hidden relative">
        
        {/* Infinite Dot-Grid Canvas */}
        <div className="flex-1 overflow-auto canvas-dot-grid relative p-8">
          
          {/* SVG Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ minWidth: '1000px', minHeight: '700px' }}>
            <defs>
              <linearGradient id="cyanLine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Path 1: 苏明月 -> 主线剧情 */}
            <path
              d="M 280 150 C 380 150, 400 240, 500 240"
              fill="none"
              stroke="url(#cyanLine)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Label 1: 核心伏笔 */}
            <g transform="translate(380, 185)">
              <rect x="-35" y="-10" width="70" height="20" rx="10" fill="#0A0F1D" stroke="#06B6D4" strokeWidth="1" />
              <text x="0" y="3.5" textAnchor="middle" fill="#38BDF8" fontSize="10" fontFamily="sans-serif">核心伏笔</text>
            </g>

            {/* Path 2: 苏明月 -> 关键事件 */}
            <path
              d="M 180 200 L 180 340"
              fill="none"
              stroke="#06B6D4"
              strokeWidth="2"
              strokeDasharray="4,4"
            />
            {/* Label 2: 阵法羁绊 92% */}
            <g transform="translate(180, 270)">
              <rect x="-42" y="-10" width="84" height="20" rx="10" fill="#0A0F1D" stroke="#06B6D4" strokeWidth="1" />
              <text x="0" y="3.5" textAnchor="middle" fill="#06B6D4" fontSize="10" fontFamily="sans-serif">阵法羁绊 92%</text>
            </g>

            {/* Path 3: 关键事件 -> 主线剧情 */}
            <path
              d="M 280 380 C 380 380, 420 280, 500 260"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="2"
              strokeDasharray="4,4"
            />
            {/* Label 3: 危机升级 · 第3章 */}
            <g transform="translate(380, 320)">
              <rect x="-48" y="-10" width="96" height="20" rx="10" fill="#0A0F1D" stroke="#F59E0B" strokeWidth="1" />
              <text x="0" y="3.5" textAnchor="middle" fill="#F59E0B" fontSize="10" fontFamily="sans-serif">危机升级 · 第3章</text>
            </g>

            {/* Path 4: 主线剧情 -> 天权阁 */}
            <path
              d="M 600 280 C 600 360, 640 400, 680 440"
              fill="none"
              stroke="#EF4444"
              strokeWidth="2"
              strokeDasharray="4,4"
            />
          </svg>

          {/* Node 1: 苏明月 (Screen 2 exact design) */}
          <div
            onClick={() => setSelectedNodeId('node-su')}
            className={`absolute rounded-2xl border p-4 w-64 bg-[#0F172A]/90 backdrop-blur-md cursor-pointer transition-all duration-200 ${
              selectedNodeId === 'node-su'
                ? 'border-cyan-400 ring-2 ring-cyan-400/50 shadow-[0_0_25px_rgba(6,182,212,0.3)] z-30'
                : 'border-[#1E293B] hover:border-cyan-500/50 z-20'
            }`}
            style={{ left: '60px', top: '70px' }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-slate-800 border border-cyan-500/30 flex items-center justify-center font-mono text-xs text-cyan-400 flex-shrink-0">
                img
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-sm text-white truncate">苏明月</h4>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800">
                    主要角色
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 truncate mt-0.5">
                  破壁者 · 阵法拓扑宗师
                </p>
              </div>
            </div>

            <div className="mt-3 pt-2.5 border-t border-[#1E293B] flex items-center justify-between text-[11px] font-mono">
              <span className="flex items-center gap-1 text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                散修阵营 · 筑基
              </span>
              <span className="text-cyan-400 font-bold">执念 94% · 选中</span>
            </div>
          </div>

          {/* Node 2: 主线剧情 (Screen 2 exact design) */}
          <div
            onClick={() => setSelectedNodeId('node-main-plot')}
            className={`absolute rounded-2xl border p-4 w-60 bg-[#0F172A]/90 backdrop-blur-md cursor-pointer transition-all ${
              selectedNodeId === 'node-main-plot'
                ? 'border-purple-400 ring-2 ring-purple-400/50 shadow-[0_0_25px_rgba(168,85,247,0.3)] z-30'
                : 'border-purple-500/40 hover:border-purple-400 z-20'
            }`}
            style={{ left: '460px', top: '180px' }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-700/50 flex items-center justify-center text-purple-300 flex-shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <h4 className="font-bold text-sm text-white">主线剧情</h4>
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                </div>
                <p className="text-[11px] text-slate-400 truncate">《星海之约》卷一</p>
              </div>
            </div>
            <div className="mt-2.5 pt-2 border-t border-[#1E293B] flex items-center justify-between text-[11px]">
              <span className="text-slate-400">核心叙事主轴</span>
              <span className="text-purple-300 font-mono px-1.5 py-0.2 rounded bg-purple-950/80 border border-purple-800">已连接 8 个节点</span>
            </div>
          </div>

          {/* Node 3: 关键事件 (观澜台夜宴 · 破阵) */}
          <div
            onClick={() => setSelectedNodeId('node-event-1')}
            className="absolute rounded-2xl border border-amber-500/40 bg-[#0F172A]/90 backdrop-blur-md p-4 w-64 cursor-pointer hover:border-amber-400 z-20"
            style={{ left: '70px', top: '320px' }}
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5">
                <span className="text-amber-400">🗓</span>
                <span className="font-bold text-sm text-white">关键事件</span>
              </div>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-950/80 text-amber-300 border border-amber-800 font-mono">
                转折点
              </span>
            </div>
            <h5 className="font-semibold text-xs text-slate-200">观澜台夜宴 · 破阵</h5>
            <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
              九天算盘异动，主角初露锋芒盗取芯片
            </p>
          </div>

          {/* Node 4: 林陌 (守护者) */}
          <div
            onClick={() => setSelectedNodeId('node-lin')}
            className="absolute rounded-xl border border-slate-700 bg-[#0F172A]/90 backdrop-blur-md p-3.5 w-56 cursor-pointer hover:border-slate-500 z-20"
            style={{ left: '80px', top: '480px' }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center font-bold text-xs text-slate-300">
                  陌
                </div>
                <div>
                  <h4 className="font-bold text-xs text-white">林陌</h4>
                  <p className="text-[10px] text-slate-400">退役星河执事 · 结伴同行</p>
                </div>
              </div>
              <span className="text-[10px] text-slate-500 font-mono">守护者</span>
            </div>
          </div>

          {/* Node 5: 天权阁 (追捕组织) */}
          <div
            onClick={() => setSelectedNodeId('node-tianquan')}
            className="absolute rounded-xl border border-rose-500/40 bg-[#0F172A]/90 backdrop-blur-md p-3.5 w-44 cursor-pointer hover:border-rose-400 z-20"
            style={{ left: '600px', top: '430px' }}
          >
            <div className="flex items-center gap-2">
              <span className="text-rose-500">⚠</span>
              <div>
                <h4 className="font-bold text-xs text-rose-300">天权阁</h4>
                <p className="text-[10px] text-slate-400">追捕组织 · 全频段锁定</p>
              </div>
            </div>
          </div>

          {/* Minimap (Bottom Right) */}
          <div className="absolute bottom-4 right-4 w-44 h-28 rounded-xl bg-[#0F172A]/95 border border-[#1E293B] p-2 pointer-events-none shadow-2xl">
            <div className="flex justify-between text-[9px] font-mono text-slate-500 mb-1">
              <span>MINIMAP</span>
              <span>780 x 540</span>
            </div>
            <div className="w-full h-20 rounded bg-[#0A0F1D] relative border border-slate-800/80">
              <div className="absolute left-4 top-3 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#38bdf8]" />
              <div className="absolute left-5 top-9 w-2 h-2 rounded-full bg-amber-400" />
              <div className="absolute left-6 top-14 w-2 h-2 rounded-full bg-teal-400" />
              <div className="absolute left-20 top-7 w-2.5 h-2.5 rounded-full bg-purple-500" />
              <div className="absolute right-5 top-12 w-2 h-2 rounded-full bg-rose-500" />
            </div>
          </div>

        </div>

        {/* Right Inspector: 主要角色 · 苏明月 (Screen 2 Right Panel) */}
        {isInspectorOpen && (
          <aside className="w-80 border-l border-[#1E293B] bg-[#0F172A] p-5 flex flex-col justify-between overflow-y-auto custom-scrollbar z-20">
            <div className="space-y-4">
              {/* Header Title */}
              <div className="flex items-center justify-between pb-3 border-b border-[#1E293B]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <h3 className="font-bold text-sm text-white">
                    {FCS_SU_MINGYUE_DETAIL.name}
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <button className="p-1 hover:text-white"><Edit3 className="w-3.5 h-3.5" /></button>
                  <button onClick={() => setIsInspectorOpen(false)} className="p-1 hover:text-white">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Character Photo Frame Banner */}
              <div className="relative h-44 rounded-xl bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-800 border border-[#1E293B] overflow-hidden flex items-center justify-center">
                <span className="text-slate-600 font-mono text-sm">img</span>
                <div className="absolute bottom-2.5 left-2.5 flex items-center gap-2">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800">
                    {FCS_SU_MINGYUE_DETAIL.tag}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-950/80 text-rose-300 border border-rose-800">
                    {FCS_SU_MINGYUE_DETAIL.sealTag}
                  </span>
                </div>
              </div>

              {/* Attributes 2-col box */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-[#131C31] border border-[#1E293B]">
                  <span className="text-[10px] text-slate-400 block">别名 / 阵营</span>
                  <span className="font-bold text-slate-200">{FCS_SU_MINGYUE_DETAIL.aliasFaction}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#131C31] border border-[#1E293B]">
                  <span className="text-[10px] text-slate-400 block">年龄 / 境界</span>
                  <span className="font-bold text-cyan-400 font-mono">{FCS_SU_MINGYUE_DETAIL.ageRealm}</span>
                </div>
              </div>

              {/* Identity Positioning */}
              <div className="p-3 rounded-lg bg-[#131C31] border border-[#1E293B] text-xs space-y-1">
                <span className="text-[10px] text-slate-400 block">身份定位</span>
                <p className="font-semibold text-slate-200">{FCS_SU_MINGYUE_DETAIL.identity}</p>
              </div>

              {/* Core Motive */}
              <div className="p-3 rounded-lg bg-[#131C31] border border-[#1E293B] text-xs space-y-1">
                <span className="text-[10px] text-slate-400 block">核心动机 / 执念</span>
                <p className="text-slate-300 leading-relaxed font-sans text-[11px]">
                  {FCS_SU_MINGYUE_DETAIL.coreMotive}
                </p>
              </div>

              {/* Narrative Tension & Psychological State */}
              <div className="p-3 rounded-lg bg-[#131C31] border border-[#1E293B] space-y-2 text-xs">
                <span className="text-[10px] text-slate-400 block">叙事张力与心理状态</span>
                
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-mono">
                    <span className="text-slate-400">执念指数</span>
                    <span className="text-cyan-400 font-bold">94%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" style={{ width: '94%' }} />
                  </div>
                </div>

                <div className="space-y-1 pt-1">
                  <div className="flex justify-between text-[11px] font-mono">
                    <span className="text-slate-400">危机程度 (天权阁追捕)</span>
                    <span className="text-rose-400 font-bold">78%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-amber-500 to-rose-500 rounded-full" style={{ width: '78%' }} />
                  </div>
                </div>
              </div>

              {/* Relationships */}
              <div className="p-3 rounded-lg bg-[#131C31] border border-[#1E293B] space-y-2 text-xs">
                <div className="flex justify-between text-[11px]">
                  <span className="text-slate-400">图谱网络关联</span>
                  <span className="font-mono text-cyan-400">共 18 条关联</span>
                </div>
                <div className="space-y-1.5 text-[11px]">
                  {FCS_SU_MINGYUE_DETAIL.relations.map((rel) => (
                    <div key={rel} className="flex items-center gap-1.5 text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>{rel}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="pt-4 mt-4 border-t border-[#1E293B] space-y-2">
              <button className="w-full py-2 text-xs font-semibold rounded-lg bg-[#182238] border border-[#1E293B] hover:border-slate-500 text-slate-200 flex items-center justify-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>定位画布节点</span>
              </button>

              <button 
                onClick={() => onNavigate('04-editor')}
                className="w-full py-2.5 text-xs font-bold rounded-lg bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#4338CA] hover:to-[#6D28D9] text-white flex items-center justify-center gap-1.5 shadow-md shadow-indigo-500/20"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>打开角色完整设定集</span>
              </button>
            </div>
          </aside>
        )}

      </div>

    </div>
  );
};
