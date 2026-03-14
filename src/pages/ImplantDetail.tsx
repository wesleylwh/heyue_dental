import React from 'react';
import {motion} from 'motion/react';
import {
  ArrowLeft,
  BadgeDollarSign,
  CircleDot,
  Zap,
  Clock,
  Sparkles,
  CheckCircle2,
  PlusCircle,
  Info,
} from 'lucide-react';
import {IMPLANT_PRICE_GUIDE, IMPLANT_BRANDS, IMPLANT_PROCESS} from '../constants';

interface ImplantDetailPageProps {
  onBack: () => void;
  onOpenConsultation?: () => void;
}

const processIcons = [CircleDot, Zap, Clock, Sparkles, CheckCircle2];

export const ImplantDetailPage: React.FC<ImplantDetailPageProps> = ({onBack, onOpenConsultation}) => {
  return (
    <div className="space-y-12 pb-12">

      {/* Header */}
      <header className="space-y-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-slate-700 transition-colors text-sm font-medium"
        >
          <ArrowLeft size={16} /> 返回服务项目
        </button>
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-4 py-2 text-sm font-semibold text-amber-700">
            <BadgeDollarSign size={15} />
            数字化种植中心
          </div>
          <h1 className="text-5xl font-extrabold text-slate-900 md:text-6xl">种植牙</h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-8">
            四大国际主流品牌，价格透明，费用构成分开说明，没有捆绑报价。
          </p>
        </div>
      </header>

      {/* 1. 种植全流程 */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900">种植全流程</h2>
        <div className="rounded-[40px] bg-white border border-slate-200 p-8 md:p-10 space-y-8">
          <p className="text-slate-500 text-lg">从检查到戴牙，每一步提前说清楚。</p>
          <div className="grid gap-4 md:grid-cols-5">
            {IMPLANT_PROCESS.map((step, i) => {
              const Icon = processIcons[i] || CircleDot;
              return (
                <motion.div
                  key={step.step}
                  initial={{opacity: 0, y: 12}}
                  animate={{opacity: 1, y: 0}}
                  transition={{delay: i * 0.08}}
                  className="relative"
                >
                  {i < IMPLANT_PROCESS.length - 1 && (
                    <div className="absolute top-6 -right-2 hidden w-4 border-t border-dashed border-slate-300 md:block" />
                  )}
                  <div className="rounded-[24px] border border-slate-100 bg-slate-50 p-5 space-y-3 h-full">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-600 font-bold text-sm">{step.step}</span>
                      <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center">
                        <Icon size={17} />
                      </div>
                    </div>
                    <div>
                      <p className="text-slate-900 font-bold">{step.title}</p>
                      <p className="text-slate-500 text-sm leading-6 mt-1">{step.desc}</p>
                    </div>
                    <span className="inline-block rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-medium text-emerald-700">
                      {step.duration}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. 品牌价格 */}
      <section className="space-y-10">
        <h2 className="text-3xl font-bold text-slate-900">品牌与价格</h2>

        {/* 2a. 品牌对比一览 */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-slate-700">品牌对比一览</h3>
          <div className="grid gap-5 md:grid-cols-2">
            {IMPLANT_BRANDS.map((brand, i) => (
              <motion.div
                key={brand.brand}
                initial={{opacity: 0, y: 12}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: i * 0.07}}
                className={`rounded-[32px] bg-gradient-to-br ${brand.accent} border ${brand.border} p-7 space-y-5`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{brand.flag}</span>
                    <span className="text-sm text-slate-400 font-medium">{brand.country} · {brand.tagline}</span>
                  </div>
                  <h4 className="text-2xl font-extrabold text-slate-900">{brand.brand}</h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {brand.features.map(f => (
                    <span key={f} className={`rounded-full ${brand.tagColor} px-3 py-1 text-sm font-medium`}>
                      {f}
                    </span>
                  ))}
                </div>

                <div className="space-y-3">
                  {brand.series.map(s => (
                    <div key={s.name} className="rounded-[22px] bg-white/70 px-5 py-4">
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
            <Info size={13} /> 价格为单颗参考区间（含种植体 + 基台 + 牙冠 + 手术费），以院内实际方案为准。
          </p>
        </div>

        {/* 2b. 价格构成说明 */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-slate-700">价格构成说明</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {IMPLANT_PRICE_GUIDE.components.map((comp, i) => (
              <div key={comp.name} className="rounded-[28px] bg-white border border-slate-200 p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-emerald-500 text-white text-sm font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                  <div>
                    <p className="font-bold text-slate-900">{comp.name}</p>
                    <p className="text-sm text-slate-400">{comp.note}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {comp.items.map(item => (
                    <div key={item.label} className="flex items-center justify-between rounded-[16px] bg-slate-50 px-4 py-2.5 gap-3">
                      <p className="text-sm text-slate-600">{item.label}</p>
                      <p className="text-sm font-semibold text-slate-900 shrink-0">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2c. 按需附加费用 */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-slate-700 flex items-center gap-2">
            <PlusCircle size={20} className="text-amber-500" />
            按需附加费用
          </h3>
          <div className="rounded-[28px] bg-white border border-slate-200 p-6 space-y-3">
            {IMPLANT_PRICE_GUIDE.extras.map(item => (
              <div key={item.name} className="flex items-start justify-between gap-4 rounded-[18px] bg-slate-50 px-5 py-3.5">
                <div>
                  <p className="font-semibold text-slate-900">{item.name}</p>
                  {item.note && <p className="text-sm text-slate-400 mt-0.5">{item.note}</p>}
                </div>
                <span className="shrink-0 font-bold text-amber-700 bg-amber-50 rounded-full px-3 py-1 text-sm">{item.price}</span>
              </div>
            ))}
            <p className="text-xs text-slate-400 px-2 pt-1">具体附加项目需面诊后确定，不提前捆绑收费。</p>
          </div>
        </div>

        {/* 2d. 品牌特点速览 */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-slate-700">品牌特点速览</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {IMPLANT_PRICE_GUIDE.brandFeatures.map((b, i) => (
              <motion.div
                key={b.brand}
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: i * 0.08}}
                className={`rounded-[28px] border p-6 space-y-3 ${b.cardColor}`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{b.flag}</span>
                  <p className="font-bold text-slate-900 flex-1">{b.brand}</p>
                  <span className={`rounded-full px-3 py-1 text-sm font-bold shrink-0 ${b.positionColor}`}>{b.position}</span>
                </div>
                <p className="text-sm text-slate-600 leading-7">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 3D 种植动画演示 */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900">种植过程演示</h2>
        <div className="rounded-[40px] bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 p-8 md:p-12 overflow-hidden">
          <p className="text-slate-500 text-base mb-8 max-w-xl">以下演示种植体植入的关键步骤，帮助您直观了解整个过程。</p>
          <ImplantAnimation />
        </div>
      </section>

      {/* CTA */}
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

    </div>
  );
};

/* ── Implant CSS Animation ── */
const ImplantAnimation: React.FC = () => {
  const steps = [
    {label: '缺牙位置', desc: '牙槽骨健康，具备种植条件'},
    {label: '微创备洞', desc: '数字化导板精准定位钻孔'},
    {label: '植入种植体', desc: '钛合金螺柱稳固固定'},
    {label: '安装基台', desc: '愈合完成后连接上部结构'},
    {label: '佩戴牙冠', desc: '全瓷牙冠，外观自然'},
  ];

  return (
    <div className="space-y-10">
      {/* Step indicators */}
      <div className="flex items-start gap-0">
        {steps.map((step, i) => (
          <div key={step.label} className="flex-1 flex flex-col items-center relative">
            {/* Connector line */}
            {i < steps.length - 1 && (
              <div className="absolute top-5 left-1/2 w-full h-0.5 bg-slate-200">
                <motion.div
                  className="h-full bg-amber-400 origin-left"
                  initial={{scaleX: 0}}
                  animate={{scaleX: 1}}
                  transition={{delay: i * 0.6 + 0.5, duration: 0.4}}
                />
              </div>
            )}
            {/* Step dot */}
            <motion.div
              initial={{scale: 0, opacity: 0}}
              animate={{scale: 1, opacity: 1}}
              transition={{delay: i * 0.6, type: 'spring', stiffness: 200}}
              className="relative z-10 w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shadow-sm mb-3"
            >
              <motion.div
                initial={{scale: 0}}
                animate={{scale: 1}}
                transition={{delay: i * 0.6 + 0.2, type: 'spring'}}
                className="w-5 h-5 rounded-full bg-amber-400"
              />
            </motion.div>
            <p className="text-xs font-bold text-slate-700 text-center px-1">{step.label}</p>
            <p className="text-xs text-slate-400 text-center mt-1 px-2 leading-4 hidden md:block">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Cross-section visual */}
      <div className="flex justify-center">
        <div className="relative w-80 h-64">
          {/* Jawbone */}
          <motion.div
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.1}}
            className="absolute bottom-0 left-0 right-0 h-32 rounded-[20px] bg-gradient-to-b from-amber-100 to-amber-200 border-2 border-amber-300"
          >
            <p className="absolute -left-1 top-2 text-xs text-amber-700 font-medium rotate-90 origin-left translate-x-3 translate-y-1">牙槽骨</p>
          </motion.div>

          {/* Gum */}
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.2}}
            className="absolute bottom-28 left-0 right-0 h-10 rounded-t-[20px] bg-gradient-to-b from-pink-300 to-pink-400 border-2 border-pink-400"
          >
            <p className="absolute right-2 top-1 text-xs text-pink-700 font-medium">牙龈</p>
          </motion.div>

          {/* Implant body (titanium screw) */}
          <motion.div
            initial={{scaleY: 0, originY: 0}}
            animate={{scaleY: 1}}
            transition={{delay: 1.0, duration: 0.6, ease: 'easeOut'}}
            style={{transformOrigin: 'top center'}}
            className="absolute left-1/2 -translate-x-1/2 bottom-8 w-7 h-20 rounded-b-lg bg-gradient-to-b from-slate-400 to-slate-600 border border-slate-500 shadow-lg"
          >
            {/* Thread lines */}
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-full h-px bg-white/30 my-3" />
            ))}
          </motion.div>

          {/* Abutment */}
          <motion.div
            initial={{opacity: 0, y: -8}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 2.0, duration: 0.4}}
            className="absolute left-1/2 -translate-x-1/2 bottom-[104px] w-5 h-6 bg-gradient-to-b from-slate-300 to-slate-400 rounded-sm border border-slate-400 shadow-md"
          />

          {/* Crown */}
          <motion.div
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            transition={{delay: 2.6, type: 'spring', stiffness: 150}}
            className="absolute left-1/2 -translate-x-1/2 bottom-[128px] w-12 h-10 bg-gradient-to-b from-white to-slate-50 rounded-t-[50%] rounded-b-lg border-2 border-slate-200 shadow-xl flex items-center justify-center"
          >
            <div className="w-2 h-2 rounded-full bg-slate-200" />
            <p className="absolute -right-8 top-1 text-xs text-slate-500 font-medium whitespace-nowrap">牙冠</p>
          </motion.div>

          {/* Labels */}
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 1.4}}
            className="absolute left-[calc(50%+20px)] bottom-12 text-xs text-slate-500 font-medium whitespace-nowrap"
          >
            种植体
          </motion.div>
        </div>
      </div>
    </div>
  );
};
