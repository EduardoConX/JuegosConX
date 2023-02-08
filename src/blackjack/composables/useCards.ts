import _ from 'underscore';
import { onMounted, ref, watch } from 'vue';

import { waitForXSeconds } from '../../shared/helpers/utils';

let deck = <string[]>[];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

const playerCards = ref<string[]>([]);
const computerCards = ref<string[]>([]);
const playerPoints = ref(0);
const computerPoints = ref(0);
const playerTurn = ref(true);
const gameEnded = ref(false);
const message = ref('');

const createDeck = () => {
    const deck = [];
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tipos) {
        for (let esp of especiales) {
            deck.push(esp + tipo);
        }
    }

    return _.shuffle(deck);
}

const requestCard = () => {
    if (deck.length === 0) return;
    return deck.pop();
}

const getPoints = (card: string, isPlayer = true) => {
    if (isPlayer) {
        playerPoints.value = playerPoints.value + cardValue(card);
    } else {
        computerPoints.value = computerPoints.value + cardValue(card);
    }
}

const cardValue = (card: string) => {
    const value = card.substring(0, card.length - 1)
    if (especiales.includes(value)) {
        return value === "A" ? 11 : 10
    }

    return +value;
}

const computerTurn = async () => {

    do {
        await waitForXSeconds(1);
        const card = requestCard();
        if (card) {
            computerCards.value.push(card);
            getPoints(card, false);
        }
    } while ((computerPoints.value <= playerPoints.value) && (computerPoints.value <= 21));
    getWinner();
}

const getWinner = () => {
    if (playerPoints.value === computerPoints.value) {
        message.value = 'Nadie gana';
    } else if (playerPoints.value > 21) {
        message.value = 'El jugador 1 perdió';
    } else if (computerPoints.value > 21) {
        message.value = 'El jugador 1 ganó';
    } else {
        message.value = 'El jugador 1 perdió';
    }
    gameEnded.value = true;
}

const resetGame = () => {
    deck = createDeck();
    playerCards.value = [];
    computerCards.value = [];
    playerPoints.value = 0;
    computerPoints.value = 0;
    playerTurn.value = true;
    gameEnded.value = false;
    message.value = '';
}

watch(playerPoints, async () => {
    if (playerPoints.value > 21) {
        playerTurn.value = false;
        gameEnded.value = true;
        message.value = 'El jugador 1 perdió';
    }
})

const useCards = () => {
    onMounted(() => {
        deck = createDeck();
    })
    return {
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
        resetGame
    }
}

export default useCards;