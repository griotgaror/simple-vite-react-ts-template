import React from 'react';
import styled from 'styled-components';
import Loader from './loader';

const _LoadingWrapper = styled('div')`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export default function Loading() {
    return (
        <_LoadingWrapper>
            <Loader
                loader='hashLoader'
                size={80}
            />
        </_LoadingWrapper>
    );
}
