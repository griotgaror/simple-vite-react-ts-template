import React from 'react';
import * as Style from './sidedPopup.style';

import Loading from '@/components/layout/loading/loading';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { PopupDefaultProps } from '@/types/global.types';
import Overlayer from '../overlayer/overlayer';

interface SidedPopupProps extends PopupDefaultProps {
    topCnt?: React.ReactNode;
}

export default function SidedPopup({
    children,
    isVisible,
    onClose,
    isLoading,
    topCnt,
}: SidedPopupProps) {
    const { mobile_l } = useBreakpoint();

    return (
        <Overlayer
            isVisible={isVisible}
            onClick={onClose}
        >
            <Style._SidedPopup
                initial={mobile_l ? 'fadeOutRight' : 'fadeOutBottom'}
                animate={mobile_l ? 'fadeInRight' : 'fadeInBottom'}
                exit={mobile_l ? 'fadeOutRight' : 'fadeOutBottom'}
            >
                {isLoading && <Loading />}
                {!isLoading && topCnt && (
                    <Style._SidedPopupTop>{topCnt}</Style._SidedPopupTop>
                )}
                {!isLoading && <Style._SidedPopupBody>{children}</Style._SidedPopupBody>}
            </Style._SidedPopup>
        </Overlayer>
    );
}
