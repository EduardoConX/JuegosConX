<script setup lang="ts">
interface Props {
  attempts: number;
}

defineProps<Props>();
</script>

<template>
  <svg width="200" height="260" viewBox="0 0 200 260">
    <!-- Gallows -->
    <line
      x1="10"
      y1="250"
      x2="150"
      y2="250"
      stroke="#E0E0E0"
      stroke-width="4"
    />
    <line
      x1="40"
      y1="250"
      x2="40"
      y2="20"
      stroke="#E0E0E0"
      stroke-width="4"
      :style="{ visibility: attempts >= 1 ? 'visible' : 'hidden' }"
    />
    <line
      x1="40"
      y1="20"
      x2="120"
      y2="20"
      stroke="#E0E0E0"
      stroke-width="4"
      :style="{ visibility: attempts >= 2 ? 'visible' : 'hidden' }"
    />
    <line
      x1="120"
      y1="20"
      x2="120"
      y2="40"
      stroke="#E0E0E0"
      stroke-width="4"
      :style="{ visibility: attempts >= 3 ? 'visible' : 'hidden' }"
    />

    <!-- Rope -->
    <line
      x1="120"
      y1="40"
      x2="120"
      y2="60"
      stroke="#E0E0E0"
      stroke-width="2"
      :style="{ visibility: attempts >= 3 ? 'visible' : 'hidden' }"
    />

    <!-- Head -->
    <circle
      id="head"
      cx="120"
      cy="75"
      r="15"
      stroke="#E0E0E0"
      stroke-width="3"
      fill="none"
      :style="{ visibility: attempts >= 4 ? 'visible' : 'hidden' }"
    />

    <!-- Body -->
    <line
      id="body"
      x1="120"
      y1="90"
      x2="120"
      y2="150"
      stroke="#E0E0E0"
      stroke-width="3"
      :style="{ visibility: attempts >= 5 ? 'visible' : 'hidden' }"
    />

    <!-- Left Arm -->
    <line
      id="left-arm"
      x1="120"
      y1="105"
      x2="90"
      y2="130"
      stroke="#E0E0E0"
      stroke-width="3"
      :style="{ visibility: attempts >= 6 ? 'visible' : 'hidden' }"
    />

    <!-- Right Arm -->
    <line
      id="right-arm"
      x1="120"
      y1="105"
      x2="150"
      y2="130"
      stroke="#E0E0E0"
      stroke-width="3"
      :style="{ visibility: attempts >= 7 ? 'visible' : 'hidden' }"
    />

    <!-- Left Leg -->
    <line
      id="left-leg"
      x1="120"
      y1="150"
      x2="95"
      y2="190"
      stroke="#E0E0E0"
      stroke-width="3"
      :style="{ visibility: attempts >= 8 ? 'visible' : 'hidden' }"
    />

    <!-- Right Leg -->
    <line
      id="right-leg"
      x1="120"
      y1="150"
      x2="145"
      y2="190"
      stroke="#E0E0E0"
      stroke-width="3"
      :style="{ visibility: attempts >= 9 ? 'visible' : 'hidden' }"
    />
  </svg>
</template>
