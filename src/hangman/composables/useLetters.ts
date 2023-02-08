import { ref } from "vue";
import { getRandomWord } from "../helpers/getRandomWord";

const attempts = ref(0);
const word = ref(getRandomWord());
const hiddenWord = ref("_ ".repeat(word.value.length));
const lose = ref(false);
const won = ref(false);
const usedLetters = ref<string[]>([]);

const checkLetter = (letter: string) => {
    usedLetters.value.push(letter);
    if (lose.value) return;
    if (won.value) return;

    if (!word.value.includes(letter)) {
        attempts.value = Math.min(attempts.value + 1, 9);
        if (attempts.value >= 9) lose.value = true;
        return;
    }

    const hiddenWordArray = hiddenWord.value.split(" ");

    for (let i = 0; i < word.value.length; i++) {
        if (word.value[i] === letter) {
            hiddenWordArray[i] = letter;
        }
    }
    hiddenWord.value = hiddenWordArray.join(" ");
    const currentHiddenWord = hiddenWord.value.split(" ").join("");

    if (currentHiddenWord == word.value) won.value = true;
};

const newGame = () => {
    word.value = getRandomWord();
    hiddenWord.value = "_ ".repeat(word.value.length);
    attempts.value = 0;
    lose.value = false;
    won.value = false;
    usedLetters.value = [];
};

const useLetters = () => {
    return {
        word,
        hiddenWord,
        attempts,
        won,
        lose,
        usedLetters,
        checkLetter,
        newGame
    }
}

export default useLetters;