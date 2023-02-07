<script setup lang="ts">
import usePokemons from "../composables/usePokemon";
import PokemonPicture from "../components/PokemonPicture.vue";
import PokemonOptions from "../components/PokemonOptions.vue";

const {
  pokemons,
  pokemon,
  showPokemon,
  level,
  hasLose,
  message,
  resets,
  resetGame,
} = usePokemons();

const checkAnswer = (pokemonId: number) => {
  showPokemon.value = true;

  if (!pokemon.value) return;
  if (pokemonId === pokemon.value.id) {
    message.value = `Correcto, ${pokemon.value.name}`;
  } else {
    hasLose.value = true;
    message.value = `Error, era ${pokemon.value.name}`;
  }
};

const handleNext = () => {
  resets.value += 1;
  if (!hasLose.value) {
    level.value++;
    return;
  }

  resetGame();
};
</script>

<template>
  <h1 class="text-center text-4xl font-bold text-white mb-4">
    Nivel {{ level }}
  </h1>
  <h1 class="text-center text-4xl font-bold text-white" v-if="!pokemon">
    Cargando...
  </h1>
  <div v-else>
    <h1 class="text-center text-4xl font-bold text-white">
      ¿Quién es este Pokémon?
    </h1>
    <PokemonPicture :pokemon-id="pokemon.id" :show-pokemon="showPokemon" />
    <h3 class="text-center text-2xl text-white mb-4 h-8">
      {{ message }}
    </h3>
    <PokemonOptions :pokemons="pokemons" @select-pokemon="checkAnswer" />
    <div class="flex justify-center">
      <button
        :disabled="!showPokemon"
        class="px-4 py-2 btn-black mb-2 font-bold text-xl w-40 text-center mt-4 disabled:"
        @click="handleNext"
      >
        {{ hasLose ? "Reiniciar" : "Siguiente" }}
      </button>
    </div>
  </div>
</template>
