import React from 'react';
import { motion } from 'motion/react';
import { Shield, Award, BadgeDollarSign, ScanSearch, Sparkles, Scissors, Zap, Smile, Heart, ChevronRight } from 'lucide-react';
import { CORE_SERVICE_BOARDS, DOCTORS, IMPLANT_PRICE_GUIDE, SERVICE_PROCESS } from '../constants';
import { 
  ScanFace, 
  PenTool, 
  Stethoscope, 
  HeartHandshake, 
} from 'lucide-react';

const iconMap: Record<string, any> = {
  ScanFace,
  PenTool,
  Stethoscope,
  HeartHandshake,
  ChevronRight,
  Sparkles,
  Scissors,
  Zap,
  Smile,
  Heart,
  BadgeDollarSign,
  ScanSearch,
};

const serviceBoardIcons: Record<string, any> = {
  fillings: Zap,
  surgery: Scissors,
  restoration: Sparkles,
  periodontal: Heart,
  orthodontics: Smile,
};

interface HomePageProps {
  onOpenConsultation: () => void;
  onNavigateToProjects: () => void;
  onNavigateToTab?: (tab: string) => void;
}

const QUICK_ENTRIES = [
  { label: '缺牙修复', sub: '种植 · 活动义齿', tab: 'projects', icon: Sparkles },
  { label: '牙齿矫正', sub: '隐形 · 固定矫正', tab: 'projects', icon: Smile },
  { label: '牙周护理', sub: '洁牙 · 刮治 · 牙龈', tab: 'projects', icon: Heart },
  { label: '洁牙检查', sub: '基础检查 · 预防', tab: 'projects', icon: Zap },
  { label: '医生团队', sub: '分科接诊 · 经验丰富', tab: 'experts', icon: ScanFace },
  { label: '诊所实力', sub: '设备 · 资质 · 保障', tab: 'about', icon: Stethoscope },
];

