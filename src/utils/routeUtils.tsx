import LazyLoadComponent from '@/components/layout/lazyLoadComponent';
import React from 'react';
import { NonIndexRouteObject } from 'react-router-dom';

export interface CustomRoute extends NonIndexRouteObject {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    importFn?: Promise<any>;
}
export type Routes = Array<CustomRoute>;

export function generateRoute({
    index,
    path,
    importFn,
    element = <div>Empty Component</div>,
    children,
}: CustomRoute): CustomRoute {
    return {
        index: index,
        path: path,
        element: importFn ? <LazyLoadComponent importFn={() => importFn} /> : element,
        children: children,
    };
}

export const generateChildRoutes = function (routes: Routes) {
    return routes.map((route) =>
        generateRoute({
            path: route.path,
            importFn: route.importFn,
        }),
    );
};
