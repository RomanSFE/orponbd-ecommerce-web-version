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
                                    <li><Link to="/womens-fashion">Women's Fashion</Link></li>
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
