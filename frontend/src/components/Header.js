import React from 'react';
import { Heart } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-br from-orange-400 via-pink-400 to-rose-500 text-white p-8 shadow-2xl relative overflow-hidden select-none">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-pink-200 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-orange-200 rounded-full animate-bounce delay-500"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex items-center justify-center gap-4 mb-4">
          <Heart className="w-10 h-10 text-pink-200 animate-pulse" />
          <h1 className="text-5xl font-black bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent tracking-tight">
            Leftover Love
          </h1>
          <Heart className="w-10 h-10 text-pink-200 animate-pulse delay-200" />
        </div>
        
        <p className="text-pink-50 text-xl font-medium mb-6 tracking-wide">
          Turn your leftovers into 
          <span className="font-bold text-white mx-2">
            culinary magic
          </span>
          🍲✨
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 text-base text-pink-50 font-medium">
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
            <span className="text-lg">🌍</span>
            <span>Fight food waste</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
            <span className="text-lg">💚</span>
            <span>Save the planet</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
            <span className="text-lg">👨‍🍳</span>
            <span>Cook with love</span>
          </div>
        </div>
        
        {/* Decorative line */}
        <div className="mt-8 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-pink-200 to-transparent rounded-full"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;