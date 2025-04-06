<script lang="ts" setup>
import { computed } from 'vue';
import usePokemons from '../composables/usePokemons';
const { pokemons, pokemon, points, hasLose, message, resets, showPokemon, resetGame } = usePokemons();
const imgSrc = computed(() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.value?.id}.svg`)
const selectPokemon = (id: number) => {
  showPokemon.value = true;
  if (!pokemon.value) return

  if (pokemon.value.id === id) {
    message.value = `Right, it's ${pokemon.value.name}`;
  } else {
    message.value = `Wrong, it's ${pokemon.value.name}`;
    hasLose.value = true;
  }
}

const handleNext = () => {
  resets.value++;
  if (!hasLose.value) {
    points.value++;
    return
  }
  resetGame();
}
</script>

<template>
  <div class="text-center pt-12">
    <h2 v-if="!pokemon" class="font-bold text-3xl mb-2">Loading...</h2>
    <div v-else>
      <h2 class="font-bold text-3xl mb-2">Who's that Pokémon?</h2>
      <h3 class="text-2xl font-semibold">Points: {{ points }}</h3>
      <div class="h-60 mt-12">
        <img :src="imgSrc" :alt="showPokemon ? pokemon.name : 'Hidden Pokémon'"
          :class="`select-none h-50 mx-auto transition duration-500 ${!showPokemon ? 'brightness-0' : ''}`" />
      </div>
      <h3 class="text-center text-xl text-white mb-4 h-8">
        {{ message }}
      </h3>
      <div class="flex flex-col gap-4 items-center">
        <ul class="grid grid-cols-2 gap-2">
          <li v-for="pokemon in pokemons" :key="pokemon.id">
            <button @click="selectPokemon(pokemon.id)" class="btn bg-green-500 text-black font-semibold w-36"
              :disabled="hasLose">
              {{ pokemon.name }}
            </button>
          </li>
        </ul>
        <button @click="handleNext" class="btn bg-green-500 text-black font-semibold w-40 text-center"
          :disabled="!showPokemon">{{ hasLose ? 'New Game' : 'Next' }}</button>
      </div>
    </div>
  </div>
</template>
