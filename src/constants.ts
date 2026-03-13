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
    id: 'cleaning',
    title: '洗牙 / 检查',
    description: '定期洁牙，预防牙周疾病。',
    icon: 'Sparkles',
    category: 'health',
    priceRange: '¥99 起',
    subItems: ['洁牙护理', '口腔检查', '小牙片 / 全景片 / CT检查', '儿童防蛀护理']
  },
  {
    id: 'filling',
    title: '补牙 / 牙疼',
    description: '及时修补，远离牙疼困扰。',
    icon: 'Stethoscope',
    category: 'health',
    priceRange: '¥280 起',
    subItems: ['蛀牙补牙', '牙齿敏感处理', '急性牙疼处理', '保牙治疗（根管）']
  },
  {
    id: 'extraction',
    title: '拔牙 / 智齿',
    description: '微创拔牙，解决智齿烦恼。',
    icon: 'Scissors',
    category: 'health',
    priceRange: '¥150 起',
    subItems: ['松动牙拔除', '智齿检查与拔除', '发炎肿痛处理', '拔牙后护理']
  },
  {
    id: 'crown',
    title: '镶牙 / 牙冠修复',
    description: '恢复咀嚼功能，重塑美观。',
    icon: 'Zap',
    category: 'missing',
    priceRange: '¥1,500 起',
    subItems: ['单颗缺牙修复', '多颗缺牙修复', '牙冠修复', '假牙调整与维护']
  },
  {
    id: 'ortho',
    title: '牙齿矫正',
    description: '排齐牙齿，重拾自信笑容。',
    icon: 'Smile',
    category: 'ortho',
    priceRange: '¥8,800 起',
    subItems: ['儿童早期矫正检查', '青少年矫正', '成人矫正咨询', '保持器与复诊']
  },
  {
    id: 'pediatric',
    title: '儿童齿科',
    description: '呵护乳牙，陪伴孩子健康成长。',
    icon: 'Heart',
    category: 'health',
    priceRange: '¥50 起',
    subItems: ['涂氟', '窝沟封闭', '乳牙补牙', '乳牙预成冠']
  }
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
