import React from "react";
import s from "./maincontent.module.css";
const MainContent = () => {
  return (
    <div className={s.mainContent}>
      <div className={s.fon}></div>
      <div className={s.mainOne}>
        <div>
          <div className={s.textMainOne}>
            <span className={s.font700}>ChatGPT: ваш умный помощник</span>
            <span className={s.font500}>
              Экспериментируйте с ChatGPT-4, Midjourney и Claude в одном месте.
              Без VPN и абонентской платы. Создавайте контент, обрабатывайте
              данные и получайте ответы на вопросы через удобный интерфейс!
            </span>
          </div>
          <button className={s.button}>Начать работу</button>
        </div>
        <div>
          <div className={s.img}></div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
