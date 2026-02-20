# Деплой на Railway через GitHub

## 1. Подготовка проекта

Локально проверьте, что сборка проходит:

```bash
npm install
npm run build
```

## 2. Публикация в GitHub

```bash
git add .
git commit -m "Adapt project for Railway deployment"
git push origin main
```

## 3. Создание проекта в Railway

1. Откройте Railway: https://railway.com
2. Нажмите `New Project`
3. Выберите `Deploy from GitHub repo`
4. Подключите нужный репозиторий

## 4. Переменные окружения

В Railway, в разделе `Variables`, добавьте:

- `LEAD_WEBHOOK_URL`
- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

Если переменные не заданы, API `/api/submit-lead` работает в mock-режиме.

## 5. Runtime-конфиг Railway

В репозитории уже добавлен файл `railway.json`:

- `startCommand`: `npm run start -- --hostname 0.0.0.0 --port $PORT`
- `healthcheckPath`: `/`
- restart policy при сбоях

Это обеспечивает корректный запуск Next.js в контейнере Railway.

## 6. Автодеплой

После первого подключения каждый `git push` в выбранную ветку будет автоматически запускать новый деплой в Railway.

## 7. Проверка

После деплоя:

1. Откройте домен Railway
2. Проверьте, что главная страница доступна
3. Отправьте тестовую заявку через форму
4. Проверьте логи в Railway (`Deployments` и `Logs`)
