# Kansabi Web — Altyapı Kurulumu

## Mimari

```
GitHub  →  Vercel  →  Next.js App
                         ├── /              Landing page
                         ├── /admin         Payload CMS (içerik + SEO)
                         ├── /dashboard     Müşteri raporlama (Figma ile gelecek)
                         ├── /api/*         Payload REST API
                         └── /api/health    Health check

Neon PostgreSQL  ←  Payload CMS (Pages, Blog, Media, Site Settings)
```

## Git author (Vercel için zorunlu)

Commit email'in GitHub hesabınla eşleşmeli. Terminalde **bir kez** çalıştır:

```bash
git config user.email "kansabi.digital@gmail.com"
git config user.name "Turker Alper TULAY"
```

(`--global` eklersen tüm projelerde geçerli olur.)

## 1. Neon DB

1. [console.neon.tech](https://console.neon.tech) → yeni proje oluştur
2. **Connection pooling** açık olsun
3. Connection string'i kopyala (`?sslmode=require` dahil)

## 2. Lokal ortam

```bash
cd web
cp .env.example .env.local
```

`.env.local` doldur:

| Değişken | Açıklama |
|---|---|
| `DATABASE_URL` | Neon pooled connection string |
| `PAYLOAD_SECRET` | `openssl rand -hex 32` ile üret |
| `NEXT_PUBLIC_SITE_URL` | `http://localhost:3000` |
| `DASHBOARD_ACCESS_KEY` | Dashboard önizleme anahtarı (opsiyonel) |

```bash
npm install
npm run dev
```

- Site: http://localhost:3000
- CMS: http://localhost:3000/admin (ilk kullanıcıyı oluştur)
- Dashboard: http://localhost:3000/dashboard

## 3. GitHub

```bash
cd web
git init   # henüz yoksa
git add .
git commit -m "feat: Next.js + Payload CMS + Neon foundation"
git remote add origin https://github.com/KULLANICI/kansabi-web.git
git push -u origin main
```

## 4. Vercel

1. [vercel.com](https://vercel.com) → Import Git Repository
2. Root directory: `web`
3. Environment Variables (Production + Preview):

   - `DATABASE_URL`
   - `PAYLOAD_SECRET`
   - `NEXT_PUBLIC_SITE_URL` → `https://your-domain.vercel.app`
   - `DASHBOARD_ACCESS_KEY`

4. Deploy — build komutu: `npm run build`

> **Not:** `payload migrate` Vercel build'de çalıştırılmaz (Node 22 ESM uyumsuzluğu). Schema değişikliklerinde lokal olarak `npm run migrate` çalıştır (Neon `DATABASE_URL` ile).

## Güvenlik

- `.env.local` asla commit edilmez
- Security headers (HSTS, X-Frame-Options, nosniff)
- `/dashboard` production'da `DASHBOARD_ACCESS_KEY` ile korunur
- Payload CSRF + CORS yapılandırılmış
- CMS erişim kontrolü: yayınlanmamış içerik public'te görünmez
- `/admin` robots.txt'te engelli

## SEO (Payload CMS)

- **Pages** — landing alt sayfalar, meta title/description, OG image, noindex
- **Blog Posts** — içerik + SEO alanları
- **Site Settings** — varsayılan meta, site URL, organizasyon bilgisi
- `robots.ts` + `sitemap.ts` hazır (CMS sayfaları bağlanacak)

## Dashboard (sonraki adım)

Figma tasarımını ilettiğinde `/dashboard` route'una uygulanacak.
Veri kaynakları: GA4, Google Ads, Meta Ads, HubSpot (MD'deki raporlama planına göre).
