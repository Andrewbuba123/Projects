import { errors } from "../../utils/dictionary";

export function validateFormType(type: string): {
  isValid: boolean;
  message: string;
} {
  if (!type || type.trim() === "") {
    return {
      isValid: false,
      message: errors.type.required,
    };
  }

  if (type.length < 15) {
    return {
      isValid: false,
      message: errors.type.minLength,
    };
  }

  const invalidChars = /[^а-яА-Яa-zA-Z0-9\s\-.,()]/;

  if (invalidChars.test(type)) {
    return {
      isValid: false,
      message: errors.type.inValid,
    };
  }

  return {
    isValid: true,
    message: "",
  };
}
