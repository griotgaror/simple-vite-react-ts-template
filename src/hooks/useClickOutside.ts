import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function useClickOutside(
    callback: () => void,
    refs?: React.RefObject<HTMLElement>[],
) {
    React.useEffect(() => {
        const eventListener = (ev: MouseEvent) => {
            if (refs?.some((r) => r.current && r.current.contains(ev.target as Node)))
                return;
            callback();
        };

        document.addEventListener('click', eventListener);
        return () => {
            document.removeEventListener('click', eventListener);
        };
    }, [callback, refs]);
}
