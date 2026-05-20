import React from 'react';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <Link 
      href={`/products/${product.id}`}
      className="group relative aspect-[4/5] overflow-hidden bg-[#111] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-2xl hover:-translate-y-4 hover:shadow-[0_50px_100px_rgba(0,0,0,0.2)] rounded-[1.5rem]"
    >
      {/* Top Left Tab for Category */}
      <div 
        className="absolute top-0 left-0 bg-light-gold text-white text-[0.7rem] px-8 py-4 rounded-br-[1rem] z-30 uppercase"
      >
        {product.title.split(' ')[0]}
      </div>

      <img 
        src={product.img} 
        alt={product.title} 
        className="absolute inset-0 w-full h-full object-cover opacity-[0.85] transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 opacity-90"></div>
      
      <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 z-20 translate-y-8 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0">
        <h3 className="font-semibold text-[2.5rem] text-white mb-6">
          {product.title}
        </h3>
        <p className="text-white/60 text-[0.9rem] mb-8 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          {product.description}
        </p>
        <div className="text-[0.8rem] text-white uppercase flex items-center gap-6 group/link">
          Explore Collection
          <span className="block w-10 h-[1px] bg-light-gold transition-all duration-500 group-hover/link:w-20 group-hover/link:bg-[var(--background)]"></span>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
          <img 
            src="https://zackle.in/wp-content/uploads/2024/02/tostem-logo.png" 
            alt="Tostem" 
            className="h-[14px] brightness-0 invert opacity-60"
          />
          <span className="text-white/30 text-[0.7rem]">PREMIUM RANGE</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
