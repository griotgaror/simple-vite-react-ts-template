import React from 'react';
import * as Style from './centeredPopup.style';

import { PopupDefaultProps } from '@/types/global.types';
import Overlayer from '../overlayer/overlayer';
import PopupHeading from '../popupHeading/popupHeading';

interface CenteredPopupProps extends PopupDefaultProps {}

export default function CenteredPopup({
    children,
    isVisible,
    title,
    onClose,
    zindex,
    onExitComplete,
    closeOnOverlayerClick,
    ...props
}: CenteredPopupProps) {
    const id = 'centered-popup';

    return (
        <Overlayer
            isVisible={isVisible}
            zindex={zindex}
            onClick={closeOnOverlayerClick ? onClose : () => null}
            onExitComplete={onExitComplete}
        >
            <Style._CenteredPopup
                key={id}
                data-testid={props['data-testid'] || id}
                initial='fadeOutToTop'
                animate='fadeInFromTop'
                exit='fadeOutToTop'
                transition={{
                    duration: 0.18,
                    ease: 'easeInOut',
                }}
            >
                <PopupHeading
                    title={title}
                    onClose={onClose ? onClose : () => null}
                />
                <Style.PopupBody>{children}</Style.PopupBody>
            </Style._CenteredPopup>
        </Overlayer>
    );
}
