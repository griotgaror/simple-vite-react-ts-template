import React from 'react';
import { useTheme } from 'styled-components';

import * as ReactSpinners from 'react-spinners';

const loaders = {
    barLoader: ReactSpinners.BarLoader,
    bounceLoader: ReactSpinners.BounceLoader,
    moonLoader: ReactSpinners.MoonLoader,
    hashLoader: ReactSpinners.HashLoader,
};

type LoaderVariants = keyof typeof loaders;

interface LoaderProps {
    loader: LoaderVariants;
    size?: number;
    width?: number;
}

export default function Loader({ loader, size = 60, width = 100 }: LoaderProps) {
    const theme = useTheme();
    const CustomLoader = loaders[loader];

    return (
        <CustomLoader
            loading={true}
            size={size}
            width={width}
            color={theme.colorMode.detailColor2}
            aria-label='loading spinner'
        />
    );
}
