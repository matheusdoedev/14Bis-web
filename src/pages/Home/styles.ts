import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeContainer = styled.main`
  & {
    background: var(--gradient);
    min-height: 100vh;
    padding: var(--gap-xl) 0;

    img {
      margin: 0 auto var(--gap-lg) auto;
    }
  }
`;

export const LoginForm = styled.form`
  & {
    background: white;
    width: 90vw;
    padding: var(--gap-md) calc(var(--gap) * 4);
    border: 1px solid #d4d4d4;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
    border-radius: 4px;

    h1 {
      text-align: center;
      color: var(--blue);
      margin-bottom: var(--gap-md);
    }

    a {
      width: 100%;
    }
  }
`;

export const ForgotPasswordButton = styled(Link)`
  & {
    display: inline-block;
    text-align: center;
    color: var(--gray);
    font-weight: 600;
    margin-top: 8px;
    margin-bottom: var(--gap-xl);
  }
`;
