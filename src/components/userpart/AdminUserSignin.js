import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './adminusersignin.css';

export default class AdminUserSignin extends Component {
    render() {
        return (
            <>
            <div className="obd-admin-dashboard-user-login-main-box text-center mx-auto">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="obd-admin-dashboard-user-login-logo-img">
                                <img src={require('../../assets/signin-logo-img.png')} alt="OrponBD Online shop"/>
                            </div>
                            <div className="obd-admin-dashboard-user-login-form-main-sec">
                                <form action="">
                                    <div className="obd-admin-dashboard-user-login-form-main-sec-content">

                                        <div className="obd-admin-dashboard-user-login-form-input-field">
                                            <input type="email" placeholder="Enter your email"/>
                                        </div>
                                        <div className="obd-admin-dashboard-user-login-form-input-field">
                                            <input type="password" placeholder="Enter your password"/>
                                        </div>

                                        <div className="obd-admin-dashboard-user-login-form-remember-and-forget-sec text-left">
                                            <input type="checkbox"/><span>Remember Me</span>
                                            <Link to="/">Forget your password?</Link>
                                        </div>

                                        <div className="obd-admin-dashboard-user-login-form-signin-btn">
                                            <button type="submit">Sign In</button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="obd-admin-dashboard-user-login-main-box-footer text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="obd-admin-dashboard-user-login-main-box-footer-content">
                                <p>© 2018 - 2021 <span>ORPON BD</span>. All right reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
