import { AxiosError, AxiosResponse } from 'axios';
import React from 'react';
import { axiosInstance } from '../axiosInstance';
import useResponseErrorHandling from './useResponseErrorHandling';

interface UseApiPostRequestProps<D, R> {
    url: string;
    reqData: D;
    onSuccess: (data: R) => void;
    onError?: () => void;
}

export default function useApiPostRequest<D = object, R = unknown>({
    url,
    reqData,
    onSuccess,
    onError,
}: UseApiPostRequestProps<D, R>) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const { handleResponseError, errorDetails, setErrorDetails, clearError } =
        useResponseErrorHandling();

    const postRequest = React.useCallback(async () => {
        try {
            setIsLoading(true);
            const res: AxiosResponse<R> = await axiosInstance.post(url, reqData);
            onSuccess(res.data);
        } catch (error) {
            handleResponseError(error as AxiosError);
            if (onError) onError();
        } finally {
            setIsLoading(false);
        }
    }, [reqData, onSuccess, onError, handleResponseError, url]);

    return {
        isLoading,
        errorDetails,
        setErrorDetails,
        clearError,
        postRequest,
    };
}
