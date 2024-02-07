import React from 'react';
import '../style/footer.css'

const Footer = () => {
    return (
        <section id="footer">
            <div className="container">
                <div className="footer">
                    
                    <div className="footer-nav">
                        <a href="#">Услуги</a>
                        <a href="#">Контакты</a>
                        <a href="#">Тарифы</a>
                    </div>
                    <div className="about">
                        <h1>Porter <span>Taxi</span></h1>
                    </div>
                    <div className="number">
                        <a href="#">0504-41-68-33

                        </a>
                        <a href="#">0509-13-99-66</a>

                    </div>

                </div>
                <p>Все права защищены - 2023</p>

            </div>

        </section>
    );
};

export default Footer;