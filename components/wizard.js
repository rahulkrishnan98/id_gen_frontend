import React from "react";
import Link from 'next/Link';
import { MDBContainer, MDBRow, MDBCol, MDBStepper, MDBStep, MDBBtn, MDBCard, MDBCardBody, MDBInput } from "mdbreact";

class StepperExample extends React.Component {

    state = {
        formActivePanel3: 1,
        formActivePanel1Changed: false,
    }

    swapFormActive = (a) => (param) => (e) => {
        this.setState({
            ['formActivePanel' + a]: param,
            ['formActivePanel' + a + 'Changed']: true
        });
    }

    handleNextPrevClick = (a) => (param) => (e) => {
        this.setState({
            ['formActivePanel' + a]: param,
            ['formActivePanel' + a + 'Changed']: true
        });
    }


    calculateAutofocus = (a) => {
        if (this.state['formActivePanel' + a + 'Changed']) {
            return true
        }
    }

    render() {
        return (
            <MDBContainer>
                <MDBCard>
                    <MDBCardBody>
                        <MDBRow className="pt-5 justify-content-center">
                            <MDBCol md="2" className="pl-5 pl-md-0 pb-5">
                                <MDBStepper icon vertical>
                                    <MDBStep far icon="image" stepName="Verify Design" onClick={this.swapFormActive(3)(1)} vertical />
                                    <MDBStep icon="pencil-alt" stepName="Initiate Order" onClick={this.swapFormActive(3)(2)} vertical />
                                    <MDBStep far icon="folder-open" stepName="Verify Data" onClick={this.swapFormActive(3)(3)} vertical />
                                    <MDBStep icon="check" stepName="Finish" onClick={this.swapFormActive(3)(4)} vertical />
                                </MDBStepper>
                            </MDBCol>

                            <MDBCol md="7">
                                {this.state.formActivePanel3 === 1 && (
                                    <MDBCol md="12">
                                        <h3 className="font-weight-bold pl-0 my-4">
                                            <strong>Verify Design</strong>
                                        </h3>
                                        <MDBRow>
                                            <MDBCol>
                                                Verify and approve the design before initiating order.
                                                <img src="/click.png" alt="my image" style={{ width: "80%", height: "80%" }} />
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBBtn color="mdb-color" rounded className="float-right" onClick={this.handleNextPrevClick(3)(2)}>
                                            next
                                        </MDBBtn>
                                    </MDBCol>
                                )}
                                {this.state.formActivePanel3 === 2 && (
                                    <MDBCol md="12">
                                        <h3 className="font-weight-bold pl-0 my-4">
                                            <strong>Initiate Order</strong>
                                        </h3>
                                        <MDBRow>
                                            <MDBCol>
                                                Verify and approve the design before initiating order.
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBBtn color="mdb-color" rounded className="float-left" onClick={this.handleNextPrevClick(3)(1)}>
                                            previous
                                        </MDBBtn>
                                        <MDBBtn color="mdb-color" rounded className="float-right" onClick={this.handleNextPrevClick(3)(3)}>
                                            next
                                        </MDBBtn>
                                    </MDBCol>
                                )}
                                {this.state.formActivePanel3 === 3 && (
                                    <MDBCol md="12">
                                        <h3 className="font-weight-bold pl-0 my-4">
                                            <strong>Verify Data</strong>
                                        </h3>
                                        <MDBRow>
                                            <MDBCol>
                                                Verify and approve the design before initiating order.
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBBtn color="mdb-color" rounded className="float-left" onClick={this.handleNextPrevClick(3)(2)}>
                                            previous
                </MDBBtn>
                                        <MDBBtn color="mdb-color" rounded className="float-right" onClick={this.handleNextPrevClick(3)(4)}>
                                            next
                </MDBBtn>
                                    </MDBCol>
                                )}
                                {this.state.formActivePanel3 === 4 && (
                                    <MDBCol md="12">
                                        <h3 className="font-weight-bold pl-0 my-4">
                                            <strong>Finish</strong>
                                        </h3>
                                        <p className="text-center font-weight-bold my-4">
                                            Hold tight! We will ship your order in record time.
                                        </p>
                                        <img src="/track.png" alt="my image" style={{ width: "80%", height: "80%" }} />
                                        <MDBBtn color="mdb-color" rounded className="float-left" onClick={this.handleNextPrevClick(3)(3)}>
                                            previous
                                        </MDBBtn>
                                        <Link href="/signup">
                                            <MDBBtn color="success" rounded className="float-right">
                                                Login
                                        </MDBBtn>
                                        </Link>
                                    </MDBCol>
                                )}
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        );
    };
}

export default StepperExample;