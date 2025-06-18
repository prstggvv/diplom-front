import { classNames } from '../../../utils/classNames/classNames';
import cls from './LoginPage.module.css';
import { Input } from '../../../components/AuthFormComponents/Input/Input';
import { Button } from '../../../components/AuthFormComponents/Button/Button';
import { Form } from '../../../components/AuthFormComponents/Form';
import { useValidation } from '../../../shared/hooks/useValidation';
import { FormEvent, ChangeEvent, createRef, useState } from 'react';

interface ILoginPageData {
  className?: string;
  handleLogin: (email: string, password: string) => void;
}

const LoginPage = ({ className, handleLogin }: ILoginPageData) => {
  const {
    values,
    errors,
    isValid,
    handleChange,
  } = useValidation({});
  const passwordRef = createRef<HTMLInputElement>();
  const [passwordIcon, setPasswordIcon] = useState<'HideIcon' | 'ShowIcon'>('HideIcon');
  const [passwordType, setPasswordType] = useState<'text' | 'password'>('password');
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

    handleLogin(values.email, values.password);
  }

  return (
    <main className={classNames(cls.section, {}, [className || ''])}>
      <section className={classNames(cls.container, {}, [])}>
        <Form
          onSubmit={handleSubmit}
          textSendButton='Войти в аккаунт'
          textTitle='Вход в аккаунт'
          subtitle='Ещё не зарегистрированы?'
          auth='Регистрация'
          to='/signup'
        >
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
            className={classNames(cls.formButton, { 
              [cls.formButtonActive]: isValid 
            }, [])}
          >
            {'Войти в аккаунт'}
          </Button>
        </Form>
      </section>
    </main>
  );
};

export default LoginPage;