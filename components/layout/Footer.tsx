import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-auto font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-2xl mb-4">سارانو</h3>
            <p className="text-sm leading-relaxed">
              هوشمندترین راه برای خرید اقساطی آنلاین. بدون کارمزد پنهان، با تایید اعتبار آنی.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">پشتیبانی</h4>
            <ul className="space-y-2 text-sm">
              <li>سوالات متداول</li>
              <li>تماس با ما</li>
              <li>قوانین و مقررات</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">خدمات</h4>
            <ul className="space-y-2 text-sm">
              <li>درخواست اعتبار</li>
              <li>فروش سازمانی</li>
              <li>پنل فروشندگان</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">تماس</h4>
            <p className="text-sm">تهران، خیابان آزادی، ناحیه نوآوری شریف</p>
            <p className="text-sm mt-2 text-left dir-ltr">021-88889999</p>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          © ۱۴۰۳ تمامی حقوق برای سارانو محفوظ است.
        </div>
      </div>
    </footer>
  );
};