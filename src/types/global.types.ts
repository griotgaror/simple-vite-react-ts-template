import React from 'react';

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export interface DefaultComponentProps {
    className?: string;
    children?: React.ReactNode;
    'data-testid'?: string;
}

export interface PopupDefaultProps extends DefaultComponentProps {
    isVisible: boolean;
    title?: string;
    titleIcon?: string;
    closeFn?: () => void;
    isLoading?: boolean;
    zindex?: number;
    onExitComplete?: () => void;
}

export interface DefaultImageProps
    extends React.ImgHTMLAttributes<HTMLImageElement> {
    size?: string;
}

export interface DefaultButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        DefaultComponentProps {}

export type DefaultFormProps = React.FormHTMLAttributes<HTMLFormElement>;

export interface DefaultInputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {}
