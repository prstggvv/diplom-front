import { classNames } from '../../../../utils/classNames/classNames';
import cls from './ButtonComplete.module.css';

interface IButtonCompleteData {
  className?: string;
}

export const ButtonComplete = ({ className }: IButtonCompleteData) => {
  return (
    <section className={classNames(cls.section, {}, [className || ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <button
          className={classNames(cls.button, {}, [])}
        >
          Создать расписание
        </button>
      </div>
    </section>
  );
};
