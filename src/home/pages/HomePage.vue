<script setup lang="ts">
interface Link {
  route: string;
  name: string;
}
const links = <Link[]>[
  {
    route: "blackjack",
    name: "21 Black Jack",
  },
  {
    route: "hangman",
    name: "Ahorcado",
  },
  {
    route: "pokemon",
    name: "Pokémon",
  },
  {
    route: "drums",
    name: "Batería",
  },
  {
    route: "dices",
    name: "Dados",
  },
  {
    route: "simonSays",
    name: "Simón Dice",
  },
];
</script>

<template>
  <div>
    <ul class="flex flex-col md:flex-row">
      <li v-for="link in links" class="mb-8 md:mr-4">
        <span
          class="py-2 px-4 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700"
        >
          <RouterLink :to="`/${link.route}`">{{ link.name }} </RouterLink>
        </span>
      </li>
    </ul>
  </div>
</template>
