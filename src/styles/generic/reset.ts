import { createGlobalStyle } from "styled-components";

const Reset = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    *:before,
    *:after {
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: initial;
        padding: 0.625rem;
    }

    button {
        cursor: pointer;
    }

    fieldset {
        border: none;
    }

    html,
    body {
        font-family: "Open Sans", Helvetica, Arial, sans-serif;
        color: var(--gray);

        height: 100%;
        display: flex;
        position: relative;
        flex-direction: column;
        margin: 0;
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
