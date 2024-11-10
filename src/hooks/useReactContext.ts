import React from 'react';

interface UseContextProps<T> {
    context: React.Context<T | null>;
    providerName: string;
}

export default function useReactContext<T>({
    context,
    providerName,
}: UseContextProps<T>) {
    const cntx = React.useContext(context);
    const errorTxt = `The Context must be use in ${providerName}`;

    if (!cntx) {
        throw new Error(errorTxt);
    }

    return cntx;
}
