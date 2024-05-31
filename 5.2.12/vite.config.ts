import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    ssr: true,
    outDir: './dist',
    rollupOptions: {
      input: './src/index.ts',
    },
    emptyOutDir: true,
    cssCodeSplit: false,
  }
})
