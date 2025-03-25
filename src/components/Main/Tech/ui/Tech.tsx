import { classNames } from '../../../../utils/classNames/classNames';
import { techData } from '../model/techData';
import cls from './Tech.module.css';

interface ITechData {
  className?: string;
}

export const Tech = ({ className }: ITechData) => {
  return (
    <section className={classNames(cls.section, {}, [className || ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <h2 className={classNames(cls.title, {}, [])}>
          Используемые технологии
        </h2>
        <ul className={classNames(cls.list, {}, [])}>
          {techData.map((c, i) => {
            return (
              <li
                className={classNames(cls.card, {}, [])}
                key={i}  
              >
                <h3 className={classNames(cls.heading, {}, [])}>
                  {c.title}
                </h3>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  );
};