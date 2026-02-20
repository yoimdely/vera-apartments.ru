"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Sun } from "lucide-react";

export function Location() {
  return (
    <section id="location" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Unified Atmosphere */}
      <div className="absolute inset-0 bg-atmosphere opacity-90 pointer-events-none"></div>
      <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none"></div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">
              Локация: <br />
              <span className="text-brand-gold-light">Уч-Дере, Сочи</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start p-4 rounded-xl bg-white/5 border border-white/5 hover:border-brand-gold/30 transition-colors">
                <div className="mt-1 text-brand-gold">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg text-white font-serif mb-1">Приватность</h4>
                  <p className="text-gray-400 font-light text-sm">
                    Экологически чистый район, вдали от городской суеты.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 rounded-xl bg-white/5 border border-white/5 hover:border-brand-gold/30 transition-colors">
                <div className="mt-1 text-brand-gold">
                  <Navigation className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg text-white font-serif mb-1">Логистика</h4>
                  <p className="text-gray-400 font-light text-sm">
                    30 мин до центра Сочи • 45 мин до аэропорта.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 rounded-xl bg-white/5 border border-white/5 hover:border-brand-gold/30 transition-colors">
                <div className="mt-1 text-brand-gold">
                  <Sun className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg text-white font-serif mb-1">Микроклимат</h4>
                  <p className="text-gray-400 font-light text-sm">
                    Уникальное сочетание морского воздуха и фитонцидов.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 h-[500px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative bg-transparent"
          >
             <iframe 
               src="https://yandex.ru/map-widget/v1/?ll=39.637255%2C43.659972&z=15&pt=39.637255,43.659972,pm2dgl" 
               width="100%" 
               height="100%" 
               allowFullScreen={true} 
               style={{ border: 0 }}
               title="Yandex Map"
             ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
