import styled from "styled-components";
// components
import { Link } from "react-router-dom";

export const MentorContainer = styled.main`
  & {
  }
`;

export const ReturnButton = styled(Link)`
  & {
    grid-column-start: 3;
    justify-self: end;
  }
`;

export const MentorAvatar = styled.div`
  & {
    width: 121px;
    height: 113px;
    border-radius: 33px;
    background: var(--gray);
    margin: var(--gap-md) 0;
  }
`;
