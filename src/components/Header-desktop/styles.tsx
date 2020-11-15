import styled from "styled-components";

export const HeaderContainer = styled.header`
  & {
    width: 100%;
    background: var(--gradient);
    padding: var(--gap) 0;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const NavWrapper = styled.nav`
  & {
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
    display: flex;
    justify-content: flex-end;

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
