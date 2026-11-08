import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Tetre',
  description: 'Lore, characters and game systems of Tetre, an original 2D JRPG.',
  base: '/tetre-docs/',
  lang: 'en-US',
  cleanUrls: true,
  lastUpdated: false,
  appearance: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/tetre-docs/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#4a4fa8' }],
    ['meta', { property: 'og:title', content: 'Tetre: lore, characters and systems' }],
    ['meta', { property: 'og:image', content: 'https://soror2012.github.io/tetre-docs/img/int-title.png' }]
  ],
  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: 'TETRE',
    nav: [
      { text: 'World', link: '/world/', activeMatch: '/world/' },
      { text: 'Nations', link: '/nations/', activeMatch: '/nations/' },
      { text: 'Characters', link: '/characters/', activeMatch: '/characters/' },
      { text: 'Systems', link: '/systems/', activeMatch: '/systems/' },
      { text: 'Art', link: '/art/', activeMatch: '/art/' },
      { text: 'Development', link: '/dev/', activeMatch: '/dev/' },
      { text: 'Glossary', link: '/glossary' }
    ],
    sidebar: {
     // The list of spoiler pages is NOT in the config: titles like these would be serialized into every
     // page's site data. It lives in theme/SpoilerNav.vue, an async chunk loaded only on /spoilers/ pages.
     '/spoilers/': [
      { text: '← Back to the spoiler-safe docs', link: '/' }
     ],
     '/': [
      {
        text: 'World',
        collapsed: false,
        items: [
          { text: 'Tetre', link: '/world/' },
          { text: 'The Ward', link: '/world/ward' },
          { text: 'Ward Nodes', link: '/world/ward-nodes' },
          { text: 'Ward Flickers', link: '/world/ward-flickers' },
          { text: 'Hollow Zones', link: '/world/hollow-zones' },
          { text: 'New Shards', link: '/world/new-shards' },
          { text: 'Modern-Fantasy Civilization', link: '/world/civilization' }
        ]
      },
      {
        text: 'Nations & Factions',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/nations/' },
          { text: 'Grand Cross', link: '/nations/grand-cross' },
          { text: 'Halford', link: '/nations/halford' },
          { text: 'Narae', link: '/nations/narae' },
          { text: 'New Otalla', link: '/nations/new-otalla' },
          { text: 'The Nature-Aligned Nation', link: '/nations/nature-aligned' },
          { text: 'The Council', link: '/nations/council' }
        ]
      },
      {
        text: 'Characters',
        collapsed: false,
        items: [
          { text: 'The Cast', link: '/characters/' },
          { text: 'Silas', link: '/characters/silas' },
          { text: 'Lorena', link: '/characters/lorena' },
          { text: 'Vulcan', link: '/characters/vulcan' },
          { text: 'Hugh', link: '/characters/hugh' },
          { text: 'Wing', link: '/characters/wing' },
          { text: 'Skyler', link: '/characters/skyler' },
          { text: 'The Professor', link: '/characters/professor' }
        ]
      },
      {
        text: 'Game Systems',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/systems/' },
          { text: 'Exploration & Controls', link: '/systems/exploration' },
          { text: 'Dialogue & Events', link: '/systems/dialogue' },
          { text: 'Combat (in development)', link: '/systems/combat' },
          { text: 'Character Kits', link: '/systems/kits' },
          { text: 'Combo Techs', link: '/systems/combo-techs' },
          { text: 'Progression', link: '/systems/progression' }
        ]
      },
      {
        text: 'Art Direction',
        collapsed: true,
        items: [
          { text: 'Palette & Look', link: '/art/' },
          { text: 'Lessons from the Reference', link: '/art/reference' },
          { text: 'UI Style', link: '/art/ui' }
        ]
      },
      {
        text: 'Development',
        collapsed: true,
        items: [
          { text: 'Roadmap & Status', link: '/dev/' },
          { text: 'Tech Stack', link: '/dev/tech-stack' },
          { text: "How It's Built", link: '/dev/how-its-built' }
        ]
      },
      { text: 'Glossary', link: '/glossary' },
      { text: '⚠ Spoilers / Design Bible', link: '/spoilers/' }
     ]
    },
    outline: { level: [2, 3], label: 'On this page' },
    search: { provider: 'local' },
    docFooter: { prev: 'Previous', next: 'Next' },
    footer: {
      message: 'Tetre is an original work in development. Combo Techs take inspiration from Chrono Trigger; all content here is original.',
      copyright: 'Documentation draft, spoiler-safe outside the ⚠ section.'
    }
  }
})
