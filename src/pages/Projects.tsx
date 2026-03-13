import React, {useState} from 'react';
import {motion} from 'motion/react';
import {Project} from '../types';
import {
  ChevronRight,
  Heart,
  ListFilter,
  Scissors,
  ShieldPlus,
  Smile,
  Sparkles,
  Stethoscope,
  Syringe,
  Zap,
} from 'lucide-react';

const iconMap: Record<string, any> = {
  Zap,
  Smile,
  Sparkles,
  Stethoscope,
  Scissors,
  Heart,
  ShieldPlus,
  Syringe,
};

const projectNotes: Record<
  string,
  {summary: string; audience: string; emphasis: string; tags: string[]}
> = {
  diagnosis: {
    summary: '所有就诊路径的入口，先把问题看清楚再决定做什么。',
    audience: '初次到院、想先检查、想做整体评估的人。',
    emphasis: '重点不是做项目，而是先完成诊断、影像和方案判断。',
    tags: ['初诊入口', '影像检查', '治疗设计'],
  },
  periodontal: {
    summary: '牙龈、牙周、洁治和长期维护都集中在这里。',
    audience: '牙龈出血、口气重、牙周反复不适的人。',
    emphasis: '先控制炎症和清洁基础，再谈后续修复和美观。',
    tags: ['牙龈维护', '洁治刮治', '长期保养'],
  },
  surgery: {
    summary: '把拔牙、智齿和口腔外科项目收拢在同一模块里。',
    audience: '智齿肿痛、松动牙、需要创面处理的人。',
    emphasis: '重在评估风险、处理顺序和术后恢复安排。',
    tags: ['拔牙评估', '智齿处理', '外科处置'],
  },
  endodontics: {
    summary: '补牙、保牙、根管治疗都属于这一大块。',
    audience: '已经牙疼、龋坏、敏感或担心牙髓问题的人。',
    emphasis: '优先保留天然牙体，再判断修复深度。',
    tags: ['补牙保牙', '根管治疗', '疼痛处理'],
  },
  prevention: {
    summary: '适合儿童和日常口腔预防，不以复杂治疗为主。',
    audience: '希望提前预防蛀牙、做儿童基础防护的家庭。',
    emphasis: '把问题挡在前面，比事后治疗更轻松。',
    tags: ['儿童预防', '防龋护理', '家庭管理'],
  },
  'fixed-restoration': {
    summary: '固定桥、全冠、嵌体和咬合重建都在这一组。',
    audience: '缺损修复、固定修复、美观与功能兼顾的人。',
    emphasis: '更适合已经明确要做修复方向的人继续往下看。',
    tags: ['固定修复', '全冠嵌体', '咬合重建'],
  },
  'removable-restoration': {
    summary: '活动义齿、义齿维修和加工类项目统一在这里。',
    audience: '有活动义齿需求，或已经戴义齿需要调整的人。',
    emphasis: '把“做义齿”和“修义齿”放在同一个完整模块里。',
    tags: ['活动义齿', '维修调整', '加工加改'],
  },
  'ortho-support': {
    summary: '正畸检查、复诊和辅助项目单独成组，不再混进正式疗程里。',
    audience: '已经在做正畸，或正在做正畸前准备的人。',
    emphasis: '让正畸检查、正畸复诊和正式治疗三条线分开，结构更清楚。',
    tags: ['正畸检查', '复诊处置', '辅助项目'],
  },
  orthodontics: {
    summary: '乳牙期、替牙期、恒牙期、特殊正畸和保持治疗单独成体系。',
    audience: '明确想做正畸，或想了解不同阶段矫治路径的人。',
    emphasis: '重点是按阶段和病例类型拆开，不再把所有正畸项目混成一串。',
    tags: ['阶段矫治', '特殊正畸', '保持治疗'],
  },
  'other-care': {
    summary: '承接激光、漂白和其他不属于主模块的处置。',
    audience: '有明确项目名称，希望快速定位的人。',
    emphasis: '作为补充目录使用，不建议第一次咨询时从这里开始。',
    tags: ['补充处置', '激光漂白', '其他项目'],
  },
};

