import React from 'react';
import styled from 'styled-components';

const _Divinder = styled('hr')`
    border: 1px solid ${({ theme }) => theme.colorMode.detailColor1};
    width: 100%;
`;

export default function Divinder() {
    return <_Divinder />;
}
