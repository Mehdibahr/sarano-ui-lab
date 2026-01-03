import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { LOANS, INSTALLMENTS } from '../../data/mock';
import { formatCurrency } from '../../config/loan';
import { Calendar, CheckCircle2, Clock, AlertCircle, ChevronDown, Receipt } from 'lucide-react';

export const Installments = () => {
  const [expandedLoan, setExpandedLoan] = React.useState<string | null>(LOANS[0]?.id || null);

  return (
    <DashboardLayout>
      <div className="space-y-8 animate-in fade-in duration-500">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-slate-900">دفترچه اقساط</h1>
            <p className="text-slate-500 mt-1">مدیریت هوشمند وام‌ها و سررسیدها</p>
          </div>
          <div className="flex gap-2 bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
             <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-bold shadow-sm">فعال</button>
             <button className="px-4 py-2 text-slate-500 hover:bg-slate-50 rounded-lg text-sm font-bold transition">تسویه شده</button>
          </div>
        </div>

        <div className="space-y-6">
          {LOANS.map(loan => {
             const loanInstallments = INSTALLMENTS.filter(i => i.loanId === loan.id);
             const isExpanded = expandedLoan === loan.id;
             
             return (
               <div key={loan.id} className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
                 
                 {/* Loan Summary Header */}
                 <div 
                   className="p-6 md:p-8 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative"
                   onClick={() => setExpandedLoan(isExpanded ? null : loan.id)}
                 >
                   <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0">
                         <Receipt size={28} />
                      </div>
                      <div>
                         <h3 className="text-xl font-bold text-slate-900">{loan.title}</h3>
                         <div className="flex items-center gap-3 text-sm text-slate-500 mt-2">
                            <span className="font-mono bg-slate-100 px-2 py-0.5 rounded text-xs">{loan.id}</span>
                            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                            <span>{formatCurrency(loan.totalAmount)} تومان</span>
                         </div>
                      </div>
                   </div>

                   <div className="flex items-center gap-8 pl-8 border-l border-slate-100">
                      <div>
                         <p className="text-xs text-slate-400 font-bold mb-1">پیشرفت پرداخت</p>
                         <div className="flex items-center gap-3">
                            <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
                               <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${loan.progress}%` }}></div>
                            </div>
                            <span className="text-sm font-bold text-slate-700">{loan.progress}٪</span>
                         </div>
                      </div>
                      <div className="hidden sm:block">
                         <p className="text-xs text-slate-400 font-bold mb-1">باقی‌مانده</p>
                         <p className="text-lg font-black text-slate-900">{formatCurrency(loan.remainingAmount)}</p>
                      </div>
                   </div>

                   <div className={`absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                      <ChevronDown size={24} />
                   </div>
                 </div>

                 {/* Installments Timeline/Grid */}
                 {isExpanded && (
                   <div className="border-t border-slate-100 bg-slate-50/50 p-6 md:p-8">
                      <h4 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                        <Calendar size={18} className="text-indigo-500" />
                        برنامه پرداخت‌ها
                      </h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                         {loanInstallments.map((inst) => {
                           const isPaid = inst.status === 'paid';
                           const isOverdue = inst.status === 'overdue';
                           
                           return (
                             <div key={inst.id} className={`relative p-5 rounded-2xl border transition-all ${
                               isPaid 
                                 ? 'bg-emerald-50/30 border-emerald-100' 
                                 : isOverdue 
                                   ? 'bg-white border-rose-200 shadow-sm'
                                   : 'bg-white border-slate-200 hover:border-indigo-200 hover:shadow-md'
                             }`}>
                                <div className="flex justify-between items-start mb-4">
                                   <span className="w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center text-sm font-bold text-slate-500 shadow-sm">
                                      {inst.number}
                                   </span>
                                   {isPaid ? (
                                     <span className="text-emerald-600 bg-emerald-100/50 px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                                        <CheckCircle2 size={12} /> پرداخت شد
                                     </span>
                                   ) : isOverdue ? (
                                      <span className="text-rose-600 bg-rose-100/50 px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1 animate-pulse">
                                        <AlertCircle size={12} /> معوقه
                                      </span>
                                   ) : (
                                      <span className="text-amber-600 bg-amber-100/50 px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                                        <Clock size={12} /> در انتظار
                                      </span>
                                   )}
                                </div>
                                
                                <div className="mb-4">
                                   <div className="text-2xl font-black text-slate-900 flex items-baseline gap-1">
                                      {formatCurrency(inst.amount)}
                                      <span className="text-xs font-normal text-slate-400">تومان</span>
                                   </div>
                                   <div className="text-xs text-slate-500 mt-1">
                                      سررسید: {new Date(inst.dueDate).toLocaleDateString('fa-IR')}
                                   </div>
                                </div>

                                {!isPaid && (
                                   <button className={`w-full py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm ${
                                      isOverdue 
                                        ? 'bg-rose-500 text-white hover:bg-rose-600 shadow-rose-200' 
                                        : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-200'
                                   }`}>
                                      پرداخت آنلاین
                                   </button>
                                )}
                             </div>
                           );
                         })}
                      </div>
                   </div>
                 )}
               </div>
             );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
};