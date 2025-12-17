import { AxiosError } from 'axios';
import React from 'react';
import useStatusCodeHandling from './useStatusCodeHandling';

interface ApiResponseErrorMsg {
    detail: string;
}

export interface ResErrorDetails {
    name: string;
    message: string;
    statusCode: number | null;
}

export type ResError = ResErrorDetails | undefined;

export default function useResponseErrorHandling() {
    const [errorDetails, setErrorDetails] = React.useState<ResError>(undefined);
    const { handleStatusCode } = useStatusCodeHandling();

    let message = 'Unexpected Error';
    let statusCode = 500;

    const handleResponseError = function (error: AxiosError) {
        const { response, request } = error;

        if (response) {
            // API response with an error status
            const data = response.data as ApiResponseErrorMsg;
            message = data.detail || 'The service is currently not available';
            statusCode = response.status;
        } else if (request) {
            // Request was made but no response was received
            message = request.message || 'No Error Message';
            statusCode = request.status;
        } else {
            // Something happened in setting up the request
            message = 'Error while setting up the request';
            statusCode = 400;
        }

        handleStatusCode(statusCode);

        setErrorDetails(() => ({
            name: 'CustomError',
            message: message,
            statusCode: statusCode,
        }));
    };

    const clearError = React.useCallback(() => setErrorDetails(undefined), []);

    return {
        errorDetails,
        setErrorDetails,
        handleResponseError,
        clearError,
    };
}
