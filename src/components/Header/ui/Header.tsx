import { classNames } from '../../../utils/classNames/classNames';
import cls from './Header.module.css';
import LogoSvg from '../../../assets/images/icons/logo.svg';
import { Link, useLocation } from 'react-router-dom';

interface IHeaderData {
  isLogged: boolean;
  exit: () => void;
  isOpen: () => void;
}

export const Header = ({ 
  isLogged, exit, isOpen,
}: IHeaderData) => {
  const location = useLocation();

  const handleSwitchBackgroundColor = () => {
    if (location.pathname === '/schedule' ||
        location.pathname === '/settings'
    ) {
      return cls.dark;
    } else if (location.pathname === '/') {
      return '';
    }
  }

  return (
    <header className={classNames(cls.header, {}, [handleSwitchBackgroundColor() || ''])}>
      <div className={classNames(cls.container, {}, [handleSwitchBackgroundColor() || ''])}>
        <Link
          to='/'
          className={classNames(cls.link, {}, [])}
        >
          <img 
            className={classNames(cls.logo, {}, [])}
            alt='логотип'
            src={LogoSvg}
          />
        </Link>
        {isLogged ? (
          <>
          <div className={classNames(cls.hidden, {}, [])}>
            <nav className={classNames(cls.nav, {}, [cls.visible])}>
              <Link to='/settings' className={classNames(cls.link, {}, [cls.up])}>Настройки</Link>
              <Link to='/schedule' className={classNames(cls.link, {}, [cls.up])}>Расписание</Link>
            </nav>
            <button 
              className={classNames(cls.exit, {}, [])}
              onClick={exit}
            >
              <span className={classNames(cls.span, {}, [])}>
                Выйти
              </span>
            </button>
          </div>
          <button
            className={classNames(cls.navigator, {}, [])}
            onClick={isOpen}
          ></button>
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