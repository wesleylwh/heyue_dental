import { Doctor, Project, Case } from './types';

export interface Nurse {
  id: string;
  name: string;
  title: string;
  image: string;
  duties: string[];
  bio: string;
}

export const DOCTORS: Doctor[] = [
  {
    id: '1',
    name: '钟建国',
    title: '禾悦口腔创办人 / 资深院长',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400',
    experience: 20,
    cases: 5000,
    specialties: ['数字化种植', '复杂拔牙', '全口修复'],
    isAvailable: true,
    bio: '20年社区服务经验，特别有耐心。钟院长常说：”看牙不只是修补，更是关怀。”他手法轻柔，很多怕疼的邻居都点名找他。',
  },
  {
    id: '2',
    name: '李晓芳',
    title: '数字化正畸主任',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400',
    experience: 12,
    cases: 3000,
    specialties: ['隐形矫正', '青少年矫治', '美学修复'],
    isAvailable: true,
    bio: '李医生是咱们社区的”笑容魔术师”，手法轻快，小朋友都不怕。她擅长用最简单直观的方式解释复杂的矫正原理。',
  },
  {
    id: '3',
    name: '陈慧敏',
    title: '牙体修复 · 牙周科主诊医师',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400',
    experience: 8,
    cases: 2000,
    specialties: ['全瓷冠修复', '牙周系统治疗', '根管治疗', '牙齿美白'],
    isAvailable: false,
    bio: '陈医生做事仔细，特别擅长和有牙科焦虑的患者沟通。她常说：”把情况说清楚，大多数人就不怕了。”复诊率在诊所里一直名列前茅。',
  },
];

