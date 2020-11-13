import styled from "styled-components";

export const MenuContainer = styled.nav`
  & {
    align-self: flex-start;
    display: flex;
    flex-direction: column;
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
