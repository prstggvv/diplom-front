import { FC } from 'react';
import { classNames } from '../../../utils/classNames/classNames';
import cls from './Button.module.css';

interface ButtonProps {
  className?: string;
  children: string;
  type: 'button' | 'reset' | 'submit';
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  type,
}) => {
  return (
    <button
      className={classNames(cls.button, {}, [className || ''])}
      type={type}
    >{children}</button>
  );
};