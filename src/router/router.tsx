import AppLayout from '@/appLayout';
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { indexRoutes } from './routes/indexRoutes';

const routerRoutes = [
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <div>Error Page</div>,
        children: [...indexRoutes],
    },
];

const router = createBrowserRouter(routerRoutes, {
    basename: __BASE__,
});

// reload the page in development for correct basename
if (window.location.pathname === '/' && !__IS_PRODUCTION__) {
    window.location.replace(__BASE__);
}
export default function Router() {
    return <RouterProvider router={router} />;
}
