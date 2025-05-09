import { Header } from '../../../components/Header';
import { Table } from '../../../components/ScheduleComponents/Table';
import { classNames } from '../../../utils/classNames/classNames';
import cls from './SchedulePage.module.css';

interface ISchedulePageData {
  className?: string;
}

const SchedulePage = ({ className }: ISchedulePageData) => {
  return (
    <main className={classNames(cls.section, {}, [className || ''])}>
      <Header />
      <Table />
    </main>
  );
};

export default SchedulePage;