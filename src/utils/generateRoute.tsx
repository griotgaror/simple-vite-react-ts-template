import React from 'react';
import { NonIndexRouteObject, RouteObject } from 'react-router-dom';

import LazyLoadComponent from '@/components/layout/lazyLoadComponent';

interface GenerateRouteProps extends Omit<NonIndexRouteObject, 'index'> {
    path?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    importFn?: () => Promise<any>;
}

export default function generateRoute({
    path,
    importFn,
    element,
    ...props
}: GenerateRouteProps): RouteObject {
    const routeElement = element ? (
        element
    ) : importFn ? (
        <LazyLoadComponent importFn={importFn} />
    ) : (
        <div></div>
    );

    return {
        path: path,
        element: routeElement,
        ...props,
    };
}
