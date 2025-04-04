import { ChangeEvent, FC, ForwardedRef, forwardRef } from 'react';
import { classNames } from '../../../utils/classNames/classNames';
import cls from './Input.module.css';
import HideIconSvg from '../../../assets/images/icons/auth/hide_icon.svg';
import ShowIconSvg from '../../../assets/images/icons/auth/show_icon.svg';

interface InputProps {
  className?: string;
  type: 'text' | 'password' | 'email';
  placeholder: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  ref?: ForwardedRef<HTMLInputElement>;
  error: boolean;
  errorText: string;
  onIconClick?: () => void;
  icon?: string;
}

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(({
  className,
  type,
  placeholder,
  onChange,
  value,
  name,
  error,
  errorText,
  onIconClick,
  icon,
}, ref) => {
  return (
    <label className={classNames(cls.label, {}, [className || ''])}>
      <input
        className={classNames(cls.input, { [cls.errorInput]: error }, [])}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
        ref={ref}
      />
      {error && <span className={classNames(cls.errorText, {}, [])}>{errorText}</span>}
      {name === 'password' && value && icon === 'HideIcon' && (
        <img 
          className={classNames(cls.svg, {}, [])}
          alt='иконка закрытого глаза'
          src={HideIconSvg}
          onClick={onIconClick}
        />
      )}
      {name === 'password' && value && icon === 'ShowIcon' && (
        <img
          className={classNames(cls.svg, {}, [])}
          alt='иконка закрытого глаза'
          src={ShowIconSvg}
          onClick={onIconClick}
        />
      )}
    </label>
  );
});