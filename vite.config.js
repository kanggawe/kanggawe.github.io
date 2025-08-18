import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Untuk deploy di root domain
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Pisahkan vendor libraries
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['bootstrap', 'react-bootstrap'],
          icons: ['@fortawesome/fontawesome-svg-core', '@fortawesome/free-brands-svg-icons', '@fortawesome/free-solid-svg-icons', '@fortawesome/react-fontawesome'],
          carousel: ['react-slick', 'slick-carousel']
        }
      }
    },
    chunkSizeWarningLimit: 1000 // Tingkatkan limit warning
  }
})
