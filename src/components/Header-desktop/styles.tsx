import styled from "styled-components";

export const HeaderContainer = styled.header`
  & {
    width: 100%;
    background: var(--gradient);
    padding: var(--gap-sm) 0;

    @media (max-width: 960px) {
      display: none;
    }
  }
`;

export const NavWrapper = styled.nav`
  & {
    ul {
      display: flex;
    }

    a {
      font-weight: 400;
      color: white;
      transition: 0.3s;

      :hover {
        transition: 0.3s;
        filter: brightness(85%);
      }
    }
  }
`;
