import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './grocerycarticonbox.css';

import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

export default class GroceryCartIconBox extends Component {

    constructor(props) {
        super(props);
        this.state = { visible: false };
    }

    show() {
        this.setState({ visible: true });
    }

    hide() {
        this.setState({ visible: false });
    }
    
    render() {
        return (
            <>
            <div className="grocery-zone-all-itm-fix-cart-box-main-section">
                <div className="grocery-zone-all-itm-fix-cart-box-iconn text-right">
                    <span className="grocery-zone-all-itm-fix-cart-box-iconn-count"><p>14</p></span>
                    <button onClick={this.show.bind(this)}>
                        <img src={require('../../../assets/grocery-fix-cart.png')} alt="orponbd Online Shop"/>
                        <div className="grocery-zone-all-itm-fix-cart-box-iconn-price">
                            <p><span>৳</span> 1200</p>
                        </div>
                    </button>
                </div>
                
                <Rodal animation={"slideRight"} visible={this.state.visible} onClose={this.hide.bind(this)}>
                    <div className="grocery-zone-all-itm-fix-cart-box-main-section-content-box">
                        <div className="grocery-zone-all-itm-fix-cart-box-cart-item-img-top-sec">
                            <div className="grocery-cart-modal-top-inner-secc-wwvv">
                                <img src={require('../../../assets/grocery-fix-cart.png')} alt="orponbd Grocery"/>
                                <span>12 Items</span>
                            </div>
                        </div>

                        <div className="grocery-zone-all-itm-fix-cart-box-item-prod-itl-list-mdl-sec">
                            <h4>product list</h4>
                        </div>

                        <div className="grocery-zone-all-itm-fix-cart-box-item-place-odr-ttl-bottm-sec">
                            <ul>
                                <li><Link>Place Order</Link></li>
                                <li><p>Total <span>৳</span> 1200</p></li>
                            </ul>
                        </div>

                    </div>
                </Rodal>
            </div>
            </>
        )
    }
}
