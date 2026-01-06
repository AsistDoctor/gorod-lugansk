<template>
  <article class="news-card">
    <!-- Изображение -->
    <div class="news-card__image-wrapper">
      <img 
        v-if="news.image" 
        :src="news.image" 
        :alt="news.title"
        class="news-card__image"
      />
      <div v-else class="news-card__image-placeholder">
        <svg class="news-card__placeholder-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    </div>

    <!-- Контент -->
    <div class="news-card__content">
      <!-- Мета информация -->
      <div class="news-card__meta">
        <span class="news-card__category">
          {{ news.category }}
        </span>
        <time class="news-card__date">
          {{ formatDate(news.date) }}
        </time>
      </div>

      <!-- Заголовок -->
      <h3 class="news-card__title">
        <NuxtLink :to="`/news/${news.id}`" class="news-card__link">
          {{ news.title }}
        </NuxtLink>
      </h3>

      <!-- Описание -->
      <p class="news-card__excerpt">
        {{ news.excerpt }}
      </p>

      <!-- Кнопка "Читать далее" -->
      <NuxtLink :to="`/news/${news.id}`" class="news-card__read-more">
        Читать далее
        <svg class="news-card__arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
  const date = new Date(dateStr)
  return date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}
</script>

<style scoped>
/* Блок: news-card */
.news-card {
  @apply bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden;
  @apply hover:shadow-lg hover:border-gray-200 transition-all duration-300;
  @apply flex flex-col;
}

/* Элемент: image-wrapper */
.news-card__image-wrapper {
  @apply relative w-full h-32 overflow-hidden bg-gray-100;
}

.news-card__image {
  @apply w-full h-full object-cover;
  @apply transition-transform duration-300;
}

.news-card:hover .news-card__image {
  @apply scale-105;
}

.news-card__image-placeholder {
  @apply w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200;
}

.news-card__placeholder-icon {
  @apply w-10 h-10 text-gray-300;
}

/* Элемент: content */
.news-card__content {
  @apply p-4 flex flex-col flex-1;
}

/* Элемент: meta */
.news-card__meta {
  @apply flex items-center gap-2 mb-2;
}

.news-card__category {
  @apply text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full;
}

.news-card__date {
  @apply text-xs text-gray-400;
}

/* Элемент: title */
.news-card__title {
  @apply text-base font-bold text-gray-900 mb-2 leading-snug;
}

.news-card__link {
  @apply no-underline text-gray-900 hover:text-primary-600 transition-colors;
}

/* Элемент: excerpt */
.news-card__excerpt {
  @apply text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2 flex-1;
}

/* Элемент: read-more */
.news-card__read-more {
  @apply inline-flex items-center gap-1 text-sm font-medium text-primary-600;
  @apply hover:text-primary-700 no-underline transition-colors mt-auto;
}

.news-card__arrow {
  @apply w-4 h-4 transition-transform;
}

.news-card:hover .news-card__arrow {
  @apply translate-x-1;
}
</style>
