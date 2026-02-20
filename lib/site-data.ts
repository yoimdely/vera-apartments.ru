export type GalleryItem = {
  src: string;
  alt: string;
  objectPosition?: string;
};

export type ConceptPoint = {
  title: string;
  text: string;
};

export type InvestmentStep = {
  title: string;
  text: string;
};

export type MedicineDirection = {
  title: string;
  text: string;
  image: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export const heroMedia: GalleryItem = {
  src: "/images/night-facade.jpg",
  alt: "ЛОК VERA: вечерний вид курортного комплекса",
  objectPosition: "center center",
};

export const conceptVisuals: GalleryItem[] = [
  {
    src: "/images/facade-day.jpg",
    alt: "ЛОК VERA: архитектура проекта днем",
    objectPosition: "center center",
  },
  {
    src: "/images/resort-pool.jpg",
    alt: "ЛОК VERA: зона приватного отдыха у бассейна",
    objectPosition: "center center",
  },
];

export const conceptPoints: ConceptPoint[] = [
  {
    title: "Private resort бренд",
    text: "ЛОК VERA создается как закрытая курортная среда: архитектура, сервис и wellness-инфраструктура в единой эстетике.",
  },
  {
    title: "Фокус на образе жизни",
    text: "Сценарий сочетает личное пользование апартаментами и формат участия в сервисной модели комплекса.",
  },
  {
    title: "Сочи, Уч-Дере",
    text: "Локация в Лазаревском районе дает баланс приватности, природы и доступа к ключевой курортной инфраструктуре.",
  },
];

export const investmentSteps: InvestmentStep[] = [
  {
    title: "Выбор апартамента",
    text: "Формирование персонального сценария владения в формате курортного актива.",
  },
  {
    title: "Сервисный контур",
    text: "Операционные процессы выстраиваются на базе единого стандарта управления проектом.",
  },
  {
    title: "Гостевой поток",
    text: "Потенциальная загрузка поддерживается спросом на курортный и wellness-формат отдыха в Сочи.",
  },
  {
    title: "Инвестиционный потенциал",
    text: "Доход формируется из операционной деятельности профессионального управляющего.",
  },
];

export const medicineDirections: MedicineDirection[] = [
  {
    title: "Longevity",
    text: "Программы активного долголетия, диагностики и сопровождения образа жизни.",
    image: "/images/stock-spa-2.jpg",
  },
  {
    title: "Anti-age",
    text: "Современные протоколы поддержания энергии и качества жизни в курортной среде.",
    image: "/images/resort-pool.jpg",
  },
  {
    title: "Превентивная медицина",
    text: "Профилактический подход и персонализированные маршруты восстановления.",
    image: "/images/facade-day.jpg",
  },
  {
    title: "Реабилитация",
    text: "Восстановительные форматы для частных и корпоративных резидентов.",
    image: "/images/stock-sea-view.jpg",
  },
];

export const architectureGallery: GalleryItem[] = [
  {
    src: "/images/facade-day.jpg",
    alt: "ЛОК VERA: фасад комплекса и террасы",
    objectPosition: "center center",
  },
  {
    src: "/images/night-facade.jpg",
    alt: "ЛОК VERA: вечерняя архитектурная подсветка",
    objectPosition: "center center",
  },
  {
    src: "/images/resort-pool.jpg",
    alt: "ЛОК VERA: курортная зона с бассейном",
    objectPosition: "center center",
  },
  {
    src: "/images/stock-mountain-sea.jpg",
    alt: "Ландшафт Сочи: море и горный рельеф",
    objectPosition: "center center",
  },
  {
    src: "/images/stock-sea-view.jpg",
    alt: "Панорамный морской вид в окружении субтропической природы",
    objectPosition: "center center",
  },
];

export const partnerBanks = [
  "Сбер",
  "ВТБ",
  "Альфа-Банк",
  "Газпромбанк",
  "ДОМ.РФ",
  "Россельхозбанк",
] as const;

export const locationFacts = [
  "Лазаревский район, Уч-Дере, Сочи",
  "Море, субтропический климат и природный рельеф в одной локации",
  "Удобный доступ к транспортной и курортной инфраструктуре города",
] as const;

export const faqItems: FAQItem[] = [
  {
    question: "Что такое ЛОК VERA?",
    answer:
      "ЛОК VERA — курортный комплекс нового поколения в Сочи с апартаментами, wellness-средой и медицинской концепцией.",
  },
  {
    question: "Где расположен проект?",
    answer: "Проект расположен в Уч-Дере, Лазаревский район, Сочи.",
  },
  {
    question: "Какой формат владения предусмотрен?",
    answer:
      "Покупатель рассматривает апартамент как курортный актив: для личного пребывания и участия в сервисной модели комплекса.",
  },
  {
    question: "Какие направления включает медицинская концепция?",
    answer:
      "В составе концепции: longevity, anti-age, превентивная медицина и реабилитационные программы.",
  },
  {
    question: "Есть ли в проекте wellness-инфраструктура?",
    answer:
      "Да, проект формируется как среда восстановления: от spa и рекреации до программ поддержки образа жизни.",
  },
  {
    question: "Кому подойдет проект?",
    answer:
      "Частным покупателям, семьям и инвесторам, которые рассматривают курортную недвижимость в Сочи как долгосрочный актив.",
  },
  {
    question: "Можно ли получить презентацию и условия?",
    answer:
      "Да. Оставьте заявку на сайте, и команда проекта направит презентацию и свяжется удобным способом.",
  },
  {
    question: "Есть ли юридическое сопровождение сделки?",
    answer:
      "Да, покупателю предоставляются документы проекта и персональное сопровождение на каждом этапе сделки.",
  },
  {
    question: "Работаете ли вы с банками-партнерами?",
    answer:
      "Да, предусмотрено взаимодействие с банками-партнерами для подбора подходящего финансового сценария.",
  },
  {
    question: "Как быстро можно записаться на консультацию?",
    answer:
      "После заявки менеджер связывается в ближайшее время и согласовывает удобный формат консультации.",
  },
];

