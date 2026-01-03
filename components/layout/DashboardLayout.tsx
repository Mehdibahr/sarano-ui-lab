import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DASHBOARD_CONFIG } from '../../config/dashboard';
import { Bell, Search, User, LogOut, ChevronLeft, Menu, X } from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#F0F4F8] font-sans text-right dir-rtl selection:bg-indigo-500 selection:text-white">
      
      {/* Background Blobs for depth */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-200/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-200/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="relative z-10 flex h-screen overflow-hidden">
        
        {/* --- Sidebar (Desktop) --- */}
        <aside className="hidden lg:flex w-72 flex-col p-4 z-20">
           <div className="bg-white/80 backdrop-blur-xl border border-white/50 h-full rounded-[2rem] shadow-2xl shadow-slate-200/50 flex flex-col">
              
              {/* Logo Area */}
              <div className="p-8 pb-4 flex items-center gap-3">
                 <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-indigo-500/30">
                   س
                 </div>
                 <span className="text-2xl font-black text-slate-800 tracking-tight">سارانو</span>
              </div>

              {/* Navigation */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-8 no-scrollbar">
                {DASHBOARD_CONFIG.navigation.map((group) => (
                  <div key={group.title}>
                    <h3 className="text-xs font-bold text-slate-400 px-4 mb-3 uppercase tracking-wider">{group.title}</h3>
                    <div className="space-y-1">
                      {group.items.map((item) => {
                        const isActive = location.pathname === item.href;
                        return (
                          <Link
                            key={item.id}
                            to={item.href}
                            className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-300 group ${
                              isActive 
                                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 scale-105 font-bold' 
                                : 'text-slate-500 hover:bg-slate-50 hover:text-indigo-600 font-medium'
                            }`}
                          >
                            <item.icon size={20} className={isActive ? 'text-white' : 'text-slate-400 group-hover:text-indigo-500'} />
                            <span>{item.label}</span>
                            {isActive && <ChevronLeft size={16} className="mr-auto opacity-50" />}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* User Mini Profile */}
              <div className="p-4 mt-auto">
                 <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 border-2 border-white shadow-sm overflow-hidden">
                       <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                    </div>
                    <div className="flex-1 min-w-0">
                       <div className="text-sm font-bold text-slate-900 truncate">علی رضایی</div>
                       <div className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded inline-block mt-0.5">حساب طلایی</div>
                    </div>
                    <button className="text-slate-400 hover:text-rose-500 transition-colors">
                       <LogOut size={18} />
                    </button>
                 </div>
              </div>
           </div>
        </aside>

        {/* --- Main Content Area --- */}
        <div className="flex-1 flex flex-col h-full overflow-hidden relative">
           
           {/* Top Bar (Mobile + Desktop) */}
           <header className="h-20 px-4 lg:px-8 flex items-center justify-between z-20">
              <div className="lg:hidden">
                 <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 bg-white rounded-xl shadow-sm text-slate-600">
                    <Menu size={24} />
                 </button>
              </div>

              {/* Page Title / Breadcrumb (Hidden on small mobile) */}
              <div className="hidden sm:block">
                 <h2 className="text-xl font-black text-slate-800">
                    {DASHBOARD_CONFIG.navigation.flatMap(g => g.items).find(i => i.href === location.pathname)?.label || 'داشبورد'}
                 </h2>
              </div>

              <div className="flex items-center gap-3">
                 <div className="hidden md:flex items-center gap-2 bg-white/60 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/50 shadow-sm focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-100 transition-all w-64">
                    <Search size={18} className="text-slate-400" />
                    <input type="text" placeholder="جستجو..." className="bg-transparent border-none outline-none text-sm w-full placeholder:text-slate-400" />
                 </div>
                 
                 <button className="relative w-11 h-11 bg-white/60 backdrop-blur-md rounded-2xl border border-white/50 flex items-center justify-center text-slate-500 hover:bg-white hover:text-indigo-600 hover:shadow-lg hover:shadow-indigo-100 transition-all">
                    <Bell size={20} />
                    <span className="absolute top-3 right-3 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white"></span>
                 </button>

                 <Link to="/" className="w-11 h-11 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/20 hover:scale-105 transition-transform">
                    <span className="text-xs">فروشگاه</span>
                 </Link>
              </div>
           </header>

           {/* Scrollable Content */}
           <main className="flex-1 overflow-y-auto px-4 lg:px-8 pb-8 no-scrollbar">
              <div className="max-w-6xl mx-auto">
                {children}
              </div>
           </main>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
           <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
           <div className="absolute right-0 top-0 bottom-0 w-3/4 max-w-xs bg-white shadow-2xl p-6 overflow-y-auto animate-in slide-in-from-right duration-300">
              <div className="flex justify-between items-center mb-8">
                 <span className="text-2xl font-black text-slate-900">سارانو</span>
                 <button onClick={() => setIsMobileMenuOpen(false)}><X /></button>
              </div>
              <div className="space-y-6">
                 {DASHBOARD_CONFIG.navigation.map((group) => (
                    <div key={group.title}>
                       <h3 className="text-xs font-bold text-slate-400 mb-2">{group.title}</h3>
                       <div className="space-y-1">
                          {group.items.map(item => (
                             <Link 
                               key={item.id} 
                               to={item.href} 
                               onClick={() => setIsMobileMenuOpen(false)}
                               className={`flex items-center gap-3 px-3 py-3 rounded-xl ${location.pathname === item.href ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-slate-50'}`}
                             >
                                <item.icon size={18} /> {item.label}
                             </Link>
                          ))}
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      )}

    </div>
  );
};