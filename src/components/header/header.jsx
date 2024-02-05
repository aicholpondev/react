import React, {useState} from 'react';
import '../style/header.css'
import logo from '../../assets/img/logo-taxi.svg'
const Header = () => {

    const [scrool, setScroll] = useState(0);

    window.addEventListener('scroll',() => setScroll(window.scrollY))

    return (
        <header id="header"
                style={{background:scrool > 30 ? "#363636": "none",transition: '.4s'}}
        >
            <div className="container">
                <div className="header">


                    <img src={logo} alt="img"/>

                    <div className="header-nav">
                        <a href="#"
                           style={{color: scrool > 0 && scrool < 570 ? '#FFC71A' : 'white'}}
                        >Главная</a>
                        <a href="#block"
                           style={{color: scrool > 570 && scrool < 1718 ? '#FFC71A' : 'white'}}
                        >Услуги</a>
                        <a href="#about"
                           style={{color: scrool > 1718 ? '#FFC71A' : 'white'}}
                        >О нас</a>
                        <a href="#">Контакты</a>
                        {/*<a href="">{scrool}</a>*/}
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;