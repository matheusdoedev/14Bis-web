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
        position: relative;
    }

    img {
        display: block;
        width: 100%;
    }

    ul {
        list-style: none;
    }

    @media (max-width: 768px) {
        .container-fluid {
            min-height: 100vh;
            overflow: hidden;
            display: block;
            position: relative;
            padding-bottom: 100px;
        }
    }
`;

export default Reset;
