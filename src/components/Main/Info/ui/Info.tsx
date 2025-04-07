import { classNames } from '../../../../utils/classNames/classNames';
import cls from './Info.module.css';
import AvatarImage from '../../../../assets/images/avatar.jpg';

interface IInfoData {
  className?: string;
}

export const Info = ({ className }: IInfoData) => {
  return (
    <section className={classNames(cls.section, {}, [className || ''])}>
      <article className={classNames(cls.container, {}, [])}>
        <p className={classNames(cls.subtitle, {}, [])}>Студент</p>
        <div className={classNames(cls.info, {}, [])}>
          <h2 className={classNames(cls.name, {}, [])}>
            Чернышев Иван
          </h2>
          <h3 className={classNames(cls.work, {}, [])}>
            студент КФУ, ПМ-211
          </h3>
          <p className={classNames(cls.description, {}, [])}>
          Я родился в Крыму, городе Симферополь. Учусь на 3 курсе, направлении
          Прикладная математика. В детстве когда у нас в семье появился компьютер а в нем компьютерные игры, я погрузился
          в мир ноликов и едениц. Но с кодингом я познакомился только в 9 классе, когда готовился к экзаменам и для меня этот виртуальный мир
          стал еще шире и прикольнее. Люблю кодить, люблю web, люблю когда все надо фиксить, люблю когда все ломается. I LOVE THIS WORLD!</p>
        </div>
        <a 
          target='_blank' 
          href="https://github.com/VanyaGachist2" 
          className={classNames(cls.link, {}, [])}>GitHub</a>
        <img 
          alt="аватарка пользователя данной страницы"
          src={AvatarImage} 
          className={classNames(cls.avatar, {}, [])}
        />
      </article>
    </section>
  );
};