import styled from "styled-components";

export const Row = styled.div`
  & {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media (min-width: 960px) {
      min-height: 0;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      padding-bottom: 0;
    }
  }
`;
