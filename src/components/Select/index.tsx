import React, {
  SelectHTMLAttributes,
  Dispatch,
  SetStateAction,
  ChangeEvent,
} from "react";
// styles
import { SelectBlock } from "./styles";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: number | string;
    label: string;
  }>;
  setValue?: Dispatch<SetStateAction<number | undefined>>;
  value?: number | string;
}

const SelectInput: React.FC<SelectProps> = ({
  label,
  name,
  options,
  value,
  setValue,
  ...rest
}) => {
  return (
    <SelectBlock>
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        value={value}
        defaultValue="default"
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setValue ? setValue(Number(e.target.value)) : ""
        }
        {...rest}
      >
        <option value="default" disabled hidden>
          Selecione uma opção
        </option>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </SelectBlock>
  );
};

export default SelectInput;
