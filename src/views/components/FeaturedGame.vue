<script lang="ts" setup>
import type { Game } from "../../shared/interfaces/Game";
import { computed } from "vue";

const props = defineProps<{
  game: Game;
}>();

const imageStyle = computed(() => ({
  backgroundImage: `url('Home/${props.game.img}.jpeg')`,
}));
</script>

<template>
  <div class="h-100 rounded-xl mb-8 bg-cover bg-center" :style="imageStyle">
    <div
      class="h-full flex flex-col justify-end p-8 bg-linear-to-t from-black/80 to-transparent"
    >
      <h1 class="text-4xl font-bold mb-2">{{ game.title }}</h1>
      <p class="text-gray-300 mb-4">{{ game.description }}</p>
      <RouterLink
        to="blackjack"
        class="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors w-36 text-center cursor-pointer"
      >
        Play Now
      </RouterLink>
    </div>
  </div>
</template>
