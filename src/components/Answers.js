import React from 'react';
import netlifyIdentity from 'netlify-identity-widget';

function Answers() {
    const user = netlifyIdentity.currentUser();
    console.log({ user });
    return (
        <React.Fragment>
            <h2>Answers</h2>
            <p>You are logged in as <b>{user.email}</b></p>
        </React.Fragment>
    );
}

export default Answers;