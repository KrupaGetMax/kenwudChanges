import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allow access from the network
    port: 3001, // Optional: change the port if needed
  },
});
