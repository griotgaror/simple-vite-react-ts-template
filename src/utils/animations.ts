export type Animation = 'zoom' | 'fade' | 'slideFromBtm' | 'zoomAndSlideFromBtm';

type AnimationRecord = Record<string, number | string>;
type AnimationVariants = Record<string, AnimationRecord>;

export const animations: Record<Animation, AnimationVariants> = {
    zoom: {
        zoomIn: {
            opacity: 1,
            scale: 1.0,
        },
        zoomOut: {
            opacity: 0,
            scale: 0.95,
        },
    },
    fade: {
        fadeIn: {
            opacity: 1,
        },
        fadeOut: {
            opacity: 0,
        },
    },
    slideFromBtm: {
        slideInFromBtm: {
            opacity: 1,
            transform: 'translateY(0%)',
        },
        slideOutToBtm: {
            opacity: 0,
            transform: 'translateY(35px)',
        },
    },
    zoomAndSlideFromBtm: {
        zoomAndSlideInFromBtm: {
            opacity: 1,
            scale: 1.0,
            transform: 'translateY(0%)',
        },
        zoomAndSlideOutToBtm: {
            opacity: 0,
            scale: 0.8,
            transform: 'translateY(35px)',
        },
    },
};

export const motionVariants = {
    ...animations.zoom,
    ...animations.fade,
    ...animations.slideFromBtm,
    ...animations.zoomAndSlideFromBtm,
};
