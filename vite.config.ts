import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Port 5200 is opengittr-website's dev port (block 5200-5299, see ~/.claude/project-ports.md)
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5200,
    strictPort: true,
  },
})
