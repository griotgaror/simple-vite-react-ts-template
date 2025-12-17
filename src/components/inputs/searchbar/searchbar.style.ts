import styled, { css } from 'styled-components';

export const _Searchbar = styled('div')`
    ${({ theme }) => css`
        background: ${theme.colorMode.secondaryColor};
        border-radius: ${theme.layout.borderRad};
        border: 1.2px solid transparent;
        display: grid;
        grid-template-columns: max-content 1fr max-content;
        padding: 0 15px;
        gap: 15px;
        width: 100%;
        align-items: center;
        cursor: default;
        filter: brightness(1.3);

        &:focus-within {
            border: 1.2px solid ${theme.colorMode.detailColor1};
        }
    `}
`;

export const _SearchbarInput = styled('input')`
    background: transparent;
    border: none;
    height: 100%;
    padding: ${({ theme }) => theme.layout.btnSpace} 0;
`;
