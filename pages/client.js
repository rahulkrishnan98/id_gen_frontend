import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Head from 'next/head';
import Link from 'next/Link';
import React from 'react';
import ReactWizard from "react-bootstrap-wizard";
import { Row, Col } from "reactstrap";
import StepperExample from '../components/wizard';
import ReactDOM from "react-dom";
import Button from 'react-bootstrap/Button';
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";
import Auth from '../utils/AuthService';
import Loading from '../components/loader';

function clientDash({ total }) {
    return (
        <div>
            <div className="full-height">
                <Jumbotron>
                    <h1 style={{ textAlign: "center" }}>Client Dashboard</h1>
                    <br />
                    <div className="container-div">
                        <Container>
                            <Row>
                                <Col sm-6 md-4>
                                    <h3> Verify your design *</h3>
                                    <Jumbotron>

                                    </Jumbotron>
                                </Col>
                                <Col sm-6 md-4>
                                    <h3>Updates</h3>
                                    <Jumbotron>

                                    </Jumbotron>
                                </Col>
                            </Row>
                            <br />
                            <br />
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
                                                <h4>Total Cards </h4>
                                                <Jumbotron>
                                                    <p>{total}</p>
                                                </Jumbotron>
                                            </Col>
                                            <Col sm-4 md-3>
                                                <h4>Pending Cards <MDBIcon far icon="id-card" /></h4>
                                                <Jumbotron>

                                                </Jumbotron>
                                            </Col>
                                        </Row>

                                    </Jumbotron>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <p className="font-italic" style={{ textAlign: "center" }}> *NOTE - If this is not your specified design, please reach back to us.<br /></p>
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

clientDash.getInitialProps = async (ctx) => {
    return { total: 100 }
}
export default clientDash;