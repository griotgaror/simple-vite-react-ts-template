import styled, { css } from 'styled-components';

export const _Input = styled('input')`
    ${({ theme }) => css`
        background: ${theme.colorMode.secondaryColor};
        border-radius: ${theme.layout.borderRad};
        border: 1.2px solid transparent;
        display: grid;
        padding: ${theme.layout.btnSpace} 15px;
        width: 100%;
        filter: brightness(1.3);

        &:focus {
            border: 1.2px solid ${theme.colorMode.detailColor2};
        }
    `}
`;
