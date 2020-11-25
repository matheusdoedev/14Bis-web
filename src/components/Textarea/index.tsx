import React, { TextareaHTMLAttributes } from "react";
import { TextareaBlock } from "./style";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  name: string;
  value?: string;
}

const Textarea: React.FC<TextAreaProps> = ({
  label,
  name,
  value,
  ...props
}) => {
  return (
    <TextareaBlock>
      {label && <label>{label}</label>}
      <textarea id={name} name={name} value={value} {...props} />
    </TextareaBlock>
  );
};

export default Textarea;