const groupConfigs = [
  {
    id: 'entry',
    title: '检查与基础治疗',
    description: '先从诊断、炎症控制和保牙入口进入，更符合真实就诊顺序。',
    tone: 'from-sky-50 via-white to-cyan-50',
    accent: 'text-sky-700',
    projectIds: ['diagnosis', 'periodontal', 'endodontics', 'prevention'],
  },
  {
    id: 'surgery',
    title: '外科与修复',
    description: '把拔牙、固定修复和活动义齿修复拆清楚，避免混成“修牙一大类”。',
    tone: 'from-emerald-50 via-white to-teal-50',
    accent: 'text-emerald-700',
    projectIds: ['surgery', 'fixed-restoration', 'removable-restoration'],
  },
  {
    id: 'ortho',
    title: '正畸路径',
    description: '正畸检查、复诊、辅助项目和正式治疗分开后，路径会清晰很多。',
    tone: 'from-amber-50 via-white to-rose-50',
    accent: 'text-amber-700',
    projectIds: ['ortho-support', 'orthodontics'],
  },
  {
    id: 'other',
    title: '补充处置',
    description: '把零散项目收口到补充模块里，不再散落在各主模块中。',
    tone: 'from-slate-50 via-white to-slate-100',
    accent: 'text-slate-700',
    projectIds: ['other-care'],
  },
];

