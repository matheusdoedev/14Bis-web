import styled from "styled-components";

export const PaginaPrincipalContainer = styled.main`
  & {
  }
`;

export const Conteudo = styled.section`
  & {
    width: 100%;
    padding: var(--gap-lg) 0;

    h1 {
      color: var(--blue);
      align-self: flex-start;
    }

    p {
      font-weight: 700;
      font-size: 18;
      align-self: flex-start;
      margin-top: var(--gap-md);
    }
  }
`;

export const Menu = styled.nav`
  & {
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    margin-top: var(--gap-lg);
    width: 100%;

    a {
      font-size: 1.5rem;
      color: var(--gray);
      font-weight: 400;
      text-align: left;
      border-top: 1px solid var(--gray);

      display: flex;
      justify-content: space-between;
      align-items: center;

      :last-child {
        border-bottom: 1px solid var(--gray);
      }
    }
  }
`;
