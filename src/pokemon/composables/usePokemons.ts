import { ref, watch } from "vue";
import axios from "axios";
import type { Pokemon } from "../interfaces/Pokemon";
const baseURL = "https://pokeapi.co/api/v2/pokemon";

const usePokemons = () => {
  const pokemons = ref<Pokemon[]>([]);
  const pokemon = ref<Pokemon>();
  const showPokemon = ref(false);
  const points = ref(0);
  const hasLose = ref(false);
  const message = ref("");
  const resets = ref(0);
  const currentFirstPokemon = ref(1);
  const currentLastPokemon = ref(1025); //There are 1025 03/04/2026
  const showGenerationModal = ref(true);

  const getRandomNumbers = () => {
    const nums = Array.from(
      { length: currentLastPokemon.value - currentFirstPokemon.value + 1 },
      (_, i) => i + currentFirstPokemon.value,
    );
    return nums.sort(() => Math.random() - 0.5);
  };

  const getPokemons = async () => {
    const [a, b, c, d] = getRandomNumbers();
    const promises = [
      axios.get(`${baseURL}/${a}`),
      axios.get(`${baseURL}/${b}`),
      axios.get(`${baseURL}/${c}`),
      axios.get(`${baseURL}/${d}`),
    ];
    const [p1, p2, p3, p4] = await Promise.all(promises);
    pokemons.value = [
      { id: p1.data.id, name: p1.data.name },
      { id: p2.data.id, name: p2.data.name },
      { id: p3.data.id, name: p3.data.name },
      { id: p4.data.id, name: p4.data.name },
    ];
  };

  const getPokemon = () => {
    if (pokemons.value.length) {
      const randomInt = Math.floor(Math.random() * 4);
      pokemon.value = pokemons.value[randomInt];
    }
  };

  const resetGame = () => {
    showPokemon.value = false;
    hasLose.value = false;
    message.value = "";
    points.value = 0;
    pokemons.value = [];
    pokemon.value = undefined;
    showGenerationModal.value = true;
  };

  const setPokemonValues = async (firstP: number, lastP: number) => {
    currentFirstPokemon.value = firstP;
    currentLastPokemon.value = lastP;
    showGenerationModal.value = false;
    resets.value++;
  };

  watch(resets, async () => {
    pokemon.value = undefined;
    showPokemon.value = false;
    message.value = "";
    await getPokemons();
    getPokemon();
  });

  return {
    pokemons,
    pokemon,
    showPokemon,
    points,
    hasLose,
    message,
    resets,
    showGenerationModal,
    resetGame,
    setPokemonValues,
    currentFirstPokemon,
    currentLastPokemon,
  };
};

export default usePokemons;
