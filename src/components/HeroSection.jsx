import React from "react";
import Window from "./Window";
import CTA from "./CTA";
import SecButton from "./SecButton";
import "../css/Hero.css";

const HeroSection = ({ func }) => {
  return (
    <div className="flex spb">
      <div className="flex column al-l">
        <h1>Программа D-Sector</h1>
        <h3>
          Лучшая программа для заполнения таможенных деклараций в Казахстане.
          Подходит для Таможенных представителей и Декларантов, осуществляющих
          самостоятельное декларирование грузов
        </h3>
        <div className="flex">
          <CTA text={"Купить лицензию"} />
          <SecButton text={"Смотреть видео"} onClick={func} />
        </div>
      </div>
      <Window />
    </div>
  );
};
export default HeroSection;
