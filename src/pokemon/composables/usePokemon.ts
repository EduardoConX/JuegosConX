import { onMounted, ref, watch } from 'vue';
import axios from 'axios';
import { Pokemon } from '../interfaces/pokemon';

const pokemons = ref<Pokemon[]>([]);
const pokemon = ref<Pokemon>();
const showPokemon = ref(false);
const level = ref(1);
const hasLose = ref(false);
const message = ref('');
const resets = ref(0);

const baseURL = 'https://pokeapi.co/api/v2/pokemon';

const getRandomNumbers = () => {
    const randomNumbers = Array.from(Array(650).keys());
    return randomNumbers.sort(() => Math.random() - 0.5);
}

const getPokemons = async () => {
    const [a, b, c, d] = getRandomNumbers();

    const promises = [
        axios.get(`${baseURL}/${a + 1}`),
        axios.get(`${baseURL}/${b + 1}`),
        axios.get(`${baseURL}/${c + 1}`),
        axios.get(`${baseURL}/${d + 1}`),
    ];

    const [p1, p2, p3, p4] = await Promise.all(promises);

    pokemons.value = [
        { name: p1.data.name, id: p1.data.id },
        { name: p2.data.name, id: p2.data.id },
        { name: p3.data.name, id: p3.data.id },
        { name: p4.data.name, id: p4.data.id },
    ];
}

const getPokemon = () => {
    if (pokemons.value.length) {
        const randomInt = Math.floor(Math.random() * 4)
        pokemon.value = pokemons.value[randomInt];
    }
}

const resetGame = () => {
    pokemons.value = [];
    pokemon.value = undefined;
    showPokemon.value = false;
    hasLose.value = false;
    message.value = '';
    if (level.value != 1) level.value = 1;
}

watch(resets, async () => {
    pokemon.value = undefined;
    showPokemon.value = false;
    message.value = '';
    await getPokemons();
    getPokemon();
});

const usePokemons = () => {
    onMounted(async () => {
        if (level.value != 1) level.value = 1;
        if (!pokemon.value) {
            await getPokemons();
            getPokemon();
        }
    });
    return {
        pokemons,
        pokemon,
        showPokemon,
        level,
        hasLose,
        message,
        resets,
        resetGame
    }
}

export default usePokemons;