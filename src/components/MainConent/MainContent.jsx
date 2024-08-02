import React from "react";
import s from "./maincontent.module.css";
import { card } from "../Route/Route.js";
import img1 from "./img/img.svg";
import img2 from "./img/img2.svg";
import img3 from "./img/img3.svg";
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
          <div className={s.imgMessage}></div>
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
      <div className={s.mainThree}>
        <div className={s.photoСollection}>
          <img className={s.img1} src={img1} alt="desert" />
          <img className={s.img2} src={img2} alt="robot" />
          <img className={s.img3} src={img3} alt="face" />
        </div>
        <div className={s.textPhoto}>
          <span className={s.font600}>Генерация Изображений Через Midjourney </span>
          <p className={s.font400}>MidJourney - инструмент для создания уникальных изображений. Наши алгоритмы помогут вам воплотить в жизнь вашу идею. Начните генерировать изображения с MidJourney прямо сейчас! Кликните на кнопку ниже, чтобы начать творить.</p>
          <button className={s.button2}>Попробовать Midjourney</button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
