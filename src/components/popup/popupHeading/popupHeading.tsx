import Button from '@/components/buttons/button';
import React from 'react';
import * as Style from './popupHeading.style';

interface PopupHeadingProps {
    title?: string;
    onClose: () => void;
}

export default function PopupHeading({ title, onClose }: PopupHeadingProps) {
    return (
        <Style._PopupHeading>
            <Style._PopupTitle>{title}</Style._PopupTitle>
            <Button
                icon='iconX'
                onClick={onClose}
            />
        </Style._PopupHeading>
    );
}
