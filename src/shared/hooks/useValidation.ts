import { ChangeEvent, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface InputItems {
  [name: string]: string;
}

const validation = (values: InputItems, location: string) => {
  const errors: Record<string, string> = {};

  if (location === '/signup') {
    if (!values.name) {
      errors.name = 'Заполните поле Имя';
    } else if (values.name.length < 2) {
      const count = 2 - values.name.length;
      errors.name = `Имя должно быть длиной ${count} ${count === 1 ? 'символов' : 'символа'}`;
    }
    if (!values.email) {
      errors.email = 'Заполните поле E-mail';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)) {
      errors.email = 'Введите корректный E-mail';
    }
  
    if (!values.password) {
      errors.password = 'Заполните поле пароль';
    } else if (values.password.length < 8) {
      const count = 8 - values.password.length;
      errors.password = `Пароль должен быть длиной ${count} ${count === 1 ? 'символ' : 'символа'}`;
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/.test(values.password)) {
      errors.password = 'Пароль должен состоять из строчных и прописных латинских букв, спецсимволов, цифр';
    }
  } else if (
    location === '/signin' || 
    location === '/signup'
  ) {
    if (!values.email) {
      errors.email = 'Заполните поле E-mail';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)) {
      errors.email = 'Введите корректный E-mail';
    }
  
    if (!values.password) {
      errors.password = 'Заполните поле пароль';
    } else if (values.password.length < 8) {
      const count = 8 - values.password.length;
      errors.password = `Пароль должен быть длиной ${count} ${count === 1 ? 'символ' : 'символа'}`;
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/.test(values.password)) {
      errors.password = 'Пароль должен состоять из строчных и прописных латинских букв, спецсимволов, цифр';
    }
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