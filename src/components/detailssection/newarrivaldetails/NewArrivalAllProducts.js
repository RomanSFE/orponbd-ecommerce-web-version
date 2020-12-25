import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './newarrivalallproducts.css';

import TopMenuSection from '../../topmenusection/TopMenuSection';
import FooterWebSection from '../../allsections/footerwebsection/FooterWebSection';

export default class NewArrivalAllProducts extends Component {
    render() {
        return (
            <>
            <div className="orponbd-womens-fashion-category-page-web-top-menu">
                <TopMenuSection/>
            </div>

            {/* New Arrival Text Section Start */}
            <div className="obd-new-arrival-details-products-top-bg-section">
                <div className="obd-new-arrival-details-products-bg-img">
                    <img src={require('../../../assets/newarrival-bg.png')} alt="orponbd online shop"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="obd-new-arrival-details-products-top-content-box">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="obd-new-arrival-details-products-hed-txt">
                                            <h3>New Arrival</h3>
                                            <p>Discover what's new, what's hot and what's trending </p>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="obd-new-arrival-details-products-bg-right text-right">
                                            <img src={require('../../../assets/new-arrival-bg-right.png')} alt="orponbd online shop"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* New Arrival Text Section End */}

            <div className="obd-new-arrival-details-products-new-item-for-you-txt-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="obd-new-arrival-details-products-new-item-txt-wv">
                                <h4>New Items For You</h4>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="obd-new-arrival-details-products-new-item-right-sort text-right">
                                <select>
                                    <option value="" selected>Short By: Default</option>
                                    <option value="">Orders</option>
                                    <option value="">Price(high to low)</option>
                                    <option value="">Price(low to high)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* New Arrival All Products Start */}
            <div className="obd-new-arrival-details-products-webversion-main-sectionx">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            
                            <div className="obd-top-brands-section-all-products-sec-box">
                                {/* Single Roww Start */}
                                <div className="row orponbd-top-brand-prod-exx-pdddrw">
                                    {/* Single product start */}
                                    <div className="obd-top-brands-section-all-products-single-product">
                                        <Link to="#">
                                            <div className="obd-top-brands-section-all-products-single-web-vvesnn-img">
                                                <img src={require('../../../assets/women-fas-cat-4.png')} alt="orponbd online shop"/>
                                            </div>
                                            <div className="obd-top-brands-section-all-products-single-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="obd-top-brands-section-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-top-brands-section-all-products-single-product">
                                        <Link to="#">
                                            <div className="obd-top-brands-section-all-products-single-web-vvesnn-img">
                                                <img src={require('../../../assets/women-fas-cat-2.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="obd-top-brands-section-all-products-single-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="bestt-sell-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-top-brands-section-all-products-single-product">
                                        <Link to="#">
                                            <div className="obd-top-brands-section-all-products-single-web-vvesnn-img">
                                                <img src={require('../../../assets/women-fas-cat-3.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="obd-top-brands-section-all-products-single-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="bestt-sell-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-top-brands-section-all-products-single-product">
                                        <Link to="#">
                                            <div className="obd-top-brands-section-all-products-single-web-vvesnn-img">
                                                <img src={require('../../../assets/women-fas-cat-6.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="obd-top-brands-section-all-products-single-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="bestt-sell-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-top-brands-section-all-products-single-product">
                                        <Link to="#">
                                            <div className="obd-top-brands-section-all-products-single-web-vvesnn-img">
                                                <img src={require('../../../assets/women-fas-cat-5.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="obd-top-brands-section-all-products-single-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="bestt-sell-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                </div>
                                {/* Single Roww End */}

                                {/* Single Roww Start */}
                                <div className="row orponbd-top-brand-prod-exx-pdddrw">
                                    {/* Single product start */}
                                    <div className="obd-top-brands-section-all-products-single-product">
                                        <Link to="#">
                                            <div className="obd-top-brands-section-all-products-single-web-vvesnn-img">
                                                <img src={require('../../../assets/women-fas-cat-7.png')} alt="orponbd online shop"/>
                                            </div>
                                            <div className="obd-top-brands-section-all-products-single-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="obd-top-brands-section-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-top-brands-section-all-products-single-product">
                                        <Link to="#">
                                            <div className="obd-top-brands-section-all-products-single-web-vvesnn-img">
                                                <img src={require('../../../assets/women-fas-cat-8.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="obd-top-brands-section-all-products-single-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="bestt-sell-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-top-brands-section-all-products-single-product">
                                        <Link to="#">
                                            <div className="obd-top-brands-section-all-products-single-web-vvesnn-img">
                                                <img src={require('../../../assets/women-fas-cat-9.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="obd-top-brands-section-all-products-single-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="bestt-sell-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-top-brands-section-all-products-single-product">
                                        <Link to="#">
                                            <div className="obd-top-brands-section-all-products-single-web-vvesnn-img">
                                                <img src={require('../../../assets/women-fas-cat-2.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="obd-top-brands-section-all-products-single-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="bestt-sell-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-top-brands-section-all-products-single-product">
                                        <Link to="#">
                                            <div className="obd-top-brands-section-all-products-single-web-vvesnn-img">
                                                <img src={require('../../../assets/women-fas-cat-3.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="obd-top-brands-section-all-products-single-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="bestt-sell-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                </div>
                                {/* Single Roww End */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* New Arrival All Products End */}

            <div className="moreto-love-web-version-view-more-btn text-center">
                <button>View More <span><i className="fas fa-angle-down"></i></span></button>
            </div>

            <div className="orponbd-womens-fashion-category-page-web-top-menu">
                <FooterWebSection/>
            </div>
            </>
        )
    }
}
