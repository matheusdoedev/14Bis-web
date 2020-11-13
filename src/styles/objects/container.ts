import styled from "styled-components";

export const Container = styled.div`
  & {
    width: 90%;
    min-height: 100vh;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    position: relative;
    padding-bottom: 100px;
  }
`;
