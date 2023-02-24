<script setup lang="ts">
const props = defineProps<{
  player: string;
  points: number;
  cards: string[];
}>();
</script>

<template>
  <h2 class="subtitle mb-4 font-bold">
    {{ props.player }}
    <small class="ml-4 text-base font-normal">{{ props.points }}</small>
  </h2>
  <div class="h-60">
    <ul v-if="cards.length" class="flex flex-row">
      <li v-for="card in cards">
        <img :src="`./assets/cards/${card}.png`" class="h-60" :alt="card" />
      </li>
    </ul>
  </div>
</template>
