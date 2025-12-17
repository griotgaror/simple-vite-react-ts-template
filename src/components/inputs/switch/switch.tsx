import Icon from '@/components/icons/icon';
import React from 'react';
import * as Style from './switch.style';

interface SwitchProps {
    value?: boolean;
    onChange?: (newValue: boolean) => void;
}

export default function Switch({ value = false, onChange }: SwitchProps) {
    const handleOnClick = function () {
        if (onChange) onChange(!value);
    };

    return (
        <Style._Switch
            role='switch'
            data-active={String(value)}
            onClick={handleOnClick}
        >
            <Style._SwitchThumb>
                <Icon
                    size='17px'
                    icon={value ? 'iconCheck' : 'iconX'}
                />
            </Style._SwitchThumb>
        </Style._Switch>
    );
}
