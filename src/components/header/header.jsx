import React from 'react';
import '../style/header.css'
import logo from '../../assets/img/logo-taxi.svg'
const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <div className="header">

                    <img src={logo} alt="img"/>

                    <div className="header-nav">
                        <a href="#">Главная</a>
                        <a href="#">Услуги</a>
                        <a href="#">О нас</a>
                        <a href="#">Контакты</a>

                    </div>



                </div>
            </div>
        </header>
    );
};

export default Header;