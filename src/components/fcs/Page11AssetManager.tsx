import React, { useState } from 'react';
import { FcsPageId } from '../../types/fcs';
import { 
  HardDrive, 
  Search, 
  Upload, 
  Layers, 
  Grid, 
  List, 
  ExternalLink, 
  Download, 
  Copy, 
  Sparkles, 
  Music, 
  Tag, 
  CheckCircle2, 
  ChevronRight,
  Edit2,
  FileText,
  Volume2
} from 'lucide-react';
import { FCS_ASSET_ITEMS } from '../../data/fcsMockData';

interface Page11AssetManagerProps {
  onNavigate: (page: FcsPageId) => void;
}

export const Page11AssetManager: React.FC<Page11AssetManagerProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'role' | 'scene' | 'item' | 'music' | 'storyboard'>('all');
  const [selectedAssetId, setSelectedAssetId] = useState<string>('asset-6'); // 古玉璇玑
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const selectedAsset = FCS_ASSET_ITEMS.find((a) => a.id === selectedAssetId) || FCS_ASSET_ITEMS[5];

  const handleCopyHex = (hex: string) => {
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const filteredAssets = activeCategory === 'all' 
    ? FCS_ASSET_ITEMS 
    : FCS_ASSET_ITEMS.filter((a) => a.category === activeCategory);

  return (
    <div className="flex-1 flex flex-col h-full bg-[#0A0F1D] text-[#E2E8F0] overflow-hidden">
      
      {/* 1. TOP HEADER BANNER */}
      <div className="border-b border-[#1E293B] bg-[#0F172A]/80 backdrop-blur-sm p-4 z-10 flex-shrink-0">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-base font-bold text-white flex items-center gap-2">
                <span>11. 数据管理 · Asset Manager</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/60 uppercase">
                  DIGITAL ASSETS V2.0
                </span>
              </h1>
              <span className="text-xs text-emerald-400 font-mono flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>86 件已归档资产 · 4.2 GB 云存储已用</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
              《星海之约》全书视觉、音律、法宝道具与图谱多模态资产沉浸库 · 支持与 Novel Graph 实时语义锚定
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="relative w-64 hidden sm:block">
              <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-500" />
              <input
                type="text"
                placeholder="搜索资产、标签、法宝、分卷... ⌘K"
                className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-[#0A0F1D] border border-[#1E293B] text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              />
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A0F1D] border border-[#1E293B] hover:bg-[#1E293B] text-slate-300 text-xs font-medium transition-colors">
              <span>批量导入 / 归档</span>
            </button>
            <button className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white text-xs font-semibold shadow-md shadow-blue-500/25 active:scale-95 transition-all">
              <Upload className="w-3.5 h-3.5" />
              <span>上传新资产</span>
            </button>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1 rounded-xl transition-all ${
                activeCategory === 'all' ? 'bg-[#2563EB] text-white shadow-md' : 'text-slate-400 hover:text-white bg-[#0A0F1D] border border-[#1E293B]'
              }`}
            >
              全部 (86)
            </button>
            <button
              onClick={() => setActiveCategory('role')}
              className={`px-3 py-1 rounded-xl transition-all ${
                activeCategory === 'role' ? 'bg-[#2563EB] text-white shadow-md' : 'text-slate-400 hover:text-white bg-[#0A0F1D] border border-[#1E293B]'
              }`}
            >
              角色 (24)
            </button>
            <button
              onClick={() => setActiveCategory('scene')}
              className={`px-3 py-1 rounded-xl transition-all ${
                activeCategory === 'scene' ? 'bg-[#2563EB] text-white shadow-md' : 'text-slate-400 hover:text-white bg-[#0A0F1D] border border-[#1E293B]'
              }`}
            >
              场景 (18)
            </button>
            <button
              onClick={() => setActiveCategory('item')}
              className={`px-3 py-1 rounded-xl transition-all ${
                activeCategory === 'item' ? 'bg-[#2563EB] text-white shadow-md' : 'text-slate-400 hover:text-white bg-[#0A0F1D] border border-[#1E293B]'
              }`}
            >
              道具 (26)
            </button>
            <button
              onClick={() => setActiveCategory('music')}
              className={`px-3 py-1 rounded-xl transition-all ${
                activeCategory === 'music' ? 'bg-[#2563EB] text-white shadow-md' : 'text-slate-400 hover:text-white bg-[#0A0F1D] border border-[#1E293B]'
              }`}
            >
              音乐 (12)
            </button>
            <button
              onClick={() => setActiveCategory('storyboard')}
              className={`px-3 py-1 rounded-xl transition-all ${
                activeCategory === 'storyboard' ? 'bg-[#2563EB] text-white shadow-md' : 'text-slate-400 hover:text-white bg-[#0A0F1D] border border-[#1E293B]'
              }`}
            >
              分镜 (6)
            </button>
          </div>

          <div className="flex items-center gap-3 text-slate-400">
            <span className="text-slate-500">全部章节 (卷一 · 重霄破晓)</span>
            <span className="text-slate-700">|</span>
            <span className="text-cyan-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>仅展示已锚定图谱</span>
            </span>
            <div className="flex items-center gap-1 bg-[#0A0F1D] p-1 rounded-lg border border-[#1E293B]">
              <button className="p-1 rounded bg-[#182238] text-white"><Grid className="w-3.5 h-3.5" /></button>
              <button className="p-1 rounded hover:text-white"><List className="w-3.5 h-3.5" /></button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN WORKSPACE (ASSETS GALLERY + RIGHT ASSET INSPECTOR) */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* ASSET GALLERY GRID */}
        <div className="flex-1 p-5 overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            
            {filteredAssets.map((asset) => {
              const isSelected = selectedAssetId === asset.id;
              return (
                <div
                  key={asset.id}
                  onClick={() => setSelectedAssetId(asset.id)}
                  className={`cursor-pointer rounded-2xl overflow-hidden bg-[#0F172A] border transition-all duration-200 group relative ${
                    isSelected
                      ? 'border-blue-500 shadow-xl shadow-blue-500/20 ring-2 ring-blue-500/40'
                      : 'border-[#1E293B] hover:border-slate-500'
                  }`}
                >
                  {/* Top Badges */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10 text-[10px] font-mono pointer-events-none">
                    <span className="px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-sm text-cyan-300 border border-white/10">
                      {asset.categoryLabel}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-blue-950/80 backdrop-blur-sm text-blue-300 border border-blue-500/30">
                      {asset.code}
                    </span>
                  </div>

                  {/* Thumbnail */}
                  <div className="w-full h-40 bg-[#0A0F1D] overflow-hidden relative">
                    <img
                      src={asset.image}
                      alt={asset.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
                    {isSelected && (
                      <span className="absolute bottom-2 right-2 text-[10px] font-mono px-2 py-0.5 rounded bg-blue-600 text-white font-bold shadow-md">
                        当前选中
                      </span>
                    )}
                  </div>

                  {/* Info Footer */}
                  <div className="p-3 space-y-1">
                    <h3 className="text-xs font-bold text-white truncate group-hover:text-cyan-300 transition-colors">
                      {asset.title}
                    </h3>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                      <span>{asset.tag}</span>
                      <span className="text-slate-500">{asset.specs}</span>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Audio Item Card */}
            <div 
              onClick={() => setSelectedAssetId('asset-music-1')}
              className={`cursor-pointer rounded-2xl overflow-hidden bg-[#0F172A] border transition-all duration-200 p-4 space-y-3 relative ${
                selectedAssetId === 'asset-music-1' ? 'border-blue-500 ring-2 ring-blue-500/40' : 'border-[#1E293B] hover:border-slate-500'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono">
                <span className="px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800/40">音频 · 原声音律</span>
                <span className="text-slate-400">03:42 · 96kHz</span>
              </div>
              <div className="h-20 bg-[#0A0F1D] rounded-xl flex items-center justify-center border border-[#1E293B] relative overflow-hidden">
                <div className="flex items-end gap-1 h-10">
                  <div className="w-1.5 bg-cyan-400 h-6 rounded-full animate-pulse" />
                  <div className="w-1.5 bg-blue-500 h-10 rounded-full animate-pulse" />
                  <div className="w-1.5 bg-purple-500 h-8 rounded-full animate-pulse" />
                  <div className="w-1.5 bg-cyan-400 h-4 rounded-full animate-pulse" />
                  <div className="w-1.5 bg-emerald-400 h-7 rounded-full animate-pulse" />
                  <div className="w-1.5 bg-blue-400 h-9 rounded-full animate-pulse" />
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-white truncate">《夜巡长廊》· 场景BGM</h4>
                <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono mt-1">
                  <span>原创 OST</span>
                  <span className="text-cyan-400">章节已绑定</span>
                </div>
              </div>
            </div>

            {/* Upload Placeholder Card */}
            <div className="rounded-2xl border-2 border-dashed border-[#1E293B] hover:border-cyan-500/50 p-6 flex flex-col items-center justify-center text-center cursor-pointer group transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#0A0F1D] border border-[#1E293B] flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:scale-110 transition-all mb-2">
                <Upload className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-300">拖拽文件或点此选择</span>
              <span className="text-[10px] text-slate-500 font-mono mt-1">PNG, WebP, MP3, 3D ≤ 500MB</span>
            </div>

          </div>
        </div>

        {/* RIGHT ASSET INSPECTOR DRAWER */}
        <aside className="w-96 border-l border-[#1E293B] bg-[#0F172A] flex flex-col justify-between overflow-y-auto custom-scrollbar flex-shrink-0">
          <div className="p-5 space-y-4">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#1E293B] pb-3">
              <div className="text-xs font-bold text-white flex items-center gap-2">
                <Tag className="w-4 h-4 text-cyan-400" />
                <span>资产详情 & 图谱锚点</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <button className="hover:text-white p-1 rounded hover:bg-[#1E293B]"><Edit2 className="w-3.5 h-3.5" /></button>
                <button className="hover:text-white p-1 rounded hover:bg-[#1E293B]"><ExternalLink className="w-3.5 h-3.5" /></button>
                <button className="hover:text-white p-1 rounded hover:bg-[#1E293B]"><Download className="w-3.5 h-3.5" /></button>
              </div>
            </div>

            {/* Preview Box */}
            <div className="relative rounded-2xl overflow-hidden border border-[#1E293B] bg-[#0A0F1D] group shadow-xl">
              <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800/40 text-[10px] font-mono z-10">
                生物料已佩版
              </span>
              <img
                src={selectedAsset.image}
                alt={selectedAsset.title}
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute bottom-2 right-2 text-[10px] font-mono px-2 py-0.5 rounded bg-black/70 text-slate-300">
                1920 × 1080 (16:9)
              </span>
            </div>

            {/* Asset Title & Description */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-cyan-400 font-bold">{selectedAsset.code} · {selectedAsset.tag}</span>
                <span className="text-slate-500">创建于 2025-05-28</span>
              </div>
              <h2 className="text-base font-bold text-white font-serif">{selectedAsset.title}</h2>
              <p className="text-xs text-slate-300 leading-relaxed pt-1">
                重霄道宗先贤于第一纪元遗留的星阵破译钥匙。外层为万年温润灵玉，内嵌以金丹真火镂刻的三十六重天干地支算法回路，是苏明月破除九星天网的终极关键道具。
              </p>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-2.5 rounded-xl bg-[#0A0F1D] border border-[#1E293B]">
                <span className="text-slate-500 text-[10px] block">文件格式 / 体积</span>
                <span className="text-slate-200 font-semibold">{selectedAsset.specs}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0A0F1D] border border-[#1E293B]">
                <span className="text-slate-500 text-[10px] block">色彩模式 / 位深</span>
                <span className="text-cyan-300 font-semibold">RGB 10-bit P3 广色域</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0A0F1D] border border-[#1E293B]">
                <span className="text-slate-500 text-[10px] block">版权状态</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>项目专有版权</span>
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0A0F1D] border border-[#1E293B]">
                <span className="text-slate-500 text-[10px] block">所属故事线</span>
                <span className="text-purple-300 font-semibold">第一卷 · 剑鸣九霄主线</span>
              </div>
            </div>

            {/* Novel Graph Citations */}
            <div className="p-3.5 rounded-xl bg-[#182238] border border-blue-500/30 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 font-bold text-cyan-300">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Novel Graph 叙事图谱双向引用</span>
                </div>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-950 text-blue-300 font-mono">
                  14次正文引用
                </span>
              </div>
              <div className="space-y-1 text-xs text-slate-300">
                <div className="flex items-center justify-between p-1.5 rounded-lg bg-[#0A0F1D] hover:bg-[#0F172A] cursor-pointer">
                  <span>第1章 · 迷雾之城</span>
                  <span className="text-slate-500 font-mono">出场 2 次</span>
                </div>
                <div className="flex items-center justify-between p-1.5 rounded-lg bg-[#0A0F1D] hover:bg-[#0F172A] cursor-pointer">
                  <span>第8章 · 阵门突围</span>
                  <span className="text-slate-500 font-mono">出场 7 次</span>
                </div>
              </div>
            </div>

            {/* AI Color Palette Extraction */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>原画色板采样 (AI 提取)</span>
                </span>
                <span className="text-[10px] text-slate-500">点击复制 HEX</span>
              </div>
              <div className="flex items-center gap-2">
                {['#0D9488', '#2563EB', '#F59E0B', '#0F172A', '#E2E8F0'].map((hex) => (
                  <button
                    key={hex}
                    onClick={() => handleCopyHex(hex)}
                    style={{ backgroundColor: hex }}
                    className="flex-1 h-8 rounded-lg border border-white/20 shadow-md relative group hover:scale-105 transition-transform"
                    title={hex}
                  >
                    {copiedHex === hex && (
                      <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-[9px] bg-black text-white px-1.5 py-0.5 rounded">
                        已复制
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* AI Action Buttons */}
            <div className="space-y-2 pt-1">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button 
                  onClick={() => onNavigate('03-ai-agent')}
                  className="flex items-center justify-center gap-1.5 py-2 rounded-xl bg-[#0A0F1D] border border-[#1E293B] text-slate-300 hover:text-white hover:border-cyan-500/50 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>生成场景衍生图</span>
                </button>
                <button 
                  onClick={() => onNavigate('03-ai-agent')}
                  className="flex items-center justify-center gap-1.5 py-2 rounded-xl bg-[#0A0F1D] border border-[#1E293B] text-slate-300 hover:text-white hover:border-purple-500/50 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-purple-400" />
                  <span>提取外观修辞描写</span>
                </button>
              </div>

              <button 
                onClick={() => onNavigate('04-editor')}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white text-xs font-semibold shadow-md shadow-blue-500/20 active:scale-95 transition-all"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>同步此资产至当前编辑器侧边栏</span>
              </button>
            </div>

          </div>

          {/* Bottom Storage Quota Card */}
          <div className="p-4 border-t border-[#1E293B] bg-[#0A0F1D]/80 text-xs font-mono space-y-2">
            <div className="flex items-center justify-between text-slate-300">
              <span className="flex items-center gap-1.5">
                <HardDrive className="w-3.5 h-3.5 text-cyan-400" />
                <span>多模态云空间配额</span>
              </span>
              <span className="text-slate-400">4.2 GB / 50 GB (8.4%)</span>
            </div>
            <div className="h-1.5 w-full bg-[#182238] rounded-full overflow-hidden">
              <div className="h-full bg-cyan-400 rounded-full" style={{ width: '8.4%' }} />
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-500">
              <span>图片: 3.1 GB | 音频: 890 MB | 3D: 210 MB</span>
              <button className="text-cyan-400 hover:underline">扩容 &gt;</button>
            </div>
          </div>
        </aside>

      </div>

      {/* 3. BOTTOM PAGINATION & METRICS BAR */}
      <div className="h-9 border-t border-[#1E293B] bg-[#0A0F1D] px-5 flex items-center justify-between text-[11px] font-mono text-slate-400 flex-shrink-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="rounded border-[#1E293B]" />
            <span>全选本页 (12/86)</span>
          </div>
          <span className="text-slate-600">|</span>
          <button className="hover:text-white">批量打标</button>
          <button className="hover:text-white">移入分卷</button>
          <button className="hover:text-white">批量归档</button>
        </div>

        <div className="flex items-center gap-2">
          <button className="px-2 py-0.5 rounded bg-[#2563EB] text-white">1</button>
          <button className="px-2 py-0.5 rounded hover:bg-[#182238]">2</button>
          <button className="px-2 py-0.5 rounded hover:bg-[#182238]">3</button>
          <span>...</span>
          <button className="px-2 py-0.5 rounded hover:bg-[#182238]">8</button>
          <button className="px-2 py-0.5 rounded hover:bg-[#182238]">&gt;</button>
        </div>
      </div>

    </div>
  );
};
