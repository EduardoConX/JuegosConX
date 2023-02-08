<script setup lang="ts">
import useCards from "../composables/useCards";
import Deck from "../components/Deck.vue";

const {
  playerCards,
  computerCards,
  playerPoints,
  computerPoints,
  playerTurn,
  gameEnded,
  message,
  requestCard,
  getPoints,
  computerTurn,
  resetGame,
} = useCards();

const hadleRequest = () => {
  const card = requestCard();
  if (card) {
    playerCards.value.push(card);
    getPoints(card);
  }
};

const handleStop = () => {
  playerTurn.value = false;
  computerTurn();
};
</script>

<template>
  <Deck player="Computadora" :cards="computerCards" :points="computerPoints" />
  <Deck player="Jugador 1" :cards="playerCards" :points="playerPoints" />
  <h2 class="text-2xl text-white mb-4 font-bold h-8">{{ message }}</h2>
  <ul class="flex flex-row justify-evenly">
    <li>
      <button class="btn-black" @click="hadleRequest" :disabled="!playerTurn">
        Pedir carta
      </button>
    </li>
    <li>
      <button class="btn-black" @click="handleStop" :disabled="!playerTurn">
        Detener
      </button>
    </li>
    <li>
      <button class="btn-black" :disabled="!gameEnded" @click="resetGame">
        Nuevo juego
      </button>
    </li>
  </ul>
</template>
