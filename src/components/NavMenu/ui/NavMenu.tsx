import { Link } from 'react-router-dom';
import { classNames } from '../../../utils/classNames/classNames';
import cls from './NavMenu.module.css';

interface INavMenuData {
  className?: string;
  isClose: () => void;
  isOpen: boolean;
  isOut: () => void;
}

export const NavMenu = ({ 
  className, isOpen, isClose, isOut,
}: INavMenuData) => {
  return (
    <div
      className={classNames(cls.section, { 
        [cls.open]: isOpen 
      }, [className || ''])}
    >
      <nav className={classNames(cls.nav, {}, [])}>
        <div className={classNames(cls.links, {}, [])}>
          <Link
            to='/settings'
            className={classNames(cls.link, {}, [])}  
          >Настройки</Link>
          <Link
            to='/schedule'
            className={classNames(cls.link, {}, [])}
          >Расписание</Link>
        </div>
        <button
          className={classNames(cls.out, {}, [])}
          onClick={isOut}
        >Выйти</button>
      </nav>
      <button 
        className={classNames(cls.close, {}, [])}
        onClick={isClose}
      ></button>
    </div>
  );
};