<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
useHead({
    titleTemplate: (title) => {
        return title
            ? `${title} | Arthakula`
            : "Arthakula — Kelola Keuangan Keluarga Bersama";
    },
});

useSeoMeta({
    ogTitle: "Arthakula — Kelola Keuangan Keluarga Bersama",
    ogDescription:
        "Aplikasi pengelolaan keuangan keluarga gratis. Catat pengeluaran harian, atur anggaran bulanan, dan kelola tagihan bersama pasangan dengan mudah dan transparan.",
    ogType: "website",
    ogUrl: "https://arthakula.id",
    ogImage: "https://arthakula.id/og-image.svg",
    ogImageAlt: "Arthakula — Aplikasi Pengelolaan Keuangan Keluarga",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    ogImageType: "image/svg+xml",
    ogLocale: "id_ID",
    twitterCard: "summary_large_image",
    twitterTitle: "Arthakula — Kelola Keuangan Keluarga Bersama",
    twitterDescription:
        "Aplikasi gratis untuk mengelola keuangan keluarga. Catat, rencanakan, dan kelola tagihan bersama pasangan.",
    twitterImage: "https://arthakula.id/og-image.svg",
    twitterImageAlt: "Arthakula — Aplikasi Pengelolaan Keuangan Keluarga",
    twitterSite: "@arthakula",
    robots: "index, follow",
    googlebot:
        "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    bingbot:
        "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    rating: "general",
});

useSchemaOrg([
    defineOrganization({
        name: "Arthakula",
        url: "https://arthakula.id",
        logo: "https://arthakula.id/logo.svg",
        sameAs: [
            "https://twitter.com/arthakula",
            "https://instagram.com/arthakula",
        ],
        description:
            "Aplikasi pengelolaan keuangan keluarga gratis untuk pasangan dan keluarga Indonesia",
        contactPoint: {
            email: "support@arthakula.id",
            contactType: "customer support",
            areaServed: "ID",
            availableLanguage: "Indonesian",
        },
    }),
    defineWebSite({
        name: "Arthakula — Kelola Keuangan Keluarga Bersama",
        url: "https://arthakula.id",
        description:
            "Aplikasi pengelolaan keuangan keluarga gratis untuk pasangan",
        inLanguage: "id",
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: "https://arthakula.id/cari?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
        },
    }),
    defineProduct({
        name: "Arthakula",
        description:
            "Aplikasi pengelolaan keuangan keluarga gratis — catat pengeluaran, atur anggaran, pantau tagihan bersama pasangan",
        image: "https://arthakula.id/og-image.svg",
        brand: {
            name: "Arthakula",
        },
        offers: {
            price: "0",
            priceCurrency: "IDR",
            availability: "https://schema.org/InStock",
        },
    }),
    {
        "@type": "SoftwareApplication",
        name: "Arthakula",
        url: "https://arthakula.id",
        description:
            "Aplikasi pengelolaan keuangan keluarga gratis — catat pengeluaran, atur anggaran, pantau tagihan bersama pasangan",
        image: "https://arthakula.id/og-image.svg",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Android, iOS, Web",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "IDR",
        },
    },
]);
</script>
