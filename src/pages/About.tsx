import React from 'react';
import {Award, Heart, History, MapPin, ShieldCheck, Users} from 'lucide-react';

interface AboutPageProps {
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({onOpenConsultation}) => {
  return (
    <div className="space-y-16 pb-12">
      <header className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-brand-primary shadow-sm">
            <History size={16} />
            关于禾悦
          </div>
          <h1 className="text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl">
            二十多年一直在做一件事，
            <span className="block text-brand-primary">把看牙这件事讲清楚、做好、做得让人放心。</span>
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
              我们想传达的不是“设备有多贵”，而是你来到这里，会被认真解释、被耐心对待，也知道下一步为什么这样做。
            </div>
          </div>
        </div>
      </header>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
        <div className="rounded-[40px] border border-slate-100 bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-4xl font-bold text-slate-900">我们的故事，不靠“高大上”开始</h2>
          <div className="mt-8 space-y-6 text-xl leading-10 text-slate-600">
            <p>
              20 多年前，钟建国院长在社区附近开出第一间小诊所。那时候设备远没有今天先进，能留下病人的，不是包装，而是耐心、手感和口碑。
            </p>
            <p>
              这些年里，很多当年被家长牵着来看牙的孩子，后来成了自己带孩子回来的父母。对一家社区口腔门诊来说，这种“回头”比任何广告都更说明问题。
            </p>
            <p>
              后来我们把数字化检查、修复和矫正慢慢补齐，但做事方式没有变：先解释清楚，再给建议；先考虑适不适合，再讨论做不做。
            </p>
            <p>
              我们希望门诊看起来专业，也希望它保留一点邻里感。因为看牙这件事，对很多人来说，安全感和信任感本来就和技术一样重要。
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
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
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

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {icon: Heart, title: '医者仁心', desc: '不把就诊过程做得冰冷和匆忙，让人愿意放心开口。'},
          {icon: Users, title: '邻里信任', desc: '很多关系来自长期复诊和家庭转介绍，而不是一次性营销。'},
          {icon: Award, title: '专业落地', desc: '设备和技术是手段，真正重要的是判断是否适合、执行是否稳定。'},
        ].map(item => (
          <div key={item.title} className="rounded-[36px] border border-slate-100 bg-white p-8 shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-[24px] bg-brand-primary/10 text-brand-primary">
              <item.icon size={30} />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-slate-900">{item.title}</h3>
            <p className="mt-4 text-lg leading-8 text-slate-500">{item.desc}</p>
          </div>
        ))}
      </section>

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
