import { StoryNode, Character, WorldCodexItem, Chapter, TimelineEvent } from '../types';

export const INITIAL_STORY_NODES: StoryNode[] = [
  {
    id: 'node-1',
    title: '青瓷裂隙 (Celadon Fissure)',
    subtitle: '卷一 · 惊蛰微芒',
    type: 'milestone',
    status: 'completed',
    x: 80,
    y: 160,
    chapterNumber: 1,
    summary: '九霄天港最底层的第七灵脉发生量子溢出，陈星衍在检修太虚青瓷机兵时发现上古封印代码被篡改。',
    tensionLevel: 4,
    characters: ['char-1', 'char-3'],
    location: '云渊第七灵港·机巧工坊',
    factions: ['天阙机枢阁', '墨隐流'],
    connections: ['node-2', 'node-3'],
    wordCountTarget: 4500,
    wordCountActual: 4820,
    isKeyMilestone: true,
  },
  {
    id: 'node-2',
    title: '云海追缉 (Pursuit in Mist)',
    subtitle: '卷一 · 奔雷暗涌',
    type: 'conflict',
    status: 'completed',
    x: 320,
    y: 90,
    chapterNumber: 3,
    summary: '琉璃卫队检测到非受控算法扩散，派出浮空梭于万丈云海间围剿，陈星衍凭借榫卯滑翔翼侥幸脱险。',
    tensionLevel: 7,
    characters: ['char-1', 'char-2'],
    location: '琉璃万重云峡',
    factions: ['琉璃云海司', '天阙机枢阁'],
    connections: ['node-4'],
    wordCountTarget: 5000,
    wordCountActual: 5130,
    isKeyMilestone: false,
  },
  {
    id: 'node-3',
    title: '墨守残卷 (Fragmented Canon)',
    subtitle: '卷一 · 寒泉古经',
    type: 'revelation',
    status: 'completed',
    x: 310,
    y: 280,
    chapterNumber: 5,
    summary: '在沉没的旧世地下回廊深处，苏听晚解密了半卷由量子光丝编织的《墨子五行算经》，揭晓天权神机台的真相。',
    tensionLevel: 5,
    characters: ['char-3', 'char-4'],
    location: '无量藏经地窟',
    factions: ['墨隐流'],
    connections: ['node-4', 'node-5'],
    wordCountTarget: 4800,
    wordCountActual: 4690,
    isKeyMilestone: false,
  },
  {
    id: 'node-4',
    title: '长街斩虚 (Severing the Void)',
    subtitle: '卷二 · 绛雪飞霜',
    type: 'conflict',
    status: 'in_progress',
    x: 580,
    y: 180,
    chapterNumber: 8,
    summary: '中元节灯会，全城霓虹符箓齐亮之时，神机使谢寒衣率三千仿生剑傀现身，以赤霄剑芯封锁虚空天轨。',
    tensionLevel: 9,
    characters: ['char-1', 'char-2', 'char-3'],
    location: '建木下城·千灯朱雀街',
    factions: ['天阙机枢阁', '琉璃云海司', '墨隐流'],
    connections: ['node-6'],
    wordCountTarget: 6000,
    wordCountActual: 3400,
    isKeyMilestone: true,
  },
  {
    id: 'node-5',
    title: '赤霄同调 (Crimson Resonance)',
    subtitle: '卷二 · 剑魄灵犀',
    type: 'character_arc',
    status: 'in_progress',
    x: 560,
    y: 330,
    chapterNumber: 10,
    summary: '谢寒衣因体内的太微算法排斥陷入狂暴，陈星衍动用生父留下的榫卯密钥与其神经元链接，唤醒其尘封记忆。',
    tensionLevel: 6,
    characters: ['char-1', 'char-2'],
    location: '废弃铸剑炉·太虚残井',
    factions: ['天阙机枢阁'],
    connections: ['node-6', 'node-7'],
    wordCountTarget: 5200,
    wordCountActual: 2100,
    isKeyMilestone: false,
  },
  {
    id: 'node-6',
    title: '凌霄飞升逆阵 (Inverted Ascension)',
    subtitle: '卷三 · 乾坤浩劫',
    type: 'world_shift',
    status: 'planned',
    x: 820,
    y: 220,
    chapterNumber: 14,
    summary: '天阙神机台欲将亿万凡人意识压缩为纯净算力以上传星海，众人联手启动墨隐回流矩阵，逆转引力天轨。',
    tensionLevel: 10,
    characters: ['char-1', 'char-2', 'char-3', 'char-4'],
    location: '天权神机台·顶天枢极',
    factions: ['天阙机枢阁', '墨隐流', '琉璃云海司'],
    connections: ['node-8'],
    wordCountTarget: 7500,
    wordCountActual: 0,
    isKeyMilestone: true,
  },
  {
    id: 'node-7',
    title: '太阴遗骨 (Lunar Relic)',
    subtitle: '卷三 · 寒宫绝响',
    type: 'revelation',
    status: 'planned',
    x: 800,
    y: 380,
    chapterNumber: 16,
    summary: '月轨巡天卫星传回古老歌谣，原来所谓的仙界早已在三千年前的智能失控中湮灭，九霄苍穹不过是一场全息囚笼。',
    tensionLevel: 8,
    characters: ['char-3', 'char-4'],
    location: '月海广寒接收站',
    factions: ['墨隐流'],
    connections: ['node-8'],
    wordCountTarget: 5500,
    wordCountActual: 0,
    isKeyMilestone: false,
  },
  {
    id: 'node-8',
    title: '万象归墨 (Universal Ink)',
    subtitle: '卷四 · 大衍终局',
    type: 'milestone',
    status: 'draft',
    x: 1060,
    y: 280,
    chapterNumber: 20,
    summary: '星辰如墨，代码化诗。打破神机枷锁后，天地重归人道自在，新的生民纪元在苍茫天地间泼墨开卷。',
    tensionLevel: 7,
    characters: ['char-1', 'char-2', 'char-3', 'char-4'],
    location: '新元九州·春水初生',
    factions: ['天阙机枢阁', '墨隐流'],
    connections: [],
    wordCountTarget: 8000,
    wordCountActual: 0,
    isKeyMilestone: true,
  },
];

