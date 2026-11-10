import React, { useState, useRef } from 'react';
import { 
  StoryNode, 
  Character 
} from '../types';
import { 
  Sparkles, 
  MapPin, 
  Users, 
  AlertCircle, 
  Flame, 
  CheckCircle2, 
  Clock, 
  Layers, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  SlidersHorizontal,
  Plus
} from 'lucide-react';
import { YinzhangStamp } from './YinzhangStamp';

interface NovelGraphViewProps {
  nodes: StoryNode[];
  characters: Character[];
  onSelectNode: (node: StoryNode) => void;
  onOpenNewNode: () => void;
  isDarkMode: boolean;
}

export const NovelGraphView: React.FC<NovelGraphViewProps> = ({
  nodes,
  characters,
  onSelectNode,
  onOpenNewNode,
  isDarkMode,
}) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [selectedFaction, setSelectedFaction] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [highlightedNodeId, setHighlightedNodeId] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  // Filter nodes
  const filteredNodes = nodes.filter((node) => {
    if (selectedFaction !== 'all' && !node.factions.includes(selectedFaction)) return false;
    if (selectedType !== 'all' && node.type !== selectedType) return false;
    return true;
  });

  // Calculate SVG dimensions
  const maxX = Math.max(...nodes.map((n) => n.x), 1100) + 350;
  const maxY = Math.max(...nodes.map((n) => n.y), 450) + 260;

  const nodeMap = new Map<string, StoryNode>();
  nodes.forEach((n) => nodeMap.set(n.id, n));

  const characterMap = new Map<string, Character>();
  characters.forEach((c) => characterMap.set(c.id, c));

  const getTypeBadge = (type: StoryNode['type']) => {
    switch (type) {
      case 'milestone':
        return { text: '枢纽大关', color: 'border-blue-500/50 bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300' };
      case 'conflict':
        return { text: '锋芒对冲', color: 'border-rose-500/50 bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300' };
      case 'revelation':
        return { text: '天机洞析', color: 'border-teal-500/50 bg-teal-50 text-teal-700 dark:bg-teal-950/40 dark:text-teal-300' };
      case 'character_arc':
        return { text: '因缘蜕变', color: 'border-amber-500/50 bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300' };
      case 'world_shift':
        return { text: '大衍巨变', color: 'border-purple-500/50 bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300' };
    }
  };

  const getStatusBadge = (status: StoryNode['status']) => {
    switch (status) {
      case 'completed':
        return { text: '已研毕', icon: <CheckCircle2 className="w-3 h-3 text-teal-600" /> };
      case 'in_progress':
        return { text: '研撰中', icon: <Clock className="w-3 h-3 text-blue-600 animate-pulse" /> };
      case 'planned':
        return { text: '草拟伏线', icon: <AlertCircle className="w-3 h-3 text-amber-600" /> };
      case 'draft':
        return { text: '初稿立意', icon: <Layers className="w-3 h-3 text-slate-400" /> };
    }
  };

  return (
    <div className={`relative w-full h-[calc(100vh-4rem)] overflow-hidden flex flex-col ${
      isDarkMode ? 'bg-[#0b0f19] text-slate-100' : 'bg-[#faf8ff] text-slate-900'
    }`}>
      {/* Top Filter and Controls Bar */}
      <div className={`px-6 py-3 border-b flex flex-wrap items-center justify-between gap-3 z-20 ${
        isDarkMode ? 'border-slate-800 bg-[#0f172a]/80 backdrop-blur-md' : 'border-slate-200 bg-white/80 backdrop-blur-md'
      }`}>
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mr-2">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span className="font-serif">星图宗门筛选:</span>
          </div>

          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800/60 p-0.5 rounded-lg border border-slate-200/60 dark:border-slate-700 text-xs">
            {['all', '天阙机枢阁', '墨隐流', '琉璃云海司'].map((f) => (
              <button
                key={f}
                onClick={() => setSelectedFaction(f)}
                className={`px-2.5 py-1 rounded-md font-serif text-xs transition-colors ${
                  selectedFaction === f
                    ? 'bg-white dark:bg-slate-700 text-[#2563eb] dark:text-blue-400 shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                {f === 'all' ? '全部宗门' : f}
              </button>
            ))}
          </div>

          <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block mx-1" />

          {/* Node Type filter */}
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className={`text-xs px-2.5 py-1.5 rounded-lg border font-serif bg-transparent ${
              isDarkMode ? 'border-slate-700 text-slate-300' : 'border-slate-200 text-slate-700'
            }`}
          >
            <option value="all">全类型节点 (All Types)</option>
            <option value="milestone">枢纽大关 (Milestones)</option>
            <option value="conflict">锋芒对冲 (Conflicts)</option>
            <option value="revelation">天机洞析 (Revelations)</option>
            <option value="character_arc">因缘蜕变 (Character Arcs)</option>
            <option value="world_shift">大衍巨变 (World Shifts)</option>
          </select>
        </div>

        {/* Zoom & View Controls */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-slate-100 dark:bg-slate-800/70 rounded-lg p-0.5 border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setZoomLevel((z) => Math.max(0.6, z - 0.1))}
              className="p-1.5 hover:bg-white dark:hover:bg-slate-700 rounded text-slate-600 dark:text-slate-300"
              title="缩小 (Zoom Out)"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="text-[11px] font-mono px-2 text-slate-600 dark:text-slate-400">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={() => setZoomLevel((z) => Math.min(1.4, z + 0.1))}
              className="p-1.5 hover:bg-white dark:hover:bg-slate-700 rounded text-slate-600 dark:text-slate-300"
              title="放大 (Zoom In)"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setZoomLevel(1)}
              className="p-1.5 hover:bg-white dark:hover:bg-slate-700 rounded text-slate-600 dark:text-slate-300 ml-1 border-l border-slate-200 dark:border-slate-700"
              title="重置视图 (Reset)"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={onOpenNewNode}
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-serif font-medium bg-[#2563eb] text-white rounded-lg shadow-sm hover:bg-blue-600 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>立新节点</span>
          </button>
        </div>
      </div>

      {/* Main Canvas Scroll Area */}
      <div 
        ref={containerRef}
        className="relative flex-1 overflow-auto xuan-texture select-none p-8"
        style={{
          backgroundImage: isDarkMode 
            ? 'radial-gradient(rgba(37,99,235,0.08) 1px, transparent 1px)' 
            : 'radial-gradient(rgba(37,99,235,0.04) 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      >
        <div 
          className="relative transition-transform duration-150 origin-top-left"
          style={{
            width: `${maxX}px`,
            height: `${maxY}px`,
            transform: `scale(${zoomLevel})`,
          }}
        >
          {/* SVG Connection Layer */}
          <svg
            className="absolute inset-0 pointer-events-none"
            width={maxX}
            height={maxY}
          >
            <defs>
              <linearGradient id="splineGradientActive" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0d9488" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="splineGradientTension" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#e11d48" stopOpacity="0.9" />
              </linearGradient>
              <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {nodes.map((node) => {
              const startX = node.x + 240; // right middle of card
              const startY = node.y + 90;

              return node.connections.map((targetId) => {
                const targetNode = nodeMap.get(targetId);
                if (!targetNode) return null;

                const endX = targetNode.x;
                const endY = targetNode.y + 90;

                const dx = endX - startX;
                const controlX1 = startX + dx * 0.45;
                const controlY1 = startY;
                const controlX2 = startX + dx * 0.55;
                const controlY2 = endY;

                const isHighTension = (node.tensionLevel + targetNode.tensionLevel) / 2 >= 7;
                const isHighlighted = highlightedNodeId === node.id || highlightedNodeId === targetId;

                const strokeColor = isHighTension 
                  ? 'url(#splineGradientTension)' 
                  : 'url(#splineGradientActive)';

                return (
                  <g key={`${node.id}-${targetId}`}>
                    {/* Shadow/ambient path */}
                    <path
                      d={`M ${startX} ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`}
                      fill="none"
                      stroke={isDarkMode ? 'rgba(37,99,235,0.15)' : 'rgba(37,99,235,0.1)'}
                      strokeWidth={isHighlighted ? 6 : 4}
                      strokeLinecap="round"
                    />
                    {/* Main Spline */}
                    <path
                      d={`M ${startX} ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`}
                      fill="none"
                      stroke={strokeColor}
                      strokeWidth={isHighlighted ? 3 : 2}
                      strokeDasharray={isHighTension ? '6,4' : 'none'}
                      strokeLinecap="round"
                      filter={isHighlighted ? 'url(#glowFilter)' : undefined}
                    />
                    {/* Flowing Pulse Particle on high tension */}
                    {isHighTension && (
                      <circle
                        r={3}
                        fill="#e11d48"
                        className="animate-pulse"
                        filter="url(#glowFilter)"
                      >
                        <animateMotion
                          path={`M ${startX} ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`}
                          dur="3s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}
                  </g>
                );
              });
            })}
          </svg>

          {/* Interactive Story Node Cards */}
          {filteredNodes.map((node) => {
            const typeBadge = getTypeBadge(node.type);
            const statusBadge = getStatusBadge(node.status);
            const isHighlighted = highlightedNodeId === node.id;

            return (
              <div
                key={node.id}
                onClick={() => onSelectNode(node)}
                onMouseEnter={() => setHighlightedNodeId(node.id)}
                onMouseLeave={() => setHighlightedNodeId(null)}
                className={`absolute w-64 rounded-xl cursor-pointer transition-all duration-200 select-none group ${
                  isDarkMode 
                    ? 'bg-[#0f172a]/90 border border-slate-700/80 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.5)]' 
                    : 'bg-white/90 border border-slate-200/90 shadow-[0_8px_24px_-4px_rgba(37,99,235,0.08)]'
                } ${
                  isHighlighted 
                    ? 'ring-2 ring-[#2563eb] shadow-[0_0_20px_rgba(37,99,235,0.3)] scale-[1.02] z-30' 
                    : 'hover:border-[#2563eb]/60 z-10'
                }`}
                style={{
                  left: `${node.x}px`,
                  top: `${node.y}px`,
                }}
              >
                {/* Colored Faction Stripe */}
                <div 
                  className={`h-1.5 w-full rounded-t-xl ${
                    node.factions.includes('天阙机枢阁')
                      ? 'bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-400'
                      : node.factions.includes('墨隐流')
                      ? 'bg-gradient-to-r from-teal-600 via-emerald-500 to-cyan-400'
                      : 'bg-gradient-to-r from-purple-600 to-pink-500'
                  }`}
                />

                <div className="p-4 space-y-2.5">
                  {/* Top Header Row */}
                  <div className="flex items-center justify-between gap-1.5">
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 tracking-wider">
                      {node.subtitle}
                    </span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded border font-mono font-medium ${typeBadge.color}`}>
                      {typeBadge.text}
                    </span>
                  </div>

                  {/* Node Title */}
                  <div className="space-y-0.5">
                    <h3 className="font-serif font-bold text-sm text-slate-900 dark:text-slate-100 group-hover:text-[#2563eb] dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                      {node.title}
                    </h3>
                    <div className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400 truncate">
                      <MapPin className="w-3 h-3 text-teal-600 flex-shrink-0" />
                      <span className="truncate">{node.location}</span>
                    </div>
                  </div>

                  {/* Summary Snippet */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed font-sans">
                    {node.summary}
                  </p>

                  {/* Characters and Telemetry Footer */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                    {/* Character Avatars */}
                    <div className="flex items-center -space-x-1.5 overflow-hidden">
                      {node.characters.map((cid) => {
                        const char = characterMap.get(cid);
                        if (!char) return null;
                        return (
                          <img
                            key={cid}
                            src={char.avatar}
                            alt={char.name}
                            title={`${char.name} (${char.title})`}
                            className="w-5 h-5 rounded-full object-cover ring-1 ring-white dark:ring-slate-900"
                          />
                        );
                      })}
                    </div>

                    {/* Tension Gauge & Status */}
                    <div className="flex items-center gap-2">
                      <div 
                        className="flex items-center gap-0.5 text-[10px] font-mono font-semibold"
                        title={`剧情紧张度: ${node.tensionLevel}/10`}
                      >
                        <Flame className={`w-3 h-3 ${node.tensionLevel >= 7 ? 'text-rose-500' : 'text-amber-500'}`} />
                        <span>{node.tensionLevel}/10</span>
                      </div>

                      <div className="flex items-center gap-1 text-[10px] text-slate-500">
                        {statusBadge.icon}
                        <span>{statusBadge.text}</span>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Key Milestone Yinzhang Stamp Overlay */}
                {node.isKeyMilestone && (
                  <div className="absolute -top-3 -right-2">
                    <YinzhangStamp text="要隘" size="sm" variant="vermilion" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Story Legend & Guidance */}
      <div className={`absolute bottom-4 left-6 z-20 p-3 rounded-xl border backdrop-blur-md shadow-lg max-w-sm hidden sm:block ${
        isDarkMode ? 'bg-[#0f172a]/90 border-slate-800' : 'bg-white/90 border-slate-200'
      }`}>
        <div className="flex items-center justify-between mb-2">
          <span className="font-serif font-semibold text-xs flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#2563eb]" />
            星图天轨释义 (Story Graph Legend)
          </span>
          <span className="text-[10px] font-mono text-slate-500">榫卯算法结构</span>
        </div>
        <div className="grid grid-cols-2 gap-y-1.5 gap-x-3 text-[11px] text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 rounded" />
            <span>平顺叙事连线</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 border-b border-dashed border-rose-500" />
            <span>剧烈矛盾对冲</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span>天阙机枢阁势力</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-teal-500" />
            <span>墨隐流游侠联盟</span>
          </div>
        </div>
      </div>

    </div>
  );
};
