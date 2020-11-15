import styled from "styled-components";

export const SelectBlock = styled.div`
  & {
    display: flex;
    max-width: 100%;
    flex-direction: column;
    margin-bottom: 16px;
    background: white;

    label {
      margin-bottom: 8px;
      color: var(--gray);
      font-weight: 400;
    }

    select {
      width: 100%;
      padding: 12px 24px;
      border: 1px solid #8f8f8f;
      border-radius: 6px;
    }

    select:focus {
      border: 1px solid var(--blue);
      outline: none;
    }
  }
`;
