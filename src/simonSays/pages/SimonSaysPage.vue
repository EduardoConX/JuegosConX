<script setup lang="ts">
import "animate.css";
import GameButton from "../components/GameButton.vue";
import useSimon from "../composables/useSimon";
import { buttons } from "../enums/buttons";

const {
  message,
  level,
  hasLose,
  buttonText,
  shakeGreen,
  shakeRed,
  shakeYellow,
  shakeBlue,
  newGame,
  giveAnswer,
} = useSimon();
</script>

<template>
  <div :class="`${hasLose ? 'animate__animated animate__flash' : ''}`">
    <h1 class="text-center text-4xl font-bold text-white mb-4">Simón dice</h1>
    <h2 class="text-2xl text-white text-center mb-4 font-bold h-8">
      {{ message }} {{ level }}
    </h2>
    <div class="w-full flex justify-center">
      <GameButton
        @click="() => giveAnswer('green')"
        :is-shaking="shakeGreen"
        :shape="buttons[0].shape"
        :color="buttons[0].color"
      />
      <GameButton
        @click="() => giveAnswer('red')"
        :is-shaking="shakeRed"
        :shape="buttons[1].shape"
        :color="buttons[1].color"
        :align-left="true"
      />
    </div>
    <div class="w-full flex justify-center">
      <button @click="newGame" class="text-4xl text-white">
        {{ buttonText }}
      </button>
    </div>
    <div class="w-full flex justify-center">
      <GameButton
        @click="() => giveAnswer('yellow')"
        :is-shaking="shakeYellow"
        :shape="buttons[2].shape"
        :color="buttons[2].color"
      />
      <GameButton
        @click="() => giveAnswer('blue')"
        :is-shaking="shakeBlue"
        :shape="buttons[3].shape"
        :color="buttons[3].color"
        :align-left="true"
      />
    </div>
  </div>
</template>
