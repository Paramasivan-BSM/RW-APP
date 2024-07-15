import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // This will make the server accessible externally
    port: 3000,      // You can choose any port
    open: true,      // Automatically open the app in the browser
  }
})
