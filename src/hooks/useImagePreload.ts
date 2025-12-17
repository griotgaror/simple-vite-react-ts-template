import React from 'react';

export default function useImagePreload(src?: string) {
    const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
    const [error, setError] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (!src) {
            setIsLoaded(false);
            return;
        }

        const img = new Image();
        img.src = src;

        const handleLoad = () => setIsLoaded(true);
        const handleError = () => setError(true);

        img.addEventListener('load', handleLoad);
        img.addEventListener('error', handleError);

        return () => {
            img.removeEventListener('load', handleLoad);
            img.removeEventListener('error', handleError);
        };
    }, [src]);

    return {
        isLoaded,
        error,
    };
}
