import React from "react";
import s from "./maincontent.module.css";
import { card } from "../Route/Route.js";
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
      <div className={s.mainTwo}>
        <span className={s.font600}>Возможности ChatGPT</span>
        <div className={s.gridContent}>
          {card.map((card, index) => {
            return (
              <div key={index} className={s.card}>
                <span className={s.title}>{card.title}</span>
                <p className={s.text}>{card.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
