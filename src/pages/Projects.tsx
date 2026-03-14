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
  Stethoscope,
  HelpCircle,
  BadgeCheck,
  CircleDot,
  Clock,
  CheckCircle2,
  PlusCircle,
  Info,
} from 'lucide-react';
import {CORE_SERVICE_BOARDS, IMPLANT_PRICE_GUIDE, IMPLANT_BRANDS, IMPLANT_PROCESS} from '../constants';

interface ProjectsPageProps {
  projects?: {id: string}[];
  onSelectProject: (id: string) => void;
  onOpenConsultation?: () => void;
}

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

// 种植流程步骤图标
const processIcons = [CircleDot, Zap, Clock, Sparkles, CheckCircle2];

export const ProjectsPage: React.FC<ProjectsPageProps> = ({onSelectProject, onOpenConsultation}) => {
  const [tab, setTab] = useState<'problem' | 'specialty'>('problem');

  const scrollToImplant = () => {
    const el = document.getElementById('section-implant');
    el?.scrollIntoView({behavior: 'smooth', block: 'start'});
  };

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
              onClick={scrollToImplant}
              className="text-left rounded-[32px] border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-7 space-y-5 hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center">
                <BadgeDollarSign size={22} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900">种植中心</h3>
                <p className="text-base text-slate-600 leading-7">单颗 / 多颗 / 全口种植，配合品牌对比和价格说明。</p>
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

      {/* ===== 种植中心完整模块 ===== */}
      <section id="section-implant" className="space-y-10 scroll-mt-8">

        {/* 种植标题区 */}
        <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-4 py-2 text-sm font-semibold text-amber-700">
              <BadgeDollarSign size={16} />
              数字化种植中心
            </div>
            <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
              先把品牌和预算看明白，<br className="hidden md:block" />再谈具体方案。
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl leading-8">
              采用国际主流种植系统，价格透明，方案个性化。种植体、牙冠、手术费用分开说明，没有捆绑，没有模糊报价。
            </p>
          </div>
          {onOpenConsultation && (
            <button
              onClick={onOpenConsultation}
              className="shrink-0 rounded-[24px] bg-amber-500 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-amber-500/20 hover:scale-105 transition-transform"
            >
              预约种植咨询
            </button>
          )}
        </div>

        {/* 品牌对比卡片 */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">品牌对比</h3>
          <div className="grid gap-5 md:grid-cols-2">
            {IMPLANT_BRANDS.map((brand, i) => (
              <motion.div
                key={brand.brand}
                initial={{opacity: 0, y: 16}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: i * 0.08}}
                className={`rounded-[32px] border ${brand.border} bg-gradient-to-br ${brand.accent} p-7 space-y-5`}
              >
                {/* Brand header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">{brand.flag}</span>
                      <span className="text-sm font-semibold text-slate-400">{brand.country}</span>
                    </div>
                    <h4 className="text-2xl font-extrabold text-slate-900">{brand.brand}</h4>
                    <p className="text-sm text-slate-500 mt-1">{brand.tagline}</p>
                  </div>
                </div>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-2">
                  {brand.features.map(f => (
                    <span key={f} className={`rounded-full px-3 py-1 text-sm font-medium ${brand.tagColor}`}>
                      {f}
                    </span>
                  ))}
                </div>

                {/* Series list */}
                <div className="space-y-3">
                  {brand.series.map(s => (
                    <div key={s.name} className="rounded-[24px] bg-white/90 border border-white px-5 py-4 shadow-sm">
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1">
                          <p className="text-base font-semibold text-slate-700">{s.name}</p>
                          <p className="text-sm text-slate-400">牙冠：{s.crown}</p>
                          {s.note && <p className="text-sm text-slate-500 leading-6">{s.note}</p>}
                        </div>
                        <p className="shrink-0 text-xl font-extrabold text-brand-primary">{s.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-slate-400 flex items-center gap-1.5">
            <Info size={14} /> 以上价格为参考区间，以院内实际检查方案为准。
          </p>
        </div>

        {/* 种植流程 */}
        <div className="rounded-[40px] bg-slate-900 p-8 md:p-10 space-y-8">
          <div>
            <h3 className="text-3xl font-bold text-white">种植牙全流程</h3>
            <p className="mt-2 text-slate-400 text-lg">从检查到戴牙，每一步都提前说清楚。</p>
          </div>
          <div className="grid gap-4 md:grid-cols-5">
            {IMPLANT_PROCESS.map((step, i) => {
              const Icon = processIcons[i] || CircleDot;
              return (
                <motion.div
                  key={step.step}
                  initial={{opacity: 0, y: 12}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{delay: i * 0.08}}
                  className="relative"
                >
                  {i < IMPLANT_PROCESS.length - 1 && (
                    <div className="absolute top-6 -right-2 hidden w-4 border-t border-dashed border-white/20 md:block" />
                  )}
                  <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 space-y-3 h-full">
                    <div className="flex items-center gap-2">
                      <span className="text-amber-400 font-bold text-sm">{step.step}</span>
                      <div className="w-9 h-9 rounded-xl bg-white/10 text-white flex items-center justify-center">
                        <Icon size={18} />
                      </div>
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">{step.title}</p>
                      <p className="text-slate-400 text-sm leading-6 mt-1">{step.desc}</p>
                    </div>
                    <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-300">
                      {step.duration}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <p className="text-sm text-slate-500 flex items-center gap-1.5">
            <Info size={14} className="shrink-0" /> 具体步骤和时间因个人骨量、身体状况而异，医生面诊后会详细告知。
          </p>
        </div>

        {/* 价格构成 + 额外费用 */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* 价格构成 */}
          <div className="rounded-[32px] bg-white border border-slate-100 shadow-sm p-7 space-y-5">
            <div className="flex items-center gap-3">
              <CheckCircle2 size={22} className="text-emerald-500" />
              <h3 className="text-2xl font-bold text-slate-900">单颗种植通常包含</h3>
            </div>
            <div className="space-y-3">
              {[
                {item: '种植体', note: '品牌原厂，含材料及植入操作'},
                {item: '基台', note: '原厂配套，连接种植体与牙冠'},
                {item: '全瓷牙冠', note: '国产 / 进口可选，颜色形态仿真牙'},
                {item: '基础手术费', note: '含麻醉、消毒、操作费'},
              ].map(({item, note}) => (
                <div key={item} className="flex items-start gap-3 rounded-[20px] bg-slate-50 px-5 py-4">
                  <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">✓</span>
                  <div>
                    <p className="font-semibold text-slate-900">{item}</p>
                    <p className="text-sm text-slate-500 mt-0.5">{note}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400">以上为常规单颗种植总价参考，不含骨增量等附加项目。</p>
          </div>

          {/* 额外费用 */}
          <div className="rounded-[32px] bg-white border border-slate-100 shadow-sm p-7 space-y-5">
            <div className="flex items-center gap-3">
              <PlusCircle size={22} className="text-amber-500" />
              <h3 className="text-2xl font-bold text-slate-900">按需产生的附加费用</h3>
            </div>
            <div className="space-y-3">
              {IMPLANT_PRICE_GUIDE.extras.map(item => (
                <div key={item.name} className="flex items-start justify-between gap-4 rounded-[20px] bg-slate-50 px-5 py-4">
                  <div>
                    <p className="font-semibold text-slate-900">{item.name}</p>
                    {item.note && <p className="text-sm text-slate-500 mt-0.5">{item.note}</p>}
                  </div>
                  <span className="shrink-0 font-bold text-amber-600">{item.price}</span>
                </div>
              ))}
              <div className="rounded-[20px] bg-slate-50 px-5 py-4">
                <p className="font-semibold text-slate-900">个性化基台 / 软组织处理</p>
                <p className="text-sm text-slate-500 mt-0.5">根据具体情况由医生判断是否需要</p>
              </div>
            </div>
            <p className="text-xs text-slate-400">具体附加项目需医生面诊后根据骨量情况确定。</p>
          </div>
        </div>

        {/* 牙冠类型速览 */}
        <div className="rounded-[32px] border border-slate-100 bg-white p-7 shadow-sm space-y-5">
          <h3 className="text-2xl font-bold text-slate-900">牙冠类型参考</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {IMPLANT_PRICE_GUIDE.crowns.map(item => (
              <div key={item.name} className="rounded-[24px] bg-slate-50 px-5 py-5 space-y-2">
                <p className="text-sm font-semibold text-slate-400">{item.name}</p>
                <p className="text-2xl font-bold text-slate-900">{item.price}</p>
                {item.note && <p className="text-sm text-slate-500">{item.note}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* 品牌特点速览 */}
        <div className="rounded-[32px] border border-slate-100 bg-white p-7 shadow-sm space-y-5">
          <h3 className="text-2xl font-bold text-slate-900">品牌特点速览</h3>
          <div className="space-y-4">
            {IMPLANT_BRANDS.map(brand => (
              <div key={brand.brand} className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex items-center gap-2 w-44 shrink-0">
                  <span>{brand.flag}</span>
                  <span className="font-bold text-slate-900">{brand.brand}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {brand.features.map(f => (
                    <span key={f} className={`rounded-full px-3 py-1 text-sm font-medium ${brand.tagColor}`}>
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 底部 CTA */}
        <div className="rounded-[40px] bg-gradient-to-r from-amber-500 to-amber-400 p-10 text-white text-center space-y-5 shadow-xl shadow-amber-500/20">
          <h3 className="text-3xl font-bold">免费种植方案设计</h3>
          <p className="text-lg opacity-90">医生一对一亲诊，出方案后再决定。</p>
          {onOpenConsultation && (
            <button
              onClick={onOpenConsultation}
              className="bg-white text-amber-600 font-bold text-xl px-12 py-4 rounded-[24px] hover:scale-105 transition-transform shadow-lg"
            >
              立即预约咨询
            </button>
          )}
        </div>

      </section>
    </div>
  );
};
