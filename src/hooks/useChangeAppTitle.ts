import React from 'react';

export default function useChangeAppTitle(title?: string | undefined) {
    React.useEffect(() => {
        if (!title) return;

        const setNewTitle = (newTitle: string) => (document.title = newTitle);

        const pageWithoutSlash = title?.replace('/', '');
        const firstLetter = pageWithoutSlash.charAt(0).toLocaleUpperCase();

        setNewTitle(`${__globals__.title} - ${firstLetter + pageWithoutSlash.slice(1)}`);
    }, [title]);
}
