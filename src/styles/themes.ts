export interface ColorModeData {
    primaryColor: string;
    secondaryColor: string;
    detailColor1: string;
    detailColor2: string;
}

export const colorModes = {
    Default: {
        primaryColor: '#021a3a',
        secondaryColor: '#002650',
        detailColor1: '#002853',
        detailColor2: '#0e57ca',
    },
};

export const defaultColorMode = 'Default';
export type ThemesVariants = keyof typeof colorModes;
