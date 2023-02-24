<script setup lang="ts">
import { onMounted } from "vue";
import useDrums from "../composables/useDrums";

const { drums, play } = useDrums();

const onKeyDown = (event: KeyboardEvent) => {
  play(event.key);
};

onMounted(() => {
  document.addEventListener("keydown", onKeyDown);
});
</script>

<template>
  <h1 class="title mb-4">Dale batería</h1>
  <div
    class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 my-4"
  >
    <button
      v-for="drum in drums"
      class="h-40 bg-cover text-red-500 text-8xl font-bold"
      :style="`background-image: url('./assets/drums/${drum.drum}.png')`"
    >
      {{ drum.letter }}
    </button>
  </div>
</template>
