import styled from "styled-components";

export const TextListContainer = styled.ul`
  & {
    li {
      display: flex;
      align-items: flex-start;

      img {
        width: 11px;
        height: 11px;
        margin-right: var(--gap);
      }

      p {
        margin-top: -6px;
      }
    }
  }
`;
