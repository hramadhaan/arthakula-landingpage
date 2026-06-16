<template>
    <section ref="el" class="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div
            class="max-w-4xl mx-auto bg-teal-700 rounded-2xl px-8 py-14 lg:py-16 text-center"
        >
            <h2 class="text-2xl sm:text-3xl font-bold text-white mb-4">
                Mulai atur keuangan keluarga hari ini
            </h2>
            <p class="text-teal-100 max-w-lg mx-auto mb-8">
                Bergabung dengan ribuan keluarga yang sudah lebih tenang
                mengelola finansial bersama.
            </p>
            <div class="flex flex-wrap justify-center gap-3">
                <a
                    href="/daftar"
                    aria-label="Daftar gratis sekarang di Arthakula"
                    class="inline-flex items-center px-6 py-2.5 text-sm font-medium text-teal-700 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                    Daftar Gratis
                    <svg
                        class="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </a>
                <a
                    href="mailto:support@arthakula.id"
                    aria-label="Hubungi tim kami"
                    class="inline-flex items-center px-6 py-2.5 text-sm font-medium text-white border border-white/30 rounded-lg hover:bg-white/10 transition-colors duration-200"
                >
                    Hubungi Kami
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
const { el, isVisible } = useScrollAnimation();
</script>
