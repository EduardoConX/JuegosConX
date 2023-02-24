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
          class="btn-black"
        >
          <RouterLink :to="`/${link.route}`">{{ link.name }} </RouterLink>
        </span>
      </li>
    </ul>
  </div>
</template>
