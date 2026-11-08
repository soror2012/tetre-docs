<script setup lang="ts">
defineProps<{ ramp: string; colors: string[]; use?: string }>()
function ink(hex: string) {
  const n = parseInt(hex.slice(1), 16)
  const l = 0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)
  return l > 140 ? '#2b2133' : '#fbf3e2'
}
</script>

<template>
  <div class="ramp">
    <div class="ramp__name">
      <code>{{ ramp }}</code>
      <span v-if="use">{{ use }}</span>
    </div>
    <div class="ramp__chips">
      <div v-for="c in colors" :key="c" class="chip" :style="{ background: c, color: ink(c) }">{{ c }}</div>
    </div>
  </div>
</template>
