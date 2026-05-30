import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split large libraries into separate chunks
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          gsap:   ['gsap'],
          icons:  ['react-icons'],
        }
      }
    },
    // Compress output
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,    // removes console.log in production
      }
    }
  }
})