export const NURSES: Nurse[] = [
  {
    id: 'n1',
    name: '刘思远',
    title: '护士长 · 感控 · 椅旁护理',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=400',
    duties: ['椅旁四手操作', '消毒灭菌管理', '患者接待', '感控流程监督'],
    bio: '在诊所工作9年，是院里的”定心丸”。刘护士长对感控流程要求严格，每一件器械的消毒记录都亲自核查。',
  },
  {
    id: 'n2',
    name: '张梦洁',
    title: '口腔治疗护士 · 预约管理',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=400',
    duties: ['治疗护理配合', '患者预约管理', '术后护理指导', '病历整理'],
    bio: '张护士声音温柔，很多初诊小朋友进门前都害怕，跟她聊几句就放松了。她负责管理诊所的预约系统，让就诊流程更顺畅。',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'diagnosis',
    title: '挂号 / 诊查 / 基础检查',
    description: '承接初诊、口腔检查、影像与治疗设计等基础判断环节。',
    icon: 'Sparkles',
    category: 'health',
    priceRange: '',
    subItems: ['普通门诊诊查费', '口腔检查', '影像检查', '治疗设计'],
    sections: [
      {id: 'diagnosis-basic', title: '门诊诊查与治疗设计', items: ['普通门诊诊查费', '全口牙病系统检查与治疗设计']},
      {id: 'diagnosis-functional', title: '咬合与功能检查', items: ['咬合检查', '颌力测量检查', '下颌运动检查']},
      {id: 'diagnosis-imaging', title: '影像与专项检查', items: ['口腔X线一次成像(RVG)', 'CT / CBCT / 曲面体层成像', '牙髓活力检查']},
    ],
  },
  {
    id: 'periodontal',
    title: '牙周治疗',
    description: '围绕洁牙、刮治、牙龈炎症与牙周维护展开。',
    icon: 'Stethoscope',
    category: 'health',
    priceRange: '',
    subItems: ['洁治', '龈下刮治', '牙周固定', '根面平整'],
    sections: [
      {id: 'periodontal-cleaning', title: '洁牙与基础处理', items: ['洁治', '牙面光洁术', '牙龈保护剂塞治']},
      {id: 'periodontal-root', title: '刮治与根面处理', items: ['龈下刮治', '龈下刮治(后牙)', '根面平整术']},
      {id: 'periodontal-gum', title: '牙龈与牙周手术', items: ['牙龈翻瓣术', '牙龈切除术', '牙周固定']},
    ],
  },
  {
    id: 'surgery',
    title: '牙槽外科 / 拔牙 / 口腔外科',
    description: '适用于拔牙、智齿、切开引流、创面处理和口腔外科类项目。',
    icon: 'Scissors',
    category: 'health',
    priceRange: '',
    subItems: ['前牙拔除术', '阻生牙拔除术', '口内脓肿切开引流术', '口腔活检术'],
    sections: [
      {id: 'surgery-extraction', title: '拔牙类', items: ['前牙拔除术', '复杂牙拔除术', '阻生牙拔除术']},
      {id: 'surgery-wound', title: '创面与骨面处理', items: ['拔牙创面搔刮术', '牙槽骨修整术', '阻生智齿龈瓣整形术']},
      {id: 'surgery-oral', title: '口腔外科处置', items: ['口内脓肿切开引流术', '口腔活检术', '颞下颌关节复位']},
    ],
  },
  {
    id: 'endodontics',
    title: '牙体牙髓 / 根管治疗',
    description: '覆盖补牙、充填、开髓、失活、根管治疗与保牙项目。',
    icon: 'Zap',
    category: 'health',
    priceRange: '',
    subItems: ['简单充填术', '复杂充填术', '根管预备', '显微根管治疗术'],
    sections: [
      {id: 'endo-filling', title: '充填与修复', items: ['简单充填术', '复杂充填术', '树脂嵌体修复术']},
      {id: 'endo-root', title: '根管治疗', items: ['根管预备', '根管充填术', '显微根管治疗术']},
    ],
  },
  {
    id: 'prevention',
    title: '预防保健 / 儿童口腔',
    description: '包括防龋、脱敏、窝沟封闭与儿童基础防护项目。',
    icon: 'Heart',
    category: 'health',
    priceRange: '',
    subItems: ['氟防龋治疗', '牙脱敏治疗', '窝沟封闭', '乳牙预成冠修复'],
    sections: [
      {id: 'prevention-care', title: '预防保健', items: ['氟防龋治疗', '牙脱敏治疗', '窝沟封闭']},
      {id: 'prevention-kids', title: '儿童基础处置', items: ['乳牙预成冠修复', '儿童前牙树脂冠修复']},
    ],
  },
  {
    id: 'fixed-restoration',
    title: '修复固定类',
    description: '用于固定桥、全冠、嵌体、咬合重建等固定修复项目。',
    icon: 'Zap',
    category: 'missing',
    priceRange: '',
    subItems: ['固定桥', '粘结桥', '计算机辅助设计制作全冠', '咬合重建'],
    sections: [
      {id: 'fixed-bridge', title: '桥体与固定修复', items: ['固定桥', '粘结桥', '固定修复计算机辅助设计']},
      {id: 'fixed-cad', title: '冠 / 嵌体 / 咬合', items: ['计算机辅助设计制作全冠', '计算机辅助设计制作嵌体', '咬合重建']},
    ],
  },
  {
    id: 'removable-restoration',
    title: '义齿 / 活动修复 / 加工维修',
    description: '涵盖活动义齿、加牙、重衬、焊接和修复加工维修类项目。',
    icon: 'Sparkles',
    category: 'missing',
    priceRange: '',
    subItems: ['塑料可摘局部义齿', '即刻义齿', '义齿组织面重衬', '加人工牙'],
    sections: [
      {id: 'removable-denture', title: '活动义齿', items: ['塑料可摘局部义齿', '美容义齿', '即刻义齿']},
      {id: 'removable-repair', title: '维修与加改', items: ['义齿组织面重衬', '加人工牙', '加焊']},
    ],
  },
  {
    id: 'ortho-support',
    title: '正畸检查 / 正畸复诊 / 正畸辅助项目',
    description: '把正畸检查、复诊处置和辅助性项目单独归类，避免混进正式疗程。',
    icon: 'Stethoscope',
    category: 'ortho',
    priceRange: '',
    subItems: ['带环制备', '固定矫治器复诊处置', '拆除固定装置', '调颌'],
    sections: [
      {id: 'ortho-support-check', title: '正畸检查与制备', items: ['带环制备', '颌导板制备', '外科引导合板']},
      {id: 'ortho-support-follow', title: '正畸复诊与辅助处置', items: ['固定矫治器复诊处置', '拆除固定装置', '调颌']},
    ],
  },
  {
    id: 'orthodontics',
    title: '正畸治疗',
    description: '把乳牙期、替牙期、恒牙期、特殊正畸与保持治疗整体整理在一起。',
    icon: 'Smile',
    category: 'ortho',
    priceRange: '',
    subItems: ['乳牙期正畸', '替牙期正畸', '恒牙期正畸', '特殊正畸', '正畸保持器治疗'],
    sections: [
      {id: 'orthodontics-primary', title: '乳牙期正畸', items: ['乳牙期安氏I类错颌正畸治疗']},
      {id: 'orthodontics-mixed', title: '替牙期正畸', items: ['替牙期安氏I类错颌活动矫治器正畸治疗']},
      {id: 'orthodontics-permanent', title: '恒牙期正畸', items: ['恒牙期安氏I类错颌固定矫治器正畸治疗']},
      {id: 'orthodontics-special', title: '特殊正畸', items: ['牙周病伴错颌畸形活动矫治器正畸治疗']},
      {id: 'orthodontics-retention', title: '正畸保持', items: ['正畸保持器治疗']},
    ],
  },
  {
    id: 'other-care',
    title: '口腔黏膜 / 激光 / 其他处置',
    description: '承接激光、漂白、脱色及不便归入主模块的其他处置。',
    icon: 'Sparkles',
    category: 'health',
    priceRange: '',
    subItems: ['激光口内治疗', '牙脱色术', '牙齿漂白术', '不良修复体拆除'],
    sections: [
      {id: 'other-care-laser', title: '激光与漂白', items: ['激光口内治疗', '牙脱色术', '牙齿漂白术']},
      {id: 'other-care-other', title: '其他处置', items: ['不良修复体拆除']},
    ],
  },
];

