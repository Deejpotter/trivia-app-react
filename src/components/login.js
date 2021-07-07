import React, { useState, useEffect, Redirect } from 'react';
import netlifyAuth from './netlifyAuth';

function Login(props) {
    const [authorised, setAuthorised] = useState(false);
    useEffect(() => {
        console.log(authorised);
    }, [authorised])

    let { from } = props.location.state || { from: { pathname: '/' } };

    function login() {
        netlifyAuth.authenticate(() => {
            setAuthorised(true);
        });
    };


    if (authorised) {
        return (<Redirect to={from} />);
    }
    return (
        <div>
            <p>You must log in to view the page at {from.pathname}</p>
            <button onClick={login}>Log in</button>
        </div>
    );
}

export default Login;