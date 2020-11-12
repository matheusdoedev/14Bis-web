import styled from "styled-components";

export const HeaderContainer = styled.header`
  & {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 2fr 1fr;
    padding-top: calc(var(--gap) * 4);

    img {
      grid-column-start: 2;
      justify-self: center;
    }
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
