import { classNames } from '../../../../utils/classNames/classNames';
import cls from './Table.module.css';

interface ITableData {
  className?: string;
}

export const Table = ({ className }: ITableData) => {
  const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'];
  const subjects = [
    'ООП',
    'Разработка виртуальной реальности',
    'Цифровая доступность',
  ];

  const getRandomSubject = () => {
    const chance = Math.random();
    return chance < 0.4 ? '' : subjects[Math.floor(Math.random() * subjects.length)];
  };
  return (
    <section className={classNames(cls.section, {}, [className || ''])}>
      <div className={classNames(cls.container, {}, [])}>
      <table className={classNames(cls.table)}>
      <caption className={classNames(cls.caption)}>Расписание занятий</caption>
      <thead>
        <tr className={classNames(cls.row)}>
          <th className={classNames(cls.header)}>№</th>
          {days.map((day, index) => (
            <th key={index} className={classNames(cls.header)} scope="col">
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[1, 2, 3, 4].map((num) => (
          <tr key={num} className={classNames(cls.row)}>
            <td className={classNames(cls.cell)} data-label="№">{num}</td>
            {days.map((day, idx) => (
              <td key={idx} className={classNames(cls.cell)} data-label={day}>
                {getRandomSubject()}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
      </div>
    </section>
  );
};