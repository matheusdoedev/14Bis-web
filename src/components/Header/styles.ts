import styled from "styled-components";

export const HeaderContainer = styled.header`
  & {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    padding-top: calc(var(--gap) * 4);
    align-items: center;

    @media (min-width: 960px) {
      display: none;
    }
  }
`;

export const LogoHeader = styled.img`
  & {
    grid-column-start: 2;
    justify-self: center;

    width: 61px;
    height: 20px;
  }
`;

export const SideMenuToggle = styled.div`
  & {
    :before {
      content: "";
      display: block;
      width: 26px;
      border: 1px solid var(--blue);
    }

    :after {
      content: "";
      display: block;
      width: 26px;
      border: 1px solid var(--blue);
      margin-top: 10px;
      box-shadow: 0 12px 0 0 var(--blue);
    }
  }
`;
