import { classNames } from '../../../../utils/classNames/classNames';
import cls from './Card.module.css';

interface ICardData {
  className?: string;
  subject: string;
  teacher: string;
}

export const Card = ({ 
  className, subject, teacher,
}: ICardData) => {
  return (
    <li className={classNames(cls.card, {}, [className || ''])}>
      <h2 className={classNames(cls.heading, {}, [])}>
        {subject}
      </h2>
      <p className={classNames(cls.teacher, {}, [])}>
        {teacher}
      </p>
    </li>
  );
};