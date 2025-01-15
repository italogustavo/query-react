import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],

    server: {
        host: '0.0.0.0', // Permite conexões externas
        port: 5173, // Porta usada pelo Vite
        strictPort: true, // Garante que o Vite use a porta especificada
        hmr: {
            host: 'localhost', // ou o IP público da máquina que hospeda o contêiner
            port: 5173, // Porta usada para o HMR
        },
    },
});
