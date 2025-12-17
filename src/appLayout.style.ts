import { motion } from 'framer-motion';
import styled from 'styled-components';

export const _AppLayout = styled(motion.div).attrs({
    initial: 'hidden',
    variants: {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        },
    },
})`
    min-height: 100dvh;
    width: 100%;
    position: absolute;
    z-index: 1;
    display: grid;
`;
