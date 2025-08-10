import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base phải trùng tên repo GitHub Pages
export default defineConfig({
  base: '/react-tra-cuu-hoso-ghpages/',
  plugins: [react()],
})
