import { SetState } from '@/types/global.types';
import React from 'react';

export default function useUpdateStates<T>(setter: SetState<T>) {
    const updateStates = React.useCallback(
        (states: Partial<T>) => {
            setter((prev) => {
                const newValues = {
                    ...prev,
                    ...states,
                };
                return JSON.stringify(newValues) === JSON.stringify(prev)
                    ? prev
                    : newValues;
            });
        },
        [setter],
    );
    return {
        updateStates,
    };
}
