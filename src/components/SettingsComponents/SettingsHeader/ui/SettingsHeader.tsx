import { classNames } from '../../../../utils/classNames/classNames';
import { DropDownMenu } from '../../../DropDownMenu';
import cls from './SettingsHeader.module.css';

interface ISettingsHeaderData {
  className?: string;
  onOpen: () => void;
}

export const SettingsHeader = ({ 
  className,
  onOpen,
}: ISettingsHeaderData) => {
  return (
    <section className={classNames(cls.section, {}, [className || ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <h1 className={classNames(cls.title, {}, [])}>
          Добавить блоки расписания
        </h1>
        <div className={classNames(cls.block, {}, [])}>
          <button 
            className={classNames(cls.button, {}, [])}
            onClick={onOpen}
          ></button>
          <DropDownMenu
            className={classNames(cls.dropdown, {}, [])}
            options={['ПМ-211 4 курс', 'БИ-220 2 курс', 'ФИ-3 2 курс']}
            placeholder='группа'
          />
        </div>
      </div>
    </section>
  );
};