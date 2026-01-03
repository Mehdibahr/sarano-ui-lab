import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { B2B_DATA } from '../../data/mock';
import { formatCurrency } from '../../config/loan';
import { Building2, Users, FileCheck, ArrowUpRight, Plus } from 'lucide-react';

export const B2B = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8 font-sans">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
             <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
               <Building2 className="text-indigo-600" />
               {B2B_DATA.companyName}
             </h1>
             <p className="text-slate-500 flex items-center gap-2 text-sm mt-1">
                پنل سازمانی
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span className="font-mono dir-ltr">ID: #CORP-8821</span>
             </p>
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition shadow-lg shadow-indigo-200 justify-center">
            <Plus size={18} /> درخواست جدید
          </button>
        </div>

        {/* Corporate Limit Card */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-slate-700">
            <div>
              <p className="text-slate-400 mb-2 text-sm">سقف اعتبار سازمانی</p>
              <div className="text-3xl lg:text-4xl font-black">{formatCurrency(B2B_DATA.creditLimit)} <span className="text-lg font-normal text-slate-500">تومان</span></div>
            </div>
            <div className="md:pr-8 pt-6 md:pt-0">
              <p className="text-slate-400 mb-2 text-sm">اعتبار مصرف شده</p>
              <div className="text-3xl font-bold">{formatCurrency(B2B_DATA.usedCredit)} <span className="text-lg font-normal text-slate-500">تومان</span></div>
              <div className="text-emerald-400 text-sm mt-2 flex items-center gap-1">
                 <ArrowUpRight size={16} /> ۲۲٪ استفاده شده
              </div>
            </div>
            <div className="md:pr-8 pt-6 md:pt-0">
               <p className="text-slate-400 mb-2 text-sm">کارمندان فعال</p>
               <div className="text-3xl font-bold">{B2B_DATA.activeEmployees} <span className="text-lg font-normal text-slate-500">نفر</span></div>
               <div className="text-slate-500 text-sm mt-2">مجاز به خرید</div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-600 rounded-full blur-[100px] opacity-20"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent RFQs */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <FileCheck size={18} className="text-indigo-500" /> درخواست‌های اخیر (RFQ)
              </h3>
            </div>
            <div className="divide-y divide-slate-100">
              {B2B_DATA.rfqs.map((rfq) => (
                <div key={rfq.id} className="p-5 flex items-center justify-between hover:bg-slate-50 transition">
                   <div>
                     <div className="font-bold text-slate-800 text-sm">{rfq.title}</div>
                     <div className="text-xs text-slate-500 mt-1 flex items-center gap-2">
                        <span className="font-mono">{rfq.id}</span>
                        <span>•</span>
                        <span>{rfq.date}</span>
                     </div>
                   </div>
                   <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${rfq.status === 'approved' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                     {rfq.status === 'approved' ? 'تایید شده' : 'در انتظار'}
                   </span>
                </div>
              ))}
            </div>
            <div className="p-4 bg-slate-50 text-center border-t border-slate-100">
              <button className="text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors">مشاهده همه درخواست‌ها</button>
            </div>
          </div>

          {/* Quick Actions / Members */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Users size={18} className="text-indigo-500" /> مدیریت تیم
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-indigo-200 transition bg-slate-50 hover:bg-white">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
                     JD
                   </div>
                   <div>
                     <div className="font-bold text-slate-900 text-sm">جان دو (نمونه)</div>
                     <div className="text-xs text-slate-500">مدیر فناوری اطلاعات</div>
                   </div>
                 </div>
                 <button className="text-xs font-semibold text-slate-400 hover:text-indigo-600">ویرایش</button>
              </div>
              
              <button className="w-full py-3 border-2 border-dashed border-slate-200 rounded-xl text-slate-400 font-bold hover:border-indigo-300 hover:text-indigo-600 transition flex items-center justify-center gap-2 text-sm">
                <Plus size={18} /> افزودن عضو جدید
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};