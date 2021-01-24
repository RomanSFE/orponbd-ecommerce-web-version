import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import FooterWebSection from '../../allsections/footerwebsection/FooterWebSection'
import YouAlsoLikeSlider from '../../cart/youalsolikeslider/YouAlsoLikeSlider'
import ProfileTopMenuSection from '../ProfileTopMenuSection'

export default class MyOrders extends Component {
    render() {
        return (
            <>
            <div className="orponbd-womens-fashion-category-page-web-top-menu">
                <ProfileTopMenuSection/>
            </div>

           <div className="obd-profile-account-section-main-profile-section">
               <div className="container">
                   <div className="row">
                       <div className="col-md-2">
                           <div className="obd-profile-account-section-main-profile-left-menu-section-box">
                               <div className="obd-profile-account-section-main-profile-left-menu-sect-itm">
                                    <ul>
                                        <li className="womennsss-main-cattt-wbv"><NavLink to="/my-orders" activeClassName="selectedLink" activeStyle={{color:'#fb4c2c',fontWeight: "bold",}}>My Orders</NavLink></li>
                                        <li><NavLink to="/womens-sub-watchs" activeStyle={{color:'#fb4c2c',fontWeight: "bold",}}>Watches</NavLink></li>
                                        <li><NavLink to="/womens-sub-beauty-and-health" activeStyle={{color:'#fb4c2c',fontWeight: "bold",}}>Beauty & Health</NavLink></li>
                                        <li><NavLink to="/womens-sub-womens-bags" activeStyle={{color:'#fb4c2c',fontWeight: "bold",}}>Women's Bags</NavLink></li>
                                    </ul>
                               </div>
                           </div>
                       </div>
                       <div className="col-md-10">
                           <h2>My Orders</h2>
                       </div>
                   </div>
               </div>
           </div>

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
