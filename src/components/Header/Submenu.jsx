import React from "react";
import { NavLink } from "react-bootstrap";
import "./Header.css";

const Submenu = () => {
  const links = [
    {
      name: "Контрольная кассовая техника",
      path: "/control",
      tags: ["ПОРТ - 1000Ф", "ПОРТ - 600Ф", "ПОРТ - 100Ф"],
    },
    {
      name: "Терминалы сбора данных",
      path: "/scanners",
      tags: ["Urovo DT50", "Urovo DT30", "Urovo DT40"],
    },
    {
      name: "2д Сканеры",
      path: "/prom",
      tags: ["IDZOR 9750BT 2D", "IDZOR 2200S 2D", "IDZOR 9800 2D"],
    },
    {
      name: "Промышленное оборудование",
      path: "/control",
      tags: [
        "TSC ML340P",
        "Printronix 8000",
        "Toshiba B-EX4D2",
        "Станция агрегации АР-10С. Линия М.",
        "Станция послойной агрегации АР-30. Линия М.",
        "АМК-100. Линия М.",
      ],
    },
    {
      name: "Принтеры",
      path: "/printer",
      tags: ["UROVO D8000", "UROVO D7000", "UROVO D6000"],
    },
    {
      name: "Расходные материалы",
      path: "/rashod",
      tags: [
        "Этикетки BRADY B-424",
        "UROVO Термо принтер D6000Чековая",
        "Этикетки полипропиленовые",
        "Пластиковые пружины",
        "Evolis лента R2011",
        "Argox OS-2130-SB printhead",
      ],
    },
  ];
  return (
    <div className="navbar__submenu">
      <div className="navbar__submenu-container">
        {/* <NavLink to="/qaxsa" className="navbar__submenu-list" >
          <li>{"xs"}</li>
          
        </NavLink> */}
        <a href="/equipments">sws</a>
        <a href="/control">sws</a>
        <a href="/qwq">sws</a>
        <a href="/qwq">sws</a>

        <NavLink to="/w" className="navbar__submenu-list" >
          <li>{'xs'}</li>
          
        </NavLink>{" "}
        <NavLink to="/e" className="navbar__submenu-list" >
          <li>{"item.name"}</li>

        </NavLink>{" "}
        <NavLink to="/r" className="navbar__submenu-list" >
          <li>{"item.name"}</li>
       
        </NavLink>
      </div>
    </div>
  );
};

export default Submenu;
