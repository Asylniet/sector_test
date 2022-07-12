import React from "react";
import "../css/Header.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="flex spb">
      <div className="left flex">
        <div className="logo">
          <img src={logo} alt="Sector logo image" />
        </div>
        <nav className="flex">
          <a href="#" className="active">
            Описание
          </a>
          <a href="#">Видео-интрукция</a>
          <a href="#">Загрузки</a>
        </nav>
      </div>
      <div className="right flex">
        <nav className="flex">
          <a href="#">Обучение</a>
          <a href="#">Цены</a>
          <a href="#">Поддержка</a>
          <a href="#">Личный кабинет</a>
          <div className="seperator"></div>
          <a href="#">Войти</a>
        </nav>
      </div>
    </header>
  );
};
export default Header;
