import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const CustomerAuthRoute = ({ component : Component, ...rest}) => {

    return(
        <Route
            {...rest}

            render={props =>
                rest.loggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/customer-signin",
                            state: {from: props.location}
                        }}
                    />
                )
            }
        />
    )
};

const mapStateToProps = (state) => {
    return{
        customerLoggedIn: state.customerAuth.customerLoggedIn
    }
};

export default connect(mapStateToProps)(CustomerAuthRoute);