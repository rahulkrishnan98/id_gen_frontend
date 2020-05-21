import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Head from 'next/head'
import React from 'react';
import ReactWizard from "react-bootstrap-wizard";
import { Row, Col } from "reactstrap";
import StepperExample from '../components/wizard'
import ReactDOM from "react-dom";


class GetStarted extends React.Component {
    finishButtonClick(allStates) {
        console.log(allStates);
    }
    render() {
        return (
            <div>
                <Head>
                    <script src="https://unpkg.com/formik/dist/formik.umd.production.js"></script>
                </Head>
                <Jumbotron fluid>
                    <div className="hero-cont">
                        <Container>
                            <h1>
                                Four Step Process
                            </h1>
                            <p>
                                This is a quick walkthrough on getting your first ID card printed.
                            </p>
                        </Container>
                    </div>
                </Jumbotron>
                <div className="stages-cont">
                    <Container>
                        <StepperExample

                        />
                    </Container>
                </div >
                <style jsx>{`
                
                `}</style>
                <style jsx global>{`
                    .stages-cont{
                        text-align: center;
                    }
                    .hero-cont{
                        text-align: center;
                    }
                `}</style>
            </div >
        )
    }

}
export default GetStarted;

