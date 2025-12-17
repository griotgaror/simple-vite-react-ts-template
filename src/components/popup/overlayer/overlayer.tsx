import React from 'react';
import * as Style from './overlayer.style';

import PortalComponent from '@/components/layout/portalComponent';

interface OverlayerProps extends Style.OverlayerStyleProps {
    onClick?: () => void;
    isVisible: boolean;
    children?: React.ReactNode;
    id?: string;
    onExitComplete?: () => void;
}

export default function Overlayer({
    isVisible,
    onClick,
    zindex = 5,
    children,
    onExitComplete,
}: OverlayerProps) {
    const id = `overlayer-${zindex}`;

    return (
        <PortalComponent
            id={id}
            onExitComplete={onExitComplete}
        >
            {isVisible && (
                <Style._OverlayerWrapper
                    key={`popup-overlayer-${zindex}`}
                    role='dialog'
                    aria-modal={true}
                    zindex={zindex}
                >
                    <Style._Overlayer
                        initial='fadeOut'
                        animate='fadeIn'
                        exit='fadeOut'
                        onClick={onClick}
                        transition={{
                            duration: 0.1,
                        }}
                    />
                    {children}
                </Style._OverlayerWrapper>
            )}
        </PortalComponent>
    );
}
