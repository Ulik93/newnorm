import React from "react";
import "./license.css";
import SingleLicense from "./SingleLicense";
import license1 from "./License__img/license1.jpg";
import license2 from "./License__img/license2.jpg";
import license3 from "./License__img/license3.jpg";
import { useState } from "react";

const data = [
  {
    id: 1,
    url: license1,
    title: `Министерство юстиции Кыргызской Республики `,
    text: `Сведительсвто о государственной регистрации юридического лица`,
  },
  {
    id: 2,
    url: license2,

    title: "Свидетельство о государственной регистрации",
    text: "Сведительсвто о государственной регистрации юридического лица",
  },
  {
    id: 3,
    url: license3,
    title: "Свидетельство о государственной регистрации web‑системы СБИС",
    text: "Сведительсвто о государственной регистрации юридического лица",
  },
];

const License = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  return (
    <div className="license__container">
      <div className="license__header">Лицензии и сертификаты</div>
      <div className="license__items">
        {data.map((item) => {
          return (
            <SingleLicense
              showModal={showModal}
              setShowModal={setShowModal}
              modalImg={modalImg}
              setModalImg={setModalImg}
              key={item.id}
              {...item}
            />
          );
        })}
      </div>
    </div>
  );
};
export default License;
