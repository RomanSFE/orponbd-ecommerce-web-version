import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import './flashdealdetails.css';

import TopMenuSection from '../../topmenusection/TopMenuSection';
import FooterWebSection from '../../allsections/footerwebsection/FooterWebSection';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default class FlashDealDetails extends Component {
    render() {
        return (
            <>
            <div className="orponbd-womens-fashion-category-page-web-top-menu">
                <TopMenuSection/>
            </div>

            {/* New Arrival Text Section Start */}
            <div className="obd-flash-deal-details-products-top-bg-section">
                <div className="obd-flash-deal-details-products-bg-img">
                    <img src={require('../../../assets/flash-deal-details-sm.png')} alt="orponbd online shop"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="obd-flash-deal-details-products-top-content-box">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="obd-flash-deal-details-products-hed-txt">
                                            <h3>Flash Deals</h3>
                                            <p>Incredible priced items, Limited time to grab </p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="obd-flash-deal-details-products-bg-middle">
                                            <img src={require('../../../assets/flash-deal-details-ils.png')} alt="orponbd online shop"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="obd-best-selling-details-products-bg-right-time">
                                            <h4>Time</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* New Arrival Text Section End */}

            {/* Tabs Products section Start */}
            <div className="tab-sectionnn">
            <Tabs>
                <TabList>
                <Tab>Now</Tab>
                <Tab>Up Coming</Tab>
                </TabList>

                <TabPanel>
                <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
            </div>
            {/* Tabs Products section End */}



            <div className="obd-only-for-best-sellng-details-view-more-buttonn">
                <div className="moreto-love-web-version-view-more-btn text-center">
                    <button>View More <span><i className="fas fa-angle-down"></i></span></button>
                </div>
           </div>

            <div className="orponbd-womens-fashion-category-page-web-top-menu">
                <FooterWebSection/>
            </div>
            </>
        )
    }
}
