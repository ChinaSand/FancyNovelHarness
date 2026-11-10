import React, { useState } from 'react';
import { FcsPageId } from '../../types/fcs';
import { 
  Share2, 
  RotateCcw, 
  ExternalLink, 
  RefreshCw, 
  CheckCircle2, 
  Download, 
  Globe, 
  BookOpen, 
  Volume2, 
  FileText, 
  ShieldCheck, 
  Sparkles, 
  Copy, 
  ChevronRight,
  Send,
  Layers,
  ArrowRight
} from 'lucide-react';

interface Page12PublishShareProps {
  onNavigate: (page: FcsPageId) => void;
}

export const Page12PublishShare: React.FC<Page12PublishShareProps> = ({ onNavigate }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  const handleCopyLink = () => {
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-[#0A0F1D] text-[#E2E8F0] overflow-y-auto custom-scrollbar">
      
      {/* 1. TOP HEADER BANNER */}
      <div className="border-b border-[#1E293B] bg-[#0F172A]/80 backdrop-blur-sm p-4 z-10 flex-shrink-0">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-[11px] font-mono text-cyan-400 mb-1 flex items-center gap-2">
              <Share2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>DISTRIBUTION HUB V1.0 · 全渠道同步</span>
              <span className="text-slate-600">|</span>
              <span className="text-emerald-400">已全渠道分发就绪</span>
            </div>
            <div className="flex items-center gap-3">
              <h1 className="text-base font-bold text-white">12. 发布与分发 · Publish & Share</h1>
              <span className="text-xs text-slate-400">创作成品收官大厅与版权存证矩阵</span>
            </div>
            <div className="text-xs font-mono text-slate-500 mt-1 flex items-center gap-3">
              <span>当前分支: <strong className="text-white">main</strong> (v1.0.0 完整终卷正式版)</span>
              <span>|</span>
              <span>关联工程: <strong className="text-cyan-300">《星海之约》</strong></span>
              <span>|</span>
              <span className="text-emerald-400">全书 20 章节已封板锁存</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button 
              onClick={() => onNavigate('06-version-control')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A0F1D] border border-[#1E293B] hover:bg-[#1E293B] text-slate-300 text-xs font-medium transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
              <span>版本回退 / 切换分支</span>
            </button>
            <button 
              onClick={() => {
                setIsExporting(true);
                setTimeout(() => setIsExporting(false), 2000);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A0F1D] border border-[#1E293B] hover:bg-[#1E293B] text-cyan-300 text-xs font-medium transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isExporting ? 'animate-spin' : ''}`} />
              <span>一键全渠道即刻刷新</span>
            </button>
            <button 
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white text-xs font-semibold shadow-md shadow-blue-500/25 active:scale-95 transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>{copiedLink ? '已复制全端短链！' : '生成全端短链 (fcs.lnk/xhzy)'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN BODY */}
      <div className="p-6 space-y-6">
        
        {/* BIG HERO PUBLISHED CARD */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#064E3B]/40 via-[#0F172A] to-[#1E1B4B]/40 border border-emerald-500/40 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            
            {/* Left Big Status */}
            <div className="space-y-4 flex-1">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-[0_0_20px_rgba(16,185,129,0.5)] flex-shrink-0">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-white font-serif">发布成功！</h2>
                    <span className="text-sm text-emerald-400 font-mono">· Published Successfully</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5">
                    你的作品已成功发布到创作平台与多端分发生态，版权存证已上链锁定。
                  </p>
                </div>
              </div>

              {/* 4 Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
                <div className="p-3 rounded-2xl bg-[#0A0F1D]/80 border border-[#1E293B]">
                  <div className="text-[10px] text-slate-500">总分发字数</div>
                  <div className="text-base font-extrabold text-white mt-0.5">58,400 <span className="text-xs text-slate-400">字</span></div>
                </div>
                <div className="p-3 rounded-2xl bg-[#0A0F1D]/80 border border-[#1E293B]">
                  <div className="text-[10px] text-slate-500">覆盖终端</div>
                  <div className="text-base font-extrabold text-cyan-300 mt-0.5">4 <span className="text-xs text-slate-400">大生态</span></div>
                </div>
                <div className="p-3 rounded-2xl bg-[#0A0F1D]/80 border border-[#1E293B]">
                  <div className="text-[10px] text-slate-500">全网同步率</div>
                  <div className="text-base font-extrabold text-emerald-400 mt-0.5">98.5%</div>
                </div>
                <div className="p-3 rounded-2xl bg-[#0A0F1D]/80 border border-[#1E293B]">
                  <div className="text-[10px] text-slate-500">存证区块高度</div>
                  <div className="text-base font-extrabold text-amber-400 mt-0.5">#8,941,202</div>
                </div>
              </div>

              {/* Manifest Info */}
              <div className="p-3 rounded-xl bg-[#0A0F1D]/60 border border-[#1E293B] text-xs font-mono text-slate-400 space-y-1">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-cyan-300 font-bold">发布清单快照 · Release Manifest v1.0.0</span>
                  <span className="text-[10px] text-slate-500">2025-06-01 11:30:00 (UTC+8)</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  包含前序第一卷《迷雾之城》全5章、第二卷《永恒之塔》全8章及终卷《逆界之境》终局战役。配套苏明月全息人物卡图、3张原画级场景概念图以及动态叙事图谱元数据。
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button 
                  onClick={() => onNavigate('04-editor')}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white text-xs font-bold shadow-lg shadow-blue-500/30 active:scale-95 transition-all"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>查看作品 (View Work)</span>
                </button>
                <button 
                  onClick={handleCopyLink}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A0F1D] border border-[#1E293B] hover:bg-[#1E293B] text-slate-200 text-xs font-semibold transition-colors"
                >
                  <Share2 className="w-4 h-4 text-cyan-400" />
                  <span>分享链接 (Share & Export)</span>
                </button>
                <button className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white px-2 py-1 font-mono">
                  <Download className="w-3.5 h-3.5" />
                  <span>导出发行全量包 (ZIP)</span>
                </button>
              </div>
            </div>

            {/* Right Hardcover Book 3D Packaging Preview */}
            <div className="w-80 rounded-2xl bg-[#0A0F1D] border border-blue-500/30 p-4 space-y-3 relative overflow-hidden group shadow-2xl flex-shrink-0">
              <div className="relative rounded-xl overflow-hidden border border-[#1E293B]">
                <img 
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80" 
                  alt="星海之约 全集精装版" 
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-black/40 to-transparent" />
                <div className="absolute top-2 left-2 flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-rose-950/80 text-rose-300 border border-rose-800/40 text-[9px] font-mono">
                    印 · 完结定稿
                  </span>
                  <span className="px-2 py-0.5 rounded bg-blue-950/80 text-blue-300 border border-blue-800/40 text-[9px] font-mono">
                    首发推介
                  </span>
                </div>
                <div className="absolute top-2 right-2 text-[9px] font-mono text-slate-400">
                  ISBN 978-7-FCS-202506
                </div>
                <div className="absolute bottom-2 left-3 right-3 text-white">
                  <h3 className="text-base font-bold font-serif">《星海之约》全集精装版</h3>
                  <div className="text-[10px] text-slate-300 font-mono mt-0.5">
                    主角: 苏明月 / 世界观: 墨境星枢纪元
                  </div>
                </div>
              </div>

              <div className="text-[10px] font-mono text-slate-400 space-y-1">
                <div className="flex items-center justify-between text-emerald-400">
                  <span>AI Agent 协同润色完成率 100%</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div className="text-slate-500 truncate">
                  版权指纹: SHA-256 #9A7B...E84
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* MULTI-CHANNEL SYNDICATION MATRIX */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-cyan-400" />
              <h3 className="font-bold text-white text-sm">多渠道分发矩阵 · Multi-Channel Syndication</h3>
              <span className="text-slate-500">(4 节点并行分发)</span>
            </div>
            <span className="text-slate-400">调度算法: 墨榫智能路由 v2.4</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Channel 1: Web & App */}
            <div className="p-4 rounded-2xl bg-[#0F172A] border border-emerald-500/40 space-y-3 relative group hover:border-emerald-500 transition-colors">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-blue-950/60 border border-blue-600/40 flex items-center justify-center text-cyan-300">
                  <BookOpen className="w-4 h-4" />
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800/40 text-[10px] font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>已实时上架</span>
                </span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">文学连载主站 (Web & App)</h4>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                  面向 FCS 原创文学圈与合作阅读端，全 20 卷章节已发布，并占领新书精选推荐位。
                </p>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0A0F1D] border border-[#1E293B] text-[10px] font-mono space-y-1">
                <div className="flex justify-between text-slate-400">
                  <span>首小时阅读热度</span>
                  <span className="text-white font-bold">2,840 读友</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>主站节点: cn-east-01</span>
                  <span className="text-emerald-400">延迟: 12ms</span>
                </div>
              </div>
              <button 
                onClick={() => onNavigate('04-editor')}
                className="w-full flex items-center justify-center gap-1 text-xs text-cyan-300 hover:text-cyan-200 py-1"
              >
                <span>进入主站阅读器</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Channel 2: EPUB / PDF */}
            <div className="p-4 rounded-2xl bg-[#0F172A] border border-cyan-500/40 space-y-3 relative group hover:border-cyan-500 transition-colors">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-cyan-950/60 border border-cyan-600/40 flex items-center justify-center text-cyan-300">
                  <FileText className="w-4 h-4" />
                </div>
                <span className="px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800/40 text-[10px] font-mono">
                  排版编译完毕
                </span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">EPUB / PDF 电子出版精排包</h4>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                  中式竖排典藏版与现代横排版双轨生成。嵌入宣纸底纹与榫卯印章元数据。
                </p>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0A0F1D] border border-[#1E293B] text-[10px] font-mono space-y-1">
                <div className="flex justify-between text-slate-400">
                  <span>格式包体积</span>
                  <span className="text-white font-bold">28.4 MB (高清配图)</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>EPUB 3.2 / PDF/X-4</span>
                  <span className="text-cyan-400">CMYK 校验完成</span>
                </div>
              </div>
              <button className="w-full flex items-center justify-center gap-1 text-xs text-cyan-300 hover:text-cyan-200 py-1">
                <Download className="w-3.5 h-3.5" />
                <span>下载排版源文件</span>
              </button>
            </div>

            {/* Channel 3: Audio Webhook */}
            <div className="p-4 rounded-2xl bg-[#0F172A] border border-purple-500/40 space-y-3 relative group hover:border-purple-500 transition-colors">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-purple-950/60 border border-purple-600/40 flex items-center justify-center text-purple-300">
                  <Volume2 className="w-4 h-4" />
                </div>
                <span className="px-2 py-0.5 rounded-full bg-purple-950 text-purple-400 border border-purple-800/40 text-[10px] font-mono">
                  AI 音色生成 85%
                </span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">有声剧与广播剧 Webhook</h4>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                  苏明月专属「冷冽青玉音」TTS 自动渲染中，联动喜马拉雅 / 网易云音乐伴奏库。
                </p>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0A0F1D] border border-[#1E293B] text-[10px] font-mono space-y-1">
                <div className="flex justify-between text-slate-400">
                  <span>已渲染音频时段</span>
                  <span className="text-purple-300 font-bold">18 / 20 章节</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>采样率: 48kHz / 24bit</span>
                  <span className="text-amber-400">预计耗时 4m</span>
                </div>
              </div>
              <button 
                onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                className="w-full flex items-center justify-center gap-1 text-xs text-purple-300 hover:text-purple-200 py-1"
              >
                <Volume2 className={`w-3.5 h-3.5 ${isPlayingAudio ? 'animate-bounce' : ''}`} />
                <span>{isPlayingAudio ? '正在播放片花 (0:32)...' : '试听第一声有声片花'}</span>
              </button>
            </div>

            {/* Channel 4: Global Translation */}
            <div className="p-4 rounded-2xl bg-[#0F172A] border border-blue-500/40 space-y-3 relative group hover:border-blue-500 transition-colors">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-blue-950/60 border border-blue-600/40 flex items-center justify-center text-blue-300">
                  <Globe className="w-4 h-4" />
                </div>
                <span className="px-2 py-0.5 rounded-full bg-blue-950 text-blue-400 border border-blue-800/40 text-[10px] font-mono">
                  中英双语对齐中
                </span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">海外分发与多语言译本</h4>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                  同步生成英文版《Vow of the Starry Ocean》，东方修仙侠专有名词表已注入。
                </p>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0A0F1D] border border-[#1E293B] text-[10px] font-mono space-y-1">
                <div className="flex justify-between text-slate-400">
                  <span>Amazon KDP / Webnovel</span>
                  <span className="text-slate-300">审查队列中</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>仙侠术语对齐词条: 420个</span>
                  <span className="text-emerald-400">通过率 99%</span>
                </div>
              </div>
              <button className="w-full flex items-center justify-center gap-1 text-xs text-blue-300 hover:text-blue-200 py-1">
                <span>检查英文分册术语</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

        {/* BOTTOM SECTION: COPYRIGHT + SOCIAL ASSET GENERATOR */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* DIGITAL COPYRIGHT CARD */}
          <div className="p-5 rounded-2xl bg-[#0F172A] border border-[#1E293B] space-y-3.5">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 font-bold text-white">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>数字版权与防盗存证</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/40 font-mono">
                全网哨兵监测中
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-2.5 rounded-xl bg-[#0A0F1D] border border-[#1E293B]">
                <span className="text-slate-500 text-[10px] block">作品全称</span>
                <span className="text-slate-200 font-bold">《星海之约》全二十卷</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0A0F1D] border border-[#1E293B]">
                <span className="text-slate-500 text-[10px] block">原始署名者</span>
                <span className="text-cyan-300 font-bold">任舟 (Ren Zhou) · 主创</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0A0F1D] border border-[#1E293B]">
                <span className="text-slate-500 text-[10px] block">创作工作室归属</span>
                <span className="text-slate-300">FancyCreativesStudio</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0A0F1D] border border-[#1E293B]">
                <span className="text-slate-500 text-[10px] block">版本指纹戳记</span>
                <span className="text-emerald-400 truncate block">0x9a7b...e4892f</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#0A0F1D] border border-blue-500/20 text-xs text-slate-300 space-y-1">
              <div className="flex items-center justify-between text-cyan-300 font-mono text-[11px]">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>隐形语义对抗水印 (Zero-Watermark)</span>
                </span>
                <span className="text-emerald-400 font-bold">100% 深度植入</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                每个段落与标点微距均已注入创作者独占语义哈希，一旦被盗版爬取或模型非法微调，将自动触发全网存证取证报告。
              </p>
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <span className="text-slate-500 font-mono text-[11px]">
                已托管至国家版权大数据中心节点
              </span>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#182238] border border-cyan-500/30 text-cyan-300 text-xs font-mono hover:bg-[#1E293B]">
                <Download className="w-3.5 h-3.5" />
                <span>下载可信证书 PDF</span>
              </button>
            </div>
          </div>

          {/* SOCIAL MEDIA ASSET GENERATOR */}
          <div className="p-5 rounded-2xl bg-[#0F172A] border border-[#1E293B] space-y-3.5">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 font-bold text-white">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>社交媒体宣发物料生成室</span>
              </div>
              <span className="text-[10px] text-purple-300 font-mono">SOCIAL ASSET GENERATOR</span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {/* Card 1: 小红书长图 */}
              <div className="rounded-xl overflow-hidden border border-[#1E293B] bg-[#0A0F1D] space-y-1.5 pb-2 group cursor-pointer hover:border-purple-500 transition-colors">
                <div className="h-28 overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=400&auto=format&fit=crop&q=80"
                    alt="小红书海报"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <span className="absolute top-1 left-1 px-1.5 py-0.2 rounded bg-rose-600 text-white text-[9px] font-bold">
                    小红书长图
                  </span>
                </div>
                <div className="px-2">
                  <div className="text-[11px] font-bold text-white truncate">迷雾开端 · 概念海报</div>
                  <div className="text-[9px] text-slate-500 font-mono">9:16 精排 4K</div>
                </div>
              </div>

              {/* Card 2: B站动态卡 */}
              <div className="rounded-xl overflow-hidden border border-[#1E293B] bg-[#0A0F1D] space-y-1.5 pb-2 group cursor-pointer hover:border-blue-500 transition-colors">
                <div className="h-28 overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&auto=format&fit=crop&q=80"
                    alt="B站动态卡"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <span className="absolute top-1 left-1 px-1.5 py-0.2 rounded bg-blue-500 text-white text-[9px] font-bold">
                    B站动态卡
                  </span>
                </div>
                <div className="px-2">
                  <div className="text-[11px] font-bold text-white truncate">星枢纪元 · 分镜九宫格</div>
                  <div className="text-[9px] text-slate-500 font-mono">16:9 横版预告</div>
                </div>
              </div>

              {/* Card 3: 金句书签印卡 */}
              <div className="rounded-xl overflow-hidden border border-[#1E293B] bg-[#0A0F1D] p-3 flex flex-col justify-between group cursor-pointer hover:border-amber-500 transition-colors">
                <div className="space-y-1">
                  <div className="w-5 h-5 rounded-full bg-amber-950 border border-amber-800/40 text-amber-400 flex items-center justify-center text-[10px] font-serif">
                    句
                  </div>
                  <p className="text-[10px] text-slate-300 italic font-serif leading-relaxed line-clamp-3">
                    “若星海不可涸渡，我便以心剑为舟。”
                  </p>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-amber-400">金句书签印卡</div>
                  <div className="text-[9px] text-slate-500 font-mono">1:1 方形印章款</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-[11px] text-slate-400 font-mono">
                已生成 12 款多格式宣发包 (含文案与标签 #星海之约 #FCS小说)
              </span>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2563EB] hover:bg-blue-600 text-white text-xs font-semibold shadow-md transition-colors">
                <Sparkles className="w-3.5 h-3.5" />
                <span>一键打包发布</span>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* 3. BOTTOM GLOBAL CDN BAR */}
      <div className="h-8 border-t border-[#1E293B] bg-[#0A0F1D] px-5 flex items-center justify-between text-[11px] font-mono text-slate-400 flex-shrink-0">
        <div className="flex items-center gap-3">
          <span className="text-emerald-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>全球 CDN 预热就绪: 64 个边缘节点</span>
          </span>
          <span className="text-slate-600">|</span>
          <span>静态资源缓存率: 99.8%</span>
          <span className="text-slate-600">|</span>
          <span>SSL/TLS 1.3 墨境加密通道在线</span>
        </div>
        <div className="text-slate-500">
          FCS Distribution Engine · 构建哈希 <span className="text-cyan-400">8fc091</span>
        </div>
      </div>

    </div>
  );
};
