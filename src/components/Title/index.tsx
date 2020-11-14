import React from "react";
// styles
import { TitleContainer } from "./styles";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return <TitleContainer>{title}</TitleContainer>;
};

export default Title;
