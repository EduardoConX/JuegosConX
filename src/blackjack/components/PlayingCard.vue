<script lang="ts" setup>
import { computed } from 'vue'
import type { Card } from '../interfaces/Card'

const props = defineProps<{
  card: Card
}>()

const textColor = computed(() => {
  if (props.card.suit === 'spades' || props.card.suit === 'clubs') {
    return 'text-black'
  } else {
    return 'text-red-500'
  }
})

const cardSymbol = computed(() => {
  if (props.card.suit === 'spades') {
    return '♠'
  } else if (props.card.suit === 'clubs') {
    return '♣'
  } else if (props.card.suit === 'hearts') {
    return '♥'
  } else {
    return '♦'
  }
})
</script>

<template>
  <div
    :class="`w-20 h-28 rounded-lg shadow-md flex flex-col justify-between p-2 select-none bg-white border border-gray-300 ${textColor}`"
  >
    <div class="flex justify-between items-center">
      <div class="text-lg font-bold">{{ card.value }}</div>
      <div class="text-lg">{{ cardSymbol }}</div>
    </div>
    <div class="text-4xl self-center">{{ cardSymbol }}</div>
    <div class="flex justify-between items-center rotate-180">
      <div class="text-lg font-bold">{{ card.value }}</div>
      <div class="text-lg">{{ cardSymbol }}</div>
    </div>
  </div>
</template>
