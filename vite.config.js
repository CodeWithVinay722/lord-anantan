import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Remove the manualChunks that caused the error
    // Keep it simple — Vite handles optimization automatically
    minify: 'esbuild',    // use esbuild instead of terser (faster, no extra install)
  }
})