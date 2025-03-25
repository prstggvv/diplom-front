import { classNames } from '../../utils/classNames/classNames';
import { Front } from './Front';
import { Info } from './Info';
import cls from './Main.module.css';
import { Promo } from './Promo';
import { Tech } from './Tech';

interface IMainData {
  className?: string;
}

const Main = ({ className }: IMainData) => {
  return (
    <main className={classNames(cls.main, {}, [className || ''])}>
      <Promo />
      <Info />
      <Front />
      <Tech />
    </main>
  );
};

export default Main;