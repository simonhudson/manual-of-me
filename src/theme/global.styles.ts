import { createGlobalStyle } from 'styled-components';
import { font } from './font';
import { palette } from './palette';

export const GlobalStyles = createGlobalStyle`

    html,
    body,
    fieldset {
        box-sizing: border-box;
        font-family: ${font.sansSerif};
        font-size: ${font.size}px;
        font-weight: ${font.weight};
        margin: 0;
        padding: 0;
        text-rendering: optimizeLegibility;
    }
    html, body {
        background: #fff;
        height: 100%;
    }

    ul, ol, dl {
        padding: 0;
    }

    .no-scroll {
        overflow: hidden;
    }

    p {
        line-height: 1.8rem;
        margin-bottom: 2rem;
    }

    span, strong, em {
        font-family: inherit;
        font-size: inherit;
    }

    strong {
        font-weight: 600;
    }

    .no-js-alert {
        display: block;
    }

    fieldset {
        border: 0;
        padding: 0;
    }

    details summary::marker {
        display: none;
    }

    a {
        border-bottom: 1px solid ${palette.primary.brand};
        color: inherit;
        text-decoration: none;
    }
    
`;
