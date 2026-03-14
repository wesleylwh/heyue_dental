import React, {useState} from 'react';
import {motion, AnimatePresence} from 'motion/react';
import {
  ChevronRight,
  Zap,
  Scissors,
  Sparkles,
  Heart,
  Smile,
  BadgeDollarSign,
  CircleDot,
  Clock,
  CheckCircle2,
  PlusCircle,
  Info,
  ArrowLeft,
} from 'lucide-react';
import {IMPLANT_PRICE_GUIDE, IMPLANT_BRANDS, IMPLANT_PROCESS} from '../constants';

interface ProjectsPageProps {
  projects?: {id: string}[];
  onSelectProject: (id: string) => void;
  onOpenConsultation?: () => void;
}

// 6 个核心服务板块
const SERVICE_BOARDS = [
  {
    id: 'implant',
    icon: BadgeDollarSign,
    title: '种植中心',
    desc: '单颗、多颗或全口缺牙，选合适的品牌和方案。',
    tags: ['数字化导板', '品牌透明', '即拔即种'],
    isImplant: true,
  },
  {
    id: 'endodontics',
    icon: Zap,
    title: '补牙 · 根管',
    desc: '蛀牙充填、冷热敏感、牙痛根管治疗。',
    tags: ['简单充填', '复杂充填', '显微根管'],
    isImplant: false,
  },
  {
    id: 'surgery',
    icon: Scissors,
    title: '拔牙 · 外科',
    desc: '普通拔牙、阻生智齿、复杂外科处置。',
    tags: ['普通拔牙', '阻生牙', '微创外科'],
    isImplant: false,
  },
  {
    id: 'fixed-restoration',
    icon: Sparkles,
    title: '修复 · 牙冠',
    desc: '牙体缺损修复、全瓷冠、固定桥、活动义齿。',
    tags: ['全瓷冠', '固定桥', '活动义齿'],
    isImplant: false,
  },
  {
    id: 'periodontal',
    icon: Heart,
    title: '牙周 · 洁牙',
    desc: '牙结石清洁、牙龈出血、牙周炎系统治疗。',
    tags: ['洁治', '龈下刮治', '牙周维护'],
    isImplant: false,
  },
  {
    id: 'orthodontics',
    icon: Smile,
    title: '正畸矫正',
    desc: '儿童早期干预、青少年固定矫治、成人隐形矫正。',
    tags: ['儿童矫正', '固定矫治', '隐形矫正'],
    isImplant: false,
  },
];

// 种植流程步骤图标
const processIcons = [CircleDot, Zap, Clock, Sparkles, CheckCircle2];

