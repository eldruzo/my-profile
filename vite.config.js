import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/my-profile/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        layanan: resolve(__dirname, 'layanan/index.html'),
      },
    },
  },
})
