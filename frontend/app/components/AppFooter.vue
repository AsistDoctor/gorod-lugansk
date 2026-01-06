<template>
  <footer class="bg-gray-800 text-gray-300">
    <div class="container-main py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- О сайте -->
        <div class="md:col-span-2">
          <h3 class="text-white font-semibold text-lg mb-4">
            Городской округ Луганск
          </h3>
          <p class="text-sm leading-relaxed">
            Официальный сайт муниципального образования городской округ город Луганск 
            Луганской Народной Республики
          </p>
        </div>

        <!-- Быстрые ссылки -->
        <div>
          <h4 class="text-white font-semibold mb-4">Разделы</h4>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/news" class="hover:text-white transition-colors">Новости</NuxtLink></li>
            <li><NuxtLink to="/documents" class="hover:text-white transition-colors">Документы</NuxtLink></li>
            <li><NuxtLink to="/administration" class="hover:text-white transition-colors">Администрация</NuxtLink></li>
            <li><NuxtLink to="/contacts" class="hover:text-white transition-colors">Контакты</NuxtLink></li>
          </ul>
        </div>

        <!-- Контакты -->
        <div>
          <h4 class="text-white font-semibold mb-4">Контакты</h4>
          <ul class="space-y-2 text-sm">
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              г. Луганск, ЛНР
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@gorod-lugansk.ru
            </li>
          </ul>

          <!-- Соцсети -->
          <div class="flex gap-3 mt-4">
            <a href="#" class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
              <span class="text-xs">VK</span>
            </a>
            <a href="#" class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
              <span class="text-xs">TG</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Копирайт -->
    <div class="border-t border-gray-700">
      <div class="container-main py-4 text-sm text-center">
        © {{ new Date().getFullYear() }} Городской округ Луганск. Все права защищены.
      </div>
    </div>
  </footer>
</template>
