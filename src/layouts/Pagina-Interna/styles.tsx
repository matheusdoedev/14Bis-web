import styled from "styled-components";
// components
import { Link } from "react-router-dom";

export const PaginaInternaContainer = styled.main`
  & {
    h1 {
      margin-top: var(--gap-lg);
      color: var(--blue);
      align-self: flex-start;
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

export const ReturnButton = styled(Link)`
  & {
    grid-column-start: 3;
    justify-self: end;
  }
`;

export const BottomButton = styled(Link)`
  & {
    width: 100%;
    padding: var(--gap-sm);
    border-top: 1px solid var(--gray);
    border-bottom: 1px solid var(--gray);
    font-size: 1.5rem;
    color: var(--gray);
    font-weight: 400;
    text-align: left;
    align-self: end;
    margin: var(--gap-xl) 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Conteudo = styled.article`
  & {
    width: 85%;

    p,
    h2 {
      max-width: 100%;
      margin-bottom: var(--gap-md);
    }
  }
`;
