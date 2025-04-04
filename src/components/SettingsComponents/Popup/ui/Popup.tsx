import { classNames } from '../../../../utils/classNames/classNames';
import cls from './Popup.module.css';

interface IPopupData {
  className?: string;
  isOpen: boolean;
  onClose: (evt: React.MouseEvent) => void;
}

export const Popup = ({ className, isOpen, onClose }: IPopupData) => {
  return (
    <div 
      className={classNames(cls.popup, { [cls.open]: isOpen }, [className || ''])}
    >
      <div className={classNames(cls.container, {}, [])}>
        <h2 className={classNames(cls.title, {}, [])}>
          Добавить блок
        </h2>
        <form className={classNames(cls.form, {}, [])}>
          <label className={classNames(cls.label, {}, [])}>
            <input 
              type='text'
              id='subject'
              name='subject_name'
              value='subject'
              className={classNames(cls.input, {}, [])}
              required
              minLength={2}
              maxLength={40}
            />
          </label>
          <label className={classNames(cls.label, {}, [])}>
            <input 
              type='text'
              id='teacher'
              name='teacher_name'
              value='teacher'
              className={classNames(cls.input, {}, [])}
              required
              minLength={2}
              maxLength={40}
            />
          </label>
          <button className={classNames(cls.button, {}, [])}>
            Добавить
          </button>
        </form>
        <button 
          className={classNames(cls.close, {}, [])}
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
};