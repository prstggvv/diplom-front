import { classNames } from '../../../utils/classNames/classNames';
import cls from './LoginPage.module.css';
import { Input } from '../../../components/AuthFormComponents/Input/Input';
import { Button } from '../../../components/AuthFormComponents/Button/Button';
import { Form } from '../../../components/AuthFormComponents/Form';
import { useValidation } from '../../../hooks/useValidation';
import { FormEvent, ChangeEvent } from 'react';

interface ILoginPageData {
  className?: string;
}

const LoginPage = ({ className }: ILoginPageData) => {
  const {
    values,
    errors,
    isValid,
    handleChange,
  } = useValidation({});
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
            type='password'
            placeholder='Пароль'
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            value={values.password || ''}
            name='password'
            error={Object.prototype.hasOwnProperty.call(errors, 'password')}
            errorText={errors.password || ''}
          />
          <Button
            type='submit'
            className={classNames(cls.formButton, { [cls.formButtonActive]: isValid }, [])}
          >
            {'Войти в аккаунт'}
          </Button>
        </Form>
      </section>
    </main>
  );
};

export default LoginPage;