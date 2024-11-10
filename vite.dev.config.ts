import { UserConfig } from 'vite';

export default function devConfig(): UserConfig {
    const testServerUrl = 'http://0.0.0.0:3232';
    const hostUrl = '0.0.0.0';

    return {
        server: {
            port: 5050,
            host: hostUrl,
            open: false,
            hmr: {
                overlay: false,
            },
            proxy: {
                '/test-api': {
                    target: testServerUrl,
                    ws: true,
                    changeOrigin: true,
                },
                '/assets': {
                    target: testServerUrl,
                    changeOrigin: true,
                },
                '/static-data': {
                    target: testServerUrl,
                    changeOrigin: true,
                },
            },
        },
        preview: {
            host: hostUrl,
        },
        build: {
            outDir: 'build',
            assetsDir: 'static',
            sourcemap: false,
        },
    };
}
