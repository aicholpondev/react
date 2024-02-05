import React from 'react';
import '../style/hero.css'
import porter from '../../assets/img/porter.png'
import {FaWhatsapp} from "react-icons/fa";



const Hero = () => {
    return (
        <section id="hero">
            <div className="container">
                <div className="hero">

                        <h1>ДЛЯ ЗАКАЗА ЗВОНИТЕ НАМ</h1>
                        <h2>+996 (707)-57-46-84</h2>
                        <a href="#">
                            <button>позвонить</button>
                        </a>

                        <img src={porter} alt="img"/>

                    <div className="icon">
                        <FaWhatsapp />
                    </div>






                </div>
            </div>
            
        </section>
    );
};

export default Hero;