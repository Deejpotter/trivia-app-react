import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import netlifyIdentity from 'netlify-identity-widget';
import Context from './Context';



function Login(props) {

    const { auth } = useContext(Context);

    return (
        auth ? (
            <Redirect to="/" />
        ) : (
            <div>
                <p>You must log in to view the page at {props.from}</p>
                <button onClick={() => {
                    netlifyIdentity.open();
                }}>Log in</button>
            </div>
        )
    );
}

export default Login;
