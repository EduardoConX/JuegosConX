<script setup lang="ts">
const props = defineProps<{
  player: number;
  image: string;
}>();
</script>

<template>
  <div class="text-center">
    <h2 class="subtitle mb-4">
      Jugador {{ props.player }}
    </h2>
    <img
      :src="`assets/dices/${props.image}.png`"
      class="block mx-auto"
      :alt="`Jugador ${props.player}`"
    />
  </div>
</template>
