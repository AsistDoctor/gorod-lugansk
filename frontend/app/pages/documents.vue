<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-10 sm:py-16">
      <div class="container-main">
        <h1 class="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 text-white">Документы</h1>
        <p class="text-lg sm:text-xl text-primary-100">Нормативные правовые акты городского округа</p>
      </div>
    </section>

    <div class="container-main py-8 sm:py-12">
      <!-- Фильтры -->
      <div class="flex flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-8">
        <button 
          v-for="type in docTypes" 
          :key="type.value"
          class="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors"
          :class="activeType === type.value ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
          @click="activeType = type.value"
        >
          {{ type.label }}
        </button>
      </div>

      <!-- Поиск -->
      <div class="mb-6 sm:mb-8">
        <input 
          v-model="searchQuery"
          type="search" 
          placeholder="Поиск по документам..."
          class="w-full md:w-96 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm sm:text-base"
        />
      </div>

      <!-- Список документов -->
      <div class="space-y-4">
        <div 
          v-for="doc in filteredDocs" 
          :key="doc.id"
          class="bg-white rounded-xl shadow-sm border p-4 sm:p-5 hover:shadow-md transition-shadow flex flex-col sm:flex-row items-start gap-4"
        >
          <div class="flex items-start gap-4 w-full sm:w-auto">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="flex-1 sm:hidden">
              <div class="flex items-center gap-2 mb-1">
                <span class="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-0.5 rounded">{{ doc.type }}</span>
                <span class="text-xs text-gray-400">{{ doc.date }}</span>
              </div>
              <h3 class="font-semibold mb-1 text-sm">{{ doc.title }}</h3>
              <p class="text-xs text-gray-500">{{ doc.number }}</p>
            </div>
          </div>

          <div class="flex-1 hidden sm:block">
            <div class="flex items-center gap-2 mb-1">
              <span class="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-0.5 rounded">{{ doc.type }}</span>
              <span class="text-xs text-gray-400">{{ doc.date }}</span>
            </div>
            <h3 class="font-semibold mb-1">{{ doc.title }}</h3>
            <p class="text-sm text-gray-500">{{ doc.number }}</p>
          </div>
          
          <button class="w-full sm:w-auto px-4 py-2 text-sm font-medium text-primary-600 hover:bg-primary-50 rounded-lg transition-colors border sm:border-transparent border-gray-100 mt-2 sm:mt-0 flex justify-center items-center gap-2">
            <span>Скачать PDF</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Пагинация заглушка -->
      <div class="flex justify-center mt-8 gap-2">
        <button class="px-4 py-2 bg-primary-600 text-white rounded-lg">1</button>
        <button class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">2</button>
        <button class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">3</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { apiBase } = useApi()

const activeType = ref(route.query.type || 'all')
const searchQuery = ref('')

const docTypes = [
  { value: 'all', label: 'Все документы' },
  { value: 'orders', label: 'Распоряжения' },
  { value: 'resolutions', label: 'Постановления' },
  { value: 'projects', label: 'Проекты' },
]

const documents = ref([])

const { data, error } = await useFetch('/documents', { baseURL: apiBase })
if (!error.value && Array.isArray(data.value?.data)) {
  documents.value = data.value.data.map((d: any) => ({
    id: d.id,
    title: d.attributes.title,
    number: d.attributes.number,
    type: d.attributes.type,
    typeValue: d.attributes.typeValue,
    date: d.attributes.date
  }))
} else {
  documents.value = [
    { id: 1, title: 'О благоустройстве территории', number: '№ 123 от 01.01.2026', type: 'Распоряжение', typeValue: 'orders', date: '01.01.2026' },
    { id: 2, title: 'Об утверждении бюджета', number: '№ 45 от 15.12.2025', type: 'Постановление', typeValue: 'resolutions', date: '15.12.2025' },
    { id: 3, title: 'О проведении мероприятий', number: '№ 124 от 02.01.2026', type: 'Распоряжение', typeValue: 'orders', date: '02.01.2026' },
    { id: 4, title: 'Проект развития инфраструктуры', number: 'Проект № 12', type: 'Проект', typeValue: 'projects', date: '10.12.2025' },
    { id: 5, title: 'О режиме работы учреждений', number: '№ 46 от 20.12.2025', type: 'Постановление', typeValue: 'resolutions', date: '20.12.2025' }
  ]
}

const filteredDocs = computed(() => {
  let result = documents.value
  if (activeType.value !== 'all') {
    result = result.filter(d => d.typeValue === activeType.value)
  }
  if (searchQuery.value) {
    result = result.filter(d => d.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
  }
  return result
})
</script>
