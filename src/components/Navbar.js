import React from 'react';
import AuthButton from './AuthButton';
import Navlink from './Navlink';

function Navbar({ authorised }) {
    return (
        <nav>
            <label htmlFor="show-menu">Show Menu</label>
            <input type="checkbox" id="show-menu" role="button" />
            <ul id="menu">
                <AuthButton />
                <Navlink content="Home" location="/" />
                <Navlink content="User" location="/user" />
                <Navlink content="Admin" location="/admin" />
            </ul>
        </nav>
    );
}

export default Navbar;