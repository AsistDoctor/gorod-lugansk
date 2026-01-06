<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <!-- Панель доступности (показывается когда включен режим) -->
    <div v-if="isAccessibilityMode" class="bg-black text-white py-2 border-b border-white">
      <div class="container-main flex flex-wrap items-center justify-between gap-2">
        <span class="text-sm font-medium">Версия для слабовидящих</span>
        <div class="flex items-center gap-2">
          <span class="text-xs">Размер шрифта:</span>
          <button 
            @click="setFontSize('normal')"
            class="px-2 py-1 text-sm border rounded"
            :class="fontSize === 'normal' ? 'bg-yellow-400 text-black' : ''"
          >А</button>
          <button 
            @click="setFontSize('large')"
            class="px-2 py-1 text-base border rounded"
            :class="fontSize === 'large' ? 'bg-yellow-400 text-black' : ''"
          >А</button>
          <button 
            @click="setFontSize('xlarge')"
            class="px-2 py-1 text-lg border rounded"
            :class="fontSize === 'xlarge' ? 'bg-yellow-400 text-black' : ''"
          >А</button>
          <button 
            @click="toggleAccessibility"
            class="ml-2 px-3 py-1 bg-red-600 text-white text-sm rounded"
          >Выкл.</button>
        </div>
      </div>
    </div>

    <!-- Верхняя панель -->
    <div class="bg-primary-700 text-white py-2">
      <div class="container-main flex justify-between items-center text-sm">
        <span class="hidden sm:inline">Официальный сайт</span>
        <span class="sm:hidden text-xs">Официальный сайт</span>
        <div class="flex items-center gap-2 sm:gap-4">
          <button 
            @click="toggleAccessibility"
            class="hover:underline flex items-center gap-1 text-xs sm:text-sm"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span class="hidden sm:inline">Версия для слабовидящих</span>
            <span class="sm:hidden">Для слабовидящих</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Основная шапка -->
    <div class="container-main py-3 sm:py-4">
      <div class="flex items-center justify-between">
        <!-- Логотип и название -->
        <NuxtLink to="/" class="flex items-center gap-2 sm:gap-3 no-underline flex-1 min-w-0">
          <div class="w-10 h-10 sm:w-12 sm:h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <span class="text-white font-bold text-lg sm:text-xl">Л</span>
          </div>
          <div class="min-w-0">
            <p class="text-xs sm:text-sm font-bold uppercase tracking-wide bg-gray-800 text-white px-2 sm:px-3 py-1 rounded-md inline-block">
              <span class="hidden sm:inline">Луганская</span>
              <span class="sm:hidden">ЛНР</span>
              <span class="text-blue-400 hidden sm:inline"> Народная</span>
              <span class="text-red-500 hidden sm:inline"> Республика</span>
            </p>
            <h1 class="text-sm sm:text-lg font-bold text-gray-900 leading-tight truncate">
              <span class="hidden sm:inline">Муниципальное образование</span>
              <span class="sm:hidden">г.о. Луганск</span>
            </h1>
            <p class="text-xs text-gray-600 hidden sm:block">городской округ город Луганск</p>
          </div>
        </NuxtLink>

        <!-- Поиск (только десктоп) -->
        <div class="hidden lg:flex items-center">
          <div class="relative">
            <input
              type="search"
              placeholder="Поиск по сайту..."
              class="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <svg class="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <!-- Мобильное меню кнопка -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="lg:hidden p-2 ml-2"
          aria-label="Меню"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Навигация (десктоп) -->
    <nav class="bg-gray-50 border-t border-b border-gray-200 hidden lg:block">
      <div class="container-main">
        <ul class="flex items-center gap-1 py-2">
          <li v-for="item in menuItems" :key="item.path">
            <NuxtLink
              :to="item.path"
              class="px-4 py-2 rounded-lg text-gray-700 hover:bg-primary-100 hover:text-primary-700 transition-colors no-underline block"
            >
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Мобильное меню -->
    <Transition name="slide">
      <div v-if="mobileMenuOpen" class="lg:hidden bg-white border-b shadow-lg">
        <!-- Поиск мобильный -->
        <div class="container-main py-3 border-b">
          <div class="relative">
            <input
              type="search"
              placeholder="Поиск по сайту..."
              class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <svg class="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <!-- Меню -->
        <ul class="container-main py-2">
          <li v-for="item in menuItems" :key="item.path">
            <NuxtLink
              :to="item.path"
              class="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg no-underline"
              @click="mobileMenuOpen = false"
            >
              <component :is="item.icon" class="w-5 h-5 text-gray-400" />
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { h } from 'vue'

const { isAccessibilityMode, fontSize, toggleAccessibility, setFontSize } = useAccessibility()

const mobileMenuOpen = ref(false)

const createIcon = (d) => ({
  render: () => h('svg', { 
    fill: 'none', 
    viewBox: '0 0 24 24', 
    stroke: 'currentColor', 
    class: 'w-5 h-5'
  }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d })
  ])
})

const icons = {
  home: createIcon('M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'),
  news: createIcon('M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'),
  city: createIcon('M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'),
  admin: createIcon('M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'),
  docs: createIcon('M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'),
  contacts: createIcon('M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z')
}

const menuItems = [
  { title: 'Главная', path: '/', icon: icons.home },
  { title: 'Новости', path: '/news', icon: icons.news },
  { title: 'Наш город', path: '/city', icon: icons.city },
  { title: 'Администрация', path: '/administration', icon: icons.admin },
  { title: 'Документы', path: '/documents', icon: icons.docs },
  { title: 'Контакты', path: '/contacts', icon: icons.contacts },
]

// Закрываем меню при изменении роута
const route = useRoute()
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
