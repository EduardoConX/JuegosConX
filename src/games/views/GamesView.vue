<script setup lang="ts">
import GamesList from '@/components/GamesList.vue';
import SideBar from '@/components/SideBar.vue'
import { games } from '@/data/games';
</script>

<template>
    <div class="flex">
        <SideBar />
        <main class="flex-1 p-8">
            <GamesList title="All Games" :games="games" />
        </main>
    </div>
</template>
