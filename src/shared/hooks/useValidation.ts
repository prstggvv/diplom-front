import { ChangeEvent, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface InputItems {
  [name: string]: string;
}

const validateEmail = (email: string): string | null => {
  if (!email) return 'Заполните поле E-mail';
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    return 'Введите корректный E-mail';
  }
  return null;
};

const validatePassword = (password: string): string | null => {
  if (!password) return 'Заполните поле пароль';
  if (password.length < 8) {
    const count = 8 - password.length;
    return `Пароль должен быть длиной ${count} ${count === 1 ? 'символ' : 'символа'}`;
  }
  if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/.test(password)) {
    return 'Пароль должен состоять из строчных и прописных латинских букв, спецсимволов, цифр';
  }
  return null;
};

const validateName = (name: string): string | null => {
  if (!name) return 'Заполните поле Имя';
  if (name.length < 2) {
    const count = 2 - name.length;
    return `Имя должно быть длиной ${count} ${count === 1 ? 'символов' : 'символа'}`;
  }
  return null;
};

const validation = (values: InputItems, location: string) => {
  const errors: Record<string, string> = {};

  if (location === '/signup') {
    const nameError = validateName(values.name);
    if (nameError) errors.name = nameError;
  }

  if (location === '/signup' || location === '/signin') {
    const emailError = validateEmail(values.email);
    if (emailError) errors.email = emailError;

    const passwordError = validatePassword(values.password);
    if (passwordError) errors.password = passwordError;
  }

  return errors;
};

export const useValidation = (inputValues: InputItems) => {
  const location = useLocation().pathname;
  const [values, setValues] = useState(inputValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });

    const currentErrors = validation({ ...values, [name]: value }, location);

    setErrors(currentErrors);
    setIsValid(Object.keys(currentErrors).length === 0);
  };

  return {
    values,
    errors,
    isValid,
    handleChange,
  };
};