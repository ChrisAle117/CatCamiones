import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,            // escucha en 0.0.0.0
    port: 5173,
    // permite dominios externos (ngrok)
    allowedHosts: [
      '.ngrok-free.app',   
      '71bc93aa026a.ngrok-free.app' 
    ],
    
    hmr: {
      host: '71bc93aa026a.ngrok-free.app', 
      protocol: 'wss',      
      clientPort: 443
    }
  }
})
