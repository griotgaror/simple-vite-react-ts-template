import AppLayout from '@/appLayout';
import React from 'react';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { generateChildRoutes } from '@/utils/routeUtils';
import { indexRoute, layoutRoutes } from './routes';

const routerRoutes = [
    {
        index: true,
        element: (
            <Navigate
                to={indexRoute}
                replace
            />
        ),
    },
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <div>Error Page</div>,
        children: generateChildRoutes(layoutRoutes),
    },
    {
        path: '/*',
        element: (
            <Navigate
                to='/'
                replace
            />
        ),
    },
];

const router = createBrowserRouter(routerRoutes, {
    basename: __globals__.baseUrl,
});

export default function Router() {
    return <RouterProvider router={router} />;
}
