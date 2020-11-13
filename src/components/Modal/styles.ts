import styled from "styled-components";

export const ModalContainer = styled.section`
  & {
    display: none;
    opacity: 0;
    transition: 0.3s;
  }

  &.active {
    display: flex;
    flex-direction: column;

    background: var(--gradient);
    padding: var(--gap-xl) calc(var(--gap) * 4) calc(var(--gap) * 4)
      calc(var(--gap) * 4);
    max-width: 343px;

    position: absolute;
    z-index: 900;
    left: 10vw;
    top: 28.79%;
    bottom: 3.9%;

    h2 {
      color: white;
      margin-top: var(--gap-md);
      margin-bottom: var(--gap-md);
    }

    p {
      font-size: 18px;
      color: white;
    }

    a {
      margin-top: var(--gap-xl);
    }
  }
`;
