import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { LOANS } from '../../data/mock';
import { formatCurrency } from '../../config/loan';
import { Wallet, TrendingUp, AlertTriangle, ChevronLeft, CreditCard, Plus, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Account = () => {
  const activeLoans = LOANS.filter(l => l.status === 'active');
  const totalOutstanding = activeLoans.reduce((sum, loan) => sum + loan.remainingAmount, 0);
  const creditLimit = 100_000_000;
  const availableCredit = creditLimit - totalOutstanding;
  const creditUsage = (totalOutstanding / creditLimit) * 100;

  return (
    <DashboardLayout>
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        {/* --- Top Section: Wallet & Quick Actions --- */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
           
           {/* Credit Card Visualization */}
           <div className="lg:col-span-7 xl:col-span-8">
              <div className="relative h-64 md:h-72 rounded-[2.5rem] overflow-hidden group shadow-2xl shadow-indigo-500/20">
                 {/* Card Background */}
                 <div className="absolute inset-0 bg-slate-900">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-700 to-slate-900 opacity-90"></div>
                    <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500 rounded-full blur-[80px] opacity-40"></div>
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-rose-500 rounded-full blur-[80px] opacity-30"></div>
                 </div>

                 <div className="relative z-10 h-full p-8 flex flex-col justify-between text-white">
                    <div className="flex justify-between items-start">
                       <div>
                          <p className="text-indigo-200 text-sm font-medium mb-1">اعتبار در دسترس</p>
                          <h2 className="text-4xl lg:text-5xl font-black tracking-tight flex items-baseline gap-2">
                             {formatCurrency(availableCredit)}
                             <span className="text-lg lg:text-xl font-normal text-indigo-200">تومان</span>
                          </h2>
                       </div>
                       <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                          <Wallet size={24} className="text-white" />
                       </div>
                    </div>

                    <div className="space-y-4">
                       <div className="flex justify-between text-sm text-indigo-200 font-medium">
                          <span>مصرف شده: {Math.round(creditUsage)}٪</span>
                          <span>سقف اعتبار: {formatCurrency(creditLimit)}</span>
                       </div>
                       <div className="h-3 bg-black/20 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
                          {/* Progress bar fills from Right in RTL */}
                          <div 
                            className="h-full bg-gradient-to-l from-emerald-400 to-teal-500 rounded-full shadow-[0_0_15px_rgba(52,211,153,0.5)] transition-all duration-1000 ease-out"
                            style={{ width: `${100 - creditUsage}%` }} // Available %
                          ></div>
                       </div>
                       <div className="flex items-center gap-4 pt-2">
                          <div className="text-xs font-mono text-indigo-300 tracking-widest">**** **** **** 8821</div>
                          <div className="text-xs text-indigo-200">EXP: 05/28</div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>

           {/* Quick Actions Grid */}
           <div className="lg:col-span-5 xl:col-span-4 grid grid-cols-2 gap-4">
              <Link to="/installments" className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-100/50 hover:-translate-y-1 transition-all flex flex-col justify-center items-center gap-3 group">
                 <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CreditCard size={28} />
                 </div>
                 <span className="font-bold text-slate-700">پرداخت قسط</span>
              </Link>
              
              <Link to="/shop" className="bg-slate-900 p-6 rounded-[2rem] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-center items-center gap-3 group text-white">
                 <div className="w-14 h-14 bg-white/10 text-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform backdrop-blur-md">
                    <Plus size={28} />
                 </div>
                 <span className="font-bold">سفارش جدید</span>
              </Link>

              <div className="col-span-2 bg-gradient-to-r from-emerald-500 to-teal-600 p-6 rounded-[2rem] shadow-lg text-white flex items-center justify-between relative overflow-hidden group cursor-pointer hover:shadow-emerald-500/20">
                 <div className="relative z-10">
                    <h3 className="font-bold text-lg">افزایش اعتبار</h3>
                    <p className="text-emerald-100 text-xs mt-1">تا سقف ۲۰۰ میلیون تومان</p>
                 </div>
                 <div className="relative z-10 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:rotate-45 transition-transform">
                    <ArrowUpRight />
                 </div>
                 <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              </div>
           </div>
        </div>

        {/* --- Middle Section: Stats & Active Loans --- */}
        <div className="grid lg:grid-cols-3 gap-8">
           
           {/* Active Loans List */}
           <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                 <h3 className="text-xl font-black text-slate-800 flex items-center gap-2">
                   <div className="w-2 h-8 bg-indigo-600 rounded-full"></div>
                   اقساط فعال
                 </h3>
                 <Link to="/installments" className="text-sm font-bold text-indigo-600 hover:bg-indigo-50 px-4 py-2 rounded-xl transition-colors">
                   مشاهده همه
                 </Link>
              </div>

              <div className="space-y-4">
                 {activeLoans.map(loan => (
                   <div key={loan.id} className="group flex flex-col sm:flex-row items-center gap-6 p-5 rounded-3xl border border-slate-100 hover:border-indigo-100 hover:bg-indigo-50/30 transition-all">
                      <div className="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xl shrink-0 group-hover:scale-110 transition-transform">
                         {loan.progress}٪
                      </div>
                      <div className="flex-1 text-center sm:text-right">
                         <h4 className="font-bold text-slate-900 text-lg mb-1">{loan.title}</h4>
                         <div className="flex items-center justify-center sm:justify-start gap-3 text-sm text-slate-500">
                            <span className="bg-white px-2 py-0.5 rounded-md border border-slate-100 font-medium">باقی: {formatCurrency(loan.remainingAmount)}</span>
                            <span className="bg-rose-50 text-rose-600 px-2 py-0.5 rounded-md font-bold text-xs">سررسید: ۳ روز</span>
                         </div>
                      </div>
                      <div className="w-full sm:w-auto">
                         <button className="w-full sm:w-auto px-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm shadow-lg shadow-slate-900/10 hover:shadow-slate-900/30 hover:-translate-y-1 transition-all">
                            پرداخت قسط
                         </button>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           {/* Side Stats */}
           <div className="space-y-6">
              <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm relative overflow-hidden">
                 <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl">
                       <TrendingUp size={24} />
                    </div>
                    <span className="bg-emerald-50 text-emerald-600 px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                       <ArrowUpRight size={12} /> +۱۵ امتیاز
                    </span>
                 </div>
                 <div className="relative z-10">
                    <p className="text-slate-500 font-medium text-sm">امتیاز خوش‌حسابی</p>
                    <h3 className="text-4xl font-black text-slate-900 mt-1">۷۸۵ <span className="text-lg text-slate-400 font-medium">/ ۸۰۰</span></h3>
                    <p className="text-xs text-slate-400 mt-2">عالی! شما در دهک اول هستید.</p>
                 </div>
                 <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-amber-100 rounded-full blur-[60px] opacity-50"></div>
              </div>

              <div className="bg-rose-50 p-6 rounded-[2rem] border border-rose-100 flex items-start gap-4">
                 <div className="p-3 bg-white text-rose-500 rounded-2xl shadow-sm shrink-0">
                    <AlertTriangle size={24} />
                 </div>
                 <div>
                    <h4 className="font-bold text-slate-800">قسط معوقه ندارید</h4>
                    <p className="text-sm text-rose-700/80 mt-1 leading-relaxed">
                       تشکر بابت پرداخت‌های منظم شما. این روند باعث افزایش سقف اعتبار می‌شود.
                    </p>
                 </div>
              </div>
           </div>

        </div>
      </div>
    </DashboardLayout>
  );
};