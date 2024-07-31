import React, { useState, useEffect, useRef } from "react";
import s from "./dropdown.module.css";
import { useTranslation } from "react-i18next";
import tg from "./img/tg.svg";
import business from "./img/business.svg";
import bothub from "./img/bothub.svg";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className={s.dropdownContainer}>
      <button
        className={`${s.dropdownButton} ${isOpen ? s.active : ""}`}
        onClick={toggleMenu}
      >
        {t("products")}{" "}
        <svg
          width="12"
          height="6"
          viewBox="0 0 12 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${s.icon} ${isOpen ? s.rotated : ""}`}
        >
          <path
            d="M1 5L6 1L11 5"
            stroke=""
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={s.iconPath}
          />
        </svg>
      </button>
      {isOpen && (
        <div className={s.dropdownMenu}>
          <div className={s.dropdownMenuOne}>
            <img className={s.imgNav}  src={bothub} alt="bothub" />
            <div className={s.text}>
              <span className={s.font600}>Агрегатор нейросетей BotHub</span>
              <span className={s.font400}>
                ChatGPT на базе 3.5 и 4.0 версии OpenAI
              </span>
            </div>
          </div>
          <div className={s.dropdownMenuOne}>
            <img className={s.imgNav} src={business} alt="business" />
            <div className={s.text}>
              <span className={s.font600}>Бизнес бот</span>
              <span className={s.font400}>
                ChatGPT для эффективного решения бизнес задач
              </span>
            </div>
          </div>
          <div className={s.dropdownMenuOne}>
            <img className={s.imgNav}  src={tg} alt="tg" />
            <div className={s.text}>
              <span className={s.font600}>Telegram бот</span>
              <span className={s.font400}>
                Удобный бот в Telegram который всегда под рукой
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
