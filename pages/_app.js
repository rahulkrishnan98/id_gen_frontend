import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap-wizard/dist/react-wizard.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React from 'react';
import App from 'next/app';
import useContext from 'react';
import Router from 'next/router';
import UserContext from '../utils/UserContext';
import AuthService from '../utils/AuthService';

export default class MyApp extends App {
    state = {
        isLogged: false
    }
    componentDidMount = () => {
        const user = localStorage.getItem('id_token');
        if (user) {
            this.setState({
                isLogged: true
            });
        } else {
            Router.push('/login');
        }
    }
    signIn = (mail, pass) => {
        let credentials = {
            headers: { 'Content-Type': 'application/json' },
            email: mail,
            password: pass
        };
        console.log(credentials);
        AuthService.login(credentials).then(res => {
            if (res.status == 200) {
                localStorage.setItem('id_token', res.data.token);
                this.setState({
                    isLogged: true
                })
                Router.push('/client');
            }
            if (res.status == 401) {
                Router.push('/login');
                alert("Invalid Login");
            }
        });
    }

    signOut = () => {
        localStorage.removeItem('id_token');
        this.setState({
            isLogged: false
        });
        Router.push("/");
    };
    render() {
        const { Component, pageProps } = this.props;
        return (
            <UserContext.Provider value={{ isLogged: this.state.isLogged, signIn: this.signIn, singOut: this.signOut }}>
                <Component {...pageProps} />
            </UserContext.Provider>
        );
    }
}