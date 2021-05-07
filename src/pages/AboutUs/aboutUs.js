import React from 'react';
import './index.css'
import {Link} from "react-router-dom";

const AboutUs = () => {
    return (
        <div className='aboutUs'>

			<div className="aboutUs__header"></div>

            <div className="tittle">Как нас найти ?</div>
{/*			<div className='aboutUsContent'>*/}
{/*<div className='text'>*/}
{/*	АНМ Консалт – это компания, которая поможет Вам сосредоточиться на ключевой деятельности. Мы оказываем консалтинговые услуги по вопросам финансово-хозяйственной деятельности организаций и индивидуальных предпринимателей (ИП) в области Бухгалтерского учета, Аудита, Антикризисного управления предприятием, регистрации/ликвидации юридических лиц и ИП.  Консалтинговые услуги от АНМ – это целый перечень мер, которые позволят вывести Ваш бизнес на качественный уровень. Результатами реализованных проектов специалистами компании  являются налаженные бизнес-процессы стартапов, модернизированная система финансового менеджмента ранее функционировавших компаний  и отлаженные каналы взаимоотношений с контрагентами.*/}
{/*	В нашем распоряжении обширная база современных источников информации, новейшие инструменты и солидный опыт практической работы. Что позволяет нам, оперируя самыми последними данными, предлагать тщательно разработанные, с учетом всех требований, решения  самых сложных задач в бухгалтерии, в юриспруденции и организации менеджмента. И мы не уходим в отпуск и на больничные.*/}
{/*				</div>*/}

{/*	</div>*/}
			<div className="map">
			<div className='mapInfo'>
				<span className='adressTittle'>Адрес:</span>
				720030, Кыргызстан, Бишкек,
				<br/>
				<br/>
				улица Касымалы Баялинова, 146
				<span className='adressTittle'>Контакты:</span>
				+996 501 588 882 - call-center
				<br/>
				<br/>
				+996 708 700 700
				<br/>
				<br/>
				+996 312 888 882
				<br/>
				<br/>
				Почта: nnormakg@gmail.com
			</div>
				<div className='containerForYandexMap'><iframe
					src="https://yandex.ru/map-widget/v1/?um=constructor%3A6544799b6e27f563b1269025c35d86012645043a322d04d7af52283c9138ab0a&amp;source=constructor"
					width="700" height="433" frameBorder="0"></iframe></div>

			</div>
		</div>
    );
};

export default AboutUs;