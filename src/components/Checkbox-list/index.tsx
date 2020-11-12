import React, { InputHTMLAttributes, useContext } from "react";
// styles
import { Checkmark } from "./styles";

interface option {
  label: string;
  value: string;
}

interface CheckboxListProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  options: option[];
}

const CheckboxList: React.FC<CheckboxListProps> = ({
  options,
  name,
  ...props
}) => {
  return (
    <>
      {options.map((option) => (
        <Checkmark key={option.value} {...props}>
          <label htmlFor={name}>
            <input
              type="checkbox"
              id={name}
              name={name}
              value={option.value}
              {...props}
            />
            <span></span>
          </label>
          <p>{option.label}</p>
        </Checkmark>
      ))}
    </>
  );
};

export default CheckboxList;
