import 'styled-components';
import { DefaultTheme } from 'styled-components';
import { ColorModeData, ThemesVariants, colorModes } from './themes';

declare module 'styled-components' {
    export interface DefaultTheme {
        colorMode: ColorModeData;
        layout: {
            headerHeight: string;
            borderRadius: string;
            gap: string;
            padding: string;
            buttonSize: string;
            maxWidth: string;
            boxShadow: string;
        };
        colors: {
            txt: string;
        };
    }
}

export const generateStyleConfig = (colorMode: ThemesVariants): DefaultTheme => ({
    colorMode: colorModes[colorMode],
    layout: {
        headerHeight: '65px',
        borderRadius: '4px',
        gap: '15px',
        padding: '15px',
        buttonSize: '38px',
        boxShadow: '3px 3px 15px rgba(20, 20, 20, 30%)',
        maxWidth: '1420',
    },
    colors: {
        txt: '#F2E4E4',
    },
});
