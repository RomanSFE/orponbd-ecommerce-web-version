import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import './profileonly.css';

import TopMenuSection from '../topmenusection/TopMenuSection';
import FooterWebSection from '../allsections/footerwebsection/FooterWebSection';
import YouAlsoLikeSlider from '../cart/youalsolikeslider/YouAlsoLikeSlider';

export default class Profile extends Component {

    render() {
        return (
            <>
            <div className="orponbd-womens-fashion-category-page-web-top-menu">
                <TopMenuSection/>
            </div>

           <h3>User Profile Dashboard</h3>

            <div className="youmayalso-like-slider-cart-page-main-box-wv">
                <div className="container">
                    <YouAlsoLikeSlider/>
                </div>
            </div>

            <div className="orponbd-womens-fashion-category-page-web-top-menu">
                <FooterWebSection/>
            </div>
            </>
        )
    }
}
