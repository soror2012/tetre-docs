<script setup lang="ts">
import { withBase } from 'vitepress'
defineProps<{ src: string }>()
</script>

<template>
  <img :src="withBase(src)" />
</template>