export const CASES: Case[] = [
  // ── 正畸矫正 ──
  {
    id: 'c1',
    category: 'ortho',
    beforeImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600',
    afterImage: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&q=80&w=600',
    label: '30岁 · 隐形矫正 18 个月',
    testimonial: '以前总是不敢开口大笑，现在照镜子都觉得满意。李医生每次复诊都解释得特别清楚，整个过程比我想象中轻松。',
  },
  {
    id: 'c3',
    category: 'ortho',
    beforeImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600',
    afterImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    label: '16岁 · 固定矫正 22 个月',
    testimonial: '孩子从一开始特别抗拒，但李医生很会跟青少年沟通，现在主动说要定期复查，牙齿也排整齐了，高考前刚好结束。',
  },
  // ── 种植中心 ──
  {
    id: 'c2',
    category: 'implant',
    beforeImage: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80&w=600',
    afterImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600',
    label: '65岁 · 全口种植 · 奥齿泰',
    testimonial: '终于能吃排骨了，感觉年轻了十岁！钟院长把整个方案讲得特别透明，费用一分不差，没有被坑的感觉。',
  },
  {
    id: 'c4',
    category: 'implant',
    beforeImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600',
    afterImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600',
    label: '52岁 · 单颗种植 · 士卓曼',
    testimonial: '之前一直觉得种牙很贵很麻烦，来了才知道流程可以这么顺。数字化导板定位很精准，全程几乎没感觉到疼。',
  },
  // ── 牙周 · 洁牙 ──
  {
    id: 'c5',
    category: 'periodontal',
    beforeImage: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=600',
    afterImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600',
    label: '43岁 · 牙周系统治疗 · 3次刮治',
    testimonial: '牙龈出血好几年，一直拖着没管。陈医生检查完给我逐颗说了情况，刮治三次之后出血明显减少，口气也好了很多。',
  },
  // ── 补牙 · 根管 ──
  {
    id: 'c6',
    category: 'endodontics',
    beforeImage: 'https://images.unsplash.com/photo-1616012480717-b89a5ef50e43?auto=format&fit=crop&q=80&w=600',
    afterImage: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=600',
    label: '38岁 · 显微根管 + 全瓷冠保护',
    testimonial: '牙痛到睡不着觉，以为要拔掉了，没想到根管治疗之后牙齿还能用。钟院长说显微镜下看得更清楚，做完真的彻底好了。',
  },
  // ── 修复 · 牙冠 ──
  {
    id: 'c7',
    category: 'restoration',
    beforeImage: 'https://images.unsplash.com/photo-1598970605070-a38a6ccd3a2d?auto=format&fit=crop&q=80&w=600',
    afterImage: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=600',
    label: '47岁 · 全瓷冠修复 · 前牙区 4 颗',
    testimonial: '门牙一直有小缺口很在意，陈医生建议做进口全瓷冠，颜色和形状和真牙一模一样，同事都问我去做了什么。',
  },
  // ── 拔牙 · 外科 ──
  {
    id: 'c8',
    category: 'surgery',
    beforeImage: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=600',
    afterImage: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=600',
    label: '24岁 · 双侧阻生智齿微创拔除',
    testimonial: '拖了两年一直不敢拔，听朋友说这里手法轻柔才来。钟院长分两次拔，每次20分钟左右就完成了，术后第二天就能正常上班。',
  },
];

