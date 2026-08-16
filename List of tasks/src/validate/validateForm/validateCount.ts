import { errors } from "../../utils/dictionary";

export function validateFormCount(count: string): {
  isValid: boolean;
  message: string;
} {
  if (!count || count.trim() === "") {
    return {
      isValid: false,
      message: errors.count.required,
    };
  }

  const num = Number(count);

  if (isNaN(num)) {
    return {
      isValid: false,
      message: errors.count.inValid,
    };
  }

  if (num <= 0) {
    return {
      isValid: false,
      message: errors.count.positive,
    };
  }

  return {
    isValid: true,
    message: "",
  };
}
