import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    checker({
      // e.g. use TypeScript check
      vueTsc: true
    }),
  ],
  build: {
    sourcemap: true
  }
})
