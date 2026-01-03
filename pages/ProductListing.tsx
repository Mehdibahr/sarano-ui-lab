import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductCard } from '../components/shop/ProductCard';
import { PRODUCTS } from '../data/mock';
import { Filter, ChevronDown, SlidersHorizontal, ChevronLeft, Check, X } from 'lucide-react';

export const ProductListing = () => {
  const { category } = useParams();
  
  const categoryNames: Record<string, string> = {
    'mobiles': 'موبایل',
    'laptops': 'لپ‌تاپ',
    'audio': 'صوتی',
    'gaming': 'گیمینگ',
    'cameras': 'دوربین',
    'wearables': 'ساعت هوشمند',
    'home': 'خانه و آشپزخانه',
    'accessories': 'لوازم جانبی',
    'digital': 'کالای دیجیتال',
    'appliances': 'لوازم خانگی',
    'beauty': 'زیبایی و سلامت'
  };

  const displayCategory = category ? (categoryNames[category] || category) : 'همه محصولات';
  
  const filteredProducts = category && category !== 'all' 
    ? PRODUCTS.filter(p => p.category === category || category === 'digital') 
    : PRODUCTS;

  return (
    <div className="bg-slate-50 min-h-screen pb-12 font-sans">
      
      {/* Category Header */}
      <div className="bg-white border-b border-slate-200 pt-8 pb-12 px-4 mb-8 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"></div>
         <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex items-center text-sm text-slate-500 mb-4">
               <Link to="/" className="hover:text-indigo-600 transition-colors">خانه</Link>
               <ChevronLeft size={14} className="mx-2 text-slate-300" />
               <Link to="/shop" className="hover:text-indigo-600 transition-colors">فروشگاه</Link>
               <ChevronLeft size={14} className="mx-2 text-slate-300" />
               <span className="text-slate-900 font-bold bg-slate-100 px-2 py-0.5 rounded-md">{displayCategory}</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-2">
              {displayCategory}
            </h1>
            <p className="text-slate-500 max-w-2xl">
              بهترین قیمت‌های خرید اقساطی {displayCategory} با تحویل فوری و ضمانت اصالت کالا.
            </p>
         </div>
         {/* Decor */}
         <div className="absolute -right-20 -top-20 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      </div>

      <div className="container-fluid">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters (Glass Desktop) */}
          <aside className="hidden lg:block w-72 flex-shrink-0 space-y-6">
            <div className="glass rounded-2xl p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-slate-900 text-lg">فیلترها</h3>
                <button className="text-xs text-rose-500 font-bold hover:bg-rose-50 px-2 py-1 rounded-md transition">حذف همه</button>
              </div>
              
              {/* Brand Filter */}
              <div className="mb-8">
                <h4 className="text-sm font-bold text-slate-700 mb-4 flex items-center justify-between">
                  برند
                  <ChevronDown size={14} className="text-slate-400" />
                </h4>
                <div className="space-y-3">
                  {['اپل', 'سامسونگ', 'سونی', 'ایسوس', 'شیائومی'].map((brand, idx) => (
                    <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${idx === 0 ? 'bg-indigo-600 border-indigo-600' : 'border-slate-300 bg-white group-hover:border-indigo-400'}`}>
                        {idx === 0 && <Check size={12} className="text-white" />}
                      </div>
                      <span className={`text-sm transition-colors ${idx === 0 ? 'text-indigo-600 font-bold' : 'text-slate-600 group-hover:text-indigo-600'}`}>{brand}</span>
                      <span className="mr-auto text-xs text-slate-400 font-mono">({Math.floor(Math.random() * 50)})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h4 className="text-sm font-bold text-slate-700 mb-4">محدوده قیمت</h4>
                <div className="space-y-4">
                  <input type="range" className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 dir-ltr" />
                  <div className="flex items-center gap-2">
                     <div className="bg-white border border-slate-200 rounded-lg p-2 text-xs text-center w-1/2 shadow-sm font-bold text-slate-700">۰</div>
                     <span className="text-slate-300">-</span>
                     <div className="bg-white border border-slate-200 rounded-lg p-2 text-xs text-center w-1/2 shadow-sm font-bold text-slate-700">۱۰۰ م</div>
                  </div>
                </div>
              </div>

              {/* Toggle Filters */}
              <div className="space-y-3">
                 <label className="flex items-center justify-between cursor-pointer group">
                    <span className="text-sm font-medium text-slate-700 group-hover:text-indigo-600 transition">فقط کالاهای موجود</span>
                    <div className="w-10 h-5 bg-slate-200 rounded-full relative transition-colors group-hover:bg-slate-300">
                       <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm transition-transform"></div>
                    </div>
                 </label>
                 <label className="flex items-center justify-between cursor-pointer group">
                    <span className="text-sm font-medium text-slate-700 group-hover:text-indigo-600 transition">ارسال رایگان</span>
                    <div className="w-10 h-5 bg-indigo-600 rounded-full relative transition-colors">
                       <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm translate-x-5 transition-transform"></div>
                    </div>
                 </label>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-grow">
            {/* Mobile Actions Bar */}
            <div className="lg:hidden bg-white p-4 rounded-2xl border border-slate-100 shadow-sm mb-6 flex items-center justify-between sticky top-20 z-30">
               <button className="flex items-center gap-2 text-sm font-bold text-slate-700">
                 <Filter size={18} /> فیلترها
               </button>
               <button className="flex items-center gap-2 text-sm font-bold text-slate-700">
                 <SlidersHorizontal size={18} /> مرتب‌سازی
               </button>
            </div>

            {/* Desktop Sort & Active Filters */}
            <div className="hidden lg:flex items-center justify-between mb-6">
               <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-slate-500">مرتب‌سازی:</span>
                  {['پرفروش‌ترین', 'جدیدترین', 'ارزان‌ترین', 'گران‌ترین'].map((sort, i) => (
                    <button key={sort} className={`text-sm px-3 py-1.5 rounded-lg transition-all ${i === 0 ? 'bg-indigo-600 text-white font-bold shadow-md shadow-indigo-200' : 'text-slate-600 hover:bg-slate-100'}`}>
                      {sort}
                    </button>
                  ))}
               </div>
               <div className="text-xs text-slate-400 font-medium">
                  نمایش {filteredProducts.length} کالا
               </div>
            </div>
            
            {/* Active Chips (Mock) */}
            <div className="flex flex-wrap gap-2 mb-6">
               <div className="bg-white border border-slate-200 px-3 py-1 rounded-full text-xs font-bold text-slate-600 flex items-center gap-2 hover:border-rose-200 hover:text-rose-500 cursor-pointer transition">
                  برند: اپل <X size={12} />
               </div>
               <div className="bg-white border border-slate-200 px-3 py-1 rounded-full text-xs font-bold text-slate-600 flex items-center gap-2 hover:border-rose-200 hover:text-rose-500 cursor-pointer transition">
                  ارسال رایگان <X size={12} />
               </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {filteredProducts.map((p, idx) => (
                  <div key={p.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${idx * 50}ms`, animationFillMode: 'both' }}>
                    <ProductCard product={p} />
                  </div>
                ))}
              </div>
            ) : (
               <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 border-dashed">
                 <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                    <Filter size={24} />
                 </div>
                 <h3 className="text-slate-900 font-bold mb-2">محصولی یافت نشد</h3>
                 <p className="text-slate-500 font-medium text-sm">لطفا فیلترهای اعمال شده را تغییر دهید.</p>
                 <button className="text-indigo-600 font-bold mt-6 inline-flex items-center gap-2 hover:gap-3 transition-all bg-indigo-50 px-6 py-2 rounded-xl">
                   حذف فیلترها
                 </button>
               </div>
            )}
            
            {/* Pagination (Mock) */}
            {filteredProducts.length > 0 && (
              <div className="mt-12 flex justify-center gap-2">
                 <button className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-200">۱</button>
                 <button className="w-10 h-10 rounded-xl bg-white text-slate-600 font-bold hover:bg-slate-50 border border-transparent hover:border-slate-200 transition">۲</button>
                 <button className="w-10 h-10 rounded-xl bg-white text-slate-600 font-bold hover:bg-slate-50 border border-transparent hover:border-slate-200 transition">۳</button>
                 <span className="w-10 h-10 flex items-center justify-center text-slate-400">...</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};