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
                    <div className="row obd-top-brands-brand-logo-search-sort-section-pdd-box">
                        <div className="col-md-12">
                            <div className="obd-top-brand-top-brand-section-wv-logo-icon-bd-sec-box">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="obd-top-brand-logo-sectionn-web-v-box">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="obd-top-brand-logo-sectionn-img">
                                                        <img src={require('../../../assets/top-brand-logo-xiaomi.png')} alt="orponbd online shop"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-9">
                                                    <div className="obd-brabnd-logo-section-txt-box-wv">
                                                        <h4>XIAOMI</h4>
                                                        <p>Total <span>25 </span>products found in XIAOMI </p>
                                                        <div className="obd-brabnd-logo-section-like-and-star-sec">
                                                            <ul>
                                                                <li><p><span><i className="fas fa-heart"></i></span> 25 Likes</p></li>
                                                                <li>
                                                                    <div className="bessttt-selllng-start-rattng">
                                                                        <span class="fa fa-star checked"></span>
                                                                        <span className="besstt-sellng-ttotl-star-rat-count">4.5</span>
                                                                        <span className="besst-selling-star-count-number">(150 Sold)</span>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        search
                                    </div>
                                    <div className="col-md-4">
                                        sort by
                                    </div>
                                </div>
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
