import React from "react"
import { BrowserRouter, NavLink, Route } from "react-router-dom"
import ControlTech from "./Parts/ControlTech"
import Prom from "./Parts/Prom"
import Scanners from "./Parts/Scanners"
import Printers from "./Parts/Printers"
import Terminals from "./Parts/Terminals"
import img1 from "../../components/Staffs/phone.jpg"
import img2 from "../../components/Staffs/printer.jpg"
import img3 from "../../components/Staffs/scaner.jpg"
import img7 from "./7.png"
import img8 from "./9.png"
import img9 from "./10.png"
import img10 from "./11.png"
import img12 from "./13.png"
import img15 from "./16.jpg"
import urovo40 from './urovo40.jpg'
import urovo30 from './urovo30.jpg'
import printerTSC from './printerTSC.jpg'
import port600 from './port600.jpg'
import scan1 from './scan1.jpg'
import scan2 from './scan2.jpg'
import toshiba from './toshiba.jpg'
import urovo600 from './urovo600.jpg'
import urovo700 from './urovo700.jpg'

export default function EquipmentMain() {
  const staffs1 = [
    {
      title: "Urovo DT50",
      desc: `ТЕРМИНАЛ СБОРА ДАННЫХ UROVO DT50 / DT50-SH3S9E4F00 / ANDROID 9.0 / 1.4 GHZ / 8ХCORE, CORTEX A53 / QUALCOMM SD 450 / RAM 2 GB / ROM 16 GB / HONEYWELL N6603 / 2D IMAGER / 5.7" / 720 X 1440 / 2G / 4G (LTE) / BLUETOOTH / GPS / GSM / WI-FI / 4300 MAH / NFC / СЕНСОР ОТПЕЧАТКА / IP 67 / 250 G / 6 КЛАВИШ`,
      image: img1,
    },
    {
      title: "Urovo DT30",
      desc: 'ТЕРМИНАЛ СБОРА ДАННЫХ UROVO DT30 / DT30-AZ2S9E4000 / ANDROID 9.0 / 2D IMAGER / ZEBRA SE4710 (SOFT DECODE) / BLUETOOTH / WI-FI / GSM / 2G / 4G (LTE) / 4G (LTE) / GPS / NFC / RAM 2 GB / ROM 16 GB / ВОСЬМИЯДЕРНЫЙ / OCTA-CORE 1.4GHZ / 3.2" / 480 X 320 / 32 КЛАВИШИ / 4500MAH / 280 G / IP 67',
      image: urovo30
    },
    {
      title: "UROVO DT40",
      desc: 'ТЕРМИНАЛ СБОРА ДАННЫХ UROVO DT40 / DT40-SU3S9E4010 / ANDROID 9.0 / 1.8 GHZ / 8ХCORE, CORTEX A53 / QUALCOMM SD 450 / RAM 2 GB / ROM 16 GB / UROVO SE2030 / 2D IMAGER / 4.0" / 480 X 800 / 2G / 4G (LTE) / BLUETOOTH / GPS / GSM / WI-FI / 4500MAH / NFC / IP 67 / 240 G / 24 КЛАВИШИ',
      image: urovo40,
    },
  ]

  const staffs2 = [
    {
      title: "IDZOR 9750BT 2D",
      desc: `CКАНЕР ШТРИХ-КОДОВ IDZOR 9750BT 2D BLUETOOTH C ПОДСТАВКОЙ POGO PIN / ID9750BT-2D / BLUETOOTH / 2D IMAGE / USB / IP 43 / ДЛЯ ЕГАИС`,
      image: img3,
    },
    {
      title: "IDZOR 2200S 2D",
      desc: `CКАНЕР ШТРИХ-КОДОВ IDZOR 2200S 2D СКАНЕР (ПРОВОДНОЙ) / ID2200S-2D / COM (RS-232) / 2D IMAGE / USB / IP 43 / ДЛЯ ЕГАИС / C ФУНКЦИИЕЙ АВТОМАТИЧЕСКОГО СКАНИРОВАНИЯ В РЕЖИМЕ СНА`,
      image: scan1,
    },
    {
      title: "IDZOR 9800 2D",
      desc: `CКАНЕР ШТРИХ-КОДОВ IDZOR 9800 2D BLUETOOTH / C ПОДСТАВКОЙ / ID9800BT-2D / 2D IMAGE / USB / IP 54 / ДЛЯ ЕГАИС / BLUETOOTH`,
      image: scan2,
    },
    
  ]

  const staffs3 = [
    {
      title: "TSC ML340P",
      desc: 'Термопринтер этикеток TSC память 64Mb/128Mb качество печати 300 dpi скорость печати 127 мм/с ширина печати до 105,7 мм, интерфейс USB,RS-232, Ethernet,USB-Host. LCD. С отделителем этикеток.',
      image: printerTSC
    },
    {
      title: "Принтер печати на этикетках Printronix 8000",
      desc: `Печатает уникальные коды на самоклеящихся этикетках.`,
      image: img10,
    },
    {
      title: "Принтер печати на этикетках Printronix 8000Термопринтер этикеток Toshiba B-EX4D2",
      desc: `Недорогой принтер, обладающий высоким качеством печати и большой производительностью.`,
      image: toshiba,
    },
    {
      title: "Станция агрегации АР-10С. Линия М.",
      desc: `Предназначенная для ручной агрегации вторичных упаковок в короба.`,
      image: img12,
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
      image: img7,
    },
    {
      title: "ПОРТ - 600Ф",
      desc: `Bluetooth / USB / LAN / Денежный ящик / Дисплей покупателя
          В стандартной поставке 1С
          Автоматический отрезчик кассовой ленты`,
      image: port600,
    },
    {
      title: "ПОРТ - 100Ф",
      desc: `3 цвета: классический, черный, голубой.
          Можно подключить любое периферийное устройство.
          Удобна смена кассовой ленты.`,
      image: img15,
    },
  ]
  const staff5 = [
    {
      title: "UROVO D8000",
      desc: `Термотрансферный принтер UROVO D8000 отличает высокая эргономичность корпуса, простой и понятный для пользователя интерфейс, а также полный набор опций, соответствующих потребностям практически любой области применения.`,
      image: img2,
    },
    {
      title: "UROVO Термо принтер D6000",
      desc: `ПРИНТЕР ПЕЧАТИ ЭТИКЕТОК UROVO D6000 / D6000-A1203U1R0B0W1`,
      image: urovo600,
    },
    {
      title: "UROVO Термотрансферный принтер D7000",
      desc: `ПРИНТЕР ПЕЧАТИ ЭТИКЕТОК UROVO D7000 / D7000-A2203U1R1B1W1`,
      image: urovo700,
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
            Промышленное оборудование
          </NavLink>
          <NavLink className="nav_link-items" to="/control">
            Контрольно кассовая техника
          </NavLink>
          <NavLink className="nav_link-items" to="/printer">
            Принтеры
          </NavLink>
          <NavLink className="nav_link-items" to="/printer">
            Оборудование для маркировки
          </NavLink>
          <NavLink className="nav_link-items" to="/printer">
            Расходные материалы
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
          <Route path="/printer">
            <Printers data={staff5}/>
          </Route>
        </div>
      </div>
    </BrowserRouter>
  )
}
