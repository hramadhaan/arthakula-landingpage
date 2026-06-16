<template>
    <nav
        class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300"
        :class="isScrolled ? 'shadow-sm' : ''"
    >
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <!-- Logo -->
                <div class="flex-shrink-0 flex items-center gap-2.5">
                    <a
                        href="/"
                        aria-label="Arthakula - Beranda"
                        class="flex items-center gap-2.5 group"
                    >
                        <svg
                            class="w-7 h-7 transition-transform duration-300 group-hover:scale-105"
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                width="100"
                                height="100"
                                rx="20"
                                fill="#0D9488"
                            />
                            <path
                                d="M50 15L76 60Q82 70 90 75L90 85L64 85L64 75L68 75L50 42L32 75L36 75L36 85L10 85L10 75Q18 70 24 60L50 15Z"
                                fill="white"
                            />
                        </svg>
                        <span
                            class="text-lg font-semibold text-gray-900 tracking-tight"
                            >Arthakula</span
                        >
                    </a>
                </div>

                <!-- Desktop Menu -->
                <div class="hidden md:flex items-center space-x-8">
                    <a
                        href="/#features"
                        aria-label="Lihat fitur Arthakula"
                        class="text-sm font-medium text-gray-500 hover:text-teal-700 transition-colors duration-200"
                    >
                        Fitur
                    </a>
                    <a
                        href="/tentang"
                        aria-label="Tentang Arthakula"
                        class="text-sm font-medium text-gray-500 hover:text-teal-700 transition-colors duration-200"
                    >
                        Tentang
                    </a>
                </div>

                <!-- Auth Buttons -->
                <div class="hidden md:flex items-center space-x-4">
                    <a
                        href="/login"
                        aria-label="Masuk ke akun"
                        class="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors duration-200"
                    >
                        Masuk
                    </a>
                    <a
                        href="/daftar"
                        aria-label="Daftar gratis sekarang"
                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-teal-700 rounded-lg hover:bg-teal-800 transition-colors duration-200"
                    >
                        Mulai Gratis
                    </a>
                </div>

                <!-- Mobile menu button -->
                <div class="md:hidden">
                    <button
                        @click="isOpen = !isOpen"
                        aria-label="Toggle menu"
                        class="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors duration-200"
                    >
                        <svg
                            v-if="!isOpen"
                            class="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                        <svg
                            v-else
                            class="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu -->
        <transition
            enter-active-class="transition-all duration-200 ease-out"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition-all duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-2"
        >
            <div
                v-if="isOpen"
                class="md:hidden bg-white border-t border-gray-100"
            >
                <div class="px-4 py-3 space-y-1">
                    <a
                        href="/#features"
                        aria-label="Lihat fitur"
                        class="block px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-teal-700 transition-colors duration-200"
                    >
                        Fitur
                    </a>
                    <a
                        href="/tentang"
                        class="block px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-teal-700 transition-colors duration-200"
                    >
                        Tentang
                    </a>
                    <div class="pt-2 border-t border-gray-100 space-y-1">
                        <a
                            href="/login"
                            class="block px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors duration-200"
                        >
                            Masuk
                        </a>
                        <a
                            href="/daftar"
                            aria-label="Daftar gratis"
                            class="block px-3 py-2 rounded-lg text-sm font-medium text-white bg-teal-700 hover:bg-teal-800 transition-colors duration-200"
                        >
                            Mulai Gratis
                        </a>
                    </div>
                </div>
            </div>
        </transition>
    </nav>
</template>

<script setup>
const isOpen = ref(false);
const isScrolled = ref(false);

onMounted(() => {
    window.addEventListener("scroll", () => {
        isScrolled.value = window.scrollY > 10;
    });
});
</script>
