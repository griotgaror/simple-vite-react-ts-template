import fg from 'fast-glob';
import fs from 'fs';
import path from 'path';
import type { Plugin } from 'vite';

interface Font {
    family: string;
    weight: number | 'variable';
    style: 'normal' | 'italic';
    file: string;
    format: 'woff2' | 'ttf';
}

const Weights: Record<string, number> = {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
};

const parseFont = function (file: string): Font {
    const name = path.basename(file).toLocaleLowerCase();

    const isItalic = name.includes('italic');
    const isVariable = name.includes('variable');

    const weight = isVariable
        ? 'variable'
        : Object.entries(Weights).find(([k]) => name.includes(k))?.[1] ?? 400;

    return {
        family: path.basename(file).split('-')[0],
        weight,
        style: isItalic ? 'italic' : 'normal',
        file,
        format: file.endsWith('.woff2') ? 'woff2' : 'ttf',
    };
};

export default function viteFontsPlugin(): Plugin {
    const isProd = process.env.NODE_ENV === 'production';
    const viteAssetTxt = '__VITE_ASSET__';
    const emittedFonts = new Map<string, string>();

    const getFontUrl = function (file: string): string {
        if (!isProd) return file;
        return `${viteAssetTxt}${emittedFonts.get(file)}__`;
    };

    return {
        name: 'vite-font-plugin',

        buildStart() {
            const files = fg.sync('./src/assets/fonts/**/*.{woff2,ttf}');

            for (const file of files) {
                const fontFileName = path.basename(file);
                const id = this.emitFile({
                    type: 'asset',
                    name: fontFileName,
                    source: fs.readFileSync(file),
                });
                emittedFonts.set(file, id);
            }
        },

        transformIndexHtml() {
            const fonts = Array.from(emittedFonts.keys()).map(parseFont);

            const preloads = fonts.map((font) => ({
                tag: 'link',
                attrs: {
                    rel: 'preload',
                    href: getFontUrl(font.file),
                    as: 'font',
                    type: `font/${font.format}`,
                    crossorigin: 'anonymous',
                },
            }));

            const fontFaces = fonts
                .map((font) => {
                    const weight = font.weight === 'variable' ? '100 900' : font.weight;
                    const format = font.format === 'woff2' ? 'woff2' : 'truetype';
                    return `
                    @font-face {
                        font-family: '${font.family}';
                        src: url(${getFontUrl(font.file)}) format('${format}');
                        font-weight: ${weight};
                        font-style: ${font.style};
                    }
                `;
                })
                .join('\n');

            return [
                ...preloads,
                {
                    tag: 'style',
                    injectTo: 'head',
                    children: fontFaces,
                },
            ];
        },

        resolveId(source) {
            if (source.startsWith(viteAssetTxt)) return source;
            return null;
        },
    };
}
