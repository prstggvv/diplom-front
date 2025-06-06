import { classNames } from '../../../../utils/classNames/classNames';
import Loader from '../../../Loader/Loader';
import cls from './ButtonComplete.module.css';

interface IButtonCompleteData {
  className?: string;
  handleClick: () => void;
  loading: boolean;
}

export const ButtonComplete = ({ 
  className,
  handleClick,
  loading,
}: IButtonCompleteData) => {
  return (
    <section className={classNames(cls.section, {}, [className || ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <button
          className={classNames(cls.button, {}, [])}
          onClick={handleClick}
        >
          {loading ? 
            <Loader /> : 'Создать расписание'}
        </button>
      </div>
    </section>
  );
};
