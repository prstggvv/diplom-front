import { classNames } from '../../../../utils/classNames/classNames';
import { frontData } from '../model/frontData';
import cls from './Front.module.css';

interface IFrontData {
  className?: string;
}

export const Front = ({ className }: IFrontData) => {
  return (
    <section className={classNames(cls.section, {}, [className || ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <h2 className={classNames(cls.title, {}, [])}>
          О проекте
        </h2>
        <ul className={classNames(cls.list, {}, [])}>
          {frontData.map((l, i) => {
            return (
              <li 
                className={classNames(cls.card, {}, [])}
                key={i}
              >
                <h3 className={classNames(cls.heading, {}, [])}>
                  {l.heading}
                </h3>
                <p className={classNames(cls.subtitle, {}, [])}>
                  {l.subtitle}
                </p>
              </li>
            )
          })}
        </ul>
        <div className={classNames(cls.landing, {}, [])}>
          <h4 className={classNames(cls.time, {}, [])}>5 неделя</h4>
          <p className={classNames(cls.description, {}, [])}>backend</p>
          <h4 className={classNames(cls.time, {}, [cls.dark])}>4 недели</h4>
          <p className={classNames(cls.description, {}, [cls.dark])}>frontend</p>
        </div>
      </div>
    </section>
  );
};