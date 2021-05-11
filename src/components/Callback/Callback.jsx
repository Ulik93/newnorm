import React, {useEffect} from "react";
import "./Callback.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Callback() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  },[]);
  return (
    <div  data-aos="fade-up"className="callback">
      <div className="callback_wrapper">
        <div className="callback_info">
          <div className="callback_info_title">
            Оставьте свой номер телефона
          </div>
          <div className="callback_info_desc">
            Наши специалисты свяжутся с вами
          </div>
        </div>
        <div className="callback_input">
          <form action="http://185.29.184.52:3000/api/orders/phone/" method='post'>
          <input type="text" name='phone_number' placeholder="Ваш номер телефона" />
          <button type='submit'>Отправить</button>
          </form>
        </div>
        <div className="callback_btn about_btn">Отправить</div>
      </div>
    </div>
  );
}
