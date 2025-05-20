import { classNames } from '../../../utils/classNames/classNames';
import cls from './DropDownMenu.module.css';

interface IDropDownMenuData {
  className?: string;
}

export const DropDownMenu = ({ className }: IDropDownMenuData) => {
  return (
    <nav className={classNames(cls.nav, {}, [className || ''])}>
      
    </nav>
  );
};
