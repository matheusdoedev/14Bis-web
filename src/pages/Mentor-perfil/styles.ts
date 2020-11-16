import styled from "styled-components";
// components
import { Link } from "react-router-dom";

export const MentorContainer = styled.main`
  & {
  }
`;

export const PerfilHeader = styled.header`
  & {
    background: var(--gradient);
    height: 167px;
    display: flex;
    justify-content: flex-end;

    position: relative;

    a {
      justify-self: flex-end;
      margin-top: var(--gap-sm);
      margin-right: var(--gap-sm);
    }
  }
`;

export const FotoMentor = styled.section`
  & {
    width: 87px;
    height: 81px;
    border-radius: 9px;
    background: var(--gray);

    position: absolute;
    top: 85%;
    left: 21px;

    display: flex;
    place-content: center;
    color: white;
  }
`;

export const AreaDeAtuacao = styled.section`
  & {
    width: 196px;
    height: 41px;
    border-radius: 9px 0 0 9px;
    background: var(--gray);

    position: absolute;
    top: 92%;
    right: 0px;

    display: flex;
    place-content: center;
    color: white;
  }
`;

export const DadosMentor = styled.section`
  & {
    width: 100%;
    margin-top: calc(var(--gap-xl) * 1.5);
    background: var(--gray);
    padding: calc(var(--gap) / 2);

    h2,
    p {
      text-align: center;
      color: white;
      font-weight: 600;
    }
  }
`;

export const Biografia = styled.section`
  & {
    margin: var(--gap-lg) 0;
  }
`;
