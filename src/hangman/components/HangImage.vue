<script setup lang="ts">

const props = defineProps<{
  attempts: number;
}>();

</script>

<template>
  <img :src="`./assets/${props.attempts}.png`" alt="HangMan Image" class="mx-auto" />
</template>

<style scoped>
img {
  width: 250px;
}
</style>
