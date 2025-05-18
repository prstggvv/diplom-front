import { classNames } from '../../../utils/classNames/classNames';
import cls from './InfoToolTip.module.css';

interface IInfoToolTipData {
  className?: string;
  logo: string;
  isOpen: boolean;
  isClose: () => void;
  title: string;
}

export const InfoToolTip = ({ 
  className,
  logo,
  isOpen,
  isClose,
  title,
}: IInfoToolTipData) => {
  return (
    <div className={classNames(cls.popup, {[cls.open]: isOpen}, [className || ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <h1 className={classNames(cls.title, {}, [])}>{title}</h1>
        <img 
          className={classNames(cls.image, {}, [])}
          alt='Картинка крестик ошибка'
          src={logo}
        />
        <button
          className={classNames(cls.close, {}, [])}
          onClick={isClose}
        ></button>
      </div>
    </div>
  );
};