<template>
    <section
        id="google-play"
        ref="el"
        class="py-20 lg:py-24 bg-white overflow-hidden"
    >
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <!-- Left: Phone Mockup -->
                <div
                    class="order-2 lg:order-1 flex justify-center lg:justify-start animate-fade-in-up"
                >
                    <div
                        class="relative w-60 sm:w-64 lg:w-72"
                        role="img"
                        aria-label="Pratinjau aplikasi Arthakula di perangkat Android"
                    >
                        <svg
                            viewBox="0 0 280 560"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-full h-auto drop-shadow-xl"
                        >
                            <!-- Phone body -->
                            <rect
                                x="12"
                                y="4"
                                width="256"
                                height="552"
                                rx="32"
                                fill="#1F2937"
                            />
                            <rect
                                x="16"
                                y="8"
                                width="248"
                                height="544"
                                rx="28"
                                fill="#0F172A"
                            />

                            <!-- Notch / front camera -->
                            <rect
                                x="110"
                                y="4"
                                width="60"
                                height="4"
                                rx="2"
                                fill="#374151"
                            />

                            <!-- Splash screen background -->
                            <defs>
                                <linearGradient
                                    id="splash-grad"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop offset="0%" stop-color="#0F766E" />
                                    <stop offset="50%" stop-color="#0D9488" />
                                    <stop offset="100%" stop-color="#14B8A6" />
                                </linearGradient>
                            </defs>
                            <rect
                                x="18"
                                y="10"
                                width="244"
                                height="540"
                                rx="26"
                                fill="url(#splash-grad)"
                            />

                            <!-- Decorative circles (subtle) -->
                            <circle
                                cx="200"
                                cy="60"
                                r="80"
                                fill="white"
                                opacity="0.04"
                            />
                            <circle
                                cx="-10"
                                cy="480"
                                r="120"
                                fill="white"
                                opacity="0.04"
                            />
                            <circle
                                cx="140"
                                cy="540"
                                r="140"
                                fill="white"
                                opacity="0.03"
                            />

                            <!-- App icon -->
                            <rect
                                x="105"
                                y="170"
                                width="70"
                                height="70"
                                rx="18"
                                fill="white"
                                opacity="0.15"
                            />
                            <rect
                                x="109"
                                y="174"
                                width="62"
                                height="62"
                                rx="14"
                                fill="white"
                            />
                            <!-- Logo "A" mountain shape -->
                            <path
                                d="M140 184L158 222Q162 230 168 234L168 242L146 242L146 234L150 234L140 209L130 234L134 234L134 242L112 242L112 234Q118 230 122 222L140 184Z"
                                fill="#0D9488"
                            />

                            <!-- App name -->
                            <text
                                x="140"
                                y="280"
                                text-anchor="middle"
                                fill="white"
                                font-size="22"
                                font-family="Inter, system-ui, sans-serif"
                                font-weight="700"
                                letter-spacing="-0.02em"
                            >
                                Arthakula
                            </text>

                            <!-- Tagline -->
                            <text
                                x="140"
                                y="308"
                                text-anchor="middle"
                                fill="white"
                                opacity="0.75"
                                font-size="11"
                                font-family="Inter, system-ui, sans-serif"
                                font-weight="400"
                            >
                                Kelola keuangan bersama keluarga
                            </text>

                            <!-- Loading dots -->
                            <circle
                                cx="122"
                                cy="390"
                                r="3.5"
                                fill="white"
                                opacity="0.5"
                            >
                                <animate
                                    attributeName="opacity"
                                    values="0.5;1;0.5"
                                    dur="1.4s"
                                    begin="0s"
                                    repeatCount="indefinite"
                                />
                            </circle>
                            <circle
                                cx="140"
                                cy="390"
                                r="3.5"
                                fill="white"
                                opacity="0.5"
                            >
                                <animate
                                    attributeName="opacity"
                                    values="0.5;1;0.5"
                                    dur="1.4s"
                                    begin="0.2s"
                                    repeatCount="indefinite"
                                />
                            </circle>
                            <circle
                                cx="158"
                                cy="390"
                                r="3.5"
                                fill="white"
                                opacity="0.5"
                            >
                                <animate
                                    attributeName="opacity"
                                    values="0.5;1;0.5"
                                    dur="1.4s"
                                    begin="0.4s"
                                    repeatCount="indefinite"
                                />
                            </circle>

                            <!-- Footer text -->
                            <text
                                x="140"
                                y="440"
                                text-anchor="middle"
                                fill="white"
                                opacity="0.45"
                                font-size="10"
                                font-family="Inter, system-ui, sans-serif"
                                font-weight="500"
                            >
                                Segera hadir di Google Play
                            </text>

                            <!-- Home indicator -->
                            <rect
                                x="100"
                                y="508"
                                width="80"
                                height="4"
                                rx="2"
                                fill="white"
                                opacity="0.2"
                            />
                        </svg>
                    </div>
                </div>

                <!-- Right: Content -->
                <div class="order-1 lg:order-2">
                    <p
                        class="text-sm font-semibold text-teal-700 mb-3 tracking-wide"
                    >
                        Segera Hadir di Google Play
                    </p>

                    <h2
                        class="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4"
                        style="text-wrap: balance"
                    >
                        Aplikasi Android, lebih praktis di tangan kamu
                    </h2>

                    <p class="text-gray-500 leading-relaxed mb-8 max-w-lg">
                        Kelola keuangan keluarga langsung dari HP Android.
                        Dapatkan notifikasi real-time, tanya AI, dan nikmati
                        pengalaman yang lebih cepat dengan tampilan modern.
                    </p>

                    <!-- Feature Highlights -->
                    <div class="grid sm:grid-cols-2 gap-x-6 gap-y-5 mb-9">
                        <div
                            v-for="(feature, i) in features"
                            :key="feature.title"
                            class="flex items-start gap-3"
                            :class="[
                                'animate-fade-in-up',
                                `delay-${(i + 2) * 100}`,
                            ]"
                        >
                            <div
                                class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                                :class="feature.iconBg"
                            >
                                <svg
                                    class="w-4 h-4"
                                    :class="feature.iconColor"
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
                            <div>
                                <h3
                                    class="font-semibold text-gray-900 text-sm leading-snug"
                                >
                                    {{ feature.title }}
                                </h3>
                                <p
                                    class="text-sm text-gray-500 mt-0.5 leading-relaxed"
                                >
                                    {{ feature.desc }}
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- CTA Buttons -->
                    <div
                        class="flex flex-wrap items-center gap-3 animate-fade-in-up delay-500"
                    >
                        <!-- Google Play badge-style button -->
                        <a
                            href="#"
                            aria-label="Dapatkan Arthakula di Google Play"
                            class="inline-flex items-center gap-2.5 px-5 py-2.5 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                        >
                            <svg
                                class="w-5 h-5"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"
                                />
                            </svg>
                            <span
                                class="flex flex-col items-start leading-tight"
                            >
                                <span
                                    class="text-[10px] font-normal opacity-80 leading-none"
                                    >SEGERA HADIR DI</span
                                >
                                <span
                                    class="text-sm font-semibold leading-tight"
                                    >Google Play</span
                                >
                            </span>
                        </a>

                        <!-- Notify Me button -->
                        <a
                            href="mailto:support@arthakula.id?subject=Beri%20tahu%20saya%20saat%20aplikasi%20Android%20tersedia"
                            aria-label="Beri tahu saya saat aplikasi Android tersedia"
                            class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-teal-700 border border-teal-700/30 rounded-lg hover:bg-teal-50 hover:border-teal-700/50 transition-colors duration-200"
                        >
                            <svg
                                class="w-4 h-4 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                />
                            </svg>
                            Beri Tahu Saya
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const { el, isVisible } = useScrollAnimation();

const features = [
    {
        title: "Notifikasi Cerdas",
        desc: "Pengingat tagihan, anggaran, dan update transaksi real-time langsung ke HP kamu.",
        icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
        iconBg: "bg-teal-50",
        iconColor: "text-teal-700",
        iconLabel: "Ikon notifikasi",
    },
    {
        title: "AI Chat",
        desc: "Tanya soal keuangan, dapatkan saran budgeting personal, dan insight otomatis dari AI.",
        icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z",
        iconBg: "bg-amber-50",
        iconColor: "text-amber-600",
        iconLabel: "Ikon AI chat",
    },
    {
        title: "Cepat & Ringan",
        desc: "Performa native Android — buka, catat, dan cek keuangan dalam hitungan detik.",
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        iconBg: "bg-emerald-50",
        iconColor: "text-emerald-600",
        iconLabel: "Ikon performa cepat",
    },
    {
        title: "Tampilan Modern",
        desc: "Desain intuitif yang enak dipandang, dioptimalkan untuk pengalaman mobile terbaik.",
        icon: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
        iconBg: "bg-purple-50",
        iconColor: "text-purple-600",
        iconLabel: "Ikon tampilan modern",
    },
];
</script>
