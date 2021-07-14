import React, { useContext } from 'react';
import { Redirect, withRouter } from 'react-router-dom';

import Context from './Context';

function Admin(props) {

    const { auth, user } = useContext(Context);

    return (
        auth ? (
            <>
                <h2>Admin</h2>
                <p>You are logged in as <b>{user.email}</b></p>
            </>
        ) : (
            <Redirect to='/login' />
        )

    );

}

export default Admin;