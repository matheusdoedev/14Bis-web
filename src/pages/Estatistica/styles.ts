import styled from "styled-components";

export const EstatisticaContainer = styled.main`
  & {
    header {
      margin-bottom: var(--gap-md);
    }

    h1 {
      width: 100%;

      :after {
        content: "";
        display: block;
        width: 100%;
        border: 1px solid var(--gray);
        margin: var(--gap-lg) 0 var(--gap-md) 0;
      }
    }
  }
`;
