import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(resolve(__dirname, 'client-view/index.html'));

export default defineConfig({
    build: {
        target: 'es2015',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                'client-view': resolve(__dirname, 'client-view/index.html'),
            },
        },
    },
});
