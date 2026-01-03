import React, { useState } from 'react';
import { LOAN_CONFIG, calculateMonthlyPayment, formatCurrency } from '../../config/loan';
import { ArrowLeft, Calculator, ShieldCheck, Info } from 'lucide-react';

interface LoanCalculatorProps {
  initialAmount?: number;
  initialDuration?: number;
  onApply?: (amount: number, duration: number) => void;
  className?: string;
  compact?: boolean;
}

export const LoanCalculator: React.FC<LoanCalculatorProps> = ({ 
  initialAmount = 20_000_000, 
  initialDuration = 12,
  className = "",
  compact = false
}) => {
  const [amount, setAmount] = useState(initialAmount);
  const [months, setMonths] = useState(initialDuration);

  const monthlyPayment = calculateMonthlyPayment(amount, months);
  const percentage = ((amount - LOAN_CONFIG.minAmount) / (LOAN_CONFIG.maxAmount - LOAN_CONFIG.minAmount)) * 100;

  return (
    <div className={`glass rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 ${className}`}>
      
      {/* Header */}
      {!compact && (
        <div className="p-8 pb-0 flex items-center justify-between">
          <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
             <span className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
               <Calculator size={20} />
             </span>
             محاسبه‌گر هوشمند
          </h2>
          <div className="hidden sm:flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full">
            <ShieldCheck size={14} />
            نرخ سود ۲.۵٪ (مصوب)
          </div>
        </div>
      )}

      <div className={`space-y-8 ${compact ? 'p-6' : 'p-8'}`}>
        
        {/* Amount Slider Section */}
        <div>
          <div className="flex justify-between items-end mb-6">
            <label className="text-sm font-bold text-slate-500">مبلغ درخواستی</label>
            <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-l from-indigo-700 to-indigo-500 flex items-baseline gap-1">
               {formatCurrency(amount)}
               <span className="text-sm font-bold text-slate-400">تومان</span>
            </div>
          </div>
          
          <div className="relative h-12 flex items-center group">
            <div className="absolute inset-0 bg-slate-100 rounded-2xl overflow-hidden">
               <div 
                 className="h-full bg-gradient-to-l from-indigo-600 to-purple-600 relative"
                 style={{ width: `${percentage}%` }}
               >
                 <div className="absolute left-0 top-0 bottom-0 w-2 bg-white/20"></div>
               </div>
            </div>
            
            <input 
              type="range" 
              min={LOAN_CONFIG.minAmount} 
              max={LOAN_CONFIG.maxAmount} 
              step={LOAN_CONFIG.stepAmount}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            
            {/* Custom Thumb handle that follows value */}
            <div 
              className="absolute h-8 w-8 bg-white shadow-xl shadow-black/10 rounded-xl border-4 border-indigo-50 flex items-center justify-center pointer-events-none transition-all duration-75 ease-out z-20 group-hover:scale-110"
              style={{ right: `calc(${100 - percentage}% - 16px)` }} // RTL logic correction
            >
              <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
            </div>
          </div>
          
          <div className="flex justify-between mt-3 text-xs font-semibold text-slate-400">
            <span>۵ میلیون</span>
            <span>۱۰۰ میلیون</span>
          </div>
        </div>

        {/* Duration Selector */}
        <div>
          <label className="text-sm font-bold text-slate-500 mb-4 block">مدت بازپرداخت</label>
          <div className="grid grid-cols-6 gap-2">
            {LOAN_CONFIG.allowedDurations.map((m) => (
              <button
                key={m}
                onClick={() => setMonths(m)}
                className={`relative py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                  months === m 
                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/30 scale-105 z-10' 
                    : 'bg-white text-slate-500 border border-slate-100 hover:border-indigo-200 hover:text-indigo-600'
                }`}
              >
                {m}
                <span className="text-[10px] opacity-70 block font-normal">ماه</span>
              </button>
            ))}
          </div>
        </div>

        {/* Result Card (Credit Card Style) */}
        <div className="relative mt-8">
           <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-800 rounded-3xl transform rotate-1 scale-[0.98] opacity-50 blur-lg"></div>
           <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 text-white shadow-2xl overflow-hidden">
              {/* Background Noise/Pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10 flex items-center justify-between">
                 <div>
                   <p className="text-slate-400 text-xs font-bold mb-1">قسط ماهیانه شما</p>
                   <div className="text-4xl font-black tracking-tight flex items-baseline gap-2">
                     {formatCurrency(monthlyPayment)}
                     <span className="text-lg font-medium text-slate-500">تومان</span>
                   </div>
                 </div>
                 <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/10 backdrop-blur-md">
                   <Info size={24} className="text-white/80" />
                 </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center text-xs text-slate-400">
                <span>بازپرداخت کل: {formatCurrency(monthlyPayment * months)}</span>
                <span className="text-emerald-400 font-bold">تایید فوری</span>
              </div>
           </div>
        </div>

        <button className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group">
          ثبت درخواست اعتبار
          <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        </button>

      </div>
    </div>
  );
};