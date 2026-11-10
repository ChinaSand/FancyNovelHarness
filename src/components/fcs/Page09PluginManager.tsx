import React, { useState } from 'react';
import { FcsPageId } from '../../types/fcs';
import { 
  Puzzle, 
  Code2, 
  Upload, 
  Search, 
  Settings2, 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  ArrowRight, 
  HardDrive, 
  Download,
  BookOpen,
  Sliders,
  RefreshCw,
  SlidersHorizontal
} from 'lucide-react';

interface Page09PluginManagerProps {
  onNavigate: (page: FcsPageId) => void;
}

export const Page09PluginManager: React.FC<Page09PluginManagerProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'installed' | 'marketplace'>('installed');
  const [pluginsState, setPluginsState] = useState({
    graphVisualizer: true,
    personaGen: true,
    worldForge: true,
    lexicalStylist: true,
  });

  const togglePlugin = (key: keyof typeof pluginsState) => {
    setPluginsState((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-[#0A0F1D] text-[#E2E8F0] overflow-hidden">
      
      {/* 1. TOP HEADER BANNER */}
      <div className="border-b border-[#1E293B] bg-[#0F172A]/80 backdrop-blur-sm p-4 z-10 flex-shrink-0">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-base font-bold text-white flex items-center gap-2">
                <span>9. 插件生态 · Plugin Manager</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-purple-950 text-purple-300 border border-purple-800/60 uppercase">
                  ECOSYSTEM V2.4
                </span>
              </h1>
              <span className="text-xs text-emerald-400 font-mono flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>已启用 4 个工业级核心插件 · 运行时引擎正常</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
              基于 Wasm 微核沙箱架构与东方叙事逻辑引擎，提供动态图谱渲染、心智罗盘推演、宏观法则铸炼与古典文风润色。
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A0F1D] border border-[#1E293B] hover:bg-[#1E293B] text-slate-300 text-xs font-medium transition-colors">
              <Code2 className="w-3.5 h-3.5 text-blue-400" />
              <span>开发自定义插件 (SDK / API)</span>
            </button>
            <button className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#182238] border border-cyan-500/30 text-cyan-300 hover:bg-[#1E293B] text-xs font-semibold shadow-md transition-all">
              <Upload className="w-3.5 h-3.5 text-cyan-400" />
              <span>本地离线包导入 (.fcs-pkg)</span>
            </button>
          </div>
        </div>

        {/* Tabs & Search */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('installed')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium transition-all ${
                activeTab === 'installed'
                  ? 'bg-[#2563EB] text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-300" />
              <span>已安装 (Installed - 4)</span>
            </button>
            <button
              onClick={() => setActiveTab('marketplace')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium transition-all ${
                activeTab === 'marketplace'
                  ? 'bg-[#2563EB] text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <HardDrive className="w-3.5 h-3.5 text-slate-400" />
              <span>插件市场 (Marketplace - 28)</span>
              <span className="text-[10px] px-1 rounded bg-rose-950 text-rose-300 border border-rose-800/40">HOT</span>
            </button>
          </div>

          <div className="relative w-72">
            <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-500" />
            <input
              type="text"
              placeholder="过滤已安装插件或钩子名称... (⌘K)"
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-[#0A0F1D] border border-[#1E293B] text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>
        </div>
      </div>

      {/* 2. MAIN TWO-COLUMN CONTENT */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* LEFT COLUMN: INSTALLED PLUGINS LIST */}
        <div className="flex-1 p-5 overflow-y-auto custom-scrollbar space-y-4">
          
          {/* Plugin 1: Novel Graph 可视化增强器 */}
          <div className="p-5 rounded-2xl bg-[#0F172A] border border-[#1E293B] hover:border-slate-600 transition-all space-y-3">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-blue-950/80 border border-blue-600/40 flex items-center justify-center text-cyan-400 shadow-lg shadow-blue-900/30 flex-shrink-0">
                  <Puzzle className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-sm font-bold text-white">Novel Graph 可视化增强器</h2>
                    <span className="text-[11px] font-mono text-slate-400">(Graph Visualizer Pro)</span>
                    <span className="text-[10px] font-mono text-cyan-400">v1.2.0</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    官方核心 · 叙事拓扑几何与因果流线光晕引擎
                  </div>
                </div>
              </div>

              {/* Toggle Switch */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-emerald-400 font-mono">已启用</span>
                <button
                  onClick={() => togglePlugin('graphVisualizer')}
                  className={`w-11 h-6 rounded-full transition-colors relative p-0.5 ${
                    pluginsState.graphVisualizer ? 'bg-emerald-500' : 'bg-slate-700'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform ${
                    pluginsState.graphVisualizer ? 'translate-x-5' : 'translate-x-0'
                  }`} />
                </button>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              提供三维动态力导向图谱、实体引力聚类算法、伏笔因果路径溯源光效渲染。自动辨析多线故事收束点与叙事矛盾裂隙，以东方水墨晕染态映射角色阵营。
            </p>

            <div className="grid grid-cols-3 gap-3 p-3 rounded-xl bg-[#0A0F1D] border border-[#1E293B] text-xs font-mono">
              <div>
                <span className="text-slate-500 text-[10px] block">内存占用 & 帧率</span>
                <span className="font-semibold text-white">42 MB</span>
                <span className="text-emerald-400 text-[10px] ml-1.5">60 FPS 稳定</span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] block">渲染延迟</span>
                <span className="font-semibold text-white">2.1 ms</span>
                <span className="text-blue-400 text-[10px] ml-1.5">WebGPU 硬件加速</span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] block">关联绑定模块</span>
                <span className="text-slate-300">叙事图谱 · 时空线 · 冲突树</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <div className="flex items-center gap-2 text-slate-400">
                <button className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#182238] border border-[#1E293B] hover:text-white">
                  <Settings2 className="w-3.5 h-3.5" />
                  <span>设置配置 (Config)</span>
                </button>
                <button className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#182238] border border-[#1E293B] hover:text-white">
                  <span>快捷指令绑定</span>
                </button>
                <button className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#182238] border border-[#1E293B] hover:text-white">
                  <RefreshCw className="w-3 h-3" />
                  <span>检查更新</span>
                </button>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>官方签名已校验</span>
              </div>
            </div>
          </div>

          {/* Plugin 2: 角色生成助手 */}
          <div className="p-5 rounded-2xl bg-[#0F172A] border border-[#1E293B] hover:border-slate-600 transition-all space-y-3">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-rose-950/80 border border-rose-600/40 flex items-center justify-center text-rose-400 shadow-lg shadow-rose-900/30 flex-shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-sm font-bold text-white">角色生成助手</h2>
                    <span className="text-[11px] font-mono text-slate-400">(Character Persona Gen)</span>
                    <span className="text-[10px] font-mono text-rose-400">v1.1.3</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    心智罗盘 · 动机动力学 · 情绪对立因果网络
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-emerald-400 font-mono">已启用</span>
                <button
                  onClick={() => togglePlugin('personaGen')}
                  className={`w-11 h-6 rounded-full transition-colors relative p-0.5 ${
                    pluginsState.personaGen ? 'bg-emerald-500' : 'bg-slate-700'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform ${
                    pluginsState.personaGen ? 'translate-x-5' : 'translate-x-0'
                  }`} />
                </button>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              基于大模型微调的立体角色心智罗盘构建器，自动推演执念动机、性格维度雷达图与人际羁绊网络。支持在对话冲突时动态输出符合三观的潜台词与微表情预测。
            </p>

            <div className="grid grid-cols-3 gap-3 p-3 rounded-xl bg-[#0A0F1D] border border-[#1E293B] text-xs font-mono">
              <div>
                <span className="text-slate-500 text-[10px] block">调用频次</span>
                <span className="font-semibold text-white">1,280 次/周</span>
                <span className="text-emerald-400 text-[10px] ml-1.5">高活跃</span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] block">平均推理延迟</span>
                <span className="font-semibold text-white">0.82 s</span>
                <span className="text-cyan-400 text-[10px] ml-1.5">流式就绪</span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] block">关联绑定模块</span>
                <span className="text-slate-300">创作助手 · 实体库 · 潜意识日志</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <div className="flex items-center gap-2 text-slate-400">
                <button className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#182238] border border-[#1E293B] hover:text-white">
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>配置提示词 (Prompt Schema)</span>
                </button>
                <button className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#182238] border border-[#1E293B] hover:text-white">
                  <span>设定集接入</span>
                </button>
                <button className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#182238] border border-[#1E293B] hover:text-white">
                  <span>降级离线模式</span>
                </button>
              </div>
              <div className="text-[11px] text-slate-500 font-mono">
                已挂接本地 Ollama / 云端模型
              </div>
            </div>
          </div>

          {/* Plugin 3: 世界观生成器 */}
          <div className="p-5 rounded-2xl bg-[#0F172A] border border-[#1E293B] hover:border-slate-600 transition-all space-y-3">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-emerald-950/80 border border-emerald-600/40 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-900/30 flex-shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-sm font-bold text-white">世界观生成器</h2>
                    <span className="text-[11px] font-mono text-slate-400">(World Lore Forge)</span>
                    <span className="text-[10px] font-mono text-emerald-400">v1.0.5</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    宏观物理约束 · 宗门层级演化 · 天道因果跃迁
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-emerald-400 font-mono">已启用</span>
                <button
                  onClick={() => togglePlugin('worldForge')}
                  className={`w-11 h-6 rounded-full transition-colors relative p-0.5 ${
                    pluginsState.worldForge ? 'bg-emerald-500' : 'bg-slate-700'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform ${
                    pluginsState.worldForge ? 'translate-x-5' : 'translate-x-0'
                  }`} />
                </button>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              一键生成具有严密物理法则、宗门势力层级、修炼体系与境界跃迁规则的完整宏观架空世界观。
            </p>

            <div className="grid grid-cols-3 gap-3 p-3 rounded-xl bg-[#0A0F1D] border border-[#1E293B] text-xs font-mono">
              <div>
                <span className="text-slate-500 text-[10px] block">实体库覆盖</span>
                <span className="font-semibold text-white">480+ 条目</span>
                <span className="text-cyan-400 text-[10px] ml-1.5">已结构化</span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] block">规则冲突校验率</span>
                <span className="font-semibold text-emerald-400">99.8%</span>
                <span className="text-slate-500 text-[10px] ml-1.5">无悖论</span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] block">关联绑定模块</span>
                <span className="text-slate-300">地理天球仪 · 宗门法度表</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <div className="flex items-center gap-2 text-slate-400">
                <button className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#182238] border border-[#1E293B] hover:text-white">
                  <span>法则树管理 (Law Tree)</span>
                </button>
                <button className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#182238] border border-[#1E293B] hover:text-white">
                  <Download className="w-3.5 h-3.5" />
                  <span>导出为百科 (.wikidoc)</span>
                </button>
              </div>
              <div className="text-[11px] text-slate-500 font-mono">
                支持 Markdown / 知识图谱双向索引
              </div>
            </div>
          </div>

          {/* Plugin 4: 风格润色工具 */}
          <div className="p-5 rounded-2xl bg-[#0F172A] border border-[#1E293B] hover:border-slate-600 transition-all space-y-3">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-amber-950/80 border border-amber-600/40 flex items-center justify-center text-amber-400 shadow-lg shadow-amber-900/30 flex-shrink-0">
                  <Sliders className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-sm font-bold text-white">风格润色工具</h2>
                    <span className="text-[11px] font-mono text-slate-400">(Lexical Stylist & Voice Tuner)</span>
                    <span className="text-[10px] font-mono text-amber-400">v1.0.2</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    中式仙侠 · 赛博古典辞藻调教 · 意境声调平仄
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-emerald-400 font-mono">已启用</span>
                <button
                  onClick={() => togglePlugin('lexicalStylist')}
                  className={`w-11 h-6 rounded-full transition-colors relative p-0.5 ${
                    pluginsState.lexicalStylist ? 'bg-emerald-500' : 'bg-slate-700'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform ${
                    pluginsState.lexicalStylist ? 'translate-x-5' : 'translate-x-0'
                  }`} />
                </button>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              针对中式仙侠、赛博古典文风的辞藻调教引擎，自动检测并消除现代口语词，注入古雅音律与意境对仗。提供冷峻修仙、狂澜科幻等五重文气温控滑块。
            </p>

            <div className="grid grid-cols-3 gap-3 p-3 rounded-xl bg-[#0A0F1D] border border-[#1E293B] text-xs font-mono">
              <div>
                <span className="text-slate-500 text-[10px] block">已润色文字总量</span>
                <span className="font-semibold text-white">14.8 万字</span>
                <span className="text-emerald-400 text-[10px] ml-1.5">高纯净度</span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] block">违禁词/破梗词库</span>
                <span className="font-semibold text-slate-200">每日自动同步</span>
                <span className="text-slate-500 text-[10px] ml-1.5">v24.4.1</span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] block">关联绑定模块</span>
                <span className="text-slate-300">正文编辑器 · 批注审阅流</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <div className="flex items-center gap-2 text-slate-400">
                <button className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#182238] border border-[#1E293B] hover:text-white">
                  <span>词库映射表 (Thesaurus)</span>
                </button>
                <button className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#182238] border border-[#1E293B] hover:text-white">
                  <span>语气温度调谐</span>
                </button>
              </div>
              <div className="text-[11px] text-slate-500 font-mono">
                已加载《文心雕龙》与全唐五代音律索引
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: MARKETPLACE PROMO & WASM SANDBOX */}
        <aside className="w-84 border-l border-[#1E293B] bg-[#0A0F1D] flex flex-col justify-between overflow-y-auto custom-scrollbar flex-shrink-0">
          <div className="p-4 space-y-4">
            
            {/* Promo Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-b from-[#1E1B4B]/70 to-[#0F172A] border border-blue-500/30 space-y-3 relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-cyan-300 shadow-md">
                <Puzzle className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">ECOSYSTEM MARKETPLACE</div>
                <h3 className="text-sm font-bold text-white leading-snug">
                  发现更多插件 · 扩展你的创作能力
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                接入社区与官方认证的 100+ 专属扩展，包括分镜漫画生成、起点/晋江格式排版导出、全书配音音色克隆等创作利器。
              </p>
              <button className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white text-xs font-semibold shadow-md shadow-blue-500/20 active:scale-95 transition-all">
                <span>前往市场 (Browse Marketplace)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono pt-1">
                <span>每周精选更新</span>
                <span>已认证安全沙箱</span>
              </div>
            </div>

            {/* Wasm Sandbox Monitor */}
            <div className="p-4 rounded-2xl bg-[#0F172A] border border-[#1E293B] space-y-3">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 font-bold text-white">
                  <Cpu className="w-4 h-4 text-emerald-400" />
                  <span>沙箱运行环境与资源配额</span>
                </div>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/40 font-mono">
                  WASM READY
                </span>
              </div>

              <div className="space-y-1 text-xs font-mono">
                <div className="flex justify-between text-slate-300 text-[11px]">
                  <span>内存配额利用率 (78MB / 256MB)</span>
                  <span className="text-emerald-400 font-bold">30.4%</span>
                </div>
                <div className="h-1.5 w-full bg-[#0A0F1D] rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: '30.4%' }} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-1">
                <div className="p-2 rounded-lg bg-[#0A0F1D] border border-[#1E293B]">
                  <span className="text-[10px] text-slate-500 block">沙箱隔离度</span>
                  <span className="text-emerald-400 font-bold text-xs">100% 物理隔离</span>
                </div>
                <div className="p-2 rounded-lg bg-[#0A0F1D] border border-[#1E293B]">
                  <span className="text-[10px] text-slate-500 block">活跃事件钩子</span>
                  <span className="text-cyan-400 font-bold text-xs">3 个监听中</span>
                </div>
              </div>
            </div>

            {/* Dev Quicklinks */}
            <div className="space-y-1.5 text-xs">
              <div className="text-[11px] text-slate-500 font-mono px-2">开发者生态快捷入口</div>
              <button className="w-full flex items-center justify-between p-2.5 rounded-xl bg-[#0F172A] border border-[#1E293B] text-slate-300 hover:text-white hover:border-slate-600 transition-colors">
                <span className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-blue-400" />
                  <span>FCS Plugin Developer Kit</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </button>
              <button className="w-full flex items-center justify-between p-2.5 rounded-xl bg-[#0F172A] border border-[#1E293B] text-slate-300 hover:text-white hover:border-slate-600 transition-colors">
                <span className="flex items-center gap-2">
                  <HardDrive className="w-4 h-4 text-purple-400" />
                  <span>API Key 授权与安全凭据</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </button>
            </div>

            {/* Marketplace Recommendations */}
            <div className="space-y-2 pt-2">
              <div className="text-[11px] text-slate-400 font-mono flex items-center justify-between">
                <span>市场热门推荐</span>
                <button className="text-cyan-400 hover:text-cyan-300">查看全部</button>
              </div>

              <div className="p-2.5 rounded-xl bg-[#0F172A] border border-[#1E293B] flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">EPUB 精排出版大师</div>
                  <div className="text-[10px] text-slate-500 font-mono">评分 4.9 · 12k 下载</div>
                </div>
                <button className="px-2.5 py-1 rounded-lg bg-[#182238] border border-cyan-500/30 text-cyan-300 text-xs font-mono hover:bg-[#1E293B]">
                  获取
                </button>
              </div>

              <div className="p-2.5 rounded-xl bg-[#0F172A] border border-[#1E293B] flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">战力数值天平模拟器</div>
                  <div className="text-[10px] text-slate-500 font-mono">评分 4.8 · 8.4k 下载</div>
                </div>
                <button className="px-2.5 py-1 rounded-lg bg-[#182238] border border-cyan-500/30 text-cyan-300 text-xs font-mono hover:bg-[#1E293B]">
                  获取
                </button>
              </div>

              <div className="p-2.5 rounded-xl bg-[#0F172A] border border-[#1E293B] flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">声波对白试听</div>
                  <div className="text-[10px] text-slate-500 font-mono">评分 5.0 · 5.1k 下载</div>
                </div>
                <button className="px-2.5 py-1 rounded-lg bg-[#182238] border border-cyan-500/30 text-cyan-300 text-xs font-mono hover:bg-[#1E293B]">
                  获取
                </button>
              </div>
            </div>

          </div>
        </aside>

      </div>

      {/* 3. BOTTOM PLUGIN ENGINE STATUS BAR */}
      <div className="h-8 border-t border-[#1E293B] bg-[#0A0F1D] px-5 flex items-center justify-between text-[11px] font-mono text-slate-400 flex-shrink-0">
        <div className="flex items-center gap-3">
          <span className="text-emerald-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>插件引擎 v0.1-pro 运行中</span>
          </span>
          <span className="text-slate-600">|</span>
          <span>4 个核心工业级插件已就绪</span>
          <span className="text-slate-600">|</span>
          <span>沙箱 IPC 延迟: 0.12ms</span>
        </div>
        <div className="text-slate-500">
          快捷唤起热键: <span className="px-1.5 py-0.5 rounded bg-[#182238] text-slate-300">⌥ + P</span> 唤起插件浮窗
        </div>
      </div>

    </div>
  );
};
