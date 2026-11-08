<script setup lang="ts">
import { useData, useRoute, withBase } from 'vitepress'
const { frontmatter } = useData()
const route = useRoute()

// Page titles are spoilers. Keep this list out of config.mts so it is never serialized into non-spoiler pages.
const items = [
  { text: '⚠ Read this first', link: '/spoilers/' },
  { text: 'The Hidden Truth of the Ward', link: '/spoilers/hidden-truth' },
  { text: 'Origin Shards and New Shards', link: '/spoilers/shards' },
  { text: 'Rowan and the Original Keepers', link: '/spoilers/rowan-and-keepers' },
  { text: "Wing's Secret", link: '/spoilers/wing' },
  { text: "The Cast's Hidden Arcs", link: '/spoilers/cast-arcs' },
  { text: 'The Council, Two Generations', link: '/spoilers/council' },
  { text: 'The Five-Act Structure', link: '/spoilers/five-acts' },
  { text: 'Final Revelation and Epilogue', link: '/spoilers/ending' },
  { text: 'Spoiler Glossary', link: '/spoilers/glossary' },
  { text: 'Open Design Questions', link: '/spoilers/open-questions' }
]
const norm = (p: string) => p.replace(/(index)?(\.html)?$/, '').replace(/\/$/, '')
const active = (l: string) => norm(route.path) === norm(withBase(l))
</script>

<template>
  <nav v-if="frontmatter.spoiler" class="spoiler-nav" aria-label="Spoiler pages">
    <div class="spoiler-nav__title">⚠ Spoilers / Design Bible</div>
    <a v-for="i in items" :key="i.link" :href="withBase(i.link)" :class="{ active: active(i.link) }">{{ i.text }}</a>
  </nav>
</template>
