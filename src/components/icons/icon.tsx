import React from 'react';
import * as Style from './icon.style';

import { IconVariants, icons } from '@/utils/icons';

export interface TablerIconProps extends Style.IconStyle {
    icon: IconVariants;
    onClick?: () => void;
}

export default function Icon({ icon, onClick, ...props }: TablerIconProps) {
    const CustomIcon = icons[icon];

    return (
        <Style._Icon
            {...props}
            onClick={onClick}
        >
            <CustomIcon
                className='icon'
                stroke='1.5'
            />
        </Style._Icon>
    );
}
