import styled from "styled-components";
// components
import { Button } from "./../../styles/objects/button";

export const ModalContainer = styled.section`
  & {
    display: none;
    opacity: 0;
    transition: 0.3s;
  }

  &.active {
    display: block;
    opacity: 1;
    transition: 0.3s;

    background: var(--gradient);
    padding: var(--gap-xl) calc(var(--gap) * 4) calc(var(--gap) * 4)
      calc(var(--gap) * 4);
    width: 80%;

    position: absolute;
    z-index: 900;
    left: 10%;
    top: 10%;

    h2 {
      color: white;
      margin-top: var(--gap-md);
      margin-bottom: var(--gap-md);
    }

    p {
      font-size: 18px;
      color: white;
      margin-bottom: var(--gap-sm);
    }

    a {
      margin-top: var(--gap-xl);
    }

    textarea {
      width: 100%;
      height: 134px;
    }
  }
`;

export const CloseButton = styled(Button)`
  & {
    display: flex;
    place-content: center;
    position: absolute;
    width: 24px;
    height: 24px;
    left: 89%;
    top: 3%;
    z-index: 950;
    background: none;
    color: none;

    img {
      position: relative;
      top: -12px;
      width: 24px;
      height: 24px;
      max-width: auto;
    }
  }
`;
