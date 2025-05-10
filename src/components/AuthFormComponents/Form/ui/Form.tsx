import cls from './Form.module.css';
import { FormEvent, ReactNode } from 'react';

import { classNames } from '../../../../utils/classNames/classNames';
import SvgImage from '../../../../assets/images/icons/logo.svg';
import { Link } from 'react-router-dom';

interface IFormData {
  className?: string;
  textSendButton: string;
  textTitle: string;
  subtitle: string;
  auth: string;
  children: ReactNode;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  to: string;
}


export const Form = ({ 
  className,
  textTitle,
  subtitle,
  auth,
  children,
  onSubmit,
  to,
}: IFormData) => {
  return (
    <form 
      className={classNames(cls.form, {}, [className || ''])}
      onSubmit={onSubmit}
      noValidate
    >
      <div className={classNames(cls.container, {}, [])}>
        <Link
          className={classNames(cls.li, {}, [])}
          to='/'
        >
          <img 
            className={classNames(cls.svg, {}, [])}
            src={SvgImage}
            alt='логотип'
          />
        </Link>
        <h1 className={classNames(cls.title, {}, [])}>
          {textTitle}
        </h1>
        {children}
      </div>
      <p className={classNames(cls.text, {}, [])}>
        {subtitle}
        <Link
          to={to}
          className={classNames(cls.link, {}, [])}
        >
          {auth}
        </Link>
      </p>
    </form>
  );
};