import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),ViteImageOptimizer()],
  server: {
    host: '0.0.0.0', // Bind to all available network interfaces
    port: 5173,      // Set the port to 5173 (or any other port)
  },
})
