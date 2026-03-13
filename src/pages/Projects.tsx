import React, {useState} from 'react';
import {motion} from 'motion/react';
import {Project} from '../types';
import {
  ArrowUpRight,
  ChevronRight,
  Heart,
  ListFilter,
  Scissors,
  Smile,
  Sparkles,
  Stethoscope,
  Zap,
} from 'lucide-react';

const iconMap: Record<string, any> = {
  Zap,
  Smile,
  Sparkles,
  Stethoscope,
  Scissors,
  Heart,
};

const projectNotes: Record<
  string,
  {summary: string; audience: string; emphasis: string; tags: string[]}
> = {
  cleaning: {
    summary: '适合第一次来院检查、洗牙保养和基础口腔筛查。',
    audience: '牙龈出血、口气重、想先做整体检查的人群。',
    emphasis: '先把问题看清，再决定是否需要进一步治疗。',
    tags: ['基础筛查', '日常保养', '预防优先'],
  },
  filling: {
    summary: '围绕牙疼、蛀牙、敏感和保牙治疗展开。',
    audience: '已经有疼痛、不敢咬东西、冷热刺激明显的人群。',
    emphasis: '先止痛、再保牙，尽量把复杂治疗留到后一步。',
    tags: ['疼痛处理', '保牙优先', '修复及时'],
  },
  extraction: {
    summary: '针对松动牙、智齿和反复发炎等外科问题。',
    audience: '智齿肿痛、发炎反复、需要拔除风险评估的人群。',
    emphasis: '重在判断是否需要拔、怎么拔更稳妥。',
    tags: ['微创处理', '风险评估', '术后护理'],
  },
  crown: {
    summary: '用于缺牙修复、牙冠重建和咀嚼功能恢复。',
    audience: '缺牙、崩裂、旧修复体不合适或咀嚼不稳的人群。',
    emphasis: '兼顾功能、美观和后期维护，方案更完整。',
    tags: ['缺牙修复', '功能重建', '长期维护'],
  },
  ortho: {
    summary: '覆盖儿童、青少年到成人的牙齿排齐与笑容改善。',
    audience: '牙列不齐、咬合不正、想改善笑容观感的人群。',
    emphasis: '先看脸型和咬合，再定矫正路径，不急着上方案。',
    tags: ['笑容改善', '咬合评估', '分期规划'],
  },
  pediatric: {
    summary: '以儿童预防、乳牙修复和家庭口腔习惯管理为主。',
    audience: '担心蛀牙、乳牙问题或希望做儿童早期防护的家庭。',
    emphasis: '降低孩子看牙恐惧感，比一次性做很多更重要。',
    tags: ['儿童预防', '家庭陪伴', '轻松就诊'],
  },
  general: {
    summary: '用于承接未归入主线项目的补充诊疗服务。',
    audience: '已经有明确项目名称，希望快速定位对应服务的人群。',
    emphasis: '作为补充目录看，不建议第一次沟通时从这里开始。',
    tags: ['补充项目', '目录查询', '扩展服务'],
  },
};

