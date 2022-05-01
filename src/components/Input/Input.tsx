import React from 'react';
import { InputContainer } from './elements';
interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  error?: string;
}

export default function Input({
  type = 'text',
  label,
  error,
  ...otherProps
}: InputProps) {
  return (
    <InputContainer>
      <label>
        {label}
        {error && <em>{error}</em>}
        <input type={type} {...otherProps} />
      </label>
    </InputContainer>
  );
}
