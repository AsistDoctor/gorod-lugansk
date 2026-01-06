<template>
  <article class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all duration-300 flex flex-col group">
    <!-- Изображение -->
    <div class="relative w-full h-32 overflow-hidden bg-gray-100">
      <img 
        v-if="news.image" 
        :src="news.image" 
        :alt="news.title"
        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div v-else class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
        <svg class="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    </div>

    <!-- Контент -->
    <div class="p-4 flex flex-col flex-1">
      <!-- Мета информация -->
      <div class="flex items-center gap-2 mb-2">
        <span class="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">
          {{ news.category }}
        </span>
        <time class="text-xs text-gray-400">
          {{ formatDate(news.date) }}
        </time>
      </div>

      <!-- Заголовок -->
      <h3 class="text-base font-bold text-gray-900 mb-2 leading-snug">
        <NuxtLink :to="`/news/${news.id}`" class="no-underline text-gray-900 hover:text-primary-600 transition-colors">
          {{ news.title }}
        </NuxtLink>
      </h3>

      <!-- Описание -->
      <p class="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2 flex-1">
        {{ news.excerpt }}
      </p>

      <!-- Кнопка "Читать далее" -->
      <NuxtLink :to="`/news/${news.id}`" class="inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700 no-underline transition-colors mt-auto group/link">
        Читать далее
        <svg class="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </NuxtLink>
    </div>
  </article>
</template>

<script setup>
defineProps({
  news: {
    type: Object,
    required: true
  }
})

const formatDate = (dateStr) => {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC' // Force UTC to avoid timezone mismatches since input is YYYY-MM-DD
  })
}
</script>
