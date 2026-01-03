import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { formatCurrency } from '../../config/loan';
import { Package, Truck, CheckCircle2, MapPin, ChevronLeft } from 'lucide-react';
import { PRODUCTS } from '../../data/mock';

export const Orders = () => {
  // Mock Order Data
  const order = {
    id: 'ORD-1403-8821',
    date: '۱۴۰۳/۰۲/۲۰',
    total: 85_000_000,
    status: 'shipping', // processing, shipping, delivered
    items: [PRODUCTS[0]],
    steps: [
      { id: 1, label: 'تایید سفارش', date: '۲۰ اردیبهشت', completed: true },
      { id: 2, label: 'پردازش انبار', date: '۲۱ اردیبهشت', completed: true },
      { id: 3, label: 'تحویل به پست', date: '۲۲ اردیبهشت', completed: true },
      { id: 4, label: 'در حال ارسال', date: 'هم‌اکنون', completed: true, current: true },
      { id: 5, label: 'تحویل مشتری', date: '-', completed: false },
    ]
  };

  return (
    <DashboardLayout>
      <div className="space-y-8 animate-in fade-in duration-500">
        <div>
           <h1 className="text-2xl font-black text-slate-900">سفارش‌های من</h1>
           <p className="text-slate-500 mt-1">پیگیری وضعیت ارسال خریدهای شما</p>
        </div>

        {/* Active Order Card */}
        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
           <div className="p-8 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                 <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-bold text-slate-900">سفارش {order.id}</h3>
                    <span className="bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-lg text-xs font-bold">در حال ارسال</span>
                 </div>
                 <p className="text-slate-500 text-sm">ثبت شده در {order.date} | مبلغ کل: {formatCurrency(order.total)} تومان</p>
              </div>
              <button className="flex items-center gap-1 text-indigo-600 font-bold text-sm hover:underline">
                 جزئیات فاکتور <ChevronLeft size={16} />
              </button>
           </div>
           
           <div className="p-8 bg-slate-50/50">
              {/* Stepper */}
              <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-8 md:gap-0">
                 {/* Connection Line (Desktop) */}
                 <div className="hidden md:block absolute top-5 left-0 right-0 h-1 bg-slate-200 -z-10 rounded-full mx-10"></div>
                 <div className="hidden md:block absolute top-5 right-0 h-1 bg-indigo-500 -z-10 rounded-full mx-10 transition-all duration-1000" style={{ width: '65%' }}></div>

                 {order.steps.map((step, idx) => (
                    <div key={step.id} className="flex md:flex-col items-center gap-4 md:gap-2 relative z-10 w-full md:w-auto">
                       {/* Connection Line (Mobile) */}
                       {idx !== order.steps.length - 1 && (
                         <div className={`md:hidden absolute top-8 bottom-[-32px] right-4 w-1 ${step.completed ? 'bg-indigo-500' : 'bg-slate-200'} -z-10`}></div>
                       )}

                       <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 transition-all duration-500 ${
                          step.completed || step.current 
                             ? 'bg-indigo-600 border-indigo-100 text-white shadow-lg shadow-indigo-200' 
                             : 'bg-white border-slate-200 text-slate-300'
                       }`}>
                          {step.completed ? <CheckCircle2 size={18} /> : step.current ? <Truck size={18} /> : <div className="w-2 h-2 bg-slate-300 rounded-full"></div>}
                       </div>
                       <div className="md:text-center">
                          <div className={`text-sm font-bold ${step.current ? 'text-indigo-600' : 'text-slate-700'}`}>{step.label}</div>
                          <div className="text-xs text-slate-400 mt-0.5">{step.date}</div>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* Items & Address */}
           <div className="p-8 grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                 <h4 className="font-bold text-slate-800 mb-4 text-sm">محصولات</h4>
                 <div className="space-y-4">
                    {order.items.map(item => (
                       <div key={item.id} className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-2xl hover:border-indigo-100 transition">
                          <div className="w-16 h-16 bg-slate-50 rounded-xl p-2">
                             <img src={item.image} alt={item.title} className="w-full h-full object-contain mix-blend-multiply" />
                          </div>
                          <div>
                             <h5 className="font-bold text-slate-900 text-sm">{item.title}</h5>
                             <div className="text-xs text-slate-500 mt-1">گارانتی ۱۸ ماهه شرکتی</div>
                             <div className="font-bold text-slate-900 mt-2 text-sm">{formatCurrency(item.price)} تومان</div>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 h-fit">
                 <h4 className="font-bold text-slate-800 mb-4 text-sm flex items-center gap-2">
                    <MapPin size={16} className="text-indigo-500" /> آدرس تحویل
                 </h4>
                 <p className="text-sm text-slate-600 leading-relaxed">
                    تهران، خیابان ولیعصر، بالاتر از پارک ساعی، کوچه ۳۴، پلاک ۱۲، واحد ۴
                 </p>
                 <div className="mt-4 pt-4 border-t border-slate-200">
                    <div className="flex justify-between text-sm mb-2">
                       <span className="text-slate-500">تحویل گیرنده:</span>
                       <span className="font-bold text-slate-800">علی رضایی</span>
                    </div>
                    <div className="flex justify-between text-sm">
                       <span className="text-slate-500">شماره تماس:</span>
                       <span className="font-bold text-slate-800 font-mono">09123456789</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
};