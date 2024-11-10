import React from 'react';

interface LazyLoadComponentProps {
    component?: React.ReactNode;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    importFn: () => Promise<{ default: React.ComponentType<any> }>;
}

export default function LazyLoadComponent({ importFn }: LazyLoadComponentProps) {
    const Component = React.lazy(importFn);

    const fallback = <></>;

    return (
        <React.Suspense fallback={fallback}>
            <Component />
        </React.Suspense>
    );
}
