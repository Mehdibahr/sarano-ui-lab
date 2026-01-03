import React from 'react';
import { LoanCalculator } from '../components/loan/LoanCalculator';
import { ArrowLeft, CheckCircle2, ShieldCheck, Zap, Globe, Smartphone, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/mock';
import { ProductCard } from '../components/shop/ProductCard';

export const Landing = () => {
  return (
    <div className="font-sans overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      
      {/* --- HERO SECTION V3 --- */}
      <section className="relative min-h-[90vh] flex items-center pt-20 lg:pt-0">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-slate-50">
           <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-200/40 rounded-full blur-[120px] animate-float"></div>
           <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-rose-200/30 rounded-full blur-[100px] animate-float-delayed"></div>
        </div>

        <div className="container-fluid relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Content Left (RTL Right) */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-right">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-slate-200 text-indigo-700 text-xs font-extrabold tracking-wide animate-in fade-in slide-in-from-bottom-4 duration-700">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-600"></span>
                </span>
                آینده خرید اقساطی اینجاست
              </div>
              
              <h1 className="text-5xl lg:text-7xl/tight font-black text-slate-900 tracking-tight">
                خریدت رو <span className="text-gradient">امروز</span> بکن، <br/>
                پرداختش رو <span className="relative inline-block z-10">
                   فردا
                   <svg className="absolute w-full h-4 -bottom-1 right-0 text-yellow-300 -z-10 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                     <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="12" fill="none" />
                   </svg>
                </span> انجام بده.
              </h1>
              
              <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                سارانو پلتفرم هوشمند «الان بخر، بعدا پرداخت کن» است. بدون ضامن، تمام آنلاین و در کمتر از ۲۴ ساعت اعتبار بگیرید.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
                <Link to="/shop" className="btn-primary px-8 py-4 text-lg flex items-center justify-center gap-2 shadow-indigo-500/20">
                  شروع خرید هیجان‌انگیز <ArrowLeft size={20} />
                </Link>
                <Link to="/credit-guide" className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 hover:border-slate-300 transition flex items-center justify-center gap-2 shadow-sm">
                   چطور کار میکند؟
                </Link>
              </div>

              {/* Trust Strip */}
              <div className="pt-8 border-t border-slate-200/60 flex items-center justify-center lg:justify-start gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                 <div className="font-black text-xl text-slate-300">SAMSUNG</div>
                 <div className="font-black text-xl text-slate-300">APPLE</div>
                 <div className="font-black text-xl text-slate-300">SONY</div>
                 <div className="font-black text-xl text-slate-300">LG</div>
              </div>
            </div>

            {/* Visual Right (RTL Left) - Calculator */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-[3rem] rotate-3 opacity-10 scale-95 blur-2xl"></div>
              <LoanCalculator className="relative z-10 transform lg:-rotate-2 transition-transform hover:rotate-0 duration-500" />
              
              {/* Floating Badge */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl shadow-slate-200 animate-float-delayed z-20 flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                   <ShieldCheck size={20} />
                 </div>
                 <div>
                   <div className="text-xs text-slate-400 font-bold">وضعیت اعتبار</div>
                   <div className="text-sm font-black text-slate-900">تایید شده ✅</div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- BENTO GRID FEATURES --- */}
      <section className="py-32 bg-white">
        <div className="container-fluid">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-black text-slate-900 mb-6">چرا سارانو انتخاب اول است؟</h2>
            <p className="text-slate-500 text-xl">ما پیچیدگی‌های بانکی را حذف کردیم تا شما روی خرید تمرکز کنید.</p>
          </div>

          <div className="grid md:grid-cols-4 md:grid-rows-2 gap-6 h-[800px] md:h-[600px]">
            {/* Card 1: Large */}
            <div className="md:col-span-2 md:row-span-2 bg-slate-50 rounded-[2.5rem] p-10 relative overflow-hidden group border border-slate-100 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500">
               <div className="relative z-10 h-full flex flex-col">
                 <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-indigo-500/30">
                   <Zap size={32} />
                 </div>
                 <h3 className="text-3xl font-black text-slate-900 mb-4">اعتبارسنجی <br/> در لحظه</h3>
                 <p className="text-slate-500 text-lg leading-relaxed mb-8">
                   هوش مصنوعی ما در کمتر از ۲ دقیقه وضعیت اعتباری شما را بررسی می‌کند. بدون نیاز به چک کردن سوابق بانکی قدیمی.
                 </p>
                 <div className="mt-auto bg-white rounded-2xl p-4 shadow-sm border border-slate-100 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all">
                    <div className="flex items-center gap-3 mb-2">
                       <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                       <span className="text-xs font-bold text-slate-500">سیستم فعال است</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                       <div className="h-full bg-emerald-500 w-[92%]"></div>
                    </div>
                 </div>
               </div>
               <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-100 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-200 transition-colors"></div>
            </div>

            {/* Card 2 */}
            <div className="md:col-span-2 bg-slate-900 rounded-[2.5rem] p-8 relative overflow-hidden text-white group">
               <div className="relative z-10 flex items-center justify-between h-full">
                 <div>
                   <h3 className="text-2xl font-black mb-2">بدون ضامن</h3>
                   <p className="text-slate-400">فقط با یک فقره چک صیادی یا سفته الکترونیک.</p>
                 </div>
                 <CreditCard size={48} className="text-indigo-500 group-hover:rotate-12 transition-transform duration-500" />
               </div>
               <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800"></div>
            </div>

            {/* Card 3 */}
            <div className="md:col-span-1 bg-indigo-50 rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center hover:bg-indigo-100 transition-colors border border-indigo-100">
               <Globe size={40} className="text-indigo-600 mb-4" />
               <h3 className="font-bold text-slate-900">سراسر ایران</h3>
               <p className="text-xs text-slate-500 mt-2">ارسال رایگان به تمامی شهرها</p>
            </div>

            {/* Card 4 */}
            <div className="md:col-span-1 bg-rose-50 rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center hover:bg-rose-100 transition-colors border border-rose-100">
               <Smartphone size={40} className="text-rose-600 mb-4" />
               <h3 className="font-bold text-slate-900">اپلیکیشن</h3>
               <p className="text-xs text-slate-500 mt-2">مدیریت اقساط در موبایل</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURED PRODUCTS SLIDER --- */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container-fluid">
          <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-2">منتخب کاربران</h2>
              <p className="text-slate-500">محصولاتی که بیشترین درخواست تقسیط را داشته‌اند</p>
            </div>
            <Link to="/shop" className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-3 transition-all bg-white px-6 py-3 rounded-xl shadow-sm hover:shadow-md">
              همه محصولات <ArrowLeft size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.slice(0, 4).map((product, idx) => (
              <div key={product.id} className="transition-all duration-500 hover:-translate-y-2" style={{ transitionDelay: `${idx * 100}ms` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 relative">
         <div className="container-fluid">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-indigo-500/40">
               <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                  <h2 className="text-4xl md:text-6xl font-black tracking-tight">آماده خرید هستید؟</h2>
                  <p className="text-xl text-indigo-100">همین حالا ثبت نام کنید و تا سقف ۱۰۰ میلیون تومان اعتبار خرید دریافت کنید.</p>
                  <button className="bg-white text-indigo-700 px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-xl">
                    دریافت اعتبار آنی
                  </button>
                  <p className="text-sm text-indigo-200/60 mt-4">بدون کارمزد پنهان • لغو در هر زمان</p>
               </div>
               
               {/* Decor */}
               <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
               <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-yellow-400 rounded-full blur-[80px] opacity-30"></div>
               <div className="absolute -top-24 -left-24 w-64 h-64 bg-rose-500 rounded-full blur-[80px] opacity-30"></div>
            </div>
         </div>
      </section>

    </div>
  );
};