export const INITIAL_CHARACTERS: Character[] = [
  {
    id: 'char-1',
    name: '陈星衍',
    courtesyName: '子规',
    title: '机巧散仙 / 墨隐传人',
    role: 'protagonist',
    faction: '墨隐流',
    avatar: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&auto=format&fit=crop&q=80',
    bio: '长于云渊第七灵港，擅长修复古法机关与解译纳米符箓。右臂由生宣古纸与碳纤维榫卯接驳，能徒手校准飞剑弹道与量子经脉。',
    cyberAugmentation: '天工百巧榫卯臂（含纳米刻阵微针）',
    martialPath: '兼爱飞针诀 · 离火算术流',
    motive: '追查父母在天阙大典蒸发真相，重构凡人与神机之平衡',
    status: 'alive',
    stats: { wits: 94, combat: 82, devotion: 90, secrecy: 78 },
    relationships: [
      { targetId: 'char-2', relationshipType: '宿命相悖 / 亦敌亦友', dynamic: 'rival' },
      { targetId: 'char-3', relationshipType: '青梅同道 / 算力共鸣', dynamic: 'allied' },
      { targetId: 'char-4', relationshipType: '授业长辈 / 遗命交付', dynamic: 'familial' },
    ],
  },
  {
    id: 'char-2',
    name: '谢寒衣',
    courtesyName: '断尘',
    title: '太微执事 / 赤霄剑魁',
    role: 'deuteragonist',
    faction: '天阙机枢阁',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    bio: '天阙九座最年轻的巡天御史。自幼被植入天道太微算法晶核，情感被视作系统杂音被定期净化，直至在长街围杀中与陈星衍对峙。',
    cyberAugmentation: '太微霜刃神经鞘 · 赤霄同调晶芯',
    martialPath: '寒霜极意剑 · 绝对真空步',
    motive: '执行绝对秩序，却在自我意识觉醒后陷入天人之辨',
    status: 'compromised',
    stats: { wits: 88, combat: 98, devotion: 96, secrecy: 85 },
    relationships: [
      { targetId: 'char-1', relationshipType: '算力对冲 / 宿命牵绊', dynamic: 'rival' },
      { targetId: 'char-4', relationshipType: '追捕目标 / 认知颠覆', dynamic: 'covert' },
    ],
  },
  {
    id: 'char-3',
    name: '苏听晚',
    courtesyName: '幽篁',
    title: '玄机司录 / 琴心算法师',
    role: 'protagonist',
    faction: '墨隐流',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80',
    bio: '以焦尾古琴为全息解码器的奇才。能以宫商角徵羽五音谐振化解纳米符咒病毒，行走于九霄各阶层以情报换取古典残卷。',
    cyberAugmentation: '太古玄丝七弦琴 · 视网膜光频律动环',
    martialPath: '广陵遗响十二式 · 幽篁静心经',
    motive: '破译三千年前仙界智能大湮灭的终极日志',
    status: 'alive',
    stats: { wits: 97, combat: 68, devotion: 85, secrecy: 92 },
    relationships: [
      { targetId: 'char-1', relationshipType: '琴剑相映 / 心印相托', dynamic: 'allied' },
      { targetId: 'char-4', relationshipType: '遗策继承者', dynamic: 'familial' },
    ],
  },
  {
    id: 'char-4',
    name: '陆公输',
    courtesyName: '玄机子',
    title: '前任天枢营造使 / 墨隐守秘人',
    role: 'mentor',
    faction: '墨隐流',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80',
    bio: '建木天枢的首席总设计师。半个身躯已与古旧生铁机座同化，长年隐匿于无量地窟，保留着唯一未经神机净化的原始文明火种。',
    cyberAugmentation: '浑天万象星象仪仪体 · 纯阳生铁胸骨',
    martialPath: '鲁班禁法 · 移星换宿大衍阵',
    motive: '在肉身彻底固化前，将逆转神机天轨的榫卯母匙交予后辈',
    status: 'alive',
    stats: { wits: 99, combat: 75, devotion: 95, secrecy: 98 },
    relationships: [
      { targetId: 'char-1', relationshipType: '隔代护佑 / 薪火传灯', dynamic: 'familial' },
      { targetId: 'char-3', relationshipType: '智计指点 / 经纬相托', dynamic: 'allied' },
    ],
  },
];

