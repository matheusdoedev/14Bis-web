import styled from "styled-components";

export const TitleWithIcon = styled.h2`
  & {
    display: flex;

    img {
      width: 45px;
      height: 24px;
      margin-right: var(--gap);
    }
  }
`;
