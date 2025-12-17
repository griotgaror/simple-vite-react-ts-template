import { motion } from 'framer-motion';
import styled from 'styled-components';

export interface OverlayerStyleProps {
    zindex?: number;
}

export const _OverlayerWrapper = styled('div')<OverlayerStyleProps>`
    z-index: ${({ zindex }) => zindex};
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: grid;
`;

export const _Overlayer = styled(motion.div).attrs({
    variants: {
        fadeOut: {
            opacity: 0,
        },
        fadeIn: {
            opacity: 1,
        },
    },
})`
    background: ${({ theme }) => theme.colorMode.primaryColor}a5;
    /* background: rgba(10, 10, 10, 0.5); */
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: default;
`;
