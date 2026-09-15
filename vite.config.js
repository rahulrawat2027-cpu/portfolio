import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Freebuff preview and hosting both inject PORT; bind on all interfaces.
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 5173,
  },
  preview: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 4173,
  },
})
