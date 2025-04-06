import { onMounted, ref, watch } from 'vue'
import axios from 'axios'
import type { Pokemon } from '../interfaces/Pokemon'
const baseURL = 'https://pokeapi.co/api/v2/pokemon'
const firstPokemon = 1
const lastPokemon = 151 //There are 1025 05/04/2025

const getRandomNumbers = () => {
  const nums = Array.from({ length: lastPokemon - firstPokemon + 1 }, (_, i) => i + firstPokemon)
  return nums.sort(() => Math.random() - 0.5)
}

const usePokemons = () => {
  const pokemons = ref<Pokemon[]>([])
  const pokemon = ref<Pokemon>()
  const showPokemon = ref(false)
  const points = ref(0)
  const hasLose = ref(false)
  const message = ref('')
  const resets = ref(0)

  const getPokemons = async () => {
    const [a, b, c, d] = getRandomNumbers()
    const promises = [
      axios.get(`${baseURL}/${a + firstPokemon}`),
      axios.get(`${baseURL}/${b + firstPokemon}`),
      axios.get(`${baseURL}/${c + firstPokemon}`),
      axios.get(`${baseURL}/${d + firstPokemon}`),
    ]
    const [p1, p2, p3, p4] = await Promise.all(promises)
    pokemons.value = [
      { id: p1.data.id, name: p1.data.name },
      { id: p2.data.id, name: p2.data.name },
      { id: p3.data.id, name: p3.data.name },
      { id: p4.data.id, name: p4.data.name },
    ]
  }

  const getPokemon = () => {
    if (pokemons.value.length) {
      const randomInt = Math.floor(Math.random() * 4)
      pokemon.value = pokemons.value[randomInt]
    }
  }

  const resetGame = () => {
    showPokemon.value = false
    hasLose.value = false
    message.value = ''
    points.value = 0
    pokemons.value = []
    pokemon.value = undefined
  }

  watch(resets, async () => {
    pokemon.value = undefined
    showPokemon.value = false
    message.value = ''
    await getPokemons()
    getPokemon()
  })

  onMounted(async () => {
    await getPokemons()
    getPokemon()
  })

  return {
    pokemons,
    pokemon,
    showPokemon,
    points,
    hasLose,
    message,
    resets,
    resetGame,
  }
}

export default usePokemons
