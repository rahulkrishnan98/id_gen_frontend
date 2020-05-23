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

function adminDash() {
    const { role } = useContext(UserContext);
    useEffect(() => {
        if (role === 'user') {
            Router.push('/');
        }
    });
    return (
        <div>
            <div className="full-height">
                <Jumbotron>
                    <h1 style={{ textAlign: "center" }}>Admin Dashboard</h1>
                    <br />
                    <div className="container-div">
                        <Container>
                            <Row>
                                <Col sm-6 md-4>
                                    <h3> Upload Client Design</h3>
                                    <p> We store all files indexed by client id. Please save your file as <strong>clientID</strong>.png <br /></p>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroupFileAddon01">
                                                Upload
                                                </span>
                                        </div>
                                        <div className="custom-file">
                                            <input
                                                type="file"
                                                className="custom-file-input"
                                                id="inputGroupFile01"
                                                aria-describedby="inputGroupFileAddon01"
                                            />
                                            <label className="custom-file-label" htmlFor="inputGroupFile01">
                                                clientCode.png
                                                </label>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm-6 md-4>
                                    <h3>Client Updates</h3>
                                    <Jumbotron>

                                    </Jumbotron>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm-6 md-4>
                                    <h3>Order Statistics</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm-8 md-6>
                                    <Jumbotron>
                                        <Row>
                                            <Col sm-4 md-3>
                                                <h4>Total Revenue <MDBIcon icon="rupee-sign" /></h4>
                                                <Jumbotron>

                                                </Jumbotron>
                                            </Col>
                                            <Col sm-4 md-3>
                                                <h4>Total Clients <MDBIcon far icon="id-card" /></h4>
                                                <Jumbotron>

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