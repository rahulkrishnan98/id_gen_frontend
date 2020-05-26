import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import Axios from 'axios';
import { useState, useContext } from 'react';
import UserContext from '../utils/UserContext';
import Auth from '../utils/AuthService';

class OrderForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            designFile: '',
            id_count: 0,
            organizationName: '',
            fieldName: []
        }
    }
    handleImage = event => {
        console.log("event.target");
        this.setState({

            designFile: event.target.files
        })
    }
    handleCount = event => {
        this.setState({
            id_count: event.target.value
        })
    }
    handleOrganizationName = event => {
        this.setState({
            organizationName: event.target.value
        })
    }
    handleFieldName = event => {
        this.setState({
            fieldName: event.target.value
        })
    }
    handleSubmission = e => {
        e.preventDefault();
        console.log(this.state);
        const token = Auth.getAuthHeader();
        const formData = new FormData()
        formData.append('designFile', this.state.designFile[0])
        var fieldName = this.state.fieldName.split(",")
        for (var i = 0; i < fieldName.length; i++) {
            formData.append('fieldName[]', fieldName[i]);
        }

        // Creating that many ID instances
        for (var i = 0; i < int(this.state.id_count); i++) {
            let data = []
            for (var i = 0; i < fieldName.length; i++) {
                data.push("");
            }
            let body = {
                headers: { 'Content-Type': 'application/json' },
                status: "incomplete",
                data: JSON.stringify(data)
            };
            Axios.post("http://localhost:5000/idcards", body, token)
                .then(res => {
                    temp.push(data[-1]);
                    console.log("Success on ID creation");
                }).catch(err => {
                    console.log(err);
                })
        }
        console.log(temp);
        for (var i = 0; i < temp.length; i++) {
            formData.append('orderItem[]', temp[i]);
        }
        formData.append("id_count", this.state.id_count)
        formData.append('organizationName', this.state.organizationName)
        Axios.post("http://localhost:5000/orders/", formData, token)
            .then(res => {
                alert("successfully created Order, Refresh to see changes");
            }).catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                <form>
                    <p><input type="text" value={this.state.id_count} onChange={this.handleCount} placeholder="ID Count"></input></p>
                    <p><input type="text" value={this.state.organizationName} onChange={this.handleOrganizationName} placeholder="organizationName"></input></p>
                    <p><input type="text" value={this.state.fieldName} onChange={this.handleFieldName} placeholder="FieldName"></input></p>
                    <h5> Upload Design</h5>
                    <p><input type="file" onChange={this.handleImage}></input></p>
                    <MDBBtn onClick={e => this.handleSubmission(e)} >Create Order</MDBBtn>
                </form>
            </div>
        )
    }
}
export default OrderForm;