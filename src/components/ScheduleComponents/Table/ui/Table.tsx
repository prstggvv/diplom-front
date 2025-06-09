import { classNames } from "../../../../utils/classNames/classNames";
import cls from "./Table.module.css";

interface ITableData {
  className?: string;
  tableData: string[][];
  isScheduleGenerated: boolean;
}

export const Table = ({ className, tableData, isScheduleGenerated }: ITableData) => {
  const days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница"];

  if (!isScheduleGenerated) {
    return null;
  }
  
  return (
    <section className={classNames(cls.section, {}, [className || ""])}>
      <div className={classNames(cls.container, {}, [])}>
        <table className={classNames(cls.table)}>
          <caption className={classNames(cls.caption)}>
            Расписание занятий
          </caption>
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
            {tableData.map((row, i) => (
              <tr key={i} className={classNames(cls.row)}>
                <td className={classNames(cls.cell)} data-label="№">
                  {i + 1}
                </td>
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={classNames(cls.cell)}
                    data-label={days[j]}
                  >
                    {cell && (
                      <>
                        {cell.split("\n").map((line, idx) => (
                          <p key={idx} className={classNames(cls.text)}>
                            {line}
                          </p>
                        ))}
                      </>
                    )}
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
