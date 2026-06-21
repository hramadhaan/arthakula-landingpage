// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/seo", "@nuxtjs/sitemap"],
  css: ["~/assets/css/main.css"],
  site: {
    url: "https://arthakula.id",
    name: "Arthakula",
    description:
      "Arthakula adalah platform sederhana untuk mengelola keuangan keluarga bersama pasangan. Catat, rencanakan, dan kelola tagihan dengan transparan.",
    defaultLocale: "id",
  },
  sitemap: {
    sources: ["/api/__sitemap__/urls"],
  },
  seo: {
    meta: {
      description:
        "Arthakula adalah platform sederhana untuk mengelola keuangan keluarga bersama pasangan. Catat, rencanakan, dan kelola tagihan dengan transparan.",
      keywords:
        "aplikasi catat keuangan keluarga, pengelolaan keuangan rumah tangga, budgeting keluarga, pencatatan pengeluaran harian, aplikasi keuangan Indonesia, expense tracker, tabungan keluarga, anggaran rumah tangga, aplikasi finansial keluarga, catatan keuangan bersama pasangan",
      author: "Arthakula",
      themeColor: "#0D9488",
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "id",
      },
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon.svg",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.svg",
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
        },
      ],
    },
  },
});
