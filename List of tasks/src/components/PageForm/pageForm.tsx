import "./pageForm.css";
import { FormField } from "../FormField/FormField";
import { Button } from "../Button/Button";
import React, { useState } from "react";
import { PageFormProps, TaskFormData } from "../../types";

export const PageForm = ({ onAddTask }: PageFormProps) => {
  const [formData, setFormData] = useState<TaskFormData>({
    title: "",
    description: "",
    count: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      count: "",
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddTask(formData);
    resetForm();
  };

  return (
    <form className="page_form" onSubmit={handleSubmit}>
      <FormField
        label="title"
        field="title"
        value={formData.title}
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
