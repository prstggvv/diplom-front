import { classNames } from '../../utils/classNames/classNames';
import cls from './Main.module.css';
import { Promo } from './Promo';

interface IMainData {
  className?: string;
}

const Main = ({ className }: IMainData) => {
  return (
    <main className={classNames(cls.main, {}, [className || ''])}>
      <Promo />
    </main>
  );
};

export default Main;