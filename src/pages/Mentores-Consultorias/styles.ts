import styled from "styled-components";

export const Parabens = styled.h2`
  & {
    :after {
      content: "";
      display: block;
      width: 100%;
      border: 1px solid var(--gray);
      margin: var(--gap-lg) 0 var(--gap-md) 0;
    }

    @media (min-width: 960px) {
      :after {
        display: none;
      }
    }
  }
`;
