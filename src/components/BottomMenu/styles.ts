import styled from "styled-components";
// components
import { Link } from "react-router-dom";

export const BottomMenuContainer = styled.nav`
  & {
    background: var(--gradient);
    border-radius: 35px 35px 0 0;
    padding: var(--gap-sm) 0 var(--gap) 0;
    width: 100vw;

    display: flex;
    justify-content: space-around;
    align-items: center;

    position: absolute;
    bottom: 0;

    @media (min-width: 768px) {
      display: none;
    }
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
      font-size: 0.875rem;
      margin-top: 8px;
    }

    img {
      width: 35px;
      height: 35px;
      margin: 0 auto;
    }
  }
`;
