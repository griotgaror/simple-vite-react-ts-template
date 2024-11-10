import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import { createHtmlPlugin } from 'vite-plugin-html';

import generateGlobals from './app.config';
import devConfig from './vite.dev.config';
import prodConfig from './vite.prod.config';

export default defineConfig(({ command }) => {
    const isProd = command === 'build';
    const isVitestUICommand = process.argv.includes('--ui');

    const globals = generateGlobals(isProd);
    console.log(globals);

    const envConfig = isProd ? prodConfig() : devConfig();

    return {
        ...envConfig,
        base: JSON.parse(globals.__BASE__),
        define: {
            ...globals,
            'process.env.IS_VITEST_UI': JSON.stringify(isVitestUICommand),
        },
        plugins: [
            !isVitestUICommand &&
                createHtmlPlugin({
                    inject: {
                        data: {
                            title: JSON.parse(globals.__TITLE__),
                        },
                    },
                }),
            react({
                babel: {
                    configFile: './babel.config.js',
                },
            }),
            checker({
                typescript: true,
                overlay: {
                    panelStyle: `height: 100%; max-height: 100%;`,
                },
            }),
        ].filter(Boolean),
        optimizeDeps: {
            include: ['react', 'react-dom', 'framer-motion', 'styled-components'],
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
        },
    };
});
