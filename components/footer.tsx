import { Instagram, Send, Phone, MapPin as MapPinIcon, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark py-20 border-t border-white/5 relative overflow-hidden">
      {/* Unified Atmosphere - Darker for footer */}
      <div className="absolute inset-0 bg-black/80 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-brand-gold/5 to-transparent pointer-events-none"></div>

      <div className="container-wide relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4 space-y-6">
            <h3 className="font-serif text-3xl text-white">ЛОК VERA</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Инвестиционный проект премиум-класса в Сочи. Сочетание доходной недвижимости и инфраструктуры долголетия.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-gold transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-gold transition-all">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="text-white font-medium mb-6 uppercase text-xs tracking-widest text-brand-gold">Навигация</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Главная</a></li>
              <li><a href="#concept" className="hover:text-white transition-colors">Концепция</a></li>
              <li><a href="#investment" className="hover:text-white transition-colors">Инвестиции</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Локация</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-medium mb-6 uppercase text-xs tracking-widest text-brand-gold">Контакты</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex gap-3 items-start">
                <MapPinIcon className="w-5 h-5 text-brand-gold shrink-0" />
                <span>г. Сочи, Лазаревский район, Уч-Дере</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <a href="tel:88005505120" className="hover:text-white transition-colors">8 (800) 550-51-20</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <a href="mailto:info@vera-apartments.ru" className="hover:text-white transition-colors">info@vera-apartments.ru</a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
             <div className="bg-brand-charcoal-light p-6 rounded-2xl border border-white/5">
                <h4 className="text-white font-serif text-lg mb-2">Презентация проекта</h4>
                <p className="text-xs text-gray-500 mb-4">Скачайте полную презентацию с планировками и ценами.</p>
                <a href="#presentation" className="block w-full py-3 bg-white/5 hover:bg-brand-gold text-center rounded-lg text-sm text-white hover:text-brand-charcoal transition-all border border-white/10 hover:border-brand-gold">
                  Скачать PDF
                </a>
             </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-600">
          <p>© {currentYear} ЛОК VERA. Все права защищены.</p>
          <div className="max-w-2xl text-center md:text-right space-y-2 opacity-60 hover:opacity-100 transition-opacity">
            <p>
              Любая информация, представленная на данном сайте, носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями статьи 437 ГК РФ.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

