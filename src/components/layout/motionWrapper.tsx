import { motion, Transition, useAnimation } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

import { Animation, animations, motionVariants } from '@/utils/animations';
import { createStyleValue } from './styledBox';

const _MotionWrapper = styled(motion.div).attrs({
    variants: motionVariants,
})<{ className?: string }>`
    ${(props) => createStyleValue(props.className)}
`;

interface MotionWrapperProps {
    className?: string;
    children: React.ReactNode;
    animation?: Animation;
    transition?: Transition;
    id?: string;
    withExitAnimation?: boolean;
}

export default function MotionWrapper({
    animation = 'zoom',
    transition,
    id = '',
    withExitAnimation = false,
    ...props
}: MotionWrapperProps) {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    const animationRecords = animations[animation];
    const animateIn = Object.values(animationRecords)[0];
    const animateOut = Object.values(animationRecords)[1];

    React.useEffect(() => {
        if (inView) {
            controls.start(animateIn);
        }
    }, [inView, controls]);

    return (
        <_MotionWrapper
            ref={ref}
            key={`motion-wrapper-${id}`}
            id='motion-wrapper'
            initial={animateOut}
            animate={controls}
            // withExitAnimation fixes the bug that popups no longer disappear
            exit={withExitAnimation ? animateOut : undefined}
            transition={{
                duration: 0.4,
                delay: 0.1,
                ease: 'linear',
                type: 'spring',
                ...transition,
            }}
            {...props}
        >
            {props.children}
        </_MotionWrapper>
    );
}
