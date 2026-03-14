import { Doctor, Project, Case } from './types';

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
    bio: '20年社区服务经验，特别有耐心。钟院长常说：“看牙不只是修补，更是关怀。”他手法轻柔，很多怕疼的邻居都点名找他。',
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
    bio: '李医生是咱们社区的“笑容魔术师”，手法轻快，小朋友都不怕。她擅长用最简单直观的方式解释复杂的矫正原理。',
  }
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
  {
    id: 'c1',
    category: 'ortho',
    beforeImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400',
    afterImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=400',
    label: '30岁邻居，隐形矫正18个月',
    testimonial: '钟院长技术很好，术后几乎没疼，现在笑起来自信多了。',
  },
  {
    id: 'c2',
    category: 'missing',
    beforeImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=400',
    afterImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400',
    label: '65岁邻居，全口种植，1天用牙',
    testimonial: '终于能吃排骨了，感觉年轻了十岁！',
  }
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
  crowns: [
    {name: '国产全瓷冠', price: '1,000 - 2,000 元'},
    {name: '进口全瓷冠', price: '3,000 - 4,000 元', note: '威兰德 / 泽康'},
    {name: '基础手术费', price: '约 1,500 - 3,000 元', note: '含麻醉、消毒、操作费'},
  ],
  extras: [
    {name: '术前检查', price: '约 500 - 1,000 元', note: 'CBCT + 口腔检查'},
    {name: '骨粉 + 骨膜', price: '2,000 - 6,000 元'},
    {name: '上颌窦提升', price: '3,000 - 8,000 元'},
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
      {name: '非亲水标准款', price: '7,800 - 8,800 / 颗', crown: '国产全瓷冠', note: '稳定可靠，性价比高'},
      {name: '亲水款 SLA Active', price: '10,000 - 12,000 / 颗', crown: '进口全瓷冠', note: '愈合期缩短约 40%，高要求人群首选'},
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
      {name: 'GS / TS 标准款', price: '4,250 - 5,000 / 颗', crown: '国产全瓷冠', note: '临床验证稳定，多数患者首选'},
      {name: 'MS 高端款', price: '5,500 - 6,500 / 颗', crown: '国产全瓷冠', note: '升级表面处理，骨结合表现更优'},
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
      {name: 'ET 标准款', price: '6,800 - 7,800 / 颗', crown: '国产全瓷冠', note: '适合拔牙后立即种植'},
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
      {name: 'BX 基础款', price: '3,600 - 4,600 / 颗', crown: '国产全瓷冠', note: '适合预算有限或多颗种植患者'},
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
        title: '基础洁治',
        note: '洁牙 · 抛光 · 牙龈处理',
        items: [
          { name: '龈上洁治术（全口）', price: '96 元/次', tag: '甲' },
          { name: '牙面光洁术', price: '3 元/颗', tag: '甲' },
          { name: '牙龈保护剂塞治', price: '20–30 元', tag: '甲' },
          { name: '牙脱敏治疗', price: '20 元/颗', tag: '甲' },
        ],
      },
      {
        title: '龈下刮治 · 根面处理',
        note: '每颗牙单独计费',
        items: [
          { name: '龈下刮治（前牙区）', price: '24 元/颗', tag: '甲' },
          { name: '龈下刮治（后牙区）', price: '30 元/颗', tag: '甲' },
          { name: '根面平整术', price: '30–40 元/颗', tag: '甲' },
          { name: '牙周冲洗', price: '10–20 元', tag: '甲' },
        ],
      },
      {
        title: '牙周手术',
        note: '复杂牙周炎按需处置',
        items: [
          { name: '牙龈翻瓣术', price: '600–1,000 元/区', tag: '乙' },
          { name: '牙龈切除术', price: '200–400 元', tag: '乙' },
          { name: '牙周固定（每颗）', price: '30 元/颗', tag: '甲' },
          { name: '牙周引导再生术', price: '1,200–2,000 元/区', tag: '丙' },
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
        title: '基础处置',
        items: [
          { name: '口腔局部麻醉', price: '15–30 元', tag: '甲' },
          { name: '颌神经阻滞麻醉', price: '20–40 元', tag: '甲' },
          { name: '创面缝合', price: '50–80 元', tag: '甲' },
          { name: '牙槽骨修整术', price: '80–120 元', tag: '甲' },
        ],
      },
      {
        title: '拔牙',
        note: '按牙位和复杂程度计费',
        items: [
          { name: '前牙拔除术', price: '50–70 元/颗', tag: '甲' },
          { name: '后牙拔除术', price: '75–90 元/颗', tag: '甲' },
          { name: '复杂牙拔除术', price: '130–160 元/颗', tag: '甲' },
          { name: '阻生牙拔除术（低位）', price: '280–380 元/颗', tag: '乙' },
          { name: '阻生牙拔除术（高位/水平）', price: '400–500 元/颗', tag: '乙' },
        ],
      },
      {
        title: '口腔外科处置',
        items: [
          { name: '口内脓肿切开引流', price: '50–100 元', tag: '甲' },
          { name: '阻生智齿龈瓣整形', price: '60–100 元', tag: '甲' },
          { name: '颞下颌关节复位', price: '50–80 元', tag: '甲' },
          { name: '口腔活检术', price: '100–200 元', tag: '乙' },
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
        title: '充填补牙',
        note: '按龋坏程度和部位',
        items: [
          { name: '简单充填术', price: '50–80 元/颗', tag: '甲' },
          { name: '复杂充填术', price: '100–150 元/颗', tag: '甲' },
          { name: '树脂嵌体修复术', price: '400–800 元/颗', tag: '丙' },
          { name: '牙体缺损粘接修复', price: '150–300 元/颗', tag: '乙' },
        ],
      },
      {
        title: '根管治疗',
        note: '按牙位和根管数量',
        items: [
          { name: '前牙根管治疗（1 根）', price: '300–450 元/牙', tag: '甲' },
          { name: '前磨牙根管治疗（1–2 根）', price: '450–650 元/牙', tag: '甲' },
          { name: '磨牙根管治疗（3–4 根）', price: '650–900 元/牙', tag: '甲' },
          { name: '显微根管治疗', price: '800–1,500 元/牙', tag: '丙', note: '复杂弯曲根管、钙化根管推荐' },
        ],
      },
      {
        title: '牙髓处置',
        items: [
          { name: '牙髓失活术', price: '30–50 元', tag: '甲' },
          { name: '开髓引流术', price: '50–80 元', tag: '甲' },
          { name: '牙髓摘除术（活髓）', price: '80–120 元/牙', tag: '甲' },
          { name: '根管封药', price: '30–50 元/次', tag: '甲' },
        ],
      },
    ],
  },
  {
    id: 'fixed-restoration',
    title: '修复 · 牙冠',
    subtitle: '牙体缺损、缺牙空间修复，全瓷冠、固定桥、活动义齿，按需定制。',
    animationType: 'crown',
    steps: [
      { step: '01', title: '口腔检查', desc: '评估缺牙位置、邻牙健康度、牙龈状态，确认适合的修复方式。', duration: '1 次就诊' },
      { step: '02', title: '牙体预备', desc: '磨改基牙形成固位形，为冠桥提供足够空间，保留最大牙体量。', duration: '30–60 分钟' },
      { step: '03', title: '数字取模', desc: '口内扫描仪精准取模，无传统印模不适感，数据传输至数字化加工中心。', duration: '15–30 分钟' },
      { step: '04', title: '制作加工', desc: 'CAD/CAM 数字化切削全瓷冠，或送技工所定制烤瓷/全瓷修复体。', duration: '1–2 周' },
      { step: '05', title: '戴入调合', desc: '试戴检查密合度和咬合关系，调磨后粘固，完成修复。', duration: '30–60 分钟' },
    ],
    priceGroups: [
      {
        title: '固定冠',
        note: '按材料和制作工艺',
        items: [
          { name: '金属全冠', price: '350–450 元/颗', tag: '甲' },
          { name: '烤瓷冠（金属基底）', price: '750–1,000 元/颗', tag: '乙' },
          { name: '全瓷冠（国产）', price: '1,200–1,800 元/颗', tag: '丙' },
          { name: '全瓷冠（进口）', price: '2,000–3,500 元/颗', tag: '丙', note: '威兰德 / 泽康等' },
          { name: 'CAD/CAM 数字化全冠', price: '1,500–2,000 元/颗', tag: '丙' },
        ],
      },
      {
        title: '活动义齿',
        note: '按缺失牙数量',
        items: [
          { name: '局部活动义齿（1–6 颗）', price: '360–900 元', tag: '甲' },
          { name: '局部活动义齿（7–10 颗）', price: '700–1,400 元', tag: '甲' },
          { name: '全口活动义齿', price: '1,000–1,800 元/副', tag: '甲' },
          { name: '即刻义齿', price: '1,200–2,000 元', tag: '乙' },
        ],
      },
      {
        title: '固定桥 · 其他',
        items: [
          { name: '固定桥（按每颗冠价格）', price: '按单颗 × 桥体数', note: '需两端基牙支持' },
          { name: '粘结桥（Maryland bridge）', price: '1,500–3,000 元', tag: '丙' },
          { name: '义齿维修（加牙/重衬）', price: '80–200 元', tag: '甲' },
          { name: '不良修复体拆除', price: '50–100 元', tag: '甲' },
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
      { step: '02', title: '制定方案', desc: '确认矫治目标、疗程周期、选择矫治器类型（固定/隐形），签署知情同意。', duration: '1 次就诊' },
      { step: '03', title: '安装矫治器', desc: '固定矫治粘接托槽 + 安装弓丝；隐形矫正制作数字化矫治器并戴入。', duration: '1–2 小时' },
      { step: '04', title: '定期复诊', desc: '每 4–8 周复诊调整，换弓丝或领取新一副隐形牙套，监控牙移动进度。', duration: '全程 1–3 年' },
      { step: '05', title: '拆除 · 保持', desc: '达到矫治目标后拆除矫治器，制作保持器，巩固牙列位置至少 2 年。', duration: '长期佩戴' },
    ],
    priceGroups: [
      {
        title: '儿童早期矫正',
        note: '乳牙期 · 替牙期',
        items: [
          { name: '乳牙期安氏Ⅰ类矫治', price: '3,000–4,000 元', tag: '甲' },
          { name: '替牙期活动矫治器', price: '4,000–6,000 元', tag: '甲' },
          { name: '颌导板 / 功能矫形', price: '3,000–5,000 元', tag: '乙' },
        ],
      },
      {
        title: '固定矫正',
        note: '恒牙期',
        items: [
          { name: '标准金属托槽固定矫治', price: '8,000–12,000 元', tag: '甲' },
          { name: '陶瓷托槽固定矫治', price: '12,000–18,000 元', tag: '乙' },
          { name: '自锁托槽固定矫治', price: '15,000–22,000 元', tag: '丙' },
        ],
      },
      {
        title: '隐形矫正',
        note: '数字化透明牙套',
        items: [
          { name: '局部隐形矫治', price: '8,000–15,000 元', tag: '丙' },
          { name: '全口隐形矫治（轻度）', price: '18,000–25,000 元', tag: '丙' },
          { name: '全口隐形矫治（中重度）', price: '25,000–35,000 元', tag: '丙' },
        ],
      },
      {
        title: '保持器',
        items: [
          { name: '固定舌侧保持器', price: '500–700 元/牙弓', tag: '甲' },
          { name: '活动保持器（Hawley型）', price: '700–1,000 元/副', tag: '甲' },
          { name: '透明压膜保持器', price: '800–1,200 元/副', tag: '乙' },
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
