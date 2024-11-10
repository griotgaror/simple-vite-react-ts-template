import { mediaBreakpoints } from './mediaBreakpoints';

export const createHeightBreakpoint = function (breakpoint: string) {
    return `@media (min-height: ${breakpoint})`;
};

export const createBreakpoint = function (breakpoint: string) {
    return `@media (min-width: ${breakpoint})`;
};

export const breakpoint = {
    mobile_s: createBreakpoint(mediaBreakpoints.mobile_s),
    mobile_m: createBreakpoint(mediaBreakpoints.mobile_m),
    mobile_m2: createBreakpoint(mediaBreakpoints.mobile_m2),
    mobile_l: createBreakpoint(mediaBreakpoints.mobile_l),

    tablet_s: createBreakpoint(mediaBreakpoints.tablet_s),
    tablet_m: createBreakpoint(mediaBreakpoints.tablet_m),
    tablet_l: createBreakpoint(mediaBreakpoints.tablet_l),

    largeScreen: createBreakpoint(mediaBreakpoints.largeScreen),
    extraLargeScreen: createBreakpoint(mediaBreakpoints.extraLargeScreen),
};
