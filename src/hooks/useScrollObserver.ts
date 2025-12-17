import React from 'react';

export default function useScrollObserver(callback: () => void) {
    const observer = React.useRef<IntersectionObserver | null>(null);
    const rootMargin = `${window.innerHeight * 0.5}px`;

    const triggerRef = React.useCallback(
        (node: HTMLDivElement | null) => {
            if (!node) return;
            if (observer.current) observer.current.disconnect();

            observer.current = new IntersectionObserver(
                (entris) => {
                    if (entris[0].isIntersecting) callback();
                },
                {
                    rootMargin,
                },
            );

            observer.current.observe(node);
        },
        [callback, rootMargin],
    );

    return {
        triggerRef,
    };
}
