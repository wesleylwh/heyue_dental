import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Project } from '../types';
import { Zap, Smile, Sparkles, Stethoscope, Scissors, Heart, ChevronRight, List } from 'lucide-react';

const iconMap: Record<string, any> = {
  Zap,
  Smile,
  Sparkles,
  Stethoscope,
  Scissors,
  Heart,
};

interface ProjectsPageProps {
  projects: Project[];
  onSelectProject: (id: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ projects, onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState(projects[0]?.id || '');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToCategory = (id: string) => {
    setActiveCategory(id);
    const element = document.getElementById(`category-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-12 pb-12 relative">
      {/* Directory Sidebar - Sticky */}
      <aside className="lg:w-64 shrink-0 lg:sticky lg:top-8 h-fit space-y-6">
        <div className="flex items-center gap-3 text-slate-900 mb-4">
          <List className="text-brand-primary" size={24} />
          <h2 className="text-2xl font-bold">服务目录</h2>
        </div>
        <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 no-scrollbar">
          {projects.map((project, i) => (
            <button
              key={project.id}
              onClick={() => scrollToCategory(project.id)}
              className={`whitespace-nowrap flex items-center gap-3 px-4 py-3 rounded-2xl transition-all text-left ${
                activeCategory === project.id
                  ? 'bg-brand-primary text-white shadow-lg shadow-blue-500/20'
                  : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              <span className="font-bold opacity-50">{i + 1}.</span>
              <span className="font-medium">{project.title.split(' / ')[0]}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Content Area */}
      <div className="flex-1 space-y-16" ref={scrollContainerRef}>
        <header>
          <h1 className="text-5xl font-extrabold text-slate-900 mb-4">服务项目</h1>
          <p className="text-xl text-slate-500 max-w-2xl">
            禾悦口腔为您提供全方位的数字化诊疗方案，从基础护理到复杂修复，明白消费，质保无忧。
          </p>
        </header>

        <div className="space-y-20">
          {projects.map((project, i) => {
            const Icon = iconMap[project.icon] || Sparkles;
            return (
              <section 
                key={project.id} 
                id={`category-${project.id}`}
                className="scroll-mt-8 space-y-8"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-brand-primary/10 text-brand-primary rounded-2xl flex items-center justify-center">
                    <Icon size={32} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-bold text-slate-300">{i + 1}.</span>
                      <h2 className="text-4xl font-bold text-slate-900">{project.title}</h2>
                    </div>
                    <p className="text-xl text-slate-500 mt-1">{project.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.subItems?.map((subItem, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ x: 10 }}
                      onClick={() => onSelectProject(project.id)}
                      className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-md transition-all text-left flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-2 h-2 bg-brand-primary rounded-full" />
                        <span className="text-2xl font-bold text-slate-800">{subItem}</span>
                      </div>
                      <ChevronRight size={24} className="text-slate-300 group-hover:text-brand-primary transition-colors" />
                    </motion.button>
                  ))}
                </div>

                <div className="bg-slate-50 p-8 rounded-[40px] flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-slate-500 font-medium">参考价格</p>
                    <p className="text-3xl font-bold text-brand-primary">{project.priceRange}</p>
                  </div>
                  <button 
                    onClick={() => onSelectProject(project.id)}
                    className="bg-white text-brand-primary px-8 py-3 rounded-2xl font-bold shadow-sm hover:shadow-md transition-all"
                  >
                    查看详情方案
                  </button>
                </div>
              </section>
            );
          })}
        </div>

        {/* Why Choose Us Section */}
        <section className="bg-slate-900 rounded-[40px] p-12 md:p-20 text-white space-y-12">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold mb-6">为什么选择我们的数字化方案？</h2>
            <p className="text-xl text-slate-400">
              我们不仅提供治疗，更提供一份“明白、放心、不害怕”的诊疗体验。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: '精准', desc: '数字化口扫，误差控制在微米级' },
              { title: '快速', desc: '即刻种植，当天用牙，减少等待' },
              { title: '透明', desc: '全程数字化演示，预见术后效果' },
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <div className="text-brand-primary text-5xl font-bold">0{i + 1}</div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
