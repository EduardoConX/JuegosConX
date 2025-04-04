import { ref } from 'vue'
import { getRandomWord } from '../utils'

const useLetters = () => {
  const attempts = ref(0)
  const randomWord = ref(getRandomWord())
  const hiddenWord = ref('_ '.repeat(randomWord.value.length))
  const lose = ref(false)
  const won = ref(false)
  const usedLetters = ref<string[]>([])
  const maxAttempts = 9

  const checkLetter = (letter: string) => {
    usedLetters.value.push(letter)
    if (lose.value || won.value) return
    if (!randomWord.value.includes(letter)) {
      attempts.value++
      if (attempts.value >= maxAttempts) lose.value = true
      return
    }

    const hiddenWordArray = hiddenWord.value.split(' ')
    for (let i = 0; i < randomWord.value.length; i++) {
      if (randomWord.value[i] === letter) {
        hiddenWordArray[i] = letter
      }
    }
    hiddenWord.value = hiddenWordArray.join(' ')
    const currentHiddenWord = hiddenWord.value.split(' ').join('')
    if (currentHiddenWord === randomWord.value) won.value = true
  }

  const newGame = () => {
    attempts.value = 0
    randomWord.value = getRandomWord()
    hiddenWord.value = '_ '.repeat(randomWord.value.length)
    lose.value = false
    won.value = false
    usedLetters.value = []
  }

  return {
    randomWord,
    attempts,
    hiddenWord,
    lose,
    won,
    usedLetters,
    checkLetter,
    newGame,
  }
}

export default useLetters
