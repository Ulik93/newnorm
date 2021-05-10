import React from "react"
import "./index.css"
import "./media.css"

import { Link } from "react-router-dom"
import { useState } from "react"
import { Batken, Osh, JalalAbad, Naryn, Talas, YssykKol } from "./FilialsInfo"

const Filials = () => {
  const [currentState, setCurrentState] = useState("osh")

  return (
    <div className="filials">
      <span className="containerForLinks">
        <Link to="#">
          <div className="link">о нас</div>
        </Link>
        <Link to="#">
          <div className="link">адресс</div>
        </Link>
        <Link to="#">
          <div className="link">контакты</div>
        </Link>
      </span>
      <div className="containerForInfo">
        {currentState === "osh" && <Osh />}
        {currentState === "talas" && <Talas />}
        {currentState === "batken" && <Batken />}
        {currentState === "issykkol" && <YssykKol />}
        {currentState === "jalalabad" && <JalalAbad />}
        {currentState === "naryn" && <Naryn />}
      </div>
      <div className="containerForFilials">
        <div
          onClick={() => setCurrentState("osh")}
          className={`filialLinksOsh ${
            currentState === "osh" && "filials-active"
          }`}
        >
          <div>Ош</div>
        </div>
        <div
          onClick={() => setCurrentState("talas")}
          className={`filialLinksTalas ${
            currentState === "talas" && "filials-active"
          }`}
        >
          <div>Талас</div>
        </div>
        <div
          onClick={() => setCurrentState("batken")}
          className={`filialLinksBatken ${
            currentState === "batken" && "filials-active"
          }`}
        >
          <div>Баткен</div>
        </div>
        <div
          onClick={() => setCurrentState("issykkol")}
          className={`filialLinksIssykKul ${
            currentState === "issykkol" && "filials-active"
          }`}
        >
          <div>Ыссык-Куль</div>
        </div>
        <div
          onClick={() => setCurrentState("jalalabad")}
          className={`filialLinksJalalAdad ${
            currentState === "jalalabad" && "filials-active"
          }`}
        >
          <div>Джалал-Абад</div>
        </div>
        <div
          onClick={() => setCurrentState("naryn")}
          className={`filialLinksNaryn ${
            currentState === "naryn" && "filials-active"
          }`}
        >
          <div>Нарын</div>
        </div>
      </div>
    </div>
  )
}
export default Filials