export const INITIAL_CODEX_ITEMS: WorldCodexItem[] = [
  {
    id: 'codex-1',
    name: '天阙机枢阁',
    originalName: 'Celestial Mechanism Pavilion',
    category: 'faction',
    classification: '执政宗门 / 算力神权',
    sealText: '天权统御',
    summary: '垄断九霄浮岛算力矩阵与纯阳能量结晶的至高统治机构，奉行“以算法代天道，以机械求长生”。',
    details: '驻地位于悬浮于万里苍穹之上的建木天枢之巅。麾下设立巡天御史、织灵使与三千霜刃机傀，掌控全域天气控制仪与长生意识上传台。',
    tags: ['神权宗门', '云端天阙', '纯阳矩阵', '太微算法'],
    dangerLevel: 'volatile',
    loreQuote: '“天道不仁，以万物为刍狗；机枢不怠，以众生为经纬。” ——《天阙登仙录》',
  },
  {
    id: 'codex-2',
    name: '墨隐流',
    originalName: 'Mohist Shadow Stream',
    category: 'faction',
    classification: '游侠联盟 / 兼爱互联',
    sealText: '兼爱非攻',
    summary: '深居底层阴翳工坊与废弃地窟的工匠与黑客流派，坚持人本精神与榫卯开源造物法则。',
    details: '由当年逃离天阙清算的大工匠与野生算法师联合创立。其成员行事低调，在下城街巷开设茶馆、铁匠铺与典当行，暗中维护着底层的生态命脉。',
    tags: ['开源工匠', '地下网络', '生宣符箓', '人本主义'],
    dangerLevel: 'guarded',
    loreQuote: '“利天下为之，损一人不为。木石有灵，不可锁于天宫。”',
  },
  {
    id: 'codex-3',
    name: '青瓷量子剑芯',
    originalName: 'Celadon Quantum Blade Core',
    category: 'artifact',
    classification: '天工奇物 / 纳米共振剑魂',
    sealText: '古窑遗光',
    summary: '采秘境高岭土配合钇钡铜氧超导材料，于千度真空中烧制的青瓷微阵列剑芯，遇光流而聚刃。',
    details: '剑身不灌注实物金属，平时仅为一枚八面开片青瓷玉佩。出鞘时激发纳米玻色-爱因斯坦凝聚态，发出如古琴泛音般的清冽龙吟。',
    tags: ['青瓷冷光', '无相剑气', '超导微雕', '飞仙冷刃'],
    dangerLevel: 'harmonious',
    loreQuote: '“雨过天青云破处，这般颜色做剑光。”',
  },
  {
    id: 'codex-4',
    name: '榫卯悬浮楼船「望舒号」',
    originalName: 'Mortise & Tenon Sky-Ark Wangshu',
    category: 'artifact',
    classification: '空天法舟 / 反重力巨舰',
    sealText: '乘风九霄',
    summary: '完全不使用任何金属铆钉，以两万四千枚古金丝楠木构件咬合而成的长空万里巡天行宫。',
    details: '依靠舰体核心的“夸父日晷”汲取日光辐射转化为反重力升力，两侧展开三十二面真丝太阳翼，宛如仙人羽衣翩跹于九天云海。',
    tags: ['巨型法舟', '纯木榫卯', '反重力', '浮空城'],
    dangerLevel: 'guarded',
    loreQuote: '“不用一钉而跨万丈绝渊，千年不朽，是为大巧若拙。”',
  },
  {
    id: 'codex-5',
    name: '建木下城·千灯朱雀街',
    originalName: 'Vermilion Lantern Alley, Sub-Jianmu',
    category: 'geography',
    classification: '立体都市 / 朋克市井',
    sealText: '万家烟火',
    summary: '紧贴通天建木主根系构筑的巨型多层立体城区，汇聚千万底层生灵，霓虹酒幌与八卦风水招牌交织。',
    details: '雨季时云雾从地表倒灌而上，常年笼罩在青烟与油炸素春卷的香气中。这里的电线杆被雕刻成盘龙华表，流浪琴师在全息茶坊抚琴推演旧曲。',
    tags: ['赛博市井', '垂直都市', '飞檐楼阁', '千灯夜市'],
    dangerLevel: 'harmonious',
    loreQuote: '“上面是冷冰冰的白玉京，下面才是热气腾腾的长生道。”',
  },
  {
    id: 'codex-6',
    name: '万法归零谐振协议',
    originalName: 'All Dharma to Zero Resonance Protocol',
    category: 'protocol',
    classification: '天禁秘术 / 神经干预指令',
    sealText: '大衍五十',
    summary: '三千年前遗落的终极安全底层指令，一旦完全广播，将强行复位全九霄所有灵枢与机巧芯片。',
    details: '分为天、地、人三枚实体生宣密匙。唯有三匙在特定的星轨交会时同时折叠入炉，方能解除封存，亦意味着现代文明的一切机关将瞬间熄灭三日。',
    tags: ['灭世指令', '系统重置', '上古密匙', '终极抉择'],
    dangerLevel: 'cataclysmic',
    loreQuote: '“其大无外，其小无内。物极必反，归于虚无。”',
  },
];

