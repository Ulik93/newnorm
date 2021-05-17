import React from "react"
import { BrowserRouter, NavLink, Route } from "react-router-dom"
import ControlTech from "./Parts/ControlTech"
import Prom from "./Parts/Prom"
import Scanners from "./Parts/Scanners"
import Terminals from "./Parts/Terminals"
import img1 from "../../components/Staffs/phone.jpg"
import img2 from "../../components/Staffs/printer.jpg"
import img3 from "../../components/Staffs/scaner.jpg"
import img7 from "./7.png"
import img8 from "./9.png"
import img9 from "./10.png"
import img10 from "./11.png"
import img11 from "./12.png"
import img12 from "./13.png"
import img13 from "./14.jpg"
import img14 from "./15.jpg"
import img15 from "./16.jpg"

export default function EquipmentMain() {
  const staffs1 = [
    {
      title: "Urovo DT50",
      desc: `ТЕРМИНАЛ СБОРА ДАННЫХ UROVO DT50 / DT50-SH3S9E4F00 / ANDROID 9.0 / 1.4 GHZ / 8ХCORE, CORTEX A53 / QUALCOMM SD 450 / RAM 2 GB / ROM 16 GB / HONEYWELL N6603 / 2D IMAGER / 5.7" / 720 X 1440 / 2G / 4G (LTE) / BLUETOOTH / GPS / GSM / WI-FI / 4300 MAH / NFC / СЕНСОР ОТПЕЧАТКА / IP 67 / 250 G / 6 КЛАВИШ`,
      image: img1,
    },
    {
      title: "UROVO D8000",
      desc: `Термотрансферный принтер UROVO D8000 отличает высокая эргономичность корпуса, простой и понятный для пользователя интерфейс, а также полный набор опций, соответствующих потребностям практически любой области применения.`,
      image: img2,
    },
    {
      title: "IDZOR 9750BT 2D",
      desc: `Сканер штрих-кодов IDZOR 9750BT Bluetooth 2D - Беспроводной сканер с радиусом действия 100 метров!`,
      image: img3,
    },
  ]

  const staffs2 = [
    {
      title: "Принтер печати на этикетках Printronix 8000",
      desc: `Печатает уникальные коды на самоклеящихся этикетках.`,
      image: img10,
    },
    {
      title: "Станция Комплекс складских операций.",
      desc: `Простое решение для проведения складских операций и ведения складского учета.`,
      image: img11,
    },
    {
      title: "Станция агрегации АР-10С. Линия М.",
      desc: `Предназначенная для ручной агрегации вторичных упаковок в короба.`,
      image: img12,
    },
  ]

  const staffs3 = [
    {
      title: "ПОРТ-1000Ф",
      desc: `Касса, которой можно управлять с телефона.
          Встроенный компьютер.*
          Работает на Windows, Android, Linux.`,
      image: img7,
    },
    {
      title: "Станция послойной агрегации АР-30. Линия М.",
      desc: `Станция позволяет послойно считывать коды вторичных упаковок, сложенные в короба, а также печатать групповые этикетки на короб.`,
      image: img9,
    },
    {
      title: "АМК-100. Линия М.",
      desc: `Пролистыватель АМК-100 предназначен для автоматической маркировки развернутых коробок, конвертов, мешков, пакетов, этикеток методом прямой печати.`,
      image: img8,
    },
  ]
  const staffs4 = [
    {
      title: "ПОРТ-1000Ф",
      desc: `Касса, которой можно управлять с телефона.
          Встроенный компьютер.*
          Работает на Windows, Android, Linux.`,
      image: img13,
    },
    {
      title: "ПОРТ - 600Ф",
      desc: `Bluetooth / USB / LAN / Денежный ящик / Дисплей покупателя
          В стандартной поставке 1С
          Автоматический отрезчик кассовой ленты`,
      image: img14,
    },
    {
      title: "ПОРТ - 100Ф",
      desc: `3 цвета: классический, черный, голубой.
          Можно подключить любое периферийное устройство.
          Удобна смена кассовой ленты.`,
      image: img15,
    },
  ]
  return (
    <BrowserRouter>
      <div className="equipments-nav_link">
        <div className="div">
          <NavLink className="nav_link-items" to="/equipments">
            Терминалы сбора данных
          </NavLink>
          <NavLink className="nav_link-items" to="/scanners">
            2д сканеры
          </NavLink>
          <NavLink className="nav_link-items" to="/prom">
            промышленное оборудование
          </NavLink>
          <NavLink className="nav_link-items" to="control">
            контрольно кассовая техника
          </NavLink>
        </div>
        <div>
          <Route path="/equipments">
            <Terminals data={staffs1} />
          </Route>
          <Route path="/scanners">
            <Scanners data={staffs2} />
          </Route>
          <Route path="/prom">
            <Prom data={staffs3} />
          </Route>
          <Route path="/control">
            <ControlTech data={staffs4} />
          </Route>
        </div>
      </div>
    </BrowserRouter>
  )
}
