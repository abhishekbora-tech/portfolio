import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio/', // 👈 VERY IMPORTANT
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
