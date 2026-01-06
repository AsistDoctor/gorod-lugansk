<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
      <div class="container-main">
        <h1 class="text-4xl font-bold mb-4 text-white">Контакты</h1>
        <p class="text-xl text-primary-100">Свяжитесь с администрацией города</p>
      </div>
    </section>

    <div class="container-main py-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Контактная информация -->
        <div class="space-y-6">
          <div class="bg-white rounded-xl shadow-sm border p-6">
            <h2 class="text-xl font-bold mb-4">Администрация города</h2>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-primary-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p class="font-medium">Адрес</p>
                  <p class="text-gray-600">г. Луганск, ул. Примерная, д. 1</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-primary-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p class="font-medium">Телефон приёмной</p>
                  <p class="text-gray-600">+7 (XXX) XXX-XX-XX</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-primary-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p class="font-medium">Email</p>
                  <p class="text-gray-600">info@gorod-lugansk.ru</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-primary-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p class="font-medium">Часы работы</p>
                  <p class="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                  <p class="text-gray-600">Сб-Вс: выходной</p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Экстренные службы -->
          <div class="bg-red-50 rounded-xl border border-red-200 p-6">
            <h2 class="text-xl font-bold mb-4 text-red-800">Экстренные службы</h2>
            <ul class="space-y-2">
              <li class="flex justify-between"><span>Единая служба спасения</span><span class="font-bold text-red-700">112</span></li>
              <li class="flex justify-between"><span>Пожарная охрана</span><span class="font-bold text-red-700">101</span></li>
              <li class="flex justify-between"><span>Полиция</span><span class="font-bold text-red-700">102</span></li>
              <li class="flex justify-between"><span>Скорая помощь</span><span class="font-bold text-red-700">103</span></li>
              <li class="flex justify-between"><span>Газовая служба</span><span class="font-bold text-red-700">104</span></li>
            </ul>
          </div>
        </div>

        <!-- Форма обратной связи -->
        <div class="bg-white rounded-xl shadow-sm border p-6">
          <h2 class="text-xl font-bold mb-4">Обратная связь</h2>
          <form class="space-y-4">
            <div>
              <label class="block text-sm font-medium mb-1">Ваше имя</label>
              <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Email</label>
              <input type="email" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Тема обращения</label>
              <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option>Вопрос</option>
                <option>Предложение</option>
                <option>Жалоба</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Сообщение</label>
              <textarea rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"></textarea>
            </div>
            <button type="submit" class="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
