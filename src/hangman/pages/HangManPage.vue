<script setup lang="ts">
import { letters } from "../helpers/letters";
import HangImage from "../components/HangImage.vue";
import useLetters from "../composables/useLetters";

const {
  word,
  hiddenWord,
  attempts,
  won,
  lose,
  usedLetters,
  checkLetter,
  newGame,
} = useLetters();
</script>

<template>
  <div class="text-center text-white text-2xl">
    <HangImage :attempts="attempts" />
    <h2 class="font-bold text-3xl mb-2">{{ hiddenWord }}</h2>
    <h3>Intentos fallidos: {{ attempts }}</h3>
    <div class="h-8">
      <p class="font-bold" v-if="lose">
        Usted ha perdido, la palabra era {{ word }}
      </p>
      <p class="font-bold" v-if="won">Usted ha ganado, felicidades</p>
    </div>
    <div class="my-4">
      <button
        v-for="letter in letters"
        :disabled="usedLetters.includes(letter)"
        :key="letter"
        @click="() => checkLetter(letter)"
        class="m-1.5 btn-black"
      >
        {{ letter }}
      </button>
    </div>
    <button @click="newGame" class="m-1.5 btn-black">Nuevo juego</button>
  </div>
</template>
