import React from 'react';
import PropTypes from 'prop-types'
import {Route, Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
import Spinner from '../../layout/Spinner';

const PrivateRoute = ({component: Component, auth, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if(auth.isLoading){
                    return (<Spinner />)
                } else if(!auth.isAuthenticated) {
                    return <Redirect to="/login" />
                }else {
                    return <Component {...props} />
                }
            }}
        />
    )
}

const mapStateToprops = state => ({
    auth: state.auth
})

export default connect(mapStateToprops) (PrivateRoute)