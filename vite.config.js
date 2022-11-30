import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ["@/sdk/4.1.2-uniapp.js"]
  },
  build: {
    commonjsOptions: {
      include: []
    }
  },
  plugins: [
    uni(),
  ],
})
