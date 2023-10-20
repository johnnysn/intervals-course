import { type } from "os";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function TextInput({ name, label, type, placeholder, onChange, ...rest }: Props) {
  return (
    <div className="mb-4">
      <label className="block text-gray-50 text-sm font-medium mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        className="appearance-none border rounded py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow text-xs"
        name={name}
        id={name}
        onChange={onChange}
        placeholder={placeholder ? placeholder : label}
        {...rest}
        type={type ? type : "text"}
      />
    </div>
  );
}
