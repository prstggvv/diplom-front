import { Table } from '../../../components/ScheduleComponents/Table';
import { classNames } from '../../../utils/classNames/classNames';
import cls from './SchedulePage.module.css';

interface ISchedulePageData {
  className?: string;
  tableData: string[][];
  isScheduleGenerated: boolean;
}

const SchedulePage = ({ className, tableData, isScheduleGenerated, }: ISchedulePageData) => {
  return (
    <main className={classNames(cls.section, {}, [className || ''])}>
      <Table 
        tableData={tableData}
        isScheduleGenerated={isScheduleGenerated}
      />
    </main>
  );
};

export default SchedulePage;