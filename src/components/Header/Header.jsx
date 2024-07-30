import React from "react";
import s from "./header.module.css";
import logo from "./img/logo.svg";
import line from "./img/line.svg";
import DropdownMenu from "../DropDown/DropDown";
import Translat from "../Translat/Translat";
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  
  return (
    <header className={s.header}>
      <div className={s.content}>
        <nav className={s.nav}>
          <img src={logo} alt="logo" />
          <img src={line} alt="" />
            <DropdownMenu />
            <a src="*" className={s.li}>{t('packages')}</a>
            <a src="*" className={s.li}>{t('api')}</a>
            <a src="*" className={s.li}>{t('blog')}</a>
        </nav>
        <div className={s.lvl2}>  
          <Translat />
          <button>{t('login')}</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
