# Arthakula

> Aplikasi pengelolaan keuangan keluarga gratis — catat pengeluaran, atur anggaran, pantau tagihan bersama pasangan.

Landing page modern dibangun dengan **Nuxt 3 + Tailwind CSS**. Nama _Arthakula_ berasal dari bahasa Sanskerta: _artha_ (kemakmuran) dan _kula_ (keluarga).

## 🛠 Tech Stack

| Teknologi | Keterangan |
|-----------|------------|
| [Nuxt 3](https://nuxt.com) | Framework Vue |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first CSS |
| [@nuxtjs/seo](https://nuxtseo.com) | Meta tags, OG, Schema markup |
| [@nuxtjs/sitemap](https://nuxtseo.com/sitemap) | XML sitemap auto-generate |
| Inter | Font primary (Google Fonts) |
| pnpm | Package manager |

## 📁 Struktur

```
app/
├── assets/css/main.css       # Global styles & animations
├── components/
│   ├── Navbar.vue            # Sticky nav + logo SVG
│   ├── HeroSection.vue       # Headline & CTA
│   ├── TrustSection.vue      # Trust signals
│   ├── FeaturesSection.vue   # 4 fitur utama
│   ├── CollaborationSection.vue  # Multi-role
│   ├── CtaSection.vue        # Call-to-action banner
│   └── Footer.vue            # Footer + social links
├── composables/
│   └── useScrollAnimation.ts # Intersection Observer
├── layouts/default.vue       # Layout utama
└── pages/
    ├── index.vue             # Homepage + SEO + FAQ schema
    ├── tentang.vue           # Tentang Arthakula
    ├── privacy.vue           # Kebijakan Privasi
    ├── terms.vue             # Syarat & Ketentuan
    └── [...slug].vue         # Halaman 404
```

## 🚀 Menjalankan

```bash
pnpm install        # Install dependencies
pnpm dev            # Dev server → http://localhost:3000
pnpm build          # Production build
pnpm preview        # Preview production build
```

## 🌐 SEO

Full SEO setup via `@nuxtjs/seo` + `@nuxtjs/sitemap`:

- **Meta tags** — title, description, keywords per halaman
- **Open Graph + Twitter Cards** — rich preview di media sosial
- **Structured Data** — Organization, WebSite, Product, FAQPage (JSON‑LD)
- **XML Sitemap** — auto‑generate
- **Canonical URL** — self‑referencing
- **Semantic HTML** — heading hierarchy, alt text, aria labels
- **Custom 404** — ilustrasi SVG inline

## 🎨 Desain

- **Style:** Minimalism, clean, banyak whitespace
- **Warna primary:** Teal‑700 (`#0D9488`)
- **Font:** Inter 400/500/600/700
- **Logo:** SVG icon (`public/favicon.svg`)
- **Responsive:** Mobile‑first, breakpoints 640/768/1024

## 📄 Halaman

| URL | Konten |
|-----|--------|
| `/` | Landing page |
| `/tentang` | Misi & nilai perusahaan |
| `/privacy` | Kebijakan privasi |
| `/terms` | Syarat dan ketentuan |
| `/*` | Halaman 404 |

## 📦 Deploy

### Static (rekomendasi)

```bash
npx nuxt generate
```

Upload folder `.output/public/` ke Cloudflare Pages, Vercel, Netlify, atau Nginx.

### SSR

```bash
npx nuxt build
node .output/server/index.mjs
```
