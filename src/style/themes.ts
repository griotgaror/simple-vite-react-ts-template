export interface ColorModeData {
    bgPrimary: string;
    bgSecondary: string;
    detailColor1: string;
    detailColor2: string;
}

// Change Name to colorModes
export const colorModes = {
    Default: {
        bgPrimary: '#211835',
        bgSecondary: '#241d3e',
        detailColor1: '#543f85',
        detailColor2: '#6f335d',
    },
};

// Change Name to ColorModeVariants;
export type ThemesVariants = keyof typeof colorModes;
