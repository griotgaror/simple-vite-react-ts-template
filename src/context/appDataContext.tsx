import React from 'react';
import { ThemeProvider } from 'styled-components';

import useReactContext from '@/hooks/useReactContext';
import { ContextProviderProps, SetState } from '@/types/global.types';
import { createReactContext } from '@/utils/reactUtils';

import { GlobalStyle } from '@/style/globalStyle';
import { generateStyleConfig } from '@/style/styleConfig';
import { ThemesVariants } from '@/style/themes';

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

const AppDataCntx = createReactContext<AppDataCntxProps>();

interface AppDataProviderProps extends ContextProviderProps {}

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
