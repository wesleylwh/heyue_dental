import React from 'react';
import { motion } from 'motion/react';
import { DOCTORS, NURSES } from '../constants';
import { Award, Briefcase, CheckCircle2, Heart } from 'lucide-react';

interface ExpertsPageProps {
  onOpenConsultation: () => void;
}

export const ExpertsPage: React.FC<ExpertsPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="space-y-16 pb-12">
      <header>
        <h1 className="text-5xl font-extrabold text-slate-900 mb-4">医生团队</h1>
        <p className="text-2xl text-slate-500">分科诊疗，各有所长，放心把问题交给对的医生。</p>
      </header>

      {/* 医生 */}
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
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-4xl font-bold text-slate-900">{doc.name}</h2>
                  {!doc.isAvailable && (
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-sm font-medium">周二·四坐诊</span>
                  )}
                  {doc.isAvailable && (
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-sm font-medium">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />今日在院
                    </span>
                  )}
                </div>
                <p className="text-2xl text-brand-primary font-bold">{doc.title}</p>
              </div>

              <p className="text-slate-600 text-xl leading-relaxed italic bg-slate-50 p-8 rounded-[32px] border-l-8 border-brand-primary">
                "{doc.bio}"
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
                  {doc.specialties.map((s, j) => (
                    <span key={j} className="px-6 py-3 bg-white border border-slate-100 text-slate-700 rounded-2xl text-xl font-medium shadow-sm">
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

      {/* 护理团队 */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold text-slate-900">护理团队</h2>
          <p className="text-xl text-slate-500">贴心椅旁护理，让就诊过程更安心、更舒适。</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {NURSES.map((nurse, i) => (
            <motion.div
              key={nurse.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[36px] border border-slate-100 shadow-sm p-8 flex gap-8 items-start"
            >
              <div className="w-28 h-36 rounded-[24px] overflow-hidden flex-shrink-0 shadow-lg">
                <img src={nurse.image} alt={nurse.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>

              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{nurse.name}</h3>
                  <p className="text-base font-semibold text-emerald-600 mt-1">{nurse.title}</p>
                </div>

                <p className="text-base text-slate-500 leading-7 italic">"{nurse.bio}"</p>

                <div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm font-medium mb-2">
                    <Heart size={14} className="text-emerald-500" />
                    职责范围
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {nurse.duties.map(d => (
                      <span key={d} className="px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium border border-emerald-100">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
