import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ЛОК VERA — инвестиции в апартаменты в Сочи | Курорт нового поколения",
  description: "Апартаменты в ЛОК VERA в Сочи. Инвестиционный формат, 214-ФЗ, эскроу. Медицина, wellness, туризм. Получите презентацию проекта.",
  openGraph: {
    title: "ЛОК VERA — Курорт будущего в Сочи",
    description: "Инвестиции в здоровье. Время работать на вас.",
    locale: "ru_RU",
    type: "website",
    url: "https://vera-apartments.ru",
    siteName: "ЛОК VERA",
    images: [
      {
        url: "https://vera-apartments.ru/images/facade-day.jpg",
        width: 1200,
        height: 630,
        alt: "ЛОК VERA Facade",
      },
    ],
  },
  alternates: {
    canonical: "https://vera-apartments.ru",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "ЛОК VERA",
  "image": "https://vera-apartments.ru/images/facade-day.jpg",
  "description": "Курортный комплекс нового поколения в Сочи. Инвестиции в недвижимость и здоровье.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Уч-Дере",
    "addressLocality": "Сочи",
    "addressRegion": "Краснодарский край",
    "addressCountry": "RU"
  },
  "telephone": "+78005505120",
  "url": "https://vera-apartments.ru",
  "priceRange": "$$$"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <meta name="yandex-verification" content="36b1721a1bd6562e" />
        <meta name="google-site-verification" content="9jV0K2Kdr7QBGuHqab7bEHH67GDAbBMR9kVk6HXe5HA" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{__html: `
          :root {
            --font-inter: 'Montserrat', sans-serif;
            --font-cormorant: 'Playfair Display', serif;
          }
        `}} />
      </head>
      <body
        className={`bg-background text-foreground font-sans antialiased selection:bg-brand-gold selection:text-background overflow-x-hidden`}
      >
        {/* Yandex.Metrika counter */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=106872891', 'ym');

              ym(106872891, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
            `,
          }}
        />
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/106872891" style={{ position: "absolute", left: "-9999px" }} alt="" />
          </div>
        </noscript>
        {/* /Yandex.Metrika counter */}
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
