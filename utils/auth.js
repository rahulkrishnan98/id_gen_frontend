import React from 'react';
let inMemoryToken;
export default function login({ jwt_token, jwt_token_expiry }, noRedirect) {
    inMemoryToken = {
        token: jwt_token,
        expiry: jwt_token_expiry
    };
    if (!noRedirect) {
        Router.push('/')
    }
}