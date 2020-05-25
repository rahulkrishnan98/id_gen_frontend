import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Head from 'next/head'
import React, { useRouter, useEffect } from 'react';
import Router from 'next/router'
import ReactWizard from "react-bootstrap-wizard";
import { Row, Col } from "reactstrap";
import StepperExample from '../components/wizard'
import ReactDOM from "react-dom";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";
import Loading from '../components/loader';
import { useState, useContext } from 'react';
import UserContext from '../utils/UserContext';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Axios from 'axios';
import Auth from '../utils/AuthService';
import OrderForm from '../components/OrderForm';
function adminDash(props) {
    const { role } = useContext(UserContext);
    useEffect(() => {
        if (role === 'user') {
            Router.push('/');
        }
    });
    const { signOut } = useContext(UserContext);
    const redirectMe = e => {
        e.preventDefault();
        signOut();
    };

    return (
        <div>
            <h5 style={{ float: "right" }}><Button type="button" onClick={e => redirectMe(e)} variant='outline-dark'>Log-out</Button> </h5>
            <div className="full-height">
                <Jumbotron>
                    <h1 style={{ textAlign: "center" }}>Admin Dashboard</h1>
                    <br />
                    <div className="container-div">
                        <Container>
                            <Row>
                                <Col sm-6 md-4>
                                    <h3> Start a new Job</h3>
                                    <OrderForm />

                                </Col>
                                <Col sm-6 md-4>
                                    <h3>Client Details</h3>
                                    <Jumbotron>
                                        <div style={{
                                            height: "200px",
                                            overflow: "scroll"
                                        }}>
                                            <Table responsive striped bordered hover variant="dark">
                                                <thead>
                                                    <tr>
                                                        <th><strong>Organization</strong></th>
                                                        <th><strong>Client Code</strong></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {props.clientCode.map((value, index) => {
                                                        return (
                                                            <tr>
                                                                <td>{props.organizationName[index]}</td>
                                                                <td>{props.clientCode[index]}</td>
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Jumbotron>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm-6 md-4>
                                    <h3>Order Dash</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm-8 md-6>
                                    <Jumbotron>
                                        <Row>
                                            <Col sm-4 md-3>
                                                <h4>Create Order <MDBIcon icon="rupee-sign" /></h4>
                                                <Jumbotron>

                                                </Jumbotron>
                                            </Col>
                                            <Col sm-4 md-3>
                                                <h4>Job Status <MDBIcon far icon="id-card" /></h4>
                                                <Jumbotron>
                                                    <div>

                                                    </div>
                                                </Jumbotron>
                                            </Col>
                                        </Row>

                                    </Jumbotron>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Jumbotron>
            </div>
            <style jsx global>{`
                {/* .full-height{
                    text-align: center;
                } */}
            `}
            </style>
        </div>
    )
}

export default adminDash;