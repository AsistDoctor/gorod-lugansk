<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
      <div class="container-main">
        <h1 class="text-4xl font-bold mb-4 text-white">Администрация</h1>
        <p class="text-xl text-primary-100">Структура органов местного самоуправления</p>
      </div>
    </section>

    <div class="container-main py-12">
      <!-- Глава администрации -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-6">Глава городского округа</h2>
        <div class="bg-white rounded-xl shadow-sm border p-6 flex flex-col md:flex-row gap-6">
          <div class="w-32 h-32 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
            <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-2">ФИО Главы</h3>
            <p class="text-primary-600 font-medium mb-3">Глава городского округа город Луганск</p>
            <p class="text-gray-600 text-sm">Информация о главе администрации будет добавлена позже.</p>
          </div>
        </div>
      </section>

      <!-- Структура -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-6">Структура администрации</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="dept in departments" :key="dept.name" class="bg-white rounded-xl shadow-sm border p-5 hover:shadow-md transition-shadow">
            <div class="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-3">
              <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 class="font-semibold mb-1">{{ dept.name }}</h3>
            <p class="text-sm text-gray-500">{{ dept.description }}</p>
          </div>
        </div>
      </section>

      <!-- Контакты -->
      <section>
        <h2 class="text-2xl font-bold mb-6">Контактная информация</h2>
        <div class="bg-gray-50 rounded-xl p-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-medium mb-2">Адрес</h4>
              <p class="text-gray-600">г. Луганск, ул. Примерная, д. 1</p>
            </div>
            <div>
              <h4 class="font-medium mb-2">Приёмная</h4>
              <p class="text-gray-600">+7 (XXX) XXX-XX-XX</p>
            </div>
            <div>
              <h4 class="font-medium mb-2">Email</h4>
              <p class="text-gray-600">admin@gorod-lugansk.ru</p>
            </div>
            <div>
              <h4 class="font-medium mb-2">Часы приёма</h4>
              <p class="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const departments = [
  { name: 'Управление экономики', description: 'Экономическое развитие города' },
  { name: 'Управление ЖКХ', description: 'Жилищно-коммунальное хозяйство' },
  { name: 'Управление образования', description: 'Образовательные учреждения' },
  { name: 'Управление здравоохранения', description: 'Медицинские учреждения' },
  { name: 'Управление культуры', description: 'Культурные мероприятия' },
  { name: 'Управление спорта', description: 'Спортивные объекты и мероприятия' },
]
</script>
