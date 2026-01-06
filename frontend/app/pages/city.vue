<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
      <div class="container-main">
        <h1 class="text-4xl font-bold mb-4 text-white">Наш город</h1>
        <p class="text-xl text-primary-100">Луганск — город с богатой историей и культурой</p>
      </div>
    </section>

    <div class="container-main py-12">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Основной контент -->
        <div class="lg:col-span-2 space-y-8">
          <section>
            <h2 class="text-2xl font-bold mb-4">О городе</h2>
            <div class="prose max-w-none">
              <p>Луганск — крупный промышленный, культурный и научный центр. Город расположен на реке Лугань, притоке Северского Донца.</p>
              <p>Основан в 1795 году. Население города составляет более 400 тысяч человек.</p>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold mb-4">История</h2>
            <div class="prose max-w-none">
              <p>История Луганска начинается с основания литейного завода в 1795 году по указу Екатерины II. Город быстро развивался как промышленный центр региона.</p>
            </div>
          </section>

          <!-- Галерея заглушка -->
          <section>
            <h2 class="text-2xl font-bold mb-4">Фотогалерея</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div v-for="i in 6" :key="i" class="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </section>
        </div>

        <!-- Сайдбар -->
        <aside class="space-y-6">
          <div class="bg-white rounded-xl shadow-sm border p-6">
            <h3 class="font-semibold text-lg mb-4">Факты о городе</h3>
            <ul class="space-y-3 text-sm">
              <li class="flex justify-between"><span class="text-gray-600">Основан</span><span class="font-medium">1795 год</span></li>
              <li class="flex justify-between"><span class="text-gray-600">Население</span><span class="font-medium">~400 000</span></li>
              <li class="flex justify-between"><span class="text-gray-600">Площадь</span><span class="font-medium">286 км²</span></li>
              <li class="flex justify-between"><span class="text-gray-600">Часовой пояс</span><span class="font-medium">UTC+3</span></li>
            </ul>
          </div>

          <div class="bg-primary-50 rounded-xl p-6">
            <h3 class="font-semibold text-lg mb-4 text-primary-800">Символика</h3>
            <p class="text-sm text-primary-700">Герб и флаг города отражают его промышленное наследие и богатую историю.</p>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>
