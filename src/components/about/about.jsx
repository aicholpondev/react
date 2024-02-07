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
            <h1>Как мы работаем</h1>
            <div className="about-general">
                <div className="about-one">
                    <div className="first">
                        <h2>Заявка на сайте</h2>
                        <h3>Вы оставаляете заявку на заказ на нашем сайте</h3>
                    </div>
                    <div className="second">
                        <img src={aboutTwo} alt=""/>
                    </div>
                    <div className="third">
                        <h2>Выезд</h2>
                        <h3>После уточнения, мы приезжаем точно в адрес и в точное время</h3>
                    </div>
                    <div className="four">
                        <img src={aboutFour} alt="img"/>
                    </div>
                    <div className="five">
                        <h2>Получение</h2>
                        <h3>Вы принимаете груз и получаете скидку на следующую перевозку</h3>
                    </div>
                </div>
                <div className="about-two">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>

                <div className="about-three">
                    <div className="phone">
                        <img src={aboutOne} alt="img"/>
                    </div>
                    <div className="para">
                        <h2>Уточнение</h2>
                        <h3>Наш менеджер перезвонит вам, уточнит детали заказа</h3>
                    </div>
                    <div className="car">
                        <img src={aboutThree} alt=""/>
                    </div>
                    <div className="dost">
                        <h2>Доставка</h2>
                        <h3>Доставляем груз точно в срок</h3>
                    </div>
                    <div className="hand">
                        <img src={aboutFive} alt=""/>
                    </div>



                </div>

            </div>
            <div className="container">
                <div className="about">

                    <center>
                        <p>Добро пожаловать в нашу портерскую такси-службу! Мы - команда опытных водителей, специализирующихся <br/>на комфортной и безопасной перевозке пассажиров и их багажа. Наша цель - обеспечить вам <br/> высококачественное обслуживание, пунктуальность   надежность. Путешествуйте с комфортом и <br/>уверенностью вместе с нами!</p>
                        <h5>Связаться с нами</h5>
                    </center>
                    <div className="about-number">
                        <div className="number-one">
                            <h4>0707-70-70-70</h4>

                            <div className="number">
                                <div className="telegram">
                                    <a href="#">

                                        <  FaTelegramPlane />
                                    </a>
                                </div>
                                <div className="whats">
                                    <a href="#">
                                        <FaWhatsapp />
                                    </a>
                                </div>
                            </div>


                        </div>
                        <div className="number-one">
                            <h4>0707-70-70-70</h4>
                            <div className="number">
                                <div className="telegram">
                                    <a href="#">

                                        <FaTelegramPlane />
                                    </a>
                                </div>
                                <div className="whats">
                                    <a href="#">
                                        <FaWhatsapp />
                                    </a>
                                </div>
                            </div>


                        </div>



                    </div>








                </div>
            </div>

        </section>
    );
};

export default About;