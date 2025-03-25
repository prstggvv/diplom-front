import { ChangeEvent, FC } from 'react';
import { classNames } from '../../../utils/classNames/classNames';
import cls from './Input.module.css';

interface InputProps {
  className?: string;
  type: 'text' | 'password' | 'email';
  placeholder: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  error: boolean;
  errorText: string;
  onIconClick?: () => void;
  icon?: string;
}

export const Input: FC<InputProps> = (({
  className,
  type,
  placeholder,
  onChange,
  value,
  name,
  error,
  errorText,
}) => {
  return (
    <label className={classNames(cls.label, {}, [className || ''])}>
      <input
        className={classNames(cls.input, { [cls.errorInput]: error }, [])}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
      />
      {error && <span className={classNames(cls.errorText, {}, [])}>{errorText}</span>}
    </label>
  );
});