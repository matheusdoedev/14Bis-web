import styled from "styled-components";
// components
import { Link } from "react-router-dom";

export const BottomButtonWrapper = styled(Link)`
  & {
    width: 100%;
    padding: var(--gap-sm);
    border-top: 1px solid var(--gray);
    border-bottom: 1px solid var(--gray);
    font-size: 1.5rem;
    color: var(--gray);
    font-weight: 400;
    text-align: left;
    align-self: end;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: var(--gap-lg);

    img {
      width: 22px;
      height: 10px;
    }
  }

  & + & {
    margin-top: 0;
    border-top: 0;
  }

  &:last-child {
    margin-bottom: var(--gap-lg);
  }
`;
