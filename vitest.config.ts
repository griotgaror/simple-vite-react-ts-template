/// <reference types="vitest" />
import { defineConfig, mergeConfig } from 'vite';
import viteConfig from './vite.config';

export default defineConfig((configEnv) =>
    mergeConfig(
        viteConfig(configEnv),
        defineConfig({
            test: {
                environment: 'jsdom',
                globals: true,
                setupFiles: './src/__tests__/setupTest.tsx',
            },
        }),
    ),
);
