import styled, { css } from 'styled-components';

export const _Button = styled('button')`
    ${({ theme }) => css`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        min-width: 120px;
        height: max-content;
        border-radius: ${theme.layout.borderRad};
        background: ${theme.colorMode.detailColor2};
        padding: var(--btn-space) 1.2rem;

        &.icon-btn {
            min-width: max-content;
            padding: var(--btn-space);
            background: ${theme.colorMode.secondaryColor};
            backdrop-filter: none;

            &:hover {
                filter: brightness(1.2);
            }

            &:hover .icon {
                --iconColor: ${theme.colorMode.detailColor2};
                scale: 1.1;
            }
        }

        p {
            font-weight: 500;
        }

        &.no-bg {
            background: transparent;
        }

        &:hover {
            filter: brightness(1.2);
        }

        &[aria-disabled='true'] {
            pointer-events: none;
            cursor: not-allowed;
            filter: brightness(0.75);
        }
    `}
`;
