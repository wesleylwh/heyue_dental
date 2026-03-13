import React from 'react';
import {motion} from 'motion/react';
import {Project} from '../types';
import {
  ArrowLeft,
  CheckCircle2,
  Compass,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';
import {ThreeDAnimation} from '../components/ThreeDAnimation';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
  onOpenConsultation: () => void;
}

const detailNotes: Record<
  string,
  {intro: string; suitable: string; focus: string; rhythm: string}
> = {
  cleaning: {
    intro: '从口腔检查和基础清洁入手，适合把问题先看清楚。',
    suitable: '第一次到院、牙龈出血、想先排查问题的人。',
    focus: '先判断炎症和牙周状况，再决定要不要继续处理。',
    rhythm: '通常可先完成检查与沟通，再安排后续保养节奏。',
  },
  filling: {
    intro: '以缓解疼痛、处理龋坏和保留天然牙体为核心。',
    suitable: '有牙疼、敏感、冷热刺激明显或已有蛀牙的人。',
    focus: '先止痛和控制问题，再评估是否需要保牙治疗。',
    rhythm: '可按“疼痛处理 - 修复 - 复查”分步完成。',
  },
  extraction: {
    intro: '围绕松动牙、智齿和反复发炎问题做外科判断。',
    suitable: '智齿不适、发炎反复或需要拔牙评估的人。',
    focus: '先判断是否必须拔除，以及术前风险和恢复安排。',
    rhythm: '检查评估后再定处理时间，不做仓促决策。',
  },
  crown: {
    intro: '帮助恢复缺损牙或缺牙后的咀嚼功能与外观完整度。',
    suitable: '缺牙、牙体崩裂、旧修复体不稳的人。',
    focus: '同步看功能、美观和后期维护，不只解决当下缺损。',
    rhythm: '常按检查、方案确认、修复制作、佩戴复查推进。',
  },
  ortho: {
    intro: '不是只看整不整齐，而是综合脸型、咬合和笑容比例。',
    suitable: '牙齿不齐、咬合不正、想改善笑容的人。',
    focus: '先看适不适合做、怎么做更稳，而不是急着选器械。',
    rhythm: '先评估，再分阶段执行和复诊调整。',
  },
  pediatric: {
    intro: '儿童齿科的重点不是“多做项目”，而是建立轻松就诊体验。',
    suitable: '担心蛀牙、换牙异常或希望做预防防护的家庭。',
    focus: '优先降低恐惧感，帮助孩子形成长期口腔保健习惯。',
    rhythm: '建议从检查和预防开始，再按孩子接受度逐步推进。',
  },
  general: {
    intro: '这里承接一些补充诊疗项目，适合已经有明确名称时查看。',
    suitable: '已经知道项目名称，想快速核对服务范围的人。',
    focus: '更适合作为补充目录，而不是第一次咨询入口。',
    rhythm: '如不确定从哪开始，建议先回到分类页找主路径。',
  },
};

