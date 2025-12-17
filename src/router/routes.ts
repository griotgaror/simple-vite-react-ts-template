import { CustomRoute, Routes } from '@/utils/routeUtils';

export const routes = {
    testPage: {
        path: '/test-page',
        importFn: import('../pages/testPage/testPage'),
    },
} as const satisfies Record<string, CustomRoute>;

export type Route = keyof typeof routes;

export const indexRoute = routes.testPage.path;

export const bareRoutes: Routes = [];

export const layoutRoutes: Routes = Object.values(routes).filter(
    (r) => !bareRoutes.includes(r),
);
