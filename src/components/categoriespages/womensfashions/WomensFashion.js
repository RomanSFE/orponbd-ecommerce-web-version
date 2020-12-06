import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './womensfashionweb.css';


import TopMenuSection from '../../topmenusection/TopMenuSection';
import FooterWebSection from '../../allsections/footerwebsection/FooterWebSection';



export default class WomensFashion extends Component {
    render() {
        return (
            <>
            <div className="orponbd-womens-fashion-category-page-web-top-menu">
                <TopMenuSection/>
            </div>

            <div className="orponbd-womens-fashion-category-page-web-version-main-boxx">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="orponbd-womens-fashion-category-left-menu-section">
                                <div className="relateddd-cattt-gry-ytat">
                                    <h4>Related Categories</h4>
                                </div>
                                <div className="orponbd-womens-fashion-category-left-menu-section-itmm">
                                    <ul>
                                        <li><Link to="">Women's Fashion</Link></li>
                                        <li><Link to="">Beauty & Health 2</Link></li>
                                        <li><Link to="">Beauty & Health 3</Link></li>
                                        <li><Link to="">Beauty & Health 4</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="orponbd-womens-fashion-category-right-product-sec">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="orponbd-womens-fashion-category-right-topp-all-cttt">
                                            <p>All Categories <span><i className="fas fa-angle-right"></i></span>  <span><Link to="#">Women's Fashion</Link></span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="orponbd-womens-fashion-category-right-sortt-by-booxx">
                                            <div className="row">
                                                <div className="col-md-7">
                                                    <div className="orponbd-womens-fashion-category-right-sortt-by-left-sec">
                                                        <div className="orponbd-womentts-fashionn-sort-by-txt-web-vv">
                                                            <span>Sort By</span>
                                                            <div className="orponbd-womentts-fashionn-sort-by-select-bbox">
                                                                <select>
                                                                    <option value="" selected>Best match</option>
                                                                    <option value="">Orders</option>
                                                                    <option value="">Price(high to low)</option>
                                                                    <option value="">Price(low to high)</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-5">
                                                    <div className="orponbd-womens-fashion-category-right-sortt-by-rigght-sec text-right">
                                                        <h4>Right section</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Roww Start */}
                                <div className="row orponbd-womens-fashion-category-exx-pdddrw">
                                    {/* Single product start */}
                                    <div className="orponbd-womens-fashion-category-right-single-product">
                                        <Link to="#">
                                            <div className="besst-seellngg-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                <img src={require('../../../assets/women-fas-cat-1.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="besst-seelng-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="bessttt-selllng-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="besstt-sellng-ttotl-star-rat-count">4.5</span>
                                                    <span className="besst-selling-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="bestt-sell-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="orponbd-womens-fashion-category-right-single-product">
                                        <Link to="#">
                                            <div className="besst-seellngg-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                <img src={require('../../../assets/women-fas-cat-2.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="besst-seelng-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="bessttt-selllng-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="besstt-sellng-ttotl-star-rat-count">4.5</span>
                                                    <span className="besst-selling-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="bestt-sell-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="orponbd-womens-fashion-category-right-single-product">
                                        <Link to="#">
                                            <div className="besst-seellngg-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                <img src={require('../../../assets/women-fas-cat-3.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="besst-seelng-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="bessttt-selllng-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="besstt-sellng-ttotl-star-rat-count">4.5</span>
                                                    <span className="besst-selling-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="bestt-sell-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="orponbd-womens-fashion-category-right-single-product">
                                        <Link to="#">
                                            <div className="besst-seellngg-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                <img src={require('../../../assets/women-fas-cat-4.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="besst-seelng-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="bessttt-selllng-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="besstt-sellng-ttotl-star-rat-count">4.5</span>
                                                    <span className="besst-selling-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="bestt-sell-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="orponbd-womens-fashion-category-right-single-product">
                                        <Link to="#">
                                            <div className="besst-seellngg-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                <img src={require('../../../assets/women-fas-cat-5.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="besst-seelng-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="bessttt-selllng-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="besstt-sellng-ttotl-star-rat-count">4.5</span>
                                                    <span className="besst-selling-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="bestt-sell-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                </div>
                                {/* Single Roww Start */}

                                {/* Single Roww Start */}
                                <div className="row orponbd-womens-fashion-category-exx-pdddrw">
                                    {/* Single product start */}
                                    <div className="orponbd-womens-fashion-category-right-single-product">
                                        <Link to="#">
                                            <div className="besst-seellngg-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                <img src={require('../../../assets/women-fas-cat-6.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="besst-seelng-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="bessttt-selllng-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="besstt-sellng-ttotl-star-rat-count">4.5</span>
                                                    <span className="besst-selling-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="bestt-sell-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="orponbd-womens-fashion-category-right-single-product">
                                        <Link to="#">
                                            <div className="besst-seellngg-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                <img src={require('../../../assets/women-fas-cat-7.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="besst-seelng-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="bessttt-selllng-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="besstt-sellng-ttotl-star-rat-count">4.5</span>
                                                    <span className="besst-selling-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="bestt-sell-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="orponbd-womens-fashion-category-right-single-product">
                                        <Link to="#">
                                            <div className="besst-seellngg-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                <img src={require('../../../assets/women-fas-cat-8.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="besst-seelng-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="bessttt-selllng-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="besstt-sellng-ttotl-star-rat-count">4.5</span>
                                                    <span className="besst-selling-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="bestt-sell-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="orponbd-womens-fashion-category-right-single-product">
                                        <Link to="#">
                                            <div className="besst-seellngg-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                <img src={require('../../../assets/women-fas-cat-9.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="besst-seelng-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="bessttt-selllng-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="besstt-sellng-ttotl-star-rat-count">4.5</span>
                                                    <span className="besst-selling-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="bestt-sell-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="orponbd-womens-fashion-category-right-single-product">
                                        <Link to="#">
                                            <div className="besst-seellngg-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                <img src={require('../../../assets/women-fas-cat-10.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="besst-seelng-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="bessttt-selllng-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="besstt-sellng-ttotl-star-rat-count">4.5</span>
                                                    <span className="besst-selling-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="bestt-sell-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                </div>
                                {/* Single Roww Start */}
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
