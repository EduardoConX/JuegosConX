<script setup lang="ts">
import { computed } from "vue";
const props = defineProps<{
  pokemonId: number;
  showPokemon: boolean;
}>();
const imgSrc = computed(
  () =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemonId}.svg`
);
</script>

<template>
  <div class="h-60 mt-12">
    <img
      v-if="!showPokemon"
      :src="imgSrc"
      alt="pokémon"
      class="hidden-pokemon mx-auto"
    />
    <img v-else :src="imgSrc" alt="pokémon" class="mx-auto" />
  </div>
</template>

<style scoped>
img {
  height: 200px;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon {
  filter: brightness(0);
}
</style>