const groupConfigs = [
  {
    id: 'care',
    title: '日常护理与疼痛处理',
    description: '先解决“疼不疼、有没有炎症、需不需要进一步治疗”这类高频问题。',
    tone: 'from-sky-50 via-white to-cyan-50',
    accent: 'text-sky-700',
    projectIds: ['cleaning', 'filling', 'extraction'],
  },
  {
    id: 'restoration',
    title: '修复与笑容改善',
    description: '更适合已经有明确诉求，希望恢复功能或整体改善笑容的人群。',
    tone: 'from-emerald-50 via-white to-teal-50',
    accent: 'text-emerald-700',
    projectIds: ['crown', 'ortho'],
  },
  {
    id: 'family',
    title: '儿童与家庭照护',
    description: '用更轻松的方式处理孩子看牙、防蛀和早期干预问题。',
    tone: 'from-amber-50 via-white to-rose-50',
    accent: 'text-amber-700',
    projectIds: ['pediatric'],
  },
  {
    id: 'more',
    title: '补充诊疗目录',
    description: '承接扩展服务项目，适合已经明确知道要找什么项目时查看。',
    tone: 'from-slate-50 via-white to-slate-100',
    accent: 'text-slate-700',
    projectIds: ['general'],
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
      projects: group.projectIds
        .map(id => projects.find(project => project.id === id))
        .filter(Boolean) as Project[],
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
          服务项目总览
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.7fr)]">
          <div className="space-y-5">
            <h1 className="max-w-4xl text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl">
              不再把项目堆成一张表，
              <span className="block text-brand-primary">而是先帮你看清该从哪一类开始。</span>
            </h1>
            <p className="max-w-3xl text-xl leading-relaxed text-slate-500">
              我们把服务项目按就诊意图重新整理成几条清晰路径。先判断自己属于哪一类，再看重点项目，最后进入详情，信息会轻很多。
            </p>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">浏览建议</p>
            <div className="mt-5 space-y-4">
              {[
                '先按分类找方向，不用一上来就看全部细项',
                '每个项目先看“适合谁”和“重点”',
                '确实感兴趣，再点进去看完整方案',
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
                {group.projects.length} 个重点项目
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
                <p className={`text-sm font-semibold uppercase tracking-[0.28em] ${group.accent}`}>分类 0{groupIndex + 1}</p>
                <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">{group.title}</h2>
                <p className="max-w-3xl text-lg leading-8 text-slate-600">{group.description}</p>
              </div>
              <div className="rounded-[28px] border border-slate-200/80 bg-white/85 px-5 py-4 text-sm text-slate-500 backdrop-blur">
                建议先看本类重点，再进入项目详情，不必一次看完全部条目。
              </div>
            </div>

            <div className="grid gap-6">
              {group.projects.map(project => {
                const Icon = iconMap[project.icon] || Sparkles;
                const note = projectNotes[project.id] || projectNotes.general;
                const visibleItems = project.subItems?.slice(0, 4) || [];
                const hiddenCount = Math.max((project.subItems?.length || 0) - visibleItems.length, 0);

                return (
                  <motion.article
                    key={project.id}
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.2}}
                    className="grid gap-6 rounded-[32px] border border-slate-200/80 bg-white p-7 shadow-sm lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] lg:p-9"
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
                              {project.subItems?.length || 0} 项内容
                            </span>
                          </div>
                          <p className="max-w-2xl text-lg leading-8 text-slate-500">{project.description}</p>
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-3">
                        <div className="rounded-[24px] bg-slate-50 px-5 py-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">适合谁</p>
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
                          <span
                            key={tag}
                            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex h-full flex-col rounded-[28px] bg-slate-50 p-6">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-bold text-slate-900">优先了解这些</h4>
                        <ArrowUpRight size={18} className="text-slate-400" />
                      </div>

                      <div className="mt-5 space-y-3">
                        {visibleItems.map(item => (
                          <div
                            key={item}
                            className="flex items-center gap-3 rounded-2xl border border-white bg-white px-4 py-3 text-sm text-slate-600"
                          >
                            <div className="h-2 w-2 rounded-full bg-brand-primary" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {hiddenCount > 0 && (
                        <p className="mt-4 text-sm text-slate-400">以及另外 {hiddenCount} 项细分内容，可在详情里查看。</p>
                      )}

                      <button
                        onClick={() => onSelectProject(project.id)}
                        className="mt-auto flex items-center justify-between rounded-[24px] bg-slate-900 px-5 py-4 text-left text-white transition-transform hover:-translate-y-0.5"
                      >
                        <span>
                          <span className="block text-sm text-white/65">进入详情</span>
                          <span className="mt-1 block text-lg font-semibold">查看完整方案说明</span>
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

      <section className="rounded-[40px] bg-slate-900 px-8 py-10 text-white shadow-xl md:px-12 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.6fr)] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/50">为什么这样重组</p>
            <h2 className="mt-4 text-4xl font-bold">先分路径，再谈方案，信息才不会压人。</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
              我们把“全部项目一次摊开”改成“按需求进入”。这更适合平板浏览，也更符合真实咨询顺序。
            </p>
          </div>
          <div className="grid gap-4">
            {[
              '分类更清楚：先按护理、修复、儿童等方向进入',
              '重点更明确：每个项目先看适合谁和关键判断',
              '页面更松弛：减少像清单和表格一样的压迫感',
            ].map(item => (
              <div key={item} className="rounded-[24px] border border-white/10 bg-white/5 px-5 py-4 text-base text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
