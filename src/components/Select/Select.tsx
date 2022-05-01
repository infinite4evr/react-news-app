import React from 'react';
import { SelectContainer } from './elements';

interface InputProps
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  label: string;
}

export default function Select({ label, children, ...otherProps }: InputProps) {
  return (
    <SelectContainer>
      <label>
        {label}
        <select {...otherProps}>{children}</select>
      </label>
    </SelectContainer>
  );
}