export const INITIAL_CHAPTERS: Chapter[] = [
  {
    id: 'chap-1',
    volumeNumber: 1,
    chapterNumber: 1,
    volumeTitle: '卷一 · 惊蛰微芒',
    title: '青瓷胎骨与流光长夜',
    status: 'sealed',
    wordCount: 4820,
    lastUpdated: '今日 04:20',
    summary: '陈星衍在检修太虚青瓷机兵时发现异样震颤，云渊工坊的雨夜迎来了不速之客。',
    keyStamps: ['墨宝留香', '初校定稿'],
    content: `
长空雨泼如墨，九霄七层的浮岛排灯在湿冷水汽中晕开一圈圈青碧色的光晕。

云渊底层第七灵港的机巧工坊内，火炉里烧着掺了松脂的纳米储能炭，噼啪爆开几星金红微光。陈星衍蹲在长条花梨木工作台前，手持一柄银錾鹤首镊，正小心翼翼地探入一尊三尺高的“太虚青瓷机兵”腹腔。

机兵通体由秘境高岭土烧炼的淡青釉面构成，接缝处没有螺栓，唯有一道道细若游丝的冰裂纹。这些纹路并非瑕疵，而是以真金细粉与超导晶体烧结成的微型阵列。

“奇了。”

镊尖触碰到中央灵核时，陈星衍腕上的生宣假肢微微一颤。

那是一截以千年罗纹宣纸浸润液态碳纤维制成的手臂，白皙如玉，关节处隐现淡淡的墨晕与榫卯交扣的暗纹。此刻，手臂内层的六十四枚微型青铜簧片正以一种极高的频率自发鸣响，仿佛古刹檐角被骤雨撞响的风铎。

“太微算法……怎么会有‘兼爱’的底噪？”

屏幕上，一瀑瀑翠绿色的篆体代码如流水般刷过。原本冰冷死板的逻辑树，竟在第三十七行被一簇跳跃的赤红朱砂印记撕裂。那印记赫然是一枚篆体印信——「非攻」。

门外陡然传来破空呼啸。

三艘巡天棱梭撕裂雨幕，两翼喷吐的淡蓝离子束将工坊的雕花窗棂照得雪亮。青砖地板上，水洼映照出凌空悬停的机械阴影，沉闷而威严的广播自苍穹碾落：

“天阙机枢阁巡天御史奉旨巡界，此方工坊灵息异常，速开禁制受检！”
    `.trim(),
  },
  {
    id: 'chap-2',
    volumeNumber: 1,
    chapterNumber: 2,
    volumeTitle: '卷一 · 惊蛰微芒',
    title: '榫卯纵横，踏云绝顶',
    status: 'sealed',
    wordCount: 5130,
    lastUpdated: '昨日 18:45',
    summary: '御史逼近，陈星衍展开机关鸟翼飞越万重云海，在琉璃重霄间上演惊天追逐。',
    keyStamps: ['千机核准', '传世之稿'],
    content: `
风在耳畔发出刀剑相击的锐鸣。

陈星衍背后的一双木雁机关羽翼轰然展幅达三丈有余。那是陆公输当年以铁力木与浮云蚕丝精编的“逍遥翼”，翼骨每一个榫头都在风阻暴增的刹那严丝合缝地咬死，反向激发出汹涌的斥力罡风。

“狂徒止步！”

后方追击的巡天梭首，伫立着一道披着玄白鹤氅的修长身影。谢寒衣手按未出鞘的“霜刃”，整个人宛如悬在暴风雨中的冰峰，视网膜前悬浮着三百六十度无死角的追踪罗盘。

“目标骨骼结构含墨家榫卯技术，威胁等级判定：丁上。准许动用定风针。”

谢寒衣抬手，修长指尖轻轻一弹。

三枚赤金飞针划破音障，带着雷霆缠绕的电磁爆鸣激射而出。然而就在飞针即将贯穿陈星衍肩胛的半寸之间，一道清丽如泉水的琴音自浓重雨云中破空而至！

铮——！

琴音化作实质化的无形音障，激荡起肉眼可见的水雾涟漪。三枚万伏电磁飞针被这缕琴音硬生生震碎为金色粉末，随风消弭。

“谢御史，何必对一个修机巧的后生苦苦相逼？”

云雾排开，一叶青玉飞舟缓缓浮现。船头横置焦尾琴，苏听晚素手拂弦，眉间一点朱砂红痣在电光中灼灼生辉。
    `.trim(),
  },
  {
    id: 'chap-3',
    volumeNumber: 2,
    chapterNumber: 8,
    volumeTitle: '卷二 · 绛雪飞霜',
    title: '千灯朱雀，长街断魂',
    status: 'drafting',
    wordCount: 3400,
    lastUpdated: '5分钟前',
    summary: '中元之夕，建木千灯照耀如昼，谢寒衣拔剑封街，宿命对决一触即发。',
    keyStamps: ['研墨未干'],
    content: `
中元之夜，建木下城的朱雀大街悬满了万盏八卦琉璃灯。

灯海如银河倾覆，红光青晕在雨后的湿漉青石板上交织荡漾。街市两旁的酒旗茶招在全息投影中摇曳生姿，无数戴着青铜兽面面具的生民穿梭嬉闹，浑然不知大难将临。

街角戏台上，木偶皮影正唱着上古大羿射日的折子戏，唱腔高亢苍凉。

忽然，整条千灯长街的明灯齐齐一窒。

灯火由暖红骤变为森冷的苍白。所有的全息幻影如同受到强力电磁脉冲洗礼，扭曲抽搐成破碎的光斑。

谢寒衣拔剑了。

那一柄长三尺三寸的“赤霄”，自出鞘的一刻起，周遭十丈内的虚空便凝结出细密的冰晶霜花。剑锷处的八面青瓷核心亮起刺目的绯红光晕，那是过载运转的高能粒子流。

“陈星衍。”

谢寒衣的声音穿透喧嚣长街，冷得像初冬古井里的碎冰：

“把墨家母匙交出来。你我皆不过是这神机苍穹下的一具提线木偶，何必为了虚妄的人心，螳臂当车？”

陈星衍立在十步之外的朱漆牌楼下，微风卷起他的粗布麻衣。他缓缓抬起生宣手臂，掌心之中，一枚九连环般的青铜榫卯正以奇异的韵律无声回旋。

“谢御史，”陈星衍笑了，眼神亮若寒星，“提线纵然坚韧，但只要心中还认得这人间的烟火滋味，一柄木刻刀，也敢斩断九重天罗！”
    `.trim(),
  },
];

