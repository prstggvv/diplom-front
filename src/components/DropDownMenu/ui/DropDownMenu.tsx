import { classNames } from '../../../utils/classNames/classNames';
import cls from './DropDownMenu.module.css';

interface IDropDownMenuData {
  className?: string;
}

export const DropDownMenu = ({ className }: IDropDownMenuData) => {
  return (
    <nav className={classNames(cls.nav, {}, [className || ''])}>
      <label htmlFor='touch' className={classNames(cls.label, {}, [])}>
        <span className={classNames(cls.span, {}, [])}>Some</span>
      </label>
      <input 
        className={classNames(cls.input, {}, [])}
        type='checkbox'
        id='touch'
      />
      <ul className={classNames(cls.list, {}, [])}>
        <li className={classNames(cls.item, {}, [])}>
          <button className={classNames(cls.button, {}, [])}>
            text
          </button>
        </li>
        <li className={classNames(cls.item, {}, [])}>
          <button className={classNames(cls.button, {}, [])}>
            text
          </button>
        </li>
        <li className={classNames(cls.item, {}, [])}>
          <button className={classNames(cls.button, {}, [])}>
            text
          </button>
        </li>
      </ul>
    </nav>
  );
};
