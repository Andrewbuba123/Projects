import "./FormField.css";
import { FormFieldProps } from "../../types";

export const FormField = ({
  label,
  field,
  value,
  onChange,
  type,
}: FormFieldProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event);
  };

  return (
    <label className="form-field">
      <span className="form-field__label">{label}</span>
      <input name={field} type={type} value={value} onChange={handleChange} />
    </label>
  );
};
