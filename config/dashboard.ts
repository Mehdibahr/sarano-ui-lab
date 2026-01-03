import { LayoutDashboard, CreditCard, Building2, ShoppingBag, Settings, LogOut } from 'lucide-react';

export const DASHBOARD_CONFIG = {
  navigation: [
    { 
      title: 'نمای کلی',
      items: [
        { id: 'account', label: 'داشبورد', icon: LayoutDashboard, href: '/account' },
        { id: 'installments', label: 'قسط‌های من', icon: CreditCard, href: '/installments' },
        { id: 'orders', label: 'تاریخچه سفارشات', icon: ShoppingBag, href: '/account/orders' },
      ]
    },
    {
      title: 'سازمانی',
      items: [
        { id: 'b2b', label: 'پنل سازمانی', icon: Building2, href: '/b2b' },
      ]
    },
    {
      title: 'تنظیمات',
      items: [
        { id: 'settings', label: 'تنظیمات حساب', icon: Settings, href: '/account/settings' },
        { id: 'logout', label: 'خروج', icon: LogOut, href: '/' },
      ]
    }
  ]
};