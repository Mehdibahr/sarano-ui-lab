import React from 'react';
import { NAVIGATION } from '../config/navigation';
import { Link } from 'react-router-dom';

export const Shop = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <h3 className="font-bold text-lg mb-4">Categories</h3>
          <div className="space-y-2">
            {NAVIGATION.shopCategories.map((cat) => (
              <div key={cat.id} className="p-3 bg-white rounded-lg border border-slate-100">
                <div className="font-semibold">{cat.label}</div>
                <div className="mt-2 flex flex-col gap-1 pl-2 border-r-2 border-slate-100 pr-2">
                  {cat.subCategories?.map(sub => (
                    <Link key={sub.id} to={sub.href} className="text-sm text-slate-500 hover:text-indigo-600">
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-grow">
          <div className="bg-indigo-600 text-white p-8 rounded-2xl mb-8">
            <h1 className="text-3xl font-bold mb-2">Summer Tech Sale</h1>
            <p className="opacity-90">Up to 24 months installments on Laptops.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-100 p-4 hover:shadow-lg transition">
                <div className="h-48 bg-slate-100 rounded-lg mb-4 flex items-center justify-center text-slate-400">
                  Product Image
                </div>
                <h3 className="font-bold text-slate-900 mb-1">MacBook Pro M3</h3>
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-emerald-600 font-bold text-lg">2,500,000 / mo</span>
                  <span className="text-slate-400 text-xs line-through mb-1">65,000,000</span>
                </div>
                <button className="w-full py-2 bg-indigo-50 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-100 transition">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};