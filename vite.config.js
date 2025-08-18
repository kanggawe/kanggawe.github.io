import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/kanggawe.github.io/', // Sesuaikan dengan nama repository Anda
})
