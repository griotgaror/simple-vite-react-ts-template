import React from 'react';
import ReactDOM from 'react-dom/client';
import ContextProviders from './contextProviders';
import Router from './router/router';

const rootElement = document.getElementById('app') as HTMLElement;

if (!rootElement) {
    throw new Error('Root element not found');
}

if (!rootElement.dataset.rendered) {
    rootElement.dataset.rendered = 'true';

    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <ContextProviders>
                <Router />
            </ContextProviders>
        </React.StrictMode>,
    );
}
