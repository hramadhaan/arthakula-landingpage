<template>
    <section class="py-16 lg:py-20 bg-white">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-2xl">
                <h1 class="text-3xl font-bold text-gray-900 tracking-tight mb-4">Tentang Arthakula</h1>
                <p class="text-lg text-gray-500 leading-relaxed mb-8">
                    Kami percaya bahwa mengelola keuangan keluarga seharusnya sederhana, transparan, dan bisa dilakukan bersama.
                </p>
            </div>

            <div class="grid md:grid-cols-2 gap-12 mt-8">
                <div>
                    <h2 class="text-xl font-semibold text-gray-900 mb-4">Misi Kami</h2>
                    <p class="text-gray-500 leading-relaxed">
                        Membantu pasangan dan keluarga Indonesia mencapai kestabilan finansial melalui alat pengelolaan keuangan yang mudah digunakan, gratis, dan mengutamakan privasi. Kami ingin menghilangkan stres dari pembicaraan tentang uang di rumah tangga.
                    </p>
                </div>
                <div>
                    <h2 class="text-xl font-semibold text-gray-900 mb-4">Mengapa Arthakula?</h2>
                    <p class="text-gray-500 leading-relaxed">
                        Nama <strong>Arthakula</strong> berasal dari bahasa Sanskerta: <em>artha</em> (kekayaan, kemakmuran) dan <em>kula</em> (keluarga). Kami meyakini bahwa kemakmuran sejati dimulai dari pengelolaan yang baik di tingkat keluarga.
                    </p>
                </div>
            </div>

            <div class="mt-16 grid sm:grid-cols-3 gap-8">
                <div class="p-6 rounded-xl border border-gray-100">
                    <h3 class="font-semibold text-gray-900 mb-2">🔒 Privasi Utama</h3>
                    <p class="text-sm text-gray-500">Data keuangan Anda dienkripsi dan tidak pernah dijual ke pihak ketiga. Model bisnis kami tidak bergantung pada data pengguna.</p>
                </div>
                <div class="p-6 rounded-xl border border-gray-100">
                    <h3 class="font-semibold text-gray-900 mb-2">🇮🇩 Dibuat di Indonesia</h3>
                    <p class="text-sm text-gray-500">Dibangun oleh tim Indonesia yang memahami kebutuhan dan kebiasaan finansial keluarga di tanah air.</p>
                </div>
                <div class="p-6 rounded-xl border border-gray-100">
                    <h3 class="font-semibold text-gray-900 mb-2">💚 Selalu Gratis</h3>
                    <p class="text-sm text-gray-500">Semua fitur inti Arthakula gratis selamanya. Kami percaya akses ke alat keuangan yang baik adalah hak semua keluarga.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
useHead({
    title: "Tentang Arthakula",
    meta: [
        {
            name: "description",
            content: "Arthakula — aplikasi pengelolaan keuangan keluarga gratis buatan Indonesia. Pelajari misi kami membantu keluarga mencapai kestabilan finansial.",
        },
        {
            name: "robots",
            content: "index, follow",
        },
    ],
});

useSchemaOrg([
    defineWebPage({
        name: "Tentang Arthakula",
    }),
]);
</script>
