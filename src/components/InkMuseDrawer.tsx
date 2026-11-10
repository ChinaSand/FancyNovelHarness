import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  Copy, 
  Check, 
  Flame, 
  Feather, 
  Cpu, 
  Scroll, 
  RefreshCw,
  PlusCircle,
  FileCode
} from 'lucide-react';
import { YinzhangStamp } from './YinzhangStamp';

interface InkMuseDrawerProps {
  onInsertToManuscript?: (text: string) => void;
  isDarkMode: boolean;
}

export const InkMuseDrawer: React.FC<InkMuseDrawerProps> = ({
  onInsertToManuscript,
  isDarkMode,
}) => {
  const [activePreset, setActivePreset] = useState<'style' | 'twist' | 'relic' | 'dialogue'>('style');
  const [customInput, setCustomInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Pre-generated high-aesthetic results for each preset
  const [outputs, setOutputs] = useState<Array<{ id: string; title: string; content: string; tags: string[] }>>([
    {
      id: 'out-1',
      title: '文风炼境 · 碧落雨夜',
      content: '雨过天青，云破处非是暖阳，而是巡天巨舰那冰冷刺目的三千道淡蓝离子航标。陈星衍收拢背后那一双以铁力木与罗纹宣纸精编的雁翎机翼，每寸榫头在风切变中轻颤，如同古刹檐下撞响的残钟。在他腕间，六十四枚微型青铜簧片正以绝律自鸣——神机代天道，唯墨气不可欺。',
      tags: ['宋代词韵', '榫卯机翼', '离子天港'],
    },
    {
      id: 'out-2',
      title: '伏线推演 · 太微同调之劫',
      content: '【反转推演】：谢寒衣脑后植入的“太微霜刃神经晶芯”，其核心底层汇编代码，竟是三千年前墨家始祖为抵御智能大湮灭而自毁的「兼爱核心」。天阙机枢阁所谓的天道算法，不过是将古圣先贤的遗志抹除人情后伪造的囚笼。',
      tags: ['上古密信', '始祖真相', '阵营逆转'],
    },
  ]);

  const presets = [
    { id: 'style', label: '文风炼境', icon: <Feather className="w-4 h-4 text-[#2563eb]" />, desc: '词话意境与赛博冷峻熔炼' },
    { id: 'twist', label: '伏线推演', icon: <Flame className="w-4 h-4 text-[#e11d48]" />, desc: '天人道法与阵营冲突反转' },
    { id: 'relic', label: '机巧法宝', icon: <Cpu className="w-4 h-4 text-[#0d9488]" />, desc: '青瓷榫卯与超导奇物炼成' },
    { id: 'dialogue', label: '对白机锋', icon: <Scroll className="w-4 h-4 text-purple-600" />, desc: '兼爱墨侠与太微巡天论道' },
  ];

  const quickChips = [
    '加入榫卯咬合细节',
    '渲染青瓷冷光与细雨',
    '强化道法与算力对冲',
    '以宋词小令起势',
    '加入天权神机全息压迫',
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      let newEntry: { id: string; title: string; content: string; tags: string[] } = {
        id: `gen-${Date.now()}`,
        title: '',
        content: '',
        tags: [],
      };

      if (activePreset === 'style') {
        newEntry = {
          id: `gen-${Date.now()}`,
          title: '文风炼境 · 剑影琴鸣',
          content: '剑身不灌铅铁，唯余八面青瓷冷冽开片。出鞘之时，纳米玻色凝聚态在夜雨中震颤如焦尾七弦之清音，十丈朱雀青石板尽凝寒霜。谢寒衣眼眸未眨，神机罗盘已在视界中央排定三万六千条杀伐天轨。',
          tags: ['青瓷剑意', '算力罗盘', '焦尾余音'],
        };
      } else if (activePreset === 'twist') {
        newEntry = {
          id: `gen-${Date.now()}`,
          title: '伏线推演 · 月轨绝响',
          content: '【剧作转折点】：在广寒残月废墟之上，巡天卫星不仅捕捉到了三千年前仙界失控的日志，更发现九霄大陆的天地引力天轨正在以每日三寸的速率被抽取回天阙顶端——整个浮空帝国，实为一座正在吸食人间气运以启动跨维度逃逸的星际方舟！',
          tags: ['引力抽取', '逃逸方舟', '九霄危局'],
        };
      } else if (activePreset === 'relic') {
        newEntry = {
          id: `gen-${Date.now()}`,
          title: '天工奇物 · 纯阳八卦聚光镜「离火九歌」',
          content: '采南海万丈深海沉香木为架，镶嵌八百六十枚硅光晶体微棱镜。借天道八卦离位引燃恒星风暴能量，折射出的不仅是光柱，更是一束能穿透碳基与硅基防御的真言激光矩阵。\n\n铭文：“离南夏，火之离，聚太虚光芒以涤世间埃尘。”',
          tags: ['八卦硅光', '真言激光', '深海沉香'],
        };
      } else {
        newEntry = {
          id: `gen-${Date.now()}`,
          title: '对白机锋 · 千灯街对峙',
          content: '谢寒衣：“天阙算力九万兆，凡人之命，在神机台不过是微秒间的浮点残数。你凭一手凡木榫卯，能撑得过几道巡天金雷？”\n\n陈星衍按刀而立，眼眸倒映千家灯火：“浮点虽小，积千万则成人间；天道纵高，忘却生民便是废铁。谢御史，你的剑比冰冷，可你胸口那枚赤霄芯……此刻在为谁而鸣？”',
          tags: ['人间对决', '道法之辩', '千灯对峙'],
        };
      }

      setOutputs((prev) => [newEntry, ...prev]);
      setIsGenerating(false);
      setCustomInput('');
    }, 600);
  };

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className={`w-full h-[calc(100vh-4rem)] overflow-y-auto p-6 lg:p-8 select-none ${
      isDarkMode ? 'bg-[#0b0f19] text-slate-100' : 'bg-[#faf8ff] text-slate-900'
    }`}>
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className="font-serif font-black text-2xl tracking-wide">
                墨灵天枢 · 智鉴研推
              </h2>
              <YinzhangStamp text="灵鉴" size="sm" variant="vermilion" />
            </div>
            <p className="text-xs font-serif text-slate-500 dark:text-slate-400">
              Cybernetic Ink Muse AI • 融合古典词赋留白与前沿科幻算法的灵思推演仪
            </p>
          </div>

          <span className="text-xs font-mono text-slate-400">
            算力信道: 东方未来主义专属推演模型
          </span>
        </div>

        {/* Preset Mode Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {presets.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePreset(p.id as any)}
              className={`p-3.5 rounded-2xl border text-left transition-all ${
                activePreset === p.id
                  ? 'ring-2 ring-[#2563eb] bg-blue-50/70 dark:bg-blue-950/40 border-[#2563eb] shadow-md shadow-blue-500/10'
                  : isDarkMode
                  ? 'bg-[#0f172a]/80 border-slate-800 hover:border-slate-700'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-2xs'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                {p.icon}
                <span className="font-serif font-bold text-sm text-slate-900 dark:text-slate-100">
                  {p.label}
                </span>
              </div>
              <p className="text-[11px] font-sans text-slate-500 line-clamp-1">
                {p.desc}
              </p>
            </button>
          ))}
        </div>

        {/* Prompt Input Box */}
        <div className={`p-5 rounded-2xl border space-y-3 ${
          isDarkMode ? 'bg-[#0f172a]/90 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
        }`}>
          <div className="flex items-center justify-between text-xs font-serif">
            <span className="text-slate-600 dark:text-slate-300 font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#2563eb]" />
              设定研推命题或选入场景语料 (Prompt & Context):
            </span>
            <span className="text-slate-400 font-mono text-[11px]">
              支持将生成结果一键填入长卷原稿
            </span>
          </div>

          <textarea
            rows={3}
            placeholder={
              activePreset === 'style'
                ? '例如：描摹陈星衍在雨夜工坊初见青瓷机兵开片的惊艳感，突出高岭土釉色与纳米金线...'
                : activePreset === 'twist'
                ? '例如：为谢寒衣设计一次信念动摇的关键线索，与当年天阙清除其父母记忆有关...'
                : activePreset === 'relic'
                ? '例如：设计一件以古典折扇为外型的全息矩阵防御法宝...'
                : '例如：模拟苏听晚在万灯中元之夜劝说谢寒衣放下杀念的琴理对白...'
            }
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            className={`w-full p-3 text-xs leading-relaxed rounded-xl border font-serif focus:outline-none focus:ring-2 focus:ring-[#2563eb] ${
              isDarkMode ? 'bg-slate-800/80 border-slate-700 text-slate-100' : 'bg-slate-50 border-slate-200 text-slate-900'
            }`}
          />

          {/* Quick Filter Chips */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-[11px] font-serif text-slate-400 mr-1">意象引子:</span>
            {quickChips.map((chip) => (
              <button
                key={chip}
                onClick={() => setCustomInput((prev) => prev ? `${prev}，${chip}` : chip)}
                className={`text-[11px] font-serif px-2.5 py-0.5 rounded-full border transition-colors ${
                  isDarkMode 
                    ? 'border-slate-700 bg-slate-800/60 text-slate-300 hover:border-blue-500' 
                    : 'border-slate-200 bg-slate-100/70 text-slate-700 hover:border-blue-500'
                }`}
              >
                +{chip}
              </button>
            ))}
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="flex items-center gap-2 px-5 py-2 text-xs font-serif font-bold bg-[#2563eb] hover:bg-blue-600 active:scale-95 text-white rounded-xl shadow-md shadow-blue-500/20 transition-all disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>墨灵推演中...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>启赋推演</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Results Stream */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif font-bold text-sm text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <Scroll className="w-4 h-4 text-[#2563eb]" />
              推演文萃卷轴 (Generated Lore & Passages)
            </h3>
            <span className="text-[11px] font-mono text-slate-400">
              共 {outputs.length} 条灵光
            </span>
          </div>

          <div className="space-y-4">
            {outputs.map((out, idx) => (
              <div
                key={out.id}
                className={`p-5 rounded-2xl border space-y-3 transition-all ${
                  isDarkMode 
                    ? 'bg-[#0f172a]/90 border-slate-800 hover:border-slate-700' 
                    : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-serif font-black text-sm text-slate-900 dark:text-slate-100">
                      {out.title}
                    </span>
                    <YinzhangStamp text="佳撰" size="sm" variant="vermilion" />
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopy(out.content, idx)}
                      className="flex items-center gap-1 px-2.5 py-1 text-xs font-serif rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
                      title="复制段落"
                    >
                      {copiedIndex === idx ? (
                        <>
                          <Check className="w-3 h-3 text-teal-600" />
                          <span className="text-teal-600">已抄录</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>抄录</span>
                        </>
                      )}
                    </button>

                    {onInsertToManuscript && (
                      <button
                        onClick={() => onInsertToManuscript(out.content)}
                        className="flex items-center gap-1 px-2.5 py-1 text-xs font-serif rounded-lg bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900 text-[#0d9488] hover:bg-teal-100 dark:hover:bg-teal-900 transition-colors"
                        title="将文字填入当前长卷章节"
                      >
                        <PlusCircle className="w-3 h-3" />
                        <span>填入原稿</span>
                      </button>
                    )}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-serif leading-loose whitespace-pre-line">
                  {out.content}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                  {out.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
