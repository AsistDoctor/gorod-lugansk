<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <!-- Верхняя панель -->
    <div class="bg-primary-700 text-white py-2">
      <div class="container-main flex justify-between items-center text-sm">
        <span>Официальный сайт</span>
        <div class="flex items-center gap-4">
          <button 
            @click="toggleAccessibility"
            class="hover:underline flex items-center gap-1"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            Версия для слабовидящих
          </button>
        </div>
      </div>
    </div>

    <!-- Основная шапка -->
    <div class="container-main py-4">
      <div class="flex items-center justify-between">
        <!-- Логотип и название -->
        <NuxtLink to="/" class="flex items-center gap-3 no-underline">
          <div class="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-xl">Л</span>
          </div>
          <div>
            <p class="text-sm font-bold uppercase tracking-wide bg-gray-800 text-white px-3 py-1.5 rounded-md inline-block">
              <span>Луганская</span>
              <span class="text-blue-400">Народная</span>
              <span class="text-red-500">Республика</span>
            </p>
            <h1 class="text-lg font-bold text-gray-900 leading-tight">
              Муниципальное образование<br>
              <span class="text-base">городской округ город Луганск</span>
            </h1>
          </div>
        </NuxtLink>

        <!-- Поиск -->
        <div class="hidden md:flex items-center">
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

        <!-- Мобильное меню -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Навигация -->
    <nav class="bg-gray-50 border-t border-b border-gray-200">
      <div class="container-main">
        <ul class="hidden md:flex items-center gap-1 py-2">
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
    <div v-if="mobileMenuOpen" class="md:hidden bg-white border-b">
      <ul class="container-main py-4 space-y-2">
        <li v-for="item in menuItems" :key="item.path">
          <NuxtLink
            :to="item.path"
            class="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg no-underline"
            @click="mobileMenuOpen = false"
          >
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false)

const menuItems = [
  { title: 'Главная', path: '/' },
  { title: 'Новости', path: '/news' },
  { title: 'Наш город', path: '/city' },
  { title: 'Администрация', path: '/administration' },
  { title: 'Документы', path: '/documents' },
  { title: 'Контакты', path: '/contacts' },
]

const toggleAccessibility = () => {
  // TODO: реализовать версию для слабовидящих
  console.log('Accessibility toggle')
}
</script>