export const HomePage: React.FC<HomePageProps> = ({ onOpenConsultation, onNavigateToProjects, onNavigateToTab }) => {
  const goTab = (tab: string) => {
    if (tab === 'projects') { onNavigateToProjects(); return; }
    onNavigateToTab?.(tab);
  };

  return (
    <div className="space-y-16 pb-12">
      {/* Hero Section */}
      <section className="relative min-h-[360px] overflow-hidden rounded-[40px] shadow-xl md:min-h-[420px]">
        <img
          src="https://images.unsplash.com/photo-1629909608135-ca29e0c1e2b0?auto=format&fit=crop&q=80&w=1920"
          alt="Clinic Environment"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/60 to-transparent flex flex-col justify-center px-12 md:px-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
              邻里专家<br />
              <span className="text-brand-primary">透明看牙</span>
            </h1>
            <p className="text-xl text-slate-600 font-medium">
              像老朋友一样，为您提供最实在的口腔建议。<br />
              数字化种植、美学矫正，明白消费，质保无忧。
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => onOpenConsultation()}
                className="bg-brand-primary text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-blue-500/20 hover:scale-105 transition-transform"
              >
                立即咨询院长
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 六宫格快捷入口 */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {QUICK_ENTRIES.map((entry) => {
          const Icon = entry.icon;
          return (
            <motion.button
              key={entry.label}
              onClick={() => goTab(entry.tab)}
              whileHover={{ y: -3 }}
              className="bg-white rounded-[28px] border border-slate-100 shadow-sm p-6 flex items-center gap-4 text-left hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Icon size={22} />
              </div>
              <div>
                <p className="text-lg font-bold text-slate-900">{entry.label}</p>
                <p className="text-sm text-slate-500 mt-0.5">{entry.sub}</p>
              </div>
            </motion.button>
          );
        })}
      </section>

      {/* Advantages */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Shield, label: '明白消费', desc: '无隐形消费，预算透明' },
          { icon: Award, label: '质保无忧', desc: '终身维护，邻里信任' },
          { icon: Zap, label: '舒适微创', desc: '手法轻柔，几乎不疼' },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex items-center gap-6"
          >
            <div className="w-14 h-14 bg-slate-50 text-brand-primary rounded-2xl flex items-center justify-center shrink-0">
              <item.icon size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">{item.label}</h3>
              <p className="text-slate-500 text-sm">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Core Service Boards */}
      <section className="space-y-8">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold text-slate-900">核心服务板块</h2>
            <p className="max-w-3xl text-xl text-slate-500">把补牙、拔牙、修复、牙周、正畸先拆清楚。种植单独做价格看板，信息更直观。</p>
          </div>
          <button 
            onClick={onNavigateToProjects}
            className="text-brand-primary font-bold text-lg flex items-center gap-2 hover:translate-x-1 transition-transform"
          >
            查看完整服务项目 <ChevronRight size={20} />
          </button>
        </div>
        <div className="grid gap-5 md:grid-cols-2 min-[1200px]:grid-cols-3">
          {CORE_SERVICE_BOARDS.map(board => {
            const Icon = serviceBoardIcons[board.id] || Sparkles;
            return (
              <motion.article
                key={board.id}
                whileHover={{y: -4}}
                className={`rounded-[32px] border border-slate-200 bg-gradient-to-br ${board.accent} p-7 shadow-sm`}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white">
                  <Icon size={24} />
                </div>
                <div className="space-y-4">
                  <div>
                    <p className={`text-sm font-semibold ${board.tone}`}>核心项目</p>
                    <h3 className="mt-2 text-2xl font-bold text-slate-900">{board.title}</h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">{board.summary}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {board.highlights.map(item => (
                      <span key={item} className="rounded-full border border-slate-200 bg-white/85 px-3 py-2 text-sm font-medium text-slate-600">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Implant Board */}
      <section className="rounded-[40px] border border-slate-200 bg-white p-6 shadow-sm md:p-8 xl:p-10">
        <div className="grid gap-8 min-[1200px]:grid-cols-[minmax(0,0.9fr)_minmax(420px,1.1fr)]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
              <BadgeDollarSign size={16} />
              种植板块
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-slate-900">种植只看品牌与价格，先把预算和定位看明白。</h2>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">{IMPLANT_PRICE_GUIDE.intro}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {IMPLANT_PRICE_GUIDE.crowns.map(item => (
                <div key={item.name} className="rounded-[28px] bg-slate-50 px-5 py-5">
                  <p className="text-sm font-semibold text-slate-400">{item.name}</p>
                  <p className="mt-3 text-2xl font-bold text-slate-900">{item.price}</p>
                  {item.note && <p className="mt-2 text-sm text-slate-500">{item.note}</p>}
                </div>
              ))}
            </div>

            <div className="rounded-[32px] bg-slate-900 px-6 py-6 text-white">
              <div className="flex items-center gap-3">
                <ScanSearch size={22} />
                <h3 className="text-2xl font-bold">按需额外费用</h3>
              </div>
              <div className="mt-5 space-y-4">
                {IMPLANT_PRICE_GUIDE.extras.map(item => (
                  <div key={item.name} className="flex items-start justify-between gap-4 rounded-[22px] border border-white/10 bg-white/5 px-4 py-4">
                    <div>
                      <p className="text-lg font-semibold">{item.name}</p>
                      {item.note && <p className="mt-1 text-sm text-white/70">{item.note}</p>}
                    </div>
                    <span className="shrink-0 text-lg font-bold text-amber-300">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[36px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 md:p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">品牌 / 系列 / 参考价</p>
                <h3 className="mt-2 text-2xl font-bold text-slate-900">单颗种植价格参考</h3>
              </div>
              <span className="rounded-full bg-white px-3 py-2 text-sm font-medium text-slate-500 shadow-sm">以院内检查方案为准</span>
            </div>

            <div className="space-y-3">
              {IMPLANT_PRICE_GUIDE.brands.map(item => (
                <div key={`${item.brand}-${item.series}`} className="grid gap-4 rounded-[26px] border border-white bg-white px-5 py-5 shadow-sm sm:grid-cols-[minmax(0,1fr)_auto]">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <h4 className="text-xl font-bold text-slate-900">{item.brand}</h4>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-500">{item.series}</span>
                    </div>
                    <p className="text-sm text-slate-500">对应牙冠：{item.crown}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl font-extrabold text-brand-primary">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Process Section */}
      <section className="space-y-10">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-slate-900">看牙其实很简单</h2>
          <p className="text-xl text-slate-500">主打一个“省心、透明、不害怕”</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_PROCESS.map((step, i) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm relative group hover:shadow-md transition-shadow"
              >
                <div className={`w-16 h-16 ${step.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon size={32} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-brand-primary font-bold">0{i + 1}</span>
                    <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                  </div>
                  <p className="text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Real-time Doctors */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-slate-900">实时坐诊专家</h2>
          <div className="flex items-center gap-2 text-brand-primary font-medium">
            <span className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"></span>
            今日在院
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DOCTORS.filter(d => d.isAvailable).map((doc) => (
            <motion.div
              key={doc.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-sm flex items-center p-6 gap-8"
            >
              <div className="w-32 h-32 shrink-0 overflow-hidden rounded-2xl">
                <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900">{doc.name}</h3>
                <p className="text-brand-primary font-medium">{doc.title}</p>
                <div className="flex flex-wrap gap-2">
                  {doc.specialties.slice(0, 2).map((s, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-50 text-slate-600 rounded-full text-sm">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Connect with Us */}
      <section className="bg-brand-primary rounded-[40px] p-12 text-white text-center space-y-8 shadow-2xl shadow-blue-500/30 relative overflow-hidden">
        <div className="relative z-10 space-y-6">
          <h2 className="text-4xl font-bold">扫码加院长微信</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            不管是牙齿不齐、缺牙，还是简单的洗牙咨询，<br />
            院长亲自为您解答，给您最实在的建议。
          </p>
          <div className="flex flex-col items-center gap-6">
            <div className="bg-white p-4 rounded-[32px] shadow-inner">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=Consultation"
                alt="Consultation QR"
                className="w-40 h-40"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
