"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle, ArrowRight, ChevronLeft } from "lucide-react";
import { sendLead } from "@/lib/sendLead";

type QuizData = {
  goal: string;
  budget: string;
  timeline: string;
  name: string;
  phone: string;
  contactMethod: string;
};

const STEPS = [
  {
    id: "goal",
    question: "Какова цель покупки?",
    options: ["Инвестиции и доход", "Для собственного отдыха", "Постоянное проживание", "Микс (отдых + доход)"]
  },
  {
    id: "budget",
    question: "Комфортный бюджет?",
    options: ["15–20 млн ₽", "20–35 млн ₽", "35–50 млн ₽", "Более 50 млн ₽"]
  },
  {
    id: "timeline",
    question: "Когда планируете сделку?",
    options: ["В ближайший месяц", "В течение 3 месяцев", "В течение полугода", "Просто интересуюсь"]
  }
];

export function Cta() {
  const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm<QuizData>();
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Temporary storage for quiz answers
  const [quizAnswers, setQuizAnswers] = useState<Partial<QuizData>>({});

  const handleOptionSelect = (field: keyof QuizData, value: string) => {
    setValue(field, value);
    setQuizAnswers(prev => ({ ...prev, [field]: value }));
    setTimeout(() => {
      setStep(prev => prev + 1);
    }, 300);
  };

  const onSubmit = async (data: QuizData) => {
    setIsSubmitting(true);
    try {
      await sendLead({
        ...data,
        ...quizAnswers,
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

  const progress = ((step + 1) / (STEPS.length + 1)) * 100;

  return (
    <section id="presentation" className="py-32 relative bg-brand-dark overflow-hidden">
      {/* Unified Atmosphere */}
      <div className="absolute inset-0 bg-atmosphere opacity-80 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/10 rounded-full blur-[150px] animate-pulse-slow"></div>

      <div className="container-wide relative z-10 max-w-6xl">
        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-brand-gold/5 flex flex-col md:flex-row min-h-[600px] bg-white/5 backdrop-blur-xl">
          
          {/* Left Side - Info */}
          <div className="w-full md:w-5/12 relative overflow-hidden flex flex-col justify-between p-10 border-r border-white/5">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-50"
              style={{ backgroundImage: 'url(/images/night-facade.jpg)' }}
            ></div>
            <div className="absolute inset-0 bg-brand-charcoal/60 backdrop-blur-[2px]"></div>
            
            <div className="relative z-10">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
                Подберите <span className="text-brand-gold italic">идеальный апартамент</span>
              </h2>
              <p className="text-gray-300 text-sm font-light leading-relaxed">
                Ответьте на 3 вопроса, чтобы получить персональную подборку лотов и расчет инвестиционной доходности.
              </p>
            </div>

            <div className="relative z-10 mt-10">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm">
                   <span className="text-brand-gold font-serif text-xl">PDF</span>
                 </div>
                 <div className="text-sm text-gray-300">
                   <p className="font-medium text-white">Презентация проекта</p>
                   <p className="text-xs text-gray-500">Планировки и цены внутри</p>
                 </div>
              </div>
              <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                  className="h-full bg-brand-gold"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2 text-right">Шаг {Math.min(step + 1, 4)} из 4</p>
            </div>
          </div>

          {/* Right Side - Quiz Form */}
          <div className="w-full md:w-7/12 p-10 flex flex-col justify-center relative bg-transparent">
            {step > 0 && !isSuccess && step < STEPS.length && (
              <button 
                onClick={() => setStep(prev => prev - 1)}
                className="absolute top-6 left-6 text-gray-500 hover:text-white transition-colors flex items-center gap-1 text-sm"
              >
                <ChevronLeft className="w-4 h-4" /> Назад
              </button>
            )}

            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-20 h-20 text-brand-gold mx-auto mb-6" />
                  <h3 className="text-3xl text-white font-serif mb-4">Заявка принята</h3>
                  <p className="text-gray-400 mb-8">Менеджер свяжется с вами в ближайшее время для уточнения деталей.</p>
                  <button 
                    onClick={() => { setIsSuccess(false); setStep(0); reset(); }}
                    className="text-brand-gold hover:text-white transition-colors text-sm uppercase tracking-widest border-b border-brand-gold hover:border-white pb-1"
                  >
                    Начать заново
                  </button>
                </motion.div>
              ) : step < STEPS.length ? (
                <motion.div
                  key={`step-${step}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl text-white font-medium mb-8">
                    {STEPS[step].question}
                  </h3>
                  <div className="space-y-3">
                    {STEPS[step].options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleOptionSelect(STEPS[step].id as keyof QuizData, option)}
                        className="w-full text-left p-4 rounded-xl border border-white/10 hover:border-brand-gold/50 bg-white/5 hover:bg-white/10 transition-all group flex items-center justify-between"
                      >
                        <span className="text-gray-300 group-hover:text-white transition-colors">{option}</span>
                        <ArrowRight className="w-4 h-4 text-transparent group-hover:text-brand-gold transition-colors -translate-x-2 group-hover:translate-x-0" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-2xl text-white font-medium mb-6">
                    Последний шаг
                  </h3>
                  <p className="text-gray-400 mb-8 text-sm">
                    Оставьте контакты, куда отправить презентацию и расчет доходности.
                  </p>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                      <input
                        {...register("name", { required: true })}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-brand-gold/50 transition-colors placeholder:text-gray-500"
                        placeholder="Ваше имя"
                      />
                      {errors.name && <span className="text-red-500 text-xs mt-1">Обязательное поле</span>}
                    </div>

                    <div>
                      <input
                        {...register("phone", { required: true })}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-brand-gold/50 transition-colors placeholder:text-gray-500"
                        placeholder="+7 (999) 000-00-00"
                      />
                      {errors.phone && <span className="text-red-500 text-xs mt-1">Обязательное поле</span>}
                    </div>

                    <div>
                      <div className="grid grid-cols-3 gap-3">
                        {['Телефон', 'WhatsApp', 'Telegram'].map((method) => (
                          <label key={method} className="cursor-pointer">
                            <input
                              type="radio"
                              value={method}
                              {...register("contactMethod", { required: true })}
                              className="peer sr-only"
                            />
                            <div className="text-center py-3 rounded-lg border border-white/10 text-gray-500 peer-checked:bg-brand-gold peer-checked:text-brand-charcoal peer-checked:border-brand-gold transition-all text-xs font-medium uppercase tracking-wider">
                              {method}
                            </div>
                          </label>
                        ))}
                      </div>
                      {errors.contactMethod && <span className="text-red-500 text-xs mt-1">Выберите способ связи</span>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-gold hover:bg-white text-brand-charcoal font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 mt-4"
                    >
                      {isSubmitting ? <Loader2 className="animate-spin" /> : "Получить расчет и презентацию"}
                    </button>
                    
                    <p className="text-[10px] text-gray-600 text-center leading-tight">
                      Нажимая кнопку, вы даете согласие на обработку персональных данных.
                    </p>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
