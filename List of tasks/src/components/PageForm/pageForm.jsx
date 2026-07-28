import "./pageForm.css";
import { FormField } from "../FormField/FormField";
import { Button } from "../Button/Button";
import { useState } from "react";

export const PageForm = () => {
  const [formData, setFormData] = useState({
    вид: "",
    описание: "",
    количество: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event => {
    e.preventDefault();
    console.log("Данные формы:", formData);
  })

  return (
    <form className="page_form" onSubmit={handleSubmit}>
      <FormField label="Вид" value={formData.вид} onChange={handleChange} />
      <FormField label="Описание" value={formData.описание} onChange={handleChange} />
      <FormField label="Количество" value={formData.количество} onChange={handleChange} />
      <Button text="Отправить" />
    </form>
  );
};