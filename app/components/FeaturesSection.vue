<template>
    <section id="features" ref="el" class="py-20 lg:py-24 bg-white">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-2xl mb-14">
                <h2 class="text-3xl font-bold text-gray-900 tracking-tight">
                    Semua yang dibutuhkan keluarga
                </h2>
                <p class="mt-4 text-gray-500">
                    Arthakula dirancang sederhana, tapi cukup kuat untuk
                    mengatur keuangan rumah tangga modern.
                </p>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div
                    v-for="(feature, i) in features"
                    :key="feature.title"
                    class="p-6 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors duration-200"
                >
                    <div
                        class="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-4"
                    >
                        <svg
                            class="w-5 h-5 text-teal-700"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            :aria-label="feature.iconLabel"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                :d="feature.icon"
                            />
                        </svg>
                    </div>
                    <h3 class="text-base font-semibold text-gray-900 mb-2">
                        {{ feature.title }}
                    </h3>
                    <p class="text-sm text-gray-500 leading-relaxed">
                        {{ feature.desc }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const { el, isVisible } = useScrollAnimation();

const features = [
    {
        title: "Dompet Bersama",
        desc: "Satu tempat untuk melihat dan mengatur dana keluarga secara transparan.",
        icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
        iconLabel: "Ikon dompet bersama",
    },
    {
        title: "Anggaran Pintar",
        desc: "Atur batas pengeluaran per kategori dan dapatkan notifikasi saat mendekati limit.",
        icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z",
        iconLabel: "Ikon anggaran pintar",
    },
    {
        title: "Tagihan Rutin",
        desc: "Pengingat otomatis untuk listrik, air, dan langganan — tepat waktu, tanpa denda.",
        icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
        iconLabel: "Ikon tagihan rutin",
    },
    {
        title: "Laporan Detail",
        desc: "Ringkasan mingguan dan bulanan untuk memahami pola pengeluaran keluarga.",
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
        iconLabel: "Ikon laporan detail",
    },
];
</script>
