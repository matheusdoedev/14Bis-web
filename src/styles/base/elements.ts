import { createGlobalStyle } from "styled-components";

const Elements = createGlobalStyle`
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: 700;
        line-height: 1.15em;
    }

    h1 {
        font-size: 1.875rem;
    }

    h2 {
        font-size: 1.125rem;
    }

    a,
    button {
        font-size: 1rem;
        font-weight: 700;
    }

    p,
    input,
    span {
        font-size: .875rem;
        font-weight: 400;
    }

    p {
        line-height: 1.5em;
        max-width: 30em;
    }

    a,
    button,
    input,
    span {
        line-height: 1.37em;
    }

    a,
    button {
        font-weight: 700;
    }
`;

export default Elements;
