import React from 'react';
import { motion } from 'motion/react';
import { Home, Users, LayoutGrid, BookOpen, Image as ImageIcon, ChevronRight, Info } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenConsultation: () => void;
}

const navItems = [
  { id: 'home', icon: Home, label: '首页' },
  { id: 'projects', icon: LayoutGrid, label: '服务项目' },
  { id: 'experts', icon: Users, label: '专家团' },
  { id: 'cases', icon: ImageIcon, label: '案例库' },
  { id: 'about', icon: Info, label: '关于我们' },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, onOpenConsultation }) => {
  return (
    <div className="w-24 md:w-64 bg-slate-900 h-screen fixed left-0 top-0 flex flex-col border-r border-white/10 z-50">
      <div className="p-6 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">禾</span>
          </div>
          <span className="text-white font-bold text-xl hidden md:block">禾悦口腔</span>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all ${
              activeTab === item.id
                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                : 'text-slate-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            <item.icon size={24} />
            <span className="font-medium text-lg hidden md:block">{item.label}</span>
            {activeTab === item.id && <ChevronRight size={18} className="ml-auto hidden md:block" />}
          </button>
        ))}
      </nav>

      <div className="p-4 mt-auto">
        <div className="bg-white/5 rounded-2xl p-4 hidden md:block">
          <p className="text-slate-400 text-xs mb-1">当前版本</p>
          <p className="text-white text-sm font-medium">v1.2.0 Digital</p>
        </div>
      </div>
    </div>
  );
};
