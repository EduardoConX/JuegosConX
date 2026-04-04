<script setup lang="ts">
import GENERATIONS from "../data/generations";

const emit = defineEmits<{
  (e: "setGeneration", firstPokemon: number, lastPokemon: number): void;
}>();
</script>

<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div class="bg-[#0F0F0F] rounded-lg p-8 shadow-lg max-w-md">
      <h2 class="font-bold text-2xl mb-6">Select Generation</h2>
      <p class="mb-6">Choose a generation or play with all Pokémon</p>
      <div class="grid grid-cols-2 gap-3">
        <button
          v-for="gen in GENERATIONS"
          :key="gen.name"
          :disabled="!!gen.notes"
          @click="() => emit('setGeneration', gen.start, gen.end)"
          class="btn pokemon-btn"
        >
          {{ gen.name }} {{ gen.notes ? `(${gen.notes})` : "" }}
        </button>
      </div>
    </div>
  </div>
</template>
