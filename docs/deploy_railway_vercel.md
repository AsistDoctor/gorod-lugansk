# Деплой Backend (Strapi) на Railway и связь с Vercel (Nuxt)

## Railway (Backend)
- Создай проект Railway.
- Добавь сервис PostgreSQL.
- Добавь сервис Node для папки `backend/`:
  - build: `npm run build`
  - start: `npm run start`
- Заполни переменные окружения (см. `backend/.env.example`):
  - `HOST=0.0.0.0`
  - `PORT=1337`
  - `PUBLIC_URL=https://<subdomain>.railway.app`
  - `DATABASE_CLIENT=postgres`
  - `DATABASE_URL=postgres://user:pass@host:5432/dbname?ssl=true` (или отдельные `DATABASE_*`)
  - `CORS_ORIGINS=https://gorod-lugansk.vercel.app,http://localhost:3000`
  - `APP_KEYS`, `API_TOKEN_SALT`, `ADMIN_JWT_SECRET`, `JWT_SECRET` (случайные строки)
  - (опционально загрузки) `UPLOAD_PROVIDER=s3`, `S3_*`
- Запусти сервис, получи публичный URL `https://<subdomain>.railway.app`.
- Открой админку `https://<subdomain>.railway.app/admin`, создай администратора.
- Через админку создай типы контента:
  - News: `title`, `excerpt`, `content`, `date`, `category`, `image`
  - Documents: `title`, `number`, `type`, `typeValue`, `date`, `file`

## Vercel (Frontend)
- В проекте на Vercel добавь переменную:
  - `NUXT_PUBLIC_API_BASE=https://<subdomain>.railway.app/api`
- Пересобери и проверь:
  - Страницы `/news`, `/news/[id]`, `/documents` читают данные из Strapi.

## Проверки
- API:
  - `GET https://<subdomain>.railway.app/api/news`
  - `GET https://<subdomain>.railway.app/api/documents`
- CORS:
  - Если браузер блокирует запросы, проверь `CORS_ORIGINS`.

## Примечания
- Dev: SQLite локально (безопасно для разработки).
- Prod: PostgreSQL на Railway, файлы — лучше S3.
- Секреты храни в env, не в репозитории.
