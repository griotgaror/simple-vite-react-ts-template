import React from 'react';

export function createReactContext<T>(): React.Context<T | null> {
    return React.createContext<T | null>(null);
}