export const ProjectsPage: React.FC<ProjectsPageProps> = ({onSelectProject, onOpenConsultation}) => {
  const [implantOpen, setImplantOpen] = useState(false);

  const handleCardClick = (board: typeof SERVICE_BOARDS[0]) => {
    if (board.isImplant) {
      setImplantOpen(true);
      setTimeout(() => {
        document.getElementById('implant-detail')?.scrollIntoView({behavior: 'smooth', block: 'start'});
      }, 50);
    } else {
      onSelectProject(board.id);
    }
  };

  return (
    <div className="space-y-12 pb-12">

      {/* Header */}
      <header className="space-y-3">
        <h1 className="text-5xl font-extrabold text-slate-900 md:text-6xl">服务项目</h1>
        <p className="text-xl text-slate-500 max-w-xl">选择您需要了解的方向，点击查看详情。</p>
      </header>

      {/* 6 Service Boards */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {SERVICE_BOARDS.map((board, i) => {
          const Icon = board.icon;
          const isActive = board.isImplant && implantOpen;
          return (
            <motion.button
              key={board.id}
              initial={{opacity: 0, y: 12}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: i * 0.05}}
              onClick={() => handleCardClick(board)}
              className={`text-left rounded-[32px] border p-7 space-y-5 transition-all group
                ${isActive
                  ? 'bg-slate-900 border-slate-900'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'}`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center
                ${board.isImplant
                  ? isActive ? 'bg-amber-400 text-white' : 'bg-amber-500 text-white'
                  : isActive ? 'bg-white/15 text-white' : 'bg-slate-100 text-slate-700'}`}>
                <Icon size={22} />
              </div>

              <div className="space-y-1.5">
                <h3 className={`text-2xl font-bold ${isActive ? 'text-white' : 'text-slate-900'}`}>
                  {board.title}
                </h3>
                <p className={`text-base leading-7 ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                  {board.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {board.tags.map(tag => (
                  <span key={tag} className={`rounded-full px-3 py-1.5 text-sm font-medium
                    ${isActive ? 'bg-white/10 text-slate-200' : 'bg-slate-100 text-slate-600'}`}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className={`inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-3 transition-all
                ${isActive ? 'text-amber-300' : 'text-slate-500'}`}>
                {isActive ? '查看详情 ↓' : '了解详情'} {!isActive && <ChevronRight size={16} />}
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* 种植详情（展开区） */}
      <AnimatePresence>
        {implantOpen && (
          <motion.section
            id="implant-detail"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -10}}
            transition={{duration: 0.3}}
            className="space-y-12 scroll-mt-8"
          >
            {/* 返回按钮 */}
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-4 py-2 text-sm font-semibold text-amber-700">
                  <BadgeDollarSign size={15} />
                  数字化种植中心
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mt-3">品牌、流程与费用说明</h2>
                <p className="text-lg text-slate-500 max-w-2xl leading-8">
                  四大国际主流品牌，价格透明，费用构成分开说明，没有捆绑报价。
                </p>
              </div>
              <button
                onClick={() => setImplantOpen(false)}
                className="shrink-0 flex items-center gap-2 text-slate-400 hover:text-slate-700 transition-colors text-sm font-medium"
              >
                <ArrowLeft size={16} /> 收起
              </button>
            </div>

            {/* 品牌对比 */}
            <div className="space-y-5">
              <h3 className="text-2xl font-bold text-slate-900">品牌对比</h3>
              <div className="grid gap-5 md:grid-cols-2">
                {IMPLANT_BRANDS.map((brand, i) => (
                  <motion.div
                    key={brand.brand}
                    initial={{opacity: 0, y: 12}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: i * 0.07}}
                    className="rounded-[32px] bg-white border border-slate-200 p-7 space-y-5"
                  >
                    {/* Brand header */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">{brand.flag}</span>
                        <span className="text-sm text-slate-400 font-medium">{brand.country} · {brand.tagline}</span>
                      </div>
                      <h4 className="text-2xl font-extrabold text-slate-900">{brand.brand}</h4>
                    </div>

                    {/* Feature tags */}
                    <div className="flex flex-wrap gap-2">
                      {brand.features.map(f => (
                        <span key={f} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
                          {f}
                        </span>
                      ))}
                    </div>

                    {/* Series */}
                    <div className="space-y-3">
                      {brand.series.map(s => (
                        <div key={s.name} className="rounded-[22px] bg-slate-50 px-5 py-4">
                          <div className="flex items-start justify-between gap-3">
                            <div className="space-y-1">
                              <p className="font-semibold text-slate-800">{s.name}</p>
                              <p className="text-sm text-slate-400">牙冠：{s.crown}</p>
                              {s.note && <p className="text-sm text-slate-500 leading-6">{s.note}</p>}
                            </div>
                            <p className="shrink-0 text-xl font-extrabold text-slate-900">{s.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="text-sm text-slate-400 flex items-center gap-1.5">
                <Info size={13} /> 以上价格为参考区间，以院内实际检查方案为准。
              </p>
            </div>

            {/* 种植流程 */}
            <div className="rounded-[40px] bg-slate-900 p-8 md:p-10 space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white">种植全流程</h3>
                <p className="mt-2 text-slate-400 text-lg">从检查到戴牙，每一步提前说清楚。</p>
              </div>
              <div className="grid gap-4 md:grid-cols-5">
                {IMPLANT_PROCESS.map((step, i) => {
                  const Icon = processIcons[i] || CircleDot;
                  return (
                    <div key={step.step} className="relative">
                      {i < IMPLANT_PROCESS.length - 1 && (
                        <div className="absolute top-6 -right-2 hidden w-4 border-t border-dashed border-white/15 md:block" />
                      )}
                      <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 space-y-3 h-full">
                        <div className="flex items-center gap-2">
                          <span className="text-amber-400 font-bold text-sm">{step.step}</span>
                          <div className="w-9 h-9 rounded-xl bg-white/10 text-white flex items-center justify-center">
                            <Icon size={17} />
                          </div>
                        </div>
                        <div>
                          <p className="text-white font-bold">{step.title}</p>
                          <p className="text-slate-400 text-sm leading-6 mt-1">{step.desc}</p>
                        </div>
                        <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-300">
                          {step.duration}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 费用说明 */}
            <div className="grid gap-5 md:grid-cols-2">
              {/* 包含项目 */}
              <div className="rounded-[32px] bg-white border border-slate-200 p-7 space-y-5">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-emerald-500" />
                  <h3 className="text-xl font-bold text-slate-900">单颗种植通常包含</h3>
                </div>
                <div className="space-y-2">
                  {[
                    {item: '种植体', note: '品牌原厂，含植入操作'},
                    {item: '基台', note: '原厂配套'},
                    {item: '全瓷牙冠', note: '国产 / 进口可选'},
                    {item: '基础手术费', note: '麻醉、消毒、操作'},
                  ].map(({item, note}) => (
                    <div key={item} className="flex items-center gap-3 rounded-[18px] bg-slate-50 px-4 py-3">
                      <span className="w-5 h-5 shrink-0 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">✓</span>
                      <div className="flex items-baseline gap-2">
                        <p className="font-semibold text-slate-900">{item}</p>
                        <p className="text-sm text-slate-400">{note}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-400">不含骨增量等附加项目。</p>
              </div>

              {/* 附加费用 */}
              <div className="rounded-[32px] bg-white border border-slate-200 p-7 space-y-5">
                <div className="flex items-center gap-3">
                  <PlusCircle size={20} className="text-amber-500" />
                  <h3 className="text-xl font-bold text-slate-900">按需附加费用</h3>
                </div>
                <div className="space-y-2">
                  {IMPLANT_PRICE_GUIDE.extras.map(item => (
                    <div key={item.name} className="flex items-start justify-between gap-3 rounded-[18px] bg-slate-50 px-4 py-3">
                      <div>
                        <p className="font-semibold text-slate-900">{item.name}</p>
                        {item.note && <p className="text-sm text-slate-400 mt-0.5">{item.note}</p>}
                      </div>
                      <span className="shrink-0 font-bold text-slate-700">{item.price}</span>
                    </div>
                  ))}
                  <div className="rounded-[18px] bg-slate-50 px-4 py-3">
                    <p className="font-semibold text-slate-900">个性化基台 / 软组织处理</p>
                    <p className="text-sm text-slate-400 mt-0.5">根据骨量情况由医生判断</p>
                  </div>
                </div>
                <p className="text-xs text-slate-400">具体附加项目需面诊后确定。</p>
              </div>
            </div>

            {/* 牙冠参考 */}
            <div className="rounded-[32px] bg-white border border-slate-200 p-7 space-y-4">
              <h3 className="text-xl font-bold text-slate-900">牙冠类型参考</h3>
              <div className="grid gap-3 md:grid-cols-3">
                {IMPLANT_PRICE_GUIDE.crowns.map(item => (
                  <div key={item.name} className="rounded-[22px] bg-slate-50 px-5 py-4">
                    <p className="text-sm font-medium text-slate-400">{item.name}</p>
                    <p className="mt-2 text-xl font-bold text-slate-900">{item.price}</p>
                    {item.note && <p className="mt-1 text-sm text-slate-500">{item.note}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* 底部 CTA */}
            {onOpenConsultation && (
              <div className="rounded-[32px] bg-slate-900 p-8 text-white flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-2xl font-bold">免费种植方案设计</p>
                  <p className="text-slate-400 mt-1">医生一对一亲诊，出方案后再决定。</p>
                </div>
                <button
                  onClick={onOpenConsultation}
                  className="shrink-0 rounded-[20px] bg-white text-slate-900 font-bold text-lg px-8 py-4 hover:scale-105 transition-transform"
                >
                  立即预约
                </button>
              </div>
            )}

          </motion.section>
        )}
      </AnimatePresence>

    </div>
  );
};
