<script setup lang="ts">

const props = defineProps<{
  attempts: number;
}>();

</script>

<template>
  <img :src="`./src/assets/${props.attempts}.png`" :alt="'localAttprops.attemptsempts'" class="mx-auto" />
</template>

<style scoped>
img {
  width: 250px;
}
</style>
