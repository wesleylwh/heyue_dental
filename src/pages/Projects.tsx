import React, {useState} from 'react';
import {motion, AnimatePresence} from 'motion/react';
import {
  BadgeDollarSign,
  ChevronRight,
  Zap,
  Scissors,
  Sparkles,
  Heart,
  Smile,
  ScanSearch,
  Stethoscope,
  HelpCircle,
  BadgeCheck,
} from 'lucide-react';
import {CORE_SERVICE_BOARDS, IMPLANT_PRICE_GUIDE} from '../constants';

interface ProjectsPageProps {
  projects?: {id: string}[];
  onSelectProject: (id: string) => void;
}

// 按问题分类的入口卡片
const PROBLEM_CARDS = [
  {
    icon: HelpCircle,
    problem: '缺牙了怎么办',
    direction: '种植 · 义齿',
    desc: '单颗缺牙、多颗缺牙、全口修复，根据情况选种植或活动义齿。',
    projectId: 'fixed-restoration',
    color: 'bg-amber-50 border-amber-100',
    iconColor: 'bg-amber-100 text-amber-700',
    tag: 'text-amber-700',
  },
  {
    icon: Smile,
    problem: '牙齿不齐想矫正',
    direction: '正畸中心',
    desc: '儿童早期干预、青少年固定矫治、成人隐形矫正都在这里。',
    projectId: 'orthodontics',
    color: 'bg-rose-50 border-rose-100',
    iconColor: 'bg-rose-100 text-rose-700',
    tag: 'text-rose-700',
  },
  {
    icon: Zap,
    problem: '牙疼 · 蛀牙',
    direction: '补牙 · 根管',
    desc: '冷热敏感、龋齿充填、根管治疗，尽早处理避免拖成大问题。',
    projectId: 'endodontics',
    color: 'bg-sky-50 border-sky-100',
    iconColor: 'bg-sky-100 text-sky-700',
    tag: 'text-sky-700',
  },
  {
    icon: Heart,
    problem: '牙龈出血 · 牙周问题',
    direction: '牙周治疗',
    desc: '洁牙、刮治、牙龈炎症、牙周维护，牙周健康是所有治疗的基础。',
    projectId: 'periodontal',
    color: 'bg-cyan-50 border-cyan-100',
    iconColor: 'bg-cyan-100 text-cyan-700',
    tag: 'text-cyan-700',
  },
  {
    icon: Stethoscope,
    problem: '想洗牙 · 做个检查',
    direction: '检查 · 洁牙',
    desc: '常规口腔检查、CBCT 影像、洁牙预防，建议每半年一次。',
    projectId: 'diagnosis',
    color: 'bg-violet-50 border-violet-100',
    iconColor: 'bg-violet-100 text-violet-700',
    tag: 'text-violet-700',
  },
  {
    icon: Sparkles,
    problem: '牙齿有缺损 · 想改善',
    direction: '修复 · 美学',
    desc: '全瓷冠、固定桥、贴面，修复缺损的同时提升美观效果。',
    projectId: 'fixed-restoration',
    color: 'bg-emerald-50 border-emerald-100',
    iconColor: 'bg-emerald-100 text-emerald-700',
    tag: 'text-emerald-700',
  },
];

const boardIcons: Record<string, React.ComponentType<{size?: number}>> = {
  fillings: Zap,
  surgery: Scissors,
  restoration: Sparkles,
  periodontal: Heart,
  orthodontics: Smile,
};

const boardProjectIds: Record<string, string> = {
  fillings: 'endodontics',
  surgery: 'surgery',
  restoration: 'fixed-restoration',
  periodontal: 'periodontal',
  orthodontics: 'orthodontics',
};

