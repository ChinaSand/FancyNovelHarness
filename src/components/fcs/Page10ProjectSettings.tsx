import React, { useState } from 'react';
import { FcsPageId } from '../../types/fcs';
import { 
  Settings, 
  RotateCcw, 
  Download, 
  Save, 
  Info, 
  Sliders, 
  Users, 
  Share2, 
  Cpu, 
  AlertTriangle, 
  Image as ImageIcon, 
  Sparkles, 
  CheckCircle2, 
  Lock, 
  ChevronDown,
  Clock,
  ShieldAlert
} from 'lucide-react';

interface Page10ProjectSettingsProps {
  onNavigate: (page: FcsPageId) => void;
}

export const Page10ProjectSettings: React.FC<Page10ProjectSettingsProps> = ({ onNavigate }) => {
  const [activeModule, setActiveModule] = useState<'info' | 'rules' | 'rbac' | 'publish' | 'advanced'>('info');
  const [title, setTitle] = useState('星海之约');
  const [narrativeTone, setNarrativeTone] = useState('cyber_taoist');
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-[#0A0F1D] text-[#E2E8F0] overflow-hidden">
      
      {/* 1. TOP HEADER BANNER */}
      <div className="border-b border-[#1E293B] bg-[#0F172A]/80 backdrop-blur-sm p-4 z-10 flex-shrink-0">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-base font-bold text-white flex items-center gap-2">
                <span>10. 项目设置 · Project Settings</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-blue-950 text-blue-300 border border-blue-800/60 uppercase">
                  PROJECT CONFIG V1.0
                </span>
              </h1>
            </div>
            <div className="text-xs font-mono text-slate-400 flex items-center gap-3">
              <span className="text-cyan-300 font-bold">《星海之约》</span>
              <span className="text-slate-600">/</span>
              <span>ID: FCS-PRJ-202506-088</span>
              <span className="text-slate-600">|</span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>状态: 连载中 (In Progress)</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A0F1D] border border-[#1E293B] hover:bg-[#1E293B] text-slate-300 text-xs font-medium transition-colors">
              <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
              <span>恢复默认设置</span>
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A0F1D] border border-[#1E293B] hover:bg-[#1E293B] text-slate-300 text-xs font-medium transition-colors">
              <Download className="w-3.5 h-3.5 text-slate-400" />
              <span>导出配置 (.fcs-config)</span>
            </button>
            <button 
              onClick={handleSave}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white text-xs font-semibold shadow-md shadow-blue-500/25 active:scale-95 transition-all"
            >
              <Save className="w-3.5 h-3.5" />
              <span>{isSaved ? '已保存生效！' : '保存并生效配置'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN TWO-COLUMN BODY */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* LEFT SUB-NAV */}
        <aside className="w-64 border-r border-[#1E293B] bg-[#0A0F1D] flex flex-col justify-between overflow-y-auto custom-scrollbar flex-shrink-0 p-4">
          <div className="space-y-4">
            <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider px-2">
              设置导航 · MODULES
            </div>

            <div className="space-y-1">
              <button
                onClick={() => setActiveModule('info')}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                  activeModule === 'info'
                    ? 'bg-[#182238] text-cyan-300 border border-blue-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-[#0F172A]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Info className="w-4 h-4 text-blue-400" />
                  <span>项目信息</span>
                </div>
                {activeModule === 'info' && (
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-blue-950 text-blue-300">
                    EDITING
                  </span>
                )}
              </button>

              <button
                onClick={() => setActiveModule('rules')}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                  activeModule === 'rules'
                    ? 'bg-[#182238] text-cyan-300 border border-blue-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-[#0F172A]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Sliders className="w-4 h-4 text-purple-400" />
                  <span>创作规则</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">4 约束</span>
              </button>

              <button
                onClick={() => { setActiveModule('rbac'); onNavigate('07-collaboration'); }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                  activeModule === 'rbac'
                    ? 'bg-[#182238] text-cyan-300 border border-blue-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-[#0F172A]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Users className="w-4 h-4 text-emerald-400" />
                  <span>权限管理</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">5 成员</span>
              </button>

              <button
                onClick={() => { setActiveModule('publish'); onNavigate('12-publish-share'); }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                  activeModule === 'publish'
                    ? 'bg-[#182238] text-cyan-300 border border-blue-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-[#0F172A]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Share2 className="w-4 h-4 text-cyan-400" />
                  <span>发布设置</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">3 渠道</span>
              </button>

              <button
                onClick={() => setActiveModule('advanced')}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                  activeModule === 'advanced'
                    ? 'bg-[#182238] text-cyan-300 border border-blue-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-[#0F172A]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Cpu className="w-4 h-4 text-amber-400" />
                  <span>高级设置</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">API & 引擎</span>
              </button>
            </div>
          </div>

          {/* Prototype Reference Box */}
          <div className="p-3 rounded-2xl bg-[#0F172A] border border-[#1E293B] space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>原型系统镜像参考</span>
              <Lock className="w-3 h-3 text-slate-600" />
            </div>
            <img 
              src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=80" 
              alt="Mirror Architecture" 
              className="w-full h-20 object-cover rounded-lg border border-[#1E293B]"
            />
            <p className="text-[10px] text-slate-500 leading-normal">
              对齐 FCS 核心架构 10 号工程模块：完整元数据、世界观约束与跨节点治理论证。
            </p>
          </div>
        </aside>

        {/* RIGHT SETTINGS FORM CONTENT */}
        <div className="flex-1 p-6 overflow-y-auto custom-scrollbar space-y-6">
          
          {/* SECTION 1: BASIC INFORMATION */}
          <div className="p-6 rounded-2xl bg-[#0F172A] border border-[#1E293B] space-y-5">
            <div className="flex items-center justify-between border-b border-[#1E293B] pb-3">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-blue-400" />
                <h2 className="text-sm font-bold text-white">项目基本信息 · Basic Information</h2>
              </div>
              <span className="text-[11px] text-slate-500 font-mono">最后同步时间: 10 分钟前</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
              
              {/* Project Title */}
              <div className="space-y-1.5">
                <label className="text-slate-300 font-medium flex items-center justify-between">
                  <span>项目名称 (Project Title)</span>
                  <span className="text-[10px] text-rose-400 font-mono">必填</span>
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#0A0F1D] border border-[#1E293B] text-slate-200 focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Tags */}
              <div className="space-y-1.5">
                <label className="text-slate-300 font-medium flex items-center justify-between">
                  <span>项目题材与标签 (Genre & Tags)</span>
                  <span className="text-[10px] text-slate-500 font-mono">最多 8 个</span>
                </label>
                <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-[#0A0F1D] border border-[#1E293B] min-h-[38px]">
                  <span className="px-2 py-0.5 rounded-lg bg-blue-950/80 text-blue-300 border border-blue-800/40 text-[11px]">
                    东方科幻 ✕
                  </span>
                  <span className="px-2 py-0.5 rounded-lg bg-purple-950/80 text-purple-300 border border-purple-800/40 text-[11px]">
                    修仙星际 ✕
                  </span>
                  <span className="px-2 py-0.5 rounded-lg bg-cyan-950/80 text-cyan-300 border border-cyan-800/40 text-[11px]">
                    主线群像 ✕
                  </span>
                  <button className="text-[11px] text-slate-500 hover:text-cyan-300 ml-1">
                    + 添加标签
                  </button>
                </div>
              </div>

            </div>

            {/* Synopsis */}
            <div className="space-y-1.5 text-xs">
              <label className="text-slate-300 font-medium flex items-center justify-between">
                <span>项目概述与宏观设定 (Project Synopsis)</span>
                <span className="text-[10px] text-slate-500 font-mono">用于驱动 Agent 世界观推演引擎</span>
              </label>
              <textarea
                rows={3}
                defaultValue="一段关于星空与梦想的故事，融合古典仙侠与赛博深空重霄城，讲述巡天卫与九星天网的宿命抗争。苏明月持古玉璇玑勘破星际天道，与阵修技术官林陌一同跨越第七象限裂隙……"
                className="w-full px-3 py-2 rounded-xl bg-[#0A0F1D] border border-[#1E293B] text-slate-200 focus:outline-none focus:border-blue-500 leading-relaxed"
              />
            </div>

            {/* Cover Art Preview */}
            <div className="space-y-2 text-xs">
              <label className="text-slate-300 font-medium">封面图片与视觉资产 (Cover Art Preview)</label>
              <div className="p-4 rounded-xl bg-[#0A0F1D] border border-[#1E293B] flex flex-col sm:flex-row items-center gap-5">
                <div className="relative w-48 h-28 rounded-lg overflow-hidden border border-[#1E293B] flex-shrink-0 group">
                  <img
                    src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600&auto=format&fit=crop&q=80"
                    alt="Starry Sea Covenant Cover"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <span className="absolute bottom-1 right-1 text-[9px] font-mono px-1.5 py-0.2 rounded bg-black/70 text-slate-300">
                    16:9 HD
                  </span>
                </div>

                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white font-mono">starry_sea_covenant_cover_v3.webp</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/40">主视觉已锁定</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    建议分辨率 1920x1080px 或 3840x2160px，支持 WebP、PNG、TIFF 格式，将同步映射至发布平台及多端卡片。
                  </p>
                  <div className="flex items-center gap-2 pt-1">
                    <button className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#182238] border border-[#1E293B] text-slate-300 hover:text-white text-xs">
                      <ImageIcon className="w-3.5 h-3.5" />
                      <span>更换图片</span>
                    </button>
                    <button 
                      onClick={() => onNavigate('03-ai-agent')}
                      className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-950/60 border border-purple-800/40 text-purple-300 hover:bg-purple-900/60 text-xs"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>AI 辅助重绘封面</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Target Words & Pacing */}
            <div className="space-y-2.5 text-xs font-mono pt-2 border-t border-[#1E293B]">
              <div className="flex items-center justify-between">
                <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>当前篇幅与字数目标 (Target Word Count & Pacing)</span>
                </span>
                <span className="text-slate-400">
                  目标: <strong className="text-white">600,000 字</strong> | 已完成: <strong className="text-cyan-300">58,400 字 (进度 9.7%)</strong>
                </span>
              </div>
              <div className="h-2 w-full bg-[#0A0F1D] rounded-full overflow-hidden border border-[#1E293B]">
                <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" style={{ width: '9.7%' }} />
              </div>
              <div className="grid grid-cols-3 gap-3 pt-1 text-slate-400 text-[11px]">
                <div className="p-2.5 rounded-lg bg-[#0A0F1D] border border-[#1E293B]">
                  <span className="text-slate-500 text-[10px] block">平均单章字数</span>
                  <span className="text-white font-bold">3,000 字 / 章</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#0A0F1D] border border-[#1E293B]">
                  <span className="text-slate-500 text-[10px] block">规划卷数</span>
                  <span className="text-white font-bold">4 卷 (当前处于第一卷)</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#0A0F1D] border border-[#1E293B]">
                  <span className="text-slate-500 text-[10px] block">预期更新节律</span>
                  <span className="text-white font-bold">双日更 · 6,000 字/周</span>
                </div>
              </div>
            </div>

          </div>

          {/* SECTION 2: CREATIVE RULES & CONSTRAINTS */}
          <div className="p-6 rounded-2xl bg-[#0F172A] border border-[#1E293B] space-y-4">
            <div className="flex items-center justify-between border-b border-[#1E293B] pb-3">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-purple-400" />
                <h2 className="text-sm font-bold text-white">创作规则与风格偏好 · Creative Rules & Constraints</h2>
              </div>
              <span className="text-[11px] text-emerald-400 font-mono">规则引擎已挂载</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
              
              {/* Narrative Tone */}
              <div className="space-y-1.5">
                <label className="text-slate-300 font-medium flex items-center justify-between">
                  <span>叙事基调 (Narrative Tone)</span>
                  <span className="text-[10px] text-slate-500 font-mono">风格矩阵</span>
                </label>
                <div className="relative">
                  <select
                    value={narrativeTone}
                    onChange={(e) => setNarrativeTone(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#0A0F1D] border border-[#1E293B] text-cyan-300 focus:outline-none focus:border-blue-500 appearance-none font-medium"
                  >
                    <option value="cyber_taoist">中式仙侠 · 冷峻科技 (Cyber-Taoist Cold Irony)</option>
                    <option value="classic_xianxia">古典缥缈 · 传统修仙 (Traditional Ethereal)</option>
                    <option value="hard_scifi">硬核星际 · 战力推演 (Hard Sci-Fi Strategy)</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-2.5 pointer-events-none" />
                </div>
                <p className="text-[11px] text-slate-500 leading-normal">
                  强化术数推演与墨色留白，克制使用流行口语与突兀修辞。
                </p>
              </div>

              {/* POV */}
              <div className="space-y-1.5">
                <label className="text-slate-300 font-medium flex items-center justify-between">
                  <span>视角限制 (POV Constraint)</span>
                  <span className="text-[10px] text-slate-500 font-mono">POV 模型</span>
                </label>
                <div className="p-2 rounded-xl bg-[#0A0F1D] border border-[#1E293B] flex items-center justify-between">
                  <span className="text-slate-200 font-medium">第三人称全知主视角 (聚焦苏明月与林陌)</span>
                  <Lock className="w-3.5 h-3.5 text-slate-500" />
                </div>
                <p className="text-[11px] text-slate-500 leading-normal">
                  严禁在单章内切换超过 2 次叙事视点，非主视角章节需显著标示。
                </p>
              </div>

            </div>

            <div className="p-3 rounded-xl bg-[#0A0F1D] border border-[#1E293B] text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>每一项标记为「关键悬念」的图谱节点，在跨入第二卷前必须关联验证线索。</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>实时扫描违规词、历史涉敏及宗教隐喻，保障各发布渠道零驳回。</span>
              </div>
            </div>
          </div>

          {/* SECTION 3: COLLABORATION & SYNC */}
          <div className="p-6 rounded-2xl bg-[#0F172A] border border-[#1E293B] space-y-4">
            <div className="flex items-center justify-between border-b border-[#1E293B] pb-3">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-400" />
                <h2 className="text-sm font-bold text-white">协同网络与权限防护 · Collaboration & Sync</h2>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-blue-950 text-blue-300 font-mono">
                CRDT WebRTC ACTIVATED
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-3.5 rounded-xl bg-[#0A0F1D] border border-[#1E293B] space-y-1">
                <div className="text-slate-400">项目公开范围</div>
                <div className="text-white font-bold text-sm">团队私有</div>
                <p className="text-[10px] text-slate-500 font-sans leading-normal">
                  仅授权的 5 名创作者与顾问可见，关闭公开只读广场。
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0A0F1D] border border-[#1E293B] space-y-1">
                <div className="text-slate-400">图谱编辑锁</div>
                <div className="text-white font-bold text-sm">主编签名保护</div>
                <p className="text-[10px] text-slate-500 font-sans leading-normal">
                  分支合并必须经过项目主理人任舟确认，防止人设崩塌。
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0A0F1D] border border-[#1E293B] space-y-1">
                <div className="text-slate-400">自动同步频率</div>
                <div className="text-cyan-300 font-bold text-sm">即时增量 (3s)</div>
                <p className="text-[10px] text-slate-500 font-sans leading-normal">
                  毫秒级无损合并，自动打点生成时光回溯差异切片。
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
                <CheckCircle2 className="w-4 h-4" />
                <span>所有修改将写入项目根文件并在 3 秒内全团队推送生效</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-white">
                  放弃修改
                </button>
                <button 
                  onClick={handleSave}
                  className="px-4 py-1.5 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white text-xs font-semibold shadow-md"
                >
                  保存并生效配置
                </button>
              </div>
            </div>
          </div>

          {/* DANGER ZONE */}
          <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-900/40 flex items-center justify-between text-xs">
            <div className="space-y-0.5">
              <div className="font-bold text-rose-400 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" />
                <span>危险区域 · DANGER ZONE</span>
              </div>
              <p className="text-slate-400 text-[11px]">
                归档后该项目将设为只读，删除将永久抹除版本树历史与所有快照。
              </p>
            </div>
            <button className="px-3 py-1.5 rounded-lg border border-rose-800/60 text-rose-300 hover:bg-rose-950/60 transition-colors font-mono">
              归档或彻底删除项目...
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
