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
      {id: 'diagnosis-basic', title: '门诊诊查', items: ['普通门诊诊查费', '全口牙病系统检查与治疗设计']},
      {id: 'diagnosis-imaging', title: '影像与测量', items: ['口腔X线一次成像', 'CT / CBCT / 曲面体层成像']},
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
      {id: 'periodontal-cleaning', title: '洁治与刮治', items: ['洁治', '龈下刮治', '超声根面平整术']},
      {id: 'periodontal-gum', title: '牙龈与牙周处理', items: ['牙龈翻瓣术', '牙龈切除术', '牙周固定']},
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
    title: '正畸检查 / 复诊 / 辅助项目',
    description: '将正畸检查、复诊处置和辅助性项目单独归类，更利于理解。',
    icon: 'Stethoscope',
    category: 'ortho',
    priceRange: '',
    subItems: ['带环制备', '固定矫治器复诊处置', '拆除固定装置', '调颌'],
    sections: [
      {id: 'ortho-support-check', title: '检查与制备', items: ['带环制备', '颌导板制备', '错颌畸形初检']},
      {id: 'ortho-support-follow', title: '复诊与辅助', items: ['固定矫治器复诊处置', '拆除固定装置', '调颌']},
    ],
  },
  {
    id: 'orthodontics',
    title: '正畸治疗',
    description: '把乳牙期、替牙期、恒牙期、特殊正畸与保持治疗整体整理在一起。',
    icon: 'Smile',
    category: 'ortho',
    priceRange: '',
    subItems: ['乳牙期正畸', '替牙期正畸', '恒牙期正畸', '正畸保持器治疗'],
    sections: [
      {id: 'orthodontics-early', title: '乳牙期 / 替牙期', items: ['乳牙期安氏I类错颌正畸治疗', '替牙期安氏I类错颌活动矫治器正畸治疗']},
      {id: 'orthodontics-late', title: '恒牙期 / 保持', items: ['恒牙期安氏I类错颌固定矫治器正畸治疗', '正畸保持器治疗']},
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
