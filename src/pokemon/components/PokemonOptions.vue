<script setup lang="ts">
import { Pokemon } from "../interfaces/pokemon";

const props = defineProps<{
  pokemons: Pokemon[];
}>();

const emits = defineEmits<{
    (e: 'selectPokemon', id: number): void
}>();
</script>

<template>
  <div class="flex justify-center">
    <ul>
      <li
        v-for="pokemon in props.pokemons"
        :key="pokemon.id"
        @click="emits('selectPokemon', pokemon.id)"
      >
        <button
          class="px-4 py-2 btn-black text-white mb-2 font-bold text-xl w-40 text-center"
        >
          {{ pokemon.name }}
        </button>
      </li>
    </ul>
  </div>
</template>
