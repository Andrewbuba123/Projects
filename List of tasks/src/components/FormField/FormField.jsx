import { useState } from "react";
import "./FormField.css";

export const FormField = ({ label, value, onChange}) => {
    


  const handleChange = (event) => {
    onChange(label, event.target.value)
  };

  return (
    <label className="form-field">
      <span className="form-field__label">{label}</span>
      <input
        type={label === "Количество" ? "number" : "text"}
        value={value}
        onChange={handleChange}
      ></input>
    </label>
  );
};
