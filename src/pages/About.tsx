import React, {useState} from 'react';
import {motion, AnimatePresence} from 'motion/react';
import {
  Award,
  Heart,
  History,
  MapPin,
  ShieldCheck,
  Users,
  ChevronDown,
  ClipboardList,
  Microscope,
  RefreshCw,
  PhoneCall,
  Receipt,
  Stethoscope,
  CheckCircle2,
} from 'lucide-react';

interface AboutPageProps {
  onOpenConsultation: () => void;
}

const VISIT_PROCESS = [
  {
    step: '01',
    title: '初诊检查',
    desc: '口腔检查 + 影像拍片，全面了解您的口腔状况。',
    icon: Stethoscope,
  },
  {
    step: '02',
    title: '方案沟通',
    desc: '根据检查结果出方案，讲清楚做什么、为什么、多少钱。',
    icon: ClipboardList,
  },
  {
    step: '03',
    title: '治疗实施',
    desc: '按计划分次完成治疗，手法轻柔，全程关注舒适度。',
    icon: Microscope,
  },
  {
    step: '04',
    title: '复查跟进',
    desc: '治疗后定期复查，确认恢复情况，及时处理问题。',
    icon: RefreshCw,
  },
  {
    step: '05',
    title: '术后回访',
    desc: '主动联系了解术后情况，建立长期维护关系。',
    icon: PhoneCall,
  },
];

const SERVICE_GUARANTEES = [
  {
    icon: Receipt,
    title: '透明报价',
    desc: '治疗前确认所有费用，无隐形收费，超出预算先沟通。',
  },
  {
    icon: ShieldCheck,
    title: '无菌操作',
    desc: '一人一机一消毒，严格执行感控流程，杜绝交叉感染。',
  },
  {
    icon: ClipboardList,
    title: '完整病历',
    desc: '每次就诊留存完整记录，换牙医也能看清来龙去脉。',
  },
  {
    icon: RefreshCw,
    title: '术后回访',
    desc: '治疗结束不是终点，主动跟进恢复，建立长期维护关系。',
  },
];

const FAQS = [
  {
    q: '第一次来需要预约吗？',
    a: '建议提前预约，可以减少等待时间，也方便安排足够的初诊时间给您。急性牙痛可以直接来，我们会优先处理。',
  },
  {
    q: '初诊检查收费吗？',
    a: '基础口腔检查收诊查费，具体金额按当天实际检查项目结算。如果需要拍 CBCT 或其他影像，会提前告知费用。',
  },
  {
    q: '种植 / 矫正大概要多久？',
    a: '单颗种植通常 3–6 个月（含愈合期）；固定矫正一般 12–24 个月，隐形矫正因情况而异。具体时间以初诊评估结果为准。',
  },
  {
    q: '是否支持分期付款？',
    a: '部分项目支持分期，可以咨询前台了解当前合作的分期方案和手续费情况。',
  },
];

