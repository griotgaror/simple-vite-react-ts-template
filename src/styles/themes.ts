export interface ColorModeData {
    primary: string;
    secondary: string;
    details1: string;
    details2: string;
}

export const colorModes = {
    Default: {
        primary: '#021a3a',
        secondary: '#002650',
        details1: '#002853',
        details2: '#0e57ca',
    },
};

export const defaultColorMode = 'Default';
export type ThemesVariants = keyof typeof colorModes;
