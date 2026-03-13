import React from 'react';
import { motion } from 'motion/react';
import { Project } from '../types';
import { ArrowLeft, CheckCircle2, Info, ShieldCheck, Zap } from 'lucide-react';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
  onOpenConsultation: () => void;
}

import { ThreeDAnimation } from '../components/ThreeDAnimation';

export const ProjectDetailPage: React.FC<ProjectDetailProps> = ({ project, onBack, onOpenConsultation }) => {
  return (
    <div className="space-y-12 pb-12">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors text-xl font-medium"
      >
        <ArrowLeft size={24} />
        返回菜单
      </button>

      <header className="space-y-4">
        <h1 className="text-6xl font-extrabold text-slate-900 leading-tight">{project.title}</h1>
        <p className="text-2xl text-slate-500 font-medium">{project.description}</p>
      </header>

      {/* Sub Items / Features */}
      {project.subItems && (
        <section className="bg-white rounded-[40px] p-12 border border-slate-100 shadow-sm">
          <h2 className="text-4xl font-bold text-slate-900 mb-10 flex items-center gap-4">
            <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary">
              <CheckCircle2 size={32} />
            </div>
            包含服务内容
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.subItems.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-6 rounded-[32px] bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <span className="text-2xl font-bold text-slate-900">{item}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Comparisons */}
      {project.details?.comparisons && (
        <section className="bg-white rounded-[40px] p-12 border border-slate-100 shadow-sm">
          <h2 className="text-4xl font-bold text-slate-900 mb-10 flex items-center gap-4">
            <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary">
              <ShieldCheck size={32} />
            </div>
            为什么选禾悦？
          </h2>
          <div className="space-y-6">
            {project.details.comparisons.map((item, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center p-8 rounded-[32px] bg-slate-50 border border-slate-100">
                <span className="text-2xl font-bold text-slate-900">{item.label}</span>
                <div className="space-y-2">
                  <p className="text-sm text-slate-400 uppercase tracking-wider">传统方式</p>
                  <p className="text-xl text-slate-500 line-through">{item.valueA}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-brand-primary font-bold uppercase tracking-wider">禾悦数字化</p>
                  <p className="text-2xl text-brand-primary font-bold">{item.valueB}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Process */}
        {project.details?.process && (
          <section className="bg-brand-primary rounded-[40px] p-12 text-white shadow-xl">
            <h2 className="text-4xl font-bold mb-10">明白看牙，不走弯路</h2>
            <div className="space-y-10">
              {project.details.process.map((step, i) => (
                <div key={i} className="flex items-center gap-8">
                  <div className="w-14 h-14 bg-white text-brand-primary rounded-full flex items-center justify-center font-bold text-2xl shrink-0 shadow-lg">
                    {i + 1}
                  </div>
                  <span className="text-2xl font-medium leading-tight">{step}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Materials */}
        {project.details?.materials && (
          <section className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-sm">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <ShieldCheck className="text-emerald-500" />
              材料说明
            </h2>
            <div className="space-y-6">
              {project.details.materials.map((m, i) => (
                <div key={i} className="p-8 bg-white rounded-[32px] border border-slate-100 shadow-sm space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-2xl font-bold text-slate-900">{m.name}</h3>
                        <span className="px-3 py-0.5 bg-brand-secondary/10 text-brand-secondary rounded-full text-sm font-bold">
                          {m.origin}
                        </span>
                      </div>
                      <p className="text-slate-500 text-lg italic">{m.warranty}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-lg leading-relaxed pt-4 border-t border-slate-50">
                    {m.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* 3D Animation Section */}
      {(project.category === 'missing' || project.category === 'ortho') && (
        <section className="bg-emerald-50 rounded-[40px] p-12 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
              <Zap size={48} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">数字化原理演示</h2>
            <p className="text-xl text-slate-600">
              {project.category === 'missing' 
                ? '通过3D动画为您展示种植体如何精准植入，无需担心，过程微创且高效。' 
                : '通过数字化模拟展示牙齿排齐过程，预见您的完美笑容。'}
            </p>
            <div className="bg-white rounded-3xl shadow-inner p-8">
              <ThreeDAnimation type={project.category as 'missing' | 'ortho'} />
            </div>
            <button 
              onClick={onOpenConsultation}
              className="mt-8 bg-emerald-500 text-white px-12 py-6 rounded-3xl font-bold text-2xl shadow-xl hover:scale-105 transition-transform"
            >
              立即咨询预约
            </button>
          </div>
        </section>
      )}
      {/* CTA Section */}
      <section className="bg-brand-primary rounded-[40px] p-12 text-white text-center space-y-8 shadow-xl">
        <h2 className="text-4xl font-bold">还有疑问？</h2>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">
          每个人的牙齿情况都不同，建议您先和院长聊聊。<br />
          我们会根据您的具体情况，给出最实在的建议。
        </p>
        <button 
          onClick={() => onOpenConsultation()}
          className="bg-white text-brand-primary px-12 py-5 rounded-3xl font-bold text-2xl hover:bg-slate-50 transition-colors shadow-lg"
        >
          立即咨询预约
        </button>
      </section>
    </div>
  );
};
