import styled from "styled-components";

export const HeaderContainer = styled.header`
  & {
    width: 100%;
    padding-top: calc(var(--gap) * 4);
    align-items: center;

    @media (min-width: 960px) {
      display: none;
    }
  }
`;

export const LogoHeader = styled.img`
  & {
    width: 61px;
    height: 20px;

    margin: 0 auto;
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
