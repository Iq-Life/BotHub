import React, { useState } from "react";
import s from "./dropdown.module.css"; // Не забудьте создать и настроить этот файл
import { useTranslation } from 'react-i18next';
import vector1 from './img/vector1.svg';
import tg from './img/tg.svg';
import business from './img/business.svg';
import bothub from './img/bothub.svg';
const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={s.dropdownContainer}>
      <button className={s.dropdownButton} onClick={toggleMenu}>
        {t('products')} <img src={vector1} alt="vector1" />
      </button>
      {isOpen && (
        <div className={s.dropdownMenu}>
          <ul>
            <li>
              <img src={bothub} alt="bothub" />
              Агрегатор нейросетей BotHub
              <span>ChatGPT на базе 3.5 и 4.0 версии OpenAI</span>
            </li>
            <li>
            <img src={business} alt="business" />
              Бизнес бот
              <span>ChatGPT для эффективного решения бизнес задач</span>
            </li>
            <li>
            <img src={tg} alt="tg" />
              Telegram бот
              <span>Удобный бот в Telegram который всегда под рукой</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
