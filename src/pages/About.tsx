import React from 'react';
import { motion } from 'motion/react';
import { Heart, Users, History, Award } from 'lucide-react';

interface AboutPageProps {
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="space-y-16 pb-12">
      <header className="space-y-4">
        <h1 className="text-6xl font-extrabold text-slate-900 leading-tight">关于禾悦</h1>
        <p className="text-2xl text-slate-500 max-w-2xl">二十年如一日，只为守护邻里的一口好牙。</p>
      </header>

      {/* Story Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full font-bold">
            <History size={20} />
            <span>始于 2002 年</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 leading-tight">
            从巷口的小诊所，<br />
            到社区的“笑容守护者”
          </h2>
          <div className="space-y-6 text-xl text-slate-600 leading-relaxed">
            <p>
              20多年前，钟建国院长在咱们社区的巷口开了第一间只有两张牙椅的小诊所。那时候，没有高大上的数字化设备，靠的是钟院长的一双巧手和一颗真心。
            </p>
            <p>
              “老钟，我这牙又疼了！”“钟医生，孩子该换牙了，您给瞅瞅。”这些亲切的招呼，钟院长听了二十年。他见证了当年换牙的小调皮变成了带着孩子回来看牙的年轻父母，也见证了社区里无数老邻居从“咬不动肉”到“重获好牙”的喜悦。
            </p>
            <p>
              随着时代发展，禾悦引进了最先进的数字化种植和美学矫正技术，但钟院长的初心从未改变：<span className="text-brand-primary font-bold">“看牙不只是修补，更是关怀。”</span>
            </p>
            <p>
              在禾悦，我们不推销昂贵的方案，只给您最实在的建议。因为我们知道，我们不仅是医生，更是您的老邻居。
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1629909608135-ca29e0c1e2b0?auto=format&fit=crop&q=80&w=800" 
              alt="Clinic History" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-[32px] shadow-xl border border-slate-100 max-w-xs">
            <p className="text-brand-primary font-bold text-4xl mb-2">24年</p>
            <p className="text-slate-500 font-medium">深耕社区，服务超过 50,000 名邻里</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Heart, title: '医者仁心', desc: '手法轻柔，像对待家人一样对待每一颗牙。' },
          { icon: Users, title: '邻里信任', desc: '二十年口碑相传，不靠广告靠疗效。' },
          { icon: Award, title: '品质质保', desc: '所有材料透明可溯，终身维护承诺。' },
        ].map((item, i) => (
          <div key={i} className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm space-y-4">
            <div className="w-16 h-16 bg-brand-primary/10 text-brand-primary rounded-2xl flex items-center justify-center">
              <item.icon size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
            <p className="text-slate-500 text-lg leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* QR Codes Section */}
      <section className="bg-slate-900 rounded-[40px] p-12 md:p-20 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">关注我们，获取更多护牙知识</h2>
            <p className="text-xl text-slate-400">
              扫码关注我们的公众号或添加客服微信，<br />
              定期发布社区义诊信息、护牙小贴士及专属优惠。
            </p>
            <button 
              onClick={onOpenConsultation}
              className="bg-brand-primary text-white px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform"
            >
              立即在线咨询
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="text-center space-y-4">
              <div className="bg-white p-4 rounded-[32px]">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=WeChat_Public_Account" 
                  alt="Official Account"
                  className="w-32 h-32"
                />
              </div>
              <p className="font-bold">官方公众号</p>
            </div>
            <div className="text-center space-y-4">
              <div className="bg-white p-4 rounded-[32px]">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=WeChat_Customer_Service" 
                  alt="Customer Service"
                  className="w-32 h-32"
                />
              </div>
              <p className="font-bold">院长助理微信</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
