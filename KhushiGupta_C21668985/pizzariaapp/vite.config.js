import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // react jss will not work without this plugin
  plugins: [react()],
})
