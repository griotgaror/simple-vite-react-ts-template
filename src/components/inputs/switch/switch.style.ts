import styled from 'styled-components';

export const _Switch = styled('div')`
    border-radius: 30px;
    height: 25px;
    width: 50px;
    display: grid;
    align-items: center;
    background: #e73d5c65;
    cursor: pointer;
    padding: 0px 2px;

    & > span {
        background: #e73d5c;
        transform: translateX(0%);
    }

    &[data-active='true'] {
        background: #6eaf5065;

        & > span {
            background: #6eaf50;
            transform: translateX(110%);
        }
    }
`;

export const _SwitchThumb = styled('span')`
    transition: 0.2s all linear;
    height: 22px;
    width: 22px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
