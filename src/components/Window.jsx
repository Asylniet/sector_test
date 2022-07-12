import React from "react";
import "../css/Window.css";

const Window = () => {
  return (
    <div className="window-wrapper">
      <div className="flex column window">
        <div className="top flex">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <div className="line">Декларация на товары</div>
        <div className="flex spb grey-wrapper">
          <div className="flex column left">
            <div className="grey">
              Гр.31.1 Описание и характеристики товаров
            </div>
            <div className="grey">Наименование товаров:</div>
          </div>
          <div className="right grey">Регестрационный номер ДТ</div>
        </div>
        <div className="flex spb">
          <span className="left">
            Игрушечная машина (Игрушки пластмассовые для детских развлечений)
          </span>
          <div className="flex spb right">
            <span>55308</span>
            <span>261217</span>
            <span>0009068</span>
          </div>
        </div>
        <div className="flex spb">
          <div className="left blue">
            <span>Кол-во: 1200</span>
            <span>Код-ед. изм. 796 шт</span>
          </div>
          <div className="right blue">
            <span>33. Код товара</span>
            <span>9503009500</span>
          </div>
        </div>
        <div className="flex al-l column">
          <div>
            Исходная цена товара:
            <span> 242 USD</span>
          </div>
          <div>
            Производитель:
            <span> Wuxi Hualing Filter Equipment </span>
          </div>
          <div>
            Артикул:
            <span> 12332564</span>
          </div>
          <div className="flex bottom grey al-l">
            <div className="flex spb">
              <span style={{ color: "black" }}>47. Таможенные платежи</span>
              <span>5 139 360, 96</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Window;
