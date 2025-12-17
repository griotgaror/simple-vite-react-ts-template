import { mediaBreakpoints } from '@/styles/mediaBreakpoints';
import { useMediaQuery } from 'react-responsive';

export const useCreateMediaBreakpoint = (screen: string) =>
    useMediaQuery({
        query: `(min-width: ${screen})`,
    });

export const useBreakpoint = () => ({
    mobile_s: useCreateMediaBreakpoint(mediaBreakpoints.mobile_s),
    mobile_m: useCreateMediaBreakpoint(mediaBreakpoints.mobile_m),
    mobile_m2: useCreateMediaBreakpoint(mediaBreakpoints.mobile_m2),
    mobile_l: useCreateMediaBreakpoint(mediaBreakpoints.mobile_l),

    tablet_s: useCreateMediaBreakpoint(mediaBreakpoints.tablet_s),
    tablet_m: useCreateMediaBreakpoint(mediaBreakpoints.tablet_m),
    tablet_l: useCreateMediaBreakpoint(mediaBreakpoints.tablet_l),

    largeScreen: useCreateMediaBreakpoint(mediaBreakpoints.largeScreen),
    extraLargeScreen: useCreateMediaBreakpoint(mediaBreakpoints.extraLargeScreen),
});
