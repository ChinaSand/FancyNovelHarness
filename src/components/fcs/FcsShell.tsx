import React, { useState } from 'react';
import { FcsPageId } from '../../types/fcs';
import { 
  Feather, 
  LayoutDashboard, 
  FolderGit2, 
  Boxes, 
  Puzzle, 
  Settings, 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  Bell, 
  Plus, 
  Network, 
  Sparkles, 
  GitFork, 
  Users, 
  CheckCircle2, 
  ChevronDown,
  Layers,
  BookOpen,
  History,
  ShieldCheck,
  HardDrive,
  Share2,
  FileText
} from 'lucide-react';

interface FcsShellProps {
  currentPage: FcsPageId;
  onNavigate: (page: FcsPageId) => void;
  children: React.ReactNode;
}

export const FcsShell: React.FC<FcsShellProps> = ({
  currentPage,
  onNavigate,
  children,
}) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false);

  // All 12 pages list for quick switching
  const allPages: { id: FcsPageId; number: string; title: string; subtitle: string; icon: React.ReactNode }[] = [
    { id: '01-dashboard', number: '1', title: '工作台总览', subtitle: 'Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: '02-novel-graph', number: '2', title: 'Novel Graph', subtitle: '叙事图谱', icon: <Network className="w-4 h-4" /> },
    { id: '03-ai-agent', number: '3', title: 'AI 创作助手', subtitle: '智能协作', icon: <Sparkles className="w-4 h-4" /> },
    { id: '04-editor', number: '4', title: '章节编辑器', subtitle: 'Editor', icon: <FileText className="w-4 h-4" /> },
    { id: '05-timeline', number: '5', title: '时空时间线', subtitle: 'Timeline', icon: <Layers className="w-4 h-4" /> },
    { id: '06-version-control', number: '6', title: '版本管理', subtitle: 'Version Control', icon: <History className="w-4 h-4" /> },
    { id: '07-collaboration', number: '7', title: '多人协作', subtitle: 'Collaboration', icon: <Users className="w-4 h-4" /> },
    { id: '08-review-gate', number: '8', title: '审核与质量门禁', subtitle: 'Review & Gate', icon: <ShieldCheck className="w-4 h-4" /> },
    { id: '09-plugin-manager', number: '9', title: '插件生态', subtitle: 'Plugin Manager', icon: <Puzzle className="w-4 h-4" /> },
    { id: '10-project-settings', number: '10', title: '项目设置', subtitle: 'Project Settings', icon: <Settings className="w-4 h-4" /> },
    { id: '11-asset-manager', number: '11', title: '数据管理', subtitle: 'Asset Manager', icon: <HardDrive className="w-4 h-4" /> },
    { id: '12-publish-share', number: '12', title: '发布与分发', subtitle: 'Publish & Share', icon: <Share2 className="w-4 h-4" /> },
  ];

  const currentInfo = allPages.find((p) => p.id === currentPage) || allPages[0];

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#0A0F1D] text-[#E2E8F0] select-none font-sans">
      
      {/* 1. PERSISTENT LEFT SIDEBAR */}
      <aside className={`flex flex-col justify-between border-r border-[#1E293B] bg-[#0A0F1D] transition-all duration-200 z-30 ${
        isSidebarCollapsed ? 'w-16' : 'w-56'
      }`}>
        {/* Top Logo & App Title */}
        <div>
          <div className="flex items-center justify-between px-4 h-14 border-b border-[#1E293B]">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#1E1B4B] via-[#312E81] to-[#2563EB] flex items-center justify-center text-cyan-300 ring-1 ring-blue-500/30 flex-shrink-0 shadow-lg">
                <Feather className="w-4 h-4" />
              </div>
              {!isSidebarCollapsed && (
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-sm tracking-tight text-white truncate">
                      FCS
                    </span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-purple-950/80 text-purple-300 border border-purple-800/60 font-mono scale-90 origin-left">
                      Studio
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500 truncate leading-none">
                    FancyCreativesStudio
                  </span>
                </div>
              )}
            </div>

            <button
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              className="p-1 rounded-md text-slate-500 hover:text-slate-300 hover:bg-[#131C31] transition-colors"
              title={isSidebarCollapsed ? '展开侧边栏' : '收起侧边栏'}
            >
              {isSidebarCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>
          </div>

          {/* Primary Navigation Items */}
          <nav className="p-2 space-y-1 mt-2">
            {/* 工作台 (Dashboard) */}
            <button
              onClick={() => onNavigate('01-dashboard')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                currentPage === '01-dashboard'
                  ? 'bg-gradient-to-r from-[#2e1065] to-[#3b0764] text-white shadow-md shadow-purple-900/30 border border-purple-600/40'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-[#131C31]'
              }`}
            >
              <LayoutDashboard className={`w-4 h-4 flex-shrink-0 ${currentPage === '01-dashboard' ? 'text-purple-300' : 'text-slate-400'}`} />
              {!isSidebarCollapsed && (
                <div className="flex items-center justify-between w-full">
                  <span>工作台</span>
                  {currentPage === '01-dashboard' && <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />}
                </div>
              )}
            </button>

            {/* 项目 (Projects) */}
            <button
              onClick={() => onNavigate('02-novel-graph')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                currentPage === '02-novel-graph'
                  ? 'bg-[#182238] text-cyan-400 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-[#131C31]'
              }`}
            >
              <FolderGit2 className="w-4 h-4 flex-shrink-0 text-slate-400" />
              {!isSidebarCollapsed && (
                <div className="flex items-center justify-between w-full">
                  <span>项目</span>
                  <span className="text-[10px] font-mono text-slate-500 px-1 rounded bg-[#0A0F1D]">12</span>
                </div>
              )}
            </button>

            {/* 成果库 (Artifacts / Assets) */}
            <button
              onClick={() => onNavigate('11-asset-manager')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                currentPage === '11-asset-manager'
                  ? 'bg-[#182238] text-cyan-400 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-[#131C31]'
              }`}
            >
              <Boxes className="w-4 h-4 flex-shrink-0 text-slate-400" />
              {!isSidebarCollapsed && (
                <div className="flex items-center justify-between w-full">
                  <span>成果库</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                </div>
              )}
            </button>

            {/* 插件中心 (Plugins) */}
            <button
              onClick={() => onNavigate('09-plugin-manager')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                currentPage === '09-plugin-manager'
                  ? 'bg-[#182238] text-teal-400 border border-teal-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-[#131C31]'
              }`}
            >
              <Puzzle className="w-4 h-4 flex-shrink-0 text-slate-400" />
              {!isSidebarCollapsed && (
                <div className="flex items-center justify-between w-full">
                  <span>插件</span>
                  <span className="text-[10px] font-medium text-emerald-400 px-1.5 py-0.2 rounded-full bg-emerald-950/60 border border-emerald-800/40">
                    4 已启用
                  </span>
                </div>
              )}
            </button>

            {/* 系统设置 (Settings) */}
            <button
              onClick={() => onNavigate('10-project-settings')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                currentPage === '10-project-settings'
                  ? 'bg-[#182238] text-blue-400 border border-blue-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-[#131C31]'
              }`}
            >
              <Settings className="w-4 h-4 flex-shrink-0 text-slate-400" />
              {!isSidebarCollapsed && (
                <div className="flex items-center justify-between w-full">
                  <span>设置</span>
                </div>
              )}
            </button>
          </nav>
        </div>

        {/* Bottom Profile Widget */}
        <div className="p-3 border-t border-[#1E293B]">
          <div className="flex items-center gap-3 p-2 rounded-xl bg-[#0F172A] border border-[#1E293B]/70">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-serif font-bold text-xs ring-1 ring-white/20 flex-shrink-0">
              舟
            </div>
            {!isSidebarCollapsed && (
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-slate-200 truncate">
                  创作者 / 任舟
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="truncate">灵感涌现中 · 在线</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* 2. MAIN COLUMN (Header + Content + Bottom Dock) */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        
        {/* TOP HEADER BAR */}
        <header className="h-14 border-b border-[#1E293B] bg-[#0A0F1D]/90 backdrop-blur-md px-4 flex items-center justify-between gap-4 z-20">
          
          {/* Left: Breadcrumbs & Page Selector Dropdown */}
          <div className="flex items-center gap-2 relative">
            <button
              onClick={() => setIsProjectDropdownOpen(!isProjectDropdownOpen)}
              className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-[#0F172A] border border-[#1E293B] hover:border-blue-500/50 text-xs font-medium text-slate-200 transition-colors"
            >
              <span className="text-cyan-400 font-bold">星海之约</span>
              <span className="text-slate-500">/</span>
              <span className="text-slate-300 font-mono">{currentInfo.number}. {currentInfo.title}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {/* Quick 12 Pages Dropdown Menu */}
            {isProjectDropdownOpen && (
              <div 
                className="absolute top-11 left-0 w-80 max-h-96 overflow-y-auto rounded-xl bg-[#0F172A] border border-[#1E293B] shadow-2xl p-2 z-50 space-y-1 custom-scrollbar"
                onClick={() => setIsProjectDropdownOpen(false)}
              >
                <div className="px-2 py-1 text-[11px] font-mono text-slate-400 uppercase tracking-wider border-b border-[#1E293B]/70">
                  全套 12 核心页面即刻跳转
                </div>
                {allPages.map((page) => (
                  <button
                    key={page.id}
                    onClick={() => onNavigate(page.id)}
                    className={`w-full flex items-center gap-3 px-2.5 py-2 rounded-lg text-xs text-left transition-colors ${
                      currentPage === page.id
                        ? 'bg-[#2563EB]/20 text-cyan-300 border border-blue-500/40'
                        : 'text-slate-300 hover:bg-[#182238] hover:text-white'
                    }`}
                  >
                    <span className="w-5 text-center font-mono text-[11px] text-slate-500">{page.number}</span>
                    <span className="text-slate-400">{page.icon}</span>
                    <div className="flex flex-col flex-1 min-w-0">
                      <span className="font-medium truncate">{page.title}</span>
                      <span className="text-[10px] text-slate-500 font-mono">{page.subtitle}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Center Search Command Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
              <input
                type="text"
                placeholder="搜索项目、角色、情节、设定图谱..."
                className="w-full pl-9 pr-12 py-1.5 text-xs rounded-lg bg-[#0F172A] border border-[#1E293B] text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
              <span className="absolute right-2.5 top-2 text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#182238] text-slate-400 border border-[#1E293B]">
                ⌘K
              </span>
            </div>
          </div>

          {/* Right Status & Actions */}
          <div className="flex items-center gap-3">
            {/* AI Compute Points Badge */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#131C31] border border-[#1E293B] text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)]" />
              <span className="text-slate-400 text-[11px]">AI 算力点:</span>
              <span className="text-purple-300 font-bold">14,250</span>
            </div>

            {/* Notification Bell */}
            <button className="relative p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-[#131C31] transition-colors">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-rose-500 ring-2 ring-[#0A0F1D]" />
            </button>

            {/* Top Action Button */}
            <button 
              onClick={() => {
                if (currentPage === '06-version-control') onNavigate('08-review-gate');
                else onNavigate('03-ai-agent');
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#2563EB] hover:bg-blue-600 active:scale-95 text-white shadow-md shadow-blue-500/20 transition-all"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{currentPage === '06-version-control' ? '创建新分支 / 提交版本' : '导入故事 / 设定'}</span>
            </button>
          </div>

        </header>

        {/* 3. SCREEN CONTENT AREA */}
        <main className="flex-1 overflow-hidden relative flex flex-col">
          {children}
        </main>

        {/* 4. PERSISTENT BOTTOM SUB-DOCK BAR (seen in all screens) */}
        <footer className="h-10 border-t border-[#1E293B] bg-[#0A0F1D] px-4 flex items-center justify-between text-xs font-mono text-slate-400 z-20">
          
          {/* Quick Module Jump Tabs */}
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
            {[
              { id: '02-novel-graph', label: 'Novel Graph 叙事图谱', icon: <Network className="w-3.5 h-3.5 text-blue-400" /> },
              { id: '03-ai-agent', label: 'AI Agent 智能协作', icon: <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> },
              { id: '06-version-control', label: '版本管理 时光回溯', icon: <History className="w-3.5 h-3.5 text-cyan-400" /> },
              { id: '07-collaboration', label: '多人协作 团队共创', icon: <Users className="w-3.5 h-3.5 text-purple-400" /> },
              { id: '09-plugin-manager', label: '插件生态 能力扩展', icon: <Puzzle className="w-3.5 h-3.5 text-teal-400" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => onNavigate(tab.id as FcsPageId)}
                className={`flex items-center gap-1.5 hover:text-white transition-colors whitespace-nowrap ${
                  currentPage === tab.id ? 'text-cyan-400 font-bold' : 'text-slate-400'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Right Status & Slogan */}
          <div className="hidden lg:flex items-center gap-4 text-[11px] text-slate-500">
            <span>“让每个创作者拥有自己的创作工作室”</span>
            <span className="text-slate-700">|</span>
            <div className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>云端已同步 v0.1-pro</span>
            </div>
            <span className="text-slate-600">FancyCreativesStudio · FCS v0.1</span>
          </div>

        </footer>

      </div>

    </div>
  );
};
