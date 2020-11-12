import React, { InputHTMLAttributes } from "react";
// styles
import { InputBlock } from "./styles";

// Input component props interface
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  value?: any;
}

const Input: React.FC<InputProps> = ({ name, label, value, ...props }) => {
  return (
    <InputBlock>
      {/* if the label props isn't true, the label element will not be rendered */}
      {label && <label htmlFor={name}>{label}</label>}
      <input type="text" name={name} id={name} value={value} {...props} />
    </InputBlock>
  );
};

export default Input;
