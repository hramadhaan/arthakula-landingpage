<template>
    <section ref="el" class="py-10 bg-gray-50 border-t border-gray-100">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p class="text-center text-sm text-gray-400 mb-6">
                Dipercaya ribuan keluarga Indonesia
            </p>
            <div
                class="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500"
            >
                <div class="flex items-center gap-2">
                    <svg
                        class="w-4 h-4 text-teal-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <span>Enkripsi AES-256</span>
                </div>
                <div class="flex items-center gap-2">
                    <svg
                        class="w-4 h-4 text-teal-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <span>Gratis Selamanya</span>
                </div>
                <div class="flex items-center gap-2">
                    <svg
                        class="w-4 h-4 text-teal-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <span>Tanpa Iklan</span>
                </div>
                <div class="flex items-center gap-2">
                    <svg
                        class="w-4 h-4 text-teal-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <span>Privasi Terjamin</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const { el, isVisible } = useScrollAnimation();
</script>
