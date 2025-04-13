import { classNames } from '../../../utils/classNames/classNames';
import cls from './Header.module.css';
import LogoSvg from '../../../assets/images/icons/logo.svg';
import { Link } from 'react-router-dom';

interface IHeaderData {
  className?: string;
  isLogged: boolean;
  exit: () => void;
}

export const Header = ({ 
  className, isLogged, exit,
}: IHeaderData) => {
  return (
    <header className={classNames(cls.header, {}, [className || ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <img 
          className={classNames(cls.logo, {}, [])}
          alt='логотип'
          src={LogoSvg}
        />
        {isLogged ? (
          <>
            <nav className={classNames(cls.nav, {}, [])}>
              <Link to='/settings' className={classNames(cls.link, {}, [cls.up])}>Настройки</Link>
              <Link to='/schedule' className={classNames(cls.link, {}, [cls.up])}>Расписание</Link>
            </nav>
            <button 
              className={classNames(cls.exit, {}, [])}
              onClick={exit}
            >
              Выйти
            </button>
          </>
        ) : (
          <nav className={classNames(cls.nav, {}, [])}>
            <Link to='/signup' className={classNames(cls.link, {}, [cls.up])}>Регистрация</Link>
            <Link to='/signin' className={classNames(cls.link, {}, [cls.in])}>Войти</Link>
          </nav>
        )}
      </div>
    </header>
  );
};