import React from 'react';
import { Redirect } from 'react-router-dom';
import netlifyIdentity from 'netlify-identity-widget';

function AuthButton({ authorised }) {

    return (
        authorised ? (
            <button onClick={() => netlifyIdentity.logout}>Sign Out</button>
        ) : (
            <button onClick={() => netlifyIdentity.open}>Sign In</button>
        )
    );
}

export default AuthButton;