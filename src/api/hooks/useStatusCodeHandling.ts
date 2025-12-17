import { useApiDataContext } from '@/context/apiDataContext';

export default function useStatusCodeHandling() {
    const { updateApiDataStates } = useApiDataContext();

    const handleStatusCode = function (statusCode: number) {
        switch (statusCode) {
            case 401:
                // Account has no active Session, reset User data
                updateApiDataStates({
                    userData: undefined,
                });
                break;
            case 403:
                // Account Role permission changed
                break;
            case 500:
                // Internal server error
                break;
            case 502:
                // Service not available
                break;
            case 504:
                // Request timeout
                break;
            default:
                break;
        }
    };

    return {
        handleStatusCode,
    };
}
