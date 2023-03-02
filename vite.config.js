import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    devOptions: {
      enabled: true
    },
    workbox: {
      clientsClaim: true,
      skipWaiting: true
    },
    manifest: {
      name: 'Sistema del Aeropuerto',
      short_name: 'Aeropuerto',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'Aeroplane_5060x2154.png', // <== don't add slash, for testing
          sizes: '5060x2154',
          type: 'image/png',
        },
        {
          src: 'Aeroplanex192.png', // <== don't add slash, for testing
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'Aeroplanex128.png', // <== don't add slash, for testing
          sizes: '128x128',
          type: 'image/png',
        },
        {
          src: 'Aeroplanex512.png', // <== don't remove slash, for testing
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'maskable_512.png', // <== don't add slash, for testing
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        }
      ]
    }
  })]
})
