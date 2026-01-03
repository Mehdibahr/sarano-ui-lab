import React from 'react';
import { CategoryStrip } from '../components/shop/CategoryStrip';
import { ProductCard } from '../components/shop/ProductCard';
import { PRODUCTS } from '../data/mock';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Zap, Star, ShieldCheck, Truck, Percent } from 'lucide-react';

export const ShopHome = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-12 lg:py-20">
        {/* Animated Backgrounds */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 animate-float-delayed"></div>
        
        <div className="container-fluid relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="space-y-6 text-center lg:text-right">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-xs font-bold text-indigo-300">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></span>
                  جشنواره تابستانه آغاز شد
                </div>
                <h1 className="text-4xl lg:text-6xl font-black leading-tight">
                  دنیای دیجیتال، <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400">پرداخت اقساطی.</span>
                </h1>
                <p className="text-slate-400 text-lg max-w-lg mx-auto lg:mx-0">
                  بدون پیش‌پرداخت، جدیدترین محصولات اپل، سامسونگ و سونی را بخرید و هزینه را در ۲۴ ماه پرداخت کنید.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                   <Link to="/shop/digital" className="btn-primary px-8 py-3.5 flex items-center justify-center gap-2">
                     خرید قسطی <ArrowLeft size={18} />
                   </Link>
                   <Link to="/credit-guide" className="px-8 py-3.5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition font-bold flex items-center justify-center">
                     شرایط خرید
                   </Link>
                </div>
             </div>
             
             {/* Hero Visual */}
             <div className="relative lg:h-[400px] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-3xl rotate-6 backdrop-blur-sm border border-white/5"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl w-full max-w-md shadow-2xl transform transition-transform hover:-translate-y-2 hover:rotate-1">
                   <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="font-bold text-xl mb-1">iPhone 15 Pro</h3>
                        <p className="text-xs text-slate-400">Titanium Design</p>
                      </div>
                      <span className="bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-md">موجود</span>
                   </div>
                   <img 
                     src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=600" 
                     alt="Hero Product" 
                     className="w-full h-48 object-contain mix-blend-screen mb-6 drop-shadow-2xl"
                   />
                   <div className="flex justify-between items-end border-t border-white/10 pt-4">
                      <div>
                        <div className="text-xs text-slate-400 mb-1">قسط ماهیانه</div>
                        <div className="text-xl font-black text-white">۲,۵۰۰,۰۰۰ <span className="text-xs font-normal">تومان</span></div>
                      </div>
                      <button className="w-10 h-10 bg-white text-slate-900 rounded-full flex items-center justify-center hover:bg-indigo-400 transition">
                        <ArrowLeft />
                      </button>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-16">
        
        {/* Categories (Floating Glass) */}
        <section className="glass rounded-2xl p-6 shadow-xl shadow-slate-200/50">
          <CategoryStrip />
        </section>

        {/* --- FLASH SALE SECTION --- */}
        <section className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-rose-500 to-orange-600 text-white shadow-2xl shadow-rose-500/30">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center">
             
             {/* Left: Timer & Text */}
             <div className="p-8 md:p-12 w-full md:w-1/2 text-center md:text-right">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold mb-4 border border-white/20 shadow-inner">
                  <Zap size={14} className="text-yellow-300 fill-yellow-300" />
                  پیشنهاد شگفت‌انگیز روز
                </div>
                <h2 className="text-3xl md:text-5xl font-black mb-4">کنسول بازی PS5</h2>
                <p className="text-rose-100 mb-8 text-lg">نسخه دیجیتال، با دسته اضافه و اشتراک پلاس ۳ ماهه.</p>
                
                {/* Timer Mockup */}
                <div className="flex items-center justify-center md:justify-start gap-3 mb-8 text-slate-900">
                   {['۰۲', '۴۵', '۱۲'].map((num, i) => (
                     <div key={i} className="bg-white rounded-xl w-14 h-14 flex flex-col items-center justify-center font-black text-xl shadow-lg">
                       {num}
                       <span className="text-[9px] font-bold text-slate-400">{['ساعت', 'دقیقه', 'ثانیه'][i]}</span>
                     </div>
                   ))}
                </div>

                <Link to="/shop/gaming" className="inline-block bg-white text-rose-600 px-8 py-3 rounded-xl font-bold hover:bg-rose-50 hover:scale-105 transition shadow-xl">
                  خرید آنی
                </Link>
             </div>

             {/* Right: Image */}
             <div className="w-full md:w-1/2 h-64 md:h-full relative flex items-center justify-center p-8 bg-white/10 backdrop-blur-sm">
                <div className="absolute top-4 left-4 bg-yellow-400 text-slate-900 font-black text-xl px-4 py-2 rounded-lg rotate-[-5deg] shadow-lg z-20">
                  ۳۰٪ تخفیف
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=800" 
                  alt="PS5" 
                  className="max-h-64 object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-500"
                />
             </div>
          </div>
        </section>

        {/* Benefits Strip */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {[
             { icon: Truck, title: 'ارسال رایگان', sub: 'سراسر ایران' },
             { icon: ShieldCheck, title: 'ضمانت اصالت', sub: 'تضمین ۱۰۰٪ کالا' },
             { icon: Clock, title: 'پرداخت اقساطی', sub: 'تا ۲۴ ماه' },
             { icon: Percent, title: 'بدون کارمزد', sub: 'برای خرید اول' },
           ].map((item, i) => (
             <div key={i} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-3">
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
                <p className="text-xs text-slate-500 mt-1">{item.sub}</p>
             </div>
           ))}
        </section>

        {/* Popular Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
              <span className="w-2 h-8 bg-indigo-600 rounded-full"></span>
              محبوب‌ترین‌های بازار
            </h2>
            <Link to="/shop/all" className="text-sm font-bold text-indigo-600 hover:bg-indigo-50 px-4 py-2 rounded-lg transition-colors flex items-center gap-1">
              مشاهده همه <ArrowLeft size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        {/* Brands Marquee (Static Mock) */}
        <section className="py-10 border-t border-b border-slate-100 bg-white">
           <div className="flex justify-between items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500 px-4 overflow-x-auto no-scrollbar gap-12">
              {['APPLE', 'SAMSUNG', 'SONY', 'LG', 'ASUS', 'XIAOMI', 'MICROSOFT'].map(brand => (
                <span key={brand} className="text-2xl font-black text-slate-300 shrink-0">{brand}</span>
              ))}
           </div>
        </section>

        {/* New Arrivals */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
               <span className="w-2 h-8 bg-emerald-500 rounded-full"></span>
               تازه‌های تکنولوژی
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...PRODUCTS].reverse().map(p => (
              <ProductCard key={`new-${p.id}`} product={p} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};