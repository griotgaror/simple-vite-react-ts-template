import { DefaultInputProps } from '@/types/global.types';
import React, { ChangeEvent } from 'react';
import * as Style from './input.style';

interface InputProps extends DefaultInputProps {
    onChange?: (input: string) => void;
}

export default function Input({ onChange, ...props }: InputProps) {
    const handleOnChange = function (e: ChangeEvent<HTMLInputElement>) {
        const inputContent = e.target.value;
        if (onChange) {
            onChange(inputContent);
        }
    };

    return (
        <Style._Input
            onChange={handleOnChange}
            {...props}
        />
    );
    0;
}
