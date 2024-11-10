import React from 'react';
import { Outlet } from 'react-router-dom';
import * as Style from './appLayout.style';

export default function AppLayout() {
    return (
        <Style._AppLayout animate='visible'>
            <Outlet />
        </Style._AppLayout>
    );
}
