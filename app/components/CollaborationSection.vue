<template>
    <section ref="el" class="py-20 lg:py-24 bg-gray-50">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <!-- Content -->
                <div class="order-2 lg:order-1">
                    <p class="text-sm font-medium text-teal-700 mb-3">
                        Kolaborasi
                    </p>
                    <h2
                        class="text-3xl font-bold text-gray-900 tracking-tight mb-4"
                    >
                        Satu akun, banyak peran
                    </h2>
                    <p class="text-gray-500 mb-10">
                        Setiap anggota keluarga bisa berkontribusi sesuai
                        tanggung jawabnya.
                    </p>

                    <div class="space-y-5">
                        <div class="flex items-start gap-4">
                            <div
                                class="w-9 h-9 bg-teal-700 rounded-lg flex items-center justify-center flex-shrink-0"
                            >
                                <svg
                                    class="w-4 h-4 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-900 text-sm">
                                    Admin Utama
                                </h3>
                                <p class="text-sm text-gray-500 mt-1">
                                    Mengatur anggaran, menyetujui pengeluaran
                                    besar, dan melihat laporan konsolidasi.
                                </p>
                            </div>
                        </div>

                        <div class="flex items-start gap-4">
                            <div
                                class="w-9 h-9 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0"
                            >
                                <svg
                                    class="w-4 h-4 text-teal-700"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-900 text-sm">
                                    Anggota Keluarga
                                </h3>
                                <p class="text-sm text-gray-500 mt-1">
                                    Mencatat pengeluaran harian dan melihat
                                    saldo dompet bersama yang diizinkan.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Image -->
                <div class="order-1 lg:order-2">
                    <div
                        class="rounded-2xl overflow-hidden bg-white border border-gray-100"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=700&q=80"
                            srcset="
                                https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=700&q=80 700w,
                                https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=500&q=80 500w
                            "
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            alt="Pasangan suami istri menggunakan aplikasi keuangan keluarga"
                            class="w-full h-72 lg:h-80 object-cover"
                            loading="lazy"
                            width="700"
                            height="467"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const { el, isVisible } = useScrollAnimation();
</script>
