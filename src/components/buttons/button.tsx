import React from 'react';

import { IconVariants } from '@/utils/icons';
import { Link } from 'react-router-dom';
import Icon from '../icons/icon';
import * as Style from './button.style';

export interface ButtonProps {
    txt?: string;
    icon?: IconVariants;
    onClick?: () => void;
    isDisabled?: boolean;
    to?: string;
    state?: unknown | undefined;
    className?: string;
}

export default function Button({
    onClick,
    isDisabled,
    txt,
    icon,
    to,
    state,
    className,
}: ButtonProps) {
    const content = (
        <>
            {icon && <Icon icon={icon} />}
            {txt && <p>{txt}</p>}
        </>
    );

    const sharedProps = {
        onClick: isDisabled ? () => null : onClick,
        className: `${className ?? ''} ${txt ? '' : 'icon-btn'} ${
            !isDisabled ? '' : 'disable'
        }`.trim(),
        'aria-disabled': isDisabled,
    };

    if (to) {
        return (
            <Style._Button
                as={Link}
                to={to}
                state={state}
                {...sharedProps}
            >
                {content}
            </Style._Button>
        );
    }

    return <Style._Button {...sharedProps}>{content}</Style._Button>;
}
