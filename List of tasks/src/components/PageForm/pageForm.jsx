import "./pageForm.css";
import { FormField } from "../FormField/FormField";
import { Button } from "../Button/Button";
import { useState } from "react";

export const PageForm = ({onAddTask}) => {
  const [formData, setFormData] = useState({
    type: "",
    description: "",
    count: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      type: "",
      description: "",
      count: "",
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTask(formData)
    console.log("Данные формы:", formData);
    resetForm()
  };

  return (
    <form className="page_form" onSubmit={handleSubmit}>
      <FormField
        label="type"
        field="type"
        value={formData.type}
        onChange={handleChange}
        type="text"
      />

      <FormField
        label="description"
        field="description"
        value={formData.description}
        onChange={handleChange}
        type="text"
      />

      <FormField
        label="count"
        field="count"
        value={formData.count}
        onChange={handleChange}
        type="text"
      />

      <Button text="Отправить" type="submit" />
    </form>
  );
};
