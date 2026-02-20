"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";
import { sendLead } from "@/lib/sendLead";

type FormData = {
  name: string;
  phone: string;
};

export function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await sendLead({
        ...data,
        contactMethod: "Phone (Footer Form)",
        page_url: window.location.href,
        utm_source: new URLSearchParams(window.location.search).get("utm_source") || "",
      });
      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error("Error sending lead", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-brand-dark border-t border-white/5 relative overflow-hidden">
      {/* Unified Atmosphere */}
      <div className="absolute inset-0 bg-atmosphere opacity-90 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

      <div className="container-wide relative z-10">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-brand-charcoal-light to-[#08080a] backdrop-blur-sm p-8 md:p-16 shadow-2xl">
           <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
             <div>
                <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">
                  Остались <span className="text-brand-gold italic">вопросы?</span>
                </h2>
                <p className="text-gray-400 text-lg mb-8 max-w-md font-light">
                  Мы ценим ваше время. Оставьте номер, и эксперт по проекту свяжется с вами, чтобы обсудить детали инвестирования.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                   <div className="flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                     <span className="text-sm text-gray-400 uppercase tracking-wider">Сейчас работаем</span>
                   </div>
                   <a href="tel:88005505120" className="text-2xl font-serif text-white hover:text-brand-gold transition-colors">
                     8 (800) 550-51-20
                   </a>
                </div>
             </div>

             <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
               {isSuccess ? (
                 <div className="text-center py-8">
                   <div className="w-16 h-16 bg-brand-gold/20 text-brand-gold rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-gold/50">
                     <Send className="w-8 h-8" />
                   </div>
                   <h3 className="text-xl text-white font-serif mb-2">Запрос отправлен</h3>
                   <p className="text-gray-400">Ожидайте звонка в ближайшее время.</p>
                 </div>
               ) : (
                 <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                   <div>
                     <input
                       {...register("name", { required: true })}
                       className="w-full bg-brand-charcoal border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-brand-gold/50 transition-colors placeholder:text-gray-600"
                       placeholder="Ваше имя"
                     />
                   </div>
                   <div>
                     <input
                       {...register("phone", { required: true })}
                       className="w-full bg-brand-charcoal border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-brand-gold/50 transition-colors placeholder:text-gray-600"
                       placeholder="Ваш телефон"
                     />
                   </div>
                   <button
                     type="submit"
                     disabled={isSubmitting}
                     className="w-full bg-brand-gold hover:bg-white text-brand-charcoal font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                   >
                     {isSubmitting ? <Loader2 className="animate-spin" /> : "Заказать звонок"}
                   </button>
                   <p className="text-[10px] text-gray-600 text-center">
                     Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
                   </p>
                 </form>
               )}
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
