<script lang="ts" setup>
import type { Card } from '../interfaces/Card'
import PlayingCard from './PlayingCard.vue'

defineProps<{
  player: string
  handValue: number
  hand: Card[]
}>()
</script>

<template>
  <div class="mb-8">
    <h2 class="text-xl font-semibold mb-2">{{ player }}: {{ handValue }}</h2>
    <div class="flex flex-wrap gap-2 justify-center h-28">
      <PlayingCard v-for="card in hand" :key="`${card.suit}-${card.value}`" :card="card" />
    </div>
  </div>
</template>
