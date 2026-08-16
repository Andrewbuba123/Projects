import { errors } from "../../utils/dictionary";
import { ValidationResult } from "../../types"; 

export function validateFormDescription(description: string): ValidationResult {
  const trimmedDescription = description?.trim() || "";
  
  if (!description || description.trim() === "") {
    return {
      isValid: false,
      message: errors.description.required,
    };
  }

  if (trimmedDescription.length < 20) {
    return {
      isValid: false,
      message: errors.description.minLength,
    };
  }

  return {
    isValid: true,
    message: "",
  };
}