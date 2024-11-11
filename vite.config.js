import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import Inspect from 'vite-plugin-insepect'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  envPrefix: 'URL_'
})
