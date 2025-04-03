<script setup lang="ts">
import PlayerDeck from '../components/PlayerDeck.vue'
import useCards from '../composables/useCards'
const {
  dealerCards,
  playerCards,
  dealerHandValue,
  playerHandValue,
  getHandValue,
  requestCard,
  playerTurn,
  dealerTurn,
  gameResult,
} = useCards()

const hit = () => {
  const card = requestCard()
  if (card) {
    playerCards.value.push(card)
    getHandValue(card)
  }
}

const stand = () => {
  playerTurn.value = false
  dealerTurn()
}
</script>

<template>
  <div class="min-h-[calc(100vh-64px)] bg-green-800 flex flex-col items-center justify-center p-4">
    <div class="max-w-4xl w-full bg-green-900 rounded-xl shadow-2xl p-6 relative">
      <h1 class="text-3xl font-bold text-center mb-8">Blackjack</h1>
      <PlayerDeck player="Dealer" :handValue="dealerHandValue" :hand="dealerCards" />
      <div class="h-8">
        <h2 class="text-center text-2xl font-semibold">{{ gameResult }}</h2>
      </div>
      <PlayerDeck player="Your hand" :handValue="playerHandValue" :hand="playerCards" />
      <div class="flex justify-center gap-4">
        <button @click="hit" class="btn bg-blue-500 hover:bg-blue-700" :disabled="!playerTurn">
          Hit
        </button>
        <button @click="stand" class="btn bg-red-500 hover:bg-red-700" :disabled="!playerTurn">
          Stand
        </button>
        <button class="btn bg-green-500 hover:bg-green-700">New Game</button>
      </div>
    </div>
  </div>
</template>
