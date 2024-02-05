import React from 'react';
import '../style/about.css'
import aboutImg from '../../assets/img/about-img.png'
import aboutOne from '../../assets/img/aboutone.png'
import aboutTwo from '../../assets/img/aboutwo.png'
import aboutThree from '../../assets/img/abouthree.png'
import aboutFour from '../../assets/img/aboutfour.png'
import aboutFive from '../../assets/img/aboutfive.png'
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


const About = () => {
    return (
        <section id="about">

            <div className="about-general">
                <div className="about-one">
                    <h2>Заявка на сайте</h2>
                    <h3>Вы оставаляете заявку на заказ на нашем сайте</h3>
                    <img src={aboutOne} alt=""/>
                </div>
                <div className="about-two">
                    <img src={aboutTwo} alt=""/>
                    <h2>Уточнение</h2>
                    <h3>Наш менеджер перезвонит вам, уточнит детали заказа</h3>

                </div>
                <div className="about-one">
                    <h2>Выезд</h2>
                    <h3>После уточнения, мы приезжаем точно в адрес и в точное время</h3>
                    <img src={aboutThree} alt=""/>
                </div>
                <div className="about-two">
                    <img src={aboutFour} alt=""/>
                    <h2>Доставка</h2>
                    <h3>Доставляем груз точно в срок</h3>

                </div>
                <div className="about-one">
                    <h2>Получение</h2>
                    <h3>Вы принимаете груз и получаете скидку на следующую перевозку</h3>
                    <img src={aboutFive} alt=""/>
                </div>
            </div>
            <center>
                <p>Добро пожаловать в нашу портерскую такси-службу! Мы - команда опытных водителей, специализирующихся <br/>на комфортной и безопасной перевозке пассажиров и их багажа. Наша цель - обеспечить вам <br/> высококачественное обслуживание, пунктуальность   надежность. Путешествуйте с комфортом и <br/>уверенностью вместе с нами!</p>
                <h1>Связаться с нами</h1>
            </center>
            <div className="about-number">
                <h1>0707-70-70-70</h1>
                <  FaTelegramPlane />
                <FaWhatsapp />


            </div>

            <div className="container">
                <div className="about">
                    <h1>Как мы работаем</h1>








                </div>
            </div>

        </section>
    );
};

export default About;