import { createGlobalStyle } from "styled-components";

const Colors = createGlobalStyle`
    :root {
        --primary: #3585CA;
        --secondary: #673280;
        --gradient: linear-gradient(91.6deg, #3585CA 25%, #673280 125.15%);
        --gray: #8F8F8F;
    }
`;

export default Colors;
