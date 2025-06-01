import { useState } from 'react';
import { Cards } from '../../../components/SettingsComponents/Cards';
import { Popup } from '../../../components/SettingsComponents/Popup';
import { SettingsHeader } from '../../../components/SettingsComponents/SettingsHeader';
import { classNames } from '../../../utils/classNames/classNames';
import cls from './SettingsPage.module.css';
import { ButtonComplete } from '../../../components/SettingsComponents/ButtonComplete';
import { ICardData } from '../../../types';

interface ISettingsPageData {
  className?: string;
}

const SettingsPage = ({ className }: ISettingsPageData) => {
  const [isPopup, setIsPopup] = useState<boolean>(false);
  const [cards, setCards] = useState<ICardData[]>([]);

  const handleOpenPopup = () => {
    setIsPopup(true);
  }

  const handleClosePopup = (evt: React.MouseEvent) => {
    evt.preventDefault();

    setIsPopup(false);
  }

  const handleAddCard = (card: { subject: string, teacher: string }) => {
    setCards((prev) => [...prev, card]);
    setIsPopup(false);
  }

  return (
    <main className={classNames(cls.section, {}, [className || ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <Popup 
          isOpen={isPopup} 
          onClose={handleClosePopup}
          onAddCard={handleAddCard}
        />
        <SettingsHeader
          onOpen={handleOpenPopup}
        />
        <Cards 
          cards={cards}
        />
        <ButtonComplete />
      </div>
    </main>
  );
};

export default SettingsPage;