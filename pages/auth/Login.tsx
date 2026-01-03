import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Smartphone, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export const Login = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(120);

  useEffect(() => {
    let interval: any;
    if (step === 'otp' && timer > 0) {
      interval = setInterval(() => setTimer((t) => t - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length >= 10) setStep('otp');
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => navigate('/account'), 800);
  };

  const formatTime = (time: number) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 grid lg:grid-cols-2">
      
      {/* Left: Visual Branding */}
      <div className="hidden lg:flex relative bg-slate-900 items-center justify-center overflow-hidden p-12 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-700 to-slate-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-rose-500 rounded-full blur-[100px] opacity-40 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500 rounded-full blur-[100px] opacity-40 animate-float-delayed"></div>

        <div className="relative z-10 max-w-lg space-y-8">
           <div className="w-16 h-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center mb-8">
              <span className="text-3xl font-black">س</span>
           </div>
           <h1 className="text-5xl font-black leading-tight">
             ورود به دنیای <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">خرید اعتباری</span>
           </h1>
           <p className="text-lg text-slate-300 leading-relaxed">
             با سارانو، الان بخر و هزینه رو بعدا پرداخت کن. بدون ضامن، بدون چک کارمندی، تمام آنلاین.
           </p>
           
           <div className="grid grid-cols-2 gap-4 pt-8">
              {[
                { label: 'احراز هویت سریع', icon: Sparkles },
                { label: 'امنیت بانکی', icon: ShieldCheck }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
                   <item.icon className="text-indigo-300" />
                   <span className="font-bold text-sm">{item.label}</span>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* Right: Login Form */}
      <div className="flex items-center justify-center p-6 sm:p-12 relative">
         <Link to="/" className="absolute top-8 right-8 flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-bold text-sm transition-colors">
            <ArrowLeft size={18} /> بازگشت به خانه
         </Link>

         <div className="w-full max-w-md space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="text-center lg:text-right">
               <h2 className="text-3xl font-black text-slate-900 mb-2">
                 {step === 'phone' ? 'خوش آمدید! 👋' : 'کد تایید را وارد کنید'}
               </h2>
               <p className="text-slate-500">
                 {step === 'phone' 
                   ? 'برای ورود یا ثبت‌نام، شماره موبایل خود را وارد کنید.' 
                   : `کد ۴ رقمی پیامک شده به ${phone} را وارد کنید.`}
               </p>
            </div>

            {step === 'phone' ? (
              <form onSubmit={handlePhoneSubmit} className="space-y-6">
                 <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">شماره موبایل</label>
                    <div className="relative group">
                       <Smartphone className="absolute right-4 top-3.5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={20} />
                       <input 
                         type="tel" 
                         className="w-full bg-white border border-slate-200 rounded-2xl py-3.5 pr-12 pl-4 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all font-mono text-lg dir-ltr text-right placeholder:text-right"
                         placeholder="0912..."
                         value={phone}
                         onChange={(e) => setPhone(e.target.value)}
                         autoFocus
                       />
                    </div>
                 </div>
                 <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl shadow-xl shadow-indigo-200 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                    دریافت کد تایید <ArrowLeft size={20} />
                 </button>
              </form>
            ) : (
              <form onSubmit={handleOtpSubmit} className="space-y-6">
                 <div className="flex justify-center gap-4 dir-ltr">
                    {otp.map((digit, idx) => (
                      <input
                        key={idx}
                        type="text"
                        maxLength={1}
                        className="w-16 h-16 text-center text-3xl font-black bg-white border border-slate-200 rounded-2xl outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all caret-indigo-600"
                        value={digit}
                        onChange={(e) => {
                           const newOtp = [...otp];
                           newOtp[idx] = e.target.value;
                           setOtp(newOtp);
                           if (e.target.value && idx < 3) {
                             const nextInput = e.target.nextElementSibling as HTMLInputElement;
                             nextInput?.focus();
                           }
                        }}
                        autoFocus={idx === 0}
                      />
                    ))}
                 </div>
                 
                 <div className="flex items-center justify-between text-sm">
                    <button type="button" onClick={() => setStep('phone')} className="text-slate-500 hover:text-slate-800 font-bold">
                       ویرایش شماره
                    </button>
                    <span className="text-slate-400 font-mono">{formatTime(timer)}</span>
                 </div>

                 <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl shadow-xl shadow-indigo-200 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                    ورود به حساب <CheckCircle2 size={20} />
                 </button>
              </form>
            )}

            <div className="text-center">
               <p className="text-xs text-slate-400 leading-relaxed">
                  ورود شما به معنای پذیرش <a href="#" className="text-slate-600 hover:underline">قوانین و مقررات</a> و <a href="#" className="text-slate-600 hover:underline">حریم خصوصی</a> سارانو است.
               </p>
            </div>
         </div>
      </div>
    </div>
  );
};