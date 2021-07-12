import React from 'react';
import netlifyIdentity from 'netlify-identity-widget';
import { Redirect, withRouter } from 'react-router-dom';

function Answers({ authorised, setAuthorised }) {
    const user = netlifyIdentity.currentUser();
    console.log({ user });
    
    return (
        <>
            <h2>Answers</h2>
            <p>You are logged in as <b>{user.email}</b></p>
        </>
    );

}

export default Answers;