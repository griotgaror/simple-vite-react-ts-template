import useReactContext from '@/hooks/useReactContext';
import useUpdateStates from '@/hooks/useUpdateStates';
import { ContextProviderProps } from '@/types/global.types';
import React from 'react';

export interface ApiDataStates {}

export const initialValues: ApiDataStates = {};

interface ApiDataCntxProps extends ApiDataStates {
    updateApiDataStates: (states: Partial<ApiDataStates>) => void;
}

const ApiDataCntx = React.createContext<ApiDataCntxProps | null>(null);

interface ApiDataProviderProps extends ContextProviderProps {}

export const ApiDataProvider = function ({ children }: ApiDataProviderProps) {
    const [states, setStates] = React.useState<ApiDataStates>(initialValues);
    const { updateStates } = useUpdateStates(setStates);

    const contextValues: ApiDataCntxProps = {
        ...states,
        updateApiDataStates: updateStates,
    };

    return <ApiDataCntx.Provider value={contextValues}>{children}</ApiDataCntx.Provider>;
};

export function useApiDataContext(): ApiDataCntxProps {
    return useReactContext<ApiDataCntxProps>({
        context: ApiDataCntx,
        providerName: 'ApiDataProvider',
    });
}
