/// <reference types="vite/client" />

interface Globals {
    title: string;
    baseUrl: string;
    isProd: boolean;
    appVersion: string;
}

declare const __globals__: Globals;
