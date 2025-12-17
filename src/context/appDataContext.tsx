import React from 'react';
import { ThemeProvider } from 'styled-components';

import useReactContext from '@/hooks/useReactContext';
import { SetState } from '@/types/global.types';

import { GlobalStyle } from '@/styles/globalStyle';
import { generateStyleConfig } from '@/styles/styleConfig';
import { ThemesVariants } from '@/styles/themes';

export interface AppDataStates {
    isGlobalLoading: boolean;
    defaultColorMode: ThemesVariants;
    activeColorMode: ThemesVariants | null;
}

export const initalValues: AppDataStates = {
    isGlobalLoading: false,
    defaultColorMode: 'Default',
    activeColorMode: null,
};

interface AppDataCntxProps {
    appDataStates: AppDataStates;
    setAppDataStates: SetState<AppDataStates>;
}

const AppDataCntx = React.createContext<AppDataCntxProps | null>(null);

interface AppDataProviderProps {
    children: React.ReactNode;
}

export const AppDataProvider = function ({ children }: AppDataProviderProps) {
    const [appDataStates, setAppDataStates] =
        React.useState<AppDataStates>(initalValues);

    const contextValues: AppDataCntxProps = {
        appDataStates,
        setAppDataStates,
    };

    const { defaultColorMode, activeColorMode } = appDataStates;
    const styleConfig = generateStyleConfig(activeColorMode || defaultColorMode);

    return (
        <AppDataCntx.Provider value={contextValues}>
            <ThemeProvider theme={styleConfig}>
                <GlobalStyle />
                {children}
            </ThemeProvider>
        </AppDataCntx.Provider>
    );
};

export function useAppDataContext(): AppDataCntxProps {
    return useReactContext<AppDataCntxProps>({
        context: AppDataCntx,
        providerName: 'AppDataProvider',
    });
}
