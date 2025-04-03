<template>
  <div class="h-[400px] rounded-xl mb-8 bg-cover bg-center bg-[url('Home/BlackJack.jpeg')]">
    <div class="h-full flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 to-transparent">
      <h1 class="text-4xl font-bold mb-2">BlackJack</h1>
      <p class="text-gray-300 mb-4">The classic card game</p>
      <RouterLink
        to="blackjack"
        class="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors w-36 text-center cursor-pointer"
      >
        Play Now
      </RouterLink>
    </div>
  </div>
</template>
