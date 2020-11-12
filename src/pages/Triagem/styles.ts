import styled from "styled-components";

export const TriagemContainer = styled.main`
  & {
    background: var(--gradient);
    min-height: 100vh;
    padding: var(--gap-xl) 0;
  }
`;

export const TriagemForm = styled.form`
  & {
    background: white;
    width: 90vw;
    padding: var(--gap-md) calc(var(--gap) * 4);
    border: 1px solid #d4d4d4;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
    border-radius: 4px;

    h1 {
      color: var(--blue);
      margin-bottom: var(--gap-md);
    }

    a {
      width: 100%;
    }
  }
`;
