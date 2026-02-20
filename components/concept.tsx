"use client";

import { motion } from "framer-motion";
import { Building2, HeartPulse, Leaf, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Инфраструктура",
    desc: "Премиальные апартаменты, рестораны, SPA и конференц-залы."
  },
  {
    icon: <HeartPulse className="w-8 h-8" />,
    title: "Медицинская концепция",
    desc: "Центр превентивной медицины, чекапы и программы долголетия."
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Премиальный сервис",
    desc: "Консьерж-сервис 24/7, доверительное управление и обслуживание."
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Природа и море",
    desc: "Уникальная локация в Уч-Дере, чистейший воздух и приватный пляж."
  }
];

export function Concept() {
  return (
    <section className="relative py-32 bg-brand-dark z-10 overflow-hidden">
      {/* Unified Atmosphere */}
      <div className="absolute inset-0 bg-atmosphere opacity-80 pointer-events-none"></div>
      <div className="absolute inset-0 bg-mesh opacity-20 pointer-events-none"></div>
      
      {/* Section Specific Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-ocean/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="font-serif text-display-2 bg-clip-text text-transparent bg-gradient-to-r from-brand-gold-dark via-brand-gold-light to-brand-gold mb-6">
            Медицина. Wellness. Туризм.
            <br />
            <span className="text-white">В одном проекте.</span>
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full opacity-50"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group bg-brand-surface/30 backdrop-blur-md border border-white/5 shadow-xl p-8 rounded-2xl hover:bg-brand-charcoal-light/50 transition-colors hover:border-brand-gold/30"
            >
              <div className="mb-6 text-brand-gold group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-serif text-2xl text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
