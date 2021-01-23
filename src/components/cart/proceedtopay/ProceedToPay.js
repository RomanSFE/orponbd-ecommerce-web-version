import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './proceedtopay.css';

// Tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// Tabs

import TopMenuSection from '../../topmenusection/TopMenuSection';
import FooterWebSection from '../../allsections/footerwebsection/FooterWebSection';
import YouAlsoLikeSlider from '../youalsolikeslider/YouAlsoLikeSlider';

export default class ProceedToPay extends Component {

    // Add New Card
    constructor() {
        super();
        
        this.state = {
          showMenu: false,
        };
        
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
      }
      
      showMenu(event) {
        event.preventDefault();
        
        this.setState({ showMenu: true }, () => {
          document.addEventListener('click', this.closeMenu);
        });
      }
      
      closeMenu() {
        this.setState({ showMenu: false }, () => {
          document.removeEventListener('click', this.closeMenu);
        });
      }
    // Add New Card

    render() {
        return (
            <>
            <div className="orponbd-womens-fashion-category-page-web-top-menu">
                <TopMenuSection/>
            </div>

            {/* Secure text and Timeline start */}
            <div className="my-cart-wv-secute-check-time-line-section-main-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="my-cart-wvsecure-txt-check-time-line-color-boox">
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="my-cart-wv-secute-check-time-line-section-sec-txt">
                                            <img src={require('../../../assets/cart-secure-check-icon.svg')} alt="orponbd online shop"/>
                                            <span>Secere Checkout</span>
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="my-cart-wv-secure-timeline-section-timeline-sec">
                                            {/* Timeline */}
                                            <div className="my-cart-wv-secure-timeline-section-bbox">
                                                <div className="my-cart-wv-secure-timeline-section-bordr proceedto-checkout-wvv"></div>
                                            </div>
                                            <div className="my-cart-wv-secure-timeline-section-bbox-color-box text-center">
                                                <ul>
                                                    <li>
                                                        <div className="my-cart-shoppingg-cart-icon-bbggg shoppinf-color">
                                                            <i className="fas fa-check"></i>
                                                        </div>
                                                        <p className="my-cart-shoppingg-cart-icon-tzxt">Shopping Cart</p>
                                                    </li>
                                                    <li>
                                                        <div className="my-cart-shoppingg-cart-icon-bbggg shoppinf-color">
                                                            <i className="fas fa-check"></i>
                                                        </div>
                                                        <p className="my-cart-shoppingg-cart-icon-tzxt">Place Order</p>
                                                    </li>
                                                    <li>
                                                        <div className="my-cart-shoppingg-cart-icon-bbggg">
                                                            <i className="fas fa-check"></i>
                                                        </div>
                                                        <p>Pay</p>
                                                    </li>
                                                    <li>
                                                        <div className="my-cart-shoppingg-cart-icon-bbggg">
                                                            <i className="fas fa-check"></i>
                                                        </div>
                                                        <p>Completed</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* Timeline */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Secure text and Timeline End */}

            {/* Shopping Cart and Order Summary section start */}
            <div className="my-cart-wv-shoppingcart-order-summary-section-main-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="my-cart-wv-shoppingcart-order-summary-section-content-main-sec">
                                <div className="row">
                                    <div className="col-md-9">
                                        <div className="my-cart-wv-shoppingcart-order-summary-section-content-left-product-lst">
                                           
                                            {/* Shopping Cart color */}
                                            <div className="my-cart-wv-shoppingcart-order-summary-section-content-color-txtt">
                                                <h4>Select Payment Method</h4>
                                                <div className="my-cart-wv-shoppingcart-order-summary-ttxt">
                                                    {/* <span className="my-cart-wv-shoppingcart-order-sum-itm"><span><p><span>7</span> Items</p></span></span> */}
                                                </div>
                                                <div className="my-cart-wv-shoppingcart-order-summary-section-brdrr"></div>
                                            </div>

                                            {/* Shopping Cart Preorder Start ---------------------------PreOrder*/}
                                            <Tabs className="my-cart-wv-shoppingcart-order-payment-method-tabs">
                                                <TabList>
                                                    <Tab>
                                                        <div className="my-cart-wv-shoppingcart-order-payment-method-logo">
                                                            <img src={require('../../../assets/payment-option-credit-card.svg')} alt="orponbd online shop"/>
                                                            <p>Credit/Debit Cards</p>
                                                        </div>
                                                    </Tab>
                                                    <Tab>
                                                        <div className="my-cart-wv-shoppingcart-order-payment-method-logo">
                                                            <img src={require('../../../assets/payment-option-bkash.svg')} alt="orponbd online shop"/>
                                                            <p>Bkash</p>
                                                        </div>
                                                    </Tab>
                                                    <Tab>
                                                        <div className="my-cart-wv-shoppingcart-order-payment-method-logo">
                                                            <img src={require('../../../assets/payment-option-nagad.svg')} alt="orponbd online shop"/>
                                                            <p>Nagad</p>
                                                        </div>
                                                    </Tab>
                                                    <Tab>
                                                        <div className="my-cart-wv-shoppingcart-order-payment-method-logo">
                                                            <img src={require('../../../assets/payment-option-cash-on-delivery.svg')} alt="orponbd online shop"/>
                                                            <p>Cash on Delivery</p>
                                                        </div>
                                                    </Tab>
                                                </TabList>

                                                <TabPanel>
                                                    <div className="my-cart-wv-order-payment-method-input-field-credit-cardd-main-box">
                                                        <div className="my-cart-wv-order-payment-method-input-field-credit-cardd-top-inpt">
                                                            <img src={require('../../../assets/payment-method-american-exp.svg')} alt=""/>
                                                            <span><input type="text" placeholder="Enter Card Number"/></span>
                                                            <span><i className="fas fa-check"></i></span>

                                                            <div className="my-cart-wv-order-payment-method-input-field-cvv-crd">
                                                                <input type="text" placeholder="CVV"/>
                                                            </div>
                                                        </div>

                                                        <div className="my-shopping-cart-proceed-to-pay-add-newcard-sec">
                                                            <div className="my-shopping-cart-proceed-to-pay-add-newcard-btn">
                                                                <button onClick={this.showMenu}>
                                                                    Add New Card <span><i className="fas fa-angle-down"></i></span>
                                                                </button>
                                                                {
                                                                    this.state.showMenu
                                                                        ? (
                                                                        <div className="menu">
                                                                            <button> Menu item 1 </button>
                                                                            <button> Menu item 2 </button>
                                                                            <button> Menu item 3 </button>
                                                                        </div>
                                                                        )
                                                                        : (
                                                                        null
                                                                        )
                                                                    }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </TabPanel>
                                                <TabPanel>
                                                    <div className="my-cart-wv-order-payment-method-input-field-credit-cardd-main-box">
                                                        <div className="classnsmee">
                                                            <p>Bkash</p>
                                                        </div>
                                                    </div>
                                                </TabPanel>
                                                <TabPanel>
                                                    <div className="my-cart-wv-order-payment-method-input-field-credit-cardd-main-box">
                                                        <div className="classnameee">
                                                            <p>Nagad</p>
                                                        </div>
                                                    </div>
                                                </TabPanel>
                                                <TabPanel>
                                                    <div className="my-cart-wv-order-payment-method-input-field-credit-cardd-main-box">
                                                        <div className="claddgsg">
                                                            <p>Cash On Delivery</p>
                                                        </div>
                                                    </div>
                                                </TabPanel>
                                            </Tabs>

                                            <div className="my-cart-wv-shoppingcart-order-total-proceed-to-ckout-btn-wv">
                                                <Link to="/">Pay Now</Link>
                                            </div>
                                            {/* Shopping Cart Preorder End ---------------------------PreOrder End*/}
                                            
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="my-cart-wv-shoppingcart-order-summary-section-content-right-sidebar-fixed">
                                            {/* Order Summary Color */}
                                            <div className="my-cart-wv-shoppingcart-order-summary-section-content-color-txtt-right">
                                                <h4>Order Summary</h4>
                                                <div className="my-cart-wv-shoppingcart-order-summary-section-brdrr-right"></div>
                                            </div>
                                            {/* Order Summary Color */}

                                            {/* Total Subtotal start */}
                                            <div className="my-cart-wv-shoppingcart-order-total-subtotal-main-box">
                                                <div className="my-cart-wv-shoppingcart-order-total-subtotal-single-itm">
                                                    <p>Subtotal</p>
                                                    <span className="my-cart-wv-shoppingcart-order-total-subtotal-amnt-ab"><h3><span>৳</span> 1200</h3></span>
                                                </div>
                                                <div className="my-cart-wv-shoppingcart-order-total-subtotal-single-itm">
                                                    <p>Discount (-)</p>
                                                    <span className="my-cart-wv-shoppingcart-order-total-subtotal-amnt-ab"><h3><span>৳</span> 50</h3></span>
                                                </div>
                                                <div className="my-cart-wv-shoppingcart-order-total-subtotal-single-itm total-itemxs">
                                                    <p>Total <span>(4 Items)</span></p>
                                                    <span className="my-cart-wv-shoppingcart-order-total-subtotal-amnt-ab total-itemxspz"><h3><span>৳</span> 450</h3></span>
                                                </div>
                                            </div>
                                            {/* Total Subtotal end */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Shopping Cart and Order Summary section end */}

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
