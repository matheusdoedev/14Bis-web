import React from "react";
// styles
import { TextListContainer } from "./styles";
// imgs
import verificImg from "../../assets/verific.svg";

interface option {
  content: string;
}

interface TextListProps {
  options: option[];
}

const TextList: React.FC<TextListProps> = ({ options }) => {
  return (
    <TextListContainer>
      {options.map((option, index) => (
        <li key={index}>
          <img src={verificImg} alt="Check icone" />
          <p>{option.content}</p>
        </li>
      ))}
    </TextListContainer>
  );
};

export default TextList;
