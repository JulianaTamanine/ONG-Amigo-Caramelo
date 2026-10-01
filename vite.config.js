import { defineConfig } from 'vite';

export default defineConfig({
    root: '.',

    build: {
        rollupOptions: {
            input: 'html/index.html'
        },

        outDir: 'dist',
        emptyOutDir: true
    }
});