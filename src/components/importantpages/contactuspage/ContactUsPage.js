import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import './contactuspage.css'

import TopMenuSection from '../../topmenusection/TopMenuSection';
import FooterWebSection from '../../allsections/footerwebsection/FooterWebSection';

export default class ContactUsPage extends Component {
    render() {
        return (
            <>
            <div className="orponbd-womens-fashion-category-page-web-top-menu">
                <TopMenuSection/>
            </div>

            <div className="obd-contact-us-pages-main-section-box">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="obd-contact-us-pages-main-section-box-inner-content">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="obd-contact-us-pages-main-section-box-inner-input-field-box mx-auto">
                                            <div className="obd-contact-us-pages-main-section-box-inner-cont-hdd text-center">
                                                <h3>Contact Us</h3>
                                            </div>
                                            <div className="obd-contact-us-pages-main-section-box-inner-input-field-content-mn">
                                                <div className="obd-contact-us-pages-main-section-box-inner-input-field-fst-nm-lst-nm">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <input type="text" placeholder="First Name"/>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <input type="text" placeholder="Last Name"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="obd-contact-us-pages-main-section-box-inner-input-field-all">
                                                    <input type="text" placeholder="Mobile NUmber"/>
                                                </div>
                                                <div className="obd-contact-us-pages-main-section-box-inner-input-field-all">
                                                    <input type="email" placeholder="Email Address"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        images
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
