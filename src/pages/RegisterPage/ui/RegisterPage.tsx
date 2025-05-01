import { classNames } from '../../../utils/classNames/classNames';
import cls from './RegisterPage.module.css';
import { useValidation } from '../../../shared/hooks/useValidation';
import { ChangeEvent, FormEvent, createRef, useState } from 'react';
import { Form } from '../../../components/AuthFormComponents/Form';
import { Input } from '../../../components/AuthFormComponents/Input/Input';
import { Button } from '../../../components/AuthFormComponents/Button/Button';

interface IRegisterPageData {
  className?: string;
  handleRegister: (
    name: string, email: string, password: string
  ) => void;
}

const RegisterPage = ({ className, handleRegister }: IRegisterPageData) => {
  const passwordRef = createRef<HTMLInputElement>();
  const [passwordIcon, setPasswordIcon] = useState<'HideIcon' | 'ShowIcon'>('HideIcon');
  const [passwordType, setPasswordType] = useState<'text' | 'password'>('password');
  const {
    isValid,
    handleChange,
    values,
    errors,
  } = useValidation({});

  const handleClickIcon = () => {
    if (passwordRef.current.type === 'password') {
      setPasswordType('text');
      setPasswordIcon('ShowIcon');
      passwordRef.current?.focus();
    } else {
      setPasswordType('password');
      setPasswordIcon('HideIcon');
      passwordRef.current?.focus();
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleRegister(values.email, values.name, values.password);
  }

  return (
    <main className={classNames(cls.section, {}, [className || ''])}>
      <section className={classNames(cls.container, {}, [])}>
        <Form
          onSubmit={handleSubmit}
          textSendButton='Зарегестрироваться'
          textTitle='Регистрация'
          subtitle='Уже есть аккаунт?'
          auth='Войти'
          to='/signin'
        >
          <Input 
            type='text'
            placeholder='Имя'
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            value={values.name || ''}
            name='name'
            error={Object.prototype.hasOwnProperty.call(errors, 'name')}
            errorText={errors.name || ''}
            className={classNames(cls.input, {}, [])}
          />
          <Input
            type='email'
            placeholder='E-mail'
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            value={values.email || ''}
            name='email'
            error={Object.prototype.hasOwnProperty.call(errors, 'email')}
            errorText={errors.email || ''}
          />
          <Input
            type={passwordType}
            placeholder='Пароль'
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            value={values.password || ''}
            name='password'
            error={Object.prototype.hasOwnProperty.call(errors, 'password')}
            errorText={errors.password || ''}
            ref={passwordRef}
            onIconClick={handleClickIcon}
            icon={passwordIcon}
          />
          <Button
            type='submit'
            disabled={!isValid}
            className={classNames(cls.formButton, { [cls.formButtonActive]: isValid }, [])}
          >
            {'Зарегистрироваться'}
          </Button>
        </Form>
      </section>
    </main>
  );
};

export default RegisterPage;