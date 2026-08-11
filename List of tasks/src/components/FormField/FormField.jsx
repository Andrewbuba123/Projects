import "./FormField.css";

export const FormField = ({ label, field, value, onChange , type}) => {
  const handleChange = (event) => {
    // Передаем событие наверх
    onChange(event);
  };

  return (
    <label className="form-field">
      <span className="form-field__label">{label}</span>
      <input name={field} type={type} value={value} onChange={handleChange} />
    </label>
  );
};
