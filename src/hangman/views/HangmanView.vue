<script setup lang="ts">
import { letters } from '../utils';
import useLetters from '../composables/useLetter';
import HangMan from '../components/HangMan.vue';
const { attempts, hiddenWord, lose, won, randomWord, usedLetters, checkLetter, newGame } = useLetters()
</script>

<template>
  <div class="text-center">
    <HangMan :attempts="attempts" class="mx-auto" />
    <h2 class="font-bold text-3xl mb-2">{{ hiddenWord }}</h2>
    <h3 class="text-2xl">Failed Attempts: {{ attempts }}</h3>
    <div class="h-8">
      <p v-if="lose" class="font-bold">You lost, the word was {{ randomWord }}</p>
      <p v-if="won" class="font-bold">Congratulations, you won</p>
    </div>
    <div class="my-4 w-4/5 mx-auto max-w-4xl">
      <button v-for="letter in letters" :key="letter" @click="() => checkLetter(letter)"
        :disabled="usedLetters.includes(letter) || lose || won" class="m-1.5 btn bg-green-500 text-black font-semibold">
        {{ letter }}
      </button>
    </div>
    <button @click="newGame" class="btn m-1.5 bg-green-500 text-black font-semibold">New Game</button>
  </div>
</template>
