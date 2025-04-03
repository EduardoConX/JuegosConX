import { onMounted, ref, watch } from 'vue'
import type { Card } from '../interfaces/Card'
import { getCardValue, shuffleDeck } from '../utils'

const useCards = () => {
  let deck: Card[] = []
  const dealerCards = ref<Card[]>([])
  const playerCards = ref<Card[]>([])
  const dealerHandValue = ref(0)
  const playerHandValue = ref(0)
  const playerTurn = ref(true)
  const gameResult = ref('')

  onMounted(() => {
    deck = shuffleDeck()
  })

  const getHandValue = (card: Card, isPlayer = true) => {
    if (isPlayer) {
      playerHandValue.value = playerHandValue.value + getCardValue(card)
    } else {
      dealerHandValue.value = dealerHandValue.value + getCardValue(card)
    }
  }

  const requestCard = () => {
    if (deck.length === 0) return
    return deck.pop()
  }

  const getWiner = () => {
    if (playerHandValue.value === dealerHandValue.value) {
      gameResult.value = 'Tie'
    } else if (playerHandValue.value > 21) {
      gameResult.value = 'Dealer wins'
    } else if (dealerHandValue.value > 21) {
      gameResult.value = 'You win'
    } else {
      gameResult.value = 'Dealer wins'
    }
  }

  const dealerTurn = () => {
    do {
      const card = requestCard()
      if (card) {
        dealerCards.value.push(card)
        getHandValue(card, false)
      }
    } while (dealerHandValue.value <= playerHandValue.value && dealerHandValue.value < 21)
    getWiner()
  }

  const resetGame = () => {
    deck = shuffleDeck()
    dealerCards.value = []
    playerCards.value = []
    dealerHandValue.value = 0
    playerHandValue.value = 0
    playerTurn.value = true
    gameResult.value = ''
  }

  watch(playerHandValue, () => {
    if (playerHandValue.value > 21) {
      playerTurn.value = false
      gameResult.value = 'Dealer wins'
    }
  })

  return {
    dealerCards,
    playerCards,
    dealerHandValue,
    playerHandValue,
    getHandValue,
    requestCard,
    playerTurn,
    dealerTurn,
    gameResult,
    resetGame,
  }
}

export default useCards
