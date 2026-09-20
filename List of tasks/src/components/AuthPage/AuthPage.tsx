import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css";
import { FormField } from "../FormField/FormField";
import { Button } from "../Button/Button";
import { AuthFormData } from "../../types";
import { login } from "../../utils/auth";
import { validateLogin } from "../../validate/validateAuth/validateLogin";
import { validatePassword } from "../../validate/validateAuth/validatePassword";

const initialFormData: AuthFormData = {
  login: "",
  password: "",
};

type FormErrors = Partial<Record<keyof AuthFormData, string>>;

export const AuthPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<AuthFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [authError, setAuthError] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAuthError("");

    if (!validate()) {
      return;
    }

    const ok = login(formData.login, formData.password);

    if (!ok) {
      setAuthError("Неверный логин или пароль");
      return;
    }

    setFormData(initialFormData);
    setErrors({});
    navigate("/", { replace: true });
  };

  const validate = (): boolean => {
    const loginResult = validateLogin(formData.login);
    const passwordResult = validatePassword(formData.password);

    setErrors({
      login: loginResult.isValid ? undefined : loginResult.message,
      password: passwordResult.isValid ? undefined : passwordResult.message,
    });

    return loginResult.isValid && passwordResult.isValid;
  };

  return (
    <div className="auth-page">
      <form className="page-form auth-form" onSubmit={handleSubmit}>
        <h2 className="auth-form__title">Вход</h2>

        {authError && <p className="auth-form__error">{authError}</p>}

        <FormField
          label="Логин"
          field="login"
          value={formData.login}
          onChange={handleChange}
          type="text"
          error={errors.login}
        />

        <FormField
          label="Пароль"
          field="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          error={errors.password}
        />

        <Button text="Войти" type="submit" />
      </form>
    </div>
  );
};
