<script setup lang="ts">
import JoystickIcon from './icons/JoystickIcon.vue'
import HomeIcon from './icons/HomeIcon.vue'

const menuItems = [
  { id: 'home', icon: HomeIcon, label: 'Home', url: '/' },
  { id: 'games', icon: JoystickIcon, label: 'Games', url: '/games' },
]
</script>

<template>
  <ul class="w-24 bg-[#1F1F1F] min-h-[calc(100vh-4rem)] flex flex-col items-center pt-8 gap-8">
    <li v-for="item in menuItems" :key="item.id">
      <RouterLink :to="item.url"
        class="flex flex-col items-center gap-2 cursor-pointer transition-all duration-200 text-gray-400 hover:text-white">
        <component :is="item.icon" class="w-8 h-8" />
        <span class="text-xs">{{ item.label }}</span>
      </RouterLink>
    </li>
  </ul>
</template>
