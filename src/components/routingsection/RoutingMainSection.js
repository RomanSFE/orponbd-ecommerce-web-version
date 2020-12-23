import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class RoutingMainSection extends Component {
    render() {
        return (
            <>
            <div className="orponbd-main-routing-section-web-versn-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="orponbd-main-routing-section-web-versn-content">
                                <ul>
                                    <li><Link to="/">Home</Link></li>

                                    {/* Womans Fashion start */}
                                    <li><Link to="/womens-fashion">Women's Fashion</Link></li>
                                    <li><Link to="/womens-sub-watchs">Women's Fashion Watch</Link></li>
                                    <li><Link to="/womens-sub-beauty-and-health">Women's Fashion Beauty and Health</Link></li>
                                    <li><Link to="/womens-sub-womens-bags">Women's Fashion Bags</Link></li>
                                    {/* Womans Fashion End */}

                                    {/* Top Brands Start */}
                                    <li><Link to="/brand-xiaomi">Xiaomi Brand</Link></li>
                                    {/* Top Brands End */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
