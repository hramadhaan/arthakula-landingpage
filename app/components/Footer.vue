<template>
    <footer class="bg-white border-t border-gray-100">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div
                class="flex flex-col md:flex-row justify-between items-center gap-6"
            >
                <!-- Logo & Copyright -->
                <div class="flex items-center gap-2.5">
                    <svg
                        class="w-6 h-6"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width="100" height="100" rx="20" fill="#0D9488" />
                        <path
                            d="M50 15L76 60Q82 70 90 75L90 85L64 85L64 75L68 75L50 42L32 75L36 75L36 85L10 85L10 75Q18 70 24 60L50 15Z"
                            fill="white"
                        />
                    </svg>
                    <span class="text-base font-semibold text-gray-900"
                        >Arthakula</span
                    >
                </div>

                <!-- Links -->
                <nav class="flex flex-wrap justify-center gap-6">
                    <a
                        href="/privacy"
                        class="text-sm text-gray-500 hover:text-teal-700 transition-colors duration-200"
                        >Privasi</a
                    >
                    <a
                        href="/terms"
                        class="text-sm text-gray-500 hover:text-teal-700 transition-colors duration-200"
                        >Syarat</a
                    >
                    <a
                        href="mailto:support@arthakula.id"
                        class="text-sm text-gray-500 hover:text-teal-700 transition-colors duration-200"
                        >Kontak</a
                    >
                </nav>

                <!-- Socials -->
                <div class="flex items-center gap-4">
                    <a
                        href="https://twitter.com/arthakula"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter Arthakula"
                        class="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    >
                        <svg
                            class="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                            />
                        </svg>
                    </a>
                    <a
                        href="https://instagram.com/arthakula"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram Arthakula"
                        class="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    >
                        <svg
                            class="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.407-.06 3.808-.06h.63zm1.164 2.278c-2.33 0-4.214 1.884-4.214 4.214 0 2.33 1.884 4.214 4.214 4.214 2.33 0 4.214-1.884 4.214-4.214 0-2.33-1.884-4.214-4.214-4.214zm0 1.766a2.448 2.448 0 110 4.896 2.448 2.448 0 010-4.896zm4.786-4.99a1.152 1.152 0 110 2.304 1.152 1.152 0 010-2.304z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </a>
                </div>
            </div>
            <p class="mt-8 text-center text-sm text-gray-400">
                &copy; {{ new Date().getFullYear() }} Arthakula. Semua hak
                dilindungi.
            </p>
        </div>
    </footer>
</template>
