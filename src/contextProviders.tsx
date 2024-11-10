import React from 'react';

import { AppDataProvider } from './context/appDataContext';

interface ContextProvidersProps {
    children: React.ReactElement;
}

export default function ContextProviders({ children }: ContextProvidersProps) {
    return <AppDataProvider>{children}</AppDataProvider>;
}
