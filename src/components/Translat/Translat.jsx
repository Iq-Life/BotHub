import React from 'react';
import { useTranslation } from 'react-i18next';
import planet from './img/planet.svg';
const Translat = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <img src={planet} alt="planet" />
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('ru')}>Русский</button>
    </div>
  );
};

export default Translat;
