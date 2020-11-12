import styled from "styled-components";

export const Checkmark = styled.div`
  & {
    display: flex;
    align-items: center;
    margin-bottom: var(--gap-sm);

    label {
      display: block;
      position: relative;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      height: 30px;

      input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }
    }

    label:hover input ~ span {
      background-color: #ccc;
    }

    label input:checked ~ span {
      background-color: var(--blue);
    }

    label input:checked ~ span:after {
      display: block;
    }

    label span:after {
      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    span {
      position: absolute;
      top: 0;
      left: 0;
      height: 30px;
      width: 30px;
      border: 1px solid var(--gray);
      border-radius: 6px;
      background-color: white;
    }

    span:after {
      content: "";
      position: absolute;
      display: none;
    }

    p {
      margin-left: 45px;
    }
  }
`;
