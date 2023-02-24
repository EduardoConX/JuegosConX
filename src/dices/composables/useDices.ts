import { ref } from 'vue';
const dice1 = ref('dice');
const dice2 = ref('dice');
const message = ref('');

const toss = () => {
    const number1 = Math.round(Math.random() * 5 + 1);
    const number2 = Math.round(Math.random() * 5 + 1);
    dice1.value = `dice${number1}`;
    dice2.value = `dice${number2}`;
    if (number1 == number2) {
        message.value = "Empate"
    } else if (number1 > number2) {
        message.value = "Jugador 1 gana"
    } else {
        message.value = "Jugador 2 gana"
    }
}

const useDices = () => {
    return {
        dice1,
        dice2,
        message,
        toss
    }
}

export default useDices;