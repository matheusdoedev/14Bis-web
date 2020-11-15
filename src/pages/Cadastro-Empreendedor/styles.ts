import styled from "styled-components";

export const CadastroEmpreendedorContainer = styled.main`
  & {
    background: var(--gradient);
    min-height: 100vh;
    padding: var(--gap-xl) 0;
  }
`;

export const CadastroEmpreendedorForm = styled.form`
  & {
    background: white;
    width: 100%;
    padding: var(--gap-md) calc(var(--gap) * 4);
    border: 1px solid #d4d4d4;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
    border-radius: 4px;

    h1,
    h2 {
      color: var(--blue);
    }

    h1,
    h2,
    h3 {
      margin-bottom: var(--gap-md);
    }

    h3 {
      font-size: 18px;
      color: var(--gray);
    }

    a {
      width: 100%;
    }

    button {
      margin-top: var(--gap-lg);
    }
  }
`;