export const ProjectsPage: React.FC<ProjectsPageProps> = ({onSelectProject}) => {
  const [tab, setTab] = useState<'problem' | 'specialty'>('problem');

  return (
    <div className="space-y-14 pb-12">
      {/* Header */}
      <header className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-500 shadow-sm">
          <BadgeCheck size={16} className="text-emerald-500" />
          服务项目
        </div>
        <h1 className="text-5xl font-extrabold text-slate-900 leading-tight md:text-6xl">
          根据您的需求，<br />
          <span className="text-emerald-500">找到适合的方向。</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl leading-9">
          可以按您遇到的问题找，也可以直接按专科方向浏览。不确定的话先咨询，我们帮您判断。
        </p>
      </header>

      {/* Dual Tab */}
      <div className="flex bg-slate-100 p-1.5 rounded-[20px] w-fit gap-1">
        {[
          {id: 'problem', label: '按您的情况找'},
          {id: 'specialty', label: '按诊疗方向找'},
        ].map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id as 'problem' | 'specialty')}
            className={`px-7 py-3 rounded-[16px] font-semibold text-base transition-all ${
              tab === t.id
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {tab === 'problem' ? (
          <motion.div
            key="problem"
            initial={{opacity: 0, y: 8}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -8}}
            transition={{duration: 0.2}}
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
            {PROBLEM_CARDS.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.button
                  key={card.problem}
                  initial={{opacity: 0, y: 16}}
                  animate={{opacity: 1, y: 0}}
                  transition={{delay: i * 0.05}}
                  onClick={() => onSelectProject(card.projectId)}
                  className={`text-left rounded-[32px] border ${card.color} p-7 space-y-4 hover:shadow-md transition-shadow group`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${card.iconColor}`}>
                    <Icon size={22} />
                  </div>
                  <div className="space-y-2">
                    <p className={`text-sm font-semibold ${card.tag}`}>{card.direction}</p>
                    <h3 className="text-2xl font-bold text-slate-900">{card.problem}</h3>
                    <p className="text-base text-slate-600 leading-7">{card.desc}</p>
                  </div>
                  <div className={`inline-flex items-center gap-1.5 text-sm font-semibold ${card.tag} group-hover:gap-3 transition-all`}>
                    查看方案 <ChevronRight size={16} />
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        ) : (
          <motion.div
            key="specialty"
            initial={{opacity: 0, y: 8}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -8}}
            transition={{duration: 0.2}}
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
            {CORE_SERVICE_BOARDS.map((board, i) => {
              const Icon = boardIcons[board.id] || Sparkles;
              return (
                <motion.button
                  key={board.id}
                  initial={{opacity: 0, y: 16}}
                  animate={{opacity: 1, y: 0}}
                  transition={{delay: i * 0.05}}
                  onClick={() => onSelectProject(boardProjectIds[board.id] || 'diagnosis')}
                  className={`text-left rounded-[32px] border border-slate-200 bg-gradient-to-br ${board.accent} p-7 space-y-5 hover:shadow-md transition-shadow group`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
                    <Icon size={22} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-900">{board.title}</h3>
                    <p className="text-base text-slate-600 leading-7">{board.summary}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {board.highlights.map(item => (
                      <span key={item} className="rounded-full border border-slate-200 bg-white/85 px-3 py-1.5 text-sm font-medium text-slate-600">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className={`inline-flex items-center gap-1.5 text-sm font-semibold ${board.tone} group-hover:gap-3 transition-all`}>
                    了解详情 <ChevronRight size={16} />
                  </div>
                </motion.button>
              );
            })}

            {/* 种植 special card */}
            <motion.button
              initial={{opacity: 0, y: 16}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: CORE_SERVICE_BOARDS.length * 0.05}}
              onClick={() => {
                const el = document.getElementById('section-implant');
                el?.scrollIntoView({behavior: 'smooth', block: 'start'});
              }}
              className="text-left rounded-[32px] border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-7 space-y-5 hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center">
                <BadgeDollarSign size={22} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900">种植中心</h3>
                <p className="text-base text-slate-600 leading-7">单颗 / 多颗 / 全口种植，配合品牌选择和价格说明。</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['数字化种植', '品牌对比', '价格透明', '即拔即种'].map(item => (
                  <span key={item} className="rounded-full border border-amber-200 bg-white/85 px-3 py-1.5 text-sm font-medium text-amber-700">
                    {item}
                  </span>
                ))}
              </div>
              <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700 group-hover:gap-3 transition-all">
                查看品牌与价格 <ChevronRight size={16} />
              </div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 种植品牌看板 */}
      <section
        id="section-implant"
        className="rounded-[40px] border border-slate-200 bg-white p-6 shadow-sm md:p-8 xl:p-10"
      >
        <div className="grid gap-8 min-[1200px]:grid-cols-[minmax(0,0.9fr)_minmax(420px,1.1fr)]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
              <BadgeDollarSign size={16} />
              种植板块 · 品牌与价格
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-slate-900">先把品牌和预算看明白，再谈具体方案。</h2>
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
            <div className="mb-5 flex flex-col gap-4 min-[900px]:flex-row min-[900px]:items-center min-[900px]:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">品牌 / 系列 / 参考价</p>
                <h3 className="mt-2 text-2xl font-bold text-slate-900">单颗种植价格参考</h3>
              </div>
              <span className="rounded-full bg-white px-3 py-2 text-sm font-medium text-slate-500 shadow-sm">以院内检查方案为准</span>
            </div>

            <div className="space-y-3">
              {IMPLANT_PRICE_GUIDE.brands.map(item => (
                <motion.div
                  key={`${item.brand}-${item.series}`}
                  initial={{opacity: 0, y: 14}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true, amount: 0.15}}
                  className="grid gap-4 rounded-[26px] border border-white bg-white px-5 py-5 shadow-sm sm:grid-cols-[minmax(0,1fr)_auto]"
                >
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
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
