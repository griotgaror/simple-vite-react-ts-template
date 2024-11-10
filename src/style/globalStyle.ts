import { assets } from '@/utils/assets';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: ${assets.fonts.openSans.family};
        src: url(${assets.fonts.openSans.regular});
    }

    *,
    *::before,
    *::after {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        user-select: none;
        font-family: ${assets.fonts.openSans.family};
        font-size: 16px;
        color: ${({ theme }) => theme.colors.txt};
        line-height: 1.2;
        letter-spacing: 0.2px;
        scroll-behavior: smooth;
        transition: background 0.2s ease-in;
    }
    
    html, body, #app {
        background-color: ${({ theme }) => theme.colorMode.bgPrimary};
        height: 100dvh;
        width: 100%;
        max-width: 100%;
    }

    /* Stile, die nur für nicht-WebKit-basierte Browser gelten */
    @media all and (min--moz-device-pixel-ratio:0) {
        * {
            scrollbar-color: ${({ theme }) =>
                theme.colorMode.detailColor2} transparent;
        }
    }
    
    ::-webkit-scrollbar, ::-webkit-scrollbar-track {
        background-color: transparent;
        width: 5px;
    }

    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colorMode.detailColor2};
        border-radius: 20px;
        -webkit-border-radius: 20px;
    }

    ::-webkit-scrollbar-thumb:hover {
        cursor: grab;
    }

    /* remove the blue highlight color on mobile tap */
    * {
        -webkit-tap-highlight-color: transparent; 
    }

    ul, ol, li {
        list-style: none;
    }

    input, button {
        border: none;
        outline: none;
        background: transparent;
    }

    button, button > *, 
    a, a > * {
        cursor: pointer;
    }

    input {
        cursor: auto;
    }

    a {
        text-decoration: none;
    }
`;
