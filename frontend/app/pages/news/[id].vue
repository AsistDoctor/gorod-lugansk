<template>
  <div class="container-main py-12">
    <NuxtLink to="/news" class="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-6">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      Назад к новостям
    </NuxtLink>

    <article class="max-w-3xl">
      <div class="mb-6">
        <span class="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
          {{ news.category }}
        </span>
        <time class="text-sm text-gray-500 ml-3">{{ formatDate(news.date) }}</time>
      </div>

      <h1 class="text-3xl font-bold mb-6">{{ news.title }}</h1>

      <!-- Заглушка для изображения -->
      <div class="w-full h-64 bg-gray-200 rounded-xl mb-8 flex items-center justify-center">
        <svg class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>

      <div class="prose prose-lg max-w-none">
        <p>{{ news.content }}</p>
        <p>Это демонстрационный текст новости. В реальной версии здесь будет полный текст статьи, загруженный из CMS Strapi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </article>
  </div>
</template>

<script setup>
const route = useRoute()

const news = ref({
  id: route.params.id,
  title: 'Пример новости',
  category: 'Объявления',
  date: '2026-01-06',
  content: 'Полный текст новости будет загружаться из базы данных.'
})

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })
}
</script>
