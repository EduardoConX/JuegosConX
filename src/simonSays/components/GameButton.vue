<script setup lang="ts">
const props = defineProps<{
  shape: string;
  color: string;
  isShaking: boolean;
  alignLeft?: boolean;
}>();
</script>

<template>
  <div
    :class="`w-1/2 mx-2 flex ${alignLeft ? 'justify-start' : 'justify-end'}`"
  >
    <button :class="`${isShaking ? 'animate__animated animate__flash' : ''}`">
      <svg
        width="90%"
        height="90%"
        viewBox="0 0 250 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path :d="props.shape" :fill="props.color" />
      </svg>
    </button>
  </div>
</template>
