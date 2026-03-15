# 🏠 MJ Home - Portal Layanan Lokal Sukabumi

Website statis untuk portal multi-layanan: Shops, Food, Studio, News, Loker, Ojex.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 📁 Struktur Data

Semua data disimpan di `src/data/*.json`. Edit langsung atau gunakan **Decap CMS** via `/admin`.

## 🔧 Customization

1. Ganti nomor WhatsApp di `src/utils/whatsapp.js`
2. Update domain di `astro.config.mjs`
3. Tambah produk di `src/data/shops.json`

## 🎨 Design System

- Framework: Astro + Tailwind CSS v4
- Fonts: Inter (body), Poppins (heading)
- Colors: Primary (#1e3a5f), Secondary (#d4a574)

## 📦 Deploy

Website ini di-host di GitHub Pages. Setiap `git push` ke branch `main` akan trigger auto-deploy.

---

Dibuat dengan ❤️ untuk komunitas Parungkuda & Sukabumi.
