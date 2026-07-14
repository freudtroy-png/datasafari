import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'how-it-works': resolve(__dirname, 'how-it-works.html'),
        coverage: resolve(__dirname, 'coverage.html'),
        faq: resolve(__dirname, 'faq.html'),
        terms: resolve(__dirname, 'terms.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        refund: resolve(__dirname, 'refund.html'),
        cookies: resolve(__dirname, 'cookies.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
})
