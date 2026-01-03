import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/mock';
import { formatCurrency, calculateMonthlyPayment } from '../config/loan';
import { Trash2, Plus, Minus, ArrowLeft, ShieldCheck, Truck, CreditCard } from 'lucide-react';

export const Cart = () => {
  // Mock cart state
  const cartItems = [PRODUCTS[0], PRODUCTS[2]]; // MacBook + Headphones
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const shipping = 0;
  const total = subtotal + shipping;
  const monthlyTotal = calculateMonthlyPayment(total, 12);

  return (
    <div className="bg-slate-50 min-h-screen py-8 font-sans">
      <div className="container-fluid">
        <h1 className="text-3xl font-black text-slate-900 mb-8">سبد خرید</h1>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Cart Items */}
          <div className="lg:col-span-8 space-y-4">
             {cartItems.map((item) => (
               <div key={item.id} className="bg-white p-4 rounded-3xl border border-slate-100 flex gap-4 items-center group hover:border-indigo-100 transition-all">
                  <div className="w-24 h-24 bg-slate-50 rounded-2xl p-2 shrink-0">
                     <img src={item.image} alt={item.title} className="w-full h-full object-contain mix-blend-multiply" />
                  </div>
                  
                  <div className="flex-grow">
                     <div className="flex justify-between items-start mb-2">
                        <div>
                           <h3 className="font-bold text-slate-900 text-sm md:text-base">{item.title}</h3>
                           <p className="text-xs text-slate-400 mt-1">{item.category}</p>
                        </div>
                        <button className="text-slate-300 hover:text-rose-500 transition-colors p-1">
                           <Trash2 size={18} />
                        </button>
                     </div>
                     
                     <div className="flex flex-wrap justify-between items-end gap-4">
                        <div className="flex items-center gap-3 bg-slate-50 rounded-xl px-2 py-1">
                           <button className="w-6 h-6 rounded-lg bg-white shadow-sm flex items-center justify-center text-slate-600 hover:text-indigo-600"><Plus size={14} /></button>
                           <span className="text-sm font-bold text-slate-900 w-4 text-center">1</span>
                           <button className="w-6 h-6 rounded-lg bg-white shadow-sm flex items-center justify-center text-slate-400 hover:text-rose-500"><Minus size={14} /></button>
                        </div>
                        <div className="text-left">
                           <div className="font-black text-slate-900">{formatCurrency(item.price)} <span className="text-xs font-normal text-slate-400">تومان</span></div>
                        </div>
                     </div>
                  </div>
               </div>
             ))}

             <div className="bg-indigo-50/50 rounded-2xl p-4 border border-indigo-100 flex items-center gap-3 text-sm text-indigo-700">
                <Truck size={20} />
                <span className="font-bold">ارسال رایگان</span>
                <span className="mr-auto text-xs opacity-80">برای سفارش‌های بالای ۵ میلیون تومان</span>
             </div>
          </div>

          {/* Checkout Summary */}
          <div className="lg:col-span-4">
             <div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/50 sticky top-24">
                <h3 className="font-bold text-lg text-slate-900 mb-6">خلاصه سفارش</h3>
                
                <div className="space-y-4 mb-6 border-b border-slate-100 pb-6">
                   <div className="flex justify-between text-sm text-slate-600">
                      <span>جمع اقلام ({cartItems.length})</span>
                      <span className="font-bold">{formatCurrency(subtotal)}</span>
                   </div>
                   <div className="flex justify-between text-sm text-slate-600">
                      <span>هزینه ارسال</span>
                      <span className="font-bold text-emerald-600">رایگان</span>
                   </div>
                   <div className="flex justify-between text-sm text-slate-600">
                      <span>مالیات و عوارض</span>
                      <span className="font-bold">محاسبه در مرحله بعد</span>
                   </div>
                </div>

                <div className="flex justify-between items-center mb-6">
                   <span className="font-black text-lg text-slate-900">مبلغ قابل پرداخت</span>
                   <div className="text-right">
                      <div className="font-black text-xl text-indigo-600">{formatCurrency(total)}</div>
                      <span className="text-xs text-slate-400">تومان</span>
                   </div>
                </div>

                {/* Installment Option Highlight */}
                <div className="bg-slate-900 rounded-2xl p-4 text-white mb-6 relative overflow-hidden group cursor-pointer">
                   <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-20 group-hover:opacity-30 transition-opacity"></div>
                   <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                            <CreditCard size={20} />
                         </div>
                         <div>
                            <div className="text-xs text-slate-300">خرید قسطی (۱۲ ماهه)</div>
                            <div className="font-bold text-lg">{formatCurrency(monthlyTotal)} / ماه</div>
                         </div>
                      </div>
                      <div className="w-5 h-5 rounded-full border-2 border-white/30 flex items-center justify-center">
                         <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.8)]"></div>
                      </div>
                   </div>
                </div>

                <Link to="/auth/login" className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                   تایید و ادامه <ArrowLeft />
                </Link>

                <div className="mt-4 flex justify-center gap-4 text-xs text-slate-400">
                   <span className="flex items-center gap-1"><ShieldCheck size={12} /> پرداخت امن</span>
                   <span className="flex items-center gap-1"><ShieldCheck size={12} /> ضمانت بازگشت</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};