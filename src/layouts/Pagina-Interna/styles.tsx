import styled from "styled-components";
// components
import { Link } from "react-router-dom";

export const PaginaInternaContainer = styled.main`
  & {
    h1 {
      margin-top: var(--gap-lg);
      color: var(--primary);
      align-self: flex-start;
      width: 100%;

      :after {
        content: "";
        display: block;
        width: 100%;
        border: 1px solid var(--gray);
        margin: var(--gap-lg) 0 var(--gap-md) 0;
        opacity: 0.2;

        @media (min-width: 768px) {
          margin: var(--gap-sm) 0 var(--gap-lg) 0;
        }
      }
    }
  }

  &.modal {
    background: var(--primary);
    filter: brightness(50%);
    min-height: 150vh;
    cursor: pointer;
  }
`;

export const ReturnButton = styled(Link)`
  & {
    grid-column-start: 3;
    justify-self: end;
  }
`;

export const Conteudo = styled.article`
  & {
    width: 100%;

    p,
    h2 {
      max-width: 100%;
      margin-bottom: var(--gap-md);
    }
  }
`;
