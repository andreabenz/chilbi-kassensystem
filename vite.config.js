import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(resolve(__dirname, 'client-view/index.html'));

export default defineConfig({
    build: {
        target: 'es2015',
        rollupOptions: {
            input: {
                ...Object.fromEntries(
                    glob
                        .sync(
                            [
                                'index.html',
                                'html/**/index.html',
                                'html/**/*.html',
                            ],
                            {
                                ignore: ['node_modules/**', 'dist/**'],
                            },
                        )
                        .map((file) => {
                            const name = file
                                // .replace(/^html\//, '')
                                .replace(/\.html$/, '')
                                .replace(/\/index$/, '')
                                .replace(/^\.\//, '')
                                .replace(/\/+/g, '-')
                                .replace(/^$/, 'main');
                            return [name || 'main', resolve(__dirname, file)];
                        }),
                ),
            },
        },
    },
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'partials'),
            context: {
                appTitle: 'Cevi WIE Kassensystem',
            },
        }),
    ],
});
