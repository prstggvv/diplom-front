import { classNames } from '../../../../utils/classNames/classNames';
import cls from './Info.module.css';
import AvatarImage from '../../../../assets/images/avatar.jpg';

interface IInfoData {
  className?: string;
}

export const Info = ({ className }: IInfoData) => {
  return (
    <section className={classNames(cls.section, {}, [className || ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <div className={classNames(cls.info, {}, [])}>
          <div className={classNames(cls.imageWrap, {}, [])}>
            <img 
              className={classNames(cls.avatar, {}, [])}
              src={AvatarImage}
              alt='Аватар создателя'
            />
          </div>
          <h2 className={classNames(cls.heading, {}, [])}>
            Обо мне!
          </h2>
          <p className={classNames(cls.subtitle, {}, [])}>
            Меня зовут Ваня, я студент КФУ им. Вернадского,
            4 курса, факультета Прикладной математики. Этот проект 
            является моей дипломной работой, где с помощью знаний набранные 
            на занятиях, а также самостоятельно изучая разные источники, создал
            веб приложение, которое состовляет расписание для учебного заведения.
          </p>
          <p className={classNames(cls.subtitle, {}, [])}>
            В этом проекте используется как и front-end, так и back-end, оба
            написанные на Js и NodeJs. Используются фрейморк React, и сборщик Vite.
          </p>
        </div>
      </div>
    </section>
  );
};