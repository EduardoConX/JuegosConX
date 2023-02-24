<script setup lang="ts">
import DicePlayer from "../components/DicePlayer.vue";
import useDices from "../composables/useDices";
const { dice1, dice2, message, toss } = useDices();
</script>

<template>
  <h1 class="title mb-4">Dados</h1>
  <div class="grid grid-cols-2 gap-4 mt-4 mb-16">
    <DicePlayer :player="1" :image="dice1" />
    <DicePlayer :player="2" :image="dice2" />
  </div>
  <h2 class="subtitle text-center mb-4 h-8">
    {{ message }}
  </h2>
  <div class="w-full flex justify-center">
    <button @click="toss" class="btn-black text-4xl">Tirar dados</button>
  </div>
</template>
