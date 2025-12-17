import React from 'react';

import { ApiDataProvider } from './context/apiDataContext';
import { AppDataProvider } from './context/appDataContext';

interface ContextProvidersProps {
    children: React.ReactElement;
}

export default function ContextProviders({ children }: ContextProvidersProps) {
    return (
        <ApiDataProvider>
            <AppDataProvider>{children}</AppDataProvider>
        </ApiDataProvider>
    );
}
