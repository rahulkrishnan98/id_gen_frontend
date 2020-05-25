import Auth from '../utils/AuthService';
import React from 'react';
import Axios from 'axios';
import { useState, useContext } from 'react';
import UserContext from '../utils/UserContext';
import AdminDash from './admin';
import Loading from '../components/loader';

class AdminWrapper extends React.Component {
    static contextType = UserContext;
    constructor(props) {
        super(props);
        this.state = {
            organizationName: [],
            clientCode: [],
            isLoading: false,
            completed: 0,
            pending: 0
        };
    }
    componentDidMount() {
        this.setState({
            isLoading: true
        });
        const token = Auth.getAuthHeader();
        // Get status of Job
        // 1. Get all ID in order
        // 2. Check all statuses for order
        Axios.get("http://localhost:5000/orders/status", token)
            .then(res => {
                var orgs = [];
                var clientCodes = [];
                console.log(res);
                res.data.all_id.map(order => {
                    orgs.push(order.organizationName);
                    clientCodes.push(order.clientCode);
                });
                this.setState({
                    organizationName: orgs,
                    clientCode: clientCodes
                });
            }).catch(err => {
                console.log(err);
                this.context.signOut();
            });
    }
    render() {
        console.log(this.state);
        if (this.state.isLoading) {
            <Loading />
        }
        return (
            <div>
                <AdminDash
                    clientCode={this.state.clientCode}
                    organizationName={this.state.organizationName}
                />
            </div>

        );
    }
}
export default AdminWrapper;