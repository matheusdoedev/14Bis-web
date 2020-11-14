import styled from "styled-components";
// components
import { Link } from "react-router-dom";

export const ReturnButtonContainer = styled(Link)`
  & {
    grid-column-start: 3;
    justify-self: end;

    img {
      width: 25px;
    }
  }
`;
