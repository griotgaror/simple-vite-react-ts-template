import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { createPortal } from 'react-dom';

interface PortalComponentProps {
    children: React.ReactNode;
    id?: string;
    onExitComplete?: () => void;
}

export default function PortalComponent({
    children,
    id,
    onExitComplete,
}: PortalComponentProps) {
    const rootElement = document.querySelector('#app') as HTMLElement;

    return createPortal(
        <AnimatePresence
            key={id}
            onExitComplete={onExitComplete}
        >
            {children}
        </AnimatePresence>,
        rootElement,
    );
}