export const ProjectDetailPage: React.FC<ProjectDetailProps> = ({project, onBack, onOpenConsultation}) => {
  const note = detailNotes[project.id] || detailNotes.general;
  const items = project.subItems || [];
  const primaryItems = items.slice(0, 6);
  const secondaryItems = items.slice(6);

  return (
    <div className="space-y-12 pb-12">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-lg font-medium text-slate-500 transition-colors hover:text-slate-900"
      >
        <ArrowLeft size={22} />
        返回服务分类
      </button>

      <header className="grid gap-6 rounded-[40px] bg-gradient-to-br from-white via-slate-50 to-sky-50 p-8 shadow-sm ring-1 ring-slate-100 md:p-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
        <div className="space-y-5">
          <div className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-500">
            服务详情
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl">{project.title}</h1>
            <p className="max-w-3xl text-2xl leading-10 text-slate-500">{project.description}</p>
            <p className="max-w-3xl text-lg leading-8 text-slate-600">{note.intro}</p>
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">先看这三个判断</p>
          <div className="mt-5 space-y-4">
            {[
              {label: '适合谁', value: note.suitable},
              {label: '这类重点', value: note.focus},
              {label: '常见节奏', value: note.rhythm},
            ].map(item => (
              <div key={item.label} className="rounded-[24px] bg-slate-50 px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">{item.label}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {items.length > 0 && (
        <section className="rounded-[40px] border border-slate-100 bg-white p-8 shadow-sm md:p-10">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
              <CheckCircle2 size={28} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900">这类服务通常会覆盖</h2>
              <p className="mt-1 text-lg text-slate-500">先看重点项目，补充项目放在后面，避免一开始信息过载。</p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">重点内容</p>
              <div className="grid gap-4 md:grid-cols-2">
                {primaryItems.map(item => (
                  <motion.div
                    key={item}
                    initial={{opacity: 0, y: 12}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="rounded-[28px] border border-slate-100 bg-slate-50 px-5 py-5"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-2 h-2.5 w-2.5 rounded-full bg-brand-primary" />
                      <p className="text-lg font-semibold leading-8 text-slate-800">{item}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">补充说明</p>
              <div className="mt-5 space-y-4">
                {[
                  {icon: Compass, title: '先判断，再决定', text: note.focus},
                  {icon: HeartPulse, title: '按节奏推进', text: note.rhythm},
                  {icon: Sparkles, title: '沟通更重要', text: '如果你还不确定该不该做，先咨询，不急着当场定方案。'},
                ].map(item => (
                  <div key={item.title} className="rounded-[24px] border border-white bg-white px-5 py-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-white">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                        <p className="mt-1 text-sm leading-7 text-slate-600">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {secondaryItems.length > 0 && (
                <div className="mt-6 rounded-[24px] border border-dashed border-slate-200 px-5 py-4">
                  <p className="text-sm font-semibold text-slate-500">其余补充项目</p>
                  <p className="mt-2 text-sm leading-7 text-slate-500">{secondaryItems.join(' / ')}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {project.details?.comparisons && (
        <section className="rounded-[40px] border border-slate-100 bg-white p-8 shadow-sm md:p-10">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900">为什么会这样安排</h2>
              <p className="mt-1 text-lg text-slate-500">把传统处理方式和数字化方案放在一起，更容易看出差异。</p>
            </div>
          </div>
          <div className="space-y-5">
            {project.details.comparisons.map(item => (
              <div
                key={item.label}
                className="grid gap-5 rounded-[28px] border border-slate-100 bg-slate-50 p-6 md:grid-cols-[220px_minmax(0,1fr)_minmax(0,1fr)] md:items-center"
              >
                <h3 className="text-2xl font-bold text-slate-900">{item.label}</h3>
                <div className="rounded-[22px] bg-white px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">传统方式</p>
                  <p className="mt-2 text-lg leading-8 text-slate-500">{item.valueA}</p>
                </div>
                <div className="rounded-[22px] bg-slate-900 px-5 py-4 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">禾悦数字化</p>
                  <p className="mt-2 text-lg leading-8 text-white">{item.valueB}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="grid gap-8 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        {project.details?.process && (
          <section className="rounded-[40px] bg-slate-900 p-8 text-white shadow-xl md:p-10">
            <h2 className="text-3xl font-bold">典型沟通与治疗节奏</h2>
            <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-300">这里不是机械流程表，而是帮助你理解这类项目通常怎么一步步推进。</p>
            <div className="mt-8 space-y-5">
              {project.details.process.map((step, index) => (
                <div key={step} className="flex items-start gap-5 rounded-[26px] border border-white/10 bg-white/5 px-5 py-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-lg font-bold text-slate-900">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-lg leading-8 text-slate-100">{step}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {project.details?.materials && (
          <section className="rounded-[40px] border border-slate-100 bg-white p-8 shadow-sm md:p-10">
            <h2 className="text-3xl font-bold text-slate-900">常见材料与选择方向</h2>
            <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-500">这里重点讲材料差异和适配场景，不再把它做成压人的参数清单。</p>
            <div className="mt-8 space-y-5">
              {project.details.materials.map(material => (
                <div key={material.name} className="rounded-[28px] border border-slate-100 bg-slate-50 p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-bold text-slate-900">{material.name}</h3>
                    <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-brand-secondary shadow-sm">
                      {material.origin}
                    </span>
                    <span className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-500">
                      {material.warranty}
                    </span>
                  </div>
                  <p className="mt-4 text-lg leading-8 text-slate-600">{material.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {(project.category === 'missing' || project.category === 'ortho') && (
        <section className="rounded-[40px] bg-emerald-50 p-8 text-center shadow-sm md:p-12">
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white text-emerald-600 shadow-sm">
              <Zap size={46} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">数字化原理演示</h2>
            <p className="text-xl leading-9 text-slate-600">
              {project.category === 'missing'
                ? '通过演示先理解种植或修复逻辑，比直接听术语更轻松。'
                : '先看到排齐逻辑和变化路径，再进入具体矫正方案会更容易判断。'}
            </p>
            <div className="rounded-[32px] bg-white p-6 shadow-inner md:p-8">
              <ThreeDAnimation type={project.category as 'missing' | 'ortho'} />
            </div>
          </div>
        </section>
      )}

      <section className="rounded-[40px] bg-brand-primary p-10 text-white shadow-xl md:p-12">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div>
            <h2 className="text-4xl font-bold">还不确定自己适合哪种方案？</h2>
            <p className="mt-4 max-w-3xl text-xl leading-9 text-white/85">
              可以先把症状、担心点或想解决的问题告诉我们，再决定要不要往下一步走，不需要先把所有项目研究完。
            </p>
          </div>
          <button
            onClick={() => onOpenConsultation()}
            className="rounded-[26px] bg-white px-10 py-5 text-2xl font-bold text-brand-primary shadow-lg transition-transform hover:-translate-y-0.5"
          >
            立即咨询预约
          </button>
        </div>
      </section>
    </div>
  );
};
