<template>
    <div>
        <HeroSection />
        <TrustSection />
        <FeaturesSection />
        <CollaborationSection />
        <CtaSection />
    </div>
</template>

<script setup>
useHead({
    title: "Arthakula — Kelola Keuangan Keluarga Bersama",
    meta: [
        {
            name: "description",
            content:
                "Arthakula adalah aplikasi pengelolaan keuangan keluarga gratis. Catat pengeluaran harian, atur anggaran bulanan, dan kelola tagihan bersama pasangan dengan mudah dan transparan.",
        },
        {
            name: "keywords",
            content:
                "aplikasi catat keuangan keluarga gratis, pengelolaan keuangan rumah tangga, budgeting keluarga, pencatatan pengeluaran harian, aplikasi keuangan Indonesia, expense tracker, tabungan bersama, anggaran rumah tangga, catatan keuangan bersama pasangan",
        },
        {
            name: "robots",
            content: "index, follow",
        },
    ],
});

useSchemaOrg([
    defineWebPage({
        "@type": "FAQPage",
        mainEntity: [
            defineQuestion({
                name: "Apa itu Arthakula?",
                answer: "Arthakula adalah aplikasi pengelolaan keuangan keluarga gratis yang membantu pasangan mencatat pengeluaran harian, mengatur anggaran bulanan, melacak tagihan rutin, dan melihat laporan keuangan bersama — semua dalam satu dashboard yang transparan.",
            }),
            defineQuestion({
                name: "Apakah Arthakula benar-benar gratis?",
                answer: "Ya, Arthakula sepenuhnya gratis tanpa biaya tersembunyi. Anda bisa mencatat transaksi tak terbatas, mengundang anggota keluarga, dan mengakses semua fitur tanpa perlu kartu kredit.",
            }),
            defineQuestion({
                name: "Bagaimana cara mengatur anggaran keluarga dengan Arthakula?",
                answer: "Buat kategori pengeluaran (makanan, transportasi, tagihan, hiburan), tetapkan batas bulanan untuk setiap kategori, dan Anda akan otomatis mendapatkan notifikasi saat pengeluaran mendekati 80% limit. Pasangan juga bisa melihat update anggaran secara real-time.",
            }),
            defineQuestion({
                name: "Apakah data keuangan saya aman di Arthakula?",
                answer: "Arthakula menggunakan enkripsi AES-256 untuk semua data keuangan Anda. Kami tidak menjual atau membagikan data pengguna ke pihak ketiga. Semua koneksi menggunakan HTTPS dan data disimpan di server bersertifikasi ISO 27001.",
            }),
        ],
    }),
]);
</script>
