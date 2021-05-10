import React, { useEffect } from "react";
import "./Equipments.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export default function Equipments(props) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#000";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="equipments">
      <div className="equipments_wrapper">
        <div className="equipments_row">
          {props.data.map((item) => (
            <div
              key={item.title}
              data-aos="fade-up"
              className="staffs_cards_item"
            >
              <div className="staffs_cards_item_img">
                <img src={item.image} alt="image" />
              </div>
              <div className="staffs_cards_item_description">
                <div className="staffs_cards_item_title">{item.title}</div>
                <div className="staffs_cards_item_desc">{item.desc}</div>
              </div>
              <div className="staffs_cards_item_btn">
                <button onClick={openModal}>Заказать</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Заполните форму и мы свяжемся с Вами</h2>
          <button className='modal_btn' onClick={closeModal}>
			  <img className='modal_x' src="https://timebuild.com.ua/wp-content/themes/profremont/img/no.png" alt="" />
		  </button>
          <form action="https://5dcea5e1e7b4.ngrok.io/api/orders/safe_order_and_send_email/" method="post">
            <label>Имя и Фамилия:</label>
            <input type="text" name='first_name' placeholder="Имя и Фамилия" /> <br />
            <label>Номер телефона:</label>
            <input type="text" name='phone' placeholder="Номер телефона" /> <br />
            <label>Название компании:</label>
            <input type="text" name='company' placeholder="Название компании" /> <br />
            <label>Адрес:</label>
			<input type="text" name='address' placeholder="Адрес" />
			<button type='submit'>Отправить</button>
          </form>
        </Modal>
      </div>
    </div>
  );
}
