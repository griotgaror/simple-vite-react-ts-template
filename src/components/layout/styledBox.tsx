import React from 'react';
import styled, { RuleSet, css } from 'styled-components';

const customClasses: Record<string, RuleSet> = {
    flex: css`
        display: flex;
    `,
    'flex-column': css`
        display: flex;
        flex-direction: column;
    `,
    'flex-center': css`
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    grid: css`
        display: grid;
    `,
    'justify-content-between': css`
        justify-content: space-between;
    `,
    'flex-box': css`
        display: flex;
        align-items: center;
        gap: 5px;
    `,
};

interface CreateStyleValue {
    (className: string | undefined): string | RuleSet;
}

export const createStyleValue: CreateStyleValue = function (className) {
    if (!className) return css``;

    // Split the className string in single propertys
    const cssPropertys = className?.split(';');

    // Generate the css style
    const styles = cssPropertys?.map((property) => {
        // Remove spaces from property
        const styleValue = property.replace(' ', '');

        // Check for custom classes
        if (styleValue in customClasses) {
            return customClasses[styleValue];
        }

        // Check if it's a valid CSS property (has ':')
        if (styleValue.includes(':')) {
            const [prop, property] = styleValue.split(':');
            return `${prop.trim()} : ${property.trim()};`;
        }

        // Return empty string if it's not a valid class or CSS property
        return '';
    });

    return css`
        ${styles?.join('')}
    `;
};

const _StyledBox = styled('div')<{ className?: string }>`
    ${(props) => createStyleValue(props.className)}
`;

interface StyledBoxProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function StyledBox({ ...props }: StyledBoxProps) {
    return <_StyledBox {...props}>{props.children}</_StyledBox>;
}
