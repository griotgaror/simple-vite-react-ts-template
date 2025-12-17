import styled, { css } from 'styled-components';

export interface IconStyle {
    color?: string;
    size?: string;
}

export const _Icon = styled('div')<IconStyle>`
    ${({ theme, color, size }) => css`
        --iconSize: ${size || theme.layout.iconSize};
        display: grid;

        &,
        svg {
            transition: all 0.1s linear;
        }

        --iconColor: ${color || theme.colors.iconColor};

        .icon {
            width: var(--iconSize);
            height: var(--iconSize);
        }

        & > svg > path {
            color: var(--iconColor);
        }
    `}
`;
