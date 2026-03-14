import React from 'react';
import {motion} from 'motion/react';
import {
  ChevronRight,
  Zap,
  Scissors,
  Crown,
  Droplets,
  AlignJustify,
  Anchor,
} from 'lucide-react';

interface ProjectsPageProps {
  projects?: {id: string}[];
  onSelectProject: (id: string) => void;
  onOpenConsultation?: () => void;
}

const SERVICE_BOARDS = [
  {
    id: 'implant',
    icon: Anchor,
    title: '种植中心',
    desc: '单颗、多颗或全口缺牙，数字化精准定位，选适合的品牌和方案。',
    tags: ['数字化导板', '品牌透明', '即拔即种'],
    accent: true,
  },
  {
    id: 'endodontics',
    icon: Zap,
    title: '补牙 · 根管',
    desc: '蛀牙充填、冷热敏感、牙神经炎症，根管治疗保住整颗牙。',
    tags: ['简单充填', '复杂充填', '显微根管'],
    accent: false,
  },
  {
    id: 'surgery',
    icon: Scissors,
    title: '拔牙 · 外科',
    desc: '普通拔牙、阻生智齿、复杂外科，全程局麻微创处置。',
    tags: ['普通拔牙', '阻生牙', '微创外科'],
    accent: false,
  },
  {
    id: 'fixed-restoration',
    icon: Crown,
    title: '修复 · 牙冠',
    desc: '牙体缺损修复、全瓷冠、固定桥、活动义齿，恢复咀嚼与美观。',
    tags: ['全瓷冠', '固定桥', '活动义齿'],
    accent: false,
  },
  {
    id: 'periodontal',
    icon: Droplets,
    title: '牙周 · 洁牙',
    desc: '超声洁治、龈下刮治、牙周系统治疗，解决牙龈出血和口气问题。',
    tags: ['洁治', '龈下刮治', '牙周维护'],
    accent: false,
  },
  {
    id: 'orthodontics',
    icon: AlignJustify,
    title: '正畸矫正',
    desc: '儿童早期干预、青少年固定矫治、成人隐形矫正，全程亲诊。',
    tags: ['儿童矫正', '固定矫治', '隐形矫正'],
    accent: false,
  },
];

export const ProjectsPage: React.FC<ProjectsPageProps> = ({onSelectProject}) => {
  return (
    <div className="space-y-12 pb-12">

      <header className="space-y-3">
        <h1 className="text-5xl font-extrabold text-slate-900 md:text-6xl">服务项目</h1>
        <p className="text-2xl text-slate-500 max-w-xl">选择您需要了解的方向，点击查看详情。</p>
      </header>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {SERVICE_BOARDS.map((board, i) => {
          const Icon = board.icon;
          return (
            <motion.button
              key={board.id}
              initial={{opacity: 0, y: 12}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: i * 0.05}}
              onClick={() => onSelectProject(board.id)}
              className="text-left rounded-[32px] border bg-white border-slate-200 hover:border-slate-300 hover:shadow-md p-8 space-y-5 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center
                ${board.accent ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-700'}`}>
                <Icon size={26} />
              </div>

              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-slate-900">{board.title}</h3>
                <p className="text-lg leading-7 text-slate-500">{board.desc}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {board.tags.map(tag => (
                  <span key={tag} className="rounded-full px-4 py-2 text-base font-medium bg-slate-100 text-slate-600">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="inline-flex items-center gap-2 text-base font-semibold text-slate-500 group-hover:gap-3 transition-all">
                了解详情 <ChevronRight size={18} />
              </div>
            </motion.button>
          );
        })}
      </div>

    </div>
  );
};
