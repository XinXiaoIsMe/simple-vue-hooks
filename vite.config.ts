import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [ dts() ],
  build: {
    outDir: 'dist',
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'SimpleVueHooks',
      fileName: 'index',
      formats: [ 'es', 'cjs', 'umd', 'iife' ]
    },
    rollupOptions: {
      external: [ 'vue' ],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
