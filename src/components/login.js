import React, { useState, useEffect, Redirect } from 'react';

function Login({ authorised, from }) {

    if (authorised) {
        return (<Redirect to={from} />);
    }
}

export default Login;