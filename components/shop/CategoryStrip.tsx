import React from 'react';
import { Link } from 'react-router-dom';
import { Laptop, Smartphone, Headphones, Gamepad, Camera, Watch, Home } from 'lucide-react';

const CATEGORIES = [
  { id: 'mobiles', label: 'موبایل', icon: Smartphone, color: 'text-blue-500', bg: 'bg-blue-50' },
  { id: 'laptops', label: 'لپ‌تاپ', icon: Laptop, color: 'text-indigo-500', bg: 'bg-indigo-50' },
  { id: 'audio', label: 'صوتی', icon: Headphones, color: 'text-pink-500', bg: 'bg-pink-50' },
  { id: 'gaming', label: 'گیمینگ', icon: Gamepad, color: 'text-purple-500', bg: 'bg-purple-50' },
  { id: 'cameras', label: 'دوربین', icon: Camera, color: 'text-orange-500', bg: 'bg-orange-50' },
  { id: 'wearables', label: 'ساعت', icon: Watch, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { id: 'home', label: 'خانه', icon: Home, color: 'text-cyan-500', bg: 'bg-cyan-50' },
];

export const CategoryStrip = () => {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
      {CATEGORIES.map((cat) => (
        <Link 
          key={cat.id} 
          to={`/shop/${cat.id}`}
          className="flex flex-col items-center gap-2 min-w-[80px] group"
        >
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${cat.bg} transition-transform group-hover:-translate-y-1 group-hover:shadow-md`}>
            <cat.icon size={28} className={cat.color} />
          </div>
          <span className="text-xs font-medium text-slate-600 group-hover:text-indigo-600 transition-colors">
            {cat.label}
          </span>
        </Link>
      ))}
    </div>
  );
};