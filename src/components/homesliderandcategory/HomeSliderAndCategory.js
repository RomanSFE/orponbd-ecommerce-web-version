import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './homesliderandcategory.css';

export default class HomeSliderAndCategory extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 700,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            responsive: [
                {
                  breakpoint: 600,
                  settings: {
                    dots: true,
                    arrows: false
                  }
                }
              ]
          };
        return (
            <div className="home-slider-and-category-section-web-main-box">
                <div className="container">
                    <div className="row home-slider-and-category-exx-pdd">
                        <div className="col-md-2">
                            <div className="home-category-main-home-mega-menu">
                                <ul>
                                    <li><Link to="#">Global Shopping</Link>
                                        <div className="mega-menu-inner-box-webb-versn">
                                            <ul>
                                                <li><Link to="#">Sub Category 1</Link></li>
                                                <li><Link to="#">Sub Category 2</Link></li>
                                                <li><Link to="#">Sub Category 3</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><Link to="#">Men's Fashion</Link>
                                        <div className="mega-menu-inner-box-webb-versn">
                                            <ul>
                                                <li><Link to="#">Sub Category 4</Link></li>
                                                <li><Link to="#">Sub Category 5</Link></li>
                                                <li><Link to="#">Sub Category 6</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><Link to="#">Beauty & Health</Link>
                                        <div className="mega-menu-inner-box-webb-versn">
                                            <ul>
                                                <li><Link to="#">Beauty Category 1</Link></li>
                                                <li><Link to="#">Beauty Category 2</Link></li>
                                                <li><Link to="#">Beauty Category 3</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><Link to="#">Home & Living</Link></li>
                                    <li><Link to="#">Watches & Accessories</Link></li>
                                    <li><Link to="#">Sports & Outdoors</Link></li>
                                    <li><Link to="#">Electronic Devices</Link></li>
                                    <li><Link to="/womens-fashion">Women's Fashion</Link></li>
                                    <li><Link to="#">Smartphone</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="home-page-main-slider-section-box">
                                <Slider {...settings}>
                                    {/* single slide item */}
                                    <div className="single-carousel-web-hom-item">
                                        <div className="single-carousel-web-hom-img-part">
                                            <Link to="/#">
                                                <img src={require('../../assets/main-slide-2.jpg')} alt="orponbd global collection"/>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* single slide item */}
                                    {/* single slide item */}
                                    <div className="single-carousel-web-hom-item">
                                        <div className="single-carousel-web-hom-img-part">
                                            <Link to="/#">
                                                <img src={require('../../assets/main-slide-1.jpg')} alt="orponbd global collection"/>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* single slide item */}
                                    {/* single slide item */}
                                    <div className="single-carousel-web-hom-item">
                                        <div className="single-carousel-web-hom-img-part">
                                            <Link to="/#">
                                                <img src={require('../../assets/main-slide-3.jpg')} alt="orponbd global collection"/>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* single slide item */}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
