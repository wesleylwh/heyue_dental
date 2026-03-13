import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CASES } from '../constants';
import { Search, Quote } from 'lucide-react';

interface CasesPageProps {
  onOpenConsultation: () => void;
}

export const CasesPage: React.FC<CasesPageProps> = ({ onOpenConsultation }) => {
  const [filter, setFilter] = useState('all');

  const filteredCases = filter === 'all' ? CASES : CASES.filter(c => c.category === filter);

  return (
    <div className="space-y-16 pb-12">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-extrabold text-slate-900 leading-tight">邻居们的真实见证</h1>
          <p className="text-2xl text-slate-500 max-w-2xl">不看广告看疗效。这里记录了咱们社区邻居们，在禾悦重获健康笑容的真实故事。</p>
        </div>
        
        <div className="flex bg-white p-3 rounded-[32px] border border-slate-100 shadow-sm">
          {[
            { id: 'all', label: '全部' },
            { id: 'ortho', label: '矫正' },
            { id: 'missing', label: '种植' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id)}
              className={`px-10 py-4 rounded-2xl font-bold text-xl transition-all ${
                filter === item.id
                  ? 'bg-brand-primary text-white shadow-lg'
                  : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 gap-12">
        <AnimatePresence mode="popLayout">
          {filteredCases.map((c, i) => (
            <motion.div
              key={c.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-[40px] overflow-hidden border border-slate-100 shadow-sm flex flex-col lg:flex-row"
            >
              <div className="lg:w-1/2 grid grid-cols-2 gap-1 p-2 bg-slate-50">
                <div className="relative group">
                  <img src={c.beforeImage} alt="Before" className="w-full aspect-square object-cover rounded-3xl" referrerPolicy="no-referrer" />
                  <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-md text-white px-6 py-2 rounded-full text-lg font-bold">
                    治疗前
                  </div>
                </div>
                <div className="relative group">
                  <img src={c.afterImage} alt="After" className="w-full aspect-square object-cover rounded-3xl" referrerPolicy="no-referrer" />
                  <div className="absolute bottom-6 left-6 bg-brand-primary text-white px-6 py-2 rounded-full text-lg font-bold shadow-lg">
                    治疗后
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 p-12 flex flex-col justify-center space-y-8">
                <div>
                  <span className="px-6 py-2 bg-brand-primary/10 text-brand-primary rounded-full font-bold text-xl mb-4 inline-block">
                    {c.category === 'ortho' ? '美学矫正' : '数字化种植'}
                  </span>
                  <h3 className="text-4xl font-bold text-slate-900">{c.label}</h3>
                </div>

                <div className="bg-slate-50 p-10 rounded-[40px] relative">
                  <Quote className="absolute -top-6 -left-6 text-brand-primary opacity-20" size={64} />
                  <p className="text-2xl text-slate-700 italic leading-relaxed font-medium">
                    “{c.testimonial}”
                  </p>
                </div>

                <div className="flex items-center gap-6 text-slate-400">
                  <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center">
                    <Search size={32} className="text-slate-400" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl text-slate-900">社区邻居</p>
                    <p className="text-lg">已通过隐私保护处理</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <section className="bg-brand-primary rounded-[40px] p-12 md:p-20 text-white text-center space-y-8 shadow-2xl shadow-blue-500/30">
        <h2 className="text-5xl font-bold">您也可以拥有完美笑容</h2>
        <p className="text-2xl opacity-90 max-w-2xl mx-auto leading-relaxed">
          别再犹豫了，早一天治疗，早一天享受美食和自信笑容。<br />
          扫码咨询，我们为您提供免费的初步方案建议。
        </p>
        <button 
          onClick={() => onOpenConsultation()}
          className="bg-white text-brand-primary px-12 py-5 rounded-3xl font-bold text-2xl hover:bg-slate-50 transition-colors shadow-lg"
        >
          立即预约咨询
        </button>
      </section>
    </div>
  );
};
