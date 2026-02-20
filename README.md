# ЛОК VERA - Website

Премиальный сайт для проекта апартаментов "ЛОК VERA".

## Технологии

- Next.js 16 (App Router)
- TailwindCSS v4
- Framer Motion
- React Hook Form

## Настройка

### 1. Установка зависимостей

```bash
npm install
```

### 2. Запуск в режиме разработки

```bash
npm run dev
```

### 3. Сборка для продакшена

```bash
npm run build
```

## Конфигурация

### Webhook для заявок

1. Создайте файл `.env.local` в корне проекта.
2. Добавьте переменную `LEAD_WEBHOOK_URL`:

```env
LEAD_WEBHOOK_URL=https://your-webhook-url.com/catch
```

Если переменная не задана, заявки будут выводиться в консоль (mock mode).

### Изменение телефона

Телефон указан в компоненте `components/cta.tsx` и `components/footer.tsx`. 
Найдите строку `8 (800) 550-51-20` и замените на нужный номер.

### Изображения

Изображения находятся в папке `public/images/`.
Для корректной работы замените плейсхолдеры на реальные файлы:

- `public/images/noise.png` - текстура шума
- `public/images/map-placeholder.jpg` - карта локации

## Деплой на Railway (через GitHub)

1. Запушьте проект в GitHub.
2. В Railway нажмите `New Project` -> `Deploy from GitHub repo`.
3. Выберите этот репозиторий и ветку (обычно `main`).
4. В `Variables` добавьте:
   - `LEAD_WEBHOOK_URL`
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
5. Railway автоматически соберет Next.js приложение и запустит его.

В проекте уже добавлен `railway.json`, который задает:
- запуск на `0.0.0.0` и порту `$PORT`
- healthcheck `"/"`
- policy перезапуска при ошибках

## Структура проекта

- `app/` - Страницы и глобальные стили
- `components/` - UI компоненты (Hero, Concept, Investment и т.д.)
- `lib/` - Утилиты (отправка лидов)
- `tailwind.config.ts` - Настройки дизайна (цвета, шрифты)

---
© 2026 ЛОК VERA
