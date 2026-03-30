<script setup lang="ts">
import useSimon from "../composables/useSimon";
import GameButton from "../components/GameButton.vue";
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
  <div class="text-center pt-12">
    <h2 class="font-bold text-3xl mb-2">Simon Says</h2>
    <div :class="`${hasLose ? 'flash-element' : ''}`">
      <h3 class="font-semibold text-2xl">{{ message }} {{ level }}</h3>
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
        <button @click="newGame" class="btn text-4xl text-white">
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
  </div>
</template>
