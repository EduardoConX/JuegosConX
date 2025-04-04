<script lang="ts" setup>
import type { Game } from '@/shared/interfaces/Game';

defineProps<{
    title: string,
    games: Game[]
}>()
</script>

<template>
    <h2 class="text-2xl font-bold mb-6">{{ title }}</h2>
    <div class="grid grid-cols-4 gap-6">
        <div v-for="(game, i) in games" :key="i" class="bg-[#1F1F1F] rounded-lg overflow-hidden">
            <img :src="`Home/${game.img}.jpeg`" alt="game" class="w-full h-48 object-cover" />
            <div class="p-4">
                <h3 class="font-semibold mb-1">{{ game.title }}</h3>
                <p class="text-sm text-gray-400">{{ game.description }}</p>
            </div>
        </div>
    </div>
</template>