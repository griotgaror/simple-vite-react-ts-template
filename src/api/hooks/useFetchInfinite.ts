import React from 'react';
import useApiGetRequest from './useApiGetRequest';

export default function useFetchInfinite<R = unknown>(url: string, limit = 30) {
    const [items, setItems] = React.useState<R[]>([]);
    const [skip, setSkip] = React.useState<number>(0);
    const [hasMoreItems, setHasMoreItems] = React.useState<boolean>(true);

    const handleOnSuccess = function (data: R) {
        if (!Array.isArray(data)) return;
        setItems((prev) => [...prev, ...data]);
        setSkip((prev) => prev + limit);

        if (data.length < limit) setHasMoreItems(false);
    };

    const { isLoading, fetchRequest, ...rest } = useApiGetRequest<R>({
        url: url,
        onSuccess: (data) => handleOnSuccess(data),
        onInit: false,
        params: {
            skip,
            limit,
        },
    });

    const fetchItems = React.useCallback(() => {
        if (isLoading || !hasMoreItems) return;
        fetchRequest();
    }, [fetchRequest, isLoading, hasMoreItems]);

    return {
        hasMoreItems,
        isLoading,
        items,
        fetchItems,
        ...rest,
    };
}
