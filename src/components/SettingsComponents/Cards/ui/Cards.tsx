import { ICardData } from '../../../../types';
import { classNames } from '../../../../utils/classNames/classNames';
import { Card } from '../../Card/ui/Card';
import cls from './Cards.module.css';

interface ICardsData {
  className?: string;
  cards: ICardData[];
}

export const Cards = ({ className, cards, }: ICardsData) => {
  return (
    <section className={classNames(cls.section, {}, [className || ''])}>
      <div className={classNames(cls.container, {}, [])}>
        {cards.length > 0 ? (
          <ul className={classNames(cls.list, {}, [])}>
            {cards.map((card, index) => (
              <Card
                key={index}
                subject={card.subject}
                teacher={card.teacher}
              />
            ))}
          </ul>
        ) : (
          <p className={cls.empty}>Нет добавленных предметов</p>
        )}
      </div>
    </section>
  );
};