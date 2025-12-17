import React from 'react';
import { ThemeProvider } from 'styled-components';

import useReactContext from '@/hooks/useReactContext';
import { ContextProviderProps } from '@/types/global.types';

import useUpdateStates from '@/hooks/useUpdateStates';
import { GlobalStyle } from '@/styles/globalStyle';
import { generateStyleConfig } from '@/styles/styleConfig';
import { ThemesVariants } from '@/styles/themes';

export interface AppDataStates {
    isGlobalLoading: boolean;
    activeColorMode: ThemesVariants | null;
}

export const initalValues: AppDataStates = {
    isGlobalLoading: false,
    activeColorMode: null,
};

interface AppDataCntxProps extends AppDataStates {
    updateAppDataStates: (states: Partial<AppDataStates>) => void;
}

const AppDataCntx = React.createContext<AppDataCntxProps | null>(null);

interface AppDataProviderProps extends ContextProviderProps {}

export const AppDataProvider = function ({ children }: AppDataProviderProps) {
    const [appDataStates, setAppDataStates] = React.useState<AppDataStates>(initalValues);
    const { updateStates } = useUpdateStates(setAppDataStates);

    const contextValues: AppDataCntxProps = {
        ...appDataStates,
        updateAppDataStates: updateStates,
    };

    const { activeColorMode } = appDataStates;
    const styleConfig = generateStyleConfig(activeColorMode);

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
