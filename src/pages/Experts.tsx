import React from 'react';
import { motion } from 'motion/react';
import { DOCTORS } from '../constants';
import { Award, Briefcase, CheckCircle2 } from 'lucide-react';

interface ExpertsPageProps {
  onOpenConsultation: () => void;
}

export const ExpertsPage: React.FC<ExpertsPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="space-y-12 pb-12">
      <header>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">医生团队</h1>
        <p className="text-xl text-slate-500">分科诊疗，各有所长，放心把问题交给对的医生。</p>
      </header>

      <div className="space-y-8">
        {DOCTORS.map((doc, i) => (
          <motion.div
            key={doc.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-[40px] p-8 md:p-12 border border-slate-100 shadow-sm flex flex-col md:flex-row gap-12 items-center"
          >
            <div className="w-64 h-80 rounded-[32px] overflow-hidden flex-shrink-0 shadow-xl">
              <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            
            <div className="flex-1 space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-2">{doc.name}</h2>
                <p className="text-2xl text-brand-primary font-bold">{doc.title}</p>
              </div>

              <p className="text-slate-600 text-2xl leading-relaxed italic bg-slate-50 p-8 rounded-[32px] border-l-8 border-brand-primary">
                “{doc.bio}”
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-3xl">
                  <div className="flex items-center gap-3 text-slate-500 mb-2">
                    <Award size={20} />
                    <span className="text-lg">从医年限</span>
                  </div>
                  <p className="text-3xl font-bold text-slate-900">{doc.experience}年+ 临床经验</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-3xl">
                  <div className="flex items-center gap-3 text-slate-500 mb-2">
                    <Briefcase size={20} />
                    <span className="text-lg">成功案例</span>
                  </div>
                  <p className="text-3xl font-bold text-slate-900">{doc.cases}+ 例</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="text-brand-secondary" />
                  擅长术式
                </h3>
                <div className="flex flex-wrap gap-3">
                  {doc.specialties.map((s, i) => (
                    <span key={i} className="px-6 py-3 bg-white border border-slate-100 text-slate-700 rounded-2xl text-xl font-medium shadow-sm">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <button 
                onClick={onOpenConsultation}
                className="w-full bg-brand-primary text-white py-6 rounded-3xl font-bold text-2xl shadow-lg shadow-blue-500/20 hover:scale-[1.02] transition-transform"
              >
                预约专家咨询
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
