import { classNames } from '../../../../utils/classNames/classNames';
import cls from './Table.module.css';

interface ITableData {
  className?: string;
}

export const Table = ({ className }: ITableData) => {
  return (
    <section className={classNames(cls.section, {}, [className || ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <table className={classNames(cls.table, {}, [])}>
          <thead className={classNames(cls.thead, {}, [])}>
            <tr className={classNames(cls.rowHead, {}, [])}>
              <th className={classNames(cls.cell, {}, [cls.header])}>
                Понедельник
              </th>
              <th className={classNames(cls.cell, {}, [cls.header])}>
                Вторник
              </th>
              <th className={classNames(cls.cell, {}, [cls.header])}>
                Среда
              </th>
              <th className={classNames(cls.cell, {}, [cls.header])}>
                Четверг
              </th>
              <th className={classNames(cls.cell, {}, [cls.header])}>
                Пятница
              </th>
            </tr>
          </thead>
          <tbody className={classNames(cls.body, {}, [])}>
            <tr className={classNames(cls.row, {}, [])}>
              <td className={classNames(cls.cell, {}, [cls.fullCell])}>
                Cell 1
              </td>
              <td className={classNames(cls.cell, {}, [cls.fullCell])}>
                Cell 1
              </td>
              <td className={classNames(cls.cell, {}, [cls.fullCell])}>
                Cell 1
              </td>
              <td className={classNames(cls.cell, {}, [cls.fullCell])}>
                Cell 1
              </td>
              <td className={classNames(cls.cell, {}, [cls.fullCell])}>
                Cell 1
              </td>
            </tr>
            <tr className={classNames(cls.row, {}, [])}>
              <td className={classNames(cls.cell, {}, [cls.fullCell])}>
                Cell 1
              </td>
              <td className={classNames(cls.cell, {}, [cls.fullCell])}>
                Cell 1
              </td>
              <td className={classNames(cls.cell, {}, [cls.fullCell])}>
                Cell 1
              </td>
              <td className={classNames(cls.cell, {}, [cls.fullCell])}>
                Cell 1
              </td>
              <td className={classNames(cls.cell, {}, [cls.fullCell])}>
                Cell 1
              </td>
            </tr>
            <tr className={classNames(cls.row, {}, [])}>
              <td className={classNames(cls.cell, {}, [cls.fullCell])}>
                Cell 1
              </td>
              <td className={classNames(cls.cell, {}, [cls.fullCell])}>
                Cell 1
              </td>
              <td className={classNames(cls.cell, {}, [cls.fullCell])}>
                Cell 1
              </td>
              <td className={classNames(cls.cell, {}, [cls.fullCell])}>
                Cell 1
              </td>
              <td className={classNames(cls.cell, {}, [cls.fullCell])}>
                Cell 1
              </td>
            </tr>
            <tr className={classNames(cls.row, {}, [])}>
              <td className={classNames(cls.cell, {}, [cls.fullCell])}>
                Cell 1
              </td>
              <td className={classNames(cls.cell, {}, [cls.fullCell])}>
                Cell 1
              </td>
              <td className={classNames(cls.cell, {}, [cls.fullCell])}>
                Cell 1
              </td>
              <td className={classNames(cls.cell, {}, [cls.fullCell])}>
                Cell 1
              </td>
              <td className={classNames(cls.cell, {}, [cls.fullCell])}>
                Cell 1
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};