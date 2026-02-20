"use client";

import { motion } from "framer-motion";
import { TrendingUp, PieChart, ShieldCheck } from "lucide-react";

export function Investment() {
  return (
    <section id="investment" className="relative py-32 bg-brand-dark overflow-hidden">
      {/* Unified Atmosphere */}
      <div className="absolute inset-0 bg-atmosphere opacity-90 pointer-events-none"></div>
      <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none"></div>
      
      {/* Section Specific Glow (Gold for Investment) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-display-2 text-white mb-8">
              Недвижимость, которая <br />
              <span className="text-brand-gold">становится активом</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="mt-1 bg-brand-charcoal-light p-3 rounded-full h-fit border border-brand-gold/20">
                  <TrendingUp className="text-brand-gold w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl text-white font-serif mb-2">Тренд Wellness-туризма</h3>
                  <p className="text-gray-400 font-light">
                    Спрос на оздоровительный отдых растет быстрее традиционного туризма. Люди инвестируют в свое здоровье.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 bg-brand-charcoal-light p-3 rounded-full h-fit border border-brand-gold/20">
                  <PieChart className="text-brand-gold w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl text-white font-serif mb-2">Экономика проекта</h3>
                  <p className="text-gray-400 font-light">
                    Прозрачная модель управления. Вы получаете доход от сдачи апартаментов через профессионального оператора.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 bg-brand-charcoal-light p-3 rounded-full h-fit border border-brand-gold/20">
                  <ShieldCheck className="text-brand-gold w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl text-white font-serif mb-2">Надежность (214-ФЗ)</h3>
                  <p className="text-gray-400 font-light">
                    Сделки проходят с использованием эскроу-счетов. Полная юридическая защита ваших инвестиций.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Investment Visual Model */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-brand-surface/30 backdrop-blur-md border border-white/5 shadow-xl p-8 md:p-12 rounded-3xl border-brand-gold/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/20 blur-[60px] rounded-full"></div>
              
              <h3 className="text-2xl font-serif text-white mb-8 text-center">Сценарий доходности</h3>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                  <span className="text-gray-300">Покупка апартамента</span>
                  <span className="text-brand-gold">Собственность</span>
                </div>
                <div className="mx-auto h-8 w-[1px] bg-gradient-to-b from-brand-gold/50 to-brand-gold/50"></div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                  <span className="text-gray-300">Передача в управление</span>
                  <span className="text-brand-gold">Договор с оператором</span>
                </div>
                <div className="mx-auto h-8 w-[1px] bg-gradient-to-b from-brand-gold/50 to-brand-gold/50"></div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-brand-gold/10 to-brand-gold/5 rounded-xl border border-brand-gold/30">
                  <span className="text-white font-medium">Получение дохода</span>
                  <span className="text-brand-gold font-bold">Пассивный поток</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
