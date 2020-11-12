import styled from "styled-components";
// components
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  & {
    display: inline-block;
    padding: 12px;
    text-align: center;
    background: var(--gradient);
    border-radius: 5px;
    color: white;
    transition: 0.2s;

    :hover {
      filter: brightness(85%);
      transition: 0.2s;
    }
  }
`;

export const SecondaryButton = styled(Button)`
  & {
    border: 2px solid var(--blue);
    background: white;
    color: var(--gray);
  }
`;
