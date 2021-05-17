import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "./logo copy.png";

export default function Header() {
  const links = [
    { title: "Главная", path: "/" },
    { title: "Возможности", path: "/capabilities" },
    { title: "ОФД-НН", path: "http://ofd.norma.kg" },
    { title: "Эдо", path: "/edo" },
    { title: "Оборудования", path: "/equipments" },
    { title: "Проекты", path: "/projects" },
    { title: "Новости", path: "/news" },
    { title: "Филиалы", path: "/filials" },
  ];
  const [show, setShow] = React.useState(true);
  React.useEffect(() => {
    if (window.matchMedia("(max-width:1147px)").matches) {
      setShow(false);
    }
  }, []);
  return (
    <header>
      <div className="header_wrapper">
          <NavLink className="header_logo" to="/">
            <img src={logo} alt="norma.kg logo" />
          </NavLink>
        <div className={show ? "navOpen nav" : "nav"}>
          {links.map((item) => {
            if (item.title !== "ОФД-НН") {
              // if (item.title === "Эдо") {
              //   return (
              //     <a
              //       key={item.title}
              //       target="_blank"
              //       href="/"
              //       className="nav_link"
              //     >
              //       Эдо
              //     </a>
              //   );
              // }
              return (
                <NavLink
                  key={item.title}
                  onClick={() => {
                    if (window.matchMedia("(max-width:1147px)").matches)
                      setShow(false);
                  }}
                  to={item.path}
                  className="nav_link"
                  activeClassName="nav_link-active"
                  exact
                >
                  {item.title}
                </NavLink>
              );
            } else {
              return (
                <a
                  key={item.title}
                  target="_blank"
                  href="http://ofd.norma.kg"
                  className="nav_link"
                >
                  ОФД-НН
                </a>
              );
            }
          })}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="fas fa-phone-alt"
            href="tel:+996501588882"
          ></a>
          <span className="nav_lang">RU</span>
          <span className="login">
            <a
              target="_blank"
              href="http://lk.norma.kg/"
              className="login_button"
            >
              Войти
            </a>
          </span>
        </div>
        <div
          onClick={() => setShow(!show)}
          className={`burger ${show ? "burgerOpen" : ""}`}
        >
          <div />
          <div />
          <div />
        </div>
      </div>
    </header>
  );
}
