import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Head from 'next/head'
import React from 'react';
import axios from 'axios';
import Router from 'next/router'
import { Row, Col } from "reactstrap";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import Loading from '../components/loader';
import AuthService from '../utils/AuthService';
import { useState, useContext } from 'react';
import UserContext from '../utils/UserContext';

const login = () => {
    const { signIn } = useContext(UserContext);
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [msg, setMsg] = useState('');

    const authenticate = e => {
        e.preventDefault();
        if (mail != '' || pass != '') {
            signIn(mail, pass);
        } else {
            setMessage('Invalid email/Password combination');
        }
    };
    return (
        <div>
            <Jumbotron fluid>
                <div className="hero-cont">
                    <Container>
                        <Row>
                            <Col sm-6 md-4>
                                <MDBContainer>
                                    <MDBRow>
                                        <MDBCol md="6">
                                            <form>
                                                <p className="h5 text-center mb-4">Sign in</p>
                                                <div className="grey-text">
                                                    <MDBInput
                                                        label="email"
                                                        onChange={e => setMail(e.target.value)}
                                                        icon="envelope"
                                                        group type="email"
                                                        validate error="wrong"
                                                        success="right" />
                                                    <MDBInput label="password" onChange={e => setPass(e.target.value)} icon="lock" group type="password" validate />
                                                </div>
                                                <div className="text-center">
                                                    <MDBBtn onClick={e => authenticate(e)} >Login</MDBBtn>
                                                </div>
                                            </form>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBContainer>
                            </Col>
                            <Col sm-6 md-4>
                                <h3>Welcome Dear customer</h3>
                                <p>
                                    Please login here using the <strong>credentials provided</strong> in the email you recieved.
                                                    </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Jumbotron>
            <div className="payment">
                <img src="/pay.png" alt="my image" style={{ width: "40%", height: "30%" }} />
            </div>

            <style jsx global>{`
                .hero-cont{
                    margin: 10%
                }
                .payment{
                    text-align:center;
                    vertical-align: bottom;
                }
            `}
            </style>
        </div >
    );
};
export default login;
