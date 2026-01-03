import React from 'react';
import { formatCurrency } from '../../config/loan';

interface CreditGaugeProps {
  limit: number;
  used: number;
}

export const CreditGauge: React.FC<CreditGaugeProps> = ({ limit, used }) => {
  const percentage = Math.min(100, Math.round((used / limit) * 100));
  const available = limit - used;

  return (
    <div className="bg-slate-900 rounded-2xl p-6 text-white relative overflow-hidden">
      <div className="relative z-10 flex flex-col justify-between h-full min-h-[140px]">
        <div>
           <h3 className="text-slate-400 font-medium text-sm mb-1">اعتبار در دسترس</h3>
           <div className="text-3xl font-bold flex items-center gap-1">
             {formatCurrency(available)} 
             <span className="text-sm font-normal text-slate-400">تومان</span>
           </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-slate-400">
            <span>مصرف شده: {formatCurrency(used)}</span>
            <span>سقف: {formatCurrency(limit)}</span>
          </div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            {/* Removed dir-ltr. In RTL, this bar will fill from Right to Left, which is the correct 'Start' for RTL. */}
            <div 
              className="h-full bg-gradient-to-l from-indigo-500 to-purple-500 rounded-full transition-all duration-1000"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-600 rounded-full blur-[60px] opacity-20 -translate-x-10 -translate-y-10"></div>
    </div>
  );
};