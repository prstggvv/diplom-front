import { useState } from 'react';
import { Cards } from '../../../components/SettingsComponents/Cards';
import { Popup } from '../../../components/SettingsComponents/Popup';
import { SettingsHeader } from '../../../components/SettingsComponents/SettingsHeader';
import { classNames } from '../../../utils/classNames/classNames';
import cls from './SettingsPage.module.css';
import { ButtonComplete } from '../../../components/SettingsComponents/ButtonComplete';

interface ISettingsPageData {
  className?: string;
}

const SettingsPage = ({ className }: ISettingsPageData) => {
  const [isPopup, setIsPopup] = useState<boolean>(false);

  const handleOpenPopup = () => {
    setIsPopup(true);
  }

  const handleClosePopup = (evt: React.MouseEvent) => {
    evt.preventDefault();

    setIsPopup(false);
  }

  return (
    <main className={classNames(cls.section, {}, [className || ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <Popup 
          isOpen={isPopup} 
          onClose={handleClosePopup}  
        />
        <SettingsHeader
          onOpen={handleOpenPopup}
        />
        <Cards />
        <ButtonComplete />
      </div>
    </main>
  );
};

export default SettingsPage;