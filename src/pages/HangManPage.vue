<script setup lang="ts">
import { ref } from "vue";
import { letters } from "../helpers/letters";
import { getRandomWord } from "../helpers/getRandomWord";
import HangImage from "../components/HangImage.vue";

const attempts = ref(0);
const word = ref(getRandomWord());
const hiddenWord = ref("_ ".repeat(word.value.length));
const lose = ref(false);
const won = ref(false);

const checkLetter = (letter: string) => {
  if (lose.value) return;
  if (won.value) return;

  if (!word.value.includes(letter)) {
    attempts.value = Math.min(attempts.value + 1, 9);
    if (attempts.value >= 9) lose.value = true;
    return;
  }

  const hiddenWordArray = hiddenWord.value.split(" ");

  for (let i = 0; i < word.value.length; i++) {
    if (word.value[i] === letter) {
      hiddenWordArray[i] = letter;
    }
  }
  hiddenWord.value = hiddenWordArray.join(" ");
  const currentHiddenWord = hiddenWord.value.split(" ").join("");

  if (currentHiddenWord == word.value) won.value = true;
};

const newGame = () => {
  word.value = getRandomWord();
  hiddenWord.value = "_ ".repeat(word.value.length);
  attempts.value = 0;
  lose.value = false;
  won.value = false;
};
</script>

<template>
  <div class="text-center text-white text-2xl">
    <HangImage :attempts="attempts" />
    <h2 class="font-bold text-3xl mb-2">{{ hiddenWord }}</h2>
    <h3 class="font-bold">Intentos: {{ attempts }}</h3>
    <p v-if="lose">Usted ha perdido, la palabra era {{ word }}</p>
    <p v-if="won">Usted ha ganado, felicidades</p>
    <div class="my-4">
      <button
        v-for="letter in letters"
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
