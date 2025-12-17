import styled from 'styled-components';

export const _PopupHeading = styled('div')`
    background: ${({ theme }) => theme.colorMode.secondaryColor};
    filter: brightness(1.3);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    gap: 10px;
`;

export const _PopupTitle = styled('span')`
    font-weight: 500;
    font-size: 1.3rem;
`;