interface ProjectsPageProps {
  projects: Project[];
  onSelectProject: (id: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({projects, onSelectProject}) => {
  const [activeGroup, setActiveGroup] = useState(groupConfigs[0].id);

  const groups = groupConfigs
    .map(group => ({
      ...group,
      projects: group.projectIds.map(id => projects.find(project => project.id === id)).filter(Boolean) as Project[],
    }))
    .filter(group => group.projects.length > 0);

  const scrollToGroup = (groupId: string) => {
    setActiveGroup(groupId);
    document.getElementById(`group-${groupId}`)?.scrollIntoView({behavior: 'smooth', block: 'start'});
  };

  return (
    <div className="space-y-14 pb-12">
      <header className="space-y-8">
        <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-600 shadow-sm">
          <ListFilter size={16} className="text-brand-primary" />
          服务项目导览
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.7fr)]">
          <div className="space-y-5">
            <h1 className="max-w-4xl text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl">
              先找到适合自己的看牙方向，
              <span className="block text-brand-primary">再看具体项目，会轻松很多。</span>
            </h1>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">建议这样看</p>
            <div className="mt-5 space-y-4">
              {[
                '先看自己更像检查、治疗、修复还是正畸需求',
                '每个模块里再看二级分类，不用一上来就看全部明细',
                '如果还不确定从哪开始，可以先点最接近自己症状的模块',
              ].map((item, index) => (
                <div key={item} className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white">
                    0{index + 1}
                  </div>
                  <p className="pt-1 text-base leading-7 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {groups.map(group => (
            <button
              key={group.id}
              onClick={() => scrollToGroup(group.id)}
              className={`rounded-full border px-5 py-3 text-left transition-all ${
                activeGroup === group.id
                  ? 'border-slate-900 bg-slate-900 text-white shadow-lg shadow-slate-900/10'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900'
              }`}
            >
              <div className="text-sm font-semibold">{group.title}</div>
              <div className={`mt-1 text-xs ${activeGroup === group.id ? 'text-white/70' : 'text-slate-400'}`}>
                {group.projects.length} 个模块
              </div>
            </button>
          ))}
        </div>
      </header>

      <div className="space-y-12">
        {groups.map((group, groupIndex) => (
          <section
            key={group.id}
            id={`group-${group.id}`}
            className={`rounded-[40px] border border-white/70 bg-gradient-to-br ${group.tone} px-6 py-8 shadow-[0_20px_70px_-50px_rgba(15,23,42,0.35)] md:px-10 md:py-10`}
          >
            <div className="mb-8 flex flex-col gap-5 border-b border-slate-200/70 pb-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-3">
                <p className={`text-sm font-semibold uppercase tracking-[0.28em] ${group.accent}`}>路径 0{groupIndex + 1}</p>
                <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">{group.title}</h2>
                <p className="max-w-3xl text-lg leading-8 text-slate-600">{group.description}</p>
              </div>
              <div className="rounded-[28px] border border-slate-200/80 bg-white/85 px-5 py-4 text-sm text-slate-500 backdrop-blur">
                先看这组适不适合你，再进入具体项目详情。
              </div>
            </div>

            <div className="grid gap-6">
              {group.projects.map(project => {
                const Icon = iconMap[project.icon] || Sparkles;
                const note = projectNotes[project.id] || projectNotes['other-care'];
                const visibleSections = project.sections?.slice(0, project.id === 'orthodontics' ? 5 : 3) || [];

                return (
                  <motion.article
                    key={project.id}
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.2}}
                    className="grid gap-6 rounded-[32px] border border-slate-200/80 bg-white p-7 shadow-sm lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:p-9"
                  >
                    <div className="space-y-6">
                      <div className="flex items-start gap-5">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[24px] bg-slate-900 text-white shadow-lg shadow-slate-900/10">
                          <Icon size={28} />
                        </div>
                        <div className="space-y-3">
                          <div className="flex flex-wrap items-center gap-3">
                            <h3 className="text-3xl font-bold text-slate-900">{project.title}</h3>
                            <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-500">
                              {(project.sections?.length || 0)} 个二级分类
                            </span>
                            <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-500">
                              {(project.subItems?.length || 0)} 项内容
                            </span>
                          </div>
                          <p className="max-w-2xl text-lg leading-8 text-slate-500">{project.description}</p>
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-3">
                        <div className="rounded-[24px] bg-slate-50 px-5 py-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">适合谁先看</p>
                          <p className="mt-2 text-sm leading-7 text-slate-600">{note.audience}</p>
                        </div>
                        <div className="rounded-[24px] bg-slate-50 px-5 py-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">这类重点</p>
                          <p className="mt-2 text-sm leading-7 text-slate-600">{note.emphasis}</p>
                        </div>
                        <div className="rounded-[24px] bg-slate-50 px-5 py-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">一句话概括</p>
                          <p className="mt-2 text-sm leading-7 text-slate-600">{note.summary}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {note.tags.map(tag => (
                          <span key={tag} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex h-full flex-col rounded-[28px] bg-slate-50 p-6">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-bold text-slate-900">优先看这些二级分类</h4>
                      </div>

                      <div className="mt-5 space-y-3">
                        {visibleSections.map(section => (
                          <div key={section.id} className="rounded-2xl border border-white bg-white px-4 py-4">
                            <div className="flex items-center justify-between gap-4">
                              <div className="flex items-center gap-3">
                                <div className="h-2.5 w-2.5 rounded-full bg-brand-primary" />
                                <span className="font-semibold text-slate-800">{section.title}</span>
                              </div>
                              <span className="text-sm text-slate-400">{section.items.length} 项</span>
                            </div>
                            <p className="mt-3 text-sm leading-7 text-slate-500">{section.items.slice(0, 2).join(' / ')}</p>
                          </div>
                        ))}
                      </div>

                      {project.sections && project.sections.length > visibleSections.length && (
                        <p className="mt-4 text-sm text-slate-400">
                          以及另外 {project.sections.length - visibleSections.length} 个二级分类，进入详情可查看完整内容。
                        </p>
                      )}

                      <button
                        onClick={() => onSelectProject(project.id)}
                        className="mt-auto flex items-center justify-between rounded-[24px] bg-slate-900 px-5 py-4 text-left text-white transition-transform hover:-translate-y-0.5"
                      >
                        <span>
                          <span className="block text-sm text-white/65">进入详情</span>
                          <span className="mt-1 block text-lg font-semibold">查看完整分类结构</span>
                        </span>
                        <ChevronRight size={22} />
                      </button>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
