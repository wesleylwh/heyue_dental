import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ShieldCheck } from 'lucide-react';

interface ThreeDAnimationProps {
  type: 'missing' | 'ortho' | 'aesthetic' | 'health';
}

export const ThreeDAnimation: React.FC<ThreeDAnimationProps> = ({ type }) => {
  if (type === 'missing') {
    return (
      <div className="relative w-full h-64 flex items-center justify-center perspective-1000">
        <div className="relative w-48 h-48 preserve-3d">
          {/* Gums Base */}
          <motion.div 
            className="absolute bottom-0 w-full h-12 bg-pink-200 rounded-t-3xl border-b-4 border-pink-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          
          {/* Implant Screw */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-8 bg-slate-400 rounded-b-lg border-x-2 border-slate-500"
            style={{ height: '40px', bottom: '40px' }}
            animate={{ 
              y: [0, 20, 0],
              rotateY: [0, 360],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-full h-px bg-slate-600 my-1.5 opacity-50" />
            ))}
          </motion.div>

          {/* Crown (Tooth) */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-16 h-20 bg-white rounded-2xl border-2 border-slate-100 shadow-lg"
            style={{ bottom: '80px' }}
            animate={{ 
              y: [0, -10, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <div className="w-full h-4 bg-slate-50/50 rounded-t-2xl" />
          </motion.div>
        </div>
        <div className="absolute bottom-4 text-emerald-600 font-bold animate-pulse">
          数字化种植模拟中...
        </div>
      </div>
    );
  }

  if (type === 'ortho') {
    return (
      <div className="relative w-full h-64 flex items-center justify-center">
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-12 h-16 bg-white rounded-xl border-2 border-slate-100 shadow-sm relative"
              animate={{
                rotate: i % 2 === 0 ? [15, 0, 15] : [-15, 0, -15],
                x: i % 2 === 0 ? [10, 0, 10] : [-10, 0, -10],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
              }}
            >
              {/* Bracket */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-slate-300 rounded-sm border border-slate-400" />
            </motion.div>
          ))}
          {/* Archwire */}
          <motion.div 
            className="absolute top-1/2 left-0 w-full h-1 bg-slate-400 -translate-y-1/2 z-10"
            animate={{ scaleY: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        <div className="absolute bottom-4 text-emerald-600 font-bold animate-pulse">
          牙齿排齐模拟中...
        </div>
      </div>
    );
  }

  if (type === 'aesthetic') {
    return (
      <div className="relative w-full h-64 flex items-center justify-center">
        <div className="relative">
          <motion.div
            className="w-32 h-40 bg-white rounded-2xl border-2 border-slate-100 shadow-lg relative overflow-hidden"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {/* Shine effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent -skew-x-12"
              animate={{ x: [-200, 200] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
          {/* Sparkles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-yellow-400"
              style={{ 
                top: i * 40, 
                left: i % 2 === 0 ? -20 : 120 
              }}
              animate={{ 
                scale: [0, 1, 0],
                rotate: [0, 180]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                delay: i * 0.5 
              }}
            >
              <Sparkles size={24} fill="currentColor" />
            </motion.div>
          ))}
        </div>
        <div className="absolute bottom-4 text-emerald-600 font-bold animate-pulse">
          美学修复模拟中...
        </div>
      </div>
    );
  }

  if (type === 'health') {
    return (
      <div className="relative w-full h-64 flex items-center justify-center">
        <div className="relative">
          <motion.div
            className="w-32 h-32 bg-emerald-50 rounded-full flex items-center justify-center border-4 border-emerald-200"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <ShieldCheck size={64} className="text-emerald-500" />
          </motion.div>
          {/* Bubbles */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-emerald-200/50 rounded-full"
              style={{ 
                top: 40 + i * 20, 
                left: i % 2 === 0 ? -30 : 130 
              }}
              animate={{ 
                y: [0, -40],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: i * 0.4 
              }}
            />
          ))}
        </div>
        <div className="absolute bottom-4 text-emerald-600 font-bold animate-pulse">
          健康护理模拟中...
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-64 flex items-center justify-center bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
      <div className="text-slate-400 italic">3D 演示加载中...</div>
    </div>
  );
};
