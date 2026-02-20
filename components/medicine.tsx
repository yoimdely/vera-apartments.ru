"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const programs = [
  { 
    title: "Longevity", 
    desc: "Программы активного долголетия и клеточного обновления.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    title: "Anti-age", 
    desc: "Эстетическая медицина и технологии омоложения.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    title: "Превентивная медицина", 
    desc: "Ранняя диагностика и предотвращение заболеваний.",
    image: "https://images.unsplash.com/photo-1581056771107-2425f63359c1?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    title: "Реабилитация", 
    desc: "Восстановление ресурсов организма в климате субтропиков.",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop"
  },
];

export function Medicine() {
  return (
    <section className="py-24 bg-brand-dark overflow-hidden relative">
      {/* Unified Atmosphere */}
      <div className="absolute inset-0 bg-atmosphere opacity-80 pointer-events-none"></div>
      <div className="absolute inset-0 bg-mesh opacity-20 pointer-events-none"></div>
      
      {/* Section Specific Glow (Blue/Health) */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-ocean/20 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-gold text-sm tracking-[0.2em] uppercase mb-4 block">Стратегический фундамент</span>
          <h2 className="font-serif text-display-2 text-white">
            Медицина & Longevity
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Мы создаем не просто курорт, а инфраструктуру долголетия. Место, где забота о здоровье интегрирована в каждый день жизни.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col md:flex-row rounded-3xl overflow-hidden border border-white/10 hover:border-brand-gold/30 transition-all duration-500 bg-transparent backdrop-blur-sm"
            >
              <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-brand-charcoal/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              
              <div className="p-8 md:w-1/2 flex flex-col justify-center relative">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <div className="w-16 h-16 rounded-full border border-white/50"></div>
                </div>
                
                <h3 className="text-2xl font-serif text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  {item.desc}
                </p>
                

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
