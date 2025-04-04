import { classNames } from '../../../utils/classNames/classNames';
import cls from './Header.module.css';
import LogoSvg from '../../../assets/images/icons/logo.svg';
import { Link } from 'react-router-dom';

interface IHeaderData {
  className?: string;
}

export const Header = ({ className }: IHeaderData) => {
  return (
    <header className={classNames(cls.header, {}, [className || ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <img 
          className={classNames(cls.logo, {}, [])}
          alt='логотип'
          src={LogoSvg}
        />
        <nav className={classNames(cls.nav, {}, [])}>
          <Link to='/signup' className={classNames(cls.link, {}, [cls.up])}>Регистрация</Link>
          <Link to='/signin' className={classNames(cls.link, {}, [cls.in])}>Войти</Link>
        </nav>
      </div>
    </header>
  );
};