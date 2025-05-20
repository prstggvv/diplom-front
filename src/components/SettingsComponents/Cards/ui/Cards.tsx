import { classNames } from '../../../../utils/classNames/classNames';
import cls from './Cards.module.css';

interface ICardsData {
  className?: string;
}

export const Cards = ({ className }: ICardsData) => {
  return (
    <section className={classNames(cls.section, {}, [className || ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <ul className={classNames(cls.list, {}, [])}>
          <li className={classNames(cls.card, {}, [])}>
            <h2 className={classNames(cls.heading, {}, [])}>
              Разработка виртуальной реальности
            </h2>
            <p className={classNames(cls.teacher, {}, [])}>
              Стус Е. А.
            </p>
          </li>
          <li className={classNames(cls.card, {}, [])}>
            <h2 className={classNames(cls.heading, {}, [])}>
              Цифровая доступность
            </h2>
            <p className={classNames(cls.teacher, {}, [])}>
              Косова Е. А.
            </p>
          </li>
          <li className={classNames(cls.card, {}, [])}>
            <h2 className={classNames(cls.heading, {}, [])}>
              ООП
            </h2>
            <p className={classNames(cls.teacher, {}, [])}>
              Ляшко А. Д.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};