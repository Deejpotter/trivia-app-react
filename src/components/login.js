import React from 'react';
import { Redirect } from 'react-router-dom';
import netlifyIdentity from 'netlify-identity-widget';

function Login({authorised, from}) {

    return (
        authorised ? (
            <Redirect to={from} />
        ) : (
            <div>
                <p>You must log in to view the page at {from}</p>
                <button onClick={() => {
                    netlifyIdentity.open();
                }}>Log in</button>
            </div>
        )
    );
}

export default Login;