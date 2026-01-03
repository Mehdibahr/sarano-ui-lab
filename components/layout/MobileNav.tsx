import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Store, User, CreditCard, ShoppingBag } from 'lucide-react';

export const MobileNav = () => {
  const navItems = [
    { label: 'خانه', icon: Home, href: '/' },
    { label: 'فروشگاه', icon: Store, href: '/shop' },
    { label: 'اعتبار', icon: CreditCard, href: '/credit-guide' }, // Link to wizard later
    { label: 'سبد', icon: ShoppingBag, href: '/cart' },
    { label: 'حساب', icon: User, href: '/account' },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-slate-200 pb-safe pt-2 px-6 z-50">
      <div className="flex justify-between items-center pb-2">
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) => `flex flex-col items-center gap-1 transition-all duration-300 ${
              isActive ? 'text-indigo-600 -translate-y-2' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            {({ isActive }) => (
              <>
                <div className={`p-2 rounded-xl transition-all ${isActive ? 'bg-indigo-50 shadow-indigo-100 shadow-lg' : ''}`}>
                  <item.icon size={isActive ? 24 : 22} strokeWidth={isActive ? 2.5 : 2} />
                </div>
                <span className={`text-[10px] font-bold ${isActive ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                  {item.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};