import { classNames } from '../../../../utils/classNames/classNames';
import cls from './Promo.module.css';
import LogoSvg from '../../../../assets/images/promo_logo.svg';

interface IPromoData {
  className?: string;
}

export const Promo = ({ className }: IPromoData) => {
  return (
    <section className={classNames(cls.section, {}, [className || ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <div className={classNames(cls.info, {}, [])}>
          <h1 className={classNames(cls.title, {}, [])}>
            Дипломный проект студента Приклодной математики.
          </h1>
          <p className={classNames(cls.subtitle, {}, [])}>
            Листайте ниже, чтобы узнать больше про этот 
            проект и его создателя.
          </p>
        </div>
        <button 
          className={classNames(cls.button, {}, [])}
          type='button'
        >
          Узнать больше
        </button>
        <img 
          className={classNames(cls.image, {}, [])}
          alt='логотип веб-разработка'
          src={LogoSvg} 
        />
      </div>
    </section>
  );
};