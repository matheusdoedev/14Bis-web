import { createGlobalStyle } from "styled-components";

const Reset = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: initial;
        padding: 0.625rem;
    }

    body {
        font-family: "Open Sans", Helvetica, Arial, sans-serif;
        color: var(--gray);

        min-height: 100vh;
    }

    img {
        display: block;
        max-width: 100%;
    }

    ul {
        list-style: none;
    }
`;

export default Reset;