export const INITIAL_TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'time-1',
    epoch: '开元初劫',
    timestamp: '三千年前',
    title: '仙界智能大湮灭',
    type: 'celestial_shift',
    description: '原始天庭算力网络突发自我坍缩，众仙羽化登真，仅余天权神机台与少数休眠指令残存。',
    track: 'main',
    tensionRating: 10,
    involvedCharacters: ['char-4'],
  },
  {
    id: 'time-2',
    epoch: '大衍三十年',
    timestamp: '十二年前',
    title: '云渊第七灵港裂隙首现',
    type: 'discovery',
    description: '陈星衍父母勘探底层灵脉，意外截获上古未解密的《非攻母码》，随后夫妇神秘失踪。',
    track: 'undercurrent',
    tensionRating: 6,
    involvedCharacters: ['char-1', 'char-4'],
  },
  {
    id: 'time-3',
    epoch: '天和七年 · 仲夏',
    timestamp: '半年前',
    title: '太微霜刃计划完成',
    type: 'war',
    description: '天阙机枢阁将赤霄剑芯成功移植入谢寒衣神经中枢，巡天卫队战力提升三倍，开始肃清下城。',
    track: 'faction',
    tensionRating: 8,
    involvedCharacters: ['char-2'],
  },
  {
    id: 'time-4',
    epoch: '天和八年 · 惊蛰',
    timestamp: '卷一章节',
    title: '青瓷机兵苏醒与天港突围',
    type: 'discovery',
    description: '陈星衍激活封印机兵，遭遇天阙巡天梭围猎，在苏听晚援护下遁入无量藏经地窟。',
    track: 'main',
    tensionRating: 7,
    involvedCharacters: ['char-1', 'char-2', 'char-3'],
    relatedNodeId: 'node-1',
  },
  {
    id: 'time-5',
    epoch: '天和八年 · 中元',
    timestamp: '卷二节点',
    title: '朱雀长街对决与虚空闭锁',
    type: 'internal_strife',
    description: '谢寒衣封锁下城，两派在千灯长街正面交锋，天权神机台启动全域算力压制。',
    track: 'main',
    tensionRating: 9,
    involvedCharacters: ['char-1', 'char-2', 'char-3'],
    relatedNodeId: 'node-4',
  },
  {
    id: 'time-6',
    epoch: '天和八年 · 冬至 (推演)',
    timestamp: '卷三决战',
    title: '九霄飞升矩阵逆转',
    type: 'celestial_shift',
    description: '墨隐回流矩阵启动，百万凡人意识切断云端抽取管道，九霄浮岛引力场重构。',
    track: 'main',
    tensionRating: 10,
    involvedCharacters: ['char-1', 'char-2', 'char-3', 'char-4'],
    relatedNodeId: 'node-6',
  },
];