export const CORE_SERVICE_BOARDS = [
  {
    id: 'fillings',
    title: '补牙 / 根管',
    summary: '蛀牙、冷热敏感、牙痛先看这一类。',
    highlights: ['简单补牙', '复杂充填', '根管治疗', '显微根管'],
    accent: 'from-sky-50 to-white',
    tone: 'text-sky-700',
  },
  {
    id: 'surgery',
    title: '拔牙 / 外科',
    summary: '智齿、松动牙、阻生牙和外科处置集中看。',
    highlights: ['普通拔牙', '复杂拔牙', '阻生牙', '切开引流'],
    accent: 'from-emerald-50 to-white',
    tone: 'text-emerald-700',
  },
  {
    id: 'restoration',
    title: '修复 / 牙冠 / 义齿',
    summary: '缺损修复、全冠、活动义齿和后期维修都在这里。',
    highlights: ['全瓷冠', '固定桥', '活动义齿', '义齿维修'],
    accent: 'from-amber-50 to-white',
    tone: 'text-amber-700',
  },
  {
    id: 'periodontal',
    title: '牙周 / 洁牙 / 刮治',
    summary: '牙龈出血、牙结石、牙周炎先从这块入手。',
    highlights: ['洁治', '龈下刮治', '根面平整', '牙周维护'],
    accent: 'from-cyan-50 to-white',
    tone: 'text-cyan-700',
  },
  {
    id: 'orthodontics',
    title: '正畸',
    summary: '儿童早期干预、青少年矫治、成人正畸统一看。',
    highlights: ['初检评估', '复诊处置', '阶段矫治', '保持治疗'],
    accent: 'from-rose-50 to-white',
    tone: 'text-rose-700',
  },
];

export const IMPLANT_PRICE_GUIDE = {
  // 费用构成分拆
  components: [
    {
      name: '种植体',
      note: '核心费用，占比约 50–70%',
      items: [
        {label: '士卓曼 ITI（瑞士）', price: '集采后约 4,980–8,000 元/颗'},
        {label: '奥齿泰（韩国）', price: '集采后约 1,980–3,000 元/颗'},
        {label: '皓圣（美国）', price: '集采后约 2,980–4,500 元/颗'},
      ],
    },
    {
      name: '基台',
      note: '原厂配套',
      items: [
        {label: '原厂基台', price: '约 1,000–3,000 元'},
      ],
    },
    {
      name: '牙冠',
      note: '国产 / 进口可选',
      items: [
        {label: '国产全瓷冠', price: '1,000–2,000 元'},
        {label: '进口全瓷冠（威兰德 / 泽康）', price: '3,000–4,000 元'},
      ],
    },
    {
      name: '基础手术费',
      note: '含麻醉、消毒、操作',
      items: [
        {label: '麻醉 + 消毒 + 植入操作', price: '约 1,500–3,000 元'},
      ],
    },
  ],
  // 按需附加费用
  extras: [
    {name: '术前检查', price: '约 500–1,000 元', note: 'CBCT + 口腔检查'},
    {name: '骨粉 + 骨膜', price: '2,000–6,000 元', note: '骨量不足时使用'},
    {name: '上颌窦提升', price: '3,000–8,000 元', note: '上颌后牙骨高度不足'},
    {name: '其他', price: '按实际产生', note: '个性化基台、软组织移植、术后用药等'},
  ],
  // 品牌特点速览
  brandFeatures: [
    {
      brand: '士卓曼 ITI',
      flag: '🇨🇭',
      position: '高端',
      positionColor: 'bg-blue-100 text-blue-700',
      cardColor: 'bg-blue-50 border-blue-100',
      desc: '亲水表面技术，骨愈合快（3–4 周），长期稳定性强，适合骨条件差、糖尿病、高龄患者。全球种植体销量领先品牌。',
    },
    {
      brand: '奥齿泰 Osstem',
      flag: '🇰🇷',
      position: '中端',
      positionColor: 'bg-emerald-100 text-emerald-700',
      cardColor: 'bg-emerald-50 border-emerald-100',
      desc: '微螺纹设计，初期稳定性好，适配亚洲人颌骨，临床应用广泛，是中端市场最主流的选择。',
    },
    {
      brand: '皓圣 Hiossen',
      flag: '🇺🇸',
      position: '中高端',
      positionColor: 'bg-amber-100 text-amber-700',
      cardColor: 'bg-amber-50 border-amber-100',
      desc: '锥形设计利于即拔即种，连接稳定，兼顾性价比与性能，适合前牙美学修复与快速修复场景。',
    },
    {
      brand: '八维 8plant',
      flag: '🇰🇷',
      position: '入门',
      positionColor: 'bg-slate-100 text-slate-600',
      cardColor: 'bg-slate-50 border-slate-200',
      desc: '性价比高，稳定可靠，适合后牙常规修复和多颗缺牙的基础方案，预算有限时的务实选择。',
    },
  ],
};

