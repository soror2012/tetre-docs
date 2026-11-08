<script setup lang="ts">
import { useData } from 'vitepress'
import { watchEffect } from 'vue'
const { frontmatter } = useData()
// Tint the whole page when it belongs to the spoiler section.
watchEffect(() => {
  if (typeof document === 'undefined') return
  document.documentElement.classList.toggle('is-spoiler', !!frontmatter.value.spoiler)
})
</script>

<template>
  <div v-if="frontmatter.spoiler" class="spoiler-banner" role="alert">
    <div class="spoiler-banner__icon" aria-hidden="true">⚠</div>
    <div>
      <strong>SPOILER WARNING</strong>
      <p>
        This page reveals major story twists from Tetre. If you plan to play the game,
        stop here. Everything outside the "Spoilers / Design Bible" section is spoiler-safe.
      </p>
    </div>
  </div>
</template>
