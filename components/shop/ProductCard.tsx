import React from 'react';
import { Link } from 'react-router-dom';
import { calculateMonthlyPayment, formatCurrency } from '../../config/loan';
import { Star, Zap, ShoppingCart, ArrowLeft } from 'lucide-react';
import { Product } from '../../data/mock';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const monthlyPrice = calculateMonthlyPayment(product.price, 12);

  return (
    <div className="group relative bg-white rounded-3xl p-4 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/60 border border-slate-100 hover:border-transparent h-full flex flex-col">
      
      {/* Image Container */}
      <div className="relative bg-slate-50 rounded-2xl aspect-square overflow-hidden mb-4 group-hover:bg-slate-100 transition-colors">
        {/* Wishlist/Quick Action Overlay */}
        <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
           <button className="p-2 bg-white rounded-full shadow-md text-slate-400 hover:text-rose-500 transition-colors">
             <ShoppingCart size={18} />
           </button>
        </div>

        {product.id === 'p1' && (
          <span className="absolute top-3 left-3 z-20 bg-slate-900 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
            PRO
          </span>
        )}

        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain mix-blend-multiply p-6 group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
           <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{product.category}</div>
           <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
             <Star size={10} fill="currentColor" /> {product.rating}
           </div>
        </div>

        <Link to={`/product/${product.id}`} className="block">
          <h3 className="text-slate-900 font-bold text-sm leading-relaxed mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2 min-h-[2.5rem]">
            {product.title}
          </h3>
        </Link>

        {/* Price Tag V3 */}
        <div className="mt-auto pt-3 border-t border-slate-50">
           <div className="flex justify-between items-end">
             <div>
               <div className="text-[10px] text-slate-400 line-through mb-0.5">{formatCurrency(product.price)}</div>
               <div className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md inline-block">
                  قسطی: {formatCurrency(monthlyPrice)}
               </div>
             </div>
             <Link to={`/product/${product.id}`} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <ArrowLeft size={14} />
             </Link>
           </div>
        </div>
      </div>
      
    </div>
  );
};