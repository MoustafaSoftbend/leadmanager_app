import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

class Alert extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    }

    componentDidUpdate(prevProps) {
        const {error, alert, message, isAuthenticated} = this.props;
        if (error !== prevProps.error){
            if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
            if (error.msg.password) alert.error(`Password: ${error.msg.password.join()}`);
            if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
            if (error.msg.message) alert.error(`Message: ${error.msg.message.join()}`);
            if(error.msg.detail && isAuthenticated===false ) alert.error(error.msg.detail);
            if(error.msg.username) alert.error(`Username: ${error.msg.username.join()}`);
            if (error.msg.non_field_errors) alert.error(error.msg.non_field_errors.join());
        }

        if (message !== prevProps.message) {
            if (message.deleteLead) alert.success(message.deleteLead);
            if (message.addLead) alert.success(message.addLead);
            if (message.passwordsNotMatch) alert.error(message.passwordsNotMatch);

        }
    }
    render() {
        return <Fragment />
        
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(withAlert()(Alert));