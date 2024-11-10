import { render } from '@testing-library/react';
import React from 'react';
import { RouteObject, RouterProvider, createMemoryRouter } from 'react-router-dom';

import { AppDataProvider } from '@/context/appDataContext';

interface CustomRendererProps {
    element?: React.ReactNode;
    routeConfig?: RouteObject[];
    initialEntries?: string[];
}

export const customRenderer = function ({
    element = <></>,
    routeConfig = [
        {
            path: '/',
            element: element,
        },
    ],
    initialEntries = ['/'],
}: CustomRendererProps) {
    const router = createMemoryRouter(routeConfig, {
        initialEntries: initialEntries,
    });

    return render(
        <AppDataProvider>
            <RouterProvider router={router} />
        </AppDataProvider>,
    );
};
