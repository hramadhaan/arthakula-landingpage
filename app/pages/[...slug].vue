<template>
    <div class="min-h-[70vh] flex items-center justify-center bg-white">
        <div class="max-w-md mx-auto px-4 text-center">
            <!-- Illustration -->
            <svg
                class="w-48 h-48 sm:w-56 sm:h-56 mx-auto mb-8"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <!-- Background circle -->
                <circle cx="100" cy="95" r="72" fill="#F0FDFA" />

                <!-- Document shape -->
                <rect
                    x="58"
                    y="42"
                    width="84"
                    height="106"
                    rx="8"
                    fill="white"
                    stroke="#99F6E4"
                    stroke-width="2"
                />

                <!-- Fold corner / dog-ear -->
                <path
                    d="M142 42 L142 68 L116 42 Z"
                    fill="#CCFBF1"
                    stroke="#99F6E4"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                />

                <!-- Broken / torn edge on right -->
                <path
                    d="M142 80 L148 86 L140 92 L147 100 L140 108"
                    stroke="#0D9488"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />

                <!-- Question mark -->
                <text
                    x="91"
                    y="128"
                    font-family="Inter, system-ui, sans-serif"
                    font-size="52"
                    font-weight="700"
                    fill="#0D9488"
                    text-anchor="middle"
                >
                    ?
                </text>

                <!-- Floating elements: small dots -->
                <circle cx="44" cy="58" r="3" fill="#5EEAD4" opacity="0.6" />
                <circle cx="156" cy="44" r="2.5" fill="#14B8A6" opacity="0.5" />
                <circle cx="42" cy="130" r="2" fill="#99F6E4" opacity="0.7" />
                <circle cx="162" cy="148" r="3" fill="#5EEAD4" opacity="0.5" />
                <circle cx="70" cy="170" r="2" fill="#14B8A6" opacity="0.4" />

                <!-- Decorative line elements -->
                <line
                    x1="72"
                    y1="80"
                    x2="102"
                    y2="80"
                    stroke="#99F6E4"
                    stroke-width="2"
                    stroke-linecap="round"
                />
                <line
                    x1="72"
                    y1="90"
                    x2="92"
                    y2="90"
                    stroke="#CCFBF1"
                    stroke-width="2"
                    stroke-linecap="round"
                />
            </svg>

            <!-- Message -->
            <h1 class="text-xl font-semibold text-gray-900 mb-2">
                Halaman tidak ditemukan
            </h1>
            <p class="text-sm text-gray-500 leading-relaxed mb-8">
                Sepertinya halaman yang Anda cari sudah dipindahkan atau tidak
                pernah ada.
            </p>

            <!-- Actions -->
            <div class="flex flex-col sm:flex-row justify-center gap-3">
                <a
                    href="/"
                    class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-teal-700 rounded-lg hover:bg-teal-800 transition-colors duration-200"
                >
                    Kembali ke Beranda
                </a>
                <a
                    href="/tentang"
                    class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                >
                    Tentang Arthakula
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: "Halaman Tidak Ditemukan",
    meta: [
        {
            name: "robots",
            content: "noindex, follow",
        },
    ],
});
</script>
