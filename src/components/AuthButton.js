import React, { useContext } from 'react';
import netlifyIdentity from 'netlify-identity-widget';
import Context from './Context';

function AuthButton(props) {

    const { auth } = useContext(Context);

    return (
        auth ? (
            <button onClick={() => netlifyIdentity.logout()}>Sign Out</button>
        ) : (
            <button onClick={() => netlifyIdentity.open()}>Sign In</button>
        )
    );
}

export default AuthButton;