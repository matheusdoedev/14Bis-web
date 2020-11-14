import styled from "styled-components";

export const MenuContainer = styled.nav`
  & {
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    width: 100%;

    a {
      border-top: 1px solid var(--gray);

      display: grid;
      grid-template-columns: 0.75fr 3.25fr 1fr;
      align-items: center;

      span {
        font-size: 1.5rem;
        color: var(--gray);
        font-weight: 400;
        text-align: left;
        justify-self: start;
      }

      img:last-child {
        width: 22px;
        height: 10px;
        justify-self: flex-end;
      }

      img:first-child {
        width: 35px;
        height: 35px;
      }

      :last-child {
        border-bottom: 1px solid var(--gray);
      }
    }
  }

  @media (min-width: 960px) {
    & {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      row-gap: var(--gap-lg);

      a {
        border-top: none;

        display: flex;
        flex-direction: column;
        align-items: center;
      }

      a:last-child {
        border-bottom: none;
      }

      img:first-child {
        margin-bottom: var(--gap-sm);
      }

      img:last-child {
        display: none;
      }
    }
  }
`;
