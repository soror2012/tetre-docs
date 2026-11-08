import DefaultTheme from 'vitepress/theme'
import { h, defineAsyncComponent } from 'vue'
import type { Theme } from 'vitepress'
import SpoilerBanner from './SpoilerBanner.vue'
import Swatches from './Swatches.vue'
import Pic from './Pic.vue'
// Async so the spoiler page titles ship in their own chunk, loaded only on spoiler pages.
const SpoilerNav = defineAsyncComponent(() => import('./SpoilerNav.vue'))
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => h(SpoilerBanner),
      'sidebar-nav-after': () => h(SpoilerNav)
    })
  },
  enhanceApp({ app }) {
    app.component('Swatches', Swatches)
    app.component('Pic', Pic)
  }
} satisfies Theme
