<script setup lang="ts">

const props = defineProps<{
  attempts: number;
}>();

</script>

<template>
  <img :src="`./src/assets/${props.attempts}.png`" :alt="'localAttprops.attemptsempts'" />
</template>

<style scoped>
img {
  width: 250px;
}
</style>
