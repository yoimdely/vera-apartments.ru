"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col lg:flex-row bg-brand-charcoal overflow-hidden">
      {/* Left Content Area */}
      <div className="w-full lg:w-[55%] relative z-20 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-20 lg:py-0">
        
        {/* Subtle Background Mesh for Text Area */}
        <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none"></div>
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-brand-gold/20 bg-brand-gold/5">
            <span className="flex h-2 w-2 rounded-full bg-brand-gold animate-pulse"></span>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-gold">
              Старт продаж 2026
            </span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl xl:text-8xl leading-[0.95] text-white tracking-tight mb-8"
          >
            ЛОК <span className="text-brand-gold italic pr-2">VERA</span>
            <br />
            <span className="text-white/40">Симфония</span>
            <br />
            Вашей Жизни
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 font-light mb-12 max-w-md border-l border-white/10 pl-6 leading-relaxed"
          >
            Приватная резиденция премиум-класса на первой береговой линии Сочи.
            <span className="block mt-2 text-white">Идеальный баланс инвестиций и lifestyle.</span>
          </motion.p>

          {/* Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Link
              href="#presentation"
              className="group relative px-8 py-4 bg-brand-gold text-brand-charcoal font-bold rounded-full overflow-hidden transition-all duration-300 hover:bg-brand-gold-light hover:shadow-2xl hover:shadow-brand-gold/20"
            >
              <span className="relative z-10">Скачать презентацию</span>
            </Link>
            
            <Link
              href="#investment"
              className="group px-8 py-4 border border-white/10 text-white rounded-full hover:bg-white/5 transition-all flex items-center justify-center gap-3 backdrop-blur-sm"
            >
              <span>О проекте</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform text-brand-gold" />
            </Link>
          </motion.div>

          {/* Stats / Trust Markers */}
          <div className="mt-16 flex items-center gap-12 border-t border-white/5 pt-8">
             <div>
                <p className="text-3xl font-serif text-white">214</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Федеральный закон</p>
             </div>
             <div>
                <p className="text-3xl font-serif text-white">15%</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Рост цены в год</p>
             </div>
          </div>
        </motion.div>
      </div>

      {/* Right Image Area */}
      <div className="w-full lg:w-[45%] relative h-[50vh] lg:h-auto overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/facade-day.jpg"
            alt="ЛОК VERA Architecture"
            fill
            priority
            className="object-cover"
          />
          
          {/* Cinematic Gradient Edge - Only on the left side to blend with text area */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-charcoal to-transparent z-10 hidden lg:block"></div>
          {/* Top gradient for mobile */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-brand-charcoal to-transparent z-10 lg:hidden"></div>
          
          {/* Decorative Circle Button */}
          <div className="absolute bottom-10 left-10 z-20 hidden lg:flex items-center justify-center w-32 h-32 rounded-full border border-white/20 backdrop-blur-md bg-white/5 animate-spin-slow">
             <div className="w-full h-full relative">
                <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                   <path id="textPath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                   <text className="text-[10px] uppercase font-medium tracking-widest fill-white">
                      <textPath href="#textPath" startOffset="0%">
                         Sea View • Private Beach • Luxury •
                      </textPath>
                   </text>
                </svg>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
