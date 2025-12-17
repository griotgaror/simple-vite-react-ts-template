import Icon from '@/components/icons/icon';
import React, { HTMLAttributes } from 'react';
import * as Style from './searchbar.style';

type SearchbarValue = string | undefined;

interface SearchbarProps extends HTMLAttributes<HTMLDivElement> {
    placeholder?: string;
    onSearch?: (searchValue?: SearchbarValue) => void;
    initValue?: SearchbarValue;
}

export default function Searchbar({
    placeholder = 'Search',
    onSearch,
    initValue = undefined,
    ...props
}: SearchbarProps) {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [searchValue, setSearchValue] = React.useState<SearchbarValue>(initValue);
    const hasInput = searchValue !== undefined && searchValue.length > 0;

    const handleOnChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value.trimStart();
        setSearchValue(input.length > 0 ? input : undefined);
    }, []);

    const clearSearchValue = React.useCallback(() => {
        setSearchValue(undefined);
        onSearch?.(undefined);
        inputRef.current?.focus();
    }, [onSearch]);

    React.useEffect(() => {
        if (!onSearch) return;
        const debounceTimer = setTimeout(() => {
            onSearch(searchValue);
        }, 500);
        inputRef.current?.focus();
        return () => clearTimeout(debounceTimer);
    }, [searchValue, onSearch]);

    return (
        <Style._Searchbar
            aria-label={props['aria-label']}
            aria-haspopup={props['aria-haspopup'] || false}
            aria-disabled={props['aria-disabled']}
        >
            <Icon icon='iconSearch' />
            <Style._SearchbarInput
                ref={inputRef}
                type='text'
                value={searchValue || ''}
                placeholder={placeholder}
                onChange={handleOnChange}
                disabled={Boolean(props['aria-disabled'])}
            />
            {hasInput && (
                <Icon
                    icon='iconX'
                    onClick={clearSearchValue}
                    color='#e34e4e'
                />
            )}
        </Style._Searchbar>
    );
}
