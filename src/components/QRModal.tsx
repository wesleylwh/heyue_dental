import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, Smartphone } from 'lucide-react';

interface QRModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QRModal: React.FC<QRModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white rounded-[40px] shadow-2xl w-full max-w-lg overflow-hidden"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors z-10"
            >
              <X size={24} className="text-slate-400" />
            </button>

            <div className="p-12 text-center">
              <div className="w-20 h-20 bg-emerald-500 rounded-3xl flex items-center justify-center text-white mx-auto mb-8 shadow-lg shadow-emerald-500/20">
                <MessageCircle size={40} />
              </div>
              
              <h2 className="text-4xl font-bold text-slate-900 mb-4">在线咨询预约</h2>
              <p className="text-xl text-slate-500 mb-12">扫码添加专属客服微信，即刻开启数字化口腔检查预约。</p>

              <div className="bg-slate-50 p-8 rounded-[40px] inline-block mb-8 border-2 border-slate-100">
                <div className="w-48 h-48 bg-white p-2 rounded-2xl shadow-inner">
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=WeChat_Customer_Service" 
                    alt="客服微信"
                    className="w-full h-full"
                  />
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 text-emerald-600 font-medium">
                <Smartphone size={20} />
                <span className="text-lg">长按识别二维码或扫一扫</span>
              </div>
            </div>

            <div className="bg-slate-50 p-8 flex items-center justify-center gap-8 border-t border-slate-100">
              <div className="text-center">
                <p className="text-slate-900 font-bold text-xl">1对1咨询</p>
                <p className="text-slate-400">专家在线解答</p>
              </div>
              <div className="w-px h-8 bg-slate-200"></div>
              <div className="text-center">
                <p className="text-slate-900 font-bold text-xl">快速预约</p>
                <p className="text-slate-400">优先安排就诊</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
