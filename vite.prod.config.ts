import { UserConfig } from 'vite';

export default function prodConfig(): UserConfig {
    return {
        build: {
            outDir: 'build',
            assetsDir: 'static',
            sourcemap: false,
            target: 'esnext',
            chunkSizeWarningLimit: 500,
            rollupOptions: {
                output: {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    assetFileNames: (assetInfo: any) => {
                        const noHashExtensions = /\.(ttf|png|webp)$/i;

                        if (assetInfo.name && noHashExtensions.test(assetInfo.name)) {
                            return 'static/[name][extname]';
                        }

                        return '[name]-[hash][extname]';
                    },
                },
            },
        },
        optimizeDeps: {
            include: ['react', 'react-dom'],
        },
    };
}
