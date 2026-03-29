import type { Card } from './interfaces/Card'

const suits: Card['suit'][] = ['hearts', 'diamonds', 'clubs', 'spades']
const values: Card['value'][] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

const generateDeck = (): Card[] => {
  return suits.flatMap((suit) => values.map((value) => ({ suit, value })))
}

export const shuffleDeck = () => {
  const deck = generateDeck()

  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
      ;[deck[i], deck[j]] = [deck[j], deck[i]]
  }

  return deck
}

export const getCardValue = (card: Card) => {
  if (card.value === 'A') {
    return 11
  } else if (['K', 'Q', 'J'].includes(card.value)) {
    return 10
  } else {
    return Number(card.value)
  }
}

export const waitForXSeconds = (seconds: number = 1) =>
  new Promise<void>((resolve) => setTimeout(resolve, seconds * 1000))

