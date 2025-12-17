import 'styled-components';
import { DefaultTheme } from 'styled-components';
import { ColorModeData, colorModes, defaultColorMode, ThemesVariants } from './themes';

declare module 'styled-components' {
    export interface DefaultTheme {
        colorMode: ColorModeData;
        layout: {
            borderRad: string;
            btnSpace: string;
            iconSize: string;
            boxShadow: string;
        };
        colors: {
            txt: string;
            iconColor: string;
        };
    }
}

export const generateStyleConfig = function (colorMode: string | null): DefaultTheme {
    return {
        colorMode: colorModes[(colorMode as ThemesVariants) || defaultColorMode],
        layout: {
            borderRad: '6px',
            btnSpace: '0.8rem',
            iconSize: '20.5px',
            boxShadow: '3px 3px 15px rgba(20, 20, 20, 30%)',
        },
        colors: {
            txt: '#F2E4E4',
            iconColor: 'rgb(250, 250, 250)',
        },
    };
};
