import React from 'react';
import {motion} from 'motion/react';
import {
  ArrowLeft,
  CheckCircle2,
  CircleDot,
  Clock,
  Zap,
  Sparkles,
  Info,
} from 'lucide-react';
import type {ServiceDetail} from '../constants';

interface ServiceDetailPageProps {
  service: ServiceDetail;
  onBack: () => void;
  onOpenConsultation?: () => void;
}

const stepIcons = [CircleDot, Zap, Clock, Sparkles, CheckCircle2];

const TAG_STYLES: Record<string, string> = {
  甲: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  乙: 'bg-sky-50 text-sky-700 border-sky-200',
  丙: 'bg-slate-100 text-slate-600 border-slate-200',
};

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({service, onBack, onOpenConsultation}) => {
  return (
    <div className="space-y-12 pb-12">

      {/* Header */}
      <header className="space-y-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-slate-700 transition-colors text-base font-medium"
        >
          <ArrowLeft size={18} /> 返回服务项目
        </button>
        <div className="space-y-3">
          <h1 className="text-5xl font-extrabold text-slate-900 md:text-6xl">{service.title}</h1>
          <p className="text-2xl text-slate-500 max-w-2xl leading-9">{service.subtitle}</p>
        </div>
      </header>

      {/* 1. 诊疗流程 */}
      <section className="space-y-6">
        <h2 className="text-4xl font-bold text-slate-900">诊疗流程</h2>
        <div className="rounded-[40px] bg-white border border-slate-200 p-8 md:p-10 space-y-8">
          <p className="text-xl text-slate-500">每一步提前告诉您，不用猜、不担心。</p>
          <div className="grid gap-4 md:grid-cols-5">
            {service.steps.map((step, i) => {
              const Icon = stepIcons[i] || CircleDot;
              return (
                <motion.div
                  key={step.step}
                  initial={{opacity: 0, y: 12}}
                  animate={{opacity: 1, y: 0}}
                  transition={{delay: i * 0.08}}
                  className="relative"
                >
                  {i < service.steps.length - 1 && (
                    <div className="absolute top-7 -right-2 hidden w-4 border-t border-dashed border-slate-300 md:block" />
                  )}
                  <div className="rounded-[24px] border border-slate-100 bg-slate-50 p-5 space-y-3 h-full">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-600 font-bold text-base">{step.step}</span>
                      <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center">
                        <Icon size={20} />
                      </div>
                    </div>
                    <div>
                      <p className="text-slate-900 font-bold text-lg">{step.title}</p>
                      <p className="text-slate-500 text-base leading-7 mt-1">{step.desc}</p>
                    </div>
                    <span className="inline-block rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1.5 text-sm font-medium text-emerald-700">
                      {step.duration}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. 价格参考 */}
      <section className="space-y-6">
        <h2 className="text-4xl font-bold text-slate-900">价格参考</h2>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {service.priceGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{opacity: 0, y: 12}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: gi * 0.07}}
              className="rounded-[32px] bg-white border border-slate-200 p-7 space-y-4"
            >
              <div>
                <h3 className="text-xl font-bold text-slate-900">{group.title}</h3>
                {group.note && <p className="text-base text-slate-400 mt-1">{group.note}</p>}
              </div>
              <div className="space-y-2.5">
                {group.items.map(item => (
                  <div key={item.name} className="rounded-[18px] bg-slate-50 px-4 py-3.5 flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="font-semibold text-slate-800 text-base">{item.name}</p>
                        {item.tag && (
                          <span className={`rounded-full border px-2.5 py-0.5 text-xs font-bold ${TAG_STYLES[item.tag] ?? ''}`}>
                            {item.tag}
                          </span>
                        )}
                      </div>
                      {item.note && <p className="text-sm text-slate-400 leading-5">{item.note}</p>}
                    </div>
                    <p className="shrink-0 font-bold text-slate-900 text-base text-right whitespace-nowrap">{item.price}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-base text-slate-400 flex items-center gap-1.5">
          <Info size={15} /> 以上价格为参考区间，含常规耗材及基础操作费。特殊病情或个性化方案以院内实际检查结果为准，欢迎咨询前台。
        </p>
      </section>

      {/* 3. 治疗过程演示 */}
      <section className="space-y-6">
        <h2 className="text-4xl font-bold text-slate-900">治疗过程演示</h2>
        <div className="rounded-[40px] bg-gradient-to-br from-slate-50 to-emerald-50/40 border border-slate-200 p-8 md:p-12 overflow-hidden">
          <p className="text-lg text-slate-500 mb-10 max-w-xl">以下动画演示核心治疗步骤，帮助您直观了解整个过程。</p>
          <ServiceAnimation type={service.animationType} />
        </div>
      </section>

      {/* CTA */}
      {onOpenConsultation && (
        <div className="rounded-[32px] bg-slate-900 p-8 text-white flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-2xl font-bold">预约咨询</p>
            <p className="text-slate-400 mt-1 text-lg">院长亲诊，出方案后再决定，不强制消费。</p>
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

/* ── 动画分发 ────────────────────────────────────────── */
const ServiceAnimation: React.FC<{type: ServiceDetail['animationType']}> = ({type}) => {
  switch (type) {
    case 'filling':    return <FillingAnimation />;
    case 'extraction': return <ExtractionAnimation />;
    case 'crown':      return <CrownAnimation />;
    case 'periodontal':return <PeriodontalAnimation />;
    case 'ortho':      return <OrthoAnimation />;
    default:           return null;
  }
};

/* ── 通用步骤进度条 ──────────────────────────────────── */
const StepBar: React.FC<{steps: string[]}> = ({steps}) => (
  <div className="flex items-start">
    {steps.map((step, i) => (
      <div key={step} className="flex-1 flex flex-col items-center relative">
        {i < steps.length - 1 && (
          <div className="absolute top-4 left-1/2 w-full h-0.5 bg-slate-200">
            <motion.div
              className="h-full bg-emerald-400 origin-left"
              initial={{scaleX: 0}}
              animate={{scaleX: 1}}
              transition={{delay: i * 0.5 + 0.4, duration: 0.35}}
            />
          </div>
        )}
        <motion.div
          initial={{scale: 0}}
          animate={{scale: 1}}
          transition={{delay: i * 0.5, type: 'spring', stiffness: 200}}
          className="relative z-10 w-8 h-8 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shadow-sm mb-2"
        >
          <motion.div
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{delay: i * 0.5 + 0.15, type: 'spring'}}
            className="w-4 h-4 rounded-full bg-emerald-400"
          />
        </motion.div>
        <p className="text-sm font-medium text-slate-600 text-center px-0.5 leading-4">{step}</p>
      </div>
    ))}
  </div>
);

/* ─────────────────────────────────────────────────────────
   补牙 / 根管  ——  循环演示龋齿→去腐→充填
───────────────────────────────────────────────────────── */
const FILL_DURATION = 6;

const FillingAnimation: React.FC = () => (
  <div className="space-y-10">
    <StepBar steps={['龋坏牙体', '去腐备洞', '根管消毒', '树脂充填', '恢复完成']} />
    <div className="flex justify-center">
      {/* Tooth cross-section */}
      <div className="relative w-72 h-64 select-none">

        {/* Jawbone */}
        <div className="absolute bottom-0 left-10 right-10 h-20 rounded-[18px] bg-amber-50 border-2 border-amber-200" />

        {/* Gum */}
        <div className="absolute bottom-16 left-10 right-10 h-8 bg-pink-100 border-t-2 border-pink-200" />

        {/* Root */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-6 w-8 h-18 rounded-b-full overflow-hidden"
          style={{height: 56}}>
          <div className="w-full h-full bg-white border-2 border-slate-200 rounded-b-full" />
        </div>

        {/* Tooth crown */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-20 w-16 h-28 rounded-t-[36px] rounded-b-sm bg-white border-2 border-slate-200 overflow-hidden shadow-md">

          {/* Enamel sheen */}
          <div className="absolute top-2 left-2 w-4 h-8 bg-white/60 rounded-full rotate-12 blur-sm" />

          {/* Decay spot — visible phase 0–0.3, dissolves 0.3–0.45 */}
          <motion.div
            className="absolute top-4 left-4 w-9 h-8 rounded-full bg-amber-400"
            animate={{ opacity: [0.9, 0.9, 0, 0, 0, 0.9], scale: [1, 1, 0.3, 0, 0, 1] }}
            transition={{ duration: FILL_DURATION, repeat: Infinity, times: [0, 0.28, 0.42, 0.5, 0.92, 1], ease: 'easeInOut' }}
          />

          {/* Cavity (hollow) — visible phase 0.45–0.6 */}
          <motion.div
            className="absolute top-4 left-4 w-9 h-8 rounded-[10px] bg-slate-100 border border-dashed border-slate-300"
            animate={{ opacity: [0, 0, 0, 1, 0, 0] }}
            transition={{ duration: FILL_DURATION, repeat: Infinity, times: [0, 0.42, 0.48, 0.6, 0.68, 1] }}
          />

          {/* Canal line — visible 0.5–0.72 */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-10 w-2 h-10 rounded-full bg-slate-200"
            animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
            transition={{ duration: FILL_DURATION, repeat: Infinity, times: [0, 0.48, 0.56, 0.68, 0.75, 1] }}
          />

          {/* Filling material — rises phase 0.65–0.85 */}
          <motion.div
            className="absolute bottom-0 left-3 right-3 bg-emerald-400 rounded-t-sm"
            animate={{ height: ['0%', '0%', '0%', '82%', '82%', '0%'] }}
            transition={{ duration: FILL_DURATION, repeat: Infinity, times: [0, 0.58, 0.65, 0.82, 0.92, 1], ease: 'easeOut' }}
          />

          {/* Completion glow */}
          <motion.div
            className="absolute inset-0 rounded-t-[34px] bg-emerald-200/40"
            animate={{ opacity: [0, 0, 0, 0, 0.7, 0] }}
            transition={{ duration: FILL_DURATION, repeat: Infinity, times: [0, 0.8, 0.84, 0.88, 0.93, 1] }}
          />
        </div>

        {/* Label */}
        <motion.p
          className="absolute right-2 top-6 text-sm font-semibold text-emerald-600 whitespace-nowrap"
          animate={{ opacity: [0, 0, 0, 0, 1, 0] }}
          transition={{ duration: FILL_DURATION, repeat: Infinity, times: [0, 0.82, 0.86, 0.9, 0.94, 1] }}
        >✓ 充填完成</motion.p>

      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────────────────────
   拔牙 / 外科  ——  循环演示松动→拔出→愈合
───────────────────────────────────────────────────────── */
const EXT_DURATION = 6;

const ExtractionAnimation: React.FC = () => (
  <div className="space-y-10">
    <StepBar steps={['评估拍片', '局部麻醉', '微创拔除', '创面处理', '愈合完成']} />
    <div className="flex justify-center">
      <div className="relative w-72 h-64 select-none">

        {/* Jawbone */}
        <div className="absolute bottom-0 left-8 right-8 h-24 rounded-[18px] bg-amber-50 border-2 border-amber-200" />

        {/* Gum */}
        <div className="absolute bottom-18 left-8 right-8 h-8 bg-pink-100 border-t-2 border-pink-200" style={{bottom: 72}} />

        {/* Tooth socket (shows after extraction) */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 rounded-[14px] bg-pink-200 border-2 border-dashed border-pink-300"
          style={{bottom: 28, width: 40, height: 52}}
          animate={{ opacity: [0, 0, 0, 1, 1, 0] }}
          transition={{ duration: EXT_DURATION, repeat: Infinity, times: [0, 0.55, 0.62, 0.68, 0.9, 0.96] }}
        />

        {/* Healing tissue growing in socket */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 rounded-[12px] bg-pink-300"
          style={{bottom: 28, width: 36}}
          animate={{ height: [0, 0, 0, 0, 28, 0] }}
          transition={{ duration: EXT_DURATION, repeat: Infinity, times: [0, 0.62, 0.7, 0.78, 0.92, 0.97], ease: 'easeOut' }}
        />

        {/* Tooth — rocks then rises out */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 overflow-hidden shadow-lg"
          style={{bottom: 60, width: 44}}
          animate={{
            y:      [0,  0,  0,  0,  0,  0,  0,  0, -110, -110,  60],
            rotate: [0, -9,  9, -7,  7, -4,  4,  0,    0,    0,   0],
            opacity:[1,  1,  1,  1,  1,  1,  1,  1,    0,    0,   1],
          }}
          transition={{
            duration: EXT_DURATION, repeat: Infinity,
            times: [0, 0.07, 0.14, 0.21, 0.28, 0.35, 0.42, 0.5, 0.58, 0.62, 0.98],
            ease: 'easeInOut',
          }}
        >
          <div className="rounded-t-[26px] rounded-b-sm bg-white border-2 border-slate-200" style={{height: 68}}>
            <div className="absolute top-3 left-2 w-3 h-6 bg-white/60 rounded-full rotate-12 blur-sm" />
          </div>
          <div className="mx-auto rounded-b-full bg-white border-2 border-t-0 border-slate-200" style={{width: 20, height: 32}} />
        </motion.div>

        <motion.p
          className="absolute right-2 bottom-2 text-sm font-semibold text-emerald-600 whitespace-nowrap"
          animate={{ opacity: [0, 0, 0, 0, 1, 0] }}
          transition={{ duration: EXT_DURATION, repeat: Infinity, times: [0, 0.78, 0.84, 0.88, 0.93, 0.98] }}
        >✓ 创面愈合中</motion.p>

      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────────────────────
   修复 / 牙冠  ——  循环演示预备→冠下降→就位
───────────────────────────────────────────────────────── */
const CROWN_DURATION = 5;

const CrownAnimation: React.FC = () => (
  <div className="space-y-10">
    <StepBar steps={['口腔检查', '牙体预备', '数字取模', '制作加工', '戴入完成']} />
    <div className="flex justify-center">
      <div className="relative w-72 h-64 select-none">

        {/* Jawbone */}
        <div className="absolute bottom-0 left-8 right-8 h-20 rounded-[18px] bg-amber-50 border-2 border-amber-200" />
        {/* Gum */}
        <div className="absolute left-8 right-8 h-8 bg-pink-100 border-t-2 border-pink-200" style={{bottom: 56}} />

        {/* Prepared tooth stump */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 rounded-t-xl rounded-b-sm bg-amber-50 border-2 border-amber-200 shadow-inner"
          style={{bottom: 56, width: 44, height: 52}}
          animate={{ opacity: [1, 1, 1, 1, 1] }}
          transition={{ duration: CROWN_DURATION, repeat: Infinity }}
        >
          {/* Stump texture lines */}
          <div className="w-full h-px bg-amber-200 mt-4" />
          <div className="w-full h-px bg-amber-200 mt-3" />
        </motion.div>

        {/* Crown descending */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2"
          style={{width: 56, bottom: 104}}
          animate={{
            y:       [-80, -80, 0,  0,  0, -80],
            opacity: [0,    1,  1,  1,  0,   0],
          }}
          transition={{
            duration: CROWN_DURATION, repeat: Infinity,
            times: [0, 0.1, 0.38, 0.7, 0.82, 1],
            ease: 'easeInOut',
          }}
        >
          {/* Crown shape */}
          <div className="relative w-14 h-12 rounded-t-[50%] rounded-b-lg bg-gradient-to-b from-white via-slate-50 to-slate-100 border-2 border-slate-300 shadow-xl flex items-end justify-center pb-1">
            <div className="w-2 h-2 rounded-full bg-slate-200" />
            {/* Crown sheen */}
            <div className="absolute top-2 left-2 w-4 h-5 bg-white/70 rounded-full rotate-12 blur-sm" />
          </div>
        </motion.div>

        {/* Seated flash */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 rounded-full bg-emerald-300/50 blur-md"
          style={{bottom: 80, width: 60, height: 60}}
          animate={{ opacity: [0, 0, 0, 0.8, 0, 0], scale: [0.6, 0.6, 0.6, 1.3, 0.8, 0.6] }}
          transition={{ duration: CROWN_DURATION, repeat: Infinity, times: [0, 0.32, 0.38, 0.44, 0.52, 1] }}
        />

        <motion.p
          className="absolute right-2 bottom-2 text-sm font-semibold text-emerald-600 whitespace-nowrap"
          animate={{ opacity: [0, 0, 0, 1, 1, 0] }}
          transition={{ duration: CROWN_DURATION, repeat: Infinity, times: [0, 0.42, 0.48, 0.52, 0.75, 0.82] }}
        >✓ 全瓷冠就位</motion.p>

      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────────────────────
   牙周 / 洁牙  ——  循环演示牙结石→超声洁治→健康牙龈
───────────────────────────────────────────────────────── */
const PERIO_DURATION = 6;

const teethPositions = [-88, -44, 0, 44, 88];

const PeriodontalAnimation: React.FC = () => (
  <div className="space-y-10">
    <StepBar steps={['牙周检查', '超声洁治', '龈下刮治', '根面平整', '定期维护']} />
    <div className="flex justify-center">
      <div className="relative h-64 w-80 select-none">

        {/* Jawbone */}
        <div className="absolute bottom-0 left-0 right-0 h-16 rounded-[18px] bg-amber-50 border-2 border-amber-200" />

        {/* Teeth */}
        {teethPositions.map((offset, i) => (
          <div
            key={i}
            className="absolute bottom-10"
            style={{left: `calc(50% + ${offset}px - 16px)`}}
          >
            <div className="w-8 h-20 rounded-t-[22px] rounded-b-sm bg-white border-2 border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-2 left-1 w-2.5 h-5 bg-white/60 rounded-full rotate-12 blur-[2px]" />
            </div>
          </div>
        ))}

        {/* Gum (unhealthy → healthy color shift) */}
        <motion.div
          className="absolute left-0 right-0 rounded-t-full"
          style={{bottom: 34, height: 18}}
          animate={{ backgroundColor: ['#fbcfe8', '#fbcfe8', '#fbcfe8', '#86efac', '#86efac', '#fbcfe8'] }}
          transition={{ duration: PERIO_DURATION, repeat: Infinity, times: [0, 0.2, 0.5, 0.72, 0.88, 1] }}
        />

        {/* Tartar deposits — one per tooth, staggered removal */}
        {teethPositions.map((offset, i) => (
          <motion.div
            key={`tartar-${i}`}
            className="absolute rounded-sm bg-yellow-400"
            style={{bottom: 34, left: `calc(50% + ${offset}px - 10px)`, width: 20, height: 12}}
            animate={{ opacity: [1, 1, 0, 0, 0, 1], scaleY: [1, 1, 0, 0, 0, 1] }}
            transition={{
              duration: PERIO_DURATION, repeat: Infinity,
              times: [0, 0.18, 0.28 + i * 0.06, 0.55, 0.9, 1],
              ease: 'easeOut',
            }}
          />
        ))}

        {/* Scaler tool — moves across teeth */}
        <motion.div
          className="absolute flex items-end gap-0"
          style={{bottom: 46}}
          animate={{
            x:       [-120, -80, -80, -40, 0, 40, 80, 120, 120],
            opacity: [0,      1,   1,   1,  1,  1,  1,   1,   0],
          }}
          transition={{
            duration: PERIO_DURATION, repeat: Infinity,
            times: [0, 0.12, 0.18, 0.3, 0.4, 0.5, 0.6, 0.7, 0.78],
            ease: 'linear',
          }}
        >
          <div className="w-1.5 h-14 bg-slate-400 rounded-full" />
          <motion.div
            className="w-1 h-4 bg-slate-500 rounded-full origin-top"
            style={{marginLeft: -1, marginBottom: -2}}
            animate={{ rotate: [-20, 20, -20] }}
            transition={{ duration: 0.3, repeat: Infinity }}
          />
          {/* Water spray particles */}
          {[0, 1, 2].map(j => (
            <motion.div
              key={j}
              className="absolute w-1.5 h-1.5 rounded-full bg-sky-300"
              animate={{
                x: [0, (j - 1) * 6],
                y: [0, -8 - j * 3],
                opacity: [0.9, 0],
              }}
              transition={{ duration: 0.4, repeat: Infinity, delay: j * 0.12 }}
              style={{top: -4, left: 0}}
            />
          ))}
        </motion.div>

        <motion.p
          className="absolute right-2 bottom-2 text-sm font-semibold text-emerald-600 whitespace-nowrap"
          animate={{ opacity: [0, 0, 0, 0, 1, 0] }}
          transition={{ duration: PERIO_DURATION, repeat: Infinity, times: [0, 0.7, 0.76, 0.82, 0.88, 0.96] }}
        >✓ 牙龈健康恢复</motion.p>

      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────────────────────
   正畸矫正  ——  循环演示错位→托槽弓丝→对齐
───────────────────────────────────────────────────────── */
const ORTHO_DURATION = 7;

// Initial crooked positions (x-offset, rotation)
const CROOKED: [number, number][] = [[-2, -10], [2, 6], [-4, -7], [3, 9], [-1, -5]];

const OrthoAnimation: React.FC = () => (
  <div className="space-y-10">
    <StepBar steps={['初诊检查', '制定方案', '安装矫治', '定期复诊', '保持完成']} />
    <div className="flex justify-center">
      <div className="relative w-80 h-64 select-none">

        {/* Jawbone */}
        <div className="absolute bottom-0 left-0 right-0 h-14 rounded-[18px] bg-amber-50 border-2 border-amber-200" />
        {/* Gum */}
        <div className="absolute left-0 right-0 bg-pink-100 border-t-2 border-pink-200" style={{bottom: 42, height: 20}} />

        {/* 5 teeth */}
        {CROOKED.map(([initX, initR], i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{bottom: 40, left: `calc(50% + ${-88 + i * 44}px - 15px)`}}
            animate={{
              x:      [initX, initX, 0,     0,     initX],
              rotate: [initR, initR, 0,     0,     initR],
            }}
            transition={{
              duration: ORTHO_DURATION, repeat: Infinity,
              times:    [0,    0.2,    0.55,  0.82,  1],
              ease: 'easeInOut',
            }}
          >
            <div
              className="rounded-t-[22px] rounded-b-sm bg-white border-2 border-slate-200 shadow-sm relative overflow-hidden"
              style={{width: 30, height: 64 + (i % 2) * 6}}
            >
              <div className="absolute top-2 left-1 w-2.5 h-4 bg-white/60 rounded-full rotate-12 blur-[2px]" />
            </div>
          </motion.div>
        ))}

        {/* Arch wire — appears at 0.2, stays until 0.85 */}
        <motion.div
          className="absolute left-4 right-4 h-2 rounded-full bg-amber-400 shadow-sm"
          style={{bottom: 82}}
          animate={{ opacity: [0, 0, 1, 1, 0], scaleX: [0.2, 0.2, 1, 1, 0.2] }}
          transition={{
            duration: ORTHO_DURATION, repeat: Infinity,
            times: [0, 0.18, 0.25, 0.85, 0.95],
          }}
        />

        {/* Brackets — appear at 0.2 */}
        {CROOKED.map((_, i) => (
          <motion.div
            key={`br-${i}`}
            className="absolute w-4 h-4 rounded-sm bg-slate-400 border border-slate-500 shadow"
            style={{bottom: 81, left: `calc(50% + ${-88 + i * 44}px - 7px)`}}
            animate={{ opacity: [0, 0, 1, 1, 0], scale: [0, 0, 1, 1, 0] }}
            transition={{
              duration: ORTHO_DURATION, repeat: Infinity,
              times: [0, 0.17, 0.25, 0.85, 0.95],
              delay: i * 0.03,
            }}
          />
        ))}

        <motion.p
          className="absolute right-2 bottom-2 text-sm font-semibold text-emerald-600 whitespace-nowrap"
          animate={{ opacity: [0, 0, 0, 1, 0] }}
          transition={{ duration: ORTHO_DURATION, repeat: Infinity, times: [0, 0.56, 0.62, 0.78, 0.9] }}
        >✓ 牙列排列整齐</motion.p>

      </div>
    </div>
  </div>
);