export const IMPLANT_PROCESS = [
  {
    step: '01',
    title: '数字化检查',
    desc: 'CBCT 三维扫描，精准评估骨量和神经位置，制定个性化种植方案。',
    duration: '1 次就诊',
  },
  {
    step: '02',
    title: '微创植入',
    desc: '局部麻醉下，利用数字化导板精准植入种植体，创伤小，恢复快。',
    duration: '1–2 小时',
  },
  {
    step: '03',
    title: '安心愈合',
    desc: '等待种植体与牙槽骨骨结合。亲水款约 3–4 个月，普通款 3–6 个月。',
    duration: '3–6 个月',
  },
  {
    step: '04',
    title: '牙冠修复',
    desc: '口扫取模，制作与天然牙高度相似的全瓷牙冠，恢复咀嚼功能和美观。',
    duration: '2–3 周制作',
  },
  {
    step: '05',
    title: '定期维护',
    desc: '完成后定期复查，保持种植牙长期稳固，建议每 6 个月检查一次。',
    duration: '长期',
  },
];

export const IMPLANT_BRANDS = [
  {
    brand: '士卓曼 ITI',
    country: '瑞士',
    flag: '🇨🇭',
    tagline: '全球种植体销量领先品牌',
    features: ['亲水表面技术', '愈合周期短', '骨结合率高', '适合糖尿病 / 高龄患者'],
    accent: 'from-blue-50 to-white',
    border: 'border-blue-100',
    tagColor: 'bg-blue-50 text-blue-700',
    series: [
      {name: '非亲水标准款', price: '7,800–8,800 元', crown: '国产全瓷冠', note: '稳定可靠，性价比高'},
      {name: '亲水款 SLA Active', price: '10,000–12,000 元', crown: '进口全瓷冠', note: '愈合期缩短约 40%，高要求人群首选'},
    ],
  },
  {
    brand: '奥齿泰 Osstem',
    country: '韩国',
    flag: '🇰🇷',
    tagline: '亚洲市场临床口碑品牌',
    features: ['初期稳定性强', '适合亚洲人骨质', '性价比突出', '临床案例丰富'],
    accent: 'from-emerald-50 to-white',
    border: 'border-emerald-100',
    tagColor: 'bg-emerald-50 text-emerald-700',
    series: [
      {name: 'GS / TS 标准款', price: '4,250–5,000 元', crown: '国产全瓷冠', note: '临床验证稳定，多数患者首选'},
      {name: 'MS 高端款', price: '5,500–6,500 元', crown: '国产全瓷冠', note: '升级表面处理，骨结合表现更优'},
    ],
  },
  {
    brand: '皓圣 Hiossen',
    country: '美国',
    flag: '🇺🇸',
    tagline: '即拔即种场景首选',
    features: ['锥形设计', '即拔即种', '前牙美学修复', '初期稳定性佳'],
    accent: 'from-amber-50 to-white',
    border: 'border-amber-100',
    tagColor: 'bg-amber-50 text-amber-700',
    series: [
      {name: 'ET 标准款', price: '6,800–7,800 元', crown: '国产全瓷冠', note: '适合拔牙后立即种植'},
    ],
  },
  {
    brand: '八维 8plant',
    country: '韩国',
    flag: '🇰🇷',
    tagline: '多颗种植入门首选',
    features: ['价格友好', '性能稳定', '适合多颗缺牙', '基础种植方案'],
    accent: 'from-slate-50 to-white',
    border: 'border-slate-200',
    tagColor: 'bg-slate-100 text-slate-600',
    series: [
      {name: 'BX 基础款', price: '3,600–4,600 元', crown: '国产全瓷冠', note: '适合预算有限或多颗种植患者'},
    ],
  },
];

