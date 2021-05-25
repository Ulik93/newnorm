import React from "react"
import "./Header.css"

const Submenu = () => {
  return (
    <div className="navbar__submenu">
      <div className="navbar__submenu-container">
        <ul className="navbar__submenu-list">
          <li>Терминалы сбора данных</li>
          <li>Urovo DT50</li>
          <li>Urovo DT30</li>
          <li>UROVO DT40</li>
        </ul>
        <ul className="navbar__submenu-list">
          <li>2д Сканеры</li>
          <li>IDZOR 9750BT 2D</li>
          <li>IDZOR 2200S 2D</li>
          <li>IDZOR 9800 2D</li>
        </ul>
        <ul className="navbar__submenu-list">
          <li>Промышленное оборудование</li>
          <li>TSC ML340P</li>
          <li>Printronix 8000</li>
          <li>Toshiba B-EX4D2</li>
          <li>Станция агрегации АР-10С. Линия М.</li>
          <li>Станция послойной агрегации АР-30. Линия М.</li>
          <li>АМК-100. Линия М.</li>
        </ul>
        <ul className="navbar__submenu-list">
          <li>Контрольная кассовая техника</li>
          <li>ПОРТ - 1000Ф</li>
          <li>ПОРТ - 600Ф</li>
          <li>ПОРТ - 100Ф</li>
        </ul>
        <ul className="navbar__submenu-list">
          <li>Принтеры</li>
          <li>UROVO D8000</li>
          <li>UROVO D6000</li>
          <li>UROVO D7000</li>
        </ul>
        <ul className="navbar__submenu-list">
          <li>Расходные материалы</li>
          <li>Этикетки BRADY B-424</li>
          <li>UROVO Термо принтер D6000Чековая</li>
          <li>Этикетки полипропиленовые</li>
          <li>Пластиковые пружины</li>
          <li>Evolis лента R2011</li>
          <li>Argox OS-2130-SB printhead</li>
        </ul>
      </div>
    </div>
  )
}

export default Submenu
