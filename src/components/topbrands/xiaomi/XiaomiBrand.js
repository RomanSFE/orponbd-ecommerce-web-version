import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import './xiaomibrand.css';

// Range Slider
// Range Slider

import TopMenuSection from '../../topmenusection/TopMenuSection';
import FooterWebSection from '../../allsections/footerwebsection/FooterWebSection';

export default class XiaomiBrand extends Component {
    render() {
        return (
            <>
            <div className="orponbd-womens-fashion-category-page-web-top-menu">
                <TopMenuSection/>
            </div>

            <div className="obd-top-brands-section-web-version-main-box">
                <div className="container">
                    <div className="row obd-top-brands-section-web-banner-secc">
                        <div className="col-md-12">
                            <div className="obd-top-brands-section-web-banner-section-box">
                                <img src={require('../../../assets/top-brand-xiaomi-banner.png')} alt="orponbd online shop"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="orponbd-womens-fashion-category-page-web-top-menu">
                <FooterWebSection/>
            </div>
            </>
        )
    }
}
