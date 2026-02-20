"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import Image from "next/image";

const faqs = [
  {
    question: "Что такое ЛОК VERA?",
    answer: "Лечебно-оздоровительный комплекс VERA — это современный проект в Сочи (Уч-Дере), объединяющий апартаменты премиум-класса с медицинской и wellness-инфраструктурой."
  },
  {
    question: "Какие условия инвестирования?",
    answer: "Проект реализуется в соответствии с 214-ФЗ с использованием эскроу-счетов. Доступны различные варианты приобретения. Для получения детального расчета доходности оставьте заявку на презентацию."
  },
  {
    question: "Кто управляет комплексом?",
    answer: "Управление комплексом и сдача апартаментов в аренду будет осуществляться профессиональным гостиничным оператором, обеспечивающим высокий уровень сервиса и загрузку."
  },
  {
    question: "Есть ли рассрочка?",
    answer: "Да, мы предлагаем гибкие условия рассрочки. Подробности можно узнать в отделе продаж."
  },
  {
    question: "Какая инфраструктура доступна собственникам?",
    answer: "Собственники имеют доступ ко всей инфраструктуре курорта: медицинскому центру, SPA, ресторанам, парковой территории и пляжу."
  }
];

export function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Unified Atmosphere */}
      <div className="absolute inset-0 bg-atmosphere opacity-80 pointer-events-none"></div>
      
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5">
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="sticky top-24"
             >
               <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                  Частые <br/> <span className="text-brand-gold">вопросы</span>
               </h2>
               <p className="text-gray-400 font-light mb-8">
                 Всё, что нужно знать о проекте, инвестициях и инфраструктуре.
               </p>

               <div className="relative h-[300px] rounded-2xl overflow-hidden mb-8 border border-white/5">
                  <Image 
                    src="/images/investment-wave.svg" 
                    alt="FAQ Visual"
                    fill
                    className="object-cover opacity-60"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-brand-charcoal/80 backdrop-blur-md p-4 rounded-full border border-brand-gold/20">
                      <HelpCircle className="w-8 h-8 text-brand-gold" />
                    </div>
                  </div>
               </div>
             </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`border rounded-2xl transition-all duration-300 ${activeIndex === index ? 'border-brand-gold/30 bg-white/5' : 'border-white/5 bg-transparent hover:border-white/10 hover:scale-[1.02]'}`}
                >
                  <button
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left"
                  >
                    <span className={`text-xl font-serif transition-colors ${activeIndex === index ? 'text-brand-gold' : 'text-white'}`}>
                      {faq.question}
                    </span>
                    <span className={`p-2 rounded-full border transition-all duration-300 ${activeIndex === index ? 'border-brand-gold text-brand-gold bg-brand-gold/10' : 'border-white/10 text-gray-500 bg-white/5'}`}>
                      {activeIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8">
                          <p className="text-gray-400 font-light leading-relaxed border-t border-white/5 pt-4">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
