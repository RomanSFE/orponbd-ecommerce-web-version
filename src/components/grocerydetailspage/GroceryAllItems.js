import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import './groceryallitems.css';

import TopMenuSection from '../topmenusection/TopMenuSection';
import FooterWebSection from '../allsections/footerwebsection/FooterWebSection';

export default class GroceryAllItems extends Component {
    render() {
        return (
            <>
            <div className="orponbd-womens-fashion-category-page-web-top-menu">
                <TopMenuSection/>
            </div>

            {/* Banner start */}
            <div className="obd-grocery-main-page-all-item-banner-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="obd-grocery-main-page-all-item-banner-section-box">
                                <img src={require('../../assets/grocery-main-page-main-banner.png')} alt="orponbd global collections"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner end */}

            <div className="orponbd-womens-fashion-category-page-web-top-menu">
                <FooterWebSection/>
            </div>

            </>
        )
    }
}
