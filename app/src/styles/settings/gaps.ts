import { createGlobalStyle } from "styled-components";

const Gaps = createGlobalStyle`
    :root {
        --gap: .5rem;
        --gap-sm: 1rem;
        --gap-md: 1.5rem;
        --gap-lg: 2.5rem;
        --gap-xl: 4rem;

        @media (min-width: 960px) {
            --gap-md: 2rem;
            --gap-lg: 4rem;
            --gap-xl: 8rem;
        }
    }
`;

export default Gaps;
