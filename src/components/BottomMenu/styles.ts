import styled from "styled-components";
// components
import { Link } from "react-router-dom";

export const BottomMenuContainer = styled.nav`
  & {
    background: var(--gradient);
    border-radius: 35px 35px 0 0;
    padding: var(--gap-md) 0;
    width: 100vw;

    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export const BottomMenuItem = styled(Link)`
  & {
    padding: 0;

    display: flex;
    flex-direction: column;
    place-content: center;

    p {
      color: white;
      font-weight: 400;
      margin-top: 8px;
    }
  }
`;
