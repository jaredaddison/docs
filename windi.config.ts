import { defineConfig } from 'vite-plugin-windicss'
import aspectRatio from 'windicss/plugin/aspect-ratio'
import typography from 'windicss/plugin/typography'
import forms from 'windicss/plugin/forms'

export default defineConfig({
  extract: {
    include: [
      '**/*.md',
      '.vitepress/theme/**/*.{md,vue}',
      '.vitepress/@slidev/client/internals/SlideContainer.vue',
      '.vitepress/@slidev/client/layouts/*.vue',
      '.vitepress/@slidev/theme-default/layouts/*.vue',
    ]
  },
  attributify: true,
  plugins: [
    aspectRatio,typography,forms
  ],
  shortcuts: {
    'bg-main': 'bg-white dark:bg-[#121212]',
  },
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3AB9D4',
          deep: '#2082A6',
        },
      },
      fontFamily: {
        mono: '\'IBM Plex Mono\', source-code-pro, Menlo, Monaco, Consolas, \'Courier New\', monospace',
      },
    },
  },
})
