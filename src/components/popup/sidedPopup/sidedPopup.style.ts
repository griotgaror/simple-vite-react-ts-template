import { breakpoint } from '@/styles/styledBreakpoints';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const _SidedPopup = styled(motion.aside).attrs({
    variants: {
        fadeInRight: {
            opacity: 1,
            transform: 'translateX(0%)',
        },
        fadeOutRight: {
            opacity: 0,
            transform: 'translateX(100%)',
        },
        fadeInBottom: {
            opacity: 1,
            transform: 'translateY(0%)',
        },
        fadeOutBottom: {
            opacity: 0,
            transform: 'translateY(100%)',
        },
    },
})`
    background: ${({ theme }) => theme.colorMode.secondaryColor}a5;
    position: fixed;
    z-index: 10;
    backdrop-filter: blur(5px);
    width: 100%;
    height: 85%;
    max-height: 85%;
    right: 0;
    bottom: 0;
    border-radius: 0.5rem 0.5rem 0 0;
    border: 1.4px solid rgba(200, 200, 200, 0.06);
    display: grid;

    ${breakpoint.mobile_l} {
        width: 550px;
        height: 100dvh;
        max-height: 100dvh;
        border-radius: 0.5rem 0 0 0.5rem;
    }
`;

export const _SidedPopupTop = styled('div')`
    padding: 1.5rem 1.2rem;
    padding-bottom: 1rem;
    z-index: 1;
`;

export const _SidedPopupBody = styled('div')`
    padding: 2.3rem 1.2rem;
    min-height: 100%;
    overflow: auto;
`;
