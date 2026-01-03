import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION } from '../../config/navigation';
import { Menu, Search, ShoppingCart, User, X, ChevronDown, Sparkles } from 'lucide-react';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll effect handler
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner (Optional) */}
      <div className="bg-slate-900 text-white text-[10px] sm:text-xs py-2 text-center overflow-hidden relative z-50">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 opacity-50 animate-pulse"></div>
        <span className="relative z-10 font-medium flex items-center justify-center gap-2">
          <Sparkles size={12} className="text-yellow-400" />
          جشنواره تابستانه سارانو: خرید قسطی بدون پیش‌پرداخت تا پایان هفته!
        </span>
      </div>

      <header 
        className={`sticky top-0 z-40 transition-all duration-500 ease-in-out ${
          scrolled 
            ? 'py-2' 
            : 'py-4'
        }`}
      >
        <div className="container-fluid">
          <div 
            className={`rounded-3xl transition-all duration-300 px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between border ${
              scrolled 
                ? 'bg-white/80 backdrop-blur-2xl border-white/50 shadow-lg shadow-slate-200/50' 
                : 'bg-transparent border-transparent'
            }`}
          >
            
            {/* Logo Area */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              
              <Link to="/" className="flex items-center gap-3 group">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <span className="text-white font-black text-2xl pt-1">س</span>
                </div>
                <div className="flex flex-col">
                   <span className="text-2xl font-black text-slate-900 tracking-tight leading-none">سارانو</span>
                   <span className="text-[10px] text-slate-500 font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 group-hover:translate-x-0">SARANO</span>
                </div>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-2">
              {NAVIGATION.mainNav.map((item) => (
                <div 
                  key={item.id}
                  className="relative group h-20 flex items-center"
                  onMouseEnter={() => item.id === 'shop' && setActiveMegaMenu('shop')}
                  onMouseLeave={() => setActiveMegaMenu(null)}
                >
                  <Link 
                    to={item.href}
                    className={`flex items-center gap-1.5 text-sm font-bold transition-all px-4 py-2.5 rounded-xl ${
                      location.pathname === item.href 
                        ? 'bg-indigo-50 text-indigo-600' 
                        : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50/80'
                    }`}
                  >
                    {item.label}
                    {item.id === 'shop' && <ChevronDown size={14} className="mt-0.5 opacity-40 group-hover:opacity-100 transition-opacity" />}
                  </Link>

                  {/* Mega Menu - V3 Design */}
                  {item.id === 'shop' && activeMegaMenu === 'shop' && (
                    <div className="absolute top-[80%] right-0 w-[700px] bg-white/90 backdrop-blur-2xl shadow-2xl rounded-3xl border border-white/50 p-8 grid grid-cols-12 gap-8 z-50 animate-in fade-in slide-in-from-top-4 duration-300 ring-1 ring-slate-900/5">
                      {/* Categories List */}
                      <div className="col-span-8 grid grid-cols-2 gap-x-8 gap-y-6">
                         {NAVIGATION.shopCategories.map((cat) => (
                           <div key={cat.id} className="group/cat">
                             <Link to={cat.href} className="flex items-center gap-2 font-bold text-slate-900 mb-2 group-hover/cat:text-indigo-600 transition-colors">
                               <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 opacity-0 group-hover/cat:opacity-100 transition-opacity"></div>
                               {cat.label}
                             </Link>
                             <div className="space-y-1.5 pr-3 border-r border-slate-100">
                               {cat.subCategories?.map(sub => (
                                 <Link key={sub.id} to={sub.href} className="block text-xs font-medium text-slate-500 hover:text-indigo-500 hover:translate-x-1 transition-all">
                                   {sub.label}
                                 </Link>
                               ))}
                             </div>
                           </div>
                         ))}
                      </div>

                      {/* Featured Side */}
                      <div className="col-span-4 bg-gradient-to-b from-indigo-50 to-white rounded-2xl p-4 border border-indigo-50 flex flex-col justify-between group/ad relative overflow-hidden">
                        <div className="absolute inset-0 bg-indigo-600/5 opacity-0 group-hover/ad:opacity-100 transition-opacity"></div>
                        <div className="relative z-10">
                           <span className="bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded-md">پیشنهاد ویژه</span>
                           <h4 className="font-bold text-slate-900 mt-3 mb-1">لپ‌تاپ‌های گیمینگ</h4>
                           <p className="text-xs text-slate-500 leading-relaxed">با پردازنده‌های نسل ۱۴ و اقساط ۲۴ ماهه.</p>
                        </div>
                        <Link to="/shop/digital/laptops" className="relative z-10 mt-4 text-xs font-bold text-indigo-600 flex items-center gap-1 group-hover/ad:gap-2 transition-all">
                          مشاهده و خرید <Sparkles size={12} />
                        </Link>
                        {/* Decorative blob */}
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-400 rounded-full blur-2xl opacity-20"></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Search */}
              <div className="hidden xl:flex items-center gap-2 bg-slate-100/50 hover:bg-white border border-transparent hover:border-slate-200 rounded-2xl px-4 py-3 w-64 transition-all group focus-within:ring-2 focus-within:ring-indigo-100 focus-within:bg-white focus-within:border-indigo-200">
                <Search size={20} className="text-slate-400 group-hover:text-indigo-500 transition-colors" />
                <input 
                  type="text" 
                  placeholder="جستجو در محصولات..." 
                  className="bg-transparent border-none text-sm focus:ring-0 w-full placeholder:text-slate-400 outline-none font-sans"
                />
              </div>

              {/* Icons */}
              <div className="flex items-center gap-2 mr-2">
                <Link to="/cart" className="w-11 h-11 flex items-center justify-center rounded-2xl text-slate-600 hover:bg-white hover:text-indigo-600 hover:shadow-lg hover:shadow-indigo-100 border border-transparent hover:border-indigo-50 transition-all relative">
                  <ShoppingCart size={22} strokeWidth={1.5} />
                  <span className="absolute top-2 right-2.5 h-2 w-2 bg-rose-500 rounded-full ring-2 ring-white animate-pulse"></span>
                </Link>
                
                <Link to="/auth/login" className="hidden sm:flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl transition-all font-bold text-sm shadow-xl shadow-slate-900/20 hover:shadow-slate-900/40 hover:-translate-y-0.5">
                  <User size={18} />
                  <span>ورود</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-white/95 backdrop-blur-xl animate-in fade-in duration-200">
             <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                   <span className="font-black text-2xl text-slate-900">منو</span>
                   <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-slate-100 rounded-xl"><X /></button>
                </div>
                <div className="flex flex-col gap-2 flex-grow overflow-y-auto">
                   {NAVIGATION.mainNav.map(item => (
                     <Link key={item.id} to={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-slate-800 py-4 border-b border-slate-100">{item.label}</Link>
                   ))}
                </div>
                <div className="mt-auto pt-6">
                   <Link to="/auth/login" className="flex items-center justify-center gap-2 w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold shadow-xl shadow-indigo-200">
                     ورود به حساب کاربری
                   </Link>
                </div>
             </div>
          </div>
        )}
      </header>
    </>
  );
};