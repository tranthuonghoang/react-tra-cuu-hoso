import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/react-tra-cuu-hoso/', // tên repo chính xác trên GitHub
 plugins: [react({ jsxRuntime: 'automatic' })]
})
