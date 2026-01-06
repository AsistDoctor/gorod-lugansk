<template>
  <div>
    <!-- Hero секция -->
    <section class="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
      <div class="container-main">
        <div class="max-w-3xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 text-white">
            Добро пожаловать в Луганск
          </h1>
          <p class="text-xl text-primary-100 mb-8">
            Официальный портал муниципального образования городской округ город Луганск 
            Луганской Народной Республики
          </p>
          <div class="flex flex-wrap gap-4">
            <NuxtLink 
              to="/news" 
              class="bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors no-underline"
            >
              Последние новости
            </NuxtLink>
            <NuxtLink 
              to="/documents" 
              class="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors no-underline"
            >
              Документы
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Важная информация -->
    <section class="bg-amber-50 border-l-4 border-amber-500">
      <div class="container-main py-4">
        <div class="flex items-start gap-3">
          <svg class="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div>
            <h3 class="font-semibold text-amber-800">Важная информация</h3>
            <p class="text-amber-700">
              Здесь будет отображаться важная информация для жителей города
            </p>
          </div>
        </div>
      </div>
    </section>

    <div class="container-main py-12">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Новости -->
        <div class="lg:col-span-2">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold">Новости</h2>
            <NuxtLink to="/news" class="text-primary-600 hover:text-primary-700 text-sm font-medium">
              Все новости →
            </NuxtLink>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NewsCard 
              v-for="news in latestNews" 
              :key="news.id"
              :news="news"
            />
          </div>
        </div>

        <!-- Боковая панель -->
        <aside class="space-y-8">
          <!-- Быстрые ссылки -->
          <div class="bg-white rounded-xl shadow-sm border p-6">
            <h3 class="font-semibold text-lg mb-4">Быстрые ссылки</h3>
            <ul class="space-y-3">
              <li>
                <NuxtLink to="/administration" class="flex items-center gap-2 text-gray-700 hover:text-primary-600">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Администрация
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/documents?type=orders" class="flex items-center gap-2 text-gray-700 hover:text-primary-600">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Распоряжения
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/documents?type=resolutions" class="flex items-center gap-2 text-gray-700 hover:text-primary-600">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Постановления
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Телефоны экстренных служб -->
          <div class="bg-red-50 rounded-xl border border-red-200 p-6">
            <h3 class="font-semibold text-lg mb-4 text-red-800">Экстренные службы</h3>
            <ul class="space-y-2 text-sm">
              <li class="flex justify-between">
                <span class="text-gray-700">Единая служба спасения</span>
                <span class="font-bold text-red-700">112</span>
              </li>
              <li class="flex justify-between">
                <span class="text-gray-700">Пожарная охрана</span>
                <span class="font-bold text-red-700">101</span>
              </li>
              <li class="flex justify-between">
                <span class="text-gray-700">Полиция</span>
                <span class="font-bold text-red-700">102</span>
              </li>
              <li class="flex justify-between">
                <span class="text-gray-700">Скорая помощь</span>
                <span class="font-bold text-red-700">103</span>
              </li>
              <li class="flex justify-between">
                <span class="text-gray-700">Газовая служба</span>
                <span class="font-bold text-red-700">104</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup>
// Моковые данные для демо
const latestNews = ref([
  {
    id: 1,
    title: 'Благоустройство городских территорий',
    excerpt: 'В рамках программы благоустройства проводятся работы по озеленению и ремонту дорожного покрытия в центральных районах города.',
    date: '2026-01-06',
    category: 'Благоустройство',
    image: null // Заглушка — потом заменим на реальное фото
  },
  {
    id: 2,
    title: 'График работы учреждений в праздничные дни',
    excerpt: 'Информация о режиме работы муниципальных учреждений и служб в период праздничных дней.',
    date: '2026-01-05',
    category: 'Объявления',
    image: null
  },
  {
    id: 3,
    title: 'Заседание городского совета',
    excerpt: 'Состоялось очередное заседание совета депутатов, на котором были рассмотрены вопросы развития городской инфраструктуры.',
    date: '2026-01-04',
    category: 'Власть',
    image: null
  },
  {
    id: 4,
    title: 'Открытие нового спортивного комплекса',
    excerpt: 'В городе открылся современный спортивный комплекс с бассейном и тренажёрным залом для жителей всех возрастов.',
    date: '2026-01-03',
    category: 'Спорт',
    image: null
  },
])
</script>
