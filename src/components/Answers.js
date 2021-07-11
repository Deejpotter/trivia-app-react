import React from 'react';
import netlifyIdentity from 'netlify-identity-widget';

function Answers({Authorised, setAuthorised}) {
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