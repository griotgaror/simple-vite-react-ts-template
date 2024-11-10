import generateRoute from '@/utils/generateRoute';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { routes } from './routes';

export const indexRoutes = [
    generateRoute({
        path: routes.index,
        importFn: () => import('../../pages/testPage/testPage'),
    }),
    {
        index: true,
        element: (
            <Navigate
                to={routes.index}
                replace
            />
        ),
    },
    {
        path: '*',
        element: (
            <Navigate
                to='/'
                replace
            />
        ),
    },
];
