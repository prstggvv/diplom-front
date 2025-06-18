import React, { useState } from 'react';
import { classNames } from '../../../../utils/classNames/classNames';
import cls from './Popup.module.css';

interface IPopupData {
  className?: string;
  isOpen: boolean;
  onClose: (evt: React.MouseEvent) => void;
  onAddCard: (card: { subject: string; teacher: string }) => void;
}

export const Popup = ({ className, isOpen, onClose, onAddCard, }: IPopupData) => {
  const [subject, setSubject] = useState<string>('');
  const [teacher, setTeacher] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddCard({ subject, teacher });
    setSubject('');
    setTeacher('');
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'subject') {
      setSubject(e.target.value);
    } else {
      setTeacher(e.target.value);
    }
  }

  return (
    <div 
      className={classNames(cls.popup, { [cls.open]: isOpen }, [className || ''])}
    >
      <div className={classNames(cls.container, {}, [])}>
        <h2 className={classNames(cls.title, {}, [])}>
          Добавить блок
        </h2>
        <form className={classNames(cls.form, {}, [])} onSubmit={handleSubmit}>
          <label className={classNames(cls.label, {}, [])}>
            <input 
              type='text'
              id='subject'
              name='subject_name'
              value={subject}
              className={classNames(cls.input, {}, [])}
              onChange={handleChange}
              required
              minLength={2}
              maxLength={40}
              placeholder='Имя преподавателя'
            />
          </label>
          <label className={classNames(cls.label, {}, [])}>
            <input 
              type='text'
              id='teacher'
              name='teacher_name'
              value={teacher}
              className={classNames(cls.input, {}, [])}
              onChange={handleChange}
              required
              minLength={2}
              maxLength={40}
              placeholder='Название предмета'
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