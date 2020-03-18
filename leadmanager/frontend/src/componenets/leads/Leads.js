import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { getLeads, deleteLead } from '../../actions/leads';
import Spinner from '../layout/Spinner'

class Leads extends Component {
    static propTypes = {
        getLeads: PropTypes.func.isRequired,
        deleteLead: PropTypes.func.isRequired,
        leads: PropTypes.array.isRequired,
        errors: PropTypes.object.isRequired,
    }

    componentDidMount() {
        this.props.getLeads();
    }
    render() {
        const {errors, leads, deleteLead}  = this.props
        return (
            <Fragment>
                <h2>Leads</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                         {leads.map(lead => (
                            <tr key={lead.id}>
                                <td>{lead.id}</td>
                                <td>{lead.name}</td>
                                <td>{lead.email}</td>
                                <td>{lead.message}</td>
                                <td><button onClick={deleteLead.bind(this, lead.id)} className="btn btn-danger btn-sm">Delete</button> </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}


const mapStateToProps = state => ({
    leads: state.leads.leads,
    errors: state.errors,
})

export default connect(mapStateToProps, {getLeads,deleteLead }) (Leads)