import React, { TextareaHTMLAttributes } from "react";

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
    <div>
      {label && <label>{label}</label>}
      <textarea id={name} name={name} value={value} {...props} />
    </div>
  );
};

export default Textarea;
