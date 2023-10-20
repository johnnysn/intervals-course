import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode
}

export default function SelectInput({ name, label, placeholder, onChange, children, ...rest }: Props) {
  return (
    <div className="mb-4">
      <label className="block text-gray-50 text-sm font-medium mb-2" htmlFor={name}>
        {label}
      </label>
      <select
        className="appearance-none border rounded py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow text-xs"
        name={name}
        id={name}
        onChange={onChange}
        placeholder={placeholder ? placeholder : label}
        {...rest}
      >
        {children}
      </select>
    </div>
  );
}