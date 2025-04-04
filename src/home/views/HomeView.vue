<script setup lang="ts">
import SideBar from '@/shared/components/SideBar.vue'
import GamesList from '@/shared/components/GamesList.vue';
import FeaturedGame from '../components/FeaturedGame.vue'
import { games } from '@/data/games';
const featuredGame = games[Math.floor(Math.random() * games.length)];
</script>

<template>
  <div class="flex">
    <SideBar />
    <main class="flex-1 p-8">
      <FeaturedGame :game="featuredGame" />
      <GamesList title="Recently Added" :games="games" />
    </main>
  </div>
</template>
