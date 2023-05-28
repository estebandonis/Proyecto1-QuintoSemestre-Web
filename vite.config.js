import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@components', replacement: resolve(__dirname, './src/components'),
      },
    ],
  },
  test: {
    setupFiles: './src/setupTests.js',
    globals: true,
    environment: 'jsdom'
  },
})
