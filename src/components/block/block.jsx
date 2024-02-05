import React from 'react';
import '../style/block.css'
import Slider from "react-slick";
import one from "../../assets/img/block-one.svg"
import two from '../../assets/img/block-two.svg'
import three from '../../assets/img/block-three.svg'
import four from '../../assets/img/block-four.svg'
import sliderOne from '../../assets/img/slideone.png'
import sliderTwo from '../../assets/img/slidetwo.png'
import sliderThree from '../../assets/img/slidethree.png'
import sliderFour from '../../assets/img/slidefour.png'
import sliderFive from '../../assets/img/slidefive.png'

const Block = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };
    return (
        <section id="block">
            <div className="container">
                <div className="block">
                    <div className="general-block">
                        <div className="block-one">
                            <img src={one} alt="img"/>
                            <h3>Надёжная и бережная доставка</h3>
                        </div>
                        <div className="block-two">
                            <img src={two} alt="img"/>
                            <h3>5 лет опыта работы</h3>
                        </div>
                        <div className="block-one">
                            <img src={three} alt="img"/>
                            <h3>На месте когда и где нужно</h3>
                        </div>
                        <div className="block-two">
                            <img src={four} alt="img"/>
                            <h3>Саблюдаем дорожные правила и этикет</h3>
                        </div>
                    </div>

                    <p>Грузовые перевозки по низкой цене осуществляются в любое время дня и ночи. Организуем комфортный переезд или быструю доставку груза по Бишкеку и Кыргызстану.</p>




                        <Slider {...settings}>
                            <div className="swipper">


                                <center>
                                    <img src={sliderOne} alt="img"/>

                                    <h1>Портер</h1>
                                    <h2>У нас имеются 20 портеров</h2>
                                    <h3>500 сом/час</h3>
                                </center>
                            </div>
                            <div className="swipper">

                                <center>
                                    <img src={sliderTwo} alt="img"/>
                                    <h1>Портер</h1>
                                    <h2>У нас имеются 20 портеров</h2>
                                    <h3>500 сом/час</h3>
                                </center>


                            </div>

                            <div className="swipper">
                                <center>
                                    <img src={sliderThree} alt="img"/>
                                    <h1>Портер</h1>
                                    <h2>У нас имеются 20 портеров</h2>
                                    <h3>500 сом/час</h3>
                                </center>
                            </div>

                            <div className="swipper">
                                <center>
                                    <img src={sliderFour} alt="img"/>
                                    <h1>Портер</h1>
                                    <h2>У нас имеются 20 портеров</h2>
                                    <h3>500 сом/час</h3>
                                </center>
                            </div>

                            <div className="swipper">
                                <center>
                                    <img src={sliderFive} alt="img"/>
                                    <h1>Портер</h1>
                                    <h2>У нас имеются 20 портеров</h2>
                                    <h3>500 сом/час</h3>
                                </center>
                            </div>


                        </Slider>











                </div>
            </div>
        </section>
    );
};

export default Block;