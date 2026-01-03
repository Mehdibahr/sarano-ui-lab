import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/mock';
import { LoanCalculator } from '../components/loan/LoanCalculator';
import { ShieldCheck, Truck, Star, Heart, Share2, ChevronLeft, Info, CheckCircle2, MessageSquare, ThumbsUp } from 'lucide-react';
import { formatCurrency } from '../config/loan';

export const ProductDetail = () => {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);
  const [activeTab, setActiveTab] = useState<'specs' | 'reviews'>('specs');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!product) return <div className="p-20 text-center font-sans">محصول مورد نظر یافت نشد.</div>;

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Sticky Mobile Header (Buy Button) */}
      <div className={`lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 z-50 flex items-center justify-between transition-transform duration-300 ${isSticky ? 'translate-y-0' : 'translate-y-full'}`}>
         <div>
            <div className="text-xs text-slate-400 line-through">{formatCurrency(product.price)}</div>
            <div className="font-bold text-slate-900">{formatCurrency(product.price * 1.025)} <span className="text-xs font-normal">قسطی</span></div>
         </div>
         <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-indigo-200">خرید اقساطی</button>
      </div>

      <div className="container-fluid py-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-slate-500 mb-8 overflow-x-auto no-scrollbar whitespace-nowrap">
          <Link to="/shop" className="hover:text-indigo-600">فروشگاه</Link>
          <ChevronLeft size={14} className="mx-2 shrink-0" />
          <Link to={`/shop/${product.category}`} className="hover:text-indigo-600">{product.category}</Link>
          <ChevronLeft size={14} className="mx-2 shrink-0" />
          <span className="text-slate-900 font-bold bg-white px-2 py-0.5 rounded-md shadow-sm">{product.title}</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* --- RIGHT COLUMN (Gallery & Info) --- */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Gallery Section */}
            <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 border border-slate-100 relative shadow-sm group overflow-hidden">
               <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
               
               <div className="absolute top-6 left-6 z-20 flex flex-col gap-3">
                 <button className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-400 hover:text-rose-500 hover:bg-rose-50 hover:scale-110 transition-all shadow-sm border border-slate-50">
                   <Heart size={22} />
                 </button>
                 <button className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-400 hover:text-indigo-500 hover:bg-indigo-50 hover:scale-110 transition-all shadow-sm border border-slate-50">
                   <Share2 size={22} />
                 </button>
               </div>

               <div className="relative z-10 aspect-square lg:aspect-[16/10] flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="max-w-full max-h-full object-contain mix-blend-multiply drop-shadow-2xl transition-transform duration-500 group-hover:scale-105" 
                  />
               </div>
               
               {/* Thumbnail Strip (Mock) */}
               <div className="flex justify-center gap-4 mt-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className={`w-16 h-16 rounded-xl border-2 flex items-center justify-center p-2 cursor-pointer transition-all ${i === 1 ? 'border-indigo-600 bg-indigo-50' : 'border-slate-100 hover:border-slate-300'}`}>
                       <img src={product.image} className="w-full h-full object-contain mix-blend-multiply" />
                    </div>
                  ))}
               </div>
            </div>

            {/* Info Tabs */}
            <div className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm" id="details">
              <div className="flex border-b border-slate-100 sticky top-[80px] z-10 bg-white/95 backdrop-blur-md">
                <button 
                  onClick={() => setActiveTab('specs')}
                  className={`flex-1 py-5 text-sm lg:text-base font-bold border-b-2 transition-all ${activeTab === 'specs' ? 'border-indigo-600 text-indigo-600 bg-indigo-50/30' : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50'}`}
                >
                  مشخصات فنی
                </button>
                <button 
                  onClick={() => setActiveTab('reviews')}
                  className={`flex-1 py-5 text-sm lg:text-base font-bold border-b-2 transition-all ${activeTab === 'reviews' ? 'border-indigo-600 text-indigo-600 bg-indigo-50/30' : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50'}`}
                >
                  نظرات کاربران <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full text-xs mr-1">{product.reviews}</span>
                </button>
              </div>
              
              <div className="p-6 lg:p-10 min-h-[300px]">
                 {activeTab === 'specs' ? (
                   <div className="space-y-4 max-w-2xl mx-auto">
                     <h3 className="font-black text-xl mb-6 flex items-center gap-2">
                       <Info className="text-indigo-600" />
                       ویژگی‌های اصلی
                     </h3>
                     {Object.entries(product.specs).map(([key, val], idx) => (
                       <div key={key} className={`flex justify-between items-center p-4 rounded-xl ${idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                         <span className="text-slate-500 font-medium">{key}</span>
                         <span className="font-bold text-slate-900 dir-ltr text-right">{val}</span>
                       </div>
                     ))}
                   </div>
                 ) : (
                   <div className="space-y-8 max-w-2xl mx-auto">
                      <div className="flex items-center gap-4 bg-amber-50 p-6 rounded-2xl border border-amber-100">
                         <div className="text-center">
                            <div className="text-4xl font-black text-amber-500">{product.rating}</div>
                            <div className="flex text-amber-400 text-xs mt-1">
                               {'★★★★★'}
                            </div>
                         </div>
                         <div className="h-10 w-px bg-amber-200 mx-2"></div>
                         <div>
                            <p className="font-bold text-slate-800 text-sm">از مجموع {product.reviews} رای</p>
                            <p className="text-xs text-slate-500 mt-1">۸۵٪ از خریداران این کالا را پیشنهاد کرده‌اند.</p>
                         </div>
                      </div>

                      {/* Mock Review */}
                      <div className="border-b border-slate-100 pb-8">
                         <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                               <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500 text-xs">AR</div>
                               <span className="font-bold text-sm text-slate-900">علی رضایی</span>
                               <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded-full">خریدار</span>
                            </div>
                            <span className="text-xs text-slate-400">۱۴۰۳/۰۲/۱۵</span>
                         </div>
                         <p className="text-slate-600 text-sm leading-relaxed mb-4">
                            واقعا محصول فوق‌العاده‌ای هست. خرید اقساطی سارانو هم خیلی سریع انجام شد. ممنون از تیم پشتیبانی که راهنمایی کردن.
                         </p>
                         <div className="flex items-center gap-2 text-xs font-medium text-emerald-600">
                            <ThumbsUp size={14} /> پیشنهاد می‌کنم
                         </div>
                      </div>
                   </div>
                 )}
              </div>
            </div>
          </div>

          {/* --- LEFT COLUMN (Sticky Buy Box) --- */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-24 space-y-6">
              
              {/* Product Title Header */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md uppercase tracking-wider">{product.category}</span>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                     <Star size={12} fill="currentColor" /> {product.rating}
                  </div>
                </div>
                <h1 className="text-2xl lg:text-3xl font-black text-slate-900 leading-tight mb-4">{product.title}</h1>
              </div>

              {/* Pricing Card */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xl shadow-slate-200/50 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-600/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                 
                 <div className="relative z-10">
                   <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                      <span className="text-slate-500 font-medium text-sm">قیمت نقدی</span>
                      <div className="text-2xl font-black text-slate-900 flex items-center gap-1">
                        {formatCurrency(product.price)} 
                        <span className="text-sm font-normal text-slate-400">تومان</span>
                      </div>
                   </div>

                   {/* Calculator Integration */}
                   <div className="space-y-4">
                      <div className="flex items-center gap-2 font-bold text-slate-900 mb-2">
                         <div className="w-1.5 h-6 bg-indigo-600 rounded-full"></div>
                         محاسبه‌گر اقساط
                      </div>
                      <LoanCalculator 
                        initialAmount={product.price} 
                        compact={true} 
                        className="!shadow-none !border !border-slate-100 !bg-slate-50/50 rounded-2xl"
                      />
                   </div>
                   
                   {/* Benefits List */}
                   <div className="mt-6 space-y-3">
                      {[
                        'تایید اعتبار آنی (زیر ۲ دقیقه)',
                        'بدون نیاز به ضامن',
                        'ارسال رایگان به سراسر کشور'
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-600">
                           <CheckCircle2 size={14} className="text-emerald-500" />
                           {item}
                        </div>
                      ))}
                   </div>
                 </div>
              </div>

              {/* Delivery Info */}
              <div className="bg-white rounded-2xl border border-slate-100 p-4 flex items-center justify-between shadow-sm">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
                       <Truck size={20} />
                    </div>
                    <div>
                       <div className="font-bold text-slate-900 text-sm">ارسال اکسپرس</div>
                       <div className="text-xs text-slate-500">تحویل ۲-۳ روز کاری</div>
                    </div>
                 </div>
                 <div className="text-emerald-600 font-bold text-sm">رایگان</div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};