// ── 各服务板块详情数据（流程 + 价格） ──────────────────────────────

export interface PriceItem {
  name: string;
  price: string;
  note?: string;
  tag?: '甲' | '乙' | '丙';
}

export interface PriceGroup {
  title: string;
  note?: string;
  items: PriceItem[];
}

export interface ServiceStep {
  step: string;
  title: string;
  desc: string;
  duration: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  animationType: 'filling' | 'extraction' | 'crown' | 'periodontal' | 'ortho';
  steps: ServiceStep[];
  priceGroups: PriceGroup[];
}

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    id: 'periodontal',
    title: '牙周 · 洁牙',
    subtitle: '牙龈出血、牙结石、口气重？系统牙周治疗，从洁治到刮治一步到位。',
    animationType: 'periodontal',
    steps: [
      { step: '01', title: '牙周检查', desc: '检查探诊深度、牙龈出血指数、牙结石分布，评估牙周整体状态。', duration: '1 次就诊' },
      { step: '02', title: '超声洁治', desc: '超声波震荡去除龈上牙结石和烟渍，抛光牙面，阻断细菌积累。', duration: '60–90 分钟' },
      { step: '03', title: '龈下刮治', desc: '针对牙周袋内龈下结石逐颗处理，减少炎症，保护牙周组织。', duration: '2–4 次就诊' },
      { step: '04', title: '根面平整', desc: '将根面不规则坏死组织刮除，使牙龈重新附着，抑制细菌再生。', duration: '按需进行' },
      { step: '05', title: '定期维护', desc: '治疗后 3–6 个月复查，维持牙周健康，阻止病情反复。', duration: '长期维护' },
    ],
    priceGroups: [
      {
        title: '洁牙（洗牙）',
        note: '清除牙结石、牙菌斑，含抛光',
        items: [
          { name: '超声波基础洁牙', price: '168–268 元 / 全口' },
        ],
      },
      {
        title: '牙周系统治疗',
        note: '龈下刮治按颗计费，上药按全口计费',
        items: [
          { name: '牙周龈下刮治', price: '80–120 元 / 颗', note: '清除牙龈下结石、炎性肉芽组织' },
          { name: '牙周上药 / 护理', price: '200–300 元 / 全口', note: '刮治后局部消炎，缓解出血红肿' },
        ],
      },
    ],
  },
  {
    id: 'surgery',
    title: '拔牙 · 外科',
    subtitle: '智齿、松动牙、阻生牙，微创拔牙减少疼痛，全程局麻安全舒适。',
    animationType: 'extraction',
    steps: [
      { step: '01', title: '评估拍片', desc: 'X 线或 CBCT 评估牙根形态、神经位置，确认拔牙方式。', duration: '15 分钟' },
      { step: '02', title: '局麻处置', desc: '利多卡因局部麻醉，等待约 3–5 分钟完全起效后操作。', duration: '5 分钟' },
      { step: '03', title: '微创拔除', desc: '使用微创器械分离牙周膜，减少骨损伤，阻生牙必要时分牙处理。', duration: '15–60 分钟' },
      { step: '04', title: '创面处理', desc: '清洁牙槽窝，按需缝合，放置止血材料，减少术后出血。', duration: '10 分钟' },
      { step: '05', title: '术后嘱托', desc: '当日冷敷、24 小时勿漱口、7 天后复诊拆线（缝合者）。', duration: '1 次复诊' },
    ],
    priceGroups: [
      {
        title: '常规拔牙',
        items: [
          { name: '松动恒牙拔除', price: '80–150 元 / 颗', note: '三度松动恒牙' },
          { name: '乳牙拔除', price: '30–80 元 / 颗', note: '滞留乳牙，含表麻 / 局麻' },
          { name: '残根 / 残冠拔除', price: '200–300 元 / 颗', note: '牙根残留、牙冠破损' },
        ],
      },
      {
        title: '智齿拔除',
        note: '按阻生程度分级收费',
        items: [
          { name: '正位智齿拔除', price: '360–580 元 / 颗', note: '萌出正常，无阻生，简单拔除' },
          { name: '近中 / 水平阻生智齿', price: '800–1,200 元 / 颗', note: '需切开翻瓣、去骨、分根' },
          { name: '埋伏 / 低位阻生智齿', price: '1,500–2,200 元 / 颗', note: '完全骨埋伏，含术后消炎护理' },
        ],
      },
    ],
  },
  {
    id: 'endodontics',
    title: '补牙 · 根管',
    subtitle: '蛀牙、牙痛、冷热敏感，充填补牙保住牙体，根管治疗保住整颗牙。',
    animationType: 'filling',
    steps: [
      { step: '01', title: '检查评估', desc: '探诊 + X 线判断龋坏深度，区分浅龋、深龋或牙髓受累程度。', duration: '1 次就诊' },
      { step: '02', title: '去腐备洞', desc: '彻底清除腐坏牙体，保留健康牙本质，为充填或根管治疗做准备。', duration: '30–60 分钟' },
      { step: '03', title: '根管治疗', desc: '（牙髓受累时）揭髓顶→根管预备→冲洗消毒→根管充填，彻底清除感染。', duration: '2–3 次就诊' },
      { step: '04', title: '充填修复', desc: '复合树脂逐层充填，光固化处理，恢复牙体外形与咬合功能。', duration: '30–60 分钟' },
      { step: '05', title: '冠保护', desc: '根管治疗后的后牙建议加冠保护，防止牙劈裂，延长使用寿命。', duration: '2–3 周制作' },
    ],
    priceGroups: [
      {
        title: '补牙（树脂充填）',
        note: '按材料档次，颗数计费',
        items: [
          { name: '普通国产树脂', price: '150–200 元 / 颗', note: '适合浅龋、后牙咬合面小缺损' },
          { name: '进口流体树脂', price: '260–320 元 / 颗', note: '边缘密合，适合邻面龋、小面积缺损' },
          { name: '进口纳米树脂', price: '380–480 元 / 颗', note: '色泽逼真、耐磨抗压，前后牙通用' },
          { name: '进口高端美学树脂', price: '580–680 元 / 颗', note: '前牙美学修复，仿真度高，粘接牢固' },
        ],
      },
      {
        title: '根管治疗',
        note: '不含补牙及牙冠费用',
        items: [
          { name: '前牙根管治疗', price: '780 元 / 颗', note: '单根管，牙髓坏死、根尖周炎' },
          { name: '后牙根管治疗', price: '980–1,200 元 / 颗', note: '双 / 三根管，磨牙牙髓炎、根尖病变' },
          { name: '疑难根管治疗', price: '1,500–2,000 元 / 颗', note: '钙化根管、再治疗、弯曲根管、根尖手术' },
        ],
      },
    ],
  },
  {
    id: 'fixed-restoration',
    title: '修复 · 美学',
    subtitle: '牙体缺损、缺牙修复，全瓷冠、嵌体、贴面、活动义齿，按需定制。',
    animationType: 'crown',
    steps: [
      { step: '01', title: '口腔检查', desc: '评估缺牙位置、邻牙健康度、牙龈状态，确认适合的修复方式。', duration: '1 次就诊' },
      { step: '02', title: '牙体预备', desc: '磨改基牙形成固位形，为冠桥提供足够空间，保留最大牙体量。', duration: '30–60 分钟' },
      { step: '03', title: '数字取模', desc: '口内扫描仪精准取模，无传统印模不适感，数据传输至数字化加工中心。', duration: '15–30 分钟' },
      { step: '04', title: '制作加工', desc: 'CAD/CAM 数字化切削全瓷冠，或送技工所定制烤瓷 / 全瓷修复体。', duration: '1–2 周' },
      { step: '05', title: '戴入调合', desc: '试戴检查密合度和咬合关系，调磨后粘固，完成修复。', duration: '30–60 分钟' },
    ],
    priceGroups: [
      {
        title: '固定修复（牙冠）',
        note: '按材料和工艺分级',
        items: [
          { name: '钴铬合金烤瓷冠', price: '880 元 / 颗', note: '经济耐用，带金属底冠' },
          { name: '国产全瓷冠（爱尔创）', price: '1,280–1,800 元 / 颗', note: '无金属、色泽自然，前后牙通用' },
          { name: '进口全瓷冠（威兰德 / 泽康）', price: '3,500–4,800 元 / 颗', note: '高强度、高仿真，美学修复首选' },
        ],
      },
      {
        title: '嵌体 · 贴面',
        note: '保留更多天然牙体',
        items: [
          { name: '树脂嵌体', price: '600–800 元 / 颗', note: '小面积缺损，性价比高，修复快' },
          { name: '国产瓷嵌体', price: '1,200–1,600 元 / 颗', note: '耐磨抗折，色泽逼真' },
          { name: '进口瓷嵌体', price: '1,800–2,600 元 / 颗', note: '精密定制，适合后牙大面积缺损' },
          { name: '进口超薄瓷贴面', price: '2,680 元 / 颗', note: '磨牙少、通透感强，前牙美学高端修复' },
        ],
      },
      {
        title: '活动义齿',
        note: '多颗缺牙的可摘修复方案',
        items: [
          { name: '普通树脂牙', price: '200 元 / 颗', note: '简易临时修复，适合单颗缺牙过渡' },
          { name: '拜耳 / 松风树脂牙', price: '300 元 / 颗', note: '仿真度高，舒适度更佳' },
          { name: '小支架钢托', price: '600–800 元 / 副', note: '1–3 颗缺牙，基托轻薄、固位稳' },
          { name: '大支架钢托', price: '1,200 元 / 副', note: '半口 / 多颗缺牙，承重性好' },
          { name: '纯钛托支架', price: '3,200 元 / 副', note: '超轻超薄，无异物感，适合敏感人群' },
          { name: '隐形义齿', price: '600 元 / 颗', note: '无卡环、美观隐蔽，前牙过渡修复' },
        ],
      },
    ],
  },
  {
    id: 'orthodontics',
    title: '正畸矫正',
    subtitle: '儿童早期干预、青少年固定矫治、成人隐形矫正，全程医生亲诊。',
    animationType: 'ortho',
    steps: [
      { step: '01', title: '初诊检查', desc: '拍全景片、侧位片，牙周检查，分析骨骼与牙列关系，出矫治方案。', duration: '1–2 次就诊' },
      { step: '02', title: '制定方案', desc: '确认矫治目标、疗程周期、选择矫治器类型（固定 / 隐形），签署知情同意。', duration: '1 次就诊' },
      { step: '03', title: '安装矫治器', desc: '固定矫治粘接托槽 + 安装弓丝；隐形矫正制作数字化矫治器并戴入。', duration: '1–2 小时' },
      { step: '04', title: '定期复诊', desc: '每 4–8 周复诊调整，换弓丝或领取新一副隐形牙套，监控牙移动进度。', duration: '全程 1–3 年' },
      { step: '05', title: '拆除 · 保持', desc: '达到矫治目标后拆除矫治器，制作保持器，巩固牙列位置至少 2 年。', duration: '长期佩戴' },
    ],
    priceGroups: [
      {
        title: '固定托槽矫正',
        note: '全口计费，含全程复诊',
        items: [
          { name: '金属普通托槽矫正', price: '6,800–8,800 元 / 全口', note: '传统矫正，性价比高，适合各类错颌畸形' },
          { name: '金属自锁托槽矫正', price: '12,800–16,800 元 / 全口', note: '舒适度高、复诊周期长，矫正速度更快' },
        ],
      },
      {
        title: '隐形矫正',
        note: '透明可摘牙套，含全程矫治器',
        items: [
          { name: '国产隐形矫正（正雅 / 时代天使）', price: '19,800–23,800 元 / 全口', note: '透明美观，适合轻 / 中度畸形' },
          { name: '进口隐形矫正（隐适美）', price: '26,800–32,800 元 / 全口', note: '高端定制，适配复杂畸形，舒适度极佳' },
        ],
      },
      {
        title: '矫正附加项',
        items: [
          { name: '保持器', price: '600–1,200 元 / 副', note: '矫正结束后佩戴，防止反弹' },
          { name: '支抗钉植入', price: '800–1,200 元 / 颗', note: '辅助矫正发力，含植入 + 术后护理' },
        ],
      },
    ],
  },
];

export const SERVICE_PROCESS = [
  {
    title: '数字化检查',
    desc: '拍个片，看看牙根情况（不疼）。',
    icon: 'ScanFace',
    color: 'bg-brand-primary'
  },
  {
    title: '透明沟通',
    desc: '根据您的预算 and 需求出方案，透明消费。',
    icon: 'PenTool',
    color: 'bg-brand-secondary'
  },
  {
    title: '微创治疗',
    desc: '采用微创技术，睡一觉或听首歌的时间就完了。',
    icon: 'Stethoscope',
    color: 'bg-brand-primary'
  },
  {
    title: '终身维护',
    desc: '我们会定期电话提醒您回来保养，终身维护。',
    icon: 'HeartHandshake',
    color: 'bg-brand-secondary'
  }
];
