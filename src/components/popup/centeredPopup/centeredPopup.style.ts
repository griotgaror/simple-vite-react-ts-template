import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const _CenteredPopup = styled(motion.div).attrs({
    variants: {
        fadeOutToTop: {
            opacity: 0,
            transform: 'translateY(40px)',
        },
        fadeInFromTop: {
            opacity: 1,
            transform: 'translateY(0%)',
        },
    },
})`
    ${({ theme }) => css`
        background: ${theme.colorMode.secondaryColor};
        border-radius: 10px;
        display: grid;
        grid-template-rows: max-content 1fr;
        justify-self: center;
        align-self: center;
        max-height: 80%;
        max-width: 700px;
        width: 95%;
        z-index: 1;
        overflow: hidden;
    `}
`;

export const PopupBody = styled('div')`
    padding: 20px;
    overflow: scroll;
`;
