<template>
  <div class="container-main py-12">
    <h1 class="text-3xl font-bold mb-8">Новости</h1>
    
    <!-- Фильтры -->
    <div class="flex flex-wrap gap-4 mb-8">
      <button 
        v-for="cat in categories" 
        :key="cat"
        class="px-4 py-2 rounded-full text-sm font-medium transition-colors"
        :class="activeCategory === cat ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
        @click="activeCategory = cat"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Сетка новостей -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <NewsCard 
        v-for="news in filteredNews" 
        :key="news.id"
        :news="news"
      />
    </div>
  </div>
</template>

<script setup>
const activeCategory = ref('Все')

const categories = ['Все', 'Благоустройство', 'Объявления', 'Власть', 'Спорт', 'Культура']

const { apiBase } = useApi()
const allNews = ref([])

const { data, error } = await useFetch('/articles', { baseURL: apiBase, query: { populate: '*' } })
if (!error.value && Array.isArray(data.value?.data)) {
  allNews.value = data.value.data.map((n: any) => ({
    id: n.id,
    title: n.attributes.title,
    excerpt: n.attributes.excerpt,
    date: n.attributes.date,
    category: n.attributes.category,
    image: n.attributes.image?.url ? n.attributes.image.url : null
  }))
} else {
  allNews.value = [
    { id: 1, title: 'Благоустройство городских территорий', excerpt: 'В рамках программы благоустройства проводятся работы по озеленению.', date: '2026-01-06', category: 'Благоустройство', image: null },
    { id: 2, title: 'График работы учреждений', excerpt: 'Информация о режиме работы муниципальных учреждений.', date: '2026-01-05', category: 'Объявления', image: null },
    { id: 3, title: 'Заседание городского совета', excerpt: 'Рассмотрены вопросы развития городской инфраструктуры.', date: '2026-01-04', category: 'Власть', image: null },
    { id: 4, title: 'Открытие спортивного комплекса', excerpt: 'Современный комплекс с бассейном и тренажёрным залом.', date: '2026-01-03', category: 'Спорт', image: null },
    { id: 5, title: 'Фестиваль народного творчества', excerpt: 'Приглашаем жителей на праздничное мероприятие.', date: '2026-01-02', category: 'Культура', image: null },
    { id: 6, title: 'Ремонт дорожного покрытия', excerpt: 'Завершены работы на центральных улицах города.', date: '2026-01-01', category: 'Благоустройство', image: null }
  ]
}

const filteredNews = computed(() => {
  if (activeCategory.value === 'Все') return allNews.value
  return allNews.value.filter(n => n.category === activeCategory.value)
})
</script>
