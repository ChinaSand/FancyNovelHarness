import React, { useState } from 'react';
import { FcsPageId } from '../../types/fcs';
import { 
  Users, 
  MessageSquare, 
  CheckSquare, 
  Plus, 
  Search, 
  Volume2, 
  FileText, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  Send, 
  Paperclip, 
  AtSign, 
  Smile, 
  ExternalLink,
  ChevronRight,
  Shield,
  Layers,
  ArrowRight
} from 'lucide-react';

interface Page07CollaborationProps {
  onNavigate: (page: FcsPageId) => void;
}

export const Page07Collaboration: React.FC<Page07CollaborationProps> = ({ onNavigate }) => {
  const [commentText, setCommentText] = useState('');
  const [activeTab, setActiveTab] = useState<'discussion' | 'activity' | 'tasks'>('discussion');
  const [taskFilter, setTaskFilter] = useState<'all' | 'todo' | 'in_progress' | 'done'>('all');

  return (
    <div className="flex-1 flex flex-col h-full bg-[#0A0F1D] text-[#E2E8F0] overflow-hidden">
      
      {/* 1. TOP BANNER */}
      <div className="border-b border-[#1E293B] bg-[#0F172A]/80 backdrop-blur-sm p-4 z-10 flex-shrink-0 flex items-center justify-between gap-4">
        <div>
          <div className="text-[11px] font-mono text-cyan-400 mb-1 flex items-center gap-2">
            <span>协同矩阵 · CO-CREATION ENGINE</span>
            <span className="text-slate-600">|</span>
            <span>项目: 《星海之约》</span>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="text-base font-bold text-white flex items-center gap-2">
              <span>7. 多人协作 · Collaboration</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </h1>
            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>在线 4 / 5 人</span>
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300">今日协作提交 14 次</span>
              <span className="text-slate-600">|</span>
              <span className="text-amber-400">图谱合并待审 2 项</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A0F1D] border border-[#1E293B] hover:bg-[#1E293B] text-slate-300 text-xs font-medium transition-colors">
            <FileText className="w-3.5 h-3.5 text-slate-400" />
            <span>协作审计日志</span>
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A0F1D] border border-[#1E293B] hover:bg-[#1E293B] text-cyan-300 text-xs font-medium transition-colors">
            <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>声波协同会话</span>
          </button>
          <button 
            onClick={() => onNavigate('10-project-settings')}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#2563EB] hover:bg-blue-600 text-white text-xs font-semibold shadow-md shadow-blue-500/20 active:scale-95 transition-all"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>邀请新成员</span>
          </button>
        </div>
      </div>

      {/* 2. THREE COLUMN LAYOUT */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* LEFT COLUMN: TEAM MEMBERS */}
        <aside className="w-72 border-r border-[#1E293B] bg-[#0A0F1D] flex flex-col justify-between overflow-y-auto custom-scrollbar flex-shrink-0">
          <div className="p-4 space-y-4">
            
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 font-bold text-slate-200">
                <Users className="w-4 h-4 text-purple-400" />
                <span>项目成员</span>
                <span className="px-1.5 py-0.2 rounded-full bg-[#182238] text-purple-300 text-[10px] font-mono">5</span>
              </div>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-500" />
              <input
                type="text"
                placeholder="按姓名、权责检索..."
                className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-[#0F172A] border border-[#1E293B] text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Member Cards */}
            <div className="space-y-2.5">
              
              {/* Member 1: 星晨 (我) */}
              <div className="p-2.5 rounded-xl bg-[#0F172A] border border-blue-500/40 relative group">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                      晨
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <span>星晨 (我)</span>
                        <span className="text-[9px] px-1 rounded bg-blue-950 text-blue-300 border border-blue-800/60">管理员</span>
                      </div>
                      <div className="text-[10px] text-slate-400">主创作家 · 主线构建</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono">在线</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-1 flex items-center justify-between">
                  <span>负责: 主线大纲 / 第1-5章</span>
                  <span className="text-blue-400 font-mono">配额 60%</span>
                </div>
              </div>

              {/* Member 2: 墨白 */}
              <div className="p-2.5 rounded-xl bg-[#0F172A] border border-[#1E293B] hover:border-slate-600 transition-colors">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-xs">
                      墨
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <span>墨白</span>
                        <span className="text-[9px] px-1 rounded bg-purple-950 text-purple-300 border border-purple-800/60">编辑者</span>
                      </div>
                      <div className="text-[10px] text-slate-400">助理编剧 · 伏笔网追踪</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-cyan-400 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span>编第3章</span>
                  </span>
                </div>
                <div className="text-[10px] text-slate-500 mt-1">
                  负责: 支线推进 / 伏笔节点审查
                </div>
              </div>

              {/* Member 3: 清风徐来 */}
              <div className="p-2.5 rounded-xl bg-[#0F172A] border border-[#1E293B] hover:border-slate-600 transition-colors">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold text-xs">
                      风
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <span>清风徐来</span>
                        <span className="text-[9px] px-1 rounded bg-amber-950 text-amber-300 border border-amber-800/60">编辑者</span>
                      </div>
                      <div className="text-[10px] text-slate-400">世界观导师 · 宗门法则</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">离开15m</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-1">
                  负责: 修炼境界 / 宗派势力谱系
                </div>
              </div>

              {/* Member 4: Dreamer */}
              <div className="p-2.5 rounded-xl bg-[#0F172A] border border-[#1E293B] hover:border-slate-600 transition-colors">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-rose-600 flex items-center justify-center text-white font-bold text-xs">
                      D
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <span>Dreamer</span>
                        <span className="text-[9px] px-1 rounded bg-rose-950 text-rose-300 border border-rose-800/60">评论者</span>
                      </div>
                      <div className="text-[10px] text-slate-400">概念美术师 · 视觉蓝图</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono">在线</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-1">
                  负责: 场景分镜 / 角色AI立绘微调
                </div>
              </div>

              {/* Member 5: 未来可期 */}
              <div className="p-2.5 rounded-xl bg-[#0F172A] border border-[#1E293B] hover:border-slate-600 transition-colors opacity-70">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 font-bold text-xs">
                      未
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                        <span>未来可期</span>
                        <span className="text-[9px] px-1 rounded bg-[#1E293B] text-slate-400">评论者</span>
                      </div>
                      <div className="text-[10px] text-slate-500">特邀校对 · 语法与辞格</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-600 font-mono">离线</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-1">
                  负责: 敏感词门禁 / 文风古韵校验
                </div>
              </div>

            </div>
          </div>

          {/* Left Footer Links */}
          <div className="p-4 border-t border-[#1E293B] space-y-1.5 text-xs text-slate-400">
            <button 
              onClick={() => onNavigate('10-project-settings')}
              className="w-full flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-[#1E293B] transition-colors"
            >
              <span className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-blue-400" />
                <span>权限角色模型 (RBAC)</span>
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            </button>
            <button className="w-full flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-[#1E293B] transition-colors">
              <span className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>协作产出热力报表</span>
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            </button>
          </div>
        </aside>

        {/* CENTER COLUMN: DISCUSSION STREAM */}
        <div className="flex-1 flex flex-col bg-[#080D1A] overflow-hidden">
          
          {/* Discussion Tabs Bar */}
          <div className="h-11 border-b border-[#1E293B] bg-[#0A0F1D] px-4 flex items-center justify-between text-xs flex-shrink-0">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('discussion')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                  activeTab === 'discussion' ? 'bg-[#2563EB] text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>讨论</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
              </button>
              <button
                onClick={() => setActiveTab('activity')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  activeTab === 'activity' ? 'bg-[#2563EB] text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                动态
              </button>
              <button
                onClick={() => setActiveTab('tasks')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  activeTab === 'tasks' ? 'bg-[#2563EB] text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                关联任务
              </button>
            </div>

            <button 
              onClick={() => onNavigate('02-novel-graph')}
              className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 text-xs font-mono"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>关联图谱视图</span>
            </button>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 p-5 overflow-y-auto custom-scrollbar space-y-4">
            
            {/* Comment 1: 星晨 */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                晨
              </div>
              <div className="flex-1 max-w-2xl bg-[#0F172A] border border-[#1E293B] rounded-2xl p-4 shadow-md">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white">星晨</span>
                    <span className="text-[10px] px-1 rounded bg-blue-950 text-blue-300 font-mono">管理员</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">10:24</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  已完成第三章的初稿，欢迎诸位 review ✨ 重点看下第18段苏明月与巡卫长的对手戏张力，节奏感是否达到了悬疑递进的效果？
                </p>

                {/* Chapter Reference Card */}
                <div 
                  onClick={() => onNavigate('04-editor')}
                  className="mt-3 p-3 rounded-xl bg-[#0A0F1D] border border-blue-500/30 hover:border-blue-500/60 cursor-pointer flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-cyan-300">第3章 · 异象突生 · P18「残火对峙」</div>
                      <div className="text-[11px] text-slate-400 italic">“巡卫长按住腰间符刃，冷光映出她眼底的星尘印痕……”</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-blue-400 group-hover:translate-x-0.5 transition-transform font-mono">
                    <span>阅读锚点</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Reactions */}
                <div className="mt-3 flex items-center gap-2 text-xs">
                  <span className="px-2 py-0.5 rounded-full bg-[#182238] border border-[#1E293B] text-slate-300">👍 3</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#182238] border border-[#1E293B] text-slate-300">❤️ 2</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#182238] border border-[#1E293B] text-slate-300">💡 1</span>
                  <button className="text-[11px] text-slate-500 hover:text-slate-300 ml-2">回复</button>
                </div>
              </div>
            </div>

            {/* Comment 2: 清风徐来 */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                风
              </div>
              <div className="flex-1 max-w-2xl bg-[#0F172A] border border-[#1E293B] rounded-2xl p-4 shadow-md">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white">清风徐来</span>
                    <span className="text-[10px] px-1 rounded bg-amber-950 text-amber-300 font-mono">编辑者</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">10:30</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  情节很棒！建议增加一些伏笔 ~ 尤其是长兄遗物那块，可以和第8章九星阵盘呼应。这样到第二卷揭晓身份时不会显得突兀。
                </p>

                {/* Graph Link Pill */}
                <div className="mt-2.5 flex items-center gap-2 text-[11px] text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-1.5 rounded-xl font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>已采纳并关联图谱伏笔节点 #FB-08 (九星天盘引力子)</span>
                </div>
              </div>
            </div>

            {/* Comment 3: 墨白 */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                墨
              </div>
              <div className="flex-1 max-w-2xl bg-[#0F172A] border border-[#1E293B] rounded-2xl p-4 shadow-md">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white">墨白</span>
                    <span className="text-[10px] px-1 rounded bg-purple-950 text-purple-300 font-mono">编辑者</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">10:35</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  已创建了新的协同任务：<span className="text-cyan-400 font-semibold">优化角色动机 📝</span> 我在叙事图谱里标注了第3章与第1章的冲突节点，大家在右侧看板确认统一下排期。
                </p>

                {/* Task card */}
                <div className="mt-2.5 p-2.5 rounded-xl bg-[#0A0F1D] border border-amber-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-amber-950/60 border border-amber-800/60 flex items-center justify-center text-amber-400 text-xs">
                      !
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-200">任务 #T-03: 优化苏明月在第三章前期的逃脱动机</div>
                      <div className="text-[10px] text-slate-500 font-mono">指派给: 墨白 · 截止时间: 今日 18:00</div>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950 text-amber-300 font-mono">进行中</span>
                </div>
              </div>
            </div>

            {/* Comment 4: Dreamer */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-rose-600 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                D
              </div>
              <div className="flex-1 max-w-2xl bg-[#0F172A] border border-[#1E293B] rounded-2xl p-4 shadow-md">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white">Dreamer</span>
                    <span className="text-[10px] px-1 rounded bg-rose-950 text-rose-300 font-mono">概念美术师</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">11:02</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  分镜卡片已经补充到正文了，天网主塔的深色宏大夜景概念图已经上传到成果资产库，大家随时调取参考！
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Chat Composer Bar */}
          <div className="p-3 border-t border-[#1E293B] bg-[#0A0F1D] flex-shrink-0">
            <div className="bg-[#0F172A] border border-[#1E293B] rounded-2xl p-2.5 focus-within:border-blue-500 transition-colors">
              <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="发表协作意见、@提及成员、或输入 / 快速关联章节、图谱节点"
                rows={2}
                className="w-full bg-transparent text-xs text-slate-200 placeholder-slate-500 focus:outline-none resize-none"
              />
              <div className="flex items-center justify-between pt-1 text-slate-400">
                <div className="flex items-center gap-2">
                  <button className="p-1 hover:text-white rounded hover:bg-[#1E293B]" title="表情">
                    <Smile className="w-4 h-4" />
                  </button>
                  <button className="p-1 hover:text-white rounded hover:bg-[#1E293B]" title="@提及">
                    <AtSign className="w-4 h-4" />
                  </button>
                  <button className="p-1 hover:text-white rounded hover:bg-[#1E293B]" title="附件">
                    <Paperclip className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-slate-500 font-mono">⌘ + Enter 发送</span>
                  <button 
                    onClick={() => setCommentText('')}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white text-xs font-medium shadow-md shadow-blue-500/20 transition-colors"
                  >
                    <span>发送</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: TASK BOARD */}
        <aside className="w-80 border-l border-[#1E293B] bg-[#0A0F1D] flex flex-col justify-between overflow-y-auto custom-scrollbar flex-shrink-0">
          <div className="p-4 space-y-4">
            
            {/* Board Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <CheckSquare className="w-4 h-4 text-emerald-400" />
                <span>任务看板</span>
              </div>
              <button className="flex items-center gap-1 px-2 py-1 rounded-lg bg-[#182238] border border-cyan-500/30 text-cyan-300 text-[11px] hover:bg-[#1E293B] transition-colors">
                <Plus className="w-3 h-3" />
                <span>新建任务</span>
              </button>
            </div>

            {/* Task Status Filter Pills */}
            <div className="grid grid-cols-4 gap-1 bg-[#0F172A] p-1 rounded-xl border border-[#1E293B] text-center text-xs font-mono">
              <button 
                onClick={() => setTaskFilter('all')}
                className={`py-1 rounded-lg transition-all ${taskFilter === 'all' ? 'bg-[#2563EB] text-white font-bold' : 'text-slate-400 hover:text-white'}`}
              >
                全部 (8)
              </button>
              <button 
                onClick={() => setTaskFilter('todo')}
                className={`py-1 rounded-lg transition-all ${taskFilter === 'todo' ? 'bg-[#2563EB] text-white font-bold' : 'text-slate-400 hover:text-white'}`}
              >
                待处理 (3)
              </button>
              <button 
                onClick={() => setTaskFilter('in_progress')}
                className={`py-1 rounded-lg transition-all ${taskFilter === 'in_progress' ? 'bg-[#2563EB] text-white font-bold' : 'text-slate-400 hover:text-white'}`}
              >
                进行中 (3)
              </button>
              <button 
                onClick={() => setTaskFilter('done')}
                className={`py-1 rounded-lg transition-all ${taskFilter === 'done' ? 'bg-[#2563EB] text-white font-bold' : 'text-slate-400 hover:text-white'}`}
              >
                已完成 (2)
              </button>
            </div>

            {/* Tasks List */}
            <div className="space-y-3">
              
              {/* Task 1 */}
              <div className="p-3 rounded-xl bg-[#0F172A] border border-[#1E293B] hover:border-slate-600 transition-all space-y-2 group">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2">
                    <input type="checkbox" className="mt-0.5 rounded border-[#1E293B] text-blue-600 focus:ring-0" />
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                        优化角色设定
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        完善苏明月心智数值与第1章行为动机
                      </p>
                    </div>
                  </div>
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-rose-950 text-rose-300 border border-rose-800/40 font-mono">高危</span>
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono pt-1 border-t border-[#1E293B]/60">
                  <span className="flex items-center gap-1 text-purple-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span>指派: 墨白</span>
                  </span>
                  <span className="text-amber-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>今日 18:00</span>
                  </span>
                </div>
              </div>

              {/* Task 2 */}
              <div className="p-3 rounded-xl bg-[#0F172A] border border-[#1E293B] hover:border-slate-600 transition-all space-y-2 group">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2">
                    <input type="checkbox" className="mt-0.5 rounded border-[#1E293B] text-blue-600 focus:ring-0" />
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                        检查时间线逻辑
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        校对第1-5章绝对纪年与破阵锚点
                      </p>
                    </div>
                  </div>
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-blue-950 text-blue-300 border border-blue-800/40 font-mono">因果</span>
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono pt-1 border-t border-[#1E293B]/60">
                  <span className="flex items-center gap-1 text-blue-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>指派: 星晨</span>
                  </span>
                  <span>明天截止</span>
                </div>
              </div>

              {/* Task 3 */}
              <div className="p-3 rounded-xl bg-[#0F172A] border border-[#1E293B] hover:border-slate-600 transition-all space-y-2 group">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2">
                    <input type="checkbox" className="mt-0.5 rounded border-[#1E293B] text-blue-600 focus:ring-0" />
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                        润色文案风格
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        第2章对白去除现代词汇，强化古风
                      </p>
                    </div>
                  </div>
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/40 font-mono">语言</span>
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono pt-1 border-t border-[#1E293B]/60">
                  <span className="flex items-center gap-1 text-amber-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>指派: 清风徐来</span>
                  </span>
                  <span>后天截止</span>
                </div>
              </div>

              {/* Task 4 (Completed) */}
              <div className="p-3 rounded-xl bg-[#0F172A]/50 border border-[#1E293B] opacity-60 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-400 line-through">
                        完善第12章剧情 (已归档)
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        主线转折点草案审定
                      </p>
                    </div>
                  </div>
                  <span className="text-[9px] px-1 py-0.2 rounded bg-[#182238] text-slate-400 font-mono">完成</span>
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono pt-1 border-t border-[#1E293B]/40">
                  <span>完成者: 星晨</span>
                  <span>2小时前</span>
                </div>
              </div>

            </div>
          </div>

          {/* Sync Status Badge */}
          <div className="p-4 border-t border-[#1E293B] bg-[#0F172A]/40 text-[11px] font-mono space-y-1">
            <div className="flex items-center gap-2 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>WebRTC 协同房间活跃 延迟: 18ms</span>
            </div>
            <div className="text-slate-500 flex items-center justify-between">
              <span>0 冲突检测</span>
              <span>毫秒级快照自动保存</span>
            </div>
          </div>
        </aside>

      </div>

      {/* 3. BOTTOM CO-OP STATUS BAR */}
      <div className="h-8 border-t border-[#1E293B] bg-[#0A0F1D] px-5 flex items-center justify-between text-[11px] font-mono text-slate-400 flex-shrink-0">
        <div className="flex items-center gap-2 text-cyan-300">
          <Sparkles className="w-3.5 h-3.5" />
          <span>协同拓扑已就绪: 分布式冲突消除引擎 (CRDT) 持续运作中</span>
        </div>
        <div className="flex items-center gap-3 text-slate-500">
          <span>正在查看: 苏明月卷宗 · 第3章实时光标 (墨白)</span>
          <span className="text-slate-700">|</span>
          <button className="text-cyan-400 hover:text-cyan-300">一键收起所有栏 (全屏协同)</button>
        </div>
      </div>

    </div>
  );
};