export const AboutPage: React.FC<AboutPageProps> = ({onOpenConsultation}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="space-y-16 pb-12">
      {/* Header */}
      <header className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-600 shadow-sm">
            <History size={16} />
            诊所实力
          </div>
          <h1 className="text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl">
            二十多年一直在做一件事，
            <span className="block text-emerald-500">把看牙讲清楚、做好、做得让人放心。</span>
          </h1>
          <p className="max-w-3xl text-2xl leading-10 text-slate-500">
            禾悦不是突然出现的新品牌，而是一家在社区里慢慢长出来的口腔门诊。我们更在意长期信任，而不是一次性的热闹成交。
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-800 p-8 text-white shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.28),transparent_34%)]" />
          <div className="relative space-y-8">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-[24px] bg-white/12 backdrop-blur">
                <span className="text-3xl font-bold">禾</span>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-white/55">HEYUE DENTAL</p>
                <h2 className="mt-1 text-3xl font-bold">社区里的长期口腔伙伴</h2>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {label: '始于', value: '2002', desc: '从社区诊所一路发展而来'},
                {label: '关键词', value: '透明 / 温和', desc: '讲清楚，再开始治疗'},
                {label: '服务方向', value: '家庭口腔', desc: '从儿童到长者都能接住'},
                {label: '看重', value: '长期维护', desc: '不是一次看完就结束'},
              ].map(item => (
                <div key={item.label} className="rounded-[28px] border border-white/12 bg-white/8 p-5 backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">{item.label}</p>
                  <p className="mt-3 text-2xl font-bold text-white">{item.value}</p>
                  <p className="mt-2 text-sm leading-7 text-white/75">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="rounded-[28px] border border-white/12 bg-black/10 p-5 text-base leading-8 text-white/85">
              我们想传达的不是"设备有多贵"，而是你来到这里，会被认真解释、被耐心对待，也知道下一步为什么这样做。
            </div>
          </div>
        </div>
      </header>

      {/* Story + Values */}
      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
        <div className="rounded-[40px] border border-slate-100 bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-4xl font-bold text-slate-900">我们的故事，不靠"高大上"开始</h2>
          <div className="mt-8 space-y-6 text-xl leading-10 text-slate-600">
            <p>
              20 多年前，钟建国院长在社区附近开出第一间小诊所。那时候设备远没有今天先进，能留下病人的，不是包装，而是耐心、手感和口碑。
            </p>
            <p>
              这些年里，很多当年被家长牵着来看牙的孩子，后来成了自己带孩子回来的父母。对一家社区口腔门诊来说，这种"回头"比任何广告都更说明问题。
            </p>
            <p>
              后来我们把数字化检查、修复和矫正慢慢补齐，但做事方式没有变：先解释清楚，再给建议；先考虑适不适合，再讨论做不做。
            </p>
          </div>
        </div>

        <div className="rounded-[40px] bg-slate-50 p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">我们坚持的方式</p>
          <div className="mt-6 space-y-4">
            {[
              {icon: MapPin, title: '扎根社区', desc: '不是面向陌生流量，而是服务真正长期生活在附近的人。'},
              {icon: ShieldCheck, title: '讲清楚再开始', desc: '先让你理解情况，再谈方案，不靠术语制造压力。'},
              {icon: Heart, title: '轻一点、慢一点', desc: '很多人的牙科焦虑，来自不确定感，我们会尽量把节奏放稳。'},
            ].map(item => (
              <div key={item.title} className="rounded-[28px] border border-white bg-white p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-base leading-8 text-slate-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Process */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold text-slate-900">就诊流程</h2>
          <p className="text-xl text-slate-500">每一步都会提前说清楚，不让您在不知情的情况下进入下一阶段。</p>
        </div>

        <div className="grid gap-4 md:grid-cols-5">
          {VISIT_PROCESS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{opacity: 0, y: 16}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: i * 0.08}}
                className="relative rounded-[28px] bg-white border border-slate-100 p-6 shadow-sm space-y-4"
              >
                {/* connector line */}
                {i < VISIT_PROCESS.length - 1 && (
                  <div className="absolute top-10 -right-2 hidden w-4 border-t-2 border-dashed border-slate-200 md:block" />
                )}
                <div className="flex items-center gap-3">
                  <span className="text-emerald-500 font-bold text-sm">{step.step}</span>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Icon size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 leading-7">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Service Guarantees */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold text-slate-900">服务保障</h2>
          <p className="text-xl text-slate-500">让您安心就诊的几个基本承诺。</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {SERVICE_GUARANTEES.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{opacity: 0, y: 16}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: i * 0.08}}
                className="rounded-[32px] bg-white border border-slate-100 p-7 shadow-sm space-y-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Icon size={26} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-base text-slate-500 leading-7">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Core Values */}
      <section className="grid gap-6 md:grid-cols-3">
        {[
          {icon: Heart, title: '医者仁心', desc: '不把就诊过程做得冰冷和匆忙，让人愿意放心开口。'},
          {icon: Users, title: '邻里信任', desc: '很多关系来自长期复诊和家庭转介绍，而不是一次性营销。'},
          {icon: Award, title: '专业落地', desc: '设备和技术是手段，真正重要的是判断是否适合、执行是否稳定。'},
        ].map(item => (
          <div key={item.title} className="rounded-[36px] border border-slate-100 bg-white p-8 shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-[24px] bg-emerald-500/10 text-emerald-600">
              <item.icon size={30} />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-slate-900">{item.title}</h3>
            <p className="mt-4 text-lg leading-8 text-slate-500">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* FAQ */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold text-slate-900">常见问题</h2>
          <p className="text-xl text-slate-500">来诊前最常问到的几个问题。</p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              layout
              className="rounded-[28px] bg-white border border-slate-100 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-8 py-6 text-left gap-4"
              >
                <div className="flex items-center gap-4">
                  <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                  <span className="text-xl font-bold text-slate-900">{faq.q}</span>
                </div>
                <motion.div
                  animate={{rotate: openFaq === i ? 180 : 0}}
                  transition={{duration: 0.2}}
                  className="shrink-0 text-slate-400"
                >
                  <ChevronDown size={22} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{height: 0, opacity: 0}}
                    animate={{height: 'auto', opacity: 1}}
                    exit={{height: 0, opacity: 0}}
                    transition={{duration: 0.25}}
                  >
                    <p className="px-8 pb-7 text-lg text-slate-600 leading-9 border-t border-slate-50 pt-4">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-[40px] bg-slate-900 p-10 text-white shadow-xl md:p-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div>
            <h2 className="text-4xl font-bold">想先了解门诊和适合自己的方向？</h2>
            <p className="mt-4 max-w-3xl text-xl leading-9 text-slate-300">
              可以先从咨询开始，不用急着定项目。把你的困扰告诉我们，我们会按实际情况给你更合适的建议。
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="rounded-[24px] bg-white px-10 py-5 text-xl font-bold text-slate-900 transition-transform hover:-translate-y-0.5"
          >
            立即在线咨询
          </button>
        </div>
      </section>
    </div>
  );
};
