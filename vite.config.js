import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// PHẢI trùng tên repo
export default defineConfig({
  base: '/react-tra-cuu-hoso/',
  plugins: [react()],
})

