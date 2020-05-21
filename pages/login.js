import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Head from 'next/head'
import React from 'react';
import Router from 'next/router'
import { login } from '../utils/auth';
import { Row, Col } from "reactstrap";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import Loading from '../components/loader';
class signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            load: false,
            rend: false,
            mail: "",
            pass: ""
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        localStorage.clear();
    }


    handleClick = event => {
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "email": this.state.mail,
                "password": this.state.pass
            })
        };
        fetch('http://localhost:5000/user/login', requestOptions)
            .then(response => response.json())
            .then(data => {
                this.setState({ load: data.token, rend: true })
            });
    }
    handleChange1 = ({ target }) => {
        console.log(target)
        this.setState({ mail: target.value });
    };
    handleChange2 = ({ target }) => {
        console.log(target)
        this.setState({ pass: target.value });
    };
    render() {
        console.log("here I am ")
        console.log(this.state);
        if (this.state.rend) {
            <Loading />
        }
        if (this.state.load) {
            Router.push('/client');
        }
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
                                                            onChange={this.handleChange1}
                                                            icon="envelope"
                                                            group type="email"
                                                            validate error="wrong"
                                                            success="right" />
                                                        <MDBInput label="password" onChange={this.handleChange2} icon="lock" group type="password" validate />
                                                    </div>
                                                    <div className="text-center">
                                                        <MDBBtn onClick={this.handleClick} >Login</MDBBtn>
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
        )
    }

}
export default signup;
