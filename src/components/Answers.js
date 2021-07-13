import React from 'react';
import netlifyIdentity from 'netlify-identity-widget';
import { Redirect, withRouter } from 'react-router-dom';

function Answers({ authorised, user }) {

    return (
        authorised ? (
            <>
                <h2>Answers</h2>
                <p>You are logged in as <b>{user.email}</b></p>
            </>
        ) : (
            <Redirect to='/login' />
        )

    );

}

export default Answers;