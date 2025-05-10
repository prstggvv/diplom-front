import { FC } from 'react';
import { classNames } from '../../../utils/classNames/classNames';
import cls from './Button.module.css';

interface ButtonProps {
  className?: string;
  children: string;
  type: 'button' | 'reset' | 'submit';
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  type,
  disabled,
}) => {
  return (
    <button
      className={classNames(cls.button, {}, [className || ''])}
      type={type}
      disabled={disabled}
    >{children}</button>
  );
};