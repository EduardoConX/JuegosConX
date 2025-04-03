import type { Card } from './interfaces/Card'

const generateDeck = () => {
  const suits: Card['suit'][] = ['hearts', 'diamonds', 'clubs', 'spades']
  const values: Card['value'][] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
  const deck: Card[] = []

  for (const suit of suits) {
    for (const value of values) {
      deck.push({ suit, value })
    }
  }

  return deck
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
    return Number.parseInt(card.value)
  }
}

export const waitForXSeconds = (seconds: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, seconds * 1000)
  })
}
