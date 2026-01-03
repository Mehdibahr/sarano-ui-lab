import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, UploadCloud, Camera, CheckCircle2, ScanFace, CreditCard, FileText } from 'lucide-react';
import { AppShell } from '../components/layout/AppShell';

export const CreditWizard = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () => setStep(Math.min(step + 1, totalSteps));
  const prevStep = () => setStep(Math.max(step - 1, 1));

  return (
    <div className="min-h-screen bg-slate-50 pb-20 font-sans">
       {/* Header */}
       <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
          <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
             <Link to="/" className="text-slate-500 hover:text-indigo-600"><ArrowRight /></Link>
             <h1 className="font-black text-slate-900">درخواست اعتبار</h1>
             <div className="w-6"></div>
          </div>
          {/* Progress Bar */}
          <div className="h-1 bg-slate-100 w-full">
             <div className="h-full bg-indigo-600 transition-all duration-500 ease-out" style={{ width: `${(step / totalSteps) * 100}%` }}></div>
          </div>
       </header>

       <div className="max-w-xl mx-auto px-4 py-8">
          
          <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/50 p-6 md:p-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
             
             {/* Step Content */}
             {step === 1 && (
                <div className="space-y-6">
                   <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                         <ScanFace size={32} />
                      </div>
                      <h2 className="text-2xl font-black text-slate-900">احراز هویت</h2>
                      <p className="text-slate-500 mt-2">برای اعتبارسنجی هوشمند، اطلاعات هویتی خود را وارد کنید.</p>
                   </div>
                   
                   <div className="space-y-4">
                      <div>
                         <label className="block text-sm font-bold text-slate-700 mb-2">کد ملی</label>
                         <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 font-mono text-center text-lg outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all" placeholder="----------" />
                      </div>
                      <div>
                         <label className="block text-sm font-bold text-slate-700 mb-2">تاریخ تولد</label>
                         <div className="grid grid-cols-3 gap-2">
                            <input type="text" placeholder="روز" className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center outline-none focus:border-indigo-500" />
                            <input type="text" placeholder="ماه" className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center outline-none focus:border-indigo-500" />
                            <input type="text" placeholder="سال" className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center outline-none focus:border-indigo-500" />
                         </div>
                      </div>
                   </div>
                </div>
             )}

             {step === 2 && (
                <div className="space-y-6">
                   <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                         <Camera size={32} />
                      </div>
                      <h2 className="text-2xl font-black text-slate-900">ویدیو سلفی</h2>
                      <p className="text-slate-500 mt-2">یک ویدیو ۵ ثانیه‌ای از خود ضبط کنید و جمله زیر را بخوانید.</p>
                   </div>

                   <div className="bg-slate-100 rounded-xl p-4 text-center font-bold text-slate-700 mb-4 border border-dashed border-slate-300">
                      "من علی رضایی هستم، درخواست اعتبار سارانو را دارم."
                   </div>

                   <div className="aspect-video bg-slate-900 rounded-2xl flex flex-col items-center justify-center text-slate-400 relative overflow-hidden group cursor-pointer">
                      <Camera size={48} className="mb-2 group-hover:scale-110 transition-transform" />
                      <span className="text-sm">لمس برای ضبط</span>
                   </div>
                </div>
             )}

             {step === 3 && (
                <div className="space-y-6">
                   <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                         <CreditCard size={32} />
                      </div>
                      <h2 className="text-2xl font-black text-slate-900">ضمانت (چک/سفته)</h2>
                      <p className="text-slate-500 mt-2">تصویر چک صیادی یا فایل PDF سفته الکترونیک خود را بارگذاری کنید.</p>
                   </div>

                   <div className="border-2 border-dashed border-indigo-200 bg-indigo-50/30 rounded-2xl p-8 flex flex-col items-center justify-center text-indigo-400 hover:bg-indigo-50 transition-colors cursor-pointer">
                      <UploadCloud size={48} className="mb-4" />
                      <span className="font-bold text-indigo-700">آپلود تصویر چک</span>
                      <span className="text-xs mt-2 text-indigo-400">JPG, PNG, PDF (Max 5MB)</span>
                   </div>
                   
                   <div className="flex items-center gap-3 bg-amber-50 p-4 rounded-xl text-amber-700 text-sm border border-amber-100">
                      <FileText size={18} />
                      <span>راهنمای ثبت چک صیادی در سامانه پیچک</span>
                   </div>
                </div>
             )}

             {step === 4 && (
                <div className="text-center space-y-6 py-8">
                   <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-in zoom-in duration-500">
                      <CheckCircle2 size={48} />
                   </div>
                   <h2 className="text-3xl font-black text-slate-900">درخواست ثبت شد!</h2>
                   <p className="text-slate-500 text-lg leading-relaxed">
                      اطلاعات شما با موفقیت دریافت شد. نتیجه اعتبارسنجی تا <strong className="text-slate-900">۲ ساعت دیگر</strong> از طریق پیامک به شما اطلاع داده می‌شود.
                   </p>
                   <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 mt-6">
                      <div className="flex justify-between text-sm mb-2">
                         <span className="text-slate-500">کد پیگیری:</span>
                         <span className="font-mono font-bold">SRN-992-104</span>
                      </div>
                   </div>
                </div>
             )}

             {/* Footer Actions */}
             <div className="mt-10 pt-6 border-t border-slate-100 flex gap-4">
                {step < 4 ? (
                   <>
                     {step > 1 && (
                        <button onClick={prevStep} className="px-6 py-3 rounded-xl font-bold text-slate-500 hover:bg-slate-50 transition">
                           قبلی
                        </button>
                     )}
                     <button onClick={nextStep} className="flex-grow bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-0.5 flex items-center justify-center gap-2">
                        {step === 3 ? 'ثبت نهایی' : 'مرحله بعد'} <ArrowLeft size={18} />
                     </button>
                   </>
                ) : (
                   <Link to="/account" className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition flex items-center justify-center">
                      ورود به داشبورد
                   </Link>
                )}
             </div>

          </div>
       </div>
    </div>
  );
};