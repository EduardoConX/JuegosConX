<script setup lang="ts"></script>

<template>
  <div>
    <ul class="flex flex-col md:flex-row">
      <li class="mb-8 md:mr-4">
        <span
          class="py-2 px-4 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700"
        >
          <RouterLink to="/blackjack"> 21 Black Jack </RouterLink>
        </span>
      </li>
      <li class="mb-8 md:mr-4">
        <span
          class="py-2 px-4 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700"
        >
          <RouterLink to="/hangman"> Ahorcado </RouterLink>
        </span>
      </li>
      <li>
        <span
          class="py-2 px-4 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700"
        >
          <RouterLink to="/pokemon"> Pokémon </RouterLink>
        </span>
      </li>
    </ul>
  </div>
</template>
