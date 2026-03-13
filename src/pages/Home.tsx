import React from 'react';
import { motion } from 'motion/react';
import { Shield, Award, Users } from 'lucide-react';
import { DOCTORS, SERVICE_PROCESS, PROJECTS } from '../constants';
import { 
  ScanFace, 
  PenTool, 
  Stethoscope, 
  HeartHandshake, 
  ChevronRight,
  Sparkles,
  Scissors,
  Zap,
  Smile,
  Heart
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
  Heart
};

interface HomePageProps {
  onOpenConsultation: () => void;
  onNavigateToProjects: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenConsultation, onNavigateToProjects }) => {
  return (
    <div className="space-y-16 pb-12">
      {/* Hero Section */}
      <section className="relative h-[400px] rounded-[40px] overflow-hidden shadow-xl">
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

      {/* Service Categories Summary */}
      <section className="space-y-8">
        <div className="flex items-end justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold text-slate-900">10 大服务模块</h2>
            <p className="text-xl text-slate-500">按口腔诊疗业务重新整理，先分清方向，再看细项</p>
          </div>
          <button 
            onClick={onNavigateToProjects}
            className="text-brand-primary font-bold text-lg flex items-center gap-2 hover:translate-x-1 transition-transform"
          >
            查看全部项目 <ChevronRight size={20} />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {PROJECTS.map((project, i) => {
            const Icon = iconMap[project.icon] || Zap;
            return (
              <motion.button
                key={project.id}
                whileHover={{ y: -5 }}
                onClick={onNavigateToProjects}
                className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm text-center space-y-3"
              >
                <div className="w-12 h-12 bg-slate-50 text-brand-primary rounded-2xl flex items-center justify-center mx-auto">
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-slate-900 leading-snug">{project.title.split(' / ')[0]}</h3>
              </motion.button>
            );
          })}
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
