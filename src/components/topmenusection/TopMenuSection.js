import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './topmenusection.css';

export default class TopMenuSection extends Component {
    render() {
        return (
            <>
            {/* Top small Menu  */}
            <div className="orpon-bd-main-web-version-topmenu-small-menu-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="orpon-bd-main-web-version-topmenu-small-menu-left-sse">
                                <p><span><i className="fas fa-phone"></i></span> 01759874611</p>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="orpon-bd-main-web-version-topmenu-small-menu-right-sec text-right">
                                <ul>
                                    <li><Link to="#">Track My Order</Link></li>
                                    <li><Link to="#">Buyer Protection</Link></li>
                                    <li><Link to="#">Help</Link></li>
                                    <li><Link to="#">App</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Top small Menu */}

           
            <div className="orpon-bd-main-web-version-topmenu-section">
                <div className="container">
                    <div className="row orpon-bd-main-web-version-topmenu-section-row-exx-pdd">
                        <div className="col-md-3">
                            <div className="orpon-bd-main-web-version-topmenu-logo-section text-center">
                                <Link to="/">
                                    <img src={require('../../assets/logomain.svg')} alt="OrponBD Online shop"/>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="orpon-bd-main-web-version-topmenu-search-box-sec-main">
                                <div className="orpon-bd-main-web-version-topmenu-serch-cat-sec">
                                    <button>Select Categories <span><i className="fas fa-angle-down"></i></span> </button>
                                </div>
                                <div className="orpon-bd-main-web-version-topmenu-search-boxx">
                                    <input type="search" placeholder="Enter Product Name...."/>
                                    <span><button type="submit"><i className="fas fa-search"></i> Search</button></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="orpon-bd-main-web-version-topmenu-search-right-user-signup-sec">
                                <ul>
                                    <li>
                                        <Link to="/">
                                            <span><img src={require('../../assets/sign-in-profile.png')} alt="OrponBD Online shop"/> Sign in</span>
                                        </Link>
                                    </li>
                                    <li className="orppon-bd-cart-web-abb-sec">
                                        <Link to="">
                                            <img src={require('../../assets/cart-main.png')} alt="OrponBD Online shop"/> <span>10</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu and Category Section start */}
            <div className="orpon-bd-main-web-version-topmenu-menu-and-category-section-box">
                <div className="container">
                    <div className="row orpon-bd-main-web-version-topmenu-menu-extrra-bbtn-ctg">
                        <div className="col-md-3 home-cat-mainn-bbtn-hmmm-ppdf">
                            <div className="category-dropdownn-main-webb-wrap-ctt">
                                <div className="orpon-bd-main-web-version-topmenu-onlyy-web-category">
                                    <button>Categories <span><i className="fas fa-angle-down"></i></span></button>
                                </div>
                                <div className="category-dropdownn-main-webb-cat-content">
                                    <ul>
                                        <li><Link to="#">Category Name 1</Link></li>
                                        <li><Link to="#">Category Name 2 Category Name 3 Category Name 3</Link></li>
                                        <li><Link to="#">Category Name 3</Link></li>
                                        <li><Link to="#">Category Name 4</Link></li>
                                        <li><Link to="#">Category Name 5</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="orpon-bd-main-web-version-topmenu-onlyy-mennnu-web-section">
                                <ul>
                                    <li><Link to="">Home</Link></li>
                                    <li><Link to="">Why Shop With Us</Link></li>
                                    <li><Link to="">11.11 Mega Sale</Link></li>
                                    <li><Link to="">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Menu and Category Section end */}
            </>
        )
    }
}
