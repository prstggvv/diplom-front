import { classNames } from '../../utils/classNames/classNames';
import { Front } from './Front';
import { Info } from './Info';
import cls from './Main.module.css';
import { Promo } from './Promo';
import { Tech } from './Tech';

import { useRef, RefObject } from 'react';

interface IMainData {
  className?: string;
}

const Main = ({ className }: IMainData) => {
  const scrollToInfo: RefObject<HTMLDivElement> = useRef(null);

  const handleScroll = (ref: RefObject<HTMLDivElement>) => () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className={classNames(cls.main, {}, [className || ''])}>
      <Promo 
        toInfo={handleScroll(scrollToInfo)}
      />
      <Info 
        ref={scrollToInfo}
      />
      <Front />
      <Tech />
    </main>
  );
};

export default